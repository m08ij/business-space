/* ============================================================
   ⚠️ risk-register.js — Risk Register + Matrix
   سجل المخاطر + مصفوفة الاحتمالية × التأثير
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function getSpace(){ return window.space || {projects:[]}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function uid(){ return 'risk_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

  var currentProject = null;

  var LEVELS = ['', 'veryLow', 'low', 'medium', 'high', 'veryHigh'];
  var SEVERITY = {
    1: {name:'منخفض جداً', nameEn:'Very Low',  color:'#10b981'},
    2: {name:'منخفض',      nameEn:'Low',       color:'#34d399'},
    3: {name:'متوسط',      nameEn:'Medium',    color:'#fbbf24'},
    4: {name:'عالي',       nameEn:'High',      color:'#f97316'},
    5: {name:'عالي جداً',  nameEn:'Very High', color:'#ef4444'}
  };

  function getSeverityColor(p, i){
    var s = p * i;
    if(s <= 4) return '#10b981';
    if(s <= 9) return '#fbbf24';
    if(s <= 15) return '#f97316';
    return '#ef4444';
  }
  function getSeverityLevel(p, i){
    var s = p * i;
    if(s <= 4) return tr('risk_low');
    if(s <= 9) return tr('risk_medium');
    if(s <= 15) return tr('risk_high');
    return tr('risk_critical');
  }

  /* ============ Main ============ */
  function renderRisks(){
    var el = document.getElementById('risksBody');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];

    if(!projects.length){
      el.innerHTML = '<div class="empty"><div class="ic">⚠️</div><p>' + tr('roadmap_no_projects') + '</p><p class="sub">' + tr('roadmap_no_projects_sub') + '</p></div>';
      return;
    }
    if(window.ProjectContext){ window.ProjectContext.ensureValid(); currentProject = window.ProjectContext.getCurrent(); }
    if(!currentProject) currentProject = projects[0].id;

    var html = '<div class="controls">';
    projects.forEach(function(p){
      var active = currentProject === p.id;
      html += '<button class="chip' + (active ? ' active' : '') + '" data-risk-select="' + p.id + '">' + (active ? '✓ ' : '') + esc(p.name) + '</button>';
    });
    html += '</div>';

    var project = projects.find(function(p){ return p.id === currentProject; });
    if(!project){ el.innerHTML = html; return; }

    if(!Array.isArray(project.risks)) project.risks = [];

    // Stats
    var stats = computeStats(project.risks);
    html += '<div class="grid grid-4" style="margin-bottom:16px">' +
      '<div class="stat"><div class="ic">⚠️</div><div><div class="v">' + stats.total + '</div><div class="l">' + tr('risk_total') + '</div></div></div>' +
      '<div class="stat"><div class="ic">🔴</div><div><div class="v" style="color:var(--red)">' + stats.critical + '</div><div class="l">' + tr('risk_critical') + '</div></div></div>' +
      '<div class="stat"><div class="ic">🟡</div><div><div class="v" style="color:var(--amber)">' + stats.medium + '</div><div class="l">' + tr('risk_medium') + '</div></div></div>' +
      '<div class="stat"><div class="ic">🟢</div><div><div class="v" style="color:var(--green)">' + stats.low + '</div><div class="l">' + tr('risk_low') + '</div></div></div>' +
    '</div>';

    // Toolbar
    html += '<div class="controls">' +
      '<button class="btn" id="riskAdd">' + tr('risk_add') + '</button>' +
      '<button class="btn btn-ghost" id="riskExport">📤 ' + tr('export') + '</button>' +
    '</div>';

    // Matrix
    if(project.risks.length){
      html += renderMatrix(project.risks);
    }

    // List
    if(!project.risks.length){
      html += '<div class="empty" style="margin-top:16px"><div class="ic">⚠️</div><p>' + tr('risk_empty') + '</p><p class="sub">' + tr('risk_empty_sub') + '</p></div>';
    } else {
      html += '<div style="margin-top:20px"><h3 style="font-size:.95rem;margin-bottom:12px;color:var(--cyan)">' + tr('risk_list') + '</h3>';
      html += renderList(project.risks);
      html += '</div>';
    }

    el.innerHTML = html;

    el.querySelectorAll('[data-risk-select]').forEach(function(b){
      b.onclick = function(){
        if(window.ProjectContext) window.ProjectContext.setCurrent(b.dataset.riskSelect);
        else { currentProject = b.dataset.riskSelect; renderRisks(); }
      };
    });
    var addBtn = document.getElementById('riskAdd');
    if(addBtn) addBtn.onclick = function(){ addRisk(project); };
    var expBtn = document.getElementById('riskExport');
    if(expBtn) expBtn.onclick = function(){ exportRisks(project); };
    bindListActions(project);
  }

  function computeStats(risks){
    var stats = {total: risks.length, critical:0, medium:0, low:0};
    risks.forEach(function(r){
      var s = (r.probability || 0) * (r.impact || 0);
      if(s > 15) stats.critical++;
      else if(s > 9) stats.medium++;
      else stats.low++;
    });
    return stats;
  }

  /* ============ Matrix ============ */
  function renderMatrix(risks){
    // 5x5 grid - rows = probability (5 top to 1 bottom), cols = impact (1 left to 5 right)
    var html = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>📊 ' + tr('risk_matrix') + '</h3></div>' +
      '<div style="display:flex;gap:8px;align-items:flex-start;overflow-x:auto">';

    // Y axis labels + matrix
    html += '<div style="display:flex;flex-direction:column;justify-content:center;padding-top:22px;gap:0">';
    for(var p = 5; p >= 1; p--){
      html += '<div style="height:60px;display:flex;align-items:center;justify-content:flex-end;padding-inline-end:8px;font-size:.68rem;color:var(--muted);font-weight:700">' + tr('risk_p' + p) + '</div>';
    }
    html += '</div>';

    // Grid
    html += '<div style="flex:1;min-width:300px">';
    // X axis header
    html += '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:2px;margin-bottom:4px">';
    for(var i = 1; i <= 5; i++){
      html += '<div style="text-align:center;font-size:.68rem;color:var(--muted);font-weight:700">' + tr('risk_i' + i) + '</div>';
    }
    html += '</div>';

    // Grid cells
    html += '<div style="display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(5,60px);gap:2px">';
    for(var pp = 5; pp >= 1; pp--){
      for(var ii = 1; ii <= 5; ii++){
        var cellRisks = risks.filter(function(r){ return (r.probability||0) === pp && (r.impact||0) === ii; });
        var color = getSeverityColor(pp, ii);
        html += '<div style="background:' + color + '25;border:1px solid ' + color + '60;border-radius:6px;position:relative;overflow:hidden;padding:4px;display:flex;flex-wrap:wrap;gap:2px;align-content:flex-start" title="P:' + pp + ' × I:' + ii + ' = ' + (pp*ii) + '">';
        cellRisks.forEach(function(r){
          html += '<div data-risk-view="' + r.id + '" style="width:14px;height:14px;border-radius:50%;background:' + color + ';cursor:pointer;font-size:.55rem;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900" title="' + esc(r.title) + '">!</div>';
        });
        html += '</div>';
      }
    }
    html += '</div>';

    // X axis label
    html += '<div style="text-align:center;font-size:.7rem;color:var(--muted);margin-top:8px;font-weight:700">' + tr('risk_impact') + ' →</div>';
    html += '</div>';

    // Y axis label (rotated)
    html += '<div style="display:flex;align-items:center;justify-content:center;padding-inline-start:4px"><div style="writing-mode:vertical-rl;transform:rotate(180deg);font-size:.7rem;color:var(--muted);font-weight:700">' + tr('risk_probability') + ' →</div></div>';

    html += '</div>';

    // Legend
    html += '<div style="display:flex;justify-content:center;gap:14px;margin-top:14px;flex-wrap:wrap;font-size:.7rem">';
    html += '<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;background:#10b981;border-radius:3px"></span>' + tr('risk_low') + '</span>';
    html += '<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;background:#fbbf24;border-radius:3px"></span>' + tr('risk_medium') + '</span>';
    html += '<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;background:#f97316;border-radius:3px"></span>' + tr('risk_high') + '</span>';
    html += '<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;background:#ef4444;border-radius:3px"></span>' + tr('risk_critical') + '</span>';
    html += '</div>';

    html += '</div>';
    return html;
  }

  /* ============ List ============ */
  function renderList(risks){
    var sorted = risks.slice().sort(function(a,b){
      return ((b.probability||0)*(b.impact||0)) - ((a.probability||0)*(a.impact||0));
    });
    var html = '';
    sorted.forEach(function(r){
      var sev = (r.probability||0) * (r.impact||0);
      var color = getSeverityColor(r.probability||0, r.impact||0);
      var level = getSeverityLevel(r.probability||0, r.impact||0);
      var cat = (window.RISK_TYPES || {})[r.category] || {name: r.category, nameEn: r.category, icon:'❓', color:'var(--muted)'};
      var lang = window.i18n ? window.i18n.getLang() : 'ar';
      var catLabel = lang === 'en' ? (cat.nameEn || cat.name) : cat.name;
      var statusIcon = r.status === 'closed' ? '✅' : (r.status === 'mitigating' ? '🛠️' : '🔴');
      html += '<div class="card" style="margin-bottom:10px;border-inline-start:3px solid ' + color + '">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-weight:800;font-size:.92rem">' + statusIcon + ' ' + esc(r.title) + '</div>' +
            '<div style="font-size:.7rem;color:var(--muted2);margin-top:3px">' + cat.icon + ' ' + catLabel + (r.owner ? ' · 👤 ' + esc(r.owner) : '') + '</div>' +
          '</div>' +
          '<div style="text-align:center;min-width:60px">' +
            '<div style="font-size:1.2rem;font-weight:800;color:' + color + '">' + sev + '</div>' +
            '<div style="font-size:.6rem;color:var(--muted);font-weight:700">' + level + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;gap:10px;font-size:.74rem;color:var(--muted);margin-bottom:8px;flex-wrap:wrap">' +
          '<span>📈 ' + tr('risk_p') + ': <b style="color:' + color + '">' + (r.probability||0) + '/5</b></span>' +
          '<span>💥 ' + tr('risk_i') + ': <b style="color:' + color + '">' + (r.impact||0) + '/5</b></span>' +
        '</div>' +
        (r.desc ? '<div style="font-size:.76rem;color:var(--muted);padding:6px 8px;background:var(--bg2);border-radius:8px;margin-bottom:6px">' + esc(r.desc) + '</div>' : '') +
        (r.mitigation ? '<div style="font-size:.76rem;color:var(--green);padding:6px 8px;background:rgba(52,211,153,.08);border-radius:8px;border:1px solid rgba(52,211,153,.2);margin-bottom:6px"><b>🛡️ ' + tr('risk_mitigation') + ':</b> ' + esc(r.mitigation) + '</div>' : '') +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
          '<button class="btn btn-sm btn-ghost" data-risk-view2="' + r.id + '">👁️ ' + tr('view') + '</button>' +
          '<button class="btn btn-sm btn-ghost" data-risk-edit="' + r.id + '">✏️</button>' +
          '<button class="btn btn-sm btn-danger" data-risk-del="' + r.id + '">🗑</button>' +
        '</div>' +
      '</div>';
    });
    return html;
  }

  function bindListActions(project){
    document.querySelectorAll('[data-risk-view]').forEach(function(b){
      b.onclick = function(){ viewRisk(project, b.dataset.riskView); };
    });
    document.querySelectorAll('[data-risk-view2]').forEach(function(b){
      b.onclick = function(){ viewRisk(project, b.dataset.riskView2); };
    });
    document.querySelectorAll('[data-risk-edit]').forEach(function(b){
      b.onclick = function(){ editRisk(project, b.dataset.riskEdit); };
    });
    document.querySelectorAll('[data-risk-del]').forEach(function(b){
      b.onclick = function(){
        window.customConfirm(tr('risk_delete_confirm'), function(){
          project.risks = project.risks.filter(function(x){ return x.id !== b.dataset.riskDel; });
          if(window.saveSpace) window.saveSpace();
          renderRisks();
          toast(tr('risk_deleted'), 'success');
        });
      };
    });
  }

  /* ============ CRUD ============ */
  function getCategoryOptions(){
    var opts = [];
    Object.keys(window.RISK_TYPES || {}).forEach(function(k){
      var c = window.RISK_TYPES[k];
      opts.push({v:k, l: c.icon + ' ' + c.name});
    });
    return opts;
  }

  function addRisk(project){
    window.showModal(tr('risk_new'), [
      {key:'title', label: tr('risk_title')},
      {key:'desc', label: tr('risk_desc'), type:'textarea'},
      {key:'category', label: tr('risk_category'), type:'select', options: getCategoryOptions()},
      {key:'probability', label: tr('risk_probability') + ' (1-5)', type:'number'},
      {key:'impact', label: tr('risk_impact') + ' (1-5)', type:'number'},
      {key:'mitigation', label: tr('risk_mitigation'), type:'textarea'},
      {key:'owner', label: tr('risk_owner')},
      {key:'status', label: tr('risk_status'), type:'select', options:[
        {v:'open', l:'🔴 ' + tr('risk_status_open')},
        {v:'mitigating', l:'🛠️ ' + tr('risk_status_mitigating')},
        {v:'closed', l:'✅ ' + tr('risk_status_closed')},
        {v:'accepted', l:'✔️ ' + tr('risk_status_accepted')}
      ]}
    ], {title:'', desc:'', category:'strategic', probability:3, impact:3, mitigation:'', owner:'', status:'open'}, function(data){
      if(!data.title) return toast(tr('risk_title_required'), 'warn');
      project.risks.push({
        id: uid(),
        title: data.title,
        desc: data.desc,
        category: data.category || 'strategic',
        probability: Math.max(1, Math.min(5, parseInt(data.probability) || 3)),
        impact: Math.max(1, Math.min(5, parseInt(data.impact) || 3)),
        mitigation: data.mitigation,
        owner: data.owner,
        status: data.status || 'open',
        createdAt: new Date().toISOString()
      });
      if(window.saveSpace) window.saveSpace();
      renderRisks();
      toast(tr('risk_added'), 'success');
    });
  }

  function editRisk(project, id){
    var r = project.risks.find(function(x){ return x.id === id; });
    if(!r) return;
    window.showModal(tr('risk_edit'), [
      {key:'title', label: tr('risk_title')},
      {key:'desc', label: tr('risk_desc'), type:'textarea'},
      {key:'category', label: tr('risk_category'), type:'select', options: getCategoryOptions()},
      {key:'probability', label: tr('risk_probability') + ' (1-5)', type:'number'},
      {key:'impact', label: tr('risk_impact') + ' (1-5)', type:'number'},
      {key:'mitigation', label: tr('risk_mitigation'), type:'textarea'},
      {key:'owner', label: tr('risk_owner')},
      {key:'status', label: tr('risk_status'), type:'select', options:[
        {v:'open', l:'🔴 ' + tr('risk_status_open')},
        {v:'mitigating', l:'🛠️ ' + tr('risk_status_mitigating')},
        {v:'closed', l:'✅ ' + tr('risk_status_closed')},
        {v:'accepted', l:'✔️ ' + tr('risk_status_accepted')}
      ]}
    ], r, function(data){
      Object.assign(r, data, {
        probability: Math.max(1, Math.min(5, parseInt(data.probability) || 3)),
        impact: Math.max(1, Math.min(5, parseInt(data.impact) || 3))
      });
      if(window.saveSpace) window.saveSpace();
      renderRisks();
      toast(tr('risk_updated'), 'success');
    }, function(){
      window.customConfirm(tr('risk_delete_confirm'), function(){
        project.risks = project.risks.filter(function(x){ return x.id !== id; });
        if(window.saveSpace) window.saveSpace();
        renderRisks();
        toast(tr('risk_deleted'), 'success');
      });
    });
  }

  function viewRisk(project, id){
    var r = project.risks.find(function(x){ return x.id === id; });
    if(!r) return;
    var cat = (window.RISK_TYPES || {})[r.category] || {name: r.category, icon:'❓'};
    var sev = (r.probability||0) * (r.impact||0);
    var color = getSeverityColor(r.probability||0, r.impact||0);
    var level = getSeverityLevel(r.probability||0, r.impact||0);

    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.innerHTML = '<div class="modal" style="max-width:600px">' +
      '<h3>' + cat.icon + ' ' + esc(r.title) + '</h3>' +
      '<div style="text-align:center;padding:20px;background:var(--grad-soft);border-radius:12px;margin:16px 0">' +
        '<div style="font-size:2.5rem;font-weight:800;color:' + color + '">' + sev + '</div>' +
        '<div style="font-size:.8rem;color:var(--muted);margin-top:4px">' + level + ' · P:' + (r.probability||0) + ' × I:' + (r.impact||0) + '</div>' +
      '</div>' +
      (r.desc ? '<div class="form-group"><label>' + tr('risk_desc') + '</label><div style="font-size:.85rem;line-height:1.7">' + esc(r.desc) + '</div></div>' : '') +
      (r.mitigation ? '<div class="form-group"><label>' + tr('risk_mitigation') + '</label><div style="font-size:.85rem;line-height:1.7;color:var(--green)">' + esc(r.mitigation) + '</div></div>' : '') +
      (r.owner ? '<div class="form-group"><label>' + tr('risk_owner') + '</label><div>' + esc(r.owner) + '</div></div>' : '') +
      '<div class="modal-actions">' +
        '<button class="btn btn-sm btn-ghost" id="riskViewClose">' + tr('close') + '</button>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);
    bd.querySelector('#riskViewClose').onclick = function(){ bd.remove(); };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
  }

  function exportRisks(project){
    var lines = ['⚠️ ' + tr('risk_list') + ' — ' + project.name, ''];
    project.risks.slice().sort(function(a,b){
      return ((b.probability||0)*(b.impact||0)) - ((a.probability||0)*(a.impact||0));
    }).forEach(function(r){
      var sev = (r.probability||0) * (r.impact||0);
      lines.push('• ' + r.title + ' (P:' + (r.probability||0) + ' × I:' + (r.impact||0) + ' = ' + sev + ')');
      if(r.mitigation) lines.push('  🛡️ ' + r.mitigation);
    });
    var text = lines.join('\n');
    if(navigator.clipboard) navigator.clipboard.writeText(text).then(function(){ toast(tr('copied'), 'success'); });
    else alert(text);
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._risksInstalled) return;
    window._risksInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'risks') setTimeout(renderRisks, 100);
	  if(window.ProjectContext){
		window.ProjectContext.subscribe(function(){
		 var active = document.querySelector('.section.active');
		 if(active && active.id === 'risks') renderRisks();
    });
  }
      return r;
    };
  }

  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'risks') renderRisks();
  });

  window.renderRisks = renderRisks;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('⚠️ Risk Register loaded');
})();