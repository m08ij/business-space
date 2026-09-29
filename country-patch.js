/* ============================================================
   🌍 country-patch.js — قائمة الدول العالمية (نسخة محسّنة للأداء)
   - بدون MutationObserver (كان يسبب تجميد)
   - patch مرة واحدة عند التحميل + عند تغيير اللغة فقط
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

  /* تعبئة select بالدول (خفيف وسريع) */
  function populateSelect(sel){
    if(!sel) return;
    var current = sel.value;
    var data = buildCountryOptions();
    var lang = data.lang;
    
    /* بناء HTML كامل مرة واحدة (أسرع بكثير من appendChild في حلقة) */
    var html = '';
    
    if(data.featuredCodes.length){
      html += '<optgroup label="' + (lang === 'en' ? '⭐ Featured (full details)' : '⭐ مميزة (تفاصيل كاملة)') + '">';
      data.featuredCodes.forEach(function(code){
        var c = data.featured[code];
        var label = (c.flag || '🌍') + ' ' + (lang === 'en' ? c.nameEn : c.name) +
                    (lang === 'en' ? '' : ' / ' + (c.nameEn || ''));
        html += '<option value="' + code + '">' + label + '</option>';
      });
      html += '</optgroup>';
    }
    
    if(data.other.length){
      html += '<optgroup label="' + (lang === 'en' ? '🌍 All countries (A → Z)' : '🌍 كل الدول (أ → ي)') + '">';
      data.other.forEach(function(c){
        var label = c.flag + ' ' + (lang === 'en' ? c.nameEn : c.name) +
                    (lang === 'en' ? '' : ' / ' + c.nameEn);
        html += '<option value="' + c.code + '">' + label + '</option>';
      });
      html += '</optgroup>';
    }
    
    html += '<option value="__other__">' + (lang === 'en' ? '❓ Other / Not listed' : '❓ أخرى / غير مدرجة') + '</option>';
    
    sel.innerHTML = html;
    
    /* استعادة القيمة */
    if(current && sel.querySelector('option[value="' + current + '"]')) sel.value = current;
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

  /* ✅ patch مرة واحدة فقط — بدون مراقبة DOM */
  var _lastPatchedLang = null;
  function patch(force){
    var sel = document.getElementById('welcomeCountry');
    if(!sel) return false;
    var lang = getLang();
    /* أعد البناء فقط إذا تغيّرت اللغة أو أول مرة */
    if(!force && _lastPatchedLang === lang && sel.options.length > 3) return true;
    populateSelect(sel);
    _lastPatchedLang = lang;
    return true;
  }

  /* ✅ استخدم setTimeout فقط، بدون MutationObserver */
  function init(){
    if(!patch()){
      /* انتظر حتى يظهر الـ select (بحد أقصى 5 ثوان) */
      var tries = 0;
      var timer = setInterval(function(){
        tries++;
        if(patch() || tries > 20){
          clearInterval(timer);
        }
      }, 250);
    }
  }

  /* ✅ عند تغيير اللغة فقط (وليس كل DOM mutation) */
  document.addEventListener('languagechange', function(){
    setTimeout(function(){ patch(true); }, 100);
  });

  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(init, 300); });
  } else {
    setTimeout(init, 300);
  }

  /* تصدير للاستخدام في الموديولات الأخرى */
  window.populateCountrySelect = populateSelect;
  window.getCountryDisplay = getCountryDisplay;
  window.isGlobalCountry = isGlobalCountry;
  window.buildCountryOptions = buildCountryOptions;

  console.log('🌍 Country patch loaded — global list ready (optimized)');
})();