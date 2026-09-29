/* ============================================================
   ⚙️ sw.js — Service Worker v13 (FIXED — actual files)
   ============================================================ */
var CACHE_NAME = 'bd-cache-v13';
var URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',

  /* Core */
  './supabase-config.js',
  './supabase-client.js',
  './business-data.js',
  './i18n.js',
  './i18n-patch.js',
  './kb-i18n-patch.js',
  './i18n-extra.js',
  './i18n-finish.js',
  './translation-interceptor.js',
  './project-context.js',
  './project-knowledge-base.js',
  './smart-project-wizard.js',
  './qc-fix.js',
  './fix-buttons.js',

  /* Modules */
  './ai-advisor.js',
  './strategy-builder.js',
  './idea-incubator.js',
  './impact-calculator.js',
  './country-adapter.js',
  './leadership-coach.js',
  './sales-toolkit.js',
  './project-lifecycle.js',
  './milestones.js',
  './risk-register.js',
  './email-digest.js',
  './file-sync-plus.js',
  './insights.js',
  './calendar-sync.js',
  './archive.js',
  './demo-project.js',
  './project-classifier.js',
  './countries-global.js',
  './country-patch.js',
  './widgets.js',
  './pwa.js',
  './project-hub.js',
  './undo-stack.js',
  './keyboard-shortcuts.js',
  './perf-boost.js'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      /* addAll يفشل كلياً لو ملف واحد مفقود — لذا نستخدم map مع catch */
      return Promise.all(URLS_TO_CACHE.map(function(url){
        return cache.add(url).catch(function(err){
          console.warn('SW cache skip:', url, err.message);
        });
      }));
    }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ if(k !== CACHE_NAME) return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  var url = e.request.url;
  if(url.indexOf('supabase.co') > -1) return;
  if(url.indexOf('cdn.jsdelivr.net') > -1) return;
  if(url.indexOf('api.qrserver.com') > -1) return;
  if(url.indexOf('web3forms.com') > -1) return;
  if(e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(function(cached){
      var fetchPromise = fetch(e.request).then(function(response){
        if(response && response.status === 200){
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache){ cache.put(e.request, clone).catch(function(){}); });
        }
        return response;
      }).catch(function(){ return cached; });
      return cached || fetchPromise;
    })
  );
});