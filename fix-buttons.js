/* ============================================================
   🔧 fix-buttons.js v2 — إصلاحات خفيفة بدون MutationObserver
   ============================================================ */
(function(){
  'use strict';

  function fix(){
    /* 1) nav items */
    document.querySelectorAll('.nav-item').forEach(function(item){
      if(item._fixed) return;
      item._fixed = true;
      var clone = item.cloneNode(true);
      clone._fixed = true;
      item.parentNode.replaceChild(clone, item);
      clone.addEventListener('click', function(){
        if(window.switchTab) window.switchTab(clone.dataset.tab);
      });
    });

    /* 2) country tabs */
    document.querySelectorAll('[data-country-tab]').forEach(function(btn){
      if(btn._fixed) return;
      btn._fixed = true;
      btn.addEventListener('click', function(){
        var k = btn.dataset.countryTab;
        document.querySelectorAll('[data-country-tab]').forEach(function(b){ b.classList.toggle('active', b === btn); });
        var cg = document.getElementById('countriesGrid');
        var fg = document.getElementById('frameworksGrid');
        if(cg) cg.style.display = k === 'countries' ? '' : 'none';
        if(fg) fg.style.display = k === 'frameworks' ? '' : 'none';
        if(k === 'frameworks' && typeof window.renderFrameworks === 'function') window.renderFrameworks();
        if(k === 'countries' && typeof window.renderCountries === 'function') window.renderCountries();
      });
    });

    /* 3) task chips */
    document.querySelectorAll('[data-tf]').forEach(function(chip){
      if(chip._fixed) return;
      chip._fixed = true;
      chip.addEventListener('click', function(){
        document.querySelectorAll('[data-tf]').forEach(function(c){ c.classList.remove('active'); });
        chip.classList.add('active');
      });
    });

    /* 4) langBtn */
    var langBtn = document.getElementById('langBtn');
    if(langBtn && !langBtn._fixed){
      langBtn._fixed = true;
      langBtn.onclick = function(){
        if(window.i18n && window.i18n.toggleLang) window.i18n.toggleLang();
      };
    }

    console.log('🔧 fix-buttons applied');
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(fix, 1000); });
  else setTimeout(fix, 1000);

  /* ✅ لا نعيد التطبيق على hashchange — لا يوجد تسريب */

  console.log('🔧 Fix Buttons v2 loaded');
})();