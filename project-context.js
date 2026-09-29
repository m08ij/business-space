/* ============================================================
   📌 project-context.js — ذاكرة موحّدة للمشروع الحالي
   ✅ عند تغيير المشروع في أي قسم → يتغير في كل الأقسام
   ============================================================ */
(function(){
  'use strict';
  var STORAGE_KEY = 'bd_current_project';
  var current = null;

  try{ current = localStorage.getItem(STORAGE_KEY) || null; }catch(e){}

  function getCurrent(){ return current; }
  function setCurrent(id){
    if(current === id) return;
    current = id;
    try{
      if(id) localStorage.setItem(STORAGE_KEY, id);
      else localStorage.removeItem(STORAGE_KEY);
    }catch(e){}
    document.dispatchEvent(new CustomEvent('projectchange', { detail: { id: id } }));
  }
  function subscribe(fn){
    document.addEventListener('projectchange', function(e){
      try{ fn(e.detail.id); }catch(err){ console.error('projectchange error:', err); }
    });
  }
  function ensureValid(){
    var sp = window.space || {};
    var projects = sp.projects || [];
    if(!projects.length){ current = null; return null; }
    if(!current || !projects.find(function(p){ return p.id === current; })){
      current = projects[0].id;
      try{ localStorage.setItem(STORAGE_KEY, current); }catch(e){}
    }
    return current;
  }
  function clear(){ setCurrent(null); }

  window.ProjectContext = {
    getCurrent: getCurrent,
    setCurrent: setCurrent,
    subscribe: subscribe,
    ensureValid: ensureValid,
    clear: clear
  };

  console.log('📌 Project Context loaded');
})();