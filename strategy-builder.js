/* ============================================================
   🎯 strategy-builder.js — أدوات بناء الاستراتيجية
   SWOT, PESTEL, OKRs, Theory of Change
   ============================================================ */
(function(){
  'use strict';

  function getSpace(){ return window.space || {projects:[]}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

  var currentProject = null;
  var currentFramework = null;

  /* ============ استدعاء المشروع ============ */
  function selectProjectForStrategy(projectId){
    currentProject = projectId;
    renderStrategySelector();
  }

  /* ============ عرض الاختيار ============ */
  function renderStrategySelector(){
    var el = document.getElementById('strategySelector');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];
    if(!projects.length){
    var tr = window.t || function(k){ return k; };
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
    if(!currentProject && projects.length) currentProject = projects[0].id;

    renderFrameworkTools();
  }

  /* ============ عرض الأدوات ============ */
  function renderFrameworkTools(){
    var el = document.getElementById('strategyTools');
    if(!el) return;
    var sp = getSpace();
    var project = (sp.projects || []).find(function(p){ return p.id === currentProject; });
    if(!project){
      el.innerHTML = '<div style="text-align:center;padding:24px;color:var(--muted);font-size:.85rem">اختر مشروعاً لعرض أدوات الاستراتيجية</div>';
      return;
    }
    if(!project.strategy) project.strategy = {};
    var s = project.strategy;

    var html = '';
    // SWOT
    html += renderSWOT(project, s.swot || {strengths:[],weaknesses:[],opportunities:[],threats:[]});
    // PESTEL
    html += renderPESTEL(project, s.pestel || {});
    // OKRs
    html += renderOKRs(project, s.okrs || []);

    el.innerHTML = html;

    // Bind SWOT
    bindSWOT(project);
    bindPESTEL(project);
    bindOKRs(project);
  }

  /* ============ SWOT ============ */
  function renderSWOT(project, swot){
    var sections = [
      {k:'strengths',    title:'💪 نقاط القوة',   color:'var(--green)'},
      {k:'weaknesses',   title:'⚠️ نقاط الضعف',   color:'var(--red)'},
      {k:'opportunities',title:'🌟 الفرص',         color:'var(--cyan)'},
      {k:'threats',      title:'🌩️ التهديدات',    color:'var(--amber)'}
    ];
    var html = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>🎯 تحليل SWOT</h3>' +
      '<button class="btn btn-sm btn-ghost" data-swot-export>📤 تصدير</button></div>' +
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
        '<button class="btn btn-sm" data-swot-add="' + sec.k + '" style="width:100%;margin-top:6px;font-size:.72rem">+ إضافة</button>' +
      '</div>';
    });
    html += '</div></div>';
    return html;
  }

  function bindSWOT(project){
    document.querySelectorAll('[data-swot-add]').forEach(function(b){
      b.addEventListener('click', function(){
        var key = b.dataset.swotAdd;
        var val = prompt('أضف عنصراً في "' + key + '":');
        if(!val || !val.trim()) return;
        if(!project.strategy) project.strategy = {};
        if(!project.strategy.swot) project.strategy.swot = {strengths:[],weaknesses:[],opportunities:[],threats:[]};
        if(!project.strategy.swot[key]) project.strategy.swot[key] = [];
        project.strategy.swot[key].push(val.trim());
        if(window.saveSpace) window.saveSpace();
        renderFrameworkTools();
        toast('✓ أُضيف', 'success', 1200);
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
      var text = '📊 تحليل SWOT — ' + project.name + '\n\n' +
        '💪 نقاط القوة:\n' + (s.strengths||[]).map(function(x){return '• '+x;}).join('\n') + '\n\n' +
        '⚠️ نقاط الضعف:\n' + (s.weaknesses||[]).map(function(x){return '• '+x;}).join('\n') + '\n\n' +
        '🌟 الفرص:\n' + (s.opportunities||[]).map(function(x){return '• '+x;}).join('\n') + '\n\n' +
        '🌩️ التهديدات:\n' + (s.threats||[]).map(function(x){return '• '+x;}).join('\n');
      navigator.clipboard.writeText(text).then(function(){ toast('📋 نُسخ التحليل', 'success'); });
    });
  }

  /* ============ PESTEL ============ */
  function renderPESTEL(project, pestel){
    var cats = [
      {k:'political',    n:'🏛️ سياسي',    color:'var(--cyan)'},
      {k:'economic',     n:'💰 اقتصادي',   color:'var(--green)'},
      {k:'social',       n:'👥 اجتماعي',   color:'var(--purple)'},
      {k:'technological',n:'💻 تكنولوجي',  color:'var(--amber)'},
      {k:'environmental',n:'🌍 بيئي',      color:'var(--pink)'},
      {k:'legal',        n:'⚖️ قانوني',    color:'var(--red)'}
    ];
    var html = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>🌍 تحليل PESTEL</h3>' +
      '<button class="btn btn-sm btn-ghost" data-pestel-export>📤 تصدير</button></div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px">';
    cats.forEach(function(c){
      html += '<div style="background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:12px">' +
        '<div style="font-weight:800;font-size:.82rem;color:' + c.color + ';margin-bottom:6px">' + c.n + '</div>' +
        '<textarea data-pestel="' + c.k + '" placeholder="اكتب ملاحظاتك..." style="width:100%;min-height:70px;background:var(--card);border:1px solid var(--border);color:var(--text);border-radius:8px;padding:8px;font-family:inherit;font-size:.78rem;resize:vertical;outline:none">' + esc(pestel[c.k] || '') + '</textarea>' +
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
      var text = '🌍 تحليل PESTEL — ' + project.name + '\n\n' +
        '🏛️ سياسي: ' + (p.political || '—') + '\n\n' +
        '💰 اقتصادي: ' + (p.economic || '—') + '\n\n' +
        '👥 اجتماعي: ' + (p.social || '—') + '\n\n' +
        '💻 تكنولوجي: ' + (p.technological || '—') + '\n\n' +
        '🌍 بيئي: ' + (p.environmental || '—') + '\n\n' +
        '⚖️ قانوني: ' + (p.legal || '—');
      navigator.clipboard.writeText(text).then(function(){ toast('📋 نُسخ التحليل', 'success'); });
    });
  }

  /* ============ OKRs ============ */
  function renderOKRs(project, okrs){
    var html = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>🎯 الأهداف والنتائج (OKRs)</h3>' +
      '<button class="btn btn-sm" data-okr-add>+ هدف</button></div>';
    if(!okrs.length){
      html += '<div style="text-align:center;padding:20px;color:var(--muted);font-size:.85rem">لا توجد أهداف</div>';
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
        html += '<button class="btn btn-sm btn-ghost" data-okr-kr-add="' + i + '" style="width:100%;margin-top:6px;font-size:.72rem">+ نتيجة رئيسية</button></div>';
      });
    }
    html += '</div>';
    return html;
  }

  function bindOKRs(project){
    var addBtn = document.querySelector('[data-okr-add]');
    if(addBtn) addBtn.addEventListener('click', function(){
      var obj = prompt('الهدف (Objective):');
      if(!obj || !obj.trim()) return;
      if(!project.strategy) project.strategy = {};
      if(!project.strategy.okrs) project.strategy.okrs = [];
      project.strategy.okrs.push({objective: obj.trim(), keyResults: []});
      if(window.saveSpace) window.saveSpace();
      renderFrameworkTools();
    });
    document.querySelectorAll('[data-okr-del]').forEach(function(b){
      b.addEventListener('click', function(){
        project.strategy.okrs.splice(parseInt(b.dataset.okrDel), 1);
        if(window.saveSpace) window.saveSpace();
        renderFrameworkTools();
      });
    });
    document.querySelectorAll('[data-okr-kr-add]').forEach(function(b){
      b.addEventListener('click', function(){
        var i = parseInt(b.dataset.okrKrAdd);
        var name = prompt('النتيجة الرئيسية:');
        if(!name || !name.trim()) return;
        project.strategy.okrs[i].keyResults.push({name: name.trim(), progress: 0});
        if(window.saveSpace) window.saveSpace();
        renderFrameworkTools();
      });
    });
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
      return r;
    };
  }

  window.renderStrategySelector = renderStrategySelector;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  document.addEventListener('languagechange', function(){ renderStrategySelector(); });
  console.log('🎯 Strategy Builder loaded');
})();