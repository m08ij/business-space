/* ============================================================
   ↶ undo-stack.js — نظام تراجع بسيط
   ✅ Ctrl+Z يستعيد آخر عملية
   ✅ يحفظ حتى 20 عملية
   ============================================================ */
(function(){
  'use strict';
  function tr(k){ return window.t ? window.t(k) : k; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }

  var MAX = 20;
  var stack = [];

  function push(label, undoFn){
    if(typeof undoFn !== 'function') return;
    stack.push({ label: label, undo: undoFn, ts: Date.now() });
    if(stack.length > MAX) stack.shift();
    updateBadge();
  }

  function undo(){
    if(!stack.length){
      toast(tr('undo_nothing'), 'info', 1500);
      return;
    }
    var item = stack.pop();
    try{
      item.undo();
      toast(tr('undo_done') + ' — ' + item.label, 'success', 2000);
    }catch(e){
      console.error('Undo failed:', e);
    }
    updateBadge();
  }

  function clear(){ stack = []; updateBadge(); }
  function size(){ return stack.length; }

  function updateBadge(){
    var b = document.getElementById('undoBadge');
    if(!b) return;
    if(!stack.length){ b.style.display = 'none'; return; }
    b.style.display = 'flex';
    b.title = tr('kb_undo') + ' (Ctrl+Z)';
  }

  function install(){
    /* إنشاء زر Undo عائم */
    if(document.getElementById('undoBadge')) return;
    var b = document.createElement('button');
    b.id = 'undoBadge';
    b.className = 'icon-btn';
    b.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:400;display:none;width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0b0f1a;box-shadow:0 8px 32px rgba(251,191,36,.4);font-size:1.3rem;border:none;cursor:pointer';
    b.innerHTML = '↶';
    b.onclick = undo;
    document.body.appendChild(b);
    updateBadge();

    /* Ctrl+Z */
    document.addEventListener('keydown', function(e){
      if(e.ctrlKey && e.key === 'z' && !e.shiftKey){
        var tag = (e.target.tagName || '').toUpperCase();
        if(tag === 'INPUT' || tag === 'TEXTAREA') return;
        e.preventDefault();
        undo();
      }
    });
  }

  window.Undo = { push: push, undo: undo, clear: clear, size: size };

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else setTimeout(install, 500);

  console.log('↶ Undo Stack loaded');
})();