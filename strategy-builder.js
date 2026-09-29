/* ============================================================
   🎯 strategy-builder.js v2 — أدوات بناء الاستراتيجية
   ✅ إزالة prompt() واستبدالها بـ showModal
   ✅ ترجمة كاملة
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function getSpace(){ return window.space || {projects:[]}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  var currentProject = null;

  /* ============ استدعاء المشروع ============ */
  function selectProjectForStrategy(projectId){
    if(window.ProjectContext) window.ProjectContext.setCurrent(projectId);
    else { currentProject = projectId; renderStrategySelector(); }
  }

  function renderStrategySelector(){
    var el = document.getElementById('strategySelector');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];
    if(!projects.length){
      el.innerHTML = '<div class="empty"><div class="ic">💼</div><p>' + tr('roadmap_no_projects') + '</p><p class="sub">' + tr('roadmap_no_projects_sub') + '</p></div>';
      return;
    }
    var html = '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">';
    projects.forEach(function(p){
      var active = currentProject === p.id;
      html += '<button class="chip' + (active ? ' active' : '') + '" data-sp-select="' + p.id + '">' +
        (active ? '✓ ' : '') + esc(p.name) + '</button>';
    });
    html += '</div>';
    el.innerHTML = html;
    el.querySelectorAll('[data-sp-select]').forEach(function(b){
      b.addEventListener('click', function(){ selectProjectForStrategy(b.dataset.spSelect); });
    });
    if(window.ProjectContext){ window.ProjectContext.ensureValid(); currentProject = window.ProjectContext.getCurrent(); }
    if(!currentProject && projects.length) currentProject = projects[0].id;

    renderFrameworkTools();
  }

  function renderFrameworkTools(){
    var el = document.getElementById('strategyTools');
    if(!el) return;
    var sp = getSpace();
    var project = (sp.projects || []).find(function(p){ return p.id === currentProject; });
    if(!project){
      el.innerHTML = '<div style="text-align:center;padding:24px;color:var(--muted);font-size:.85rem">' + tr('strategy_select_project') + '</div>';
      return;
    }
    if(!project.strategy) project.strategy = {};
    var s = project.strategy;

    var html = '';
    html += renderSWOT(project, s.swot || {strengths:[],weaknesses:[],opportunities:[],threats:[]});
    html += renderPESTEL(project, s.pestel || {});
    html += renderOKRs(project, s.okrs || []);

    el.innerHTML = html;

    bindSWOT(project);
    bindPESTEL(project);
    bindOKRs(project);
  }

  /* ============ SWOT ============ */
  function renderSWOT(project, swot){
    var sections = [
      {k:'strengths',    title:'💪 ' + tr('swot_strengths'),   color:'var(--green)'},
      {k:'weaknesses',   title:'⚠️ ' + tr('swot_weaknesses'),   color:'var(--red)'},
      {k:'opportunities',title:'🌟 ' + tr('swot_opportunities'), color:'var(--cyan)'},
      {k:'threats',      title:'🌩️ ' + tr('swot_threats'),      color:'var(--amber)'}
    ];
    var html = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>' + tr('swot_title') + '</h3>' +
      '<button class="btn btn-sm btn-ghost" data-swot-export>' + tr('export') + '</button></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">';
    sections.forEach(function(sec){
      html += '<div style="background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:12px">' +
        '<div style="font-weight:800;font-size:.85rem;color:' + sec.color + ';margin-bottom:8px">' + sec.title + '</div>' +
        '<div data-swot-list="' + sec.k + '" style="min-height:40px">';
      (swot[sec.k] || []).forEach(function(item, i){
        html += '<div style="display:flex;align-items:center;gap:6px;padding:5px 0;font-size:.8rem">' +
          '<span style="flex:1">• ' + esc(item) + '</span>' +
          '<button class="btn btn-sm btn-ghost" data-swot-del="' + sec.k + '-' + i + '" style="padding:1px 5px;font-size:.65rem">✕</button>' +
        '</div>';
      });
      html += '</div>' +
        '<button class="btn btn-sm" data-swot-add="' + sec.k + '" style="width:100%;margin-top:6px;font-size:.72rem">+ ' + tr('add') + '</button>' +
      '</div>';
    });
    html += '</div></div>';
    return html;
  }

  function bindSWOT(project){
    document.querySelectorAll('[data-swot-add]').forEach(function(b){
      b.addEventListener('click', function(){
        var key = b.dataset.swotAdd;
        var keyName = tr('swot_' + key + '_short');
        window.showModal(
          tr('swot_add_item') + ' "' + keyName + '"',
          [{ key:'text', label: tr('swot_item_label'), placeholder: tr('swot_item_ph') }],
          { text: '' },
          function(data){
            var val = (data.text || '').trim();
            if(!val) return toast(tr('swot_item_required'), 'warn');
            if(!project.strategy) project.strategy = {};
            if(!project.strategy.swot) project.strategy.swot = {strengths:[],weaknesses:[],opportunities:[],threats:[]};
            if(!project.strategy.swot[key]) project.strategy.swot[key] = [];
            project.strategy.swot[key].push(val);
            if(window.saveSpace) window.saveSpace();
            renderFrameworkTools();
            toast(tr('swot_added'), 'success', 1200);
          }
        );
      });
    });
    document.querySelectorAll('[data-swot-del]').forEach(function(b){
      b.addEventListener('click', function(){
        var parts = b.dataset.swotDel.split('-');
        var key = parts[0], idx = parseInt(parts[1]);
        project.strategy.swot[key].splice(idx, 1);
        if(window.saveSpace) window.saveSpace();
        renderFrameworkTools();
      });
    });
    var exp = document.querySelector('[data-swot-export]');
    if(exp) exp.addEventListener('click', function(){
      var s = project.strategy.swot;
      var text = '📊 ' + tr('swot_title') + ' — ' + project.name + '\n\n' +
        '💪 ' + tr('swot_strengths') + ':\n' + (s.strengths||[]).map(function(x){return '• '+x;}).join('\n') + '\n\n' +
        '⚠️ ' + tr('swot_weaknesses') + ':\n' + (s.weaknesses||[]).map(function(x){return '• '+x;}).join('\n') + '\n\n' +
        '🌟 ' + tr('swot_opportunities') + ':\n' + (s.opportunities||[]).map(function(x){return '• '+x;}).join('\n') + '\n\n' +
        '🌩️ ' + tr('swot_threats') + ':\n' + (s.threats||[]).map(function(x){return '• '+x;}).join('\n');
      navigator.clipboard.writeText(text).then(function(){ toast(tr('swot_export_copied'), 'success'); });
    });
  }

  /* ============ PESTEL ============ */
  function renderPESTEL(project, pestel){
    var cats = [
      {k:'political',    n: tr('pestel_political'), color:'var(--cyan)'},
      {k:'economic',     n: tr('pestel_economic'),  color:'var(--green)'},
      {k:'social',       n: tr('pestel_social'),    color:'var(--purple)'},
      {k:'technological',n: tr('pestel_tech'),      color:'var(--amber)'},
      {k:'environmental',n: tr('pestel_env'),       color:'var(--pink)'},
      {k:'legal',        n: tr('pestel_legal'),     color:'var(--red)'}
    ];
    var html = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>' + tr('pestel_title') + '</h3>' +
      '<button class="btn btn-sm btn-ghost" data-pestel-export>' + tr('export') + '</button></div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px">';
    cats.forEach(function(c){
      html += '<div style="background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:12px">' +
        '<div style="font-weight:800;font-size:.82rem;color:' + c.color + ';margin-bottom:6px">' + c.n + '</div>' +
        '<textarea data-pestel="' + c.k + '" placeholder="' + tr('pestel_placeholder') + '" style="width:100%;min-height:70px;background:var(--card);border:1px solid var(--border);color:var(--text);border-radius:8px;padding:8px;font-family:inherit;font-size:.78rem;resize:vertical;outline:none">' + esc(pestel[c.k] || '') + '</textarea>' +
      '</div>';
    });
    html += '</div></div>';
    return html;
  }

  function bindPESTEL(project){
    document.querySelectorAll('[data-pestel]').forEach(function(ta){
      ta.addEventListener('input', function(){
        if(!project.strategy) project.strategy = {};
        if(!project.strategy.pestel) project.strategy.pestel = {};
        project.strategy.pestel[ta.dataset.pestel] = ta.value;
        if(window.saveSpace) window.saveSpace();
      });
    });
    var exp = document.querySelector('[data-pestel-export]');
    if(exp) exp.addEventListener('click', function(){
      var p = project.strategy.pestel || {};
      var text = '🌍 ' + tr('pestel_title') + ' — ' + project.name + '\n\n' +
        '🏛️ ' + tr('pestel_political') + ': ' + (p.political || '—') + '\n\n' +
        '💰 ' + tr('pestel_economic') + ': ' + (p.economic || '—') + '\n\n' +
        '👥 ' + tr('pestel_social') + ': ' + (p.social || '—') + '\n\n' +
        '💻 ' + tr('pestel_tech') + ': ' + (p.technological || '—') + '\n\n' +
        '🌍 ' + tr('pestel_env') + ': ' + (p.environmental || '—') + '\n\n' +
        '⚖️ ' + tr('pestel_legal') + ': ' + (p.legal || '—');
      navigator.clipboard.writeText(text).then(function(){ toast(tr('pestel_export_copied'), 'success'); });
    });
  }

  /* ============ OKRs ============ */
  function renderOKRs(project, okrs){
    var html = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>' + tr('okr_title') + '</h3>' +
      '<button class="btn btn-sm" data-okr-add>' + tr('okr_add') + '</button></div>';
    if(!okrs.length){
      html += '<div style="text-align:center;padding:20px;color:var(--muted);font-size:.85rem">' + tr('okr_no_objectives') + '</div>';
    } else {
      okrs.forEach(function(okr, i){
        html += '<div style="background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:10px">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px">' +
            '<div style="font-weight:700;color:var(--cyan);font-size:.88rem">🎯 ' + esc(okr.objective) + '</div>' +
            '<button class="btn btn-sm btn-danger" data-okr-del="' + i + '" style="padding:2px 8px;font-size:.7rem">✕</button>' +
          '</div>';
        (okr.keyResults || []).forEach(function(kr, ki){
          var pct = Math.max(0, Math.min(100, kr.progress || 0));
          html += '<div style="padding:6px 0;border-top:1px solid var(--border)">' +
            '<div style="display:flex;justify-content:space-between;font-size:.78rem;margin-bottom:4px">' +
              '<span>• ' + esc(kr.name) + '</span><span style="color:var(--cyan);font-weight:700">' + pct + '%</span>' +
            '</div>' +
            '<div style="height:5px;background:var(--card);border-radius:5px;overflow:hidden">' +
              '<div style="height:100%;width:' + pct + '%;background:var(--grad);border-radius:5px"></div>' +
            '</div>' +
            '<input type="range" min="0" max="100" value="' + pct + '" data-okr-slider="' + i + '-' + ki + '" style="width:100%;margin-top:4px">' +
          '</div>';
        });
        html += '<button class="btn btn-sm btn-ghost" data-okr-kr-add="' + i + '" style="width:100%;margin-top:6px;font-size:.72rem">' + tr('okr_add_kr') + '</button></div>';
      });
    }
    html += '</div>';
    return html;
  }

  function bindOKRs(project){
    /* ✅ إضافة هدف عبر showModal */
    var addBtn = document.querySelector('[data-okr-add]');
    if(addBtn) addBtn.addEventListener('click', function(){
      window.showModal(
        tr('okr_add_objective_title'),
        [{ key:'objective', label: tr('okr_objective_field'), placeholder: tr('okr_objective_ph') }],
        { objective: '' },
        function(data){
          var obj = (data.objective || '').trim();
          if(!obj) return toast(tr('okr_objective_required'), 'warn');
          if(!project.strategy) project.strategy = {};
          if(!project.strategy.okrs) project.strategy.okrs = [];
          project.strategy.okrs.push({objective: obj, keyResults: []});
          if(window.saveSpace) window.saveSpace();
          renderFrameworkTools();
          toast(tr('okr_added'), 'success');
        }
      );
    });

    /* حذف هدف */
    document.querySelectorAll('[data-okr-del]').forEach(function(b){
      b.addEventListener('click', function(){
        var idx = parseInt(b.dataset.okrDel);
        var obj = project.strategy.okrs[idx];
        window.customConfirm(
          tr('okr_deleted').replace('🗑 ', '') + ' — ' + esc(obj.objective) + '؟',
          function(){
            project.strategy.okrs.splice(idx, 1);
            if(window.saveSpace) window.saveSpace();
            renderFrameworkTools();
            toast(tr('okr_deleted'), 'success');
          }
        );
      });
    });

    /* ✅ إضافة نتيجة رئيسية عبر showModal */
    document.querySelectorAll('[data-okr-kr-add]').forEach(function(b){
      b.addEventListener('click', function(){
        var i = parseInt(b.dataset.okrKrAdd);
        window.showModal(
          tr('okr_add_kr_title'),
          [{ key:'kr', label: tr('okr_kr_field'), placeholder: tr('okr_kr_ph') }],
          { kr: '' },
          function(data){
            var name = (data.kr || '').trim();
            if(!name) return toast(tr('okr_kr_required'), 'warn');
            project.strategy.okrs[i].keyResults.push({name: name, progress: 0});
            if(window.saveSpace) window.saveSpace();
            renderFrameworkTools();
            toast(tr('okr_kr_added'), 'success');
          }
        );
      });
    });

    /* sliders */
    document.querySelectorAll('[data-okr-slider]').forEach(function(sl){
      sl.addEventListener('input', function(){
        var parts = sl.dataset.okrSlider.split('-');
        var i = parseInt(parts[0]), ki = parseInt(parts[1]);
        project.strategy.okrs[i].keyResults[ki].progress = parseInt(sl.value);
        if(window.saveSpace) window.saveSpace();
        var lbl = sl.previousElementSibling;
        if(lbl && lbl.querySelector('span:last-child')) lbl.querySelector('span:last-child').textContent = sl.value + '%';
      });
    });
  }

  /* ============ Hook على switchTab ============ */
  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._strategyInstalled) return;
    window._strategyInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'strategy'){
        setTimeout(function(){ renderStrategySelector(); }, 100);
      }
	  if(window.ProjectContext){
		window.ProjectContext.subscribe(function(){
		  var active = document.querySelector('.section.active');
		  if(active && active.id === 'strategy') renderStrategySelector();
		});
	  }
      return r;
    };
  }

  window.renderStrategySelector = renderStrategySelector;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  document.addEventListener('languagechange', function(){ renderStrategySelector(); });
  console.log('🎯 Strategy Builder v2 loaded');
})();