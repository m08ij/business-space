/* ============================================================
   📈 insights.js — تحليلات متقدمة (مع i18n)
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function getSpace(){ return window.space || {projects:[],salesPipeline:[]}; }

  function renderInsights(){
    var el = document.getElementById('insightsBody');
    if(!el) return;
    var sp = getSpace();
    var lang = window.i18n ? window.i18n.getLang() : 'ar';

    var html = '';
    var totalProjects = (sp.projects || []).length;
    var activeProjects = (sp.projects || []).filter(function(p){ return p.stage !== 'close' && p.stage !== 'benefit'; }).length;
    var ideasCount = (sp.ideas || []).length;
    var dealsCount = (sp.salesPipeline || []).length;
    var dealsWon = (sp.salesPipeline || []).filter(function(d){ return d.stage === 'won'; }).length;
    var winRate = dealsCount ? Math.round((dealsWon / dealsCount) * 100) : 0;

    html += '<div class="grid grid-4" style="margin-bottom:16px">' +
      '<div class="stat"><div class="ic">💼</div><div><div class="v">' + totalProjects + '</div><div class="l">' + tr('insights_projects') + '</div></div></div>' +
      '<div class="stat"><div class="ic">🎯</div><div><div class="v">' + activeProjects + '</div><div class="l">' + tr('insights_active') + '</div></div></div>' +
      '<div class="stat"><div class="ic">💡</div><div><div class="v">' + ideasCount + '</div><div class="l">' + tr('insights_ideas') + '</div></div></div>' +
      '<div class="stat"><div class="ic">📊</div><div><div class="v">' + winRate + '%</div><div class="l">' + tr('insights_win_rate') + '</div></div></div>' +
    '</div>';

    if(totalProjects){
      var stages = window.PRISM_STAGES || {};
      var stageCounts = {};
      Object.keys(stages).forEach(function(k){ stageCounts[k] = 0; });
      (sp.projects || []).forEach(function(p){ if(stageCounts[p.stage] !== undefined) stageCounts[p.stage]++; });

      html += '<div class="card" style="margin-bottom:16px">' +
        '<h3>' + tr('insights_projects_by_stage') + '</h3>';
      var maxCount = Math.max.apply(null, Object.keys(stageCounts).map(function(k){ return stageCounts[k]; })) || 1;
      Object.keys(stages).forEach(function(k){
        var cnt = stageCounts[k];
        var pct = Math.round((cnt / maxCount) * 100);
        var sName = lang === 'en' ? (stages[k].nameEn || stages[k].name) : stages[k].name;
        html += '<div style="margin-bottom:10px">' +
          '<div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px">' +
            '<span>' + stages[k].icon + ' ' + sName + '</span>' +
            '<span style="color:var(--cyan);font-weight:700">' + cnt + '</span>' +
          '</div>' +
          '<div style="height:8px;background:var(--bg2);border-radius:8px;overflow:hidden">' +
            '<div style="height:100%;width:' + pct + '%;background:var(--grad);border-radius:8px"></div>' +
          '</div>' +
        '</div>';
      });
      html += '</div>';
    }

    if(dealsCount){
      var pStages = window.PIPELINE_STAGES || {};
      var pCounts = {};
      Object.keys(pStages).forEach(function(k){ pCounts[k] = 0; });
      sp.salesPipeline.forEach(function(d){ if(pCounts[d.stage] !== undefined) pCounts[d.stage]++; });

      html += '<div class="card" style="margin-bottom:16px">' +
        '<h3>' + tr('insights_pipeline_title') + '</h3>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px">';
      Object.keys(pStages).forEach(function(k){
        var s = pStages[k];
        var sName = lang === 'en' ? (s.nameEn || s.name) : s.name;
        html += '<div style="text-align:center;padding:12px;background:var(--bg2);border-radius:10px;border:2px solid ' + s.color + '30">' +
          '<div style="font-size:1.5rem">' + s.icon + '</div>' +
          '<div style="font-size:1.3rem;font-weight:800;color:' + s.color + ';margin:4px 0">' + pCounts[k] + '</div>' +
          '<div style="font-size:.68rem;color:var(--muted)">' + sName + '</div>' +
        '</div>';
      });
      html += '</div></div>';
    }

    var allSdg = [];
    (sp.projects || []).forEach(function(p){
      if(p.impact && Array.isArray(p.impact.sdg)){
        p.impact.sdg.forEach(function(n){ if(allSdg.indexOf(n) === -1) allSdg.push(n); });
      }
    });
    if(allSdg.length){
      html += '<div class="card">' +
        '<h3>' + tr('insights_sdg_title') + '</h3>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px">';
      allSdg.forEach(function(n){
        var sdg = window.SDG_DB[n];
        if(!sdg) return;
        var sdgName = lang === 'en' ? (sdg.nameEn || sdg.name) : sdg.name;
        html += '<div style="text-align:center;padding:10px;background:' + sdg.color + '20;border-radius:10px;border:1px solid ' + sdg.color + '50">' +
          '<div style="font-size:1.5rem">' + sdg.icon + '</div>' +
          '<div style="font-size:.7rem;font-weight:700;color:' + sdg.color + ';margin-top:4px">SDG ' + n + '</div>' +
          '<div style="font-size:.65rem;color:var(--muted);margin-top:2px">' + sdgName + '</div>' +
        '</div>';
      });
      html += '</div></div>';
    }

    el.innerHTML = html;
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._insightsInstalled) return;
    window._insightsInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'reports') setTimeout(renderInsights, 100);
      return r;
    };
  }

  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'reports') renderInsights();
  });

  window.renderInsights = renderInsights;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('📈 Insights loaded');
})();