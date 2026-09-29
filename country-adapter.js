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