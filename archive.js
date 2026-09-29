/* ============================================================
   📦 archive.js — أرشيف المشاريع
   نقل + استعادة + حذف نهائي
   ============================================================ */
(function(){
  'use strict';

  var ARCHIVE_KEY = 'bd_archive';

  function tr(k){ return window.t ? window.t(k) : k; }
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

  /* ============ نقل مشروع للأرشيف ============ */
  function archiveProject(projectId){
    var sp = getSpace();
    if(!sp) return;
    var proj = (sp.projects || []).find(function(p){ return p.id === projectId; });
    if(!proj) return;

    window.customConfirm('نقل "' + proj.name + '" إلى الأرشيف؟ سيتم الاحتفاظ بكل البيانات.', function(){
      var archive = getArchive();
      archive.unshift({
        id: proj.id,
        name: proj.name,
        description: proj.description,
        archivedAt: new Date().toISOString(),
        originalStage: proj.stage,
        data: proj,
        // لقطة عن باقي البيانات المرتبطة
        snapshot: {
          tasks: (sp.tasks || []).filter(function(t){ return t.project === proj.name; }),
          deals: (sp.salesPipeline || []).filter(function(d){ return d.project && d.project.indexOf(proj.name.slice(0, 20)) > -1; })
        }
      });
      saveArchive(archive);
      sp.projects = (sp.projects || []).filter(function(p){ return p.id !== projectId; });
      if(window.saveSpace) window.saveSpace();
      toast('📦 تم النقل للأرشيف', 'success');
      if(window.switchTab) window.switchTab('archive');
    });
  }

  /* ============ استعادة ============ */
  function restoreProject(archivedId){
    var archive = getArchive();
    var item = archive.find(function(x){ return x.id === archivedId; });
    if(!item) return;
    var sp = getSpace();
    if(!sp) return;

    window.customConfirm('استعادة "' + item.name + '" من الأرشيف؟', function(){
      if(!Array.isArray(sp.projects)) sp.projects = [];
      sp.projects.push(item.data);
      // استعادة المهام والصفقات إن أمكن
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
      toast('♻️ تم الاستعادة', 'success');
      renderArchive();
    });
  }

  /* ============ حذف نهائي ============ */
  function deleteArchived(archivedId){
    window.customConfirm('حذف نهائي؟ لا يمكن التراجع.', function(){
      var archive = getArchive().filter(function(x){ return x.id !== archivedId; });
      saveArchive(archive);
      toast('🗑 حُذف نهائياً', 'success');
      renderArchive();
    });
  }

  /* ============ عرض صفحة الأرشيف ============ */
  function renderArchive(){
    var el = document.getElementById('archiveBody');
    if(!el) return;
    var archive = getArchive();

    var html = '<div class="grid grid-4" style="margin-bottom:16px">' +
      '<div class="stat"><div class="ic">📦</div><div><div class="v">' + archive.length + '</div><div class="l">مشاريع مؤرشفة</div></div></div>' +
    '</div>';

    if(!archive.length){
      html += '<div class="empty"><div class="ic">📦</div><p>الأرشيف فارغ</p>' +
        '<p class="sub">عند أرشفة مشروع، سيظهر هنا مع كل بياناته</p></div>';
      el.innerHTML = html;
      return;
    }

    html += '<div style="display:flex;flex-direction:column;gap:10px">';
    archive.forEach(function(item){
      var stage = (window.PRISM_STAGES || {})[item.originalStage] || {name:'—', icon:'❓'};
      var date = '';
      try{ date = new Date(item.archivedAt).toLocaleDateString('ar-EG', {year:'numeric',month:'short',day:'numeric'}); }catch(e){}
      var msCount = (item.data.milestones || []).length;
      var riskCount = (item.data.risks || []).length;
      var taskCount = item.snapshot && item.snapshot.tasks ? item.snapshot.tasks.length : 0;

      html += '<div class="card">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-weight:800;font-size:.95rem">📦 ' + esc(item.name) + '</div>' +
            '<div style="font-size:.72rem;color:var(--muted2);margin-top:2px">' + stage.icon + ' ' + stage.name + ' · 📅 أُرشف في ' + date + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;gap:14px;font-size:.75rem;color:var(--muted);margin-bottom:10px;flex-wrap:wrap">' +
          '<span>🎯 ' + msCount + ' مراحل</span>' +
          '<span>⚠️ ' + riskCount + ' مخاطر</span>' +
          '<span>📝 ' + taskCount + ' مهام</span>' +
        '</div>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
          '<button class="btn btn-sm" data-arch-view="' + item.id + '">👁️ عرض</button>' +
          '<button class="btn btn-sm btn-ghost" data-arch-restore="' + item.id + '">♻️ استعادة</button>' +
          '<button class="btn btn-sm btn-danger" data-arch-del="' + item.id + '">🗑 حذف نهائي</button>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    el.innerHTML = html;

    el.querySelectorAll('[data-arch-view]').forEach(function(b){
      b.onclick = function(){ viewArchived(b.dataset.archView); };
    });
    el.querySelectorAll('[data-arch-restore]').forEach(function(b){
      b.onclick = function(){ restoreProject(b.dataset.archRestore); };
    });
    el.querySelectorAll('[data-arch-del]').forEach(function(b){
      b.onclick = function(){ deleteArchived(b.dataset.archDel); };
    });
  }

  function viewArchived(id){
    var item = getArchive().find(function(x){ return x.id === id; });
    if(!item) return;
    var d = item.data;
    var stages = window.PRISM_STAGES || {};

    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    var msList = (d.milestones || []).map(function(m){
      return '<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--border);font-size:.78rem">' +
        '<span>' + esc(m.title) + '</span>' +
        '<span style="color:var(--cyan);font-weight:700">' + (m.progress || 0) + '%</span></div>';
    }).join('') || '<div style="font-size:.78rem;color:var(--muted2)">لا مراحل</div>';

    bd.innerHTML =
      '<div class="modal" style="max-width:600px">' +
        '<h3>📦 ' + esc(item.name) + '</h3>' +
        '<p style="color:var(--muted);font-size:.82rem;margin-bottom:14px">' + esc(d.description || '') + '</p>' +
        '<div style="padding:12px;background:var(--bg2);border-radius:10px;margin-bottom:10px">' +
          '<div style="font-weight:800;color:var(--cyan);font-size:.82rem;margin-bottom:8px">🎯 المراحل</div>' +
          msList +
        '</div>' +
        '<div class="modal-actions">' +
          '<button class="btn btn-ghost" id="archViewClose">إغلاق</button>' +
          '<button class="btn" id="archViewRestore">♻️ استعادة</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(bd);
    bd.querySelector('#archViewClose').onclick = function(){ bd.remove(); };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
    bd.querySelector('#archViewRestore').onclick = function(){ bd.remove(); restoreProject(id); };
  }

  /* ============ زر الأرشفة على كل مشروع في "أفكاري" ============ */
  function injectArchiveButtons(){
    // إضافة زر أرشفة على كروت المشاريع في ideas
    var grid = document.getElementById('ideasGrid');
    if(!grid) return;
    // Actually ideas has projects? Let's add to roadmap selector instead.
    // This is handled by the roadmap module — we'll add an archive button to project cards in ideas
    // But ideas cards represent ideas, not projects. Projects are shown in roadmap.
  }

  /* ============ Hook ============ */
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