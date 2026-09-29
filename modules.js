/* ============================================================
   📦 modules.js — AUTO-GENERATED BUNDLE
   Generated: 2026-09-29T12:48:56.133Z
   Sources: 17 files
   ⚠️ لا تعدّل هذا الملف — عدّل المصادر في src/ ثم أعد التشغيل
   ============================================================ */


/* ========== countries-global.js ========== */
/* ============================================================
   🌍 countries-global.js — قائمة دول العالم الكاملة
   ISO 3166-1 alpha-2 codes + Arabic names
   الترتيب الأبجدي يتم عند العرض (حسب nameEn)
   ============================================================ */
(function(){
  'use strict';

  /* صيغة مختصرة: [code, nameEn, nameAr] — الأعلام تُولّد تلقائياً */
  var RAW = [
    ['AF','Afghanistan','أفغانستان'],
    ['AL','Albania','ألبانيا'],
    ['DZ','Algeria','الجزائر'],
    ['AD','Andorra','أندورا'],
    ['AO','Angola','أنغولا'],
    ['AG','Antigua and Barbuda','أنتيغوا وبربودا'],
    ['AR','Argentina','الأرجنتين'],
    ['AM','Armenia','أرمينيا'],
    ['AU','Australia','أستراليا'],
    ['AT','Austria','النمسا'],
    ['AZ','Azerbaijan','أذربيجان'],
    ['BS','Bahamas','الباهاما'],
    ['BH','Bahrain','البحرين'],
    ['BD','Bangladesh','بنغلاديش'],
    ['BB','Barbados','بربادوس'],
    ['BY','Belarus','بيلاروسيا'],
    ['BE','Belgium','بلجيكا'],
    ['BZ','Belize','بليز'],
    ['BJ','Benin','بنين'],
    ['BT','Bhutan','بوتان'],
    ['BO','Bolivia','بوليفيا'],
    ['BA','Bosnia and Herzegovina','البوسنة والهرسك'],
    ['BW','Botswana','بوتسوانا'],
    ['BR','Brazil','البرازيل'],
    ['BN','Brunei','بروناي'],
    ['BG','Bulgaria','بلغاريا'],
    ['BF','Burkina Faso','بوركينا فاسو'],
    ['BI','Burundi','بوروندي'],
    ['KH','Cambodia','كمبوديا'],
    ['CM','Cameroon','الكاميرون'],
    ['CA','Canada','كندا'],
    ['CV','Cape Verde','الرأس الأخضر'],
    ['CF','Central African Republic','جمهورية أفريقيا الوسطى'],
    ['TD','Chad','تشاد'],
    ['CL','Chile','تشيلي'],
    ['CN','China','الصين'],
    ['CO','Colombia','كولومبيا'],
    ['KM','Comoros','جزر القمر'],
    ['CG','Congo','الكونغو'],
    ['CD','Congo (DRC)','الكونغو الديمقراطية'],
    ['CR','Costa Rica','كوستاريكا'],
    ['CI','Côte d\'Ivoire','ساحل العاج'],
    ['HR','Croatia','كرواتيا'],
    ['CU','Cuba','كوبا'],
    ['CY','Cyprus','قبرص'],
    ['CZ','Czech Republic','التشيك'],
    ['DK','Denmark','الدنمارك'],
    ['DJ','Djibouti','جيبوتي'],
    ['DM','Dominica','دومينيكا'],
    ['DO','Dominican Republic','جمهورية الدومينيكان'],
    ['EC','Ecuador','الإكوادور'],
    ['EG','Egypt','مصر'],
    ['SV','El Salvador','السلفادور'],
    ['GQ','Equatorial Guinea','غينيا الاستوائية'],
    ['ER','Eritrea','إريتريا'],
    ['EE','Estonia','إستونيا'],
    ['SZ','Eswatini','إسواتيني'],
    ['ET','Ethiopia','إثيوبيا'],
    ['FJ','Fiji','فيجي'],
    ['FI','Finland','فنلندا'],
    ['FR','France','فرنسا'],
    ['GA','Gabon','الغابون'],
    ['GM','Gambia','غامبيا'],
    ['GE','Georgia','جورجيا'],
    ['DE','Germany','ألمانيا'],
    ['GH','Ghana','غانا'],
    ['GR','Greece','اليونان'],
    ['GD','Grenada','غرينادا'],
    ['GT','Guatemala','غواتيمالا'],
    ['GN','Guinea','غينيا'],
    ['GW','Guinea-Bissau','غينيا بيساو'],
    ['GY','Guyana','غيانا'],
    ['HT','Haiti','هايتي'],
    ['HN','Honduras','هندوراس'],
    ['HU','Hungary','هنغاريا'],
    ['IS','Iceland','آيسلندا'],
    ['IN','India','الهند'],
    ['ID','Indonesia','إندونيسيا'],
    ['IR','Iran','إيران'],
    ['IQ','Iraq','العراق'],
    ['IE','Ireland','أيرلندا'],
    ['IT','Italy','إيطاليا'],
    ['JM','Jamaica','جامايكا'],
    ['JP','Japan','اليابان'],
    ['JO','Jordan','الأردن'],
    ['KZ','Kazakhstan','كازاخستان'],
    ['KE','Kenya','كينيا'],
    ['KI','Kiribati','كيريباتي'],
    ['KW','Kuwait','الكويت'],
    ['KG','Kyrgyzstan','قيرغيزستان'],
    ['LA','Laos','لاوس'],
    ['LV','Latvia','لاتفيا'],
    ['LB','Lebanon','لبنان'],
    ['LS','Lesotho','ليسوتو'],
    ['LR','Liberia','ليبيريا'],
    ['LY','Libya','ليبيا'],
    ['LI','Liechtenstein','ليختنشتاين'],
    ['LT','Lithuania','ليتوانيا'],
    ['LU','Luxembourg','لوكسمبورغ'],
    ['MG','Madagascar','مدغشقر'],
    ['MW','Malawi','مالاوي'],
    ['MY','Malaysia','ماليزيا'],
    ['MV','Maldives','المالديف'],
    ['ML','Mali','مالي'],
    ['MT','Malta','مالطا'],
    ['MH','Marshall Islands','جزر مارشال'],
    ['MR','Mauritania','موريتانيا'],
    ['MU','Mauritius','موريشيوس'],
    ['MX','Mexico','المكسيك'],
    ['FM','Micronesia','ميكرونيزيا'],
    ['MD','Moldova','مولدوفا'],
    ['MC','Monaco','موناكو'],
    ['MN','Mongolia','منغوليا'],
    ['ME','Montenegro','الجبل الأسود'],
    ['MA','Morocco','المغرب'],
    ['MZ','Mozambique','موزمبيق'],
    ['MM','Myanmar','ميانمار'],
    ['NA','Namibia','ناميبيا'],
    ['NR','Nauru','ناورو'],
    ['NP','Nepal','نيبال'],
    ['NL','Netherlands','هولندا'],
    ['NZ','New Zealand','نيوزيلندا'],
    ['NI','Nicaragua','نيكاراغوا'],
    ['NE','Niger','النيجر'],
    ['NG','Nigeria','نيجيريا'],
    ['KP','North Korea','كوريا الشمالية'],
    ['MK','North Macedonia','مقدونيا الشمالية'],
    ['NO','Norway','النرويج'],
    ['OM','Oman','عمان'],
    ['PK','Pakistan','باكستان'],
    ['PW','Palau','بالاو'],
    ['PS','Palestine','فلسطين'],
    ['PA','Panama','بنما'],
    ['PG','Papua New Guinea','بابوا غينيا الجديدة'],
    ['PY','Paraguay','باراغواي'],
    ['PE','Peru','بيرو'],
    ['PH','Philippines','الفلبين'],
    ['PL','Poland','بولندا'],
    ['PT','Portugal','البرتغال'],
    ['QA','Qatar','قطر'],
    ['RO','Romania','رومانيا'],
    ['RU','Russia','روسيا'],
    ['RW','Rwanda','رواندا'],
    ['KN','Saint Kitts and Nevis','سانت كيتس ونيفيس'],
    ['LC','Saint Lucia','سانت لوسيا'],
    ['VC','Saint Vincent and the Grenadines','سانت فنسنت والغرينادين'],
    ['WS','Samoa','ساموا'],
    ['SM','San Marino','سان مارينو'],
    ['ST','São Tomé and Príncipe','ساو تومي وبرينسيبي'],
    ['SA','Saudi Arabia','السعودية'],
    ['SN','Senegal','السنغال'],
    ['RS','Serbia','صربيا'],
    ['SC','Seychelles','سيشل'],
    ['SL','Sierra Leone','سيراليون'],
    ['SG','Singapore','سنغافورة'],
    ['SK','Slovakia','سلوفاكيا'],
    ['SI','Slovenia','سلوفينيا'],
    ['SB','Solomon Islands','جزر سليمان'],
    ['SO','Somalia','الصومال'],
    ['ZA','South Africa','جنوب أفريقيا'],
    ['KR','South Korea','كوريا الجنوبية'],
    ['SS','South Sudan','جنوب السودان'],
    ['ES','Spain','إسبانيا'],
    ['LK','Sri Lanka','سريلانكا'],
    ['SD','Sudan','السودان'],
    ['SR','Suriname','سورينام'],
    ['SE','Sweden','السويد'],
    ['CH','Switzerland','سويسرا'],
    ['SY','Syria','سوريا'],
    ['TW','Taiwan','تايوان'],
    ['TJ','Tajikistan','طاجيكستان'],
    ['TZ','Tanzania','تنزانيا'],
    ['TH','Thailand','تايلاند'],
    ['TL','Timor-Leste','تيمور الشرقية'],
    ['TG','Togo','توغو'],
    ['TO','Tonga','تونغا'],
    ['TT','Trinidad and Tobago','ترينيداد وتوباغو'],
    ['TN','Tunisia','تونس'],
    ['TR','Turkey','تركيا'],
    ['TM','Turkmenistan','تركمانستان'],
    ['TV','Tuvalu','توفالو'],
    ['UG','Uganda','أوغندا'],
    ['UA','Ukraine','أوكرانيا'],
    ['AE','United Arab Emirates','الإمارات'],
    ['GB','United Kingdom','المملكة المتحدة'],
    ['US','United States','الولايات المتحدة'],
    ['UY','Uruguay','أوروغواي'],
    ['UZ','Uzbekistan','أوزبكستان'],
    ['VU','Vanuatu','فانواتو'],
    ['VA','Vatican City','الفاتيكان'],
    ['VE','Venezuela','فنزويلا'],
    ['VN','Vietnam','فيتنام'],
    ['YE','Yemen','اليمن'],
    ['ZM','Zambia','زامبيا'],
    ['ZW','Zimbabwe','زيمبابوي']
  ];

  /* توليد علم من رمز الدولة (Regional Indicator Symbols) */
  function flagFromCode(code){
    if(!code || code.length !== 2) return '🌍';
    try {
      return code.toUpperCase().replace(/./g, function(c){
        return String.fromCodePoint(c.charCodeAt(0) + 127397);
      });
    } catch(e){ return '🌍'; }
  }

  /* بناء القائمة الكاملة */
  var GLOBAL_COUNTRIES = RAW.map(function(r){
    return {
      code: r[0],
      flag: flagFromCode(r[0]),
      nameEn: r[1],
      name: r[2]
    };
  });

  /* الترتيب الأبجدي حسب الاسم الإنجليزي */
  GLOBAL_COUNTRIES.sort(function(a, b){
    return a.nameEn.localeCompare(b.nameEn, 'en', { sensitivity: 'base' });
  });

  /* فهرس حسب الرمز للوصول السريع */
  var BY_CODE = {};
  GLOBAL_COUNTRIES.forEach(function(c){ BY_CODE[c.code] = c; });

  /* الدوال المساعدة */
  function getGlobalCountries(){ return GLOBAL_COUNTRIES.slice(); }
  function getCountryByCode(code){ return BY_CODE[code] || null; }
  function getCountryName(code, lang){
    var c = BY_CODE[code];
    if(!c) return code;
    return (lang === 'en') ? c.nameEn : c.name;
  }

  /* تصدير */
  window.GLOBAL_COUNTRIES = GLOBAL_COUNTRIES;
  window.getGlobalCountries = getGlobalCountries;
  window.getGlobalCountryByCode = getCountryByCode;
  window.getGlobalCountryName = getCountryName;
  window.flagFromCode = flagFromCode;

  console.log('🌍 Global countries loaded:', GLOBAL_COUNTRIES.length, 'دولة');
})();

/* ========== country-patch.js ========== */
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

/* ========== country-adapter.js ========== */
/* ============================================================
   🌍 country-adapter.js — الدول والأطر (إضافة/تعديل/حذف/تفاصيل)
   ============================================================ */
(function(){
  'use strict';

  function tr(k, def){ 
    if(!window.t) return def || k;
    var v = window.t(k);
    return v === k && def ? def : v;
  }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ 
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;'); 
  }
  function uid(p){ return (p||'x_') + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
  function getSpace(){ return window.space || {}; }
  function saveSpace(){ if(window.saveSpace) window.saveSpace(); }

  /* ============ دمج البني + المخصص ============ */
  function getAllCountries(){
    var base = window.COUNTRIES_DB || {};
    var custom = (getSpace().customCountries || []);
    var out = {};
    Object.keys(base).forEach(function(k){ 
      out[k] = Object.assign({ _builtin: true, code: k }, base[k]); 
    });
    custom.forEach(function(c){ 
      out[c.code] = Object.assign({ _custom: true }, c); 
    });
    return out;
  }

  function getAllFrameworks(){
    var base = window.FRAMEWORKS_DB || {};
    var custom = (getSpace().customFrameworks || []);
    var out = {};
    Object.keys(base).forEach(function(k){ 
      out[k] = Object.assign({ _builtin: true, key: k }, base[k]); 
    });
    custom.forEach(function(f){ 
      out[f.key] = Object.assign({ _custom: true }, f); 
    });
    return out;
  }

  function section(title, body){
    return '<div style="padding:12px;background:var(--bg2);border-radius:10px">' +
      '<div style="font-weight:700;color:var(--cyan);margin-bottom:6px">' + title + '</div>' +
      '<div style="font-size:.85rem;line-height:1.8">' + (body || '—') + '</div></div>';
  }

  function toArray(v){ 
    if(Array.isArray(v)) return v; 
    return String(v || '').split(',').map(function(s){ return s.trim(); }).filter(Boolean); 
  }

  /* ==================== RENDER COUNTRIES ==================== */
  function renderCountries(){
    var el = document.getElementById('countriesGrid');
    if(!el) return;
    var countries = getAllCountries();
    var keys = Object.keys(countries);

    var html = '';
    
    html += '<div style="grid-column:1/-1;display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:8px">' +
      '<button class="btn" id="caAddCountry">➕ إضافة دولة</button>' +
      '<span style="color:var(--muted);font-size:.82rem">' + keys.length + ' دولة</span>' +
    '</div>';
    
    keys.forEach(function(k){
      var c = countries[k];
      var sdgTags = (c.sdgPriorities || []).map(function(sdgNum){
        var sdg = (window.SDG_DB || {})[sdgNum];
        if(!sdg) return '';
        return '<span style="font-size:.65rem;padding:2px 7px;border-radius:6px;background:' + sdg.color + '20;color:' + sdg.color + ';font-weight:700">' + sdg.icon + ' SDG ' + sdgNum + '</span>';
      }).join('');
      
      var actions = c._custom 
        ? '<button class="btn btn-sm btn-ghost" data-country-edit="' + k + '" title="تعديل">✏️</button>' +
          '<button class="btn btn-sm btn-danger" data-country-del="' + k + '" title="حذف">🗑</button>'
        : '';
      
      html += '<div class="card" data-country-card="' + k + '">' +
        '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">' +
          '<div style="font-size:2rem">' + (c.flag || '🌍') + '</div>' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-weight:800;font-size:1rem">' + esc(c.name || '') + '</div>' +
            '<div style="font-size:.72rem;color:var(--muted2)">' + esc(c.nameEn || '') + ' · ' + esc(c.currency || '') + '</div>' +
          '</div>' +
          (c._custom ? '<span class="badge" style="font-size:.6rem">مخصص</span>' : '') +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">' +
          '<div style="background:var(--bg2);padding:8px;border-radius:8px;text-align:center">' +
            '<div style="font-size:.65rem;color:var(--muted)">ESG</div>' +
            '<div style="font-size:1rem;font-weight:800;color:var(--cyan)">' + (c.esgScore || '—') + '</div>' +
            '<div style="font-size:.6rem;color:var(--muted2)">' + (c.esgRank ? '#' + c.esgRank : '') + '</div>' +
          '</div>' +
          '<div style="background:var(--bg2);padding:8px;border-radius:8px;text-align:center">' +
            '<div style="font-size:.65rem;color:var(--muted)">SDG Index</div>' +
            '<div style="font-size:1rem;font-weight:800;color:var(--green)">' + (c.sdgIndex || '—') + '</div>' +
            '<div style="font-size:.6rem;color:var(--muted2)">' + (c.sdgRank ? '#' + c.sdgRank : '') + '</div>' +
          '</div>' +
        '</div>' +
        (c.vision ? '<div style="font-size:.74rem;color:var(--muted);line-height:1.6;margin-bottom:8px">' +
          '<b>🎯 الرؤية:</b> ' + esc(c.vision) + '</div>' : '') +
        (sdgTags ? '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">' + sdgTags + '</div>' : '') +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
          '<button class="btn btn-sm" data-country-view="' + k + '" style="flex:1">📋 التفاصيل الكاملة</button>' +
          actions +
        '</div>' +
      '</div>';
    });

    el.innerHTML = html;

    el.querySelectorAll('[data-country-view]').forEach(function(b){
      b.addEventListener('click', function(){ viewCountry(b.dataset.countryView); });
    });
    el.querySelectorAll('[data-country-edit]').forEach(function(b){
      b.addEventListener('click', function(){ editCountry(b.dataset.countryEdit); });
    });
    el.querySelectorAll('[data-country-del]').forEach(function(b){
      b.addEventListener('click', function(){ deleteCountry(b.dataset.countryDel); });
    });
    var addBtn = document.getElementById('caAddCountry');
    if(addBtn) addBtn.onclick = addCountry;
  }

  /* ==================== VIEW COUNTRY ==================== */
  function viewCountry(code){
    var c = getAllCountries()[code];
    if(!c) return;

    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.innerHTML = '<div class="modal" style="max-width:600px">' +
      '<h3>' + (c.flag || '🌍') + ' ' + esc(c.name || '') + ' — ' + esc(c.nameEn || '') + '</h3>' +
      '<div style="display:grid;gap:12px;margin-top:16px">' +
        section('📊 المؤشرات', 'ESG Score: <b>' + (c.esgScore || '—') + '</b> (' + (c.esgRank ? '#' + c.esgRank : '—') + ')<br>' +
                 'SDG Index: <b>' + (c.sdgIndex || '—') + '</b> (' + (c.sdgRank ? '#' + c.sdgRank : '—') + ')') +
        section('🏭 القطاعات الرئيسية', (c.keySectors || []).map(function(s){ return '• ' + esc(s); }).join('<br>')) +
        section('♻️ تركيز الاستدامة', (c.sustainabilityFocus || []).map(function(s){ return '• ' + esc(s); }).join('<br>')) +
        section('🎁 الحوافز', (c.incentives || []).map(function(s){ return '• ' + esc(s); }).join('<br>')) +
        section('💼 ثقافة العمل', esc(c.businessCulture || '')) +
        section('⚖️ ملاحظات قانونية', esc(c.legalNotes || '')) +
      '</div>' +
      '<div class="modal-actions">' +
        '<button class="btn btn-sm btn-ghost" id="countryClose">إغلاق</button>' +
        '<button class="btn btn-sm btn-ghost" id="countryEdit">✏️ تعديل</button>' +
        '<button class="btn btn-sm" id="countrySetDefault">🎯 اجعله دولتي</button>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);
    
    bd.querySelector('#countryClose').onclick = function(){ bd.remove(); };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
    bd.querySelector('#countrySetDefault').onclick = function(){
      if(!window.space.profile) window.space.profile = {};
      window.space.profile.country = code;
      saveSpace();
      toast('✓ تم تعيين ' + c.name + ' كدولتك', 'success');
      bd.remove();
    };
    bd.querySelector('#countryEdit').onclick = function(){ bd.remove(); editCountry(code); };
  }

  /* ==================== ADD/EDIT COUNTRY ==================== */
  function countryFields(){
    return [
      {key:'flag', label:'العلم (emoji)', placeholder:'🌍'},
      {key:'name', label:'الاسم بالعربية'},
      {key:'nameEn', label:'الاسم بالإنجليزية'},
      {key:'currency', label:'العملة', placeholder:'QAR'},
      {key:'esgScore', label:'ESG Score', type:'number'},
      {key:'sdgIndex', label:'SDG Index', type:'number'},
      {key:'vision', label:'الرؤية الوطنية', type:'textarea'},
      {key:'keySectors', label:'القطاعات الرئيسية (افصل بفاصلة ,)'},
      {key:'sustainabilityFocus', label:'تركيز الاستدامة (افصل بفاصلة ,)'},
      {key:'incentives', label:'الحوافز (افصل بفاصلة ,)'},
      {key:'businessCulture', label:'ثقافة العمل', type:'textarea'},
      {key:'legalNotes', label:'ملاحظات قانونية', type:'textarea'}
    ];
  }

  function addCountry(){
    window.showModal('➕ إضافة دولة جديدة', countryFields(), {
      flag:'🌍', name:'', nameEn:'', currency:'', esgScore:'', sdgIndex:'',
      vision:'', keySectors:'', sustainabilityFocus:'', incentives:'',
      businessCulture:'', legalNotes:''
    }, function(data){
      if(!data.name) return toast('أدخل اسم الدولة', 'warn');
      var code = 'CU_' + uid('').slice(-5).toUpperCase();
      if(!Array.isArray(window.space.customCountries)) window.space.customCountries = [];
      window.space.customCountries.push({
        code: code,
        flag: data.flag || '🌍',
        name: data.name,
        nameEn: data.nameEn || '',
        currency: data.currency || '',
        esgScore: parseFloat(data.esgScore) || 0,
        sdgIndex: parseFloat(data.sdgIndex) || 0,
        vision: data.vision || '',
        keySectors: toArray(data.keySectors),
        sustainabilityFocus: toArray(data.sustainabilityFocus),
        incentives: toArray(data.incentives),
        businessCulture: data.businessCulture || '',
        legalNotes: data.legalNotes || '',
        sdgPriorities: []
      });
      saveSpace();
      renderCountries();
      toast('✓ أُضيفت الدولة', 'success');
    });
  }

  function editCountry(code){
    var c = getAllCountries()[code];
    if(!c) return;
    var prefill = {
      flag: c.flag || '🌍',
      name: c.name || '',
      nameEn: c.nameEn || '',
      currency: c.currency || '',
      esgScore: c.esgScore || '',
      sdgIndex: c.sdgIndex || '',
      vision: c.vision || '',
      keySectors: (c.keySectors || []).join(', '),
      sustainabilityFocus: (c.sustainabilityFocus || []).join(', '),
      incentives: (c.incentives || []).join(', '),
      businessCulture: c.businessCulture || '',
      legalNotes: c.legalNotes || ''
    };
    
    window.showModal('✏️ تعديل ' + (c.name || ''), countryFields(), prefill, function(data){
      var update = {
        code: code,
        flag: data.flag || '🌍',
        name: data.name,
        nameEn: data.nameEn || '',
        currency: data.currency || '',
        esgScore: parseFloat(data.esgScore) || 0,
        sdgIndex: parseFloat(data.sdgIndex) || 0,
        vision: data.vision || '',
        keySectors: toArray(data.keySectors),
        sustainabilityFocus: toArray(data.sustainabilityFocus),
        incentives: toArray(data.incentives),
        businessCulture: data.businessCulture || '',
        legalNotes: data.legalNotes || '',
        sdgPriorities: c.sdgPriorities || []
      };
      if(!Array.isArray(window.space.customCountries)) window.space.customCountries = [];
      var idx = window.space.customCountries.findIndex(function(x){ return x.code === code; });
      if(idx > -1) window.space.customCountries[idx] = update;
      else window.space.customCountries.push(update);
      saveSpace();
      renderCountries();
      toast('✓ حُدّثت الدولة', 'success');
    });
  }

  function deleteCountry(code){
    window.customConfirm('حذف هذه الدولة؟', function(){
      window.space.customCountries = (window.space.customCountries || []).filter(function(x){ return x.code !== code; });
      saveSpace();
      renderCountries();
      toast('🗑 حُذفت', 'success');
    });
  }

  /* ==================== RENDER FRAMEWORKS ==================== */
  function renderFrameworks(){
    var el = document.getElementById('frameworksGrid');
    if(!el) return;
    var frameworks = getAllFrameworks();
    var categories = window.FRAMEWORK_CATEGORIES || {};
    
    var html = '';
    
    html += '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:16px">' +
      '<button class="btn" id="caAddFramework">➕ إضافة إطار جديد</button>' +
      '<span style="color:var(--muted);font-size:.82rem">' + Object.keys(frameworks).length + ' إطار</span>' +
    '</div>';
    
    Object.keys(categories).forEach(function(catKey){
      var cat = categories[catKey];
      var items = Object.keys(frameworks).filter(function(k){ 
        return (frameworks[k].t || frameworks[k].type) === catKey; 
      });
      if(!items.length) return;
      
      html += '<div style="margin-bottom:20px">' +
        '<div style="font-weight:800;color:' + cat.color + ';font-size:.9rem;margin-bottom:10px;padding:6px 12px;background:var(--grad-soft);border-radius:10px;display:inline-block">' + cat.icon + ' ' + cat.name + ' (' + items.length + ')</div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px">';
      
      items.forEach(function(name){
        var f = frameworks[name];
        var actions = f._custom
          ? '<button class="btn btn-sm btn-ghost" data-fw-edit="' + name + '">✏️</button>' +
            '<button class="btn btn-sm btn-danger" data-fw-del="' + name + '">🗑</button>'
          : '';
        
        html += '<div class="card" style="cursor:pointer;padding:14px" data-fw-view="' + name + '">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px">' +
            '<div style="font-weight:800;font-size:.9rem">' + (f.icon || '📋') + ' ' + esc(f.title || name) + '</div>' +
            '<span style="font-size:.65rem;padding:2px 7px;border-radius:6px;background:' + cat.color + '20;color:' + cat.color + ';font-weight:700;white-space:nowrap">' + (f.code || '') + '</span>' +
          '</div>' +
          '<div style="font-size:.8rem;color:var(--muted);line-height:1.6;margin-bottom:8px">' + esc(f.desc || '') + '</div>' +
          (f.when ? '<div style="font-size:.7rem;color:var(--muted2)">⏰ ' + esc(f.when) + '</div>' : '') +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">' +
            '<span style="font-size:.68rem;color:var(--muted2)">📚 ' + esc(f.source || '—') + '</span>' +
            '<div style="display:flex;gap:4px">' + actions + '</div>' +
          '</div>' +
        '</div>';
      });
      html += '</div></div>';
    });
    
    el.innerHTML = html;
    
    el.querySelectorAll('[data-fw-view]').forEach(function(b){
      b.addEventListener('click', function(e){
        if(e.target.closest('button')) return;
        viewFramework(b.dataset.fwView);
      });
    });
    el.querySelectorAll('[data-fw-edit]').forEach(function(b){
      b.addEventListener('click', function(e){ e.stopPropagation(); editFramework(b.dataset.fwEdit); });
    });
    el.querySelectorAll('[data-fw-del]').forEach(function(b){
      b.addEventListener('click', function(e){ e.stopPropagation(); deleteFramework(b.dataset.fwDel); });
    });
    var addBtn = document.getElementById('caAddFramework');
    if(addBtn) addBtn.onclick = addFramework;
  }

  /* ==================== VIEW FRAMEWORK ==================== */
  function viewFramework(key){
    var f = getAllFrameworks()[key];
    if(!f) return;
    var cat = (window.FRAMEWORK_CATEGORIES || {})[f.t || f.type] || {name: f.t || '—', icon: '📋', color: 'var(--muted)'};

    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.innerHTML = '<div class="modal" style="max-width:640px">' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">' +
        '<h3 style="margin:0">' + (f.icon || '📋') + ' ' + esc(f.title || key) + '</h3>' +
        '<span class="badge" style="background:' + cat.color + '20;color:' + cat.color + '">' + (f.code || '') + '</span>' +
      '</div>' +
      (f.titleEn ? '<div style="font-size:.82rem;color:var(--muted2);margin-bottom:12px">' + esc(f.titleEn) + '</div>' : '') +
      '<div style="display:grid;gap:12px;margin-top:12px">' +
        section('📝 الوصف', esc(f.desc || '')) +
        (f.descEn ? section('📝 Description (EN)', esc(f.descEn)) : '') +
        (f.when ? section('⏰ متى يُستخدم', esc(f.when)) : '') +
        (f.steps && f.steps.length ? section('📋 الخطوات / المكونات', f.steps.map(function(s){ return '• ' + esc(s); }).join('<br>')) : '') +
        (f.outputs && f.outputs.length ? section('🎯 المخرجات', f.outputs.map(function(s){ return '• ' + esc(s); }).join('<br>')) : '') +
        (f.source ? section('📚 المصدر', esc(f.source)) : '') +
        '<div style="padding:10px;background:var(--grad-soft);border-radius:10px;font-size:.78rem">' +
          '<b>التصنيف:</b> ' + cat.icon + ' ' + cat.name +
        '</div>' +
      '</div>' +
      '<div class="modal-actions">' +
        '<button class="btn btn-sm btn-ghost" id="fwClose">إغلاق</button>' +
        '<button class="btn btn-sm" id="fwEdit">✏️ تعديل</button>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);
    bd.querySelector('#fwClose').onclick = function(){ bd.remove(); };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
    bd.querySelector('#fwEdit').onclick = function(){ bd.remove(); editFramework(key); };
  }

  /* ==================== ADD/EDIT FRAMEWORK ==================== */
  function frameworkFields(){
    var catOpts = Object.keys(window.FRAMEWORK_CATEGORIES || {}).map(function(k){
      var c = window.FRAMEWORK_CATEGORIES[k];
      return { v: k, l: c.icon + ' ' + c.name };
    });
    return [
      {key:'icon', label:'الأيقونة (emoji)', placeholder:'🎯'},
      {key:'title', label:'العنوان بالعربية'},
      {key:'titleEn', label:'العنوان بالإنجليزية'},
      {key:'code', label:'الرمز', placeholder:'CUS-001'},
      {key:'t', label:'التصنيف', type:'select', options: catOpts},
      {key:'desc', label:'الوصف', type:'textarea'},
      {key:'descEn', label:'Description (EN)', type:'textarea'},
      {key:'when', label:'متى يُستخدم', type:'textarea'},
      {key:'steps', label:'الخطوات/المكونات (كل خطوة في سطر)', type:'textarea'},
      {key:'source', label:'المصدر'}
    ];
  }

  function addFramework(){
    window.showModal('➕ إضافة إطار جديد', frameworkFields(), {
      icon:'📋', title:'', titleEn:'', code:'', t:'strategic', 
      desc:'', descEn:'', when:'', steps:'', source:''
    }, function(data){
      if(!data.title) return toast('أدخل عنوان الإطار', 'warn');
      var key = 'CUSTOM_' + uid('').slice(-5).toUpperCase();
      if(!Array.isArray(window.space.customFrameworks)) window.space.customFrameworks = [];
      window.space.customFrameworks.push({
        key: key,
        icon: data.icon || '📋',
        title: data.title,
        titleEn: data.titleEn || '',
        code: data.code || key,
        t: data.t || 'strategic',
        desc: data.desc || '',
        descEn: data.descEn || '',
        when: data.when || '',
        steps: String(data.steps || '').split('\n').map(function(s){ return s.trim(); }).filter(Boolean),
        source: data.source || ''
      });
      saveSpace();
      renderFrameworks();
      toast('✓ أُضيف الإطار', 'success');
    });
  }

  function editFramework(key){
    var f = getAllFrameworks()[key];
    if(!f) return;
    var prefill = {
      icon: f.icon || '📋',
      title: f.title || key,
      titleEn: f.titleEn || '',
      code: f.code || '',
      t: f.t || f.type || 'strategic',
      desc: f.desc || '',
      descEn: f.descEn || '',
      when: f.when || '',
      steps: (f.steps || []).join('\n'),
      source: f.source || ''
    };
    
    window.showModal('✏️ تعديل الإطار', frameworkFields(), prefill, function(data){
      var update = {
        key: key,
        icon: data.icon || '📋',
        title: data.title,
        titleEn: data.titleEn || '',
        code: data.code || key,
        t: data.t,
        desc: data.desc || '',
        descEn: data.descEn || '',
        when: data.when || '',
        steps: String(data.steps || '').split('\n').map(function(s){ return s.trim(); }).filter(Boolean),
        source: data.source || ''
      };
      
      if(!Array.isArray(window.space.customFrameworks)) window.space.customFrameworks = [];
      var idx = window.space.customFrameworks.findIndex(function(x){ return x.key === key; });
      if(idx > -1) window.space.customFrameworks[idx] = update;
      else window.space.customFrameworks.push(update);
      
      saveSpace();
      renderFrameworks();
      toast('✓ حُدّث الإطار', 'success');
    });
  }

  function deleteFramework(key){
    window.customConfirm('حذف هذا الإطار؟', function(){
      window.space.customFrameworks = (window.space.customFrameworks || []).filter(function(x){ return x.key !== key; });
      saveSpace();
      renderFrameworks();
      toast('🗑 حُذف', 'success');
    });
  }

  /* ==================== Install ==================== */
  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._countryInstalled) return;
    window._countryInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'countries'){
        setTimeout(function(){ renderCountries(); renderFrameworks(); }, 100);
      }
      return r;
    };
  }

  window.renderCountries = renderCountries;
  window.renderFrameworks = renderFrameworks;
  window.getAllCountries = getAllCountries;
  window.getAllFrameworks = getAllFrameworks;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  
  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'countries'){ renderCountries(); renderFrameworks(); }
  });
  
  console.log('🌍 Country Adapter CRUD loaded');
})();

/* ========== idea-incubator.js ========== */
/* ============================================================
   💡 idea-incubator.js — حاضنة الأفكار والمشاريع
   Lean Canvas, Business Model Canvas
   ✅ يدعم: قائمة الدول العالمية + الترتيب الأبجدي + "أخرى"
   ============================================================ */
(function(){
  'use strict';

  function tr(k, def){ 
    if(!window.t) return def || k;
    var v = window.t(k);
    return v === k && def ? def : v;
  }
  function getSpace(){ return window.space || {ideas:[],projects:[]}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

  /* ============ اسم/علم الدولة (من أي مصدر) ============ */
  function getCountryInfo(code){
    if(!code) return { flag:'🌍', name:'—', nameEn:'—' };
    // 1) استخدام دالة country-patch إذا متوفرة
    if(typeof window.getCountryDisplay === 'function'){
      var d = window.getCountryDisplay(code);
      if(d && d.name) return d;
    }
    // 2) fallback: التفاصيل المحلية
    if(window.COUNTRIES_DB && window.COUNTRIES_DB[code]){
      var c = window.COUNTRIES_DB[code];
      return { flag: c.flag || '🌍', name: c.name || code, nameEn: c.nameEn || code };
    }
    // 3) fallback: القائمة العالمية
    if(typeof window.getGlobalCountryByCode === 'function'){
      var g = window.getGlobalCountryByCode(code);
      if(g) return { flag: g.flag, name: g.name, nameEn: g.nameEn };
    }
    // 4) fallback: الدول المخصصة
    var custom = ((window.space && window.space.customCountries) || []).find(function(x){ return x.code === code; });
    if(custom) return { flag: custom.flag || '🌍', name: custom.name, nameEn: custom.nameEn || '' };
    // 5) غير معروف
    return { flag: '🌍', name: code, nameEn: code };
  }

  /* ============ بناء قائمة الدول للـ select ============ */
  function buildCountrySelectOptions(){
    var opts = [];
    
    if(typeof window.buildCountryOptions === 'function'){
      var co = window.buildCountryOptions();
      // الدول المميزة أولاً
      (co.featuredCodes || []).forEach(function(code){
        var c = co.featured[code];
        opts.push({ v: code, l: (c.flag || '🌍') + ' ' + (c.name || code) });
      });
      // باقي الدول العالمية (مرتبة أبجدياً)
      (co.other || []).forEach(function(c){
        opts.push({ v: c.code, l: c.flag + ' ' + c.name + ' / ' + c.nameEn });
      });
    } else if(typeof window.getGlobalCountries === 'function'){
      // fallback: القائمة العالمية فقط
      window.getGlobalCountries().forEach(function(c){
        opts.push({ v: c.code, l: c.flag + ' ' + c.name + ' / ' + c.nameEn });
      });
    } else {
      // fallback أخير: الدول المحلية فقط
      Object.keys(window.COUNTRIES_DB || {}).forEach(function(k){
        var c = window.COUNTRIES_DB[k];
        opts.push({ v: k, l: c.flag + ' ' + c.name });
      });
    }
    
    // خيار "أخرى" دائماً في النهاية
    opts.push({ v: '__other__', l: '❓ أخرى / Other' });
    
    return opts;
  }

  /* ============ عرض الأفكار ============ */
  function renderIdeas(){
    var grid = document.getElementById('ideasGrid'); if(!grid) return;
    var sp = getSpace();
    var ideas = sp.ideas || [];

    if(!ideas.length){
      grid.innerHTML = '<div class="empty" style="grid-column:1/-1"><div class="ic">💡</div><p>' + tr('ideas_empty', 'لا توجد أفكار بعد') + '</p><p class="sub">' + tr('ideas_empty_sub', 'اضغط "+ فكرة جديدة" للبدء') + '</p></div>';
      return;
    }

    var html = '';
    ideas.forEach(function(idea){
      var type = (window.IDEA_TYPES && window.IDEA_TYPES[idea.type]) || {name:'فكرة', icon:'💡'};
      var sector = (window.SECTORS_DB && window.SECTORS_DB[idea.sector]) || {name:'—', icon:'📦'};
      var country = getCountryInfo(idea.country);
      
      html += '<div class="card" data-idea-card="' + idea.id + '">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px">' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-weight:800;font-size:1rem">' + type.icon + ' ' + esc(idea.name) + '</div>' +
            '<div style="font-size:.7rem;color:var(--muted2);margin-top:2px">' + country.flag + ' ' + esc(country.name) + ' · ' + sector.icon + ' ' + esc(sector.name) + '</div>' +
          '</div>' +
          '<span class="badge">' + type.name + '</span>' +
        '</div>' +
        '<div style="font-size:.82rem;color:var(--muted);line-height:1.6;margin-bottom:10px">' + esc((idea.description || '').slice(0, 140)) + (idea.description && idea.description.length > 140 ? '...' : '') + '</div>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
          '<button class="btn btn-sm" data-idea-view="' + idea.id + '">👁️ عرض</button>' +
          '<button class="btn btn-sm btn-ghost" data-idea-edit="' + idea.id + '">✏️</button>' +
          '<button class="btn btn-sm btn-ghost" data-idea-to-project="' + idea.id + '">🚀 تحويل لمشروع</button>' +
          '<button class="btn btn-sm btn-danger" data-idea-del="' + idea.id + '">🗑</button>' +
        '</div>' +
      '</div>';
    });
    grid.innerHTML = html;

    grid.querySelectorAll('[data-idea-view]').forEach(function(b){ b.addEventListener('click', function(){ viewIdea(b.dataset.ideaView); }); });
    grid.querySelectorAll('[data-idea-edit]').forEach(function(b){ b.addEventListener('click', function(){ editIdea(b.dataset.ideaEdit); }); });
    grid.querySelectorAll('[data-idea-del]').forEach(function(b){ b.addEventListener('click', function(){ deleteIdea(b.dataset.ideaDel); }); });
    grid.querySelectorAll('[data-idea-to-project]').forEach(function(b){ b.addEventListener('click', function(){ convertToProject(b.dataset.ideaToProject); }); });
  }

  /* ============ إضافة فكرة ============ */
  function addIdea(){
    var countryOpts = buildCountrySelectOptions();
    
    var sectorOpts = [];
    Object.keys(window.SECTORS_DB || {}).forEach(function(k){ 
      sectorOpts.push({v:k, l:window.SECTORS_DB[k].icon + ' ' + window.SECTORS_DB[k].name}); 
    });
    
    var typeOpts = [];
    Object.keys(window.IDEA_TYPES || {}).forEach(function(k){ 
      typeOpts.push({v:k, l:window.IDEA_TYPES[k].icon + ' ' + window.IDEA_TYPES[k].name}); 
    });

    window.showModal('💡 فكرة جديدة', [
      {key:'name', label:'اسم الفكرة'},
      {key:'description', label:'الوصف', type:'textarea'},
      {key:'type', label:'النوع', type:'select', options: typeOpts},
      {key:'sector', label:'القطاع', type:'select', options: sectorOpts},
      {key:'country', label:'الدولة', type:'select', options: countryOpts},
      {key:'problem', label:'المشكلة التي تحلّها', type:'textarea'},
      {key:'solution', label:'الحل المقترح', type:'textarea'}
    ], {
      name:'', description:'', type:'startup',
      sector:'tech', 
      country: (window.space && window.space.profile && window.space.profile.country) || 'QA',
      problem:'', solution:''
    }, function(data){
      if(!data.name) return toast('أدخل اسم الفكرة', 'warn');
      
      // معالجة اختيار "أخرى"
      var finalCountry = data.country;
      if(data.country === '__other__'){
        var other = prompt('اكتب اسم الدولة:');
        if(!other || !other.trim()) return toast('لم تُدخل اسم الدولة', 'warn');
        finalCountry = 'CUSTOM_' + other.trim().slice(0, 20);
      }
      
      var sp = getSpace();
      if(!sp.ideas) sp.ideas = [];
      sp.ideas.push({
        id: uid(),
        name: data.name,
        description: data.description,
        type: data.type,
        sector: data.sector,
        country: finalCountry,
        problem: data.problem,
        solution: data.solution,
        createdAt: new Date().toISOString(),
        sdgTargets: []
      });
      if(window.saveSpace) window.saveSpace();
      renderIdeas();
      toast('✓ أُضيفت الفكرة', 'success');
    });
  }

  /* ============ عرض تفاصيل فكرة ============ */
  function viewIdea(id){
    var sp = getSpace();
    var idea = (sp.ideas || []).find(function(x){ return x.id === id; });
    if(!idea) return;
    
    var type = (window.IDEA_TYPES && window.IDEA_TYPES[idea.type]) || {name:'—', icon:'💡'};
    var sector = (window.SECTORS_DB && window.SECTORS_DB[idea.sector]) || {name:'—', icon:'📦'};
    var country = getCountryInfo(idea.country);

    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.innerHTML = '<div class="modal" style="max-width:600px">' +
      '<h3>' + type.icon + ' ' + esc(idea.name) + '</h3>' +
      '<div style="font-size:.82rem;color:var(--muted);margin-bottom:16px">' +
        country.flag + ' ' + esc(country.name) + ' · ' + sector.icon + ' ' + esc(sector.name) + ' · ' + type.name +
      '</div>' +
      (idea.description ? '<div class="form-group"><label>الوصف</label><div style="font-size:.85rem;line-height:1.7">' + esc(idea.description) + '</div></div>' : '') +
      (idea.problem ? '<div class="form-group"><label>المشكلة</label><div style="font-size:.85rem;line-height:1.7">' + esc(idea.problem) + '</div></div>' : '') +
      (idea.solution ? '<div class="form-group"><label>الحل</label><div style="font-size:.85rem;line-height:1.7">' + esc(idea.solution) + '</div></div>' : '') +
      '<div class="modal-actions">' +
        '<button class="btn btn-sm btn-ghost" id="ideaViewClose">إغلاق</button>' +
        '<button class="btn btn-sm btn-ghost" id="ideaViewEdit">✏️ تعديل</button>' +
        '<button class="btn btn-sm" id="ideaViewConvert">🚀 تحويل لمشروع</button>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);
    bd.querySelector('#ideaViewClose').onclick = function(){ bd.remove(); };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
    bd.querySelector('#ideaViewEdit').onclick = function(){ bd.remove(); editIdea(id); };
    bd.querySelector('#ideaViewConvert').onclick = function(){ bd.remove(); convertToProject(id); };
  }

  /* ============ تعديل فكرة ============ */
  function editIdea(id){
    var sp = getSpace();
    var idea = (sp.ideas || []).find(function(x){ return x.id === id; });
    if(!idea) return;
    
    var countryOpts = buildCountrySelectOptions();
    var sectorOpts = [];
    Object.keys(window.SECTORS_DB || {}).forEach(function(k){ 
      sectorOpts.push({v:k, l:window.SECTORS_DB[k].icon + ' ' + window.SECTORS_DB[k].name}); 
    });
    var typeOpts = [];
    Object.keys(window.IDEA_TYPES || {}).forEach(function(k){ 
      typeOpts.push({v:k, l:window.IDEA_TYPES[k].icon + ' ' + window.IDEA_TYPES[k].name}); 
    });

    window.showModal('✏️ تعديل فكرة', [
      {key:'name', label:'اسم الفكرة'},
      {key:'description', label:'الوصف', type:'textarea'},
      {key:'type', label:'النوع', type:'select', options: typeOpts},
      {key:'sector', label:'القطاع', type:'select', options: sectorOpts},
      {key:'country', label:'الدولة', type:'select', options: countryOpts},
      {key:'problem', label:'المشكلة', type:'textarea'},
      {key:'solution', label:'الحل', type:'textarea'}
    ], idea, function(data){
      // معالجة اختيار "أخرى"
      if(data.country === '__other__'){
        var other = prompt('اكتب اسم الدولة:', idea.country || '');
        if(other && other.trim()) data.country = 'CUSTOM_' + other.trim().slice(0, 20);
        else data.country = idea.country; // احتفظ بالقديم
      }
      
      Object.assign(idea, data);
      if(window.saveSpace) window.saveSpace();
      renderIdeas();
      toast('✓ حُدّثت', 'success');
    }, function(){
      deleteIdea(id);
    });
  }

  /* ============ حذف فكرة ============ */
  function deleteIdea(id){
    window.customConfirm('حذف الفكرة؟', function(){
      var sp = getSpace();
      sp.ideas = (sp.ideas || []).filter(function(x){ return x.id !== id; });
      if(window.saveSpace) window.saveSpace();
      renderIdeas();
      toast('🗑 حُذفت', 'success');
    });
  }

  /* ============ تحويل فكرة إلى مشروع ============ */
  function convertToProject(id){
    var sp = getSpace();
    var idea = (sp.ideas || []).find(function(x){ return x.id === id; });
    if(!idea) return;
    window.customConfirm('تحويل "' + idea.name + '" إلى مشروع نشط؟', function(){
      if(!sp.projects) sp.projects = [];
      sp.projects.push({
        id: uid(),
        name: idea.name,
        description: idea.description,
        sector: idea.sector,
        country: idea.country,
        stage: 'pre-project',
        createdAt: new Date().toISOString(),
        ideaId: idea.id,
        strategy: {},
        impact: {},
        risks: [],
        stakeholders: [],
        budget: []
      });
      if(window.saveSpace) window.saveSpace();
      renderIdeas();
      toast('🚀 تحوّلت لمشروع!', 'success');
    });
  }

  /* ============ Install ============ */
  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._ideaInstalled) return;
    window._ideaInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'ideas') setTimeout(renderIdeas, 100);
      return r;
    };
  }

  window.renderIdeas = renderIdeas;
  window.addIdea = addIdea;
  window.editIdea = editIdea;
  window.viewIdea = viewIdea;
  window.convertToProject = convertToProject;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  
  document.addEventListener('languagechange', function(){ renderIdeas(); });
  
  console.log('💡 Idea Incubator loaded — global countries supported');
})();

/* ========== strategy-builder.js ========== */
/* ============================================================
   🎯 strategy-builder.js — أدوات بناء الاستراتيجية
   SWOT, PESTEL, OKRs, Theory of Change
   ============================================================ */
(function(){
  'use strict';

  function getSpace(){ return window.space || {projects:[]}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

  var currentProject = null;

  /* ============ استدعاء المشروع ============ */
  function selectProjectForStrategy(projectId){
    currentProject = projectId;
    renderStrategySelector();
  }

  /* ============ عرض الاختيار ============ */
  function renderStrategySelector(){
    var el = document.getElementById('strategySelector');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];
    if(!projects.length){
    var tr = window.t || function(k){ return k; };
el.innerHTML = '<div class="empty"><div class="ic">💼</div><p>' + tr('roadmap_no_projects') + '</p><p class="sub">' + tr('roadmap_no_projects_sub') + '</p></div>';
      return;
    }
    var html = '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">';
    projects.forEach(function(p){
      var active = currentProject === p.id;
      html += '<button class="chip' + (active ? ' active' : '') + '" data-sp-select="' + p.id + '">' +
        (active ? '✓ ' : '') + esc(p.name) + '</button>';
    });
    html += '</div>';
    el.innerHTML = html;
    el.querySelectorAll('[data-sp-select]').forEach(function(b){
      b.addEventListener('click', function(){ selectProjectForStrategy(b.dataset.spSelect); });
    });
    if(!currentProject && projects.length) currentProject = projects[0].id;

    renderFrameworkTools();
  }

  /* ============ عرض الأدوات ============ */
  function renderFrameworkTools(){
    var el = document.getElementById('strategyTools');
    if(!el) return;
    var sp = getSpace();
    var project = (sp.projects || []).find(function(p){ return p.id === currentProject; });
    if(!project){
      el.innerHTML = '<div style="text-align:center;padding:24px;color:var(--muted);font-size:.85rem">اختر مشروعاً لعرض أدوات الاستراتيجية</div>';
      return;
    }
    if(!project.strategy) project.strategy = {};
    var s = project.strategy;

    var html = '';
    // SWOT
    html += renderSWOT(project, s.swot || {strengths:[],weaknesses:[],opportunities:[],threats:[]});
    // PESTEL
    html += renderPESTEL(project, s.pestel || {});
    // OKRs
    html += renderOKRs(project, s.okrs || []);

    el.innerHTML = html;

    // Bind SWOT
    bindSWOT(project);
    bindPESTEL(project);
    bindOKRs(project);
  }

  /* ============ SWOT ============ */
  function renderSWOT(project, swot){
    var sections = [
      {k:'strengths',    title:'💪 نقاط القوة',   color:'var(--green)'},
      {k:'weaknesses',   title:'⚠️ نقاط الضعف',   color:'var(--red)'},
      {k:'opportunities',title:'🌟 الفرص',         color:'var(--cyan)'},
      {k:'threats',      title:'🌩️ التهديدات',    color:'var(--amber)'}
    ];
    var html = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>🎯 تحليل SWOT</h3>' +
      '<button class="btn btn-sm btn-ghost" data-swot-export>📤 تصدير</button></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">';
    sections.forEach(function(sec){
      html += '<div style="background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:12px">' +
        '<div style="font-weight:800;font-size:.85rem;color:' + sec.color + ';margin-bottom:8px">' + sec.title + '</div>' +
        '<div data-swot-list="' + sec.k + '" style="min-height:40px">';
      (swot[sec.k] || []).forEach(function(item, i){
        html += '<div style="display:flex;align-items:center;gap:6px;padding:5px 0;font-size:.8rem">' +
          '<span style="flex:1">• ' + esc(item) + '</span>' +
          '<button class="btn btn-sm btn-ghost" data-swot-del="' + sec.k + '-' + i + '" style="padding:1px 5px;font-size:.65rem">✕</button>' +
        '</div>';
      });
      html += '</div>' +
        '<button class="btn btn-sm" data-swot-add="' + sec.k + '" style="width:100%;margin-top:6px;font-size:.72rem">+ إضافة</button>' +
      '</div>';
    });
    html += '</div></div>';
    return html;
  }

  function bindSWOT(project){
    document.querySelectorAll('[data-swot-add]').forEach(function(b){
      b.addEventListener('click', function(){
        var key = b.dataset.swotAdd;
        var val = prompt('أضف عنصراً في "' + key + '":');
        if(!val || !val.trim()) return;
        if(!project.strategy) project.strategy = {};
        if(!project.strategy.swot) project.strategy.swot = {strengths:[],weaknesses:[],opportunities:[],threats:[]};
        if(!project.strategy.swot[key]) project.strategy.swot[key] = [];
        project.strategy.swot[key].push(val.trim());
        if(window.saveSpace) window.saveSpace();
        renderFrameworkTools();
        toast('✓ أُضيف', 'success', 1200);
      });
    });
    document.querySelectorAll('[data-swot-del]').forEach(function(b){
      b.addEventListener('click', function(){
        var parts = b.dataset.swotDel.split('-');
        var key = parts[0], idx = parseInt(parts[1]);
        project.strategy.swot[key].splice(idx, 1);
        if(window.saveSpace) window.saveSpace();
        renderFrameworkTools();
      });
    });
    var exp = document.querySelector('[data-swot-export]');
    if(exp) exp.addEventListener('click', function(){
      var s = project.strategy.swot;
      var text = '📊 تحليل SWOT — ' + project.name + '\n\n' +
        '💪 نقاط القوة:\n' + (s.strengths||[]).map(function(x){return '• '+x;}).join('\n') + '\n\n' +
        '⚠️ نقاط الضعف:\n' + (s.weaknesses||[]).map(function(x){return '• '+x;}).join('\n') + '\n\n' +
        '🌟 الفرص:\n' + (s.opportunities||[]).map(function(x){return '• '+x;}).join('\n') + '\n\n' +
        '🌩️ التهديدات:\n' + (s.threats||[]).map(function(x){return '• '+x;}).join('\n');
      navigator.clipboard.writeText(text).then(function(){ toast('📋 نُسخ التحليل', 'success'); });
    });
  }

  /* ============ PESTEL ============ */
  function renderPESTEL(project, pestel){
    var cats = [
      {k:'political',    n:'🏛️ سياسي',    color:'var(--cyan)'},
      {k:'economic',     n:'💰 اقتصادي',   color:'var(--green)'},
      {k:'social',       n:'👥 اجتماعي',   color:'var(--purple)'},
      {k:'technological',n:'💻 تكنولوجي',  color:'var(--amber)'},
      {k:'environmental',n:'🌍 بيئي',      color:'var(--pink)'},
      {k:'legal',        n:'⚖️ قانوني',    color:'var(--red)'}
    ];
    var html = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>🌍 تحليل PESTEL</h3>' +
      '<button class="btn btn-sm btn-ghost" data-pestel-export>📤 تصدير</button></div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px">';
    cats.forEach(function(c){
      html += '<div style="background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:12px">' +
        '<div style="font-weight:800;font-size:.82rem;color:' + c.color + ';margin-bottom:6px">' + c.n + '</div>' +
        '<textarea data-pestel="' + c.k + '" placeholder="اكتب ملاحظاتك..." style="width:100%;min-height:70px;background:var(--card);border:1px solid var(--border);color:var(--text);border-radius:8px;padding:8px;font-family:inherit;font-size:.78rem;resize:vertical;outline:none">' + esc(pestel[c.k] || '') + '</textarea>' +
      '</div>';
    });
    html += '</div></div>';
    return html;
  }

  function bindPESTEL(project){
    document.querySelectorAll('[data-pestel]').forEach(function(ta){
      ta.addEventListener('input', function(){
        if(!project.strategy) project.strategy = {};
        if(!project.strategy.pestel) project.strategy.pestel = {};
        project.strategy.pestel[ta.dataset.pestel] = ta.value;
        if(window.saveSpace) window.saveSpace();
      });
    });
    var exp = document.querySelector('[data-pestel-export]');
    if(exp) exp.addEventListener('click', function(){
      var p = project.strategy.pestel || {};
      var text = '🌍 تحليل PESTEL — ' + project.name + '\n\n' +
        '🏛️ سياسي: ' + (p.political || '—') + '\n\n' +
        '💰 اقتصادي: ' + (p.economic || '—') + '\n\n' +
        '👥 اجتماعي: ' + (p.social || '—') + '\n\n' +
        '💻 تكنولوجي: ' + (p.technological || '—') + '\n\n' +
        '🌍 بيئي: ' + (p.environmental || '—') + '\n\n' +
        '⚖️ قانوني: ' + (p.legal || '—');
      navigator.clipboard.writeText(text).then(function(){ toast('📋 نُسخ التحليل', 'success'); });
    });
  }

  /* ============ OKRs ============ */
  function renderOKRs(project, okrs){
    var html = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>🎯 الأهداف والنتائج (OKRs)</h3>' +
      '<button class="btn btn-sm" data-okr-add>+ هدف</button></div>';
    if(!okrs.length){
      html += '<div style="text-align:center;padding:20px;color:var(--muted);font-size:.85rem">لا توجد أهداف</div>';
    } else {
      okrs.forEach(function(okr, i){
        html += '<div style="background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:10px">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px">' +
            '<div style="font-weight:700;color:var(--cyan);font-size:.88rem">🎯 ' + esc(okr.objective) + '</div>' +
            '<button class="btn btn-sm btn-danger" data-okr-del="' + i + '" style="padding:2px 8px;font-size:.7rem">✕</button>' +
          '</div>';
        (okr.keyResults || []).forEach(function(kr, ki){
          var pct = Math.max(0, Math.min(100, kr.progress || 0));
          html += '<div style="padding:6px 0;border-top:1px solid var(--border)">' +
            '<div style="display:flex;justify-content:space-between;font-size:.78rem;margin-bottom:4px">' +
              '<span>• ' + esc(kr.name) + '</span><span style="color:var(--cyan);font-weight:700">' + pct + '%</span>' +
            '</div>' +
            '<div style="height:5px;background:var(--card);border-radius:5px;overflow:hidden">' +
              '<div style="height:100%;width:' + pct + '%;background:var(--grad);border-radius:5px"></div>' +
            '</div>' +
            '<input type="range" min="0" max="100" value="' + pct + '" data-okr-slider="' + i + '-' + ki + '" style="width:100%;margin-top:4px">' +
          '</div>';
        });
        html += '<button class="btn btn-sm btn-ghost" data-okr-kr-add="' + i + '" style="width:100%;margin-top:6px;font-size:.72rem">+ نتيجة رئيسية</button></div>';
      });
    }
    html += '</div>';
    return html;
  }

  function bindOKRs(project){
    var addBtn = document.querySelector('[data-okr-add]');
    if(addBtn) addBtn.addEventListener('click', function(){
      var obj = prompt('الهدف (Objective):');
      if(!obj || !obj.trim()) return;
      if(!project.strategy) project.strategy = {};
      if(!project.strategy.okrs) project.strategy.okrs = [];
      project.strategy.okrs.push({objective: obj.trim(), keyResults: []});
      if(window.saveSpace) window.saveSpace();
      renderFrameworkTools();
    });
    document.querySelectorAll('[data-okr-del]').forEach(function(b){
      b.addEventListener('click', function(){
        project.strategy.okrs.splice(parseInt(b.dataset.okrDel), 1);
        if(window.saveSpace) window.saveSpace();
        renderFrameworkTools();
      });
    });
    document.querySelectorAll('[data-okr-kr-add]').forEach(function(b){
      b.addEventListener('click', function(){
        var i = parseInt(b.dataset.okrKrAdd);
        var name = prompt('النتيجة الرئيسية:');
        if(!name || !name.trim()) return;
        project.strategy.okrs[i].keyResults.push({name: name.trim(), progress: 0});
        if(window.saveSpace) window.saveSpace();
        renderFrameworkTools();
      });
    });
    document.querySelectorAll('[data-okr-slider]').forEach(function(sl){
      sl.addEventListener('input', function(){
        var parts = sl.dataset.okrSlider.split('-');
        var i = parseInt(parts[0]), ki = parseInt(parts[1]);
        project.strategy.okrs[i].keyResults[ki].progress = parseInt(sl.value);
        if(window.saveSpace) window.saveSpace();
        var lbl = sl.previousElementSibling;
        if(lbl && lbl.querySelector('span:last-child')) lbl.querySelector('span:last-child').textContent = sl.value + '%';
      });
    });
  }

  /* ============ Hook على switchTab ============ */
  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._strategyInstalled) return;
    window._strategyInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'strategy'){
        setTimeout(function(){ renderStrategySelector(); }, 100);
      }
      return r;
    };
  }

  window.renderStrategySelector = renderStrategySelector;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  document.addEventListener('languagechange', function(){ renderStrategySelector(); });
  console.log('🎯 Strategy Builder loaded');
})();

/* ========== impact-calculator.js ========== */
/* ============================================================
   📈 impact-calculator.js — قياس الأثر (SDG, ESG, P5)
   ============================================================ */
(function(){
  'use strict';

  function getSpace(){ return window.space || {projects:[]}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  var currentProject = null;

  function renderImpact(){
    var el = document.getElementById('impactBody');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];

    if(!projects.length){
      var tr = window.t || function(k){ return k; };
el.innerHTML = '<div class="empty"><div class="ic">📈</div><p>' + tr('impact_no_projects') + '</p><p class="sub">' + tr('impact_no_projects_sub') + '</p></div>';
      return;
    }

    if(!currentProject) currentProject = projects[0].id;

    // اختيار المشروع
    var html = '<div class="controls">';
    projects.forEach(function(p){
      var active = currentProject === p.id;
      html += '<button class="chip' + (active ? ' active' : '') + '" data-imp-select="' + p.id + '">' + (active ? '✓ ' : '') + esc(p.name) + '</button>';
    });
    html += '</div>';

    var project = projects.find(function(p){ return p.id === currentProject; });
    if(!project){ el.innerHTML = html; return; }

    if(!project.impact) project.impact = {sdg: [], p5: {}, esg: {}};
    var imp = project.impact;

    // بطاقة SDG
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>🎯 أهداف التنمية المستدامة (SDG)</h3>' +
      '<span class="badge">' + (imp.sdg || []).length + ' / 17</span></div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px">';
    Object.keys(window.SDG_DB || {}).forEach(function(num){
      var sdg = window.SDG_DB[num];
      var selected = (imp.sdg || []).indexOf(parseInt(num)) > -1;
      html += '<button data-sdg-toggle="' + num + '" style="padding:10px;border-radius:10px;border:2px solid ' + (selected ? sdg.color : 'var(--border)') + ';background:' + (selected ? sdg.color + '20' : 'var(--bg2)') + ';color:' + (selected ? sdg.color : 'var(--muted)') + ';cursor:pointer;font-family:inherit;font-weight:700;font-size:.72rem;text-align:center;transition:.2s">' +
        '<div style="font-size:1.3rem">' + sdg.icon + '</div>' +
        '<div>' + num + '. ' + sdg.name.split(' ').slice(0,2).join(' ') + '</div>' +
      '</button>';
    });
    html += '</div></div>';

    // P5 Impact
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>♻️ تحليل P5 (GPM)</h3>' +
      '<span class="badge" id="p5Score">—</span></div>' +
      '<div style="display:flex;flex-direction:column;gap:12px">';
    Object.keys(window.P5_DB || {}).forEach(function(key){
      var p5 = window.P5_DB[key];
      var score = (imp.p5 && imp.p5[key]) || 0;
      html += '<div>' +
        '<div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:6px">' +
          '<span>' + p5.icon + ' <b>' + p5.name + '</b> — ' + esc(p5.desc) + '</span>' +
          '<span style="color:' + p5.color + ';font-weight:700">' + score + '%</span>' +
        '</div>' +
        '<input type="range" min="0" max="100" value="' + score + '" data-p5-slider="' + key + '" style="width:100%">' +
      '</div>';
    });
    html += '</div></div>';

    // ESG
    html += '<div class="card">' +
      '<div class="card-head"><h3>🏢 مؤشر ESG</h3>' +
      '<span class="badge" id="esgScore">—</span></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">' +
        '<div style="text-align:center;padding:14px;background:var(--bg2);border-radius:10px">' +
          '<div style="font-size:1.5rem">🌱</div>' +
          '<div style="font-size:.7rem;color:var(--muted);margin:4px 0">Environmental</div>' +
          '<input type="number" min="0" max="100" value="' + ((imp.esg && imp.esg.e) || 50) + '" data-esg="e" style="width:100%;background:var(--card);border:1px solid var(--border);color:var(--text);padding:6px;border-radius:8px;font-family:inherit;text-align:center;font-weight:800;font-size:1rem;outline:none">' +
        '</div>' +
        '<div style="text-align:center;padding:14px;background:var(--bg2);border-radius:10px">' +
          '<div style="font-size:1.5rem">👥</div>' +
          '<div style="font-size:.7rem;color:var(--muted);margin:4px 0">Social</div>' +
          '<input type="number" min="0" max="100" value="' + ((imp.esg && imp.esg.s) || 50) + '" data-esg="s" style="width:100%;background:var(--card);border:1px solid var(--border);color:var(--text);padding:6px;border-radius:8px;font-family:inherit;text-align:center;font-weight:800;font-size:1rem;outline:none">' +
        '</div>' +
        '<div style="text-align:center;padding:14px;background:var(--bg2);border-radius:10px">' +
          '<div style="font-size:1.5rem">⚖️</div>' +
          '<div style="font-size:.7rem;color:var(--muted);margin:4px 0">Governance</div>' +
          '<input type="number" min="0" max="100" value="' + ((imp.esg && imp.esg.g) || 50) + '" data-esg="g" style="width:100%;background:var(--card);border:1px solid var(--border);color:var(--text);padding:6px;border-radius:8px;font-family:inherit;text-align:center;font-weight:800;font-size:1rem;outline:none">' +
        '</div>' +
      '</div>' +
    '</div>';

    el.innerHTML = html;

    // Bind
    el.querySelectorAll('[data-imp-select]').forEach(function(b){
      b.addEventListener('click', function(){ currentProject = b.dataset.impSelect; renderImpact(); });
    });
    el.querySelectorAll('[data-sdg-toggle]').forEach(function(b){
      b.addEventListener('click', function(){
        var num = parseInt(b.dataset.sdgToggle);
        if(!imp.sdg) imp.sdg = [];
        var i = imp.sdg.indexOf(num);
        if(i > -1) imp.sdg.splice(i, 1); else imp.sdg.push(num);
        if(window.saveSpace) window.saveSpace();
        renderImpact();
      });
    });
    el.querySelectorAll('[data-p5-slider]').forEach(function(sl){
      sl.addEventListener('input', function(){
        if(!imp.p5) imp.p5 = {};
        imp.p5[sl.dataset.p5Slider] = parseInt(sl.value);
        if(window.saveSpace) window.saveSpace();
        updateScores(project);
      });
    });
    el.querySelectorAll('[data-esg]').forEach(function(inp){
      inp.addEventListener('input', function(){
        if(!imp.esg) imp.esg = {};
        imp.esg[inp.dataset.esg] = Math.max(0, Math.min(100, parseInt(inp.value) || 0));
        if(window.saveSpace) window.saveSpace();
        updateScores(project);
      });
    });

    updateScores(project);
  }

  function updateScores(project){
    var p5 = (project.impact && project.impact.p5) || {};
    var p5Avg = 0, cnt = 0;
    Object.keys(window.P5_DB || {}).forEach(function(k){
      p5Avg += (p5[k] || 0); cnt++;
    });
    p5Avg = cnt ? Math.round(p5Avg / cnt) : 0;
    var p5El = document.getElementById('p5Score');
    if(p5El) p5El.textContent = 'P5: ' + p5Avg + '%';

    var esg = (project.impact && project.impact.esg) || {};
    var esgAvg = Math.round(((esg.e || 0) + (esg.s || 0) + (esg.g || 0)) / 3);
    var esgEl = document.getElementById('esgScore');
    if(esgEl) esgEl.textContent = 'ESG: ' + esgAvg;
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._impactInstalled) return;
    window._impactInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'impact') setTimeout(renderImpact, 100);
      return r;
    };
  }

  window.renderImpact = renderImpact;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
document.addEventListener('languagechange', function(){ renderImpact(); });
  console.log('📈 Impact Calculator loaded');
})();

/* ========== leadership-coach.js ========== */
/* ============================================================
   🎓 leadership-coach.js — مدرّب القيادة
   ============================================================ */
(function(){
  'use strict';

  function getSpace(){ return window.space || {profile:{}}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  var QUESTIONS = [
    {q:'كيف تتعامل مع فشل فريقك؟', opts:[
      {t:'أوبّخ الفريق', s:'telling'},
      {t:'أشجع وأشرح', s:'selling'},
      {t:'أناقش السبب معاً', s:'participating'},
      {t:'أتركهم يتعلمون', s:'delegating'}
    ]},
    {q:'عندما يُعطى فريقك مهمة صعبة:', opts:[
      {t:'أعطي خطوات دقيقة', s:'telling'},
      {t:'أشرح الفائدة', s:'selling'},
      {t:'أساعد في التخطيط', s:'participating'},
      {t:'أثق بأنهم يحلّونها', s:'delegating'}
    ]},
    {q:'في اجتماع فريق جديد:', opts:[
      {t:'أقود النقاش', s:'telling'},
      {t:'أحفّز المشاركة', s:'selling'},
      {t:'أستمع أكثر', s:'participating'},
      {t:'أراقب فقط', s:'delegating'}
    ]},
    {q:'قرار مهم في المشروع:', opts:[
      {t:'أقرر بنفسي', s:'telling'},
      {t:'أقنع الفريق', s:'selling'},
      {t:'نقرر معاً', s:'participating'},
      {t:'أفوّض القرار', s:'delegating'}
    ]},
    {q:'موظف جديد في فريقك:', opts:[
      {t:'أملي عليه المهام', s:'telling'},
      {t:'أشرح له بدقة', s:'selling'},
      {t:'أوجّهه وأشجعه', s:'participating'},
      {t:'أتركه يستكشف', s:'delegating'}
    ]},
    {q:'في الأزمات:', opts:[
      {t:'أتخذ القرار بسرعة', s:'telling'},
      {t:'أشرح الموقف للفريق', s:'selling'},
      {t:'نضع خطة معاً', s:'participating'},
      {t:'أثق بقدرات الفريق', s:'delegating'}
    ]},
    {q:'قيم الفريق الأساسية:', opts:[
      {t:'الطاعة والانضباط', s:'telling'},
      {t:'الحماس والرؤية', s:'selling'},
      {t:'التعاون والاحترام', s:'participating'},
      {t:'الاستقلالية والمسؤولية', s:'delegating'}
    ]},
    {q:'كيف تحفّز الفريق؟', opts:[
      {t:'بالمكافآت والغرامات', s:'telling'},
      {t:'بالإلهام والرؤية', s:'selling'},
      {t:'بالمشاركة والتقدير', s:'participating'},
      {t:'بالثقة والحرية', s:'delegating'}
    ]},
    {q:'عند اختيار أعضاء الفريق:', opts:[
      {t:'من ينفّذ الأوامر', s:'telling'},
      {t:'من يشاركني الرؤية', s:'selling'},
      {t:'من يتعاون جيداً', s:'participating'},
      {t:'من يعمل باستقلالية', s:'delegating'}
    ]},
    {q:'في تقييم الأداء:', opts:[
      {t:'أقيس الالتزام', s:'telling'},
      {t:'أقيس الحماس والرؤية', s:'selling'},
      {t:'أقيس التعاون والتطور', s:'participating'},
      {t:'أقيس النتائج', s:'delegating'}
    ]}
  ];

  var STYLES = {
    telling:      {name:'Telling — التوجيهي', icon:'📢', color:'var(--red)', desc:'تقود بتعليمات مباشرة. مناسب للفرق الجديدة أو الأزمات.'},
    selling:      {name:'Selling — البيعي', icon:'💬', color:'var(--amber)', desc:'تقود بالإقناع والإلهام. مناسب للفرق المتحمسة حديثاً.'},
    participating:{name:'Participating — المشارك', icon:'🤝', color:'var(--cyan)', desc:'تقود بالمشاركة والدعم. مناسب للفرق المتوسطة النضج.'},
    delegating:   {name:'Delegating — المفوض', icon:'🎯', color:'var(--green)', desc:'تقود بالثقة والتفويض. مناسب للفرق الناضجة جداً.'}
  };

  function renderLeadership(){
    var el = document.getElementById('leadershipBody');
    if(!el) return;
    var sp = getSpace();
    var result = sp.leadershipAssessment;

    var html = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>📋 اختبار نمط القيادة</h3>' +
      (result ? '<button class="btn btn-sm btn-ghost" id="retakeTest">🔄 إعادة</button>' : '') + '</div>';

    if(!result){
      html += '<div style="font-size:.85rem;color:var(--muted);margin-bottom:16px">أجب على 10 أسئلة سريعة لمعرفة نمط قيادتك السائد.</div>' +
        '<button class="btn" id="startTest" style="width:100%">▶ ابدأ الاختبار</button>';
    } else {
      var style = STYLES[result.winner];
      html += '<div style="text-align:center;padding:24px;background:var(--grad-soft);border-radius:16px;margin-bottom:16px">' +
        '<div style="font-size:3rem">' + style.icon + '</div>' +
        '<div style="font-size:1.3rem;font-weight:800;color:' + style.color + ';margin:8px 0">' + style.name + '</div>' +
        '<div style="font-size:.85rem;color:var(--muted);line-height:1.7">' + style.desc + '</div>' +
      '</div>';
      html += '<div style="font-weight:700;margin-bottom:10px">📊 نتائجك التفصيلية:</div>';
      Object.keys(STYLES).forEach(function(k){
        var s = STYLES[k];
        var score = result.scores[k] || 0;
        var pct = Math.round((score / QUESTIONS.length) * 100);
        html += '<div style="margin-bottom:10px">' +
          '<div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px">' +
            '<span>' + s.icon + ' ' + s.name + '</span>' +
            '<span style="color:' + s.color + ';font-weight:700">' + pct + '%</span>' +
          '</div>' +
          '<div style="height:8px;background:var(--bg2);border-radius:8px;overflow:hidden">' +
            '<div style="height:100%;width:' + pct + '%;background:' + s.color + ';border-radius:8px"></div>' +
          '</div>' +
        '</div>';
      });
      html += '<div style="margin-top:16px;padding:12px;background:var(--bg2);border-radius:10px;font-size:.82rem;line-height:1.8">' +
        '<b>💡 توصيات:</b><br>' +
        (result.winner === 'telling' ? '• جرّب تفويض مهام صغيرة<br>• استمع أكثر للفريق<br>• انتقل تدريجياً للنمط المشارك' : '') +
        (result.winner === 'selling' ? '• وازن بين الإلهام والتنفيذ<br>• ضع مؤشرات قياس<br>• طوّر مهارات التفويض' : '') +
        (result.winner === 'participating' ? '• في الأزمات، قرّر بسرعة<br>• لا تفرط في التشاور<br>• درّب الفريق على الاستقلالية' : '') +
        (result.winner === 'delegating' ? '• تأكد من المتابعة الدورية<br>• لا تفترض أن الجميع جاهز<br>• كن مرناً حسب الموقف' : '') +
      '</div>';
    }
    html += '</div>';
    el.innerHTML = html;

    if(!result){
      var startBtn = document.getElementById('startTest');
      if(startBtn) startBtn.onclick = startTest;
    } else {
      var retake = document.getElementById('retakeTest');
      if(retake) retake.onclick = function(){
        var sp2 = getSpace();
        delete sp2.leadershipAssessment;
        if(window.saveSpace) window.saveSpace();
        renderLeadership();
      };
    }
  }

  function startTest(){
    var answers = [];
    var idx = 0;

    function renderQuestion(){
      document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
      if(idx >= QUESTIONS.length){
        finishTest(answers);
        return;
      }
      var q = QUESTIONS[idx];
      var bd = document.createElement('div');
      bd.className = 'modal-backdrop show';
      var progress = Math.round(((idx) / QUESTIONS.length) * 100);
      var html = '<div class="modal" style="max-width:500px">' +
        '<div style="height:6px;background:var(--bg2);border-radius:6px;overflow:hidden;margin-bottom:16px">' +
          '<div style="height:100%;width:' + progress + '%;background:var(--grad);border-radius:6px"></div>' +
        '</div>' +
        '<div style="font-size:.75rem;color:var(--muted);margin-bottom:8px">السؤال ' + (idx + 1) + ' من ' + QUESTIONS.length + '</div>' +
        '<h3 style="margin-bottom:16px">' + esc(q.q) + '</h3>' +
        '<div style="display:flex;flex-direction:column;gap:8px">';
      q.opts.forEach(function(o, i){
        html += '<button data-answer="' + i + '" style="padding:14px;background:var(--bg2);border:1px solid var(--border);color:var(--text);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.85rem;text-align:right;transition:.2s">' + esc(o.t) + '</button>';
      });
      html += '</div></div>';
      bd.innerHTML = html;
      document.body.appendChild(bd);
      bd.querySelectorAll('[data-answer]').forEach(function(b){
        b.addEventListener('click', function(){
          var chosen = q.opts[parseInt(b.dataset.answer)];
          answers.push(chosen.s);
          idx++;
          renderQuestion();
        });
      });
    }

    renderQuestion();
  }

  function finishTest(answers){
    var scores = {telling:0, selling:0, participating:0, delegating:0};
    answers.forEach(function(a){ scores[a] = (scores[a] || 0) + 1; });
    var winner = Object.keys(scores).reduce(function(a, b){ return scores[a] > scores[b] ? a : b; });

    var sp = getSpace();
    sp.leadershipAssessment = {scores: scores, winner: winner, ts: Date.now()};
    if(window.saveSpace) window.saveSpace();
    renderLeadership();
    toast('✅ أكملت الاختبار!', 'success');
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._leadershipInstalled) return;
    window._leadershipInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'leadership') setTimeout(renderLeadership, 100);
      return r;
    };
  }

  window.renderLeadership = renderLeadership;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('🎓 Leadership Coach loaded');
})();

/* ========== sales-toolkit.js ========== */
/* ============================================================
   💼 sales-toolkit.js — أدوات المبيعات وتطوير الأعمال
   Pipeline + MEDDIC + SPIN
   ============================================================ */
(function(){
  'use strict';

  function getSpace(){ return window.space || {salesPipeline:[]}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

  var currentFilter = 'all';

 function renderSales(){
  var el = document.getElementById('salesBody');
  if(!el) return;
  var tr = window.t || function(k){ return k; };
  var sp = getSpace();
  if(!sp.salesPipeline) sp.salesPipeline = [];

  var stats = {total:0, value:0, won:0, wonValue:0};
  sp.salesPipeline.forEach(function(d){
    stats.total++;
    stats.value += parseFloat(d.value) || 0;
    if(d.stage === 'won'){ stats.won++; stats.wonValue += parseFloat(d.value) || 0; }
  });

  var html = '<div class="grid grid-4" style="margin-bottom:16px">' +
    '<div class="stat"><div class="ic">📊</div><div><div class="v">' + stats.total + '</div><div class="l">' + tr('sales_stats_deals') + '</div></div></div>' +
    '<div class="stat"><div class="ic">💰</div><div><div class="v">' + stats.value.toFixed(0) + '</div><div class="l">' + tr('sales_stats_value') + '</div></div></div>' +
    '<div class="stat"><div class="ic">🎉</div><div><div class="v">' + stats.won + '</div><div class="l">' + tr('sales_stats_won') + '</div></div></div>' +
    '<div class="stat"><div class="ic">📈</div><div><div class="v">' + stats.wonValue.toFixed(0) + '</div><div class="l">' + tr('sales_stats_revenue') + '</div></div></div>' +
  '</div>';

  html += '<div class="controls">';
  var stages = window.PIPELINE_STAGES || {};
  html += '<button class="chip' + (currentFilter === 'all' ? ' active' : '') + '" data-sp-filter="all">' + tr('sales_filter_all') + '</button>';
  Object.keys(stages).forEach(function(k){
    var s = stages[k];
    var count = sp.salesPipeline.filter(function(d){ return d.stage === k; }).length;
    var label = window.i18n && window.i18n.getLang() === 'en' ? (s.nameEn || s.name) : s.name;
    html += '<button class="chip' + (currentFilter === k ? ' active' : '') + '" data-sp-filter="' + k + '">' + s.icon + ' ' + label + ' (' + count + ')</button>';
  });
  html += '</div>';

  var filtered = currentFilter === 'all' ? sp.salesPipeline : sp.salesPipeline.filter(function(d){ return d.stage === currentFilter; });
  if(!filtered.length){
    html += '<div class="empty"><div class="ic">💼</div><p>' + tr('sales_no_deals') + '</p><p class="sub">' + tr('sales_no_deals_sub') + '</p></div>';
  } else {
    filtered.forEach(function(d){
      var stage = stages[d.stage] || {name:'—', icon:'❓', color:'var(--muted)'};
      var stageName = window.i18n && window.i18n.getLang() === 'en' ? (stage.nameEn || stage.name) : stage.name;
      html += '<div class="card" style="margin-bottom:10px">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-weight:800;font-size:.95rem">' + esc(d.client) + '</div>' +
            '<div style="font-size:.72rem;color:var(--muted2)">' + esc(d.project || '') + '</div>' +
          '</div>' +
          '<span style="font-size:.68rem;padding:3px 10px;border-radius:8px;background:' + stage.color + '20;color:' + stage.color + ';font-weight:700;white-space:nowrap">' + stage.icon + ' ' + stageName + '</span>' +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;font-size:.82rem;margin-bottom:8px">' +
          '<span>💰 <b>' + (parseFloat(d.value) || 0).toFixed(0) + '</b> ' + (d.currency || '') + '</span>' +
          '<span style="color:var(--muted)">🎯 MEDDIC: ' + (d.meddic ? countMeddic(d.meddic) + '/6' : '—') + '</span>' +
        '</div>' +
        '<div style="display:flex;gap:6px">' +
          '<button class="btn btn-sm" data-sp-view="' + d.id + '">👁️</button>' +
          '<button class="btn btn-sm btn-ghost" data-sp-edit="' + d.id + '">✏️</button>' +
          '<button class="btn btn-sm btn-danger" data-sp-del="' + d.id + '">🗑</button>' +
        '</div>' +
      '</div>';
    });
  }

  el.innerHTML = html;

  el.querySelectorAll('[data-sp-filter]').forEach(function(b){
    b.addEventListener('click', function(){ currentFilter = b.dataset.spFilter; renderSales(); });
  });
  el.querySelectorAll('[data-sp-view]').forEach(function(b){ b.addEventListener('click', function(){ viewDeal(b.dataset.spView); }); });
  el.querySelectorAll('[data-sp-edit]').forEach(function(b){ b.addEventListener('click', function(){ editDeal(b.dataset.spEdit); }); });
  el.querySelectorAll('[data-sp-del]').forEach(function(b){ b.addEventListener('click', function(){ deleteDeal(b.dataset.spDel); }); });
}

  function countMeddic(m){
    if(!m) return 0;
    var cnt = 0;
    ['metrics','economicBuyer','decisionCriteria','decisionProcess','identifyPain','champion'].forEach(function(k){
      if(m[k] && String(m[k]).trim()) cnt++;
    });
    return cnt;
  }

  function addDeal(){
    var stageOpts = [];
    Object.keys(window.PIPELINE_STAGES || {}).forEach(function(k){
      stageOpts.push({v:k, l:window.PIPELINE_STAGES[k].icon + ' ' + window.PIPELINE_STAGES[k].name});
    });
    window.showModal('💼 فرصة بيعية جديدة', [
      {key:'client', label:'العميل'},
      {key:'project', label:'المشروع / الموضوع'},
      {key:'value', label:'القيمة المتوقعة', type:'number'},
      {key:'currency', label:'العملة'},
      {key:'stage', label:'المرحلة', type:'select', options: stageOpts},
      {key:'notes', label:'ملاحظات', type:'textarea'}
    ], {
      client:'', project:'', value:0, currency:'QAR', stage:'lead', notes:''
    }, function(data){
      if(!data.client) return toast('أدخل اسم العميل', 'warn');
      var sp = getSpace();
      if(!sp.salesPipeline) sp.salesPipeline = [];
      sp.salesPipeline.push({
        id: uid(),
        client: data.client,
        project: data.project,
        value: parseFloat(data.value) || 0,
        currency: data.currency || 'QAR',
        stage: data.stage || 'lead',
        notes: data.notes,
        meddic: {},
        createdAt: new Date().toISOString()
      });
      if(window.saveSpace) window.saveSpace();
      renderSales();
      toast('✓ أُضيفت الفرصة', 'success');
    });
  }

  function viewDeal(id){
    var sp = getSpace();
    var d = sp.salesPipeline.find(function(x){ return x.id === id; });
    if(!d) return;
    var stage = (window.PIPELINE_STAGES || {})[d.stage] || {name:'—', icon:'❓'};

    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';

    var meddicFields = [
      {k:'metrics',       l:'Metrics — المقاييس'},
      {k:'economicBuyer', l:'Economic Buyer — المشتري الاقتصادي'},
      {k:'decisionCriteria', l:'Decision Criteria — معايير القرار'},
      {k:'decisionProcess', l:'Decision Process — عملية القرار'},
      {k:'identifyPain',  l:'Identify Pain — تحديد الألم'},
      {k:'champion',      l:'Champion — المناصر الداخلي'}
    ];

    var html = '<div class="modal" style="max-width:600px">' +
      '<h3>💼 ' + esc(d.client) + '</h3>' +
      '<div style="font-size:.82rem;color:var(--muted);margin-bottom:16px">' +
        esc(d.project || '') + ' · ' + stage.icon + ' ' + stage.name +
      '</div>' +
      '<div style="padding:12px;background:var(--grad-soft);border-radius:10px;margin-bottom:16px">' +
        '<div style="font-size:1.5rem;font-weight:800;color:var(--cyan);text-align:center">' + (parseFloat(d.value) || 0).toFixed(0) + ' ' + (d.currency || '') + '</div>' +
      '</div>' +
      (d.notes ? '<div class="form-group"><label>ملاحظات</label><div style="font-size:.85rem;line-height:1.7">' + esc(d.notes) + '</div></div>' : '') +
      '<div style="font-weight:700;margin-bottom:8px">🎯 تحليل MEDDIC:</div>' +
      '<div style="display:flex;flex-direction:column;gap:6px">';
    meddicFields.forEach(function(f){
      var val = (d.meddic && d.meddic[f.k]) || '';
      var filled = val ? '✓' : '○';
      var color = val ? 'var(--green)' : 'var(--muted2)';
      html += '<div style="padding:8px 10px;background:var(--bg2);border-radius:8px;font-size:.8rem;display:flex;gap:8px">' +
        '<span style="color:' + color + ';font-weight:800">' + filled + '</span>' +
        '<b style="flex-shrink:0">' + f.l.split(' — ')[0] + ':</b>' +
        '<span style="flex:1;color:var(--muted)">' + (val ? esc(val) : '<i style="opacity:.5">لم يُملأ</i>') + '</span>' +
      '</div>';
    });
    html += '</div>' +
      '<div class="modal-actions">' +
        '<button class="btn btn-sm btn-ghost" id="dealClose">إغلاق</button>' +
        '<button class="btn btn-sm" id="dealEditMeddic">✏️ تعديل MEDDIC</button>' +
      '</div>' +
    '</div>';
    bd.innerHTML = html;
    document.body.appendChild(bd);
    bd.querySelector('#dealClose').onclick = function(){ bd.remove(); };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
    bd.querySelector('#dealEditMeddic').onclick = function(){ bd.remove(); editMeddic(id); };
  }

  function editMeddic(id){
    var sp = getSpace();
    var d = sp.salesPipeline.find(function(x){ return x.id === id; });
    if(!d) return;
    if(!d.meddic) d.meddic = {};
    window.showModal('🎯 MEDDIC — ' + d.client, [
      {key:'metrics', label:'M — المقاييس'},
      {key:'economicBuyer', label:'E — المشتري الاقتصادي'},
      {key:'decisionCriteria', label:'D — معايير القرار'},
      {key:'decisionProcess', label:'D — عملية القرار'},
      {key:'identifyPain', label:'I — تحديد الألم'},
      {key:'champion', label:'C — المناصر'}
    ], d.meddic, function(data){
      d.meddic = data;
      if(window.saveSpace) window.saveSpace();
      renderSales();
      toast('✓ حُدّث MEDDIC', 'success');
    });
  }

  function editDeal(id){
    var sp = getSpace();
    var d = sp.salesPipeline.find(function(x){ return x.id === id; });
    if(!d) return;
    var stageOpts = [];
    Object.keys(window.PIPELINE_STAGES || {}).forEach(function(k){
      stageOpts.push({v:k, l:window.PIPELINE_STAGES[k].icon + ' ' + window.PIPELINE_STAGES[k].name});
    });
    window.showModal('✏️ تعديل الفرصة', [
      {key:'client', label:'العميل'},
      {key:'project', label:'المشروع'},
      {key:'value', label:'القيمة', type:'number'},
      {key:'currency', label:'العملة'},
      {key:'stage', label:'المرحلة', type:'select', options: stageOpts},
      {key:'notes', label:'ملاحظات', type:'textarea'}
    ], d, function(data){
      Object.assign(d, data, {value: parseFloat(data.value) || 0});
      if(window.saveSpace) window.saveSpace();
      renderSales();
      toast('✓ حُدّثت', 'success');
    }, function(){ deleteDeal(id); });
  }

  function deleteDeal(id){
    window.customConfirm('حذف الفرصة؟', function(){
      var sp = getSpace();
      sp.salesPipeline = sp.salesPipeline.filter(function(x){ return x.id !== id; });
      if(window.saveSpace) window.saveSpace();
      renderSales();
      toast('🗑 حُذفت', 'success');
    });
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._salesInstalled) return;
    window._salesInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'sales') setTimeout(renderSales, 100);
      return r;
    };
  }

  window.renderSales = renderSales;
  window.addDeal = addDeal;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  document.addEventListener('languagechange', function(){ renderSales(); });
  console.log('💼 Sales Toolkit loaded');
})();

/* ========== project-lifecycle.js ========== */
/* ============================================================
   🗺️ project-lifecycle.js — دورة حياة المشروع (PRiSM)
   ✅ مُصلَّح: showModal بدل prompt()
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function getSpace(){ return window.space || {projects:[]}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  var currentProject = null;

  function renderRoadmap(){
    var el = document.getElementById('roadmapBody');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];

    if(!projects.length){
      el.innerHTML = '<div class="empty"><div class="ic">🗺️</div><p>' + tr('roadmap_no_projects') + '</p><p class="sub">' + tr('roadmap_no_projects_sub') + '</p></div>';
      return;
    }
    if(!currentProject) currentProject = projects[0].id;

    var html = '<div class="controls">';
    projects.forEach(function(p){
      var active = currentProject === p.id;
      html += '<button class="chip' + (active ? ' active' : '') + '" data-rd-select="' + p.id + '">' + (active ? '✓ ' : '') + esc(p.name) + '</button>';
    });
    html += '</div>';

    var project = projects.find(function(p){ return p.id === currentProject; });
    if(!project){ el.innerHTML = html; return; }

    var stages = window.PRISM_STAGES || {};
    var currentStage = project.stage || 'pre-project';
    var lang = window.i18n ? window.i18n.getLang() : 'ar';

    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head" style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">' +
        '<h3>' + tr('roadmap_stages') + '</h3>' +
        '<div style="display:flex;gap:6px;align-items:center">' +
          '<span class="badge">' + esc(project.name) + '</span>' +
          '<button class="btn btn-sm btn-ghost" data-archive-project="' + project.id + '">📦 ' + tr('nav_archive') + '</button>' +
        '</div>' +
      '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px">';

    Object.keys(stages).forEach(function(k){
      var s = stages[k];
      var isActive = currentStage === k;
      var isPast = Object.keys(stages).indexOf(k) < Object.keys(stages).indexOf(currentStage);
      var sName = lang === 'en' ? (s.nameEn || s.name) : s.name;
      var sDesc = lang === 'en' ? (s.descEn || s.desc) : s.desc;
      html += '<button data-stage-set="' + k + '" style="padding:14px;border-radius:12px;border:2px solid ' + (isActive ? 'var(--cyan)' : isPast ? 'var(--green)' : 'var(--border)') + ';background:' + (isActive ? 'var(--grad-soft)' : 'var(--bg2)') + ';color:' + (isActive ? 'var(--cyan)' : 'var(--text)') + ';cursor:pointer;font-family:inherit;text-align:center;transition:.2s">' +
        '<div style="font-size:1.5rem">' + s.icon + '</div>' +
        '<div style="font-size:.8rem;font-weight:700;margin-top:4px">' + sName + '</div>' +
        '<div style="font-size:.65rem;color:var(--muted);margin-top:2px;line-height:1.3">' + sDesc + '</div>' +
        (isActive ? '<div style="font-size:.65rem;color:var(--cyan);margin-top:4px;font-weight:800">' + tr('roadmap_current') + '</div>' : '') +
        (isPast ? '<div style="font-size:.65rem;color:var(--green);margin-top:4px">' + tr('roadmap_completed') + '</div>' : '') +
      '</button>';
    });
    html += '</div></div>';

    var stageTasks = (project.tasks || []).filter(function(t){ return t.stage === currentStage; });
    var stageName = stages[currentStage] ? (lang === 'en' ? (stages[currentStage].nameEn || stages[currentStage].name) : stages[currentStage].name) : '';
    html += '<div class="card">' +
      '<div class="card-head"><h3>' + (stages[currentStage] ? stages[currentStage].icon + ' ' + tr('roadmap_stage_tasks') + ' ' + stageName : '📝 ' + tr('tasks_title')) + '</h3>' +
      '<button class="btn btn-sm" data-stage-task-add>' + tr('roadmap_add_task') + '</button></div>';
    if(!stageTasks.length){
      html += '<div style="text-align:center;padding:20px;color:var(--muted);font-size:.85rem">' + tr('roadmap_no_tasks') + '</div>';
    } else {
      stageTasks.forEach(function(t, i){
        html += '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg2);border:1px solid var(--border);border-radius:10px;margin-bottom:6px">' +
          '<div style="width:20px;height:20px;border-radius:6px;border:2px solid ' + (t.done ? 'var(--green)' : 'var(--border2)') + ';background:' + (t.done ? 'var(--green)' : 'transparent') + ';flex-shrink:0;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#0b0f1a;font-weight:900;font-size:.75rem" data-stage-task-toggle="' + i + '">' + (t.done ? '✓' : '') + '</div>' +
          '<div style="flex:1;font-size:.85rem;' + (t.done ? 'text-decoration:line-through;opacity:.6' : '') + '">' + esc(t.title) + '</div>' +
          '<button class="btn btn-sm btn-danger" data-stage-task-del="' + i + '" style="padding:2px 6px;font-size:.7rem">✕</button>' +
        '</div>';
      });
    }
    html += '</div>';

    el.innerHTML = html;

    el.querySelectorAll('[data-rd-select]').forEach(function(b){
      b.addEventListener('click', function(){ currentProject = b.dataset.rdSelect; renderRoadmap(); });
    });

    var archBtn = el.querySelector('[data-archive-project]');
    if(archBtn) archBtn.onclick = function(){
      if(window.archiveProject) window.archiveProject(archBtn.dataset.archiveProject);
    };

    el.querySelectorAll('[data-stage-set]').forEach(function(b){
      b.addEventListener('click', function(){
        project.stage = b.dataset.stageSet;
        if(window.saveSpace) window.saveSpace();
        renderRoadmap();
        var s = stages[project.stage];
        toast('✓ ' + (lang === 'en' ? (s.nameEn || s.name) : s.name), 'success');
      });
    });

    // ✅ إضافة مهمة عبر showModal بدل prompt
    el.querySelectorAll('[data-stage-task-add]').forEach(function(b){
      b.addEventListener('click', function(){
        window.showModal('📝 ' + tr('roadmap_task_title'), [
          {key:'title', label: tr('roadmap_task_title')}
        ], {title:''}, function(data){
          if(!data.title) return toast(tr('tasks_title_required'), 'warn');
          if(!project.tasks) project.tasks = [];
          project.tasks.push({id: Date.now().toString(36), title: data.title, stage: currentStage, done: false});
          if(window.saveSpace) window.saveSpace();
          renderRoadmap();
        });
      });
    });

    el.querySelectorAll('[data-stage-task-toggle]').forEach(function(b){
      b.addEventListener('click', function(){
        var t = stageTasks[parseInt(b.dataset.stageTaskToggle)];
        if(t){ t.done = !t.done; if(window.saveSpace) window.saveSpace(); renderRoadmap(); }
      });
    });

    el.querySelectorAll('[data-stage-task-del]').forEach(function(b){
      b.addEventListener('click', function(){
        var t = stageTasks[parseInt(b.dataset.stageTaskDel)];
        if(!t) return;
        var idx = project.tasks.indexOf(t);
        if(idx > -1) project.tasks.splice(idx, 1);
        if(window.saveSpace) window.saveSpace();
        renderRoadmap();
      });
    });
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._lifecycleInstalled) return;
    window._lifecycleInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'roadmap') setTimeout(renderRoadmap, 100);
      return r;
    };
  }

  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'roadmap') renderRoadmap();
  });

  window.renderRoadmap = renderRoadmap;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('🗺️ Project Lifecycle loaded');
})();

/* ========== milestones.js ========== */
/* ============================================================
   🎯 milestones.js — Milestone Timeline Visualization
   خط زمني مرئي للمشاريع مع Gantt Chart
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function getSpace(){ return window.space || {projects:[]}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function uid(){ return 'ms_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

  var currentProject = null;

  /* ============ الحالات ============ */
  var STATUS = {
    'not-started': {name:'لم تبدأ',      nameEn:'Not Started', icon:'⏸️', color:'var(--muted)'},
    'in-progress': {name:'جارية',        nameEn:'In Progress', icon:'▶️', color:'var(--cyan)'},
    'completed':   {name:'مكتملة',       nameEn:'Completed',   icon:'✅', color:'var(--green)'},
    'delayed':     {name:'متأخرة',       nameEn:'Delayed',     icon:'⚠️', color:'var(--red)'},
    'on-hold':     {name:'معلّقة',       nameEn:'On Hold',     icon:'⏸️', color:'var(--amber)'}
  };

  /* ============ الرسم الرئيسي ============ */
  function renderMilestones(){
    var el = document.getElementById('milestonesBody');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];

    if(!projects.length){
      el.innerHTML = '<div class="empty"><div class="ic">🎯</div><p>' + tr('roadmap_no_projects') + '</p><p class="sub">' + tr('roadmap_no_projects_sub') + '</p></div>';
      return;
    }
    if(!currentProject) currentProject = projects[0].id;

    var html = '<div class="controls">';
    projects.forEach(function(p){
      var active = currentProject === p.id;
      html += '<button class="chip' + (active ? ' active' : '') + '" data-ms-select="' + p.id + '">' + (active ? '✓ ' : '') + esc(p.name) + '</button>';
    });
    html += '</div>';

    var project = projects.find(function(p){ return p.id === currentProject; });
    if(!project){ el.innerHTML = html; return; }

    if(!Array.isArray(project.milestones)) project.milestones = [];

    // Header with stats
    var stats = computeStats(project.milestones);
    html += '<div class="grid grid-4" style="margin-bottom:16px">' +
      '<div class="stat"><div class="ic">🎯</div><div><div class="v">' + stats.total + '</div><div class="l">' + tr('ms_total') + '</div></div></div>' +
      '<div class="stat"><div class="ic">▶️</div><div><div class="v">' + stats.inProgress + '</div><div class="l">' + tr('ms_in_progress') + '</div></div></div>' +
      '<div class="stat"><div class="ic">✅</div><div><div class="v">' + stats.completed + '</div><div class="l">' + tr('ms_completed') + '</div></div></div>' +
      '<div class="stat"><div class="ic">⚠️</div><div><div class="v">' + stats.delayed + '</div><div class="l">' + tr('ms_delayed') + '</div></div></div>' +
    '</div>';

    // Toolbar
    html += '<div class="controls">' +
      '<button class="btn" id="msAdd">' + tr('ms_add') + '</button>' +
      '<button class="btn btn-ghost" id="msExport">📤 ' + tr('export') + '</button>' +
      '<button class="btn btn-ghost" id="msPrint">🖨️ ' + tr('ms_print') + '</button>' +
    '</div>';

    // Gantt chart
    if(!project.milestones.length){
      html += '<div class="empty"><div class="ic">🎯</div><p>' + tr('ms_empty') + '</p><p class="sub">' + tr('ms_empty_sub') + '</p></div>';
    } else {
      html += renderGantt(project.milestones);
    }

    // List (cards)
    if(project.milestones.length){
      html += '<div style="margin-top:20px">';
      html += '<h3 style="font-size:.95rem;margin-bottom:12px;color:var(--cyan)">' + tr('ms_details') + '</h3>';
      html += renderList(project.milestones);
      html += '</div>';
    }

    el.innerHTML = html;

    // Bind
    el.querySelectorAll('[data-ms-select]').forEach(function(b){
      b.onclick = function(){ currentProject = b.dataset.msSelect; renderMilestones(); };
    });
    var addBtn = document.getElementById('msAdd');
    if(addBtn) addBtn.onclick = function(){ addMilestone(project); };
    var expBtn = document.getElementById('msExport');
    if(expBtn) expBtn.onclick = function(){ exportMilestones(project); };
    var printBtn = document.getElementById('msPrint');
    if(printBtn) printBtn.onclick = function(){ window.print(); };
    bindListActions(project);
  }

  function computeStats(milestones){
    var stats = {total: milestones.length, inProgress:0, completed:0, delayed:0};
    milestones.forEach(function(m){
      if(m.status === 'in-progress') stats.inProgress++;
      else if(m.status === 'completed') stats.completed++;
      else if(m.status === 'delayed') stats.delayed++;
    });
    return stats;
  }

  /* ============ Gantt ============ */
  function renderGantt(milestones){
    var dates = [];
    milestones.forEach(function(m){
      if(m.start) dates.push(new Date(m.start).getTime());
      if(m.end) dates.push(new Date(m.end).getTime());
    });
    if(!dates.length) return '';
    var minDate = new Date(Math.min.apply(null, dates));
    var maxDate = new Date(Math.max.apply(null, dates));
    // padding: 3 days
    minDate = new Date(minDate.getTime() - 3 * 86400000);
    maxDate = new Date(maxDate.getTime() + 3 * 86400000);
    var totalDays = Math.max(1, Math.ceil((maxDate - minDate) / 86400000));

    // generate month/day headers
    var days = [];
    for(var i = 0; i < totalDays; i++){
      var d = new Date(minDate.getTime() + i * 86400000);
      days.push(d);
    }

    var html = '<div class="card" style="overflow-x:auto;padding:16px">' +
      '<div style="font-weight:800;font-size:.9rem;margin-bottom:12px;color:var(--cyan)">📊 ' + tr('ms_gantt') + '</div>' +
      '<div style="min-width:' + Math.max(600, totalDays * 40) + 'px;position:relative">';

    // Header (dates)
    html += '<div style="display:flex;gap:0;border-bottom:2px solid var(--border);padding-bottom:8px;margin-bottom:12px">';
    html += '<div style="min-width:180px;font-weight:700;font-size:.75rem;color:var(--muted)">' + tr('ms_task') + '</div>';
    html += '<div style="flex:1;position:relative;display:flex">';
    var lastMonth = null;
    days.forEach(function(d, i){
      var m = d.getMonth() + 1;
      var showLabel = false;
      if(d.getDate() === 1 || i === 0 || d.getDate() % 7 === 0) showLabel = true;
      html += '<div style="flex:1;min-width:40px;text-align:center;font-size:.62rem;color:var(--muted)">' +
        (showLabel ? '<div>' + d.getDate() + '</div>' : '') +
      '</div>';
    });
    html += '</div></div>';

    // Rows
    milestones.forEach(function(m, idx){
      if(!m.start || !m.end){ 
        html += '<div style="display:flex;padding:8px 0;border-bottom:1px solid var(--border);font-size:.78rem">' +
          '<div style="min-width:180px;padding-inline-end:10px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(m.title) + '</div>' +
          '<div style="flex:1;color:var(--muted2);font-style:italic">' + tr('ms_no_dates') + '</div></div>';
        return;
      }
      var start = new Date(m.start).getTime();
      var end = new Date(m.end).getTime();
      var offsetDays = Math.round((start - minDate.getTime()) / 86400000);
      var durationDays = Math.max(1, Math.round((end - start) / 86400000) + 1);
      var leftPct = (offsetDays / totalDays) * 100;
      var widthPct = (durationDays / totalDays) * 100;
      var status = STATUS[m.status] || STATUS['not-started'];
      var statusColor = status.color;
      var progress = Math.max(0, Math.min(100, m.progress || 0));

      html += '<div style="display:flex;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);min-height:40px">' +
        '<div style="min-width:180px;padding-inline-end:10px;font-size:.78rem;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;gap:6px">' +
          '<span style="font-size:.85rem">' + status.icon + '</span>' + esc(m.title) +
        '</div>' +
        '<div style="flex:1;position:relative;height:26px">' +
          '<div style="position:absolute;left:' + leftPct + '%;width:' + widthPct + '%;top:0;height:100%;background:linear-gradient(135deg,' + statusColor + '40,' + statusColor + '70);border:1px solid ' + statusColor + ';border-radius:6px;overflow:hidden;cursor:pointer" ' +
            'data-ms-edit="' + m.id + '" title="' + esc(m.title) + ' — ' + progress + '%">' +
            '<div style="height:100%;width:' + progress + '%;background:' + statusColor + ';opacity:.7"></div>' +
          '</div>' +
        '</div>' +
      '</div>';
    });

    html += '</div></div>';
    return html;
  }

  /* ============ List ============ */
  function renderList(milestones){
    var html = '';
    milestones.sort(function(a,b){ return (a.start || '').localeCompare(b.start || ''); });
    milestones.forEach(function(m){
      var status = STATUS[m.status] || STATUS['not-started'];
      var lang = window.i18n ? window.i18n.getLang() : 'ar';
      var statusLabel = lang === 'en' ? status.nameEn : status.name;
      var days = 0;
      if(m.start && m.end){
        days = Math.max(1, Math.round((new Date(m.end) - new Date(m.start)) / 86400000) + 1);
      }
      var overdue = m.end && new Date(m.end).getTime() < Date.now() && m.status !== 'completed';
      html += '<div class="card" style="margin-bottom:10px;border-inline-start:3px solid ' + status.color + '">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-weight:800;font-size:.92rem">' + status.icon + ' ' + esc(m.title) + '</div>' +
            '<div style="font-size:.72rem;color:var(--muted);margin-top:4px">' +
              (m.start && m.end ? '📅 ' + m.start + ' → ' + m.end + ' (' + days + ' ' + tr('ms_days') + ')' : '📅 ' + tr('ms_no_dates')) +
              (m.owner ? ' · 👤 ' + esc(m.owner) : '') +
            '</div>' +
          '</div>' +
          '<span style="font-size:.66rem;padding:3px 10px;border-radius:8px;background:' + status.color + '20;color:' + status.color + ';font-weight:700;white-space:nowrap">' + statusLabel + '</span>' +
        '</div>' +
        '<div style="height:6px;background:var(--bg2);border-radius:6px;overflow:hidden;margin-bottom:8px">' +
          '<div style="height:100%;width:' + (m.progress || 0) + '%;background:' + status.color + ';border-radius:6px"></div>' +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;font-size:.72rem;color:var(--muted);margin-bottom:8px">' +
          '<span>' + tr('ms_progress') + ': <b style="color:' + status.color + '">' + (m.progress || 0) + '%</b></span>' +
          (overdue ? '<span style="color:var(--red);font-weight:700">⚠️ ' + tr('ms_overdue') + '</span>' : '') +
        '</div>' +
        (m.notes ? '<div style="font-size:.76rem;color:var(--muted);padding:8px;background:var(--bg2);border-radius:8px;margin-bottom:8px">' + esc(m.notes) + '</div>' : '') +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
          '<button class="btn btn-sm btn-ghost" data-ms-progress="' + m.id + '">📊 ' + tr('ms_update') + '</button>' +
          '<button class="btn btn-sm btn-ghost" data-ms-edit2="' + m.id + '">✏️</button>' +
          '<button class="btn btn-sm btn-danger" data-ms-del="' + m.id + '">🗑</button>' +
        '</div>' +
      '</div>';
    });
    return html;
  }

  function bindListActions(project){
    document.querySelectorAll('[data-ms-edit]').forEach(function(el){
      el.onclick = function(){ editMilestone(project, el.dataset.msEdit); };
    });
    document.querySelectorAll('[data-ms-edit2]').forEach(function(b){
      b.onclick = function(){ editMilestone(project, b.dataset.msEdit2); };
    });
    document.querySelectorAll('[data-ms-del]').forEach(function(b){
      b.onclick = function(){
        window.customConfirm(tr('ms_delete_confirm'), function(){
          project.milestones = project.milestones.filter(function(x){ return x.id !== b.dataset.msDel; });
          if(window.saveSpace) window.saveSpace();
          renderMilestones();
          toast(tr('ms_deleted'), 'success');
        });
      };
    });
    document.querySelectorAll('[data-ms-progress]').forEach(function(b){
      b.onclick = function(){
        var m = project.milestones.find(function(x){ return x.id === b.dataset.msProgress; });
        if(!m) return;
        var val = prompt(tr('ms_progress_prompt'), m.progress || 0);
        if(val === null) return;
        var n = Math.max(0, Math.min(100, parseInt(val) || 0));
        m.progress = n;
        if(n === 100) m.status = 'completed';
        else if(n > 0 && m.status === 'not-started') m.status = 'in-progress';
        if(window.saveSpace) window.saveSpace();
        renderMilestones();
      };
    });
  }

  /* ============ CRUD ============ */
  function addMilestone(project){
    window.showModal(tr('ms_new'), [
      {key:'title', label: tr('ms_title')},
      {key:'start', label: tr('ms_start'), type:'date'},
      {key:'end', label: tr('ms_end'), type:'date'},
      {key:'owner', label: tr('ms_owner')},
      {key:'progress', label: tr('ms_progress_label'), type:'number'},
      {key:'status', label: tr('ms_status'), type:'select', options:[
        {v:'not-started', l: '⏸️ ' + tr('ms_status_not_started')},
        {v:'in-progress', l: '▶️ ' + tr('ms_status_in_progress')},
        {v:'completed', l: '✅ ' + tr('ms_status_completed')},
        {v:'delayed', l: '⚠️ ' + tr('ms_status_delayed')},
        {v:'on-hold', l: '⏸️ ' + tr('ms_status_on_hold')}
      ]},
      {key:'notes', label: tr('ms_notes'), type:'textarea'}
    ], {title:'', start:'', end:'', owner:'', progress:0, status:'not-started', notes:''}, function(data){
      if(!data.title) return toast(tr('ms_title_required'), 'warn');
      project.milestones.push({
        id: uid(),
        title: data.title,
        start: data.start,
        end: data.end,
        owner: data.owner,
        progress: parseInt(data.progress) || 0,
        status: data.status || 'not-started',
        notes: data.notes,
        createdAt: new Date().toISOString()
      });
      if(window.saveSpace) window.saveSpace();
      renderMilestones();
      toast(tr('ms_added'), 'success');
    });
  }

  function editMilestone(project, id){
    var m = project.milestones.find(function(x){ return x.id === id; });
    if(!m) return;
    window.showModal(tr('ms_edit'), [
      {key:'title', label: tr('ms_title')},
      {key:'start', label: tr('ms_start'), type:'date'},
      {key:'end', label: tr('ms_end'), type:'date'},
      {key:'owner', label: tr('ms_owner')},
      {key:'progress', label: tr('ms_progress_label'), type:'number'},
      {key:'status', label: tr('ms_status'), type:'select', options:[
        {v:'not-started', l: '⏸️ ' + tr('ms_status_not_started')},
        {v:'in-progress', l: '▶️ ' + tr('ms_status_in_progress')},
        {v:'completed', l: '✅ ' + tr('ms_status_completed')},
        {v:'delayed', l: '⚠️ ' + tr('ms_status_delayed')},
        {v:'on-hold', l: '⏸️ ' + tr('ms_status_on_hold')}
      ]},
      {key:'notes', label: tr('ms_notes'), type:'textarea'}
    ], m, function(data){
      Object.assign(m, data, {progress: parseInt(data.progress) || 0});
      if(window.saveSpace) window.saveSpace();
      renderMilestones();
      toast(tr('ms_updated'), 'success');
    }, function(){
      window.customConfirm(tr('ms_delete_confirm'), function(){
        project.milestones = project.milestones.filter(function(x){ return x.id !== id; });
        if(window.saveSpace) window.saveSpace();
        renderMilestones();
        toast(tr('ms_deleted'), 'success');
      });
    });
  }

  function exportMilestones(project){
    var lines = ['📅 ' + tr('ms_gantt') + ' — ' + project.name, ''];
    project.milestones.forEach(function(m){
      var status = STATUS[m.status] || STATUS['not-started'];
      lines.push(status.icon + ' ' + m.title + ' (' + m.start + ' → ' + m.end + ') — ' + (m.progress || 0) + '%');
    });
    var text = lines.join('\n');
    if(navigator.clipboard) navigator.clipboard.writeText(text).then(function(){ toast(tr('copied'), 'success'); });
    else alert(text);
  }

  /* ============ Install ============ */
  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._milestonesInstalled) return;
    window._milestonesInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'milestones') setTimeout(renderMilestones, 100);
      return r;
    };
  }

  document.addEventListener('languagechange', function(){ 
    var active = document.querySelector('.section.active');
    if(active && active.id === 'milestones') renderMilestones();
  });

  window.renderMilestones = renderMilestones;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('🎯 Milestones loaded');
})();

/* ========== risk-register.js ========== */
/* ============================================================
   ⚠️ risk-register.js — Risk Register + Matrix
   سجل المخاطر + مصفوفة الاحتمالية × التأثير
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function getSpace(){ return window.space || {projects:[]}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function uid(){ return 'risk_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

  var currentProject = null;

  var LEVELS = ['', 'veryLow', 'low', 'medium', 'high', 'veryHigh'];
  var SEVERITY = {
    1: {name:'منخفض جداً', nameEn:'Very Low',  color:'#10b981'},
    2: {name:'منخفض',      nameEn:'Low',       color:'#34d399'},
    3: {name:'متوسط',      nameEn:'Medium',    color:'#fbbf24'},
    4: {name:'عالي',       nameEn:'High',      color:'#f97316'},
    5: {name:'عالي جداً',  nameEn:'Very High', color:'#ef4444'}
  };

  function getSeverityColor(p, i){
    var s = p * i;
    if(s <= 4) return '#10b981';
    if(s <= 9) return '#fbbf24';
    if(s <= 15) return '#f97316';
    return '#ef4444';
  }
  function getSeverityLevel(p, i){
    var s = p * i;
    if(s <= 4) return tr('risk_low');
    if(s <= 9) return tr('risk_medium');
    if(s <= 15) return tr('risk_high');
    return tr('risk_critical');
  }

  /* ============ Main ============ */
  function renderRisks(){
    var el = document.getElementById('risksBody');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];

    if(!projects.length){
      el.innerHTML = '<div class="empty"><div class="ic">⚠️</div><p>' + tr('roadmap_no_projects') + '</p><p class="sub">' + tr('roadmap_no_projects_sub') + '</p></div>';
      return;
    }
    if(!currentProject) currentProject = projects[0].id;

    var html = '<div class="controls">';
    projects.forEach(function(p){
      var active = currentProject === p.id;
      html += '<button class="chip' + (active ? ' active' : '') + '" data-risk-select="' + p.id + '">' + (active ? '✓ ' : '') + esc(p.name) + '</button>';
    });
    html += '</div>';

    var project = projects.find(function(p){ return p.id === currentProject; });
    if(!project){ el.innerHTML = html; return; }

    if(!Array.isArray(project.risks)) project.risks = [];

    // Stats
    var stats = computeStats(project.risks);
    html += '<div class="grid grid-4" style="margin-bottom:16px">' +
      '<div class="stat"><div class="ic">⚠️</div><div><div class="v">' + stats.total + '</div><div class="l">' + tr('risk_total') + '</div></div></div>' +
      '<div class="stat"><div class="ic">🔴</div><div><div class="v" style="color:var(--red)">' + stats.critical + '</div><div class="l">' + tr('risk_critical') + '</div></div></div>' +
      '<div class="stat"><div class="ic">🟡</div><div><div class="v" style="color:var(--amber)">' + stats.medium + '</div><div class="l">' + tr('risk_medium') + '</div></div></div>' +
      '<div class="stat"><div class="ic">🟢</div><div><div class="v" style="color:var(--green)">' + stats.low + '</div><div class="l">' + tr('risk_low') + '</div></div></div>' +
    '</div>';

    // Toolbar
    html += '<div class="controls">' +
      '<button class="btn" id="riskAdd">' + tr('risk_add') + '</button>' +
      '<button class="btn btn-ghost" id="riskExport">📤 ' + tr('export') + '</button>' +
    '</div>';

    // Matrix
    if(project.risks.length){
      html += renderMatrix(project.risks);
    }

    // List
    if(!project.risks.length){
      html += '<div class="empty" style="margin-top:16px"><div class="ic">⚠️</div><p>' + tr('risk_empty') + '</p><p class="sub">' + tr('risk_empty_sub') + '</p></div>';
    } else {
      html += '<div style="margin-top:20px"><h3 style="font-size:.95rem;margin-bottom:12px;color:var(--cyan)">' + tr('risk_list') + '</h3>';
      html += renderList(project.risks);
      html += '</div>';
    }

    el.innerHTML = html;

    el.querySelectorAll('[data-risk-select]').forEach(function(b){
      b.onclick = function(){ currentProject = b.dataset.riskSelect; renderRisks(); };
    });
    var addBtn = document.getElementById('riskAdd');
    if(addBtn) addBtn.onclick = function(){ addRisk(project); };
    var expBtn = document.getElementById('riskExport');
    if(expBtn) expBtn.onclick = function(){ exportRisks(project); };
    bindListActions(project);
  }

  function computeStats(risks){
    var stats = {total: risks.length, critical:0, medium:0, low:0};
    risks.forEach(function(r){
      var s = (r.probability || 0) * (r.impact || 0);
      if(s > 15) stats.critical++;
      else if(s > 9) stats.medium++;
      else stats.low++;
    });
    return stats;
  }

  /* ============ Matrix ============ */
  function renderMatrix(risks){
    // 5x5 grid - rows = probability (5 top to 1 bottom), cols = impact (1 left to 5 right)
    var html = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>📊 ' + tr('risk_matrix') + '</h3></div>' +
      '<div style="display:flex;gap:8px;align-items:flex-start;overflow-x:auto">';

    // Y axis labels + matrix
    html += '<div style="display:flex;flex-direction:column;justify-content:center;padding-top:22px;gap:0">';
    for(var p = 5; p >= 1; p--){
      html += '<div style="height:60px;display:flex;align-items:center;justify-content:flex-end;padding-inline-end:8px;font-size:.68rem;color:var(--muted);font-weight:700">' + tr('risk_p' + p) + '</div>';
    }
    html += '</div>';

    // Grid
    html += '<div style="flex:1;min-width:300px">';
    // X axis header
    html += '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:2px;margin-bottom:4px">';
    for(var i = 1; i <= 5; i++){
      html += '<div style="text-align:center;font-size:.68rem;color:var(--muted);font-weight:700">' + tr('risk_i' + i) + '</div>';
    }
    html += '</div>';

    // Grid cells
    html += '<div style="display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(5,60px);gap:2px">';
    for(var pp = 5; pp >= 1; pp--){
      for(var ii = 1; ii <= 5; ii++){
        var cellRisks = risks.filter(function(r){ return (r.probability||0) === pp && (r.impact||0) === ii; });
        var color = getSeverityColor(pp, ii);
        html += '<div style="background:' + color + '25;border:1px solid ' + color + '60;border-radius:6px;position:relative;overflow:hidden;padding:4px;display:flex;flex-wrap:wrap;gap:2px;align-content:flex-start" title="P:' + pp + ' × I:' + ii + ' = ' + (pp*ii) + '">';
        cellRisks.forEach(function(r){
          html += '<div data-risk-view="' + r.id + '" style="width:14px;height:14px;border-radius:50%;background:' + color + ';cursor:pointer;font-size:.55rem;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900" title="' + esc(r.title) + '">!</div>';
        });
        html += '</div>';
      }
    }
    html += '</div>';

    // X axis label
    html += '<div style="text-align:center;font-size:.7rem;color:var(--muted);margin-top:8px;font-weight:700">' + tr('risk_impact') + ' →</div>';
    html += '</div>';

    // Y axis label (rotated)
    html += '<div style="display:flex;align-items:center;justify-content:center;padding-inline-start:4px"><div style="writing-mode:vertical-rl;transform:rotate(180deg);font-size:.7rem;color:var(--muted);font-weight:700">' + tr('risk_probability') + ' →</div></div>';

    html += '</div>';

    // Legend
    html += '<div style="display:flex;justify-content:center;gap:14px;margin-top:14px;flex-wrap:wrap;font-size:.7rem">';
    html += '<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;background:#10b981;border-radius:3px"></span>' + tr('risk_low') + '</span>';
    html += '<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;background:#fbbf24;border-radius:3px"></span>' + tr('risk_medium') + '</span>';
    html += '<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;background:#f97316;border-radius:3px"></span>' + tr('risk_high') + '</span>';
    html += '<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;background:#ef4444;border-radius:3px"></span>' + tr('risk_critical') + '</span>';
    html += '</div>';

    html += '</div>';
    return html;
  }

  /* ============ List ============ */
  function renderList(risks){
    var sorted = risks.slice().sort(function(a,b){
      return ((b.probability||0)*(b.impact||0)) - ((a.probability||0)*(a.impact||0));
    });
    var html = '';
    sorted.forEach(function(r){
      var sev = (r.probability||0) * (r.impact||0);
      var color = getSeverityColor(r.probability||0, r.impact||0);
      var level = getSeverityLevel(r.probability||0, r.impact||0);
      var cat = (window.RISK_TYPES || {})[r.category] || {name: r.category, nameEn: r.category, icon:'❓', color:'var(--muted)'};
      var lang = window.i18n ? window.i18n.getLang() : 'ar';
      var catLabel = lang === 'en' ? (cat.nameEn || cat.name) : cat.name;
      var statusIcon = r.status === 'closed' ? '✅' : (r.status === 'mitigating' ? '🛠️' : '🔴');
      html += '<div class="card" style="margin-bottom:10px;border-inline-start:3px solid ' + color + '">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-weight:800;font-size:.92rem">' + statusIcon + ' ' + esc(r.title) + '</div>' +
            '<div style="font-size:.7rem;color:var(--muted2);margin-top:3px">' + cat.icon + ' ' + catLabel + (r.owner ? ' · 👤 ' + esc(r.owner) : '') + '</div>' +
          '</div>' +
          '<div style="text-align:center;min-width:60px">' +
            '<div style="font-size:1.2rem;font-weight:800;color:' + color + '">' + sev + '</div>' +
            '<div style="font-size:.6rem;color:var(--muted);font-weight:700">' + level + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;gap:10px;font-size:.74rem;color:var(--muted);margin-bottom:8px;flex-wrap:wrap">' +
          '<span>📈 ' + tr('risk_p') + ': <b style="color:' + color + '">' + (r.probability||0) + '/5</b></span>' +
          '<span>💥 ' + tr('risk_i') + ': <b style="color:' + color + '">' + (r.impact||0) + '/5</b></span>' +
        '</div>' +
        (r.desc ? '<div style="font-size:.76rem;color:var(--muted);padding:6px 8px;background:var(--bg2);border-radius:8px;margin-bottom:6px">' + esc(r.desc) + '</div>' : '') +
        (r.mitigation ? '<div style="font-size:.76rem;color:var(--green);padding:6px 8px;background:rgba(52,211,153,.08);border-radius:8px;border:1px solid rgba(52,211,153,.2);margin-bottom:6px"><b>🛡️ ' + tr('risk_mitigation') + ':</b> ' + esc(r.mitigation) + '</div>' : '') +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
          '<button class="btn btn-sm btn-ghost" data-risk-view2="' + r.id + '">👁️ ' + tr('view') + '</button>' +
          '<button class="btn btn-sm btn-ghost" data-risk-edit="' + r.id + '">✏️</button>' +
          '<button class="btn btn-sm btn-danger" data-risk-del="' + r.id + '">🗑</button>' +
        '</div>' +
      '</div>';
    });
    return html;
  }

  function bindListActions(project){
    document.querySelectorAll('[data-risk-view]').forEach(function(b){
      b.onclick = function(){ viewRisk(project, b.dataset.riskView); };
    });
    document.querySelectorAll('[data-risk-view2]').forEach(function(b){
      b.onclick = function(){ viewRisk(project, b.dataset.riskView2); };
    });
    document.querySelectorAll('[data-risk-edit]').forEach(function(b){
      b.onclick = function(){ editRisk(project, b.dataset.riskEdit); };
    });
    document.querySelectorAll('[data-risk-del]').forEach(function(b){
      b.onclick = function(){
        window.customConfirm(tr('risk_delete_confirm'), function(){
          project.risks = project.risks.filter(function(x){ return x.id !== b.dataset.riskDel; });
          if(window.saveSpace) window.saveSpace();
          renderRisks();
          toast(tr('risk_deleted'), 'success');
        });
      };
    });
  }

  /* ============ CRUD ============ */
  function getCategoryOptions(){
    var opts = [];
    Object.keys(window.RISK_TYPES || {}).forEach(function(k){
      var c = window.RISK_TYPES[k];
      opts.push({v:k, l: c.icon + ' ' + c.name});
    });
    return opts;
  }

  function addRisk(project){
    window.showModal(tr('risk_new'), [
      {key:'title', label: tr('risk_title')},
      {key:'desc', label: tr('risk_desc'), type:'textarea'},
      {key:'category', label: tr('risk_category'), type:'select', options: getCategoryOptions()},
      {key:'probability', label: tr('risk_probability') + ' (1-5)', type:'number'},
      {key:'impact', label: tr('risk_impact') + ' (1-5)', type:'number'},
      {key:'mitigation', label: tr('risk_mitigation'), type:'textarea'},
      {key:'owner', label: tr('risk_owner')},
      {key:'status', label: tr('risk_status'), type:'select', options:[
        {v:'open', l:'🔴 ' + tr('risk_status_open')},
        {v:'mitigating', l:'🛠️ ' + tr('risk_status_mitigating')},
        {v:'closed', l:'✅ ' + tr('risk_status_closed')},
        {v:'accepted', l:'✔️ ' + tr('risk_status_accepted')}
      ]}
    ], {title:'', desc:'', category:'strategic', probability:3, impact:3, mitigation:'', owner:'', status:'open'}, function(data){
      if(!data.title) return toast(tr('risk_title_required'), 'warn');
      project.risks.push({
        id: uid(),
        title: data.title,
        desc: data.desc,
        category: data.category || 'strategic',
        probability: Math.max(1, Math.min(5, parseInt(data.probability) || 3)),
        impact: Math.max(1, Math.min(5, parseInt(data.impact) || 3)),
        mitigation: data.mitigation,
        owner: data.owner,
        status: data.status || 'open',
        createdAt: new Date().toISOString()
      });
      if(window.saveSpace) window.saveSpace();
      renderRisks();
      toast(tr('risk_added'), 'success');
    });
  }

  function editRisk(project, id){
    var r = project.risks.find(function(x){ return x.id === id; });
    if(!r) return;
    window.showModal(tr('risk_edit'), [
      {key:'title', label: tr('risk_title')},
      {key:'desc', label: tr('risk_desc'), type:'textarea'},
      {key:'category', label: tr('risk_category'), type:'select', options: getCategoryOptions()},
      {key:'probability', label: tr('risk_probability') + ' (1-5)', type:'number'},
      {key:'impact', label: tr('risk_impact') + ' (1-5)', type:'number'},
      {key:'mitigation', label: tr('risk_mitigation'), type:'textarea'},
      {key:'owner', label: tr('risk_owner')},
      {key:'status', label: tr('risk_status'), type:'select', options:[
        {v:'open', l:'🔴 ' + tr('risk_status_open')},
        {v:'mitigating', l:'🛠️ ' + tr('risk_status_mitigating')},
        {v:'closed', l:'✅ ' + tr('risk_status_closed')},
        {v:'accepted', l:'✔️ ' + tr('risk_status_accepted')}
      ]}
    ], r, function(data){
      Object.assign(r, data, {
        probability: Math.max(1, Math.min(5, parseInt(data.probability) || 3)),
        impact: Math.max(1, Math.min(5, parseInt(data.impact) || 3))
      });
      if(window.saveSpace) window.saveSpace();
      renderRisks();
      toast(tr('risk_updated'), 'success');
    }, function(){
      window.customConfirm(tr('risk_delete_confirm'), function(){
        project.risks = project.risks.filter(function(x){ return x.id !== id; });
        if(window.saveSpace) window.saveSpace();
        renderRisks();
        toast(tr('risk_deleted'), 'success');
      });
    });
  }

  function viewRisk(project, id){
    var r = project.risks.find(function(x){ return x.id === id; });
    if(!r) return;
    var cat = (window.RISK_TYPES || {})[r.category] || {name: r.category, icon:'❓'};
    var sev = (r.probability||0) * (r.impact||0);
    var color = getSeverityColor(r.probability||0, r.impact||0);
    var level = getSeverityLevel(r.probability||0, r.impact||0);

    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.innerHTML = '<div class="modal" style="max-width:600px">' +
      '<h3>' + cat.icon + ' ' + esc(r.title) + '</h3>' +
      '<div style="text-align:center;padding:20px;background:var(--grad-soft);border-radius:12px;margin:16px 0">' +
        '<div style="font-size:2.5rem;font-weight:800;color:' + color + '">' + sev + '</div>' +
        '<div style="font-size:.8rem;color:var(--muted);margin-top:4px">' + level + ' · P:' + (r.probability||0) + ' × I:' + (r.impact||0) + '</div>' +
      '</div>' +
      (r.desc ? '<div class="form-group"><label>' + tr('risk_desc') + '</label><div style="font-size:.85rem;line-height:1.7">' + esc(r.desc) + '</div></div>' : '') +
      (r.mitigation ? '<div class="form-group"><label>' + tr('risk_mitigation') + '</label><div style="font-size:.85rem;line-height:1.7;color:var(--green)">' + esc(r.mitigation) + '</div></div>' : '') +
      (r.owner ? '<div class="form-group"><label>' + tr('risk_owner') + '</label><div>' + esc(r.owner) + '</div></div>' : '') +
      '<div class="modal-actions">' +
        '<button class="btn btn-sm btn-ghost" id="riskViewClose">' + tr('close') + '</button>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);
    bd.querySelector('#riskViewClose').onclick = function(){ bd.remove(); };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
  }

  function exportRisks(project){
    var lines = ['⚠️ ' + tr('risk_list') + ' — ' + project.name, ''];
    project.risks.slice().sort(function(a,b){
      return ((b.probability||0)*(b.impact||0)) - ((a.probability||0)*(a.impact||0));
    }).forEach(function(r){
      var sev = (r.probability||0) * (r.impact||0);
      lines.push('• ' + r.title + ' (P:' + (r.probability||0) + ' × I:' + (r.impact||0) + ' = ' + sev + ')');
      if(r.mitigation) lines.push('  🛡️ ' + r.mitigation);
    });
    var text = lines.join('\n');
    if(navigator.clipboard) navigator.clipboard.writeText(text).then(function(){ toast(tr('copied'), 'success'); });
    else alert(text);
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._risksInstalled) return;
    window._risksInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'risks') setTimeout(renderRisks, 100);
      return r;
    };
  }

  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'risks') renderRisks();
  });

  window.renderRisks = renderRisks;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('⚠️ Risk Register loaded');
})();

/* ========== email-digest.js ========== */
/* ============================================================
   📧 email-digest.js — Email Digest
   قائمة الإيميلات + CC + جدولة + معاينة + إرسال
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function getSpace(){ return window.space || {}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function uid(){ return 'em_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

  function ensureDigest(){
    var sp = getSpace();
    if(!sp.emailDigest){
      sp.emailDigest = {
        recipients: [],
        cc: [],
        subjectTemplate: 'Business Dev Digest — {date}',
        schedule: 'weekly', // daily | weekly | monthly | manual
        sections: ['tasks', 'projects', 'sales', 'budget', 'risks'],
        includeStats: true,
        lastSent: null
      };
    }
    // normalize
    if(!Array.isArray(sp.emailDigest.recipients)) sp.emailDigest.recipients = [];
    if(!Array.isArray(sp.emailDigest.cc)) sp.emailDigest.cc = [];
    if(!Array.isArray(sp.emailDigest.sections)) sp.emailDigest.sections = ['tasks', 'projects', 'sales', 'budget'];
    return sp.emailDigest;
  }

  function renderDigest(){
    var el = document.getElementById('digestBody');
    if(!el) return;
    var d = ensureDigest();
    var lang = window.i18n ? window.i18n.getLang() : 'ar';

    var html = '';

    // Info card
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>📧 ' + tr('digest_title') + '</h3></div>' +
      '<p style="font-size:.83rem;color:var(--muted);line-height:1.7;margin-bottom:14px">' + tr('digest_desc') + '</p>' +
      '<div class="grid grid-2" style="gap:12px">' +
        '<div><label style="font-size:.76rem;color:var(--muted);font-weight:600">' + tr('digest_schedule') + '</label>' +
          '<select id="digestSchedule" style="width:100%;background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:10px;border-radius:10px;font-family:inherit;font-size:.85rem;outline:none;margin-top:4px">' +
            '<option value="manual"' + (d.schedule === 'manual' ? ' selected' : '') + '>' + tr('digest_manual') + '</option>' +
            '<option value="daily"' + (d.schedule === 'daily' ? ' selected' : '') + '>' + tr('digest_daily') + '</option>' +
            '<option value="weekly"' + (d.schedule === 'weekly' ? ' selected' : '') + '>' + tr('digest_weekly') + '</option>' +
            '<option value="monthly"' + (d.schedule === 'monthly' ? ' selected' : '') + '>' + tr('digest_monthly') + '</option>' +
          '</select>' +
        '</div>' +
        '<div><label style="font-size:.76rem;color:var(--muted);font-weight:600">' + tr('digest_subject') + '</label>' +
          '<input id="digestSubject" value="' + esc(d.subjectTemplate) + '" style="width:100%;background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:10px;border-radius:10px;font-family:inherit;font-size:.85rem;outline:none;margin-top:4px">' +
        '</div>' +
      '</div>' +
    '</div>';

    // Sections
    var allSections = [
      {k:'tasks',    l: tr('digest_sec_tasks'),    i:'📝'},
      {k:'projects', l: tr('digest_sec_projects'), i:'💼'},
      {k:'sales',    l: tr('digest_sec_sales'),    i:'💰'},
      {k:'budget',   l: tr('digest_sec_budget'),   i:'💵'},
      {k:'risks',    l: tr('digest_sec_risks'),    i:'⚠️'},
      {k:'milestones',l: tr('digest_sec_milestones'),i:'🎯'},
      {k:'notes',    l: tr('digest_sec_notes'),    i:'📔'}
    ];
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>📋 ' + tr('digest_sections') + '</h3></div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px">';
    allSections.forEach(function(s){
      var checked = d.sections.indexOf(s.k) > -1;
      html += '<label style="display:flex;align-items:center;gap:10px;padding:11px 13px;background:var(--bg2);border:1px solid var(--border);border-radius:10px;cursor:pointer" data-digest-section="' + s.k + '">' +
        '<input type="checkbox" data-digest-sec="' + s.k + '" ' + (checked ? 'checked' : '') + ' style="width:18px;height:18px;accent-color:var(--cyan);cursor:pointer">' +
        '<span style="font-size:1.1rem">' + s.i + '</span>' +
        '<span style="font-size:.85rem;font-weight:600">' + s.l + '</span>' +
      '</label>';
    });
    html += '</div></div>';

    // Recipients
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>👥 ' + tr('digest_recipients') + ' (' + d.recipients.length + ')</h3>' +
        '<button class="btn btn-sm" id="digestAddRecipient">' + tr('digest_add_recipient') + '</button></div>';
    if(!d.recipients.length){
      html += '<div style="text-align:center;padding:16px;color:var(--muted2);font-size:.8rem">' + tr('digest_no_recipients') + '</div>';
    } else {
      html += '<div style="display:flex;flex-direction:column;gap:8px">';
      d.recipients.forEach(function(r){
        html += '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg2);border:1px solid var(--border);border-radius:10px">' +
          '<div style="width:36px;height:36px;border-radius:10px;background:var(--grad);display:flex;align-items:center;justify-content:center;color:#0b0f1a;font-weight:800;flex-shrink:0">' + esc((r.name || r.email || '?').charAt(0).toUpperCase()) + '</div>' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-size:.85rem;font-weight:700">' + esc(r.name || tr('digest_no_name')) + '</div>' +
            '<div style="font-size:.72rem;color:var(--muted);direction:ltr;text-align:start;overflow:hidden;text-overflow:ellipsis">' + esc(r.email) + '</div>' +
          '</div>' +
          '<button class="btn btn-sm btn-ghost" data-digest-edit-rec="' + r.id + '">✏️</button>' +
          '<button class="btn btn-sm btn-danger" data-digest-del-rec="' + r.id + '">🗑</button>' +
        '</div>';
      });
      html += '</div>';
    }
    html += '</div>';

    // CC
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>📎 CC (' + d.cc.length + ')</h3>' +
        '<button class="btn btn-sm btn-ghost" id="digestAddCC">' + tr('digest_add_cc') + '</button></div>';
    if(!d.cc.length){
      html += '<div style="text-align:center;padding:16px;color:var(--muted2);font-size:.8rem">' + tr('digest_no_cc') + '</div>';
    } else {
      html += '<div style="display:flex;flex-direction:column;gap:8px">';
      d.cc.forEach(function(r){
        html += '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg2);border:1px solid var(--border);border-radius:10px">' +
          '<div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,var(--amber),var(--purple));display:flex;align-items:center;justify-content:center;color:#0b0f1a;font-weight:800;flex-shrink:0">' + esc((r.name || r.email || '?').charAt(0).toUpperCase()) + '</div>' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-size:.85rem;font-weight:700">' + esc(r.name || tr('digest_no_name')) + '</div>' +
            '<div style="font-size:.72rem;color:var(--muted);direction:ltr;text-align:start;overflow:hidden;text-overflow:ellipsis">' + esc(r.email) + '</div>' +
          '</div>' +
          '<button class="btn btn-sm btn-ghost" data-digest-edit-cc="' + r.id + '">✏️</button>' +
          '<button class="btn btn-sm btn-danger" data-digest-del-cc="' + r.id + '">🗑</button>' +
        '</div>';
      });
      html += '</div>';
    }
    html += '</div>';

    // Preview & Actions
    html += '<div class="card">' +
      '<div class="card-head"><h3>👁️ ' + tr('digest_preview') + '</h3>' +
        '<button class="btn btn-sm btn-ghost" id="digestRefreshPreview">🔄 ' + tr('digest_refresh') + '</button></div>' +
      '<div id="digestPreviewBody" style="padding:14px;background:var(--bg2);border-radius:10px;font-size:.82rem;line-height:1.7;max-height:400px;overflow-y:auto;white-space:pre-wrap;font-family:inherit"></div>' +
      '<div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap">' +
        '<button class="btn" id="digestSend">' + tr('digest_send') + '</button>' +
        '<button class="btn btn-ghost" id="digestCopyBody">' + tr('digest_copy_body') + '</button>' +
      '</div>' +
    '</div>';

    el.innerHTML = html;

    // Bindings
    var sched = document.getElementById('digestSchedule');
    if(sched) sched.onchange = function(){ d.schedule = sched.value; if(window.saveSpace) window.saveSpace(); toast(tr('digest_saved'), 'success', 1200); };
    var subj = document.getElementById('digestSubject');
    if(subj) subj.oninput = function(){ d.subjectTemplate = subj.value; if(window.saveSpace) window.saveSpace(); };
    document.querySelectorAll('[data-digest-sec]').forEach(function(cb){
      cb.onchange = function(){
        var k = cb.dataset.digestSec;
        var idx = d.sections.indexOf(k);
        if(cb.checked && idx === -1) d.sections.push(k);
        else if(!cb.checked && idx > -1) d.sections.splice(idx, 1);
        if(window.saveSpace) window.saveSpace();
        renderPreview();
      };
    });
    var addRec = document.getElementById('digestAddRecipient');
    if(addRec) addRec.onclick = function(){ addEmail(d, 'recipients'); };
    var addCC = document.getElementById('digestAddCC');
    if(addCC) addCC.onclick = function(){ addEmail(d, 'cc'); };
    document.querySelectorAll('[data-digest-edit-rec]').forEach(function(b){
      b.onclick = function(){ editEmail(d, 'recipients', b.dataset.digestEditRec); };
    });
    document.querySelectorAll('[data-digest-del-rec]').forEach(function(b){
      b.onclick = function(){
        window.customConfirm(tr('digest_delete_confirm'), function(){
          d.recipients = d.recipients.filter(function(x){ return x.id !== b.dataset.digestDelRec; });
          if(window.saveSpace) window.saveSpace();
          renderDigest();
        });
      };
    });
    document.querySelectorAll('[data-digest-edit-cc]').forEach(function(b){
      b.onclick = function(){ editEmail(d, 'cc', b.dataset.digestEditCc); };
    });
    document.querySelectorAll('[data-digest-del-cc]').forEach(function(b){
      b.onclick = function(){
        window.customConfirm(tr('digest_delete_confirm'), function(){
          d.cc = d.cc.filter(function(x){ return x.id !== b.dataset.digestDelCc; });
          if(window.saveSpace) window.saveSpace();
          renderDigest();
        });
      };
    });
    var refBtn = document.getElementById('digestRefreshPreview');
    if(refBtn) refBtn.onclick = function(){ renderPreview(); toast(tr('digest_refreshed'), 'info', 1200); };
    var copyBtn = document.getElementById('digestCopyBody');
    if(copyBtn) copyBtn.onclick = function(){
      var body = buildEmailBody();
      if(navigator.clipboard) navigator.clipboard.writeText(body).then(function(){ toast(tr('copied'), 'success'); });
    };
    var sendBtn = document.getElementById('digestSend');
    if(sendBtn) sendBtn.onclick = function(){ sendDigest(d); };

    renderPreview();
  }

  function renderPreview(){
    var body = document.getElementById('digestPreviewBody');
    if(!body) return;
    body.textContent = buildEmailBody();
  }

  function addEmail(d, listKey){
    window.showModal(listKey === 'recipients' ? tr('digest_new_recipient') : tr('digest_new_cc'), [
      {key:'name', label: tr('digest_name')},
      {key:'email', label: tr('digest_email')}
    ], {name:'', email:''}, function(data){
      if(!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) return toast(tr('digest_email_invalid'), 'warn');
      d[listKey].push({id: uid(), name: data.name, email: data.email});
      if(window.saveSpace) window.saveSpace();
      renderDigest();
      toast(tr('digest_saved'), 'success');
    });
  }

  function editEmail(d, listKey, id){
    var item = d[listKey].find(function(x){ return x.id === id; });
    if(!item) return;
    window.showModal(tr('edit'), [
      {key:'name', label: tr('digest_name')},
      {key:'email', label: tr('digest_email')}
    ], item, function(data){
      if(!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) return toast(tr('digest_email_invalid'), 'warn');
      item.name = data.name; item.email = data.email;
      if(window.saveSpace) window.saveSpace();
      renderDigest();
      toast(tr('digest_saved'), 'success');
    }, function(){
      window.customConfirm(tr('digest_delete_confirm'), function(){
        d[listKey] = d[listKey].filter(function(x){ return x.id !== id; });
        if(window.saveSpace) window.saveSpace();
        renderDigest();
      });
    });
  }

  /* ============ Build body ============ */
  function buildEmailBody(){
    var d = ensureDigest();
    var sp = getSpace();
    var lang = window.i18n ? window.i18n.getLang() : 'ar';
    var name = (sp.profile && sp.profile.name) || '';
    var lines = [];
    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    lines.push('💼 ' + tr('brand') + (name ? ' — ' + name : ''));
    lines.push('📅 ' + new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {weekday:'long', year:'numeric', month:'long', day:'numeric'}));
    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    lines.push('');

    // Stats summary
    if(d.includeStats){
      var projects = (sp.projects || []).length;
      var pendingTasks = (sp.tasks || []).filter(function(t){ return !t.done; }).length;
      var deals = (sp.salesPipeline || []).length;
      lines.push('📊 ' + tr('digest_summary') + ':');
      lines.push('  • ' + tr('dash_projects_label') + ': ' + projects);
      lines.push('  • ' + tr('dash_pending_tasks') + ': ' + pendingTasks);
      lines.push('  • ' + tr('dash_deals') + ': ' + deals);
      lines.push('');
    }

    // Sections
    if(d.sections.indexOf('tasks') > -1){
      var pending = (sp.tasks || []).filter(function(t){ return !t.done; }).slice(0, 10);
      if(pending.length){
        lines.push('📝 ' + tr('digest_sec_tasks') + ':');
        pending.forEach(function(t){
          var due = t.due ? ' (' + t.due + ')' : '';
          lines.push('  • ' + t.title + due);
        });
        lines.push('');
      }
    }

    if(d.sections.indexOf('projects') > -1){
      var projects = (sp.projects || []).slice(0, 8);
      if(projects.length){
        lines.push('💼 ' + tr('digest_sec_projects') + ':');
        projects.forEach(function(p){
          var stage = (window.PRISM_STAGES || {})[p.stage] || {name:'—'};
          var stageName = lang === 'en' ? (stage.nameEn || stage.name) : stage.name;
          lines.push('  • ' + p.name + ' — ' + stageName);
        });
        lines.push('');
      }
    }

    if(d.sections.indexOf('sales') > -1){
      var deals = (sp.salesPipeline || []).slice(0, 8);
      if(deals.length){
        lines.push('💰 ' + tr('digest_sec_sales') + ':');
        deals.forEach(function(x){
          var stage = (window.PIPELINE_STAGES || {})[x.stage] || {name:'—'};
          var stageName = lang === 'en' ? (stage.nameEn || stage.name) : stage.name;
          lines.push('  • ' + x.client + ' — ' + stageName + ' (' + (parseFloat(x.value)||0).toFixed(0) + ' ' + (x.currency||'') + ')');
        });
        lines.push('');
      }
    }

    if(d.sections.indexOf('budget') > -1){
      var inc = (sp.budget || []).filter(function(b){ return b.type === 'income'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
      var exp = (sp.budget || []).filter(function(b){ return b.type === 'expense'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
      if(inc || exp){
        lines.push('💵 ' + tr('digest_sec_budget') + ':');
        lines.push('  • ' + tr('budget_total_income') + ': ' + inc.toFixed(0));
        lines.push('  • ' + tr('budget_total_expense') + ': ' + exp.toFixed(0));
        lines.push('  • ' + tr('budget_balance') + ': ' + (inc - exp).toFixed(0));
        lines.push('');
      }
    }

    if(d.sections.indexOf('risks') > -1){
      var risks = [];
      (sp.projects || []).forEach(function(p){
        (p.risks || []).forEach(function(r){
          if(r.status !== 'closed') risks.push({proj: p.name, risk: r});
        });
      });
      if(risks.length){
        lines.push('⚠️ ' + tr('digest_sec_risks') + ':');
        risks.slice(0, 8).forEach(function(x){
          var sev = (x.risk.probability||0) * (x.risk.impact||0);
          lines.push('  • [' + x.proj + '] ' + x.risk.title + ' (P×I=' + sev + ')');
        });
        lines.push('');
      }
    }

    if(d.sections.indexOf('milestones') > -1){
      var ms = [];
      (sp.projects || []).forEach(function(p){
        (p.milestones || []).forEach(function(m){
          if(m.status === 'in-progress' || m.status === 'delayed') ms.push({proj: p.name, ms: m});
        });
      });
      if(ms.length){
        lines.push('🎯 ' + tr('digest_sec_milestones') + ':');
        ms.slice(0, 8).forEach(function(x){
          lines.push('  • [' + x.proj + '] ' + x.ms.title + ' — ' + (x.ms.progress||0) + '%');
        });
        lines.push('');
      }
    }

    if(d.sections.indexOf('notes') > -1){
      var notes = (sp.notes || []).slice(0, 5);
      if(notes.length){
        lines.push('📔 ' + tr('digest_sec_notes') + ':');
        notes.forEach(function(n){
          lines.push('  • ' + (n.title || tr('digest_no_title')));
        });
        lines.push('');
      }
    }

    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    lines.push('💼 ' + tr('brand') + ' — ' + tr('digest_footer'));
    return lines.join('\n');
  }

  /* ============ Send ============ */
  function sendDigest(d){
    if(!d.recipients.length && !d.cc.length){
      return toast(tr('digest_no_recipients'), 'warn', 2500);
    }
    var to = d.recipients.map(function(r){ return r.email; }).join(',');
    var cc = d.cc.map(function(r){ return r.email; }).join(',');
    var lang = window.i18n ? window.i18n.getLang() : 'ar';
    var subject = d.subjectTemplate.replace('{date}', new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US'));
    var body = buildEmailBody();

    var url = 'mailto:' + encodeURIComponent(to) +
      '?subject=' + encodeURIComponent(subject) +
      (cc ? '&cc=' + encodeURIComponent(cc) : '') +
      '&body=' + encodeURIComponent(body);

    // Save last sent
    d.lastSent = new Date().toISOString();
    if(window.saveSpace) window.saveSpace();

    // Open mail client
    window.location.href = url;
    toast(tr('digest_opened'), 'success', 3000);
  }

  /* ============ Install ============ */
  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._digestInstalled) return;
    window._digestInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'digest') setTimeout(renderDigest, 100);
      return r;
    };
  }

  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'digest') renderDigest();
  });

  window.renderDigest = renderDigest;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('📧 Email Digest loaded');
})();

/* ========== file-sync-plus.js ========== */
/* ============================================================
   📁 file-sync-plus.js — ربط ملفات المشروع + تحديث تلقائي
   ============================================================ */
(function(){
  'use strict';

  var SYNC_INTERVAL = 5 * 60 * 1000;
  var syncTimers = {};

  function getSpace(){ return window.space || {projects:[],projectFiles:{}}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  var currentProject = null;

  function renderFiles(){
    var el = document.getElementById('filesBody');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];
    if(!projects.length){
      el.innerHTML = '<div class="empty"><div class="ic">📁</div><p>لا توجد مشاريع</p></div>';
      return;
    }
    if(!currentProject) currentProject = projects[0].id;

    var html = '<div class="controls">';
    projects.forEach(function(p){
      var active = currentProject === p.id;
      html += '<button class="chip' + (active ? ' active' : '') + '" data-fp-select="' + p.id + '">' + (active ? '✓ ' : '') + esc(p.name) + '</button>';
    });
    html += '</div>';

    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>📁 ملفات المشروع</h3>' +
      '<span class="badge" id="fpCount">—</span></div>' +
      '<div id="fpList"></div>' +
      '<button class="upload-course-btn" id="fpUpload" style="margin-top:12px">📤 رفع ملف</button>' +
      '<input type="file" id="fpInput" style="display:none">' +
      '<div class="upload-progress-bar" id="fpProgress"><div class="inner" id="fpProgressInner"></div></div>' +
    '</div>';

    el.innerHTML = html;

    el.querySelectorAll('[data-fp-select]').forEach(function(b){
      b.addEventListener('click', function(){ currentProject = b.dataset.fpSelect; renderFiles(); });
    });

    var uploadBtn = document.getElementById('fpUpload');
    var fileInput = document.getElementById('fpInput');
    if(uploadBtn && fileInput){
      uploadBtn.onclick = function(){ fileInput.click(); };
      fileInput.onchange = function(e){
        var f = e.target.files[0];
        if(f) uploadFile(currentProject, f);
        fileInput.value = '';
      };
    }

    loadFiles(currentProject);
  }

  async function loadFiles(projectId){
    var list = document.getElementById('fpList');
    var count = document.getElementById('fpCount');
    if(!list) return;
    list.innerHTML = '<div style="text-align:center;padding:14px;font-size:.78rem;color:var(--muted2)">جاري التحميل...</div>';

    if(!window.SB || !window.SB.listProjectFiles){
      list.innerHTML = '<div style="text-align:center;padding:14px;font-size:.78rem;color:var(--muted2)">المزامنة غير مفعّلة</div>';
      return;
    }

    try{
      var files = await window.SB.listProjectFiles(projectId);
      if(!files.length){
        list.innerHTML = '<div style="text-align:center;padding:14px;font-size:.78rem;color:var(--muted2)">ما في ملفات بعد</div>';
        if(count) count.textContent = '0 ملف';
        return;
      }
      if(count) count.textContent = files.length + ' ملف';

      var html = '';
      files.forEach(function(f){
        var icon = window.SB.getFileIcon(f.name);
        var size = window.SB.formatFileSize(f.size);
        var cleanName = f.name.replace(/^\d+_/, '');
        html += '<div class="course-file-item" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg2);border:1px solid var(--border);border-radius:10px;margin-bottom:6px">' +
          '<div style="font-size:1.3rem;flex-shrink:0">' + icon + '</div>' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-size:.82rem;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(cleanName) + '</div>' +
            '<div style="font-size:.68rem;color:var(--muted2);margin-top:2px">' + size + '</div>' +
          '</div>' +
          '<div style="display:flex;gap:4px">' +
            '<a class="btn btn-sm btn-ghost" href="' + esc(f.url) + '" target="_blank" rel="noopener">👁️</a>' +
            '<button class="btn btn-sm btn-danger" data-fp-del="' + esc(f.path) + '">🗑</button>' +
          '</div>' +
        '</div>';
      });
      list.innerHTML = html;
      list.querySelectorAll('[data-fp-del]').forEach(function(b){
        b.addEventListener('click', function(){
          window.customConfirm('حذف الملف؟', async function(){
            var ok = await window.SB.deleteProjectFile(b.dataset.fpDel);
            if(ok){ toast('🗑 حُذف', 'success'); loadFiles(projectId); }
            else toast('فشل الحذف', 'warn');
          });
        });
      });
    }catch(e){
      console.error(e);
      list.innerHTML = '<div style="text-align:center;padding:14px;font-size:.78rem;color:var(--red)">فشل التحميل</div>';
    }
  }

  async function uploadFile(projectId, file){
    if(!window.SB || !window.SB.uploadProjectFile){
      toast('خدمة الرفع غير متوفرة', 'warn'); return;
    }
    if(file.size > 25 * 1024 * 1024){
      toast('⚠️ الحد 25 MB', 'warn', 3500); return;
    }
    var prog = document.getElementById('fpProgress');
    var inner = document.getElementById('fpProgressInner');
    if(prog) prog.style.display = 'block';
    if(inner) inner.style.width = '30%';

    toast('📤 جاري الرفع...', 'info', 2000);
    try{
      var res = await window.SB.uploadProjectFile(projectId, file);
      if(inner) inner.style.width = '100%';
      setTimeout(function(){ if(prog) prog.style.display = 'none'; if(inner) inner.style.width = '0'; }, 800);
      if(res.error){ toast('❌ ' + res.error, 'warn', 3500); return; }
      toast('✅ تم الرفع!', 'success');
      loadFiles(projectId);
    }catch(e){
      if(prog) prog.style.display = 'none';
      toast('فشل الرفع', 'warn');
    }
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._fileSyncInstalled) return;
    window._fileSyncInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'files') setTimeout(renderFiles, 100);
      return r;
    };
  }

  window.renderFiles = renderFiles;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('📁 File Sync Plus loaded');
})();

/* ========== insights.js ========== */
/* ============================================================
   📈 insights.js — تحليلات متقدمة (مع i18n)
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function getSpace(){ return window.space || {projects:[],salesPipeline:[]}; }

  function renderInsights(){
    var el = document.getElementById('insightsBody');
    if(!el) return;
    var sp = getSpace();
    var lang = window.i18n ? window.i18n.getLang() : 'ar';

    var html = '';
    var totalProjects = (sp.projects || []).length;
    var activeProjects = (sp.projects || []).filter(function(p){ return p.stage !== 'close' && p.stage !== 'benefit'; }).length;
    var ideasCount = (sp.ideas || []).length;
    var dealsCount = (sp.salesPipeline || []).length;
    var dealsWon = (sp.salesPipeline || []).filter(function(d){ return d.stage === 'won'; }).length;
    var winRate = dealsCount ? Math.round((dealsWon / dealsCount) * 100) : 0;

    html += '<div class="grid grid-4" style="margin-bottom:16px">' +
      '<div class="stat"><div class="ic">💼</div><div><div class="v">' + totalProjects + '</div><div class="l">' + tr('insights_projects') + '</div></div></div>' +
      '<div class="stat"><div class="ic">🎯</div><div><div class="v">' + activeProjects + '</div><div class="l">' + tr('insights_active') + '</div></div></div>' +
      '<div class="stat"><div class="ic">💡</div><div><div class="v">' + ideasCount + '</div><div class="l">' + tr('insights_ideas') + '</div></div></div>' +
      '<div class="stat"><div class="ic">📊</div><div><div class="v">' + winRate + '%</div><div class="l">' + tr('insights_win_rate') + '</div></div></div>' +
    '</div>';

    if(totalProjects){
      var stages = window.PRISM_STAGES || {};
      var stageCounts = {};
      Object.keys(stages).forEach(function(k){ stageCounts[k] = 0; });
      (sp.projects || []).forEach(function(p){ if(stageCounts[p.stage] !== undefined) stageCounts[p.stage]++; });

      html += '<div class="card" style="margin-bottom:16px">' +
        '<h3>' + tr('insights_projects_by_stage') + '</h3>';
      var maxCount = Math.max.apply(null, Object.keys(stageCounts).map(function(k){ return stageCounts[k]; })) || 1;
      Object.keys(stages).forEach(function(k){
        var cnt = stageCounts[k];
        var pct = Math.round((cnt / maxCount) * 100);
        var sName = lang === 'en' ? (stages[k].nameEn || stages[k].name) : stages[k].name;
        html += '<div style="margin-bottom:10px">' +
          '<div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px">' +
            '<span>' + stages[k].icon + ' ' + sName + '</span>' +
            '<span style="color:var(--cyan);font-weight:700">' + cnt + '</span>' +
          '</div>' +
          '<div style="height:8px;background:var(--bg2);border-radius:8px;overflow:hidden">' +
            '<div style="height:100%;width:' + pct + '%;background:var(--grad);border-radius:8px"></div>' +
          '</div>' +
        '</div>';
      });
      html += '</div>';
    }

    if(dealsCount){
      var pStages = window.PIPELINE_STAGES || {};
      var pCounts = {};
      Object.keys(pStages).forEach(function(k){ pCounts[k] = 0; });
      sp.salesPipeline.forEach(function(d){ if(pCounts[d.stage] !== undefined) pCounts[d.stage]++; });

      html += '<div class="card" style="margin-bottom:16px">' +
        '<h3>' + tr('insights_pipeline_title') + '</h3>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px">';
      Object.keys(pStages).forEach(function(k){
        var s = pStages[k];
        var sName = lang === 'en' ? (s.nameEn || s.name) : s.name;
        html += '<div style="text-align:center;padding:12px;background:var(--bg2);border-radius:10px;border:2px solid ' + s.color + '30">' +
          '<div style="font-size:1.5rem">' + s.icon + '</div>' +
          '<div style="font-size:1.3rem;font-weight:800;color:' + s.color + ';margin:4px 0">' + pCounts[k] + '</div>' +
          '<div style="font-size:.68rem;color:var(--muted)">' + sName + '</div>' +
        '</div>';
      });
      html += '</div></div>';
    }

    var allSdg = [];
    (sp.projects || []).forEach(function(p){
      if(p.impact && Array.isArray(p.impact.sdg)){
        p.impact.sdg.forEach(function(n){ if(allSdg.indexOf(n) === -1) allSdg.push(n); });
      }
    });
    if(allSdg.length){
      html += '<div class="card">' +
        '<h3>' + tr('insights_sdg_title') + '</h3>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px">';
      allSdg.forEach(function(n){
        var sdg = window.SDG_DB[n];
        if(!sdg) return;
        var sdgName = lang === 'en' ? (sdg.nameEn || sdg.name) : sdg.name;
        html += '<div style="text-align:center;padding:10px;background:' + sdg.color + '20;border-radius:10px;border:1px solid ' + sdg.color + '50">' +
          '<div style="font-size:1.5rem">' + sdg.icon + '</div>' +
          '<div style="font-size:.7rem;font-weight:700;color:' + sdg.color + ';margin-top:4px">SDG ' + n + '</div>' +
          '<div style="font-size:.65rem;color:var(--muted);margin-top:2px">' + sdgName + '</div>' +
        '</div>';
      });
      html += '</div></div>';
    }

    el.innerHTML = html;
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._insightsInstalled) return;
    window._insightsInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'reports') setTimeout(renderInsights, 100);
      return r;
    };
  }

  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'reports') renderInsights();
  });

  window.renderInsights = renderInsights;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('📈 Insights loaded');
})();

/* ========== calendar-sync.js ========== */
/* ============================================================
   📅 calendar-sync.js — تصدير المهام للمهام لـ Google Calendar
   ============================================================ */
(function(){
  'use strict';

  function getSpace(){ return window.space || {}; }
  function toast(m, t, d){ if(typeof window.toast === 'function') window.toast(m, t || 'info', d || 2600); }
  function esc(s){ return String(s == null ? '' : s).replace(/[,;\\]/g, '\\$&').replace(/\n/g, '\\n'); }

  function pad(n){ return String(n).padStart(2, '0'); }
  function icsDate(y, m, d, h, mi){ return y + pad(m) + pad(d) + 'T' + pad(h) + pad(mi) + '00'; }

  function buildICS(){
    var sp = getSpace();
    var name = (sp.profile && sp.profile.name) || 'Business Owner';
    var lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0',
      'PRODID:-//Business Dev//Calendar Sync//AR',
      'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
      'X-WR-CALNAME:تطوير أعمالي — ' + esc(name),
      'X-WR-TIMEZONE:Asia/Qatar',
      'BEGIN:VTIMEZONE', 'TZID:Asia/Qatar',
      'BEGIN:STANDARD', 'DTSTART:19700101T000000',
      'TZOFFSETFROM:+0300', 'TZOFFSETTO:+0300',
      'TZNAME:+03', 'END:STANDARD', 'END:VTIMEZONE'
    ];

    // المهام
    (sp.tasks || []).forEach(function(t){
      if(t.done || !t.due) return;
      var p = t.due.split('-');
      if(p.length !== 3) return;
      var y = parseInt(p[0], 10), m = parseInt(p[1], 10), d = parseInt(p[2], 10);
      lines.push('BEGIN:VEVENT');
      lines.push('UID:task-' + (t.id || t.title) + '@businessdev');
      lines.push('DTSTAMP:' + icsDate(new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate(), new Date().getHours(), new Date().getMinutes()));
      lines.push('DTSTART;TZID=Asia/Qatar:' + icsDate(y, m, d, 9, 0));
      lines.push('DTEND;TZID=Asia/Qatar:' + icsDate(y, m, d, 10, 0));
      lines.push('SUMMARY:📝 ' + esc(t.title));
      if(t.project) lines.push('DESCRIPTION:💼 ' + esc(t.project));
      lines.push('BEGIN:VALARM'); lines.push('TRIGGER:-PT1H');
      lines.push('ACTION:DISPLAY'); lines.push('DESCRIPTION:' + esc(t.title));
      lines.push('END:VALARM');
      lines.push('END:VEVENT');
    });

    // اجتماعات أصحاب المصلحة (إن وُجدت)
    (sp.stakeholders || []).forEach(function(s){
      if(!s.nextMeeting) return;
      var p = s.nextMeeting.split('-');
      if(p.length !== 3) return;
      var y = parseInt(p[0], 10), m = parseInt(p[1], 10), d = parseInt(p[2], 10);
      lines.push('BEGIN:VEVENT');
      lines.push('UID:meet-' + (s.id || s.name) + '@businessdev');
      lines.push('DTSTAMP:' + icsDate(new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate(), new Date().getHours(), new Date().getMinutes()));
      lines.push('DTSTART;TZID=Asia/Qatar:' + icsDate(y, m, d, 10, 0));
      lines.push('DTEND;TZID=Asia/Qatar:' + icsDate(y, m, d, 11, 0));
      lines.push('SUMMARY:👥 اجتماع مع ' + esc(s.name));
      lines.push('END:VEVENT');
    });

    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
  }

  function downloadICS(){
    try{
      var ics = buildICS();
      var blob = new Blob([ics], {type: 'text/calendar;charset=utf-8'});
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'business-dev-' + new Date().toISOString().slice(0,10) + '.ics';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function(){ URL.revokeObjectURL(url); }, 1500);
      toast('📅 تم تنزيل ملف التقويم', 'success', 4000);
    }catch(e){ console.error(e); toast('فشل التصدير', 'warn'); }
  }

  function injectButton(){
    var menu = document.getElementById('settingsMenu');
    if(!menu || menu.querySelector('#calSyncBtn')) return;
    var btn = document.createElement('button');
    btn.className = 'settings-item';
    btn.id = 'calSyncBtn';
    btn.innerHTML = '<span>📅</span> تصدير للمهام التقويم (.ics)';
    btn.addEventListener('click', function(){
      if(typeof window.closeSettingsMenu === 'function') window.closeSettingsMenu();
      downloadICS();
    });
    var pdfBtn = menu.querySelector('#pdfBtn');
    if(pdfBtn) menu.insertBefore(btn, pdfBtn);
    else menu.appendChild(btn);
  }

  window.downloadICS = downloadICS;
  window.buildICS = buildICS;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(injectButton, 600); });
  else setTimeout(injectButton, 600);
  console.log('📅 Calendar Sync loaded');
})();

/* ========== archive.js ========== */
/* ============================================================
   📦 archive.js — أرشيف المشاريع (مع i18n)
   ============================================================ */
(function(){
  'use strict';

  var ARCHIVE_KEY = 'bd_archive';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m, t||'info', d||2200); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function getSpace(){ return window.space || null; }

  function getArchive(){
    try{
      var v = JSON.parse(localStorage.getItem(ARCHIVE_KEY) || '[]');
      return Array.isArray(v) ? v : [];
    }catch(e){ return []; }
  }

  function saveArchive(arr){
    try{ localStorage.setItem(ARCHIVE_KEY, JSON.stringify(arr)); }catch(e){}
  }

  function archiveProject(projectId){
    var sp = getSpace(); if(!sp) return;
    var proj = (sp.projects || []).find(function(p){ return p.id === projectId; });
    if(!proj) return;

    window.customConfirm(tr('archive_move_confirm', {name: proj.name}), function(){
      var archive = getArchive();
      archive.unshift({
        id: proj.id, name: proj.name, description: proj.description,
        archivedAt: new Date().toISOString(), originalStage: proj.stage,
        data: proj,
        snapshot: {
          tasks: (sp.tasks || []).filter(function(t){ return t.project === proj.name; }),
          deals: (sp.salesPipeline || []).filter(function(d){ return d.project && d.project.indexOf(proj.name.slice(0, 20)) > -1; })
        }
      });
      saveArchive(archive);
      sp.projects = (sp.projects || []).filter(function(p){ return p.id !== projectId; });
      if(window.saveSpace) window.saveSpace();
      toast(tr('archive_moved'), 'success');
      if(window.switchTab) window.switchTab('archive');
    });
  }

  function restoreProject(archivedId){
    var archive = getArchive();
    var item = archive.find(function(x){ return x.id === archivedId; });
    if(!item) return;
    var sp = getSpace(); if(!sp) return;

    window.customConfirm(tr('archive_restore_confirm', {name: item.name}), function(){
      if(!Array.isArray(sp.projects)) sp.projects = [];
      sp.projects.push(item.data);
      if(item.snapshot){
        if(Array.isArray(item.snapshot.tasks)){
          if(!Array.isArray(sp.tasks)) sp.tasks = [];
          item.snapshot.tasks.forEach(function(t){
            if(!sp.tasks.some(function(x){ return x.id === t.id; })) sp.tasks.push(t);
          });
        }
        if(Array.isArray(item.snapshot.deals)){
          if(!Array.isArray(sp.salesPipeline)) sp.salesPipeline = [];
          item.snapshot.deals.forEach(function(d){
            if(!sp.salesPipeline.some(function(x){ return x.id === d.id; })) sp.salesPipeline.push(d);
          });
        }
      }
      saveArchive(archive.filter(function(x){ return x.id !== archivedId; }));
      if(window.saveSpace) window.saveSpace();
      toast(tr('archive_restored'), 'success');
      renderArchive();
    });
  }

  function deleteArchived(archivedId){
    window.customConfirm(tr('archive_delete_confirm'), function(){
      saveArchive(getArchive().filter(function(x){ return x.id !== archivedId; }));
      toast(tr('archive_deleted'), 'success');
      renderArchive();
    });
  }

  function renderArchive(){
    var el = document.getElementById('archiveBody');
    if(!el) return;
    var archive = getArchive();

    var html = '<div class="grid grid-4" style="margin-bottom:16px">' +
      '<div class="stat"><div class="ic">📦</div><div><div class="v">' + archive.length + '</div><div class="l">' + tr('archive_projects_archived') + '</div></div></div>' +
    '</div>';

    if(!archive.length){
      html += '<div class="empty"><div class="ic">📦</div><p>' + tr('archive_empty') + '</p>' +
        '<p class="sub">' + tr('archive_empty_sub') + '</p></div>';
      el.innerHTML = html;
      return;
    }

    html += '<div style="display:flex;flex-direction:column;gap:10px">';
    archive.forEach(function(item){
      var stage = (window.PRISM_STAGES || {})[item.originalStage] || {name:'—', icon:'❓'};
      var date = '';
      try{
        var lang = window.i18n ? window.i18n.getLang() : 'ar';
        date = new Date(item.archivedAt).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {year:'numeric',month:'short',day:'numeric'});
      }catch(e){}
      var msCount = (item.data.milestones || []).length;
      var riskCount = (item.data.risks || []).length;
      var taskCount = item.snapshot && item.snapshot.tasks ? item.snapshot.tasks.length : 0;

      html += '<div class="card">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-weight:800;font-size:.95rem">📦 ' + esc(item.name) + '</div>' +
            '<div style="font-size:.72rem;color:var(--muted2);margin-top:2px">' + stage.icon + ' ' + stage.name + ' · 📅 ' + tr('archive_archived_in') + ' ' + date + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;gap:14px;font-size:.75rem;color:var(--muted);margin-bottom:10px;flex-wrap:wrap">' +
          '<span>🎯 ' + msCount + ' ' + tr('archive_stages') + '</span>' +
          '<span>⚠️ ' + riskCount + ' ' + tr('archive_risks') + '</span>' +
          '<span>📝 ' + taskCount + ' ' + tr('archive_tasks') + '</span>' +
        '</div>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
          '<button class="btn btn-sm" data-arch-view="' + item.id + '">' + tr('archive_view') + '</button>' +
          '<button class="btn btn-sm btn-ghost" data-arch-restore="' + item.id + '">' + tr('archive_restore') + '</button>' +
          '<button class="btn btn-sm btn-danger" data-arch-del="' + item.id + '">' + tr('archive_delete_permanent') + '</button>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    el.innerHTML = html;

    el.querySelectorAll('[data-arch-view]').forEach(function(b){ b.onclick = function(){ viewArchived(b.dataset.archView); }; });
    el.querySelectorAll('[data-arch-restore]').forEach(function(b){ b.onclick = function(){ restoreProject(b.dataset.archRestore); }; });
    el.querySelectorAll('[data-arch-del]').forEach(function(b){ b.onclick = function(){ deleteArchived(b.dataset.archDel); }; });
  }

  function viewArchived(id){
    var item = getArchive().find(function(x){ return x.id === id; });
    if(!item) return;
    var d = item.data;
    var msList = (d.milestones || []).map(function(m){
      return '<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--border);font-size:.78rem">' +
        '<span>' + esc(m.title) + '</span>' +
        '<span style="color:var(--cyan);font-weight:700">' + (m.progress || 0) + '%</span></div>';
    }).join('') || '<div style="font-size:.78rem;color:var(--muted2)">' + tr('archive_no_stages') + '</div>';

    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.innerHTML = '<div class="modal" style="max-width:600px">' +
      '<h3>📦 ' + esc(item.name) + '</h3>' +
      '<p style="color:var(--muted);font-size:.82rem;margin-bottom:14px">' + esc(d.description || '') + '</p>' +
      '<div style="padding:12px;background:var(--bg2);border-radius:10px;margin-bottom:10px">' +
        '<div style="font-weight:800;color:var(--cyan);font-size:.82rem;margin-bottom:8px">🎯 ' + tr('archive_stages') + '</div>' +
        msList +
      '</div>' +
      '<div class="modal-actions">' +
        '<button class="btn btn-ghost" id="archViewClose">' + tr('close') + '</button>' +
        '<button class="btn" id="archViewRestore">' + tr('archive_restore') + '</button>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);
    bd.querySelector('#archViewClose').onclick = function(){ bd.remove(); };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
    bd.querySelector('#archViewRestore').onclick = function(){ bd.remove(); restoreProject(id); };
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._archiveInstalled) return;
    window._archiveInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'archive') setTimeout(renderArchive, 100);
      return r;
    };
  }

  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'archive') renderArchive();
  });

  window.renderArchive = renderArchive;
  window.archiveProject = archiveProject;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('📦 Archive module loaded');
})();

/* ========== ai-advisor.js ========== */
/* ============================================================
   🤖 ai-advisor.js — المستشار الذكي لتطوير الأعمال
   يقرأ كل بيانات المشروع ويجيب على الأسئلة
   ============================================================ */
(function(){
  'use strict';

  function getSpace(){ return window.space || {profile:{},ideas:[],projects:[],salesPipeline:[],tasks:[],budget:[],stakeholders:[]}; }
  function getFrameworks(){ return window.FRAMEWORKS_DB || {}; }
  function getCountries(){ return window.COUNTRIES_DB || {}; }
  function getSectors(){ return window.SECTORS_DB || {}; }

  /* ============ خريطة الأقسام ============ */
  var SITE_MAP = {
    dashboard:     {name:'لوحة التحكم',    icon:'📊', desc:'نظرة عامة على مشاريعك',    keys:['لوحة','لوحه','dashboard','رئيسية','الرئيسية','البداية']},
    ideas:         {name:'أفكاري',         icon:'💡', desc:'الأفكار والمشاريع',         keys:['افكار','أفكار','افكاري','ideas','فكرة','مشروع','مشاريع']},
    roadmap:       {name:'خريطة الطريق',   icon:'🗺️', desc:'مراحل PRiSM',              keys:['خريطة','مراحل','roadmap','PRiSM','دورة','حياة']},
    strategy:      {name:'الاستراتيجية',   icon:'🎯', desc:'SWOT, PESTEL, OKRs',       keys:['استراتيجية','strategy','SWOT','PESTEL','OKR','تحليل','سوات']},
    impact:        {name:'قياس الأثر',     icon:'📈', desc:'SDG + ESG + P5',           keys:['اثر','أثر','impact','SDG','ESG','P5','استدامة']},
    stakeholders:  {name:'أصحاب المصلحة',  icon:'👥', desc:'خريطة الأطراف',            keys:['اصحاب','أصحاب','stakeholders','مصلحة','شركاء','فريق']},
    sales:         {name:'المبيعات',       icon:'💼', desc:'Pipeline + MEDDIC',        keys:['مبيعات','sales','فرص','pipeline','MEDDIC','عميل','عملاء']},
    leadership:    {name:'القيادة',        icon:'🎓', desc:'أنماط وتطوير',             keys:['قيادة','leadership','فريق','team','نمط']},
    budget:        {name:'الميزانية',      icon:'💰', desc:'دخل ومصاريف',              keys:['ميزانية','budget','مصاريف','فلوس','تمويل','رصيد','دخل','مصروف']},
    files:         {name:'الملفات',        icon:'📁', desc:'ملفات المشروع',            keys:['ملفات','files','وثائق','مستندات','رفع']},
    tasks:         {name:'المهام',         icon:'📝', desc:'المهام والمراحل',          keys:['مهام','tasks','مهمة','واجب','متابعة']},
    notes:         {name:'ملاحظاتي',       icon:'📔', desc:'ملاحظات المشروع',          keys:['ملاحظات','notes','مذكرة','تدوين']},
    countries:     {name:'الدول والأطر',   icon:'🌍', desc:'مؤشرات الدول',             keys:['دول','دولة','countries','قطر','Qatar','SDG','اطار','أطر']},
    reports:       {name:'التقارير',       icon:'📊', desc:'تحليلات وتقارير',          keys:['تقارير','reports','تحليلات','إحصاء']}
  };

  /* ============ كيفية الاستخدام ============ */
  var HOWTO = {
    ideas:'💡 **إضافة فكرة:**\n\n1️⃣ افتح "أفكاري"\n2️⃣ اضغط "+ فكرة جديدة"\n3️⃣ املأ البيانات\n4️⃣ اختر القطاع والدولة\n5️⃣ احفظ',
    strategy:'🎯 **بناء استراتيجية:**\n\n1️⃣ افتح "الاستراتيجية"\n2️⃣ اختر مشروعاً من الأعلى\n3️⃣ ابدأ بـ SWOT (نقاط القوة/الضعف/الفرص/التهديدات)\n4️⃣ انتقل إلى PESTEL\n5️⃣ ثم OKRs',
    roadmap:'🗺️ **خريطة الطريق:**\n\n• مراحل PRiSM الست:\n  🔍 ما قبل المشروع\n  📐 التصميم\n  🏗️ البناء\n  ⚙️ التشغيل\n  🏁 الإغلاق\n  🌟 تحقيق المنفعة\n\n1️⃣ اختر المشروع\n2️⃣ اضغط على المرحلة\n3️⃣ أضف مهام',
    impact:'📈 **قياس الأثر:**\n\n1️⃣ افتح "قياس الأثر"\n2️⃣ اختر مشروعاً\n3️⃣ اختر أهداف SDG (17 هدف)\n4️⃣ املأ محاور P5 الخمسة\n5️⃣ قيّم ESG\n\n💡 P5: People, Planet, Prosperity, Process, Product',
    sales:'💼 **إدارة المبيعات:**\n\n1️⃣ افتح "المبيعات"\n2️⃣ "+ فرصة جديدة"\n3️⃣ ادخل بيانات العميل\n4️⃣ طبّق إطار MEDDIC:\n  M - Metrics\n  E - Economic Buyer\n  D - Decision Criteria\n  D - Decision Process\n  I - Identify Pain\n  C - Champion',
    budget:'💰 **الميزانية:**\n\n📈 زر "+ دخل" للتمويل والمنح\n📉 زر "+ مصروف" للتكاليف\n\n• 16 تصنيفاً متاحاً\n• رصيد تلقائي\n• تصنيف حسب النوع',
    tasks:'📝 **المهام:**\n\n1️⃣ افتح "المهام"\n2️⃣ "+ مهمة"\n3️⃣ اربطها بمشروع (اختياري)\n4️⃣ حدد تاريخ التسليم\n\n💡 ستظهر في لوحة التحكم',
    files:'📁 **الملفات:**\n\n1️⃣ افتح "الملفات"\n2️⃣ اختر مشروعاً\n3️⃣ "📤 رفع ملف"\n\n📦 الحد 25 MB\n☁️ مزامنة تلقائية عبر Supabase',
    countries:'🌍 **الدول والأطر:**\n\n🌍 تبويب "الدول": مؤشرات ESG/SDG لـ 9 دول\n📚 تبويب "الأطر": 17 إطار دولي\n\n💡 يمكنك تعيين دولتك من أي بطاقة',
    leadership:'🎓 **اختبار القيادة:**\n\n1️⃣ افتح "القيادة"\n2️⃣ "▶ ابدأ الاختبار"\n3️⃣ أجب على 10 أسئلة\n4️⃣ اعرف نمطك:\n  📢 Telling\n  💬 Selling\n  🤝 Participating\n  🎯 Delegating',
    dashboard:'📊 **لوحة التحكم:**\n\n• إحصائيات رئيسية\n• مهام قادمة\n• القمع البيعي\n• آخر الأفكار\n• اقتباس اليوم',
    stakeholders:'👥 **أصحاب المصلحة:**\n\n1️⃣ افتح "أصحاب المصلحة"\n2️⃣ "+ جديد"\n3️⃣ الاسم + الدور + الجهة + التواصل\n\n💡 استخدمها لخريطة أطراف المشروع',
    notes:'📔 **ملاحظاتي:**\n\n1️⃣ "+ ملاحظة"\n2️⃣ اكتب العنوان والتفاصيل\n\n💾 حفظ تلقائي أثناء الكتابة'
  };

  /* ============ اقتراحات ============ */
  var SUGG_POOL = [
    'ملخص مساحتي',
    'كم مشروع عندي؟',
    'شنو SWOT؟',
    'كيف أضيف فكرة؟',
    'افتح المبيعات',
    'مؤشرات قطر',
    'كم مهامي المتبقية؟',
    'كيف أحسب الأثر؟',
    'شنو PRiSM؟',
    'افتح الاستراتيجية',
    'قارن بين قطر والإمارات',
    'كم رصيدي؟',
    'نصائح تطوير أعمال',
    'أطر المبيعات',
    'افتح خريطة الطريق'
  ];

  function pickRandom(arr, n){
    var copy = arr.slice(); var out = [];
    for(var i = 0; i < n && copy.length; i++){
      var idx = Math.floor(Math.random() * copy.length);
      out.push(copy.splice(idx, 1)[0]);
    }
    return out;
  }

  /* ============ تطبيع النص العربي ============ */
  function normalizeArabic(s){
    return String(s || '')
      .replace(/[\u064B-\u0652\u0670\u0640]/g, '')
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/[ىئ]/g, 'ي')
      .replace(/ؤ/g, 'و')
      .replace(/[؟?.,،!؛;:]/g, ' ')
      .replace(/\s+/g, ' ')
      .toLowerCase()
      .trim();
  }

  function fuzzyMatch(text, keyword){
    text = text || ''; keyword = keyword || '';
    if(!text || !keyword) return false;
    if(text.indexOf(keyword) > -1) return true;
    if(keyword.length >= 4 && text.indexOf(keyword.slice(0, 3)) > -1) return true;
    return false;
  }

  /* ============ Toggle / Open ============ */
  function toggleAI(){
    var p = document.getElementById('aiPanel'); if(!p) return;
    var willOpen = !p.classList.contains('show');
    p.classList.toggle('show');
    if(willOpen){
      var fm = document.getElementById('fabMenu'); if(fm) fm.classList.remove('show');
      var fmm = document.getElementById('fabMain'); if(fmm) fmm.classList.remove('active');
      var aiBtn = document.getElementById('aiFab'); if(aiBtn) aiBtn.classList.remove('hidden');
      var m = document.getElementById('aiMessages');
      if(m && !m.children.length) initAI();
    }
  }

  /* ============ Init ============ */
  function initAI(){
    var s = document.getElementById('aiSuggestions'); if(!s) return;
    var picks = pickRandom(SUGG_POOL, 5);
    var html = '';
    picks.forEach(function(x){ html += '<button class="ai-suggestion">' + x + '</button>'; });
    s.innerHTML = html;
    s.querySelectorAll('.ai-suggestion').forEach(function(b){
      b.addEventListener('click', function(){
        var inp = document.getElementById('aiInput');
        if(inp) inp.value = b.textContent;
        sendAI();
      });
    });

    var sp = getSpace();
    var name = (sp.profile && sp.profile.name) || '';
    var country = (sp.profile && sp.profile.country) || 'QA';
    var countryInfo = getCountries()[country] || {flag:'🌍', name:''};
    var intro = (name ? '👋 أهلاً ' + name.split(' ')[0] + '! ' : '👋 أهلاً! ') +
      countryInfo.flag + '\n\n' +
      'أنا **مستشارك الذكي** 🤖\n\n' +
      '✨ **أعرف كل شي عن مساحتك:**\n' +
      '• 📊 إحصائيات مشاريعك وأفكارك\n' +
      '• 💼 المبيعات والقمع البيعي\n' +
      '• 🌍 مؤشرات 9 دول عربية\n' +
      '• 📚 17 إطار دولي (SWOT, PESTEL, MEDDIC...)\n' +
      '• 📖 شرح كل شيء خطوة بخطوة\n\n' +
      '💡 **جرّب:**\n' +
      '• "ملخص مساحتي"\n' +
      '• "شنو SWOT؟"\n' +
      '• "افتح المبيعات"\n' +
      '• "مؤشرات قطر"\n' +
      '• "كيف أضيف فكرة؟"\n\n' +
      '📝 أفهم العامية والفصحى!';
    addAIMessage('bot', intro);
  }

  /* ============ إضافة رسالة ============ */
  function addAIMessage(type, text){
    var c = document.getElementById('aiMessages'); if(!c) return;
    var m = document.createElement('div');
    m.className = 'ai-msg ' + type;
    var html = String(text)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    // Bold
    html = html.replace(/\*\*([^*\n]+?)\*\*/g, '<b>$1</b>');
    // Italic
    html = html.replace(/(^|\s)_([^_\n]+?)_(\s|$)/g, '$1<i>$2</i>$3');
    // Code
    html = html.replace(/`([^`\n]+?)`/g, '<code style="background:rgba(0,0,0,.25);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:.85em;direction:ltr">$1</code>');
    m.innerHTML = html;
    c.appendChild(m);
    c.scrollTop = c.scrollHeight;
  }

  /* ============ Send ============ */
  function sendAI(){
    var inp = document.getElementById('aiInput'); if(!inp) return;
    var q = inp.value.trim(); if(!q) return;
    addAIMessage('user', q); inp.value = '';
    var c = document.getElementById('aiMessages');
    var typing = null;
    if(c){
      typing = document.createElement('div');
      typing.className = 'ai-msg bot';
      typing.innerHTML = '<span class="ai-dots"><span></span><span></span><span></span></span>';
      c.appendChild(typing); c.scrollTop = c.scrollHeight;
    }
    setTimeout(function(){
      if(typing && typing.parentNode) typing.parentNode.removeChild(typing);
      addAIMessage('bot', aiRespond(q));
    }, 500);
  }

  /* ============ الرد الرئيسي ============ */
  function aiRespond(q){
    var raw = String(q).trim();
    if(!raw) return '🤔 اكتب سؤالك.';

    var lower = normalizeArabic(raw);
    var today = new Date().toISOString().slice(0,10);
    var now = new Date();
    var r;

    // 1. تنقل
    r = detectNavigation(lower); if(r) return r;

    // 2. كيف أستخدم
    r = detectHowTo(lower); if(r) return r;

    // 3. استعلامات البيانات
    r = answerDataQuery(lower, today, now); if(r) return r;

    // 4. الأطر
    r = answerFrameworkQuery(lower); if(r) return r;

    // 5. الدول
    r = answerCountryQuery(lower); if(r) return r;

    // 6. روابط ومساعدات عامة
    r = answerGeneral(lower); if(r) return r;

    // 7. اقتباس/نصيحة
    r = answerTips(lower); if(r) return r;

    // 8. بحث عام
    r = generalSearch(raw); if(r) return r;

    // fallback
    return '🤔 ما فهمت "' + raw + '" تماماً.\n\n' +
      '💡 **جرّب:**\n\n' +
      '🧭 **للتنقل:**\n• "افتح المبيعات"\n• "افتح الأفكار"\n\n' +
      '❓ **للاستفسار:**\n• "كيف أضيف فكرة؟"\n• "شنو SWOT؟"\n\n' +
      '📊 **بياناتك:**\n• "ملخص مساحتي"\n• "كم مشروع عندي؟"\n\n' +
      '🌍 **مؤشرات:**\n• "مؤشرات قطر"';
  }

  /* ============ 1. التنقل ============ */
  var NAV_VERBS = ['افتح','روح','اذهب','خذني','انتقل','ودني','ابغى','ابي','اريد','شوف','اعرض','عرض','اظهر','سير','خدني','open'];

  function detectNavigation(lower){
    var hasNavVerb = false;
    for(var i=0;i<NAV_VERBS.length;i++){
      if(fuzzyMatch(lower, NAV_VERBS[i])){ hasNavVerb = true; break; }
    }

    var tabKeys = Object.keys(SITE_MAP);
    var foundTab = null;
    for(var t=0;t<tabKeys.length;t++){
      var keys = SITE_MAP[tabKeys[t]].keys;
      for(var k=0;k<keys.length;k++){
        var key = keys[k].toLowerCase();
        if(lower === key || lower.indexOf(' '+key+' ') > -1 ||
           lower.indexOf(key+' ') === 0 ||
           lower.indexOf(' '+key) === lower.length - key.length - 1 ||
           fuzzyMatch(lower, key)){
          foundTab = tabKeys[t]; break;
        }
      }
      if(foundTab) break;
    }
    if(!foundTab) return null;

    // إذا لم يكن هناك فعل تنقل والسؤال طويل، لا تنقّل
    if(!hasNavVerb && lower.split(' ').filter(Boolean).length > 4) return null;
    // إذا لم يكن هناك فعل تنقل، ولم يكن النص مجرد اسم القسم، لا تنقل
    if(!hasNavVerb && lower.split(' ').filter(Boolean).length > 2) return null;

    try{
      if(typeof window.switchTab === 'function'){
        window.switchTab(foundTab);
        var s = SITE_MAP[foundTab];
        return '✅ فتحت ' + s.icon + ' **' + s.name + '**\n\n💡 ' + s.desc;
      }
    }catch(e){}
    return null;
  }

  /* ============ 2. كيف ============ */
  function detectHowTo(lower){
    var isHowTo = fuzzyMatch(lower,'كيف') || fuzzyMatch(lower,'طريقه') ||
                  fuzzyMatch(lower,'شرح') || fuzzyMatch(lower,'اشرح') ||
                  fuzzyMatch(lower,'وضح') || fuzzyMatch(lower,'علمني') ||
                  fuzzyMatch(lower,'كيفيه') || fuzzyMatch(lower,'استخدم') ||
                  fuzzyMatch(lower,'اسوي') || fuzzyMatch(lower,'اضيف') ||
                  fuzzyMatch(lower,'احط') || fuzzyMatch(lower,'ازيد') ||
                  fuzzyMatch(lower,'how');
    if(!isHowTo) return null;

    var tabKeys = Object.keys(HOWTO);
    for(var i=0;i<tabKeys.length;i++){
      var keys = SITE_MAP[tabKeys[i]] ? SITE_MAP[tabKeys[i]].keys : [];
      for(var k=0;k<keys.length;k++){
        if(fuzzyMatch(lower, keys[k].toLowerCase())) return HOWTO[tabKeys[i]];
      }
    }
    return null;
  }

  /* ============ 3. استعلامات البيانات ============ */
  function answerDataQuery(lower, today, now){
    var sp = getSpace();
    var projects = sp.projects || [];
    var ideas = sp.ideas || [];
    var tasks = sp.tasks || [];
    var pending = tasks.filter(function(t){ return !t.done; });
    var deals = sp.salesPipeline || [];

    /* ---- ملخص كامل ---- */
    if(lower.indexOf('ملخص') > -1 || lower.indexOf('كل شي') > -1 || lower.indexOf('وضعي') > -1){
      var name = (sp.profile && sp.profile.name) || 'صديقي';
      var country = (sp.profile && sp.profile.country) || 'QA';
      var cInfo = getCountries()[country] || {flag:'🌍', name:''};
      var inc = (sp.budget || []).filter(function(b){ return b.type === 'income'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
      var exp = (sp.budget || []).filter(function(b){ return b.type === 'expense'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
      var bal = inc - exp;
      var won = deals.filter(function(d){ return d.stage === 'won'; }).length;

      return '📊 **ملخص مساحة ' + name + '** ' + cInfo.flag + '\n' +
        '━━━━━━━━━━━━━━━\n\n' +
        '💼 **المشاريع:** ' + projects.length + '\n' +
        '💡 **الأفكار:** ' + ideas.length + '\n' +
        '📝 **المهام:** ' + pending.length + ' متبقية / ' + tasks.length + ' كلي\n' +
        '💼 **الفرص البيعية:** ' + deals.length + ' (' + won + ' رابحة)\n' +
        '👥 **أصحاب المصلحة:** ' + (sp.stakeholders || []).length + '\n' +
        '📁 **الملفات:** ' + Object.keys(sp.projectFiles || {}).length + ' مجموعة\n\n' +
        '💰 **الميزانية:**\n' +
        '• دخل: ' + inc.toFixed(0) + '\n' +
        '• مصروف: ' + exp.toFixed(0) + '\n' +
        '• رصيد: **' + bal.toFixed(0) + '** ' + (bal >= 0 ? '👍' : '⚠️') + '\n\n' +
        '📔 الملاحظات: ' + (sp.notes || []).length;
    }

    /* ---- مشاريع ---- */
    if(lower.indexOf('مشروع') > -1 || lower.indexOf('مشاريع') > -1){
      if(!projects.length) return '💼 ما عندك مشاريع بعد.\n\n➕ روح "أفكاري" وحوّل فكرة لمشروع';
      var lines = projects.slice(0, 8).map(function(p){
        var stage = (window.PRISM_STAGES || {})[p.stage] || {name:'—', icon:'❓'};
        return '• ' + stage.icon + ' **' + p.name + '** (' + stage.name + ')';
      });
      return '💼 **مشاريعك (' + projects.length + '):**\n\n' + lines.join('\n');
    }

    /* ---- أفكار ---- */
    if(lower.indexOf('افكار') > -1 || lower.indexOf('افكاري') > -1 || lower.indexOf('فكره') > -1){
      if(!ideas.length) return '💡 ما عندك أفكار بعد.\n\n➕ روح "أفكاري" → "+ فكرة جديدة"';
      var list = ideas.slice(0, 6).map(function(idea){
        var t = (window.IDEA_TYPES || {})[idea.type] || {icon:'💡'};
        return '• ' + t.icon + ' ' + idea.name;
      });
      return '💡 **أفكارك (' + ideas.length + '):**\n\n' + list.join('\n') +
        (ideas.length > 6 ? '\n\n💡 ...و ' + (ideas.length - 6) + ' أكثر' : '');
    }

    /* ---- مهام ---- */
    if(lower.indexOf('مهام') > -1 || lower.indexOf('مهمه') > -1 || lower.indexOf('واجب') > -1){
      if(!tasks.length) return '📝 ما عندك مهام.\n\n➕ روح "المهام" → "+ مهمة"';
      var overdue = pending.filter(function(t){ return t.due && t.due < today; });
      var dueToday = pending.filter(function(t){ return t.due === today; });
      var msg = '📝 **ملخص المهام:**\n• متبقية: **' + pending.length + '**\n• مكتملة: **' + (tasks.length - pending.length) + '**';
      if(overdue.length) msg += '\n\n⚠️ **متأخرة (' + overdue.length + '):**\n' + overdue.slice(0,4).map(function(t){ return '• ' + t.title; }).join('\n');
      if(dueToday.length) msg += '\n\n📌 **اليوم (' + dueToday.length + '):**\n' + dueToday.slice(0,4).map(function(t){ return '• ' + t.title; }).join('\n');
      return msg;
    }

    /* ---- مبيعات ---- */
    if(lower.indexOf('مبيعات') > -1 || lower.indexOf('فرص') > -1 || lower.indexOf('عملاء') > -1){
      if(!deals.length) return '💼 ما عندك فرص بيعية.\n\n➕ روح "المبيعات" → "+ فرصة جديدة"';
      var won = deals.filter(function(d){ return d.stage === 'won'; }).length;
      var lost = deals.filter(function(d){ return d.stage === 'lost'; }).length;
      var totalValue = deals.reduce(function(a,b){ return a + (parseFloat(b.value)||0); }, 0);
      var wonValue = deals.filter(function(d){ return d.stage === 'won'; }).reduce(function(a,b){ return a + (parseFloat(b.value)||0); }, 0);
      var winRate = (won + lost) ? Math.round(won / (won + lost) * 100) : 0;
      return '💼 **المبيعات:**\n\n' +
        '📊 إجمالي الفرص: **' + deals.length + '**\n' +
        '🎉 رابحة: **' + won + '**\n' +
        '❌ خاسرة: **' + lost + '**\n' +
        '📈 نسبة الفوز: **' + winRate + '%**\n\n' +
        '💰 قيمة إجمالية: **' + totalValue.toFixed(0) + '**\n' +
        '💵 إيراد محقق: **' + wonValue.toFixed(0) + '**';
    }

    /* ---- ميزانية ---- */
    if(lower.indexOf('ميزانيه') > -1 || lower.indexOf('رصيد') > -1 || lower.indexOf('دخل') > -1 ||
       lower.indexOf('مصروف') > -1 || lower.indexOf('مصاريف') > -1 || lower.indexOf('فلوس') > -1){
      var inc = (sp.budget || []).filter(function(b){ return b.type === 'income'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
      var exp = (sp.budget || []).filter(function(b){ return b.type === 'expense'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
      var bal = inc - exp;
      return '💰 **الميزانية:**\n\n' +
        '📈 دخل: **' + inc.toFixed(0) + '**\n' +
        '📉 مصروف: **' + exp.toFixed(0) + '**\n' +
        '💼 رصيد: **' + bal.toFixed(0) + '** ' + (bal >= 0 ? '👍' : '⚠️');
    }

    /* ---- أصحاب مصلحة ---- */
    if(lower.indexOf('اصحاب') > -1 || lower.indexOf('مصلحه') > -1 || lower.indexOf('شركاء') > -1){
      var sh = sp.stakeholders || [];
      if(!sh.length) return '👥 ما عندك أصحاب مصلحة.\n\n➕ روح "أصحاب المصلحة" → "+ جديد"';
      return '👥 **أصحاب المصلحة (' + sh.length + '):**\n\n' +
        sh.slice(0, 6).map(function(s){ return '• ' + s.name + (s.role ? ' — ' + s.role : ''); }).join('\n');
    }

    /* ---- ملاحظات ---- */
    if(lower.indexOf('ملاحظات') > -1 || lower.indexOf('ملاحظه') > -1){
      var notes = sp.notes || [];
      if(!notes.length) return '📔 ما عندك ملاحظات.';
      return '📔 **ملاحظاتك:** ' + notes.length + '\n\nآخر: **' + (notes[0].title || 'بدون عنوان') + '**';
    }

    /* ---- قيادة ---- */
    if(lower.indexOf('قياده') > -1 || lower.indexOf('نمط') > -1){
      var r = sp.leadershipAssessment;
      if(!r) return '🎓 ما عملت اختبار القيادة بعد.\n\n➕ روح "القيادة" → "▶ ابدأ الاختبار"';
      var styles = {
        telling:{name:'التوجيهي 📢', desc:'تقود بتعليمات مباشرة'},
        selling:{name:'البيعي 💬', desc:'تقود بالإقناع'},
        participating:{name:'المشارك 🤝', desc:'تقود بالمشاركة'},
        delegating:{name:'المفوض 🎯', desc:'تقود بالثقة'}
      };
      var w = styles[r.winner] || {name:'—', desc:''};
      return '🎓 **نمط قيادتك:** ' + w.name + '\n\n' + w.desc;
    }

    return null;
  }

  /* ============ 4. الأطر ============ */
  function answerFrameworkQuery(lower){
    var fw = getFrameworks();
    var keys = Object.keys(fw);
    if(!keys.length) return null;

    // بحث بالاسم أو الكود
    for(var i = 0; i < keys.length; i++){
      var name = keys[i];
      var nameLower = normalizeArabic(name);
      var code = (fw[name].code || '').toLowerCase();
      if(lower.indexOf(nameLower) > -1 || (code && lower.indexOf(code) > -1)){
        var f = fw[name];
        var msg = f.icon + ' **' + f.title + '**' + (f.titleEn ? ' (' + f.titleEn + ')' : '') + '\n\n' +
          '📝 **الوصف:** ' + f.desc + '\n\n';
        if(f.when) msg += '⏰ **متى يُستخدم:** ' + f.when + '\n\n';
        if(f.steps && f.steps.length) msg += '📋 **الخطوات/المكونات:**\n' + f.steps.map(function(s){ return '• ' + s; }).join('\n') + '\n\n';
        if(f.source) msg += '📚 **المصدر:** ' + f.source;
        return msg;
      }
    }
    return null;
  }

  /* ============ 5. الدول ============ */
  function answerCountryQuery(lower){
    var countries = getCountries();
    var keys = Object.keys(countries);
    for(var i = 0; i < keys.length; i++){
      var c = countries[keys[i]];
      var nameAr = normalizeArabic(c.name);
      var nameEn = (c.nameEn || '').toLowerCase();
      if(lower.indexOf(nameAr) > -1 || (nameEn && lower.indexOf(nameEn) > -1)){
        var msg = c.flag + ' **' + c.name + ' (' + c.nameEn + ')**\n\n' +
          '📊 **المؤشرات:**\n' +
          '• ESG Score: **' + c.esgScore + '** (#' + c.esgRank + ')\n' +
          '• SDG Index: **' + c.sdgIndex + '** (#' + c.sdgRank + ')\n\n' +
          '🏭 **القطاعات:**\n' + c.keySectors.slice(0,5).map(function(x){ return '• ' + x; }).join('\n') + '\n\n' +
          '♻️ **تركيز الاستدامة:**\n' + c.sustainabilityFocus.slice(0,3).map(function(x){ return '• ' + x; }).join('\n') + '\n\n' +
          '🎁 **الحوافز:**\n' + c.incentives.slice(0,3).map(function(x){ return '• ' + x; }).join('\n') + '\n\n' +
          '🎯 **الرؤية:** ' + c.vision;
        return msg;
      }
    }
    return null;
  }

  /* ============ 6. عام ============ */
  function answerGeneral(lower){
    // تحيات
    if(/^(مرحبا|هلا|اهلا|هاي|السلام عليكم|صباح|مساء|hi|hello)/.test(lower)){
      if(lower.indexOf('السلام') > -1) return '👋 وعليكم السلام ورحمة الله! كيف أساعدك؟';
      if(lower.indexOf('صباح') > -1) return '☀️ صباح النور! جاهز أساعدك.';
      if(lower.indexOf('مساء') > -1) return '🌆 مساء النور! كيف أساعدك؟';
      return '👋 أهلاً! اسألني عن مشاريعك أو الأطر أو الدول.';
    }
    if(lower.indexOf('كيف حالك') > -1 || lower.indexOf('كيفك') > -1){
      return '😊 بخير! جاهز لخدمتك.';
    }
    if(lower.indexOf('شكرا') > -1 || lower.indexOf('مشكور') > -1){
      return '🙏 على الرحب والسعة! 💙';
    }
    if(lower.indexOf('من انت') > -1 || lower.indexOf('مين انت') > -1){
      return '🤖 **أنا مستشارك الذكي**\n\n✨ أعرف:\n• بياناتك (مشاريع، أفكار، مبيعات)\n• 17 إطار دولي\n• مؤشرات 9 دول\n• 10 قطاعات\n\n💡 جرّب "ملخص مساحتي"';
    }
    if(lower.indexOf('اقسام') > -1 || lower.indexOf('قائمه') > -1){
      var keys = Object.keys(SITE_MAP);
      var out = '🗺️ **أقسام الموقع (' + keys.length + '):**\n\n';
      keys.forEach(function(k){
        var s = SITE_MAP[k];
        out += s.icon + ' **' + s.name + '** — ' + s.desc + '\n';
      });
      return out;
    }
    if(lower.indexOf('اطار') > -1 || lower.indexOf('أطر') > -1 || lower.indexOf('frameworks') > -1){
      var fw = getFrameworks();
      var fwKeys = Object.keys(fw);
      var out = '📚 **الأطر المتوفرة (' + fwKeys.length + '):**\n\n';
      fwKeys.forEach(function(k){
        var f = fw[k];
        out += f.icon + ' ' + f.title + '\n';
      });
      return out + '\n💡 اكتب اسم الإطار لمعرفة تفاصيله';
    }
    if(lower.indexOf('دول') > -1 || lower.indexOf('countries') > -1){
      var countries = getCountries();
      var cKeys = Object.keys(countries);
      var out = '🌍 **الدول المتوفرة (' + cKeys.length + '):**\n\n';
      cKeys.forEach(function(k){
        var c = countries[k];
        out += c.flag + ' ' + c.name + ' (ESG: ' + c.esgScore + ' · SDG: ' + c.sdgIndex + ')\n';
      });
      return out + '\n💡 اكتب اسم دولة لتفاصيلها';
    }
    if(lower.indexOf('قطاع') > -1 || lower.indexOf('sectors') > -1){
      var sectors = getSectors();
      var sKeys = Object.keys(sectors);
      var out = '🏭 **القطاعات (' + sKeys.length + '):**\n\n';
      sKeys.forEach(function(k){
        var s = sectors[k];
        out += s.icon + ' ' + s.name + '\n';
      });
      return out;
    }
    if(lower.indexOf('رابط') > -1 || lower.indexOf('بوابه') > -1){
      return '🔗 **روابط مهمة:**\n\n' +
        '🇶🇦 • وزارة التجارة: moci.gov.qa\n' +
        '💰 • QFC: qfc.qa\n' +
        '🎓 • رؤية قطر: qa2030.com\n\n' +
        '💡 استخدم قسم "الدول والأطر" للمزيد';
    }
    return null;
  }

  /* ============ 7. نصائح ============ */
  function answerTips(lower){
    var tips = window.TIPS || [];
    var quotes = window.QUOTES || [];
    if(lower.indexOf('نصيحه') > -1 || lower.indexOf('نصائح') > -1 || lower.indexOf('نصيح') > -1){
      if(!tips.length) return '💡 ركّز على مشكلة واحدة وحلّها بامتياز.';
      return tips[Math.floor(Math.random() * tips.length)];
    }
    if(lower.indexOf('اقتباس') > -1 || lower.indexOf('حكمه') > -1){
      if(!quotes.length) return '✨ "لا تنتظر الفرصة، اصنعها."';
      var q = quotes[Math.floor(Math.random() * quotes.length)];
      return '✨ **"' + q.t + '"**\n— ' + q.a;
    }
    if(lower.indexOf('محبط') > -1 || lower.indexOf('تعبان') > -1){
      if(quotes.length){
        var q2 = quotes[Math.floor(Math.random() * quotes.length)];
        return '💪 **لا تيأس!**\n\n✨ "' + q2.t + '"\n— ' + q2.a;
      }
      return '💪 استمر! كل مشروع ناجح يمر بلحظات صعبة.';
    }
    return null;
  }

  /* ============ 8. بحث عام ============ */
  function generalSearch(raw){
    if(!raw || raw.length < 3) return null;
    var sp = getSpace();
    var q = raw.toLowerCase();
    // بحث في المشاريع
    var mp = (sp.projects || []).find(function(p){ return p.name && p.name.toLowerCase().indexOf(q) > -1; });
    if(mp) return '💼 **وجدته!**\n\n📌 ' + mp.name;
    // بحث في الأفكار
    var mi = (sp.ideas || []).find(function(i){ return i.name && i.name.toLowerCase().indexOf(q) > -1; });
    if(mi) return '💡 **وجدتها!**\n\n📌 ' + mi.name;
    return null;
  }

  /* ============ Bind Events ============ */
  function bindAIEvents(){
    var aiFab = document.getElementById('aiFab');
    var aiClose = document.getElementById('aiClose');
    var aiSend = document.getElementById('aiSend');
    var aiInput = document.getElementById('aiInput');

    if(aiFab && !aiFab._aiBound){
      aiFab.addEventListener('click', toggleAI);
      aiFab._aiBound = true;
    }
    if(aiClose && !aiClose._aiBound){
      aiClose.addEventListener('click', toggleAI);
      aiClose._aiBound = true;
    }
    if(aiSend && !aiSend._aiBound){
      aiSend.addEventListener('click', sendAI);
      aiSend._aiBound = true;
    }
    if(aiInput && !aiInput._aiBound){
      aiInput.addEventListener('keydown', function(e){
        if(e.key === 'Enter'){ e.preventDefault(); sendAI(); }
      });
      aiInput._aiBound = true;
    }
  }

  /* ============ Exports ============ */
  window.toggleAI = toggleAI;
  window.initAI = initAI;
  window.addAIMessage = addAIMessage;
  window.sendAI = sendAI;
  window.aiRespond = aiRespond;
  window.bindAIEvents = bindAIEvents;

  /* ============ Auto-bind ============ */
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(bindAIEvents, 300); });
  } else {
    setTimeout(bindAIEvents, 300);
  }

  console.log('🤖 AI Advisor loaded');
})();
