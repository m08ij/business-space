/* ============================================================
   🔧 fix-buttons.js — إصلاح الكبسات المعطوبة + تحسينات UX
   ✅ مُصلَّح: Memory Leak في clone
   ============================================================ */
(function(){
  'use strict';

  function fix(){
    /* 1) إصلاح التاب — بدون Memory Leak */
    document.querySelectorAll('.nav-item').forEach(function(item){
      if(item._fixed) return;
      item._fixed = true;
      var clone = item.cloneNode(true);
      clone._fixed = true;  // ✅ منع المعالجة المكرّرة
      item.parentNode.replaceChild(clone, item);
      clone.addEventListener('click', function(){
        if(window.switchTab) window.switchTab(clone.dataset.tab);
      });
    });

    /* 2) country-tab */
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

    /* 3) task filter chips */
    document.querySelectorAll('[data-tf]').forEach(function(chip){
      if(chip._fixed) return;
      chip._fixed = true;
      chip.addEventListener('click', function(){
        document.querySelectorAll('[data-tf]').forEach(function(c){ c.classList.remove('active'); });
        chip.classList.add('active');
      });
    });

    /* 4) FAB Menu */
    document.addEventListener('click', function(e){
      var fm = document.getElementById('fabMenu');
      if(!fm || !fm.classList.contains('show')) return;
      if(e.target.closest('#fabMenu') || e.target.closest('#fabMain')) return;
      fm.classList.remove('show');
      var f = document.getElementById('fabMain');
      if(f) f.classList.remove('active');
      var ai = document.getElementById('aiFab');
      if(ai) ai.classList.remove('hidden');
    }, true);

    /* 5) AI Panel */
    document.addEventListener('click', function(e){
      var ap = document.getElementById('aiPanel');
      if(!ap || !ap.classList.contains('show')) return;
      if(e.target.closest('#aiPanel') || e.target.closest('#aiFab')) return;
      ap.classList.remove('show');
    }, true);

    /* 6) Modal scroll lock */
    var observer = new MutationObserver(function(){
      var anyModal = document.querySelector('.modal-backdrop.show');
      document.body.style.overflow = anyModal ? 'hidden' : '';
    });
    observer.observe(document.body, { childList: true, subtree: true });

    /* 7) langBtn */
    var langBtn = document.getElementById('langBtn');
    if(langBtn && !langBtn._fixed){
      langBtn._fixed = true;
      langBtn.onclick = function(){
        if(window.i18n && window.i18n.toggleLang) window.i18n.toggleLang();
      };
    }

    console.log('🔧 fix-buttons: applied');
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(fix, 1200); });
  } else {
    setTimeout(fix, 1200);
  }

  window.addEventListener('hashchange', function(){ setTimeout(fix, 200); });

  console.log('🔧 Fix Buttons module loaded');
})();