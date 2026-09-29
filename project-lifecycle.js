/* ============================================================
   🗺️ project-lifecycle.js — دورة حياة المشروع (PRiSM)
   ============================================================ */
(function(){
  'use strict';

  function getSpace(){ return window.space || {projects:[]}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  var currentProject = null;

  function renderRoadmap(){
    var el = document.getElementById('roadmapBody');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];

    if(!projects.length){
	var tr = window.t || function(k){ return k; };
el.innerHTML = '<div class="empty"><div class="ic">🗺️</div><p>' + tr('roadmap_no_projects') + '</p><p class="sub">' + tr('roadmap_no_projects_sub') + '</p></div>';
      return;
    }
    if(!currentProject) currentProject = projects[0].id;

    var html = '<div class="controls">';
    projects.forEach(function(p){
      var active = currentProject === p.id;
      html += '<button class="chip' + (active ? ' active' : '') + '" data-rd-select="' + p.id + '">' + (active ? '✓ ' : '') + esc(p.name) + '</button>';
    });
    html += '</div>';

    var project = projects.find(function(p){ return p.id === currentProject; });
    if(!project){ el.innerHTML = html; return; }

    var stages = window.PRISM_STAGES || {};
    var currentStage = project.stage || 'pre-project';

    // شريط المراحل
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>🗺️ مراحل PRiSM</h3>' +
      '<span class="badge">' + esc(project.name) + '</span></div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px">';
    Object.keys(stages).forEach(function(k){
      var s = stages[k];
      var isActive = currentStage === k;
      var isPast = Object.keys(stages).indexOf(k) < Object.keys(stages).indexOf(currentStage);
      html += '<button data-stage-set="' + k + '" style="padding:14px;border-radius:12px;border:2px solid ' + (isActive ? 'var(--cyan)' : isPast ? 'var(--green)' : 'var(--border)') + ';background:' + (isActive ? 'var(--grad-soft)' : 'var(--bg2)') + ';color:' + (isActive ? 'var(--cyan)' : 'var(--text)') + ';cursor:pointer;font-family:inherit;text-align:center;transition:.2s">' +
        '<div style="font-size:1.5rem">' + s.icon + '</div>' +
        '<div style="font-size:.8rem;font-weight:700;margin-top:4px">' + s.name + '</div>' +
        '<div style="font-size:.65rem;color:var(--muted);margin-top:2px;line-height:1.3">' + s.desc + '</div>' +
        (isActive ? '<div style="font-size:.65rem;color:var(--cyan);margin-top:4px;font-weight:800">▶ المرحلة الحالية</div>' : '') +
        (isPast ? '<div style="font-size:.65rem;color:var(--green);margin-top:4px">✓ مكتملة</div>' : '') +
      '</button>';
    });
    html += '</div></div>';

    // مهام المرحلة الحالية
    var stageTasks = (project.tasks || []).filter(function(t){ return t.stage === currentStage; });
    html += '<div class="card">' +
      '<div class="card-head"><h3>' + (stages[currentStage] ? stages[currentStage].icon + ' مهام ' + stages[currentStage].name : '📝 المهام') + '</h3>' +
      '<button class="btn btn-sm" data-stage-task-add>+ مهمة</button></div>';
    if(!stageTasks.length){
      html += '<div style="text-align:center;padding:20px;color:var(--muted);font-size:.85rem">لا توجد مهام في هذه المرحلة</div>';
    } else {
      stageTasks.forEach(function(t, i){
        html += '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg2);border:1px solid var(--border);border-radius:10px;margin-bottom:6px">' +
          '<div style="width:20px;height:20px;border-radius:6px;border:2px solid ' + (t.done ? 'var(--green)' : 'var(--border2)') + ';background:' + (t.done ? 'var(--green)' : 'transparent') + ';flex-shrink:0;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#0b0f1a;font-weight:900;font-size:.75rem" data-stage-task-toggle="' + i + '">' + (t.done ? '✓' : '') + '</div>' +
          '<div style="flex:1;font-size:.85rem;' + (t.done ? 'text-decoration:line-through;opacity:.6' : '') + '">' + esc(t.title) + '</div>' +
          '<button class="btn btn-sm btn-danger" data-stage-task-del="' + i + '" style="padding:2px 6px;font-size:.7rem">✕</button>' +
        '</div>';
      });
    }
    html += '</div>';

    el.innerHTML = html;

    el.querySelectorAll('[data-rd-select]').forEach(function(b){
      b.addEventListener('click', function(){ currentProject = b.dataset.rdSelect; renderRoadmap(); });
    });
    el.querySelectorAll('[data-stage-set]').forEach(function(b){
      b.addEventListener('click', function(){
        project.stage = b.dataset.stageSet;
        if(window.saveSpace) window.saveSpace();
        renderRoadmap();
        toast('✓ المرحلة: ' + stages[project.stage].name, 'success');
      });
    });
    el.querySelectorAll('[data-stage-task-add]').forEach(function(b){
      b.addEventListener('click', function(){
        var title = prompt('عنوان المهمة:');
        if(!title || !title.trim()) return;
        if(!project.tasks) project.tasks = [];
        project.tasks.push({id: Date.now().toString(36), title: title.trim(), stage: currentStage, done: false});
        if(window.saveSpace) window.saveSpace();
        renderRoadmap();
      });
    });
    el.querySelectorAll('[data-stage-task-toggle]').forEach(function(b){
      b.addEventListener('click', function(){
        var t = stageTasks[parseInt(b.dataset.stageTaskToggle)];
        if(t){ t.done = !t.done; if(window.saveSpace) window.saveSpace(); renderRoadmap(); }
      });
    });
    el.querySelectorAll('[data-stage-task-del]').forEach(function(b){
      b.addEventListener('click', function(){
        var t = stageTasks[parseInt(b.dataset.stageTaskDel)];
        if(!t) return;
        var idx = project.tasks.indexOf(t);
        if(idx > -1) project.tasks.splice(idx, 1);
        if(window.saveSpace) window.saveSpace();
        renderRoadmap();
      });
    });
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._lifecycleInstalled) return;
    window._lifecycleInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'roadmap') setTimeout(renderRoadmap, 100);
      return r;
    };
  }

  window.renderRoadmap = renderRoadmap;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  document.addEventListener('languagechange', function(){ renderRoadmap(); });
  console.log('🗺️ Project Lifecycle loaded');
})();