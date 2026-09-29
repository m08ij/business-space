/* ============================================================
   ⚡ perf-boost.js — تحسينات أداء بسيطة
   ✅ Debounced spacesave
   ✅ Lazy rendering
   ✅ تقليل عمليات الرسم الزائدة
   ============================================================ */
(function(){
  'use strict';

  /* ✅ 1) Debounce spacesave — لا يشغّل المستمعين أكثر من مرة/200ms */
  var _saveTimers = {};
  var _originalDispatch = null;

  function debounceSpacesave(){
    var orig = document.dispatchEvent.bind(document);
    document.dispatchEvent = function(evt){
      if(evt && evt.type === 'spacesave'){
        if(_saveTimers.spacesave) clearTimeout(_saveTimers.spacesave);
        _saveTimers.spacesave = setTimeout(function(){
          orig(new CustomEvent('spacesave', { detail: evt.detail }));
        }, 250);
        return true;
      }
      return orig(evt);
    };
  }

  /* ✅ 2) Lazy render للـ widgets — فقط عند الفتح */
  function lazyWidgets(){
    var sidebar = document.getElementById('lwSidebar');
    if(!sidebar) return;
    if(sidebar._lazyHooked) return;
    sidebar._lazyHooked = true;

    var observer = new MutationObserver(function(mutations){
      mutations.forEach(function(m){
        if(m.attributeName === 'class' && sidebar.classList.contains('open')){
          document.dispatchEvent(new CustomEvent('widgets-visible'));
        }
      });
    });
    observer.observe(sidebar, { attributes: true });
  }

  /* ✅ 3) تقليل reflow في i18n */
  function optimizeI18n(){
    if(!window.i18n || !window.i18n.setLang) return;
    if(window._i18nOptimized) return;
    window._i18nOptimized = true;

    var orig = window.i18n.setLang;
    window.i18n.setLang = function(lang, silent){
      document.documentElement.style.transition = 'none';
      var r = orig.apply(this, arguments);
      requestAnimationFrame(function(){
        document.documentElement.style.transition = '';
      });
      return r;
    };
  }

  /* ✅ 4) إيقاف setInterval للـ widgets عند عدم النشاط */
  function pauseWidgetsWhenHidden(){
    document.addEventListener('visibilitychange', function(){
      if(document.hidden){
        document.dispatchEvent(new CustomEvent('app-background'));
      } else {
        document.dispatchEvent(new CustomEvent('app-foreground'));
      }
    });
  }

  function install(){
    debounceSpacesave();
    lazyWidgets();
    optimizeI18n();
    pauseWidgetsWhenHidden();
    console.log('⚡ Perf Boost loaded');
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(install, 1000); });
  else setTimeout(install, 1000);
})();