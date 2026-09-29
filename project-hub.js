/* ============================================================
   🎯 project-hub.js — لوحة مشروع موحّدة
   ✅ كل شيء عن المشروع في صفحة واحدة
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function getSpace(){ return window.space || {projects:[], tasks:[], budget:[], stakeholders:[], salesPipeline:[]}; }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function pickName(obj){ var lang = window.i18n ? window.i18n.getLang() : 'ar'; return (lang === 'en' && obj.nameEn) ? obj.nameEn : (obj.name || ''); }

  function renderHub(){
    var el = document.getElementById('hubBody');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];

    if(!projects.length){
      el.innerHTML = '<div class="empty"><div class="ic">🎯</div><p>' + tr('roadmap_no_projects') + '</p><p class="sub">' + tr('roadmap_no_projects_sub') + '</p></div>';
      return;
    }

    if(window.ProjectContext) window.ProjectContext.ensureValid();
    var currentId = (window.ProjectContext && window.ProjectContext.getCurrent()) || projects[0].id;

    /* شريط اختيار المشروع */
    var html = '<div class="controls">';
    projects.forEach(function(p){
      var active = currentId === p.id;
      html += '<button class="chip' + (active ? ' active' : '') + '" data-hub-select="' + p.id + '">' + (active ? '✓ ' : '') + esc(p.name) + '</button>';
    });
    html += '</div>';

    var project = projects.find(function(p){ return p.id === currentId; });
    if(!project){ el.innerHTML = html; return; }

    /* حساب المقاييس */
    var tasks = (sp.tasks || []).filter(function(t){ return t.projectId === project.id || t.project === project.name; });
    var activeTasks = tasks.filter(function(t){ return !t.done; });
    var overdueTasks = activeTasks.filter(function(t){ return t.due && t.due < new Date().toISOString().slice(0,10); });
    var budget = (sp.budget || []).filter(function(b){ return b.projectId === project.id || b.project === project.name; });
    var income = budget.filter(function(b){ return b.type === 'income'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
    var expense = budget.filter(function(b){ return b.type === 'expense'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
    var balance = income - expense;
    var stakeholders = (sp.stakeholders || []).filter(function(s){ return s.projectId === project.id || s.project === project.name; });
    var deals = (sp.salesPipeline || []).filter(function(d){ return d.projectId === project.id || (d.project && d.project.indexOf(project.name) > -1); });
    var wonDeals = deals.filter(function(d){ return d.stage === 'won'; });
    var risks = project.risks || [];
    var openRisks = risks.filter(function(r){ return r.status !== 'closed'; });
    var criticalRisks = openRisks.filter(function(r){ return (r.probability||0) * (r.impact||0) > 15; });
    var milestones = project.milestones || [];
    var completedMs = milestones.filter(function(m){ return m.status === 'completed'; });
    var stage = (window.PRISM_STAGES || {})[project.stage] || {name: '—', icon:'❓'};
    var lang = window.i18n ? window.i18n.getLang() : 'ar';
    var stageName = lang === 'en' ? (stage.nameEn || stage.name) : stage.name;

    /* نسبة تقدم المشروع */
    var totalMs = milestones.length || 1;
    var progressSum = milestones.reduce(function(a,m){ return a + (m.progress || 0); }, 0);
    var progress = Math.round(progressSum / totalMs);

    /* صحة المشروع */
    var healthScore = 100;
    if(overdueTasks.length > 3) healthScore -= 20;
    if(criticalRisks.length > 2) healthScore -= 25;
    if(balance < 0) healthScore -= 20;
    if(openRisks.length > 5) healthScore -= 10;
    healthScore = Math.max(0, healthScore);
    var health = healthScore >= 70
      ? { label: tr('hub_health_good'), color: 'var(--green)', emoji: '✅' }
      : healthScore >= 40
        ? { label: tr('hub_health_warning'), color: 'var(--amber)', emoji: '⚠️' }
        : { label: tr('hub_health_critical'), color: 'var(--red)', emoji: '🔴' };

    /* البطاقة الرئيسية */
    html += '<div class="card" style="margin-bottom:16px;background:linear-gradient(135deg,rgba(34,211,238,.10),rgba(167,139,250,.10))">' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:14px;flex-wrap:wrap;margin-bottom:14px">' +
        '<div style="flex:1;min-width:200px">' +
          '<div style="font-size:1.4rem;font-weight:800">' + esc(project.name) + '</div>' +
          '<div style="font-size:.82rem;color:var(--muted);margin-top:4px">' + stage.icon + ' ' + stageName + '</div>' +
        '</div>' +
        '<div style="text-align:center;padding:14px 20px;background:var(--card);border:2px solid ' + health.color + ';border-radius:14px;min-width:130px">' +
          '<div style="font-size:1.8rem">' + health.emoji + '</div>' +
          '<div style="font-size:.7rem;color:var(--muted);margin-top:4px">' + tr('hub_health') + '</div>' +
          '<div style="font-weight:800;color:' + health.color + ';font-size:.9rem">' + health.label + '</div>' +
        '</div>' +
      '</div>' +
      '<div style="margin-top:8px">' +
        '<div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:6px">' +
          '<span>' + tr('hub_progress') + '</span>' +
          '<span style="color:var(--cyan);font-weight:800">' + progress + '%</span>' +
        '</div>' +
        '<div style="height:10px;background:var(--bg2);border-radius:10px;overflow:hidden">' +
          '<div style="height:100%;width:' + progress + '%;background:var(--grad);border-radius:10px"></div>' +
        '</div>' +
      '</div>' +
    '</div>';

    /* KPIs */
    html += '<div class="grid grid-4" style="margin-bottom:16px">' +
      '<div class="stat"><div class="ic">📝</div><div><div class="v">' + activeTasks.length + '</div><div class="l">' + tr('hub_active_tasks') + '</div></div></div>' +
      '<div class="stat"><div class="ic">⚠️</div><div><div class="v" style="color:' + (criticalRisks.length > 0 ? 'var(--red)' : 'var(--green)') + '">' + openRisks.length + '</div><div class="l">' + tr('hub_open_risks') + '</div></div></div>' +
      '<div class="stat"><div class="ic">🎉</div><div><div class="v" style="color:var(--green)">' + wonDeals.length + '/' + deals.length + '</div><div class="l">' + tr('hub_won_deals') + '</div></div></div>' +
      '<div class="stat"><div class="ic">👥</div><div><div class="v">' + stakeholders.length + '</div><div class="l">' + tr('hub_team_size') + '</div></div></div>' +
    '</div>';

    /* الميزانية */
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>' + tr('hub_budget') + '</h3></div>' +
      '<div class="grid grid-3" style="gap:10px">' +
        '<div style="padding:12px;background:var(--bg2);border-radius:10px;text-align:center">' +
          '<div style="font-size:.7rem;color:var(--muted)">' + tr('hub_income') + '</div>' +
          '<div style="font-size:1.2rem;font-weight:800;color:var(--green);margin-top:4px">' + income.toFixed(0) + '</div>' +
        '</div>' +
        '<div style="padding:12px;background:var(--bg2);border-radius:10px;text-align:center">' +
          '<div style="font-size:.7rem;color:var(--muted)">' + tr('hub_expense') + '</div>' +
          '<div style="font-size:1.2rem;font-weight:800;color:var(--red);margin-top:4px">' + expense.toFixed(0) + '</div>' +
        '</div>' +
        '<div style="padding:12px;background:var(--bg2);border-radius:10px;text-align:center">' +
          '<div style="font-size:.7rem;color:var(--muted)">' + tr('hub_balance') + '</div>' +
          '<div style="font-size:1.2rem;font-weight:800;color:' + (balance >= 0 ? 'var(--green)' : 'var(--red)') + ';margin-top:4px">' + balance.toFixed(0) + '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    /* المهام النشطة */
    if(activeTasks.length){
      html += '<div class="card" style="margin-bottom:16px">' +
        '<div class="card-head"><h3>' + tr('hub_tasks') + ' (' + activeTasks.length + ')</h3></div>' +
        '<div style="display:flex;flex-direction:column;gap:6px">';
      activeTasks.slice(0, 5).forEach(function(t){
        var overdue = t.due && t.due < new Date().toISOString().slice(0,10);
        html += '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:var(--bg2);border-radius:8px;font-size:.82rem;' + (overdue ? 'border-left:3px solid var(--red)' : '') + '">' +
          '<span>' + esc(t.title) + '</span>' +
          (t.due ? '<span style="color:' + (overdue ? 'var(--red)' : 'var(--muted2)') + ';font-size:.72rem">' + t.due + '</span>' : '') +
        '</div>';
      });
      if(activeTasks.length > 5){
        html += '<div style="text-align:center;color:var(--muted2);font-size:.75rem;padding:6px">+ ' + (activeTasks.length - 5) + ' ' + tr('more') + '</div>';
      }
      html += '</div></div>';
    }

    /* المخاطر الحرجة */
    if(criticalRisks.length){
      html += '<div class="card" style="margin-bottom:16px;border-color:rgba(239,68,68,.4)">' +
        '<div class="card-head"><h3 style="color:var(--red)">🔴 ' + tr('hub_risks') + ' — ' + criticalRisks.length + '</h3></div>' +
        '<div style="display:flex;flex-direction:column;gap:6px">';
      criticalRisks.slice(0, 3).forEach(function(r){
        var sev = (r.probability||0) * (r.impact||0);
        html += '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:rgba(239,68,68,.08);border-radius:8px;font-size:.82rem">' +
          '<span>' + esc(r.title) + '</span>' +
          '<span style="color:var(--red);font-weight:800;font-size:.75rem">P×I=' + sev + '</span>' +
        '</div>';
      });
      html += '</div></div>';
    }

    /* SDG */
    if(project.impact && project.impact.sdg && project.impact.sdg.length){
      html += '<div class="card" style="margin-bottom:16px">' +
        '<div class="card-head"><h3>' + tr('hub_sdg') + '</h3></div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:8px">';
      project.impact.sdg.forEach(function(n){
        var sdg = (window.SDG_DB || {})[n];
        if(!sdg) return;
        var sdgName = lang === 'en' ? (sdg.nameEn || sdg.name) : sdg.name;
        html += '<div style="padding:8px 12px;background:' + sdg.color + '20;border-radius:8px;border:1px solid ' + sdg.color + '50;font-size:.78rem;font-weight:700;color:' + sdg.color + '">' +
          sdg.icon + ' SDG ' + n + ' — ' + esc(sdgName) +
        '</div>';
      });
      html += '</div></div>';
    }

    /* إجراءات سريعة */
    html += '<div class="card">' +
      '<div class="card-head"><h3>' + tr('hub_quick_actions') + '</h3></div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px">' +
        '<button class="btn btn-ghost" data-hub-go="strategy" style="justify-content:center">🎯 ' + tr('hub_go_strategy') + '</button>' +
        '<button class="btn btn-ghost" data-hub-go="impact" style="justify-content:center">📈 ' + tr('hub_go_impact') + '</button>' +
        '<button class="btn btn-ghost" data-hub-go="milestones" style="justify-content:center">🎯 ' + tr('hub_go_milestones') + '</button>' +
        '<button class="btn btn-ghost" data-hub-go="risks" style="justify-content:center">⚠️ ' + tr('hub_go_risks') + '</button>' +
        '<button class="btn btn-ghost" data-hub-go="files" style="justify-content:center">📁 ' + tr('hub_go_files') + '</button>' +
        '<button class="btn btn-ghost" data-hub-go="roadmap" style="justify-content:center">🗺️ ' + tr('nav_roadmap') + '</button>' +
      '</div>' +
    '</div>';

    el.innerHTML = html;

    el.querySelectorAll('[data-hub-select]').forEach(function(b){
      b.onclick = function(){
        if(window.ProjectContext) window.ProjectContext.setCurrent(b.dataset.hubSelect);
        else renderHub();
      };
    });
    el.querySelectorAll('[data-hub-go]').forEach(function(b){
      b.onclick = function(){
        if(window.switchTab) window.switchTab(b.dataset.hubGo);
      };
    });
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._hubInstalled) return;
    window._hubInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'hub') setTimeout(renderHub, 100);
      return r;
    };
    if(window.ProjectContext){
      window.ProjectContext.subscribe(function(){
        var active = document.querySelector('.section.active');
        if(active && active.id === 'hub') renderHub();
      });
    }
  }

  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'hub') renderHub();
  });

  window.renderHub = renderHub;
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('🎯 Project Hub loaded');
})();