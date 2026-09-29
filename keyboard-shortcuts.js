/* ============================================================
   ⌨️ keyboard-shortcuts.js — اختصارات لوحة المفاتيح (FIXED v2)
   ✅ حذف Ctrl+Z (مُدار في undo-stack.js لتجنب التنفيذ المزدوج)
   ✅ تبسيط منطق مطابقة الاختصارات
   ============================================================ */
(function(){
  'use strict';
  function tr(k){ return window.t ? window.t(k) : k; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }

  var SHORTCUTS = [
    { keys: 'Ctrl + K', label: 'kb_search',    action: searchFocus },
    { keys: 'Ctrl + S', label: 'kb_save',      action: saveAll },
    { keys: 'Esc',      label: 'kb_escape',    action: closeAll },
    { keys: 'N',        label: 'kb_new_idea',  action: newIdea },
    { keys: 'T',        label: 'kb_new_task',  action: newTask },
    { keys: 'W',        label: 'kb_new_wizard',action: newWizard },
    { keys: 'H',        label: 'kb_hub',       action: goHub },
    { keys: 'D',        label: 'kb_dashboard', action: function(){ go('dashboard'); } },
    { keys: 'I',        label: 'kb_ideas',     action: function(){ go('ideas'); } },
    { keys: 'R',        label: 'kb_roadmap',   action: function(){ go('roadmap'); } },
    { keys: '?',        label: 'kb_help',      action: showHelp }
  ];

  var SINGLE_KEY_MAP = {
    'n': newIdea,
    't': newTask,
    'w': newWizard,
    'h': goHub,
    'd': function(){ go('dashboard'); },
    'i': function(){ go('ideas'); },
    'r': function(){ go('roadmap'); }
  };

  function searchFocus(){
    var s = document.getElementById('searchInput');
    if(s){ s.focus(); s.select(); }
  }
  function saveAll(){
    if(window.saveSpace) window.saveSpace();
    toast(tr('toast_saved_cloud') || '✓ Saved', 'success', 1200);
  }
  function closeAll(){
    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var sm = document.getElementById('settingsMenu'); if(sm) sm.classList.remove('show');
    var tp = document.getElementById('themePanel'); if(tp) tp.classList.remove('show');
  }
  function newIdea(){ go('ideas'); setTimeout(function(){ if(window.addIdea) window.addIdea(); }, 250); }
  function newTask(){ go('tasks'); setTimeout(function(){ var b = document.getElementById('btnAddTask'); if(b) b.click(); }, 250); }
  function newWizard(){ if(window.startSmartProjectWizard) window.startSmartProjectWizard(); }
  function goHub(){ go('hub'); }
  function go(tab){
    if(window.switchTab) window.switchTab(tab);
  }

  function showHelp(){
    var wasOpen = document.getElementById('kbdHelpModal');
    if(wasOpen){ wasOpen.remove(); return; }

    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.id = 'kbdHelpModal';

    var rows = SHORTCUTS.map(function(s){
      return '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;border-bottom:1px solid var(--border)">' +
        '<span style="font-size:.85rem">' + tr(s.label) + '</span>' +
        '<kbd style="background:var(--bg2);border:1px solid var(--border2);border-radius:6px;padding:4px 10px;font-family:monospace;font-size:.75rem;color:var(--cyan);font-weight:700">' +
          s.keys +
        '</kbd>' +
      '</div>';
    }).join('');

    bd.innerHTML = '<div class="modal" style="max-width:520px;padding:0;overflow:hidden">' +
      '<div style="padding:18px 22px;background:linear-gradient(135deg,rgba(34,211,238,.15),rgba(167,139,250,.15));border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px">' +
        '<div style="font-size:1.6rem">⌨️</div>' +
        '<div style="font-weight:800;font-size:1rem;flex:1">' + tr('kb_help_title') + '</div>' +
        '<button class="btn btn-sm btn-ghost" id="kbdClose">✕</button>' +
      '</div>' +
      '<div style="max-height:60vh;overflow-y:auto">' + rows + '</div>' +
      '<div style="padding:12px 22px;background:var(--card2);font-size:.72rem;color:var(--muted2);text-align:center">' +
        '💡 ' + (window.i18n && window.i18n.getLang() === 'en' ? 'Press ? anytime to toggle' : 'اضغط ? في أي وقت لفتح/إغلاق القائمة') +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);
    bd.querySelector('#kbdClose').onclick = function(){ bd.remove(); };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
  }

  function isTyping(e){
    var tag = (e.target.tagName || '').toUpperCase();
    if(tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
    if(e.target.isContentEditable) return true;
    return false;
  }

  document.addEventListener('keydown', function(e){
    /* Ctrl+K / Ctrl+S — Ctrl+Z مُدار في undo-stack.js */
    if(e.ctrlKey || e.metaKey){
      if(e.key === 'k' || e.key === 'K'){ e.preventDefault(); searchFocus(); return; }
      if(e.key === 's' || e.key === 'S'){ e.preventDefault(); saveAll(); return; }
      return;
    }

    if(e.key === 'Escape'){ closeAll(); return; }

    if(e.key === '?' || (e.shiftKey && e.key === '/')){ e.preventDefault(); showHelp(); return; }

    if(e.altKey) return;
    if(isTyping(e)) return;
    if(e.key.length !== 1) return;

    var k = e.key.toLowerCase();
    if(SINGLE_KEY_MAP[k]){
      e.preventDefault();
      SINGLE_KEY_MAP[k]();
    }
  });

  window.KeyboardShortcuts = { showHelp: showHelp };
  console.log('⌨️ Keyboard Shortcuts loaded (FIXED v2)');
})();