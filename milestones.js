/* ============================================================
   🎯 milestones.js — Milestone Timeline Visualization
   خط زمني مرئي للمشاريع مع Gantt Chart
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function getSpace(){ return window.space || {projects:[]}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function uid(){ return 'ms_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

  var currentProject = null;

  /* ============ الحالات ============ */
  var STATUS = {
    'not-started': {name:'لم تبدأ',      nameEn:'Not Started', icon:'⏸️', color:'var(--muted)'},
    'in-progress': {name:'جارية',        nameEn:'In Progress', icon:'▶️', color:'var(--cyan)'},
    'completed':   {name:'مكتملة',       nameEn:'Completed',   icon:'✅', color:'var(--green)'},
    'delayed':     {name:'متأخرة',       nameEn:'Delayed',     icon:'⚠️', color:'var(--red)'},
    'on-hold':     {name:'معلّقة',       nameEn:'On Hold',     icon:'⏸️', color:'var(--amber)'}
  };

  /* ============ الرسم الرئيسي ============ */
  function renderMilestones(){
    var el = document.getElementById('milestonesBody');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];

    if(!projects.length){
      el.innerHTML = '<div class="empty"><div class="ic">🎯</div><p>' + tr('roadmap_no_projects') + '</p><p class="sub">' + tr('roadmap_no_projects_sub') + '</p></div>';
      return;
    }
    if(!currentProject) currentProject = projects[0].id;

    var html = '<div class="controls">';
    projects.forEach(function(p){
      var active = currentProject === p.id;
      html += '<button class="chip' + (active ? ' active' : '') + '" data-ms-select="' + p.id + '">' + (active ? '✓ ' : '') + esc(p.name) + '</button>';
    });
    html += '</div>';

    var project = projects.find(function(p){ return p.id === currentProject; });
    if(!project){ el.innerHTML = html; return; }

    if(!Array.isArray(project.milestones)) project.milestones = [];

    // Header with stats
    var stats = computeStats(project.milestones);
    html += '<div class="grid grid-4" style="margin-bottom:16px">' +
      '<div class="stat"><div class="ic">🎯</div><div><div class="v">' + stats.total + '</div><div class="l">' + tr('ms_total') + '</div></div></div>' +
      '<div class="stat"><div class="ic">▶️</div><div><div class="v">' + stats.inProgress + '</div><div class="l">' + tr('ms_in_progress') + '</div></div></div>' +
      '<div class="stat"><div class="ic">✅</div><div><div class="v">' + stats.completed + '</div><div class="l">' + tr('ms_completed') + '</div></div></div>' +
      '<div class="stat"><div class="ic">⚠️</div><div><div class="v">' + stats.delayed + '</div><div class="l">' + tr('ms_delayed') + '</div></div></div>' +
    '</div>';

    // Toolbar
    html += '<div class="controls">' +
      '<button class="btn" id="msAdd">' + tr('ms_add') + '</button>' +
      '<button class="btn btn-ghost" id="msExport">📤 ' + tr('export') + '</button>' +
      '<button class="btn btn-ghost" id="msPrint">🖨️ ' + tr('ms_print') + '</button>' +
    '</div>';

    // Gantt chart
    if(!project.milestones.length){
      html += '<div class="empty"><div class="ic">🎯</div><p>' + tr('ms_empty') + '</p><p class="sub">' + tr('ms_empty_sub') + '</p></div>';
    } else {
      html += renderGantt(project.milestones);
    }

    // List (cards)
    if(project.milestones.length){
      html += '<div style="margin-top:20px">';
      html += '<h3 style="font-size:.95rem;margin-bottom:12px;color:var(--cyan)">' + tr('ms_details') + '</h3>';
      html += renderList(project.milestones);
      html += '</div>';
    }

    el.innerHTML = html;

    // Bind
    el.querySelectorAll('[data-ms-select]').forEach(function(b){
      b.onclick = function(){ currentProject = b.dataset.msSelect; renderMilestones(); };
    });
    var addBtn = document.getElementById('msAdd');
    if(addBtn) addBtn.onclick = function(){ addMilestone(project); };
    var expBtn = document.getElementById('msExport');
    if(expBtn) expBtn.onclick = function(){ exportMilestones(project); };
    var printBtn = document.getElementById('msPrint');
    if(printBtn) printBtn.onclick = function(){ window.print(); };
    bindListActions(project);
  }

  function computeStats(milestones){
    var stats = {total: milestones.length, inProgress:0, completed:0, delayed:0};
    milestones.forEach(function(m){
      if(m.status === 'in-progress') stats.inProgress++;
      else if(m.status === 'completed') stats.completed++;
      else if(m.status === 'delayed') stats.delayed++;
    });
    return stats;
  }

  /* ============ Gantt ============ */
  function renderGantt(milestones){
    var dates = [];
    milestones.forEach(function(m){
      if(m.start) dates.push(new Date(m.start).getTime());
      if(m.end) dates.push(new Date(m.end).getTime());
    });
    if(!dates.length) return '';
    var minDate = new Date(Math.min.apply(null, dates));
    var maxDate = new Date(Math.max.apply(null, dates));
    // padding: 3 days
    minDate = new Date(minDate.getTime() - 3 * 86400000);
    maxDate = new Date(maxDate.getTime() + 3 * 86400000);
    var totalDays = Math.max(1, Math.ceil((maxDate - minDate) / 86400000));

    // generate month/day headers
    var days = [];
    for(var i = 0; i < totalDays; i++){
      var d = new Date(minDate.getTime() + i * 86400000);
      days.push(d);
    }

    var html = '<div class="card" style="overflow-x:auto;padding:16px">' +
      '<div style="font-weight:800;font-size:.9rem;margin-bottom:12px;color:var(--cyan)">📊 ' + tr('ms_gantt') + '</div>' +
      '<div style="min-width:' + Math.max(600, totalDays * 40) + 'px;position:relative">';

    // Header (dates)
    html += '<div style="display:flex;gap:0;border-bottom:2px solid var(--border);padding-bottom:8px;margin-bottom:12px">';
    html += '<div style="min-width:180px;font-weight:700;font-size:.75rem;color:var(--muted)">' + tr('ms_task') + '</div>';
    html += '<div style="flex:1;position:relative;display:flex">';
    var lastMonth = null;
    days.forEach(function(d, i){
      var m = d.getMonth() + 1;
      var showLabel = false;
      if(d.getDate() === 1 || i === 0 || d.getDate() % 7 === 0) showLabel = true;
      html += '<div style="flex:1;min-width:40px;text-align:center;font-size:.62rem;color:var(--muted)">' +
        (showLabel ? '<div>' + d.getDate() + '</div>' : '') +
      '</div>';
    });
    html += '</div></div>';

    // Rows
    milestones.forEach(function(m, idx){
      if(!m.start || !m.end){ 
        html += '<div style="display:flex;padding:8px 0;border-bottom:1px solid var(--border);font-size:.78rem">' +
          '<div style="min-width:180px;padding-inline-end:10px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(m.title) + '</div>' +
          '<div style="flex:1;color:var(--muted2);font-style:italic">' + tr('ms_no_dates') + '</div></div>';
        return;
      }
      var start = new Date(m.start).getTime();
      var end = new Date(m.end).getTime();
      var offsetDays = Math.round((start - minDate.getTime()) / 86400000);
      var durationDays = Math.max(1, Math.round((end - start) / 86400000) + 1);
      var leftPct = (offsetDays / totalDays) * 100;
      var widthPct = (durationDays / totalDays) * 100;
      var status = STATUS[m.status] || STATUS['not-started'];
      var statusColor = status.color;
      var progress = Math.max(0, Math.min(100, m.progress || 0));

      html += '<div style="display:flex;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);min-height:40px">' +
        '<div style="min-width:180px;padding-inline-end:10px;font-size:.78rem;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;gap:6px">' +
          '<span style="font-size:.85rem">' + status.icon + '</span>' + esc(m.title) +
        '</div>' +
        '<div style="flex:1;position:relative;height:26px">' +
          '<div style="position:absolute;left:' + leftPct + '%;width:' + widthPct + '%;top:0;height:100%;background:linear-gradient(135deg,' + statusColor + '40,' + statusColor + '70);border:1px solid ' + statusColor + ';border-radius:6px;overflow:hidden;cursor:pointer" ' +
            'data-ms-edit="' + m.id + '" title="' + esc(m.title) + ' — ' + progress + '%">' +
            '<div style="height:100%;width:' + progress + '%;background:' + statusColor + ';opacity:.7"></div>' +
          '</div>' +
        '</div>' +
      '</div>';
    });

    html += '</div></div>';
    return html;
  }

  /* ============ List ============ */
  function renderList(milestones){
    var html = '';
    milestones.sort(function(a,b){ return (a.start || '').localeCompare(b.start || ''); });
    milestones.forEach(function(m){
      var status = STATUS[m.status] || STATUS['not-started'];
      var lang = window.i18n ? window.i18n.getLang() : 'ar';
      var statusLabel = lang === 'en' ? status.nameEn : status.name;
      var days = 0;
      if(m.start && m.end){
        days = Math.max(1, Math.round((new Date(m.end) - new Date(m.start)) / 86400000) + 1);
      }
      var overdue = m.end && new Date(m.end).getTime() < Date.now() && m.status !== 'completed';
      html += '<div class="card" style="margin-bottom:10px;border-inline-start:3px solid ' + status.color + '">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-weight:800;font-size:.92rem">' + status.icon + ' ' + esc(m.title) + '</div>' +
            '<div style="font-size:.72rem;color:var(--muted);margin-top:4px">' +
              (m.start && m.end ? '📅 ' + m.start + ' → ' + m.end + ' (' + days + ' ' + tr('ms_days') + ')' : '📅 ' + tr('ms_no_dates')) +
              (m.owner ? ' · 👤 ' + esc(m.owner) : '') +
            '</div>' +
          '</div>' +
          '<span style="font-size:.66rem;padding:3px 10px;border-radius:8px;background:' + status.color + '20;color:' + status.color + ';font-weight:700;white-space:nowrap">' + statusLabel + '</span>' +
        '</div>' +
        '<div style="height:6px;background:var(--bg2);border-radius:6px;overflow:hidden;margin-bottom:8px">' +
          '<div style="height:100%;width:' + (m.progress || 0) + '%;background:' + status.color + ';border-radius:6px"></div>' +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;font-size:.72rem;color:var(--muted);margin-bottom:8px">' +
          '<span>' + tr('ms_progress') + ': <b style="color:' + status.color + '">' + (m.progress || 0) + '%</b></span>' +
          (overdue ? '<span style="color:var(--red);font-weight:700">⚠️ ' + tr('ms_overdue') + '</span>' : '') +
        '</div>' +
        (m.notes ? '<div style="font-size:.76rem;color:var(--muted);padding:8px;background:var(--bg2);border-radius:8px;margin-bottom:8px">' + esc(m.notes) + '</div>' : '') +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
          '<button class="btn btn-sm btn-ghost" data-ms-progress="' + m.id + '">📊 ' + tr('ms_update') + '</button>' +
          '<button class="btn btn-sm btn-ghost" data-ms-edit2="' + m.id + '">✏️</button>' +
          '<button class="btn btn-sm btn-danger" data-ms-del="' + m.id + '">🗑</button>' +
        '</div>' +
      '</div>';
    });
    return html;
  }

  function bindListActions(project){
    document.querySelectorAll('[data-ms-edit]').forEach(function(el){
      el.onclick = function(){ editMilestone(project, el.dataset.msEdit); };
    });
    document.querySelectorAll('[data-ms-edit2]').forEach(function(b){
      b.onclick = function(){ editMilestone(project, b.dataset.msEdit2); };
    });
    document.querySelectorAll('[data-ms-del]').forEach(function(b){
      b.onclick = function(){
        window.customConfirm(tr('ms_delete_confirm'), function(){
          project.milestones = project.milestones.filter(function(x){ return x.id !== b.dataset.msDel; });
          if(window.saveSpace) window.saveSpace();
          renderMilestones();
          toast(tr('ms_deleted'), 'success');
        });
      };
    });
    document.querySelectorAll('[data-ms-progress]').forEach(function(b){
      b.onclick = function(){
        var m = project.milestones.find(function(x){ return x.id === b.dataset.msProgress; });
        if(!m) return;
        var val = prompt(tr('ms_progress_prompt'), m.progress || 0);
        if(val === null) return;
        var n = Math.max(0, Math.min(100, parseInt(val) || 0));
        m.progress = n;
        if(n === 100) m.status = 'completed';
        else if(n > 0 && m.status === 'not-started') m.status = 'in-progress';
        if(window.saveSpace) window.saveSpace();
        renderMilestones();
      };
    });
  }

  /* ============ CRUD ============ */
  function addMilestone(project){
    window.showModal(tr('ms_new'), [
      {key:'title', label: tr('ms_title')},
      {key:'start', label: tr('ms_start'), type:'date'},
      {key:'end', label: tr('ms_end'), type:'date'},
      {key:'owner', label: tr('ms_owner')},
      {key:'progress', label: tr('ms_progress_label'), type:'number'},
      {key:'status', label: tr('ms_status'), type:'select', options:[
        {v:'not-started', l: '⏸️ ' + tr('ms_status_not_started')},
        {v:'in-progress', l: '▶️ ' + tr('ms_status_in_progress')},
        {v:'completed', l: '✅ ' + tr('ms_status_completed')},
        {v:'delayed', l: '⚠️ ' + tr('ms_status_delayed')},
        {v:'on-hold', l: '⏸️ ' + tr('ms_status_on_hold')}
      ]},
      {key:'notes', label: tr('ms_notes'), type:'textarea'}
    ], {title:'', start:'', end:'', owner:'', progress:0, status:'not-started', notes:''}, function(data){
      if(!data.title) return toast(tr('ms_title_required'), 'warn');
      project.milestones.push({
        id: uid(),
        title: data.title,
        start: data.start,
        end: data.end,
        owner: data.owner,
        progress: parseInt(data.progress) || 0,
        status: data.status || 'not-started',
        notes: data.notes,
        createdAt: new Date().toISOString()
      });
      if(window.saveSpace) window.saveSpace();
      renderMilestones();
      toast(tr('ms_added'), 'success');
    });
  }

  function editMilestone(project, id){
    var m = project.milestones.find(function(x){ return x.id === id; });
    if(!m) return;
    window.showModal(tr('ms_edit'), [
      {key:'title', label: tr('ms_title')},
      {key:'start', label: tr('ms_start'), type:'date'},
      {key:'end', label: tr('ms_end'), type:'date'},
      {key:'owner', label: tr('ms_owner')},
      {key:'progress', label: tr('ms_progress_label'), type:'number'},
      {key:'status', label: tr('ms_status'), type:'select', options:[
        {v:'not-started', l: '⏸️ ' + tr('ms_status_not_started')},
        {v:'in-progress', l: '▶️ ' + tr('ms_status_in_progress')},
        {v:'completed', l: '✅ ' + tr('ms_status_completed')},
        {v:'delayed', l: '⚠️ ' + tr('ms_status_delayed')},
        {v:'on-hold', l: '⏸️ ' + tr('ms_status_on_hold')}
      ]},
      {key:'notes', label: tr('ms_notes'), type:'textarea'}
    ], m, function(data){
      Object.assign(m, data, {progress: parseInt(data.progress) || 0});
      if(window.saveSpace) window.saveSpace();
      renderMilestones();
      toast(tr('ms_updated'), 'success');
    }, function(){
      window.customConfirm(tr('ms_delete_confirm'), function(){
        project.milestones = project.milestones.filter(function(x){ return x.id !== id; });
        if(window.saveSpace) window.saveSpace();
        renderMilestones();
        toast(tr('ms_deleted'), 'success');
      });
    });
  }

  function exportMilestones(project){
    var lines = ['📅 ' + tr('ms_gantt') + ' — ' + project.name, ''];
    project.milestones.forEach(function(m){
      var status = STATUS[m.status] || STATUS['not-started'];
      lines.push(status.icon + ' ' + m.title + ' (' + m.start + ' → ' + m.end + ') — ' + (m.progress || 0) + '%');
    });
    var text = lines.join('\n');
    if(navigator.clipboard) navigator.clipboard.writeText(text).then(function(){ toast(tr('copied'), 'success'); });
    else alert(text);
  }

  /* ============ Install ============ */
  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._milestonesInstalled) return;
    window._milestonesInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'milestones') setTimeout(renderMilestones, 100);
      return r;
    };
  }

  document.addEventListener('languagechange', function(){ 
    var active = document.querySelector('.section.active');
    if(active && active.id === 'milestones') renderMilestones();
  });

  window.renderMilestones = renderMilestones;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('🎯 Milestones loaded');
})();