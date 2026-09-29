/* ============================================================
   ↶ undo-stack.js — نظام تراجع (FIXED v2)
   ✅ دعم RTL/LTR — الزر يتحرك حسب الاتجاه
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

  function isRTL(){
    return document.documentElement.getAttribute('dir') === 'rtl';
  }

  function positionBadge(b){
    /* في RTL: bottom+right (نفس FAB). في LTR: bottom+right أيضاً لكن فوق FAB */
    /* لتفادي التعارض مع FAB، نضع undoBadge فوق FAB في كلا الاتجاهين */
    if(isRTL()){
      b.style.right = '24px';
      b.style.left = 'auto';
      b.style.bottom = '92px'; /* فوق FAB */
    } else {
      b.style.right = '24px';
      b.style.left = 'auto';
      b.style.bottom = '92px';
    }
  }

  function updateBadge(){
    var b = document.getElementById('undoBadge');
    if(!b) return;
    if(!stack.length){ b.style.display = 'none'; return; }
    b.style.display = 'flex';
    b.title = tr('kb_undo') + ' (Ctrl+Z)';
    positionBadge(b);
  }

  function install(){
    if(document.getElementById('undoBadge')) return;
    var b = document.createElement('button');
    b.id = 'undoBadge';
    b.className = 'icon-btn';
    b.style.cssText = 'position:fixed;z-index:400;display:none;width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0b0f1a;box-shadow:0 8px 32px rgba(251,191,36,.4);font-size:1.3rem;border:none;cursor:pointer';
    b.innerHTML = '↶';
    b.onclick = undo;
    document.body.appendChild(b);
    updateBadge();

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

  console.log('↶ Undo Stack loaded (FIXED v2)');
})();