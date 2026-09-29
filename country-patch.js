/* ============================================================
   🌍 country-patch.js — قائمة الدول الديناميكية + "أخرى"
   ============================================================ */
(function(){
  'use strict';
  
  function populateSelect(sel){
    if(!sel || sel._patched) return;
    sel._patched = true;
    var countries = window.getAllCountries ? window.getAllCountries() : (window.COUNTRIES_DB || {});
    var current = sel.value;
    sel.innerHTML = '';
    Object.keys(countries).forEach(function(k){
      var c = countries[k];
      var opt = document.createElement('option');
      opt.value = k;
      opt.textContent = (c.flag || '🌍') + ' ' + (c.name || '') + ' / ' + (c.nameEn || '');
      sel.appendChild(opt);
    });
    // خيار "أخرى"
    var other = document.createElement('option');
    other.value = '__other__';
    other.textContent = '🌍 أخرى / Other';
    sel.appendChild(other);
    if(current && sel.querySelector('option[value="' + current + '"]')) sel.value = current;
  }

  function patch(){
    // شاشة الترحيب
    populateSelect(document.getElementById('welcomeCountry'));
  }
  
  // أعد التعبئة عند تغيير اللغة
  document.addEventListener('languagechange', function(){
    var s = document.getElementById('welcomeCountry');
    if(s) s._patched = false;
    patch();
  });
  
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(patch, 600); });
  else setTimeout(patch, 600);
  
  // مراقبة شاشة الترحيب (تُبنى مرة واحدة)
  var mo = new MutationObserver(function(){ patch(); });
  mo.observe(document.body, { childList: true, subtree: true });
  
  window.populateCountrySelect = populateSelect;
  console.log('🌍 Country patch loaded');
})();