/* ============================================================
   📦 archive.js — أرشيف المشاريع (مع i18n)
   ============================================================ */
(function(){
  'use strict';

  var ARCHIVE_KEY = 'bd_archive';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m, t||'info', d||2200); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function getSpace(){ return window.space || null; }

  function getArchive(){
    try{
      var v = JSON.parse(localStorage.getItem(ARCHIVE_KEY) || '[]');
      return Array.isArray(v) ? v : [];
    }catch(e){ return []; }
  }

  function saveArchive(arr){
    try{ localStorage.setItem(ARCHIVE_KEY, JSON.stringify(arr)); }catch(e){}
  }

  function archiveProject(projectId){
    var sp = getSpace(); if(!sp) return;
    var proj = (sp.projects || []).find(function(p){ return p.id === projectId; });
    if(!proj) return;

    window.customConfirm(tr('archive_move_confirm', {name: proj.name}), function(){
      var archive = getArchive();
      archive.unshift({
        id: proj.id, name: proj.name, description: proj.description,
        archivedAt: new Date().toISOString(), originalStage: proj.stage,
        data: proj,
        snapshot: {
          tasks: (sp.tasks || []).filter(function(t){ return t.project === proj.name; }),
          deals: (sp.salesPipeline || []).filter(function(d){ return d.project && d.project.indexOf(proj.name.slice(0, 20)) > -1; })
        }
      });
      saveArchive(archive);
      sp.projects = (sp.projects || []).filter(function(p){ return p.id !== projectId; });
      if(window.saveSpace) window.saveSpace();
      toast(tr('archive_moved'), 'success');
      if(window.switchTab) window.switchTab('archive');
    });
  }

  function restoreProject(archivedId){
    var archive = getArchive();
    var item = archive.find(function(x){ return x.id === archivedId; });
    if(!item) return;
    var sp = getSpace(); if(!sp) return;

    window.customConfirm(tr('archive_restore_confirm', {name: item.name}), function(){
      if(!Array.isArray(sp.projects)) sp.projects = [];
      sp.projects.push(item.data);
      if(item.snapshot){
        if(Array.isArray(item.snapshot.tasks)){
          if(!Array.isArray(sp.tasks)) sp.tasks = [];
          item.snapshot.tasks.forEach(function(t){
            if(!sp.tasks.some(function(x){ return x.id === t.id; })) sp.tasks.push(t);
          });
        }
        if(Array.isArray(item.snapshot.deals)){
          if(!Array.isArray(sp.salesPipeline)) sp.salesPipeline = [];
          item.snapshot.deals.forEach(function(d){
            if(!sp.salesPipeline.some(function(x){ return x.id === d.id; })) sp.salesPipeline.push(d);
          });
        }
      }
      saveArchive(archive.filter(function(x){ return x.id !== archivedId; }));
      if(window.saveSpace) window.saveSpace();
      toast(tr('archive_restored'), 'success');
      renderArchive();
    });
  }

  function deleteArchived(archivedId){
    window.customConfirm(tr('archive_delete_confirm'), function(){
      saveArchive(getArchive().filter(function(x){ return x.id !== archivedId; }));
      toast(tr('archive_deleted'), 'success');
      renderArchive();
    });
  }

  function renderArchive(){
    var el = document.getElementById('archiveBody');
    if(!el) return;
    var archive = getArchive();

    var html = '<div class="grid grid-4" style="margin-bottom:16px">' +
      '<div class="stat"><div class="ic">📦</div><div><div class="v">' + archive.length + '</div><div class="l">' + tr('archive_projects_archived') + '</div></div></div>' +
    '</div>';

    if(!archive.length){
      html += '<div class="empty"><div class="ic">📦</div><p>' + tr('archive_empty') + '</p>' +
        '<p class="sub">' + tr('archive_empty_sub') + '</p></div>';
      el.innerHTML = html;
      return;
    }

    html += '<div style="display:flex;flex-direction:column;gap:10px">';
    archive.forEach(function(item){
      var stage = (window.PRISM_STAGES || {})[item.originalStage] || {name:'—', icon:'❓'};
      var date = '';
      try{
        var lang = window.i18n ? window.i18n.getLang() : 'ar';
        date = new Date(item.archivedAt).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {year:'numeric',month:'short',day:'numeric'});
      }catch(e){}
      var msCount = (item.data.milestones || []).length;
      var riskCount = (item.data.risks || []).length;
      var taskCount = item.snapshot && item.snapshot.tasks ? item.snapshot.tasks.length : 0;

      html += '<div class="card">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-weight:800;font-size:.95rem">📦 ' + esc(item.name) + '</div>' +
            '<div style="font-size:.72rem;color:var(--muted2);margin-top:2px">' + stage.icon + ' ' + stage.name + ' · 📅 ' + tr('archive_archived_in') + ' ' + date + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;gap:14px;font-size:.75rem;color:var(--muted);margin-bottom:10px;flex-wrap:wrap">' +
          '<span>🎯 ' + msCount + ' ' + tr('archive_stages') + '</span>' +
          '<span>⚠️ ' + riskCount + ' ' + tr('archive_risks') + '</span>' +
          '<span>📝 ' + taskCount + ' ' + tr('archive_tasks') + '</span>' +
        '</div>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
          '<button class="btn btn-sm" data-arch-view="' + item.id + '">' + tr('archive_view') + '</button>' +
          '<button class="btn btn-sm btn-ghost" data-arch-restore="' + item.id + '">' + tr('archive_restore') + '</button>' +
          '<button class="btn btn-sm btn-danger" data-arch-del="' + item.id + '">' + tr('archive_delete_permanent') + '</button>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    el.innerHTML = html;

    el.querySelectorAll('[data-arch-view]').forEach(function(b){ b.onclick = function(){ viewArchived(b.dataset.archView); }; });
    el.querySelectorAll('[data-arch-restore]').forEach(function(b){ b.onclick = function(){ restoreProject(b.dataset.archRestore); }; });
    el.querySelectorAll('[data-arch-del]').forEach(function(b){ b.onclick = function(){ deleteArchived(b.dataset.archDel); }; });
  }

  function viewArchived(id){
    var item = getArchive().find(function(x){ return x.id === id; });
    if(!item) return;
    var d = item.data;
    var msList = (d.milestones || []).map(function(m){
      return '<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--border);font-size:.78rem">' +
        '<span>' + esc(m.title) + '</span>' +
        '<span style="color:var(--cyan);font-weight:700">' + (m.progress || 0) + '%</span></div>';
    }).join('') || '<div style="font-size:.78rem;color:var(--muted2)">' + tr('archive_no_stages') + '</div>';

    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.innerHTML = '<div class="modal" style="max-width:600px">' +
      '<h3>📦 ' + esc(item.name) + '</h3>' +
      '<p style="color:var(--muted);font-size:.82rem;margin-bottom:14px">' + esc(d.description || '') + '</p>' +
      '<div style="padding:12px;background:var(--bg2);border-radius:10px;margin-bottom:10px">' +
        '<div style="font-weight:800;color:var(--cyan);font-size:.82rem;margin-bottom:8px">🎯 ' + tr('archive_stages') + '</div>' +
        msList +
      '</div>' +
      '<div class="modal-actions">' +
        '<button class="btn btn-ghost" id="archViewClose">' + tr('close') + '</button>' +
        '<button class="btn" id="archViewRestore">' + tr('archive_restore') + '</button>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);
    bd.querySelector('#archViewClose').onclick = function(){ bd.remove(); };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
    bd.querySelector('#archViewRestore').onclick = function(){ bd.remove(); restoreProject(id); };
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._archiveInstalled) return;
    window._archiveInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'archive') setTimeout(renderArchive, 100);
      return r;
    };
  }

  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'archive') renderArchive();
  });

  window.renderArchive = renderArchive;
  window.archiveProject = archiveProject;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('📦 Archive module loaded');
})();