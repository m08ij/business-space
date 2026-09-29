/* ============================================================
   🔧 qc-fix.js — إصلاحات سريعة
   ============================================================ */
(function(){
  'use strict';

  // إزالة Debug panel إذا وجد
  function cleanup(){
    var dbg = document.getElementById('debugPanel');
    if(dbg) dbg.remove();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', cleanup);
  else cleanup();

  console.log('🔧 QC Fix loaded');
})();