/* ============================================================
   📧 email-digest.js — Email Digest (FIXED v2 — UTF-8)
   ✅ قائمة الإيميلات + CC + جدولة + معاينة + إرسال
   ✅ استخدام Web3Forms للإرسال الفعلي
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function getSpace(){ return window.space || {}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function uid(){ return 'em_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

  /* ⚠️ استبدل المفتاح بمفتاحك من web3forms.com */
  var WEB3FORMS_KEY = '34fa175f-f38c-4b19-9453-33e4b48de936';

  function ensureDigest(){
    var sp = getSpace();
    if(!sp.emailDigest){
      sp.emailDigest = {
        recipients: [],
        cc: [],
        subjectTemplate: 'Business Dev Digest — {date}',
        schedule: 'weekly',
        sections: ['tasks', 'projects', 'sales', 'budget', 'risks'],
        includeStats: true,
        lastSent: null
      };
    }
    if(!Array.isArray(sp.emailDigest.recipients)) sp.emailDigest.recipients = [];
    if(!Array.isArray(sp.emailDigest.cc)) sp.emailDigest.cc = [];
    if(!Array.isArray(sp.emailDigest.sections)) sp.emailDigest.sections = ['tasks', 'projects', 'sales', 'budget'];
    return sp.emailDigest;
  }

  function renderDigest(){
    var el = document.getElementById('digestBody');
    if(!el) return;
    var d = ensureDigest();

    var html = '';

    /* بطاقة الإعدادات */
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>📧 ' + tr('digest_title') + '</h3></div>' +
      '<p style="font-size:.83rem;color:var(--muted);line-height:1.7;margin-bottom:14px">' + tr('digest_desc') + '</p>' +
      '<div class="grid grid-2" style="gap:12px">' +
        '<div><label style="font-size:.76rem;color:var(--muted);font-weight:600">' + tr('digest_schedule') + '</label>' +
          '<select id="digestSchedule" style="width:100%;background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:10px;border-radius:10px;font-family:inherit;font-size:.85rem;outline:none;margin-top:4px">' +
            '<option value="manual"' + (d.schedule === 'manual' ? ' selected' : '') + '>' + tr('digest_manual') + '</option>' +
            '<option value="daily"' + (d.schedule === 'daily' ? ' selected' : '') + '>' + tr('digest_daily') + '</option>' +
            '<option value="weekly"' + (d.schedule === 'weekly' ? ' selected' : '') + '>' + tr('digest_weekly') + '</option>' +
            '<option value="monthly"' + (d.schedule === 'monthly' ? ' selected' : '') + '>' + tr('digest_monthly') + '</option>' +
          '</select>' +
        '</div>' +
        '<div><label style="font-size:.76rem;color:var(--muted);font-weight:600">' + tr('digest_subject') + '</label>' +
          '<input id="digestSubject" value="' + esc(d.subjectTemplate) + '" style="width:100%;background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:10px;border-radius:10px;font-family:inherit;font-size:.85rem;outline:none;margin-top:4px">' +
        '</div>' +
      '</div>' +
    '</div>';

    /* الأقسام */
    var allSections = [
      {k:'tasks',      l: tr('digest_sec_tasks'),      i:'📝'},
      {k:'projects',   l: tr('digest_sec_projects'),   i:'💼'},
      {k:'sales',      l: tr('digest_sec_sales'),      i:'💰'},
      {k:'budget',     l: tr('digest_sec_budget'),     i:'💵'},
      {k:'risks',      l: tr('digest_sec_risks'),      i:'⚠️'},
      {k:'milestones', l: tr('digest_sec_milestones'), i:'🎯'},
      {k:'notes',      l: tr('digest_sec_notes'),      i:'📔'}
    ];
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>📋 ' + tr('digest_sections') + '</h3></div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px">';
    allSections.forEach(function(s){
      var checked = d.sections.indexOf(s.k) > -1;
      html += '<label style="display:flex;align-items:center;gap:10px;padding:11px 13px;background:var(--bg2);border:1px solid var(--border);border-radius:10px;cursor:pointer">' +
        '<input type="checkbox" data-digest-sec="' + s.k + '" ' + (checked ? 'checked' : '') + ' style="width:18px;height:18px;accent-color:var(--cyan);cursor:pointer">' +
        '<span style="font-size:1.1rem">' + s.i + '</span>' +
        '<span style="font-size:.85rem;font-weight:600">' + s.l + '</span>' +
      '</label>';
    });
    html += '</div></div>';

    /* المستلمون */
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>👥 ' + tr('digest_recipients') + ' (' + d.recipients.length + ')</h3>' +
        '<button class="btn btn-sm" id="digestAddRecipient">' + tr('digest_add_recipient') + '</button></div>';
    if(!d.recipients.length){
      html += '<div style="text-align:center;padding:16px;color:var(--muted2);font-size:.8rem">' + tr('digest_no_recipients') + '</div>';
    } else {
      html += '<div style="display:flex;flex-direction:column;gap:8px">';
      d.recipients.forEach(function(r){
        html += '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg2);border:1px solid var(--border);border-radius:10px">' +
          '<div style="width:36px;height:36px;border-radius:10px;background:var(--grad);display:flex;align-items:center;justify-content:center;color:#0b0f1a;font-weight:800;flex-shrink:0">' + esc((r.name || r.email || '?').charAt(0).toUpperCase()) + '</div>' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-size:.85rem;font-weight:700">' + esc(r.name || tr('digest_no_name')) + '</div>' +
            '<div style="font-size:.72rem;color:var(--muted);direction:ltr;text-align:start;overflow:hidden;text-overflow:ellipsis">' + esc(r.email) + '</div>' +
          '</div>' +
          '<button class="btn btn-sm btn-ghost" data-digest-edit-rec="' + r.id + '">✏️</button>' +
          '<button class="btn btn-sm btn-danger" data-digest-del-rec="' + r.id + '">🗑</button>' +
        '</div>';
      });
      html += '</div>';
    }
    html += '</div>';

    /* CC */
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>📎 CC (' + d.cc.length + ')</h3>' +
        '<button class="btn btn-sm btn-ghost" id="digestAddCC">' + tr('digest_add_cc') + '</button></div>';
    if(!d.cc.length){
      html += '<div style="text-align:center;padding:16px;color:var(--muted2);font-size:.8rem">' + tr('digest_no_cc') + '</div>';
    } else {
      html += '<div style="display:flex;flex-direction:column;gap:8px">';
      d.cc.forEach(function(r){
        html += '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg2);border:1px solid var(--border);border-radius:10px">' +
          '<div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,var(--amber),var(--purple));display:flex;align-items:center;justify-content:center;color:#0b0f1a;font-weight:800;flex-shrink:0">' + esc((r.name || r.email || '?').charAt(0).toUpperCase()) + '</div>' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-size:.85rem;font-weight:700">' + esc(r.name || tr('digest_no_name')) + '</div>' +
            '<div style="font-size:.72rem;color:var(--muted);direction:ltr;text-align:start;overflow:hidden;text-overflow:ellipsis">' + esc(r.email) + '</div>' +
          '</div>' +
          '<button class="btn btn-sm btn-ghost" data-digest-edit-cc="' + r.id + '">✏️</button>' +
          '<button class="btn btn-sm btn-danger" data-digest-del-cc="' + r.id + '">🗑</button>' +
        '</div>';
      });
      html += '</div>';
    }
    html += '</div>';

    /* المعاينة والإجراءات */
    html += '<div class="card">' +
      '<div class="card-head"><h3>👁️ ' + tr('digest_preview') + '</h3>' +
        '<button class="btn btn-sm btn-ghost" id="digestRefreshPreview">🔄 ' + tr('digest_refresh') + '</button></div>' +
      '<div id="digestPreviewBody" style="padding:14px;background:var(--bg2);border-radius:10px;font-size:.82rem;line-height:1.7;max-height:400px;overflow-y:auto;white-space:pre-wrap;font-family:inherit"></div>' +
      '<div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap">' +
        '<button class="btn" id="digestSend">' + tr('digest_send') + '</button>' +
        '<button class="btn btn-ghost" id="digestCopyBody">' + tr('digest_copy_body') + '</button>' +
      '</div>' +
    '</div>';

    el.innerHTML = html;

    /* Bindings */
    var sched = document.getElementById('digestSchedule');
    if(sched) sched.onchange = function(){ d.schedule = sched.value; if(window.saveSpace) window.saveSpace(); toast(tr('digest_saved'), 'success', 1200); };
    var subj = document.getElementById('digestSubject');
    if(subj) subj.oninput = function(){ d.subjectTemplate = subj.value; if(window.saveSpace) window.saveSpace(); };
    document.querySelectorAll('[data-digest-sec]').forEach(function(cb){
      cb.onchange = function(){
        var k = cb.dataset.digestSec;
        var idx = d.sections.indexOf(k);
        if(cb.checked && idx === -1) d.sections.push(k);
        else if(!cb.checked && idx > -1) d.sections.splice(idx, 1);
        if(window.saveSpace) window.saveSpace();
        renderPreview();
      };
    });
    var addRec = document.getElementById('digestAddRecipient');
    if(addRec) addRec.onclick = function(){ addEmail(d, 'recipients'); };
    var addCC = document.getElementById('digestAddCC');
    if(addCC) addCC.onclick = function(){ addEmail(d, 'cc'); };
    document.querySelectorAll('[data-digest-edit-rec]').forEach(function(b){
      b.onclick = function(){ editEmail(d, 'recipients', b.dataset.digestEditRec); };
    });
    document.querySelectorAll('[data-digest-del-rec]').forEach(function(b){
      b.onclick = function(){
        window.customConfirm(tr('digest_delete_confirm'), function(){
          d.recipients = d.recipients.filter(function(x){ return x.id !== b.dataset.digestDelRec; });
          if(window.saveSpace) window.saveSpace();
          renderDigest();
        });
      };
    });
    document.querySelectorAll('[data-digest-edit-cc]').forEach(function(b){
      b.onclick = function(){ editEmail(d, 'cc', b.dataset.digestEditCc); };
    });
    document.querySelectorAll('[data-digest-del-cc]').forEach(function(b){
      b.onclick = function(){
        window.customConfirm(tr('digest_delete_confirm'), function(){
          d.cc = d.cc.filter(function(x){ return x.id !== b.dataset.digestDelCc; });
          if(window.saveSpace) window.saveSpace();
          renderDigest();
        });
      };
    });
    var refBtn = document.getElementById('digestRefreshPreview');
    if(refBtn) refBtn.onclick = function(){ renderPreview(); toast(tr('digest_refreshed'), 'info', 1200); };
    var copyBtn = document.getElementById('digestCopyBody');
    if(copyBtn) copyBtn.onclick = function(){
      var body = buildEmailBody();
      if(navigator.clipboard) navigator.clipboard.writeText(body).then(function(){ toast(tr('copied'), 'success'); });
    };
    var sendBtn = document.getElementById('digestSend');
    if(sendBtn) sendBtn.onclick = function(){ sendDigest(d); };

    renderPreview();
  }

  function renderPreview(){
    var body = document.getElementById('digestPreviewBody');
    if(!body) return;
    body.textContent = buildEmailBody();
  }

  function addEmail(d, listKey){
    window.showModal(listKey === 'recipients' ? tr('digest_new_recipient') : tr('digest_new_cc'), [
      {key:'name', label: tr('digest_name')},
      {key:'email', label: tr('digest_email')}
    ], {name:'', email:''}, function(data){
      if(!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) return toast(tr('digest_email_invalid'), 'warn');
      d[listKey].push({id: uid(), name: data.name, email: data.email});
      if(window.saveSpace) window.saveSpace();
      renderDigest();
      toast(tr('digest_saved'), 'success');
    });
  }

  function editEmail(d, listKey, id){
    var item = d[listKey].find(function(x){ return x.id === id; });
    if(!item) return;
    window.showModal(tr('edit'), [
      {key:'name', label: tr('digest_name')},
      {key:'email', label: tr('digest_email')}
    ], item, function(data){
      if(!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) return toast(tr('digest_email_invalid'), 'warn');
      item.name = data.name; item.email = data.email;
      if(window.saveSpace) window.saveSpace();
      renderDigest();
      toast(tr('digest_saved'), 'success');
    }, function(){
      window.customConfirm(tr('digest_delete_confirm'), function(){
        d[listKey] = d[listKey].filter(function(x){ return x.id !== id; });
        if(window.saveSpace) window.saveSpace();
        renderDigest();
      });
    });
  }

  /* ============ Build body ============ */
  function buildEmailBody(){
    var d = ensureDigest();
    var sp = getSpace();
    var lang = window.i18n ? window.i18n.getLang() : 'ar';
    var name = (sp.profile && sp.profile.name) || '';
    var lines = [];
    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    lines.push('💼 ' + tr('brand') + (name ? ' — ' + name : ''));
    lines.push('📅 ' + new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {weekday:'long', year:'numeric', month:'long', day:'numeric'}));
    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    lines.push('');

    if(d.includeStats){
      var projects = (sp.projects || []).length;
      var pendingTasks = (sp.tasks || []).filter(function(t){ return !t.done; }).length;
      var deals = (sp.salesPipeline || []).length;
      lines.push('📊 ' + tr('digest_summary') + ':');
      lines.push('  • ' + tr('dash_projects_label') + ': ' + projects);
      lines.push('  • ' + tr('dash_pending_tasks') + ': ' + pendingTasks);
      lines.push('  • ' + tr('dash_deals') + ': ' + deals);
      lines.push('');
    }

    if(d.sections.indexOf('tasks') > -1){
      var pending = (sp.tasks || []).filter(function(t){ return !t.done; }).slice(0, 10);
      if(pending.length){
        lines.push('📝 ' + tr('digest_sec_tasks') + ':');
        pending.forEach(function(t){
          lines.push('  • ' + t.title + (t.due ? ' (' + t.due + ')' : ''));
        });
        lines.push('');
      }
    }

    if(d.sections.indexOf('projects') > -1){
      var projects = (sp.projects || []).slice(0, 8);
      if(projects.length){
        lines.push('💼 ' + tr('digest_sec_projects') + ':');
        projects.forEach(function(p){
          var stage = (window.PRISM_STAGES || {})[p.stage] || {name:'—'};
          var stageName = lang === 'en' ? (stage.nameEn || stage.name) : stage.name;
          lines.push('  • ' + p.name + ' — ' + stageName);
        });
        lines.push('');
      }
    }

    if(d.sections.indexOf('sales') > -1){
      var deals = (sp.salesPipeline || []).slice(0, 8);
      if(deals.length){
        lines.push('💰 ' + tr('digest_sec_sales') + ':');
        deals.forEach(function(x){
          var stage = (window.PIPELINE_STAGES || {})[x.stage] || {name:'—'};
          var stageName = lang === 'en' ? (stage.nameEn || stage.name) : stage.name;
          lines.push('  • ' + x.client + ' — ' + stageName + ' (' + (parseFloat(x.value)||0).toFixed(0) + ' ' + (x.currency||'') + ')');
        });
        lines.push('');
      }
    }

    if(d.sections.indexOf('budget') > -1){
      var inc = (sp.budget || []).filter(function(b){ return b.type === 'income'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
      var exp = (sp.budget || []).filter(function(b){ return b.type === 'expense'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
      if(inc || exp){
        lines.push('💵 ' + tr('digest_sec_budget') + ':');
        lines.push('  • ' + tr('budget_total_income') + ': ' + inc.toFixed(0));
        lines.push('  • ' + tr('budget_total_expense') + ': ' + exp.toFixed(0));
        lines.push('  • ' + tr('budget_balance') + ': ' + (inc - exp).toFixed(0));
        lines.push('');
      }
    }

    if(d.sections.indexOf('risks') > -1){
      var risks = [];
      (sp.projects || []).forEach(function(p){
        (p.risks || []).forEach(function(r){
          if(r.status !== 'closed') risks.push({proj: p.name, risk: r});
        });
      });
      if(risks.length){
        lines.push('⚠️ ' + tr('digest_sec_risks') + ':');
        risks.slice(0, 8).forEach(function(x){
          var sev = (x.risk.probability||0) * (x.risk.impact||0);
          lines.push('  • [' + x.proj + '] ' + x.risk.title + ' (P×I=' + sev + ')');
        });
        lines.push('');
      }
    }

    if(d.sections.indexOf('milestones') > -1){
      var ms = [];
      (sp.projects || []).forEach(function(p){
        (p.milestones || []).forEach(function(m){
          if(m.status === 'in-progress' || m.status === 'delayed') ms.push({proj: p.name, ms: m});
        });
      });
      if(ms.length){
        lines.push('🎯 ' + tr('digest_sec_milestones') + ':');
        ms.slice(0, 8).forEach(function(x){
          lines.push('  • [' + x.proj + '] ' + x.ms.title + ' — ' + (x.ms.progress||0) + '%');
        });
        lines.push('');
      }
    }

    if(d.sections.indexOf('notes') > -1){
      var notes = (sp.notes || []).slice(0, 5);
      if(notes.length){
        lines.push('📔 ' + tr('digest_sec_notes') + ':');
        notes.forEach(function(n){
          lines.push('  • ' + (n.title || tr('digest_no_title')));
        });
        lines.push('');
      }
    }

    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    lines.push('💼 ' + tr('brand') + ' — ' + tr('digest_footer'));
    return lines.join('\n');
  }

  /* ============ Send ============ */
  function sendDigest(d){
    if(!d.recipients.length && !d.cc.length){
      return toast(tr('digest_no_recipients'), 'warn', 2500);
    }

    if(!WEB3FORMS_KEY || WEB3FORMS_KEY.indexOf('REPLACE') > -1){
      return sendViaMailto(d);
    }

    var to = d.recipients.map(function(r){ return r.email; }).join(',');
    var cc = d.cc.map(function(r){ return r.email; }).join(',');
    var lang = window.i18n ? window.i18n.getLang() : 'ar';
    var subject = d.subjectTemplate.replace('{date}', new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US'));
    var body = buildEmailBody();

    var payload = {
      access_key: WEB3FORMS_KEY,
      subject: subject,
      from_name: tr('brand'),
      replyto: (window.space && window.space.profile && window.space.profile.email) || '',
      to: to,
      cc: cc || undefined,
      message: body,
      botcheck: false
    };

    var sendBtn = document.getElementById('digestSend');
    if(sendBtn){ sendBtn.disabled = true; sendBtn.textContent = '⏳ ' + (lang === 'en' ? 'Sending...' : 'جاري الإرسال...'); }

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(function(res){ return res.json(); })
    .then(function(data){
      if(data.success){
        d.lastSent = new Date().toISOString();
        if(window.saveSpace) window.saveSpace();
        toast(lang === 'en' ? '✅ Email sent!' : '✅ تم إرسال البريد!', 'success', 3500);
      } else {
        toast('❌ ' + (data.message || 'Send failed'), 'warn', 3500);
      }
    })
    .catch(function(err){
      console.error('Email send error:', err);
      toast('❌ ' + (lang === 'en' ? 'Network error' : 'خطأ في الشبكة'), 'warn', 3500);
    })
    .finally(function(){
      if(sendBtn){ sendBtn.disabled = false; sendBtn.textContent = tr('digest_send'); }
    });
  }

  function sendViaMailto(d){
    var to = d.recipients.map(function(r){ return r.email; }).join(',');
    var cc = d.cc.map(function(r){ return r.email; }).join(',');
    var lang = window.i18n ? window.i18n.getLang() : 'ar';
    var subject = d.subjectTemplate.replace('{date}', new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US'));
    var body = buildEmailBody();

    var url = 'mailto:' + encodeURIComponent(to) +
      '?subject=' + encodeURIComponent(subject) +
      (cc ? '&cc=' + encodeURIComponent(cc) : '') +
      '&body=' + encodeURIComponent(body);

    d.lastSent = new Date().toISOString();
    if(window.saveSpace) window.saveSpace();
    window.location.href = url;
    toast(tr('digest_opened'), 'success', 3000);
  }

  /* ============ Install ============ */
  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._digestInstalled) return;
    window._digestInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'digest') setTimeout(renderDigest, 100);
      return r;
    };
  }

  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'digest') renderDigest();
  });

  window.renderDigest = renderDigest;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('📧 Email Digest loaded (FIXED v2 — UTF-8)');
})();