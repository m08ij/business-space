/* ============================================================
   📅 calendar-sync.js — تصدير المهام للمهام لـ Google Calendar
   ============================================================ */
(function(){
  'use strict';

  function getSpace(){ return window.space || {}; }
  function toast(m, t, d){ if(typeof window.toast === 'function') window.toast(m, t || 'info', d || 2600); }
  function esc(s){ return String(s == null ? '' : s).replace(/[,;\\]/g, '\\$&').replace(/\n/g, '\\n'); }

  function pad(n){ return String(n).padStart(2, '0'); }
  function icsDate(y, m, d, h, mi){ return y + pad(m) + pad(d) + 'T' + pad(h) + pad(mi) + '00'; }

  function buildICS(){
    var sp = getSpace();
    var name = (sp.profile && sp.profile.name) || 'Business Owner';
    var lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0',
      'PRODID:-//Business Dev//Calendar Sync//AR',
      'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
      'X-WR-CALNAME:تطوير أعمالي — ' + esc(name),
      'X-WR-TIMEZONE:Asia/Qatar',
      'BEGIN:VTIMEZONE', 'TZID:Asia/Qatar',
      'BEGIN:STANDARD', 'DTSTART:19700101T000000',
      'TZOFFSETFROM:+0300', 'TZOFFSETTO:+0300',
      'TZNAME:+03', 'END:STANDARD', 'END:VTIMEZONE'
    ];

    // المهام
    (sp.tasks || []).forEach(function(t){
      if(t.done || !t.due) return;
      var p = t.due.split('-');
      if(p.length !== 3) return;
      var y = parseInt(p[0], 10), m = parseInt(p[1], 10), d = parseInt(p[2], 10);
      lines.push('BEGIN:VEVENT');
      lines.push('UID:task-' + (t.id || t.title) + '@businessdev');
      lines.push('DTSTAMP:' + icsDate(new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate(), new Date().getHours(), new Date().getMinutes()));
      lines.push('DTSTART;TZID=Asia/Qatar:' + icsDate(y, m, d, 9, 0));
      lines.push('DTEND;TZID=Asia/Qatar:' + icsDate(y, m, d, 10, 0));
      lines.push('SUMMARY:📝 ' + esc(t.title));
      if(t.project) lines.push('DESCRIPTION:💼 ' + esc(t.project));
      lines.push('BEGIN:VALARM'); lines.push('TRIGGER:-PT1H');
      lines.push('ACTION:DISPLAY'); lines.push('DESCRIPTION:' + esc(t.title));
      lines.push('END:VALARM');
      lines.push('END:VEVENT');
    });

    // اجتماعات أصحاب المصلحة (إن وُجدت)
    (sp.stakeholders || []).forEach(function(s){
      if(!s.nextMeeting) return;
      var p = s.nextMeeting.split('-');
      if(p.length !== 3) return;
      var y = parseInt(p[0], 10), m = parseInt(p[1], 10), d = parseInt(p[2], 10);
      lines.push('BEGIN:VEVENT');
      lines.push('UID:meet-' + (s.id || s.name) + '@businessdev');
      lines.push('DTSTAMP:' + icsDate(new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate(), new Date().getHours(), new Date().getMinutes()));
      lines.push('DTSTART;TZID=Asia/Qatar:' + icsDate(y, m, d, 10, 0));
      lines.push('DTEND;TZID=Asia/Qatar:' + icsDate(y, m, d, 11, 0));
      lines.push('SUMMARY:👥 اجتماع مع ' + esc(s.name));
      lines.push('END:VEVENT');
    });

    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
  }

  function downloadICS(){
    try{
      var ics = buildICS();
      var blob = new Blob([ics], {type: 'text/calendar;charset=utf-8'});
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'business-dev-' + new Date().toISOString().slice(0,10) + '.ics';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function(){ URL.revokeObjectURL(url); }, 1500);
      toast('📅 تم تنزيل ملف التقويم', 'success', 4000);
    }catch(e){ console.error(e); toast('فشل التصدير', 'warn'); }
  }

  function injectButton(){
    var menu = document.getElementById('settingsMenu');
    if(!menu || menu.querySelector('#calSyncBtn')) return;
    var btn = document.createElement('button');
    btn.className = 'settings-item';
    btn.id = 'calSyncBtn';
    btn.innerHTML = '<span>📅</span> تصدير للمهام التقويم (.ics)';
    btn.addEventListener('click', function(){
      if(typeof window.closeSettingsMenu === 'function') window.closeSettingsMenu();
      downloadICS();
    });
    var pdfBtn = menu.querySelector('#pdfBtn');
    if(pdfBtn) menu.insertBefore(btn, pdfBtn);
    else menu.appendChild(btn);
  }

  window.downloadICS = downloadICS;
  window.buildICS = buildICS;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(injectButton, 600); });
  else setTimeout(injectButton, 600);
  console.log('📅 Calendar Sync loaded');
})();