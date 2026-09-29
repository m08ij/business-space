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
    ['IL','Israel','إسرائيل'],
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