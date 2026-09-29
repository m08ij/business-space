/* ============================================================
   🌍 country-patch.js — قائمة الدول العالمية في القوائم
   - كل دول العالم
   - مرتّبة أبجدياً بالإنجليزية
   - الدول التفصيلية (9 عربية) + المخصصة في الأعلى
   ============================================================ */
(function(){
  'use strict';

  function tr(k, d){ return (window.t && window.t(k)) || d || k; }
  function getLang(){ return (window.i18n && window.i18n.getLang()) || 'ar'; }

  /* الدول المميزة (تفاصيل كاملة) */
  function getFeaturedCountries(){
    var featured = {};
    var base = window.COUNTRIES_DB || {};
    Object.keys(base).forEach(function(k){
      featured[k] = Object.assign({ _featured: true, code: k }, base[k]);
    });
    var custom = (window.space && window.space.customCountries) || [];
    custom.forEach(function(c){
      featured[c.code] = Object.assign({ _custom: true }, c);
    });
    return featured;
  }

  /* يبني قائمة خيارات منظمة */
  function buildCountryOptions(){
    var lang = getLang();
    var featured = getFeaturedCountries();
    var global = window.getGlobalCountries ? window.getGlobalCountries() : [];
    
    var featuredCodes = Object.keys(featured);
    var featuredSet = {};
    featuredCodes.forEach(function(c){ featuredSet[c] = true; });
    
    var otherCountries = global.filter(function(c){
      return !featuredSet[c.code];
    });
    
    return { featured: featured, featuredCodes: featuredCodes, other: otherCountries, lang: lang };
  }

  /* تعبئة select بالدول */
  function populateSelect(sel){
    if(!sel) return;
    var current = sel.value;
    var data = buildCountryOptions();
    var lang = data.lang;
    
    sel.innerHTML = '';
    
    /* 1) الدول المميزة (تفاصيل كاملة) */
    if(data.featuredCodes.length){
      var group1 = document.createElement('optgroup');
      group1.label = lang === 'en' ? '⭐ Featured (full details)' : '⭐ مميزة (تفاصيل كاملة)';
      data.featuredCodes.forEach(function(code){
        var c = data.featured[code];
        var opt = document.createElement('option');
        opt.value = code;
        opt.textContent = (c.flag || '🌍') + ' ' + (lang === 'en' ? c.nameEn : c.name) +
                         (lang === 'en' ? '' : ' / ' + c.nameEn);
        group1.appendChild(opt);
      });
      sel.appendChild(group1);
    }
    
    /* 2) باقي دول العالم أبجدياً */
    if(data.other.length){
      var group2 = document.createElement('optgroup');
      group2.label = lang === 'en' ? '🌍 All countries (A → Z)' : '🌍 كل الدول (أ → ي)';
      data.other.forEach(function(c){
        var opt = document.createElement('option');
        opt.value = c.code;
        opt.textContent = c.flag + ' ' + (lang === 'en' ? c.nameEn : c.name) +
                         (lang === 'en' ? '' : ' / ' + c.nameEn);
        group2.appendChild(opt);
      });
      sel.appendChild(group2);
    }
    
    /* 3) خيار "أخرى" */
    var other = document.createElement('option');
    other.value = '__other__';
    other.textContent = lang === 'en' ? '❓ Other / Not listed' : '❓ أخرى / غير مدرجة';
    sel.appendChild(other);
    
    /* استعادة القيمة */
    if(current && sel.querySelector('option[value="' + current + '"]')) sel.value = current;
    sel._patched = true;
  }

  /* هل الرمز دولة عالمية؟ */
  function isGlobalCountry(code){
    return !!(window.getGlobalCountryByCode && window.getGlobalCountryByCode(code));
  }

  /* اسم الدولة من أي مصدر */
  function getCountryDisplay(code){
    var lang = getLang();
    if(window.getGlobalCountryByCode){
      var g = window.getGlobalCountryByCode(code);
      if(g) return { flag: g.flag, name: lang === 'en' ? g.nameEn : g.name, nameEn: g.nameEn };
    }
    var db = window.COUNTRIES_DB && window.COUNTRIES_DB[code];
    if(db) return { flag: db.flag, name: lang === 'en' ? db.nameEn : db.name, nameEn: db.nameEn };
    var custom = ((window.space && window.space.customCountries) || []).find(function(c){ return c.code === code; });
    if(custom) return { flag: custom.flag, name: lang === 'en' ? custom.nameEn : custom.name, nameEn: custom.nameEn };
    return { flag: '🌍', name: code, nameEn: code };
  }

  function patch(){
    populateSelect(document.getElementById('welcomeCountry'));
  }

  /* إعادة التعبئة عند تغيير اللغة */
  document.addEventListener('languagechange', function(){
    var s = document.getElementById('welcomeCountry');
    if(s) s._patched = false;
    patch();
  });

  /* مراقبة DOM */
  var mo = new MutationObserver(function(){ patch(); });
  
  function init(){
    mo.observe(document.body, { childList: true, subtree: true });
    patch();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  /* تصدير للاستخدام في الموديولات الأخرى */
  window.populateCountrySelect = populateSelect;
  window.getCountryDisplay = getCountryDisplay;
  window.isGlobalCountry = isGlobalCountry;
  window.buildCountryOptions = buildCountryOptions;

  console.log('🌍 Country patch loaded — global list ready');
})();