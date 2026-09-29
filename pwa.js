/* ============================================================
   📱 pwa.js — تسجيل Service Worker + زر التثبيت + زر المزامنة
   ============================================================ */
(function(){
  'use strict';

  function registerSW(){
    if(!('serviceWorker' in navigator)) return;
    if(location.protocol !== 'https:' && location.hostname !== 'localhost'){
      console.warn('⚠️ Service Worker يحتاج HTTPS');
      return;
    }
    navigator.serviceWorker.register('./sw.js', { scope: './' })
      .then(function(reg){ console.log('✅ SW registered:', reg.scope); })
      .catch(function(err){ console.warn('SW registration failed:', err); });
  }

  var deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', function(e){
    e.preventDefault();
    deferredPrompt = e;
    showInstallBtn();
  });

  window.addEventListener('appinstalled', function(){
    hideInstallBtn();
      if(window.toast) window.toast(window.t ? window.t('toast_app_installed') : '🎉 App installed', 'success', 2500);
  });

  function showInstallBtn(){
    var btn = document.getElementById('pwaInstallBtn');
    if(btn) btn.style.display = 'flex';
  }
  function hideInstallBtn(){
    var btn = document.getElementById('pwaInstallBtn');
    if(btn) btn.style.display = 'none';
  }

  function bindInstallBtn(){
    var btn = document.getElementById('pwaInstallBtn');
    if(!btn || btn._pwaBound) return;
    btn._pwaBound = true;
    btn.addEventListener('click', async function(){
      var menu = document.getElementById('settingsMenu');
      if(menu) menu.classList.remove('show');
      if(!deferredPrompt){
        if(window.toast) window.toast(window.t ? window.t('toast_app_installed_already') : 'Already installed', 'info', 2200);
        return;
      }
      deferredPrompt.prompt();
      var choice = await deferredPrompt.userChoice;
      deferredPrompt = null;
      hideInstallBtn();
    });
  }

  function bindSyncBtn(){
    var btn = document.getElementById('syncCodeBtn');
    if(!btn || btn._syncBound) return;
    btn._syncBound = true;
    btn.addEventListener('click', function(){
      var menu = document.getElementById('settingsMenu');
      if(menu) menu.classList.remove('show');
      if(window.SB && window.SB.showSyncPanel) window.SB.showSyncPanel();
      else if(window.toast) window.toast('خدمة المزامنة غير متوفرة', 'warn', 2200);
    });
  }

  function init(){
    registerSW();
    setTimeout(bindInstallBtn, 400);
    setTimeout(bindSyncBtn, 400);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  console.log('📱 PWA module loaded');
})();