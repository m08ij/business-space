/* ============================================================
   📁 file-sync-plus.js — ربط ملفات المشروع + تحديث تلقائي
   ============================================================ */
(function(){
  'use strict';

  var SYNC_INTERVAL = 5 * 60 * 1000;
  var syncTimers = {};

  function getSpace(){ return window.space || {projects:[],projectFiles:{}}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  var currentProject = null;

  function renderFiles(){
    var el = document.getElementById('filesBody');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];
    if(!projects.length){
      el.innerHTML = '<div class="empty"><div class="ic">📁</div><p>لا توجد مشاريع</p></div>';
      return;
    }
    if(window.ProjectContext){ window.ProjectContext.ensureValid(); currentProject = window.ProjectContext.getCurrent(); }
    if(!currentProject) currentProject = projects[0].id;

    var html = '<div class="controls">';
    projects.forEach(function(p){
      var active = currentProject === p.id;
      html += '<button class="chip' + (active ? ' active' : '') + '" data-fp-select="' + p.id + '">' + (active ? '✓ ' : '') + esc(p.name) + '</button>';
    });
    html += '</div>';

    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>📁 ملفات المشروع</h3>' +
      '<span class="badge" id="fpCount">—</span></div>' +
      '<div id="fpList"></div>' +
      '<button class="upload-course-btn" id="fpUpload" style="margin-top:12px">📤 رفع ملف</button>' +
      '<input type="file" id="fpInput" style="display:none">' +
      '<div class="upload-progress-bar" id="fpProgress"><div class="inner" id="fpProgressInner"></div></div>' +
    '</div>';

    el.innerHTML = html;

    el.querySelectorAll('[data-fp-select]').forEach(function(b){
      b.addEventListener('click', function(){
        if(window.ProjectContext) window.ProjectContext.setCurrent(b.dataset.fpSelect);
        else { currentProject = b.dataset.fpSelect; renderFiles(); }
      });
    });

    var uploadBtn = document.getElementById('fpUpload');
    var fileInput = document.getElementById('fpInput');
    if(uploadBtn && fileInput){
      uploadBtn.onclick = function(){ fileInput.click(); };
      fileInput.onchange = function(e){
        var f = e.target.files[0];
        if(f) uploadFile(currentProject, f);
        fileInput.value = '';
      };
    }

    loadFiles(currentProject);
  }

  async function loadFiles(projectId){
    var list = document.getElementById('fpList');
    var count = document.getElementById('fpCount');
    if(!list) return;
    list.innerHTML = '<div style="text-align:center;padding:14px;font-size:.78rem;color:var(--muted2)">جاري التحميل...</div>';

    if(!window.SB || !window.SB.listProjectFiles){
      list.innerHTML = '<div style="text-align:center;padding:14px;font-size:.78rem;color:var(--muted2)">المزامنة غير مفعّلة</div>';
      return;
    }

    try{
      var files = await window.SB.listProjectFiles(projectId);
      if(!files.length){
        list.innerHTML = '<div style="text-align:center;padding:14px;font-size:.78rem;color:var(--muted2)">ما في ملفات بعد</div>';
        if(count) count.textContent = '0 ملف';
        return;
      }
      if(count) count.textContent = files.length + ' ملف';

      var html = '';
      files.forEach(function(f){
        var icon = window.SB.getFileIcon(f.name);
        var size = window.SB.formatFileSize(f.size);
        var cleanName = f.name.replace(/^\d+_/, '');
        html += '<div class="course-file-item" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg2);border:1px solid var(--border);border-radius:10px;margin-bottom:6px">' +
          '<div style="font-size:1.3rem;flex-shrink:0">' + icon + '</div>' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-size:.82rem;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(cleanName) + '</div>' +
            '<div style="font-size:.68rem;color:var(--muted2);margin-top:2px">' + size + '</div>' +
          '</div>' +
          '<div style="display:flex;gap:4px">' +
            '<a class="btn btn-sm btn-ghost" href="' + esc(f.url) + '" target="_blank" rel="noopener">👁️</a>' +
            '<button class="btn btn-sm btn-danger" data-fp-del="' + esc(f.path) + '">🗑</button>' +
          '</div>' +
        '</div>';
      });
      list.innerHTML = html;
      list.querySelectorAll('[data-fp-del]').forEach(function(b){
        b.addEventListener('click', function(){
          window.customConfirm('حذف الملف؟', async function(){
            var ok = await window.SB.deleteProjectFile(b.dataset.fpDel);
            if(ok){ toast('🗑 حُذف', 'success'); loadFiles(projectId); }
            else toast('فشل الحذف', 'warn');
          });
        });
      });
    }catch(e){
      console.error(e);
      list.innerHTML = '<div style="text-align:center;padding:14px;font-size:.78rem;color:var(--red)">فشل التحميل</div>';
    }
  }

  async function uploadFile(projectId, file){
    if(!window.SB || !window.SB.uploadProjectFile){
      toast('خدمة الرفع غير متوفرة', 'warn'); return;
    }
    if(file.size > 25 * 1024 * 1024){
      toast('⚠️ الحد 25 MB', 'warn', 3500); return;
    }
    var prog = document.getElementById('fpProgress');
    var inner = document.getElementById('fpProgressInner');
    if(prog) prog.style.display = 'block';
    if(inner) inner.style.width = '30%';

    toast('📤 جاري الرفع...', 'info', 2000);
    try{
      var res = await window.SB.uploadProjectFile(projectId, file);
      if(inner) inner.style.width = '100%';
      setTimeout(function(){ if(prog) prog.style.display = 'none'; if(inner) inner.style.width = '0'; }, 800);
      if(res.error){ toast('❌ ' + res.error, 'warn', 3500); return; }
      toast('✅ تم الرفع!', 'success');
      loadFiles(projectId);
    }catch(e){
      if(prog) prog.style.display = 'none';
      toast('فشل الرفع', 'warn');
    }
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._fileSyncInstalled) return;
    window._fileSyncInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'files') setTimeout(renderFiles, 100);
	  if(window.ProjectContext){
		window.ProjectContext.subscribe(function(){
		  var active = document.querySelector('.section.active');
		  if(active && active.id === 'files') renderFiles();
		});
	  }
      return r;
    };
  }

  window.renderFiles = renderFiles;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('📁 File Sync Plus loaded');
})();