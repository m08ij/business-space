/* ============================================================
   🌍 country-adapter.js — الدول والأطر (FIXED v2 — i18n)
   ✅ كل النصوص تستخدم tr()
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
      '<button class="btn" id="caAddCountry">' + tr('ca_add_country') + '</button>' +
      '<span style="color:var(--muted);font-size:.82rem">' + tr('ca_countries_count', {n: keys.length}) + '</span>' +
    '</div>';
    
    keys.forEach(function(k){
      var c = countries[k];
      var sdgTags = (c.sdgPriorities || []).map(function(sdgNum){
        var sdg = (window.SDG_DB || {})[sdgNum];
        if(!sdg) return '';
        return '<span style="font-size:.65rem;padding:2px 7px;border-radius:6px;background:' + sdg.color + '20;color:' + sdg.color + ';font-weight:700">' + sdg.icon + ' SDG ' + sdgNum + '</span>';
      }).join('');
      
      var actions = c._custom 
        ? '<button class="btn btn-sm btn-ghost" data-country-edit="' + k + '" title="' + tr('ca_edit') + '">✏️</button>' +
          '<button class="btn btn-sm btn-danger" data-country-del="' + k + '" title="' + tr('ca_delete') + '">🗑</button>'
        : '';
      
      html += '<div class="card" data-country-card="' + k + '">' +
        '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">' +
          '<div style="font-size:2rem">' + (c.flag || '🌍') + '</div>' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-weight:800;font-size:1rem">' + esc(c.name || '') + '</div>' +
            '<div style="font-size:.72rem;color:var(--muted2)">' + esc(c.nameEn || '') + ' · ' + esc(c.currency || '') + '</div>' +
          '</div>' +
          (c._custom ? '<span class="badge" style="font-size:.6rem">' + tr('ca_custom_badge') + '</span>' : '') +
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
          '<b>' + tr('ca_vision_label') + ':</b> ' + esc(c.vision) + '</div>' : '') +
        (sdgTags ? '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">' + sdgTags + '</div>' : '') +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
          '<button class="btn btn-sm" data-country-view="' + k + '" style="flex:1">' + tr('ca_full_details') + '</button>' +
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
        section(tr('ca_indicators'), 'ESG Score: <b>' + (c.esgScore || '—') + '</b> (' + (c.esgRank ? '#' + c.esgRank : '—') + ')<br>' +
                 'SDG Index: <b>' + (c.sdgIndex || '—') + '</b> (' + (c.sdgRank ? '#' + c.sdgRank : '—') + ')') +
        section(tr('ca_key_sectors'), (c.keySectors || []).map(function(s){ return '• ' + esc(s); }).join('<br>')) +
        section(tr('ca_sustain_focus'), (c.sustainabilityFocus || []).map(function(s){ return '• ' + esc(s); }).join('<br>')) +
        section(tr('ca_incentives'), (c.incentives || []).map(function(s){ return '• ' + esc(s); }).join('<br>')) +
        section(tr('ca_biz_culture'), esc(c.businessCulture || '')) +
        section(tr('ca_legal_notes'), esc(c.legalNotes || '')) +
      '</div>' +
      '<div class="modal-actions">' +
        '<button class="btn btn-sm btn-ghost" id="countryClose">' + tr('ca_close') + '</button>' +
        '<button class="btn btn-sm btn-ghost" id="countryEdit">' + tr('ca_edit') + '</button>' +
        '<button class="btn btn-sm" id="countrySetDefault">' + tr('ca_set_default') + '</button>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);
    
    bd.querySelector('#countryClose').onclick = function(){ bd.remove(); };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
    bd.querySelector('#countrySetDefault').onclick = function(){
      if(!window.space.profile) window.space.profile = {};
      window.space.profile.country = code;
      saveSpace();
      toast('✓ ' + c.name, 'success');
      bd.remove();
    };
    bd.querySelector('#countryEdit').onclick = function(){ bd.remove(); editCountry(code); };
  }

  /* ==================== ADD/EDIT COUNTRY ==================== */
  function countryFields(){
    return [
      {key:'flag', label: tr('ca_flag_label'), placeholder:'🌍'},
      {key:'name', label: tr('ca_name_ar_label')},
      {key:'nameEn', label: tr('ca_name_en_label')},
      {key:'currency', label: tr('ca_currency_label'), placeholder:'QAR'},
      {key:'esgScore', label:'ESG Score', type:'number'},
      {key:'sdgIndex', label:'SDG Index', type:'number'},
      {key:'vision', label: tr('ca_vision_label'), type:'textarea'},
      {key:'keySectors', label: tr('ca_sectors_label')},
      {key:'sustainabilityFocus', label: tr('ca_sustain_label')},
      {key:'incentives', label: tr('ca_incentives_label')},
      {key:'businessCulture', label: tr('ca_culture_label'), type:'textarea'},
      {key:'legalNotes', label: tr('ca_legal_label'), type:'textarea'}
    ];
  }

  function addCountry(){
    window.showModal(tr('ca_add_country'), countryFields(), {
      flag:'🌍', name:'', nameEn:'', currency:'', esgScore:'', sdgIndex:'',
      vision:'', keySectors:'', sustainabilityFocus:'', incentives:'',
      businessCulture:'', legalNotes:''
    }, function(data){
      if(!data.name) return toast(tr('ca_enter_name'), 'warn');
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
      toast(tr('ca_added'), 'success');
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
    
    window.showModal(tr('ca_edit_title') + ' ' + (c.name || ''), countryFields(), prefill, function(data){
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
      toast(tr('ca_updated'), 'success');
    });
  }

  function deleteCountry(code){
    window.customConfirm(tr('ca_delete_confirm'), function(){
      window.space.customCountries = (window.space.customCountries || []).filter(function(x){ return x.code !== code; });
      saveSpace();
      renderCountries();
      toast(tr('ca_deleted'), 'success');
    });
  }

  /* ==================== RENDER FRAMEWORKS ==================== */
  function renderFrameworks(){
    var el = document.getElementById('frameworksGrid');
    if(!el) return;
    var frameworks = getAllFrameworks();
    var categories = window.FRAMEWORK_CATEGORIES || {};
    var lang = window.i18n ? window.i18n.getLang() : 'ar';
    
    var html = '';
    
    html += '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:16px">' +
      '<button class="btn" id="caAddFramework">' + tr('ca_add_framework') + '</button>' +
      '<span style="color:var(--muted);font-size:.82rem">' + tr('ca_frameworks_count', {n: Object.keys(frameworks).length}) + '</span>' +
    '</div>';
    
    Object.keys(categories).forEach(function(catKey){
      var cat = categories[catKey];
      var catName = (lang === 'en' && cat.nameEn) ? cat.nameEn : cat.name;
      var items = Object.keys(frameworks).filter(function(k){ 
        return (frameworks[k].t || frameworks[k].type) === catKey; 
      });
      if(!items.length) return;
      
      html += '<div style="margin-bottom:20px">' +
        '<div style="font-weight:800;color:' + cat.color + ';font-size:.9rem;margin-bottom:10px;padding:6px 12px;background:var(--grad-soft);border-radius:10px;display:inline-block">' + cat.icon + ' ' + catName + ' (' + items.length + ')</div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px">';
      
      items.forEach(function(name){
        var f = frameworks[name];
        var actions = f._custom
          ? '<button class="btn btn-sm btn-ghost" data-fw-edit="' + name + '">✏️</button>' +
            '<button class="btn btn-sm btn-danger" data-fw-del="' + name + '">🗑</button>'
          : '';
        
        var fTitle = (lang === 'en' && f.titleEn) ? f.titleEn : (f.title || name);
        var fDesc = (lang === 'en' && f.descEn) ? f.descEn : (f.desc || '');
        
        html += '<div class="card" style="cursor:pointer;padding:14px" data-fw-view="' + name + '">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px">' +
            '<div style="font-weight:800;font-size:.9rem">' + (f.icon || '📋') + ' ' + esc(fTitle) + '</div>' +
            '<span style="font-size:.65rem;padding:2px 7px;border-radius:6px;background:' + cat.color + '20;color:' + cat.color + ';font-weight:700;white-space:nowrap">' + (f.code || '') + '</span>' +
          '</div>' +
          '<div style="font-size:.8rem;color:var(--muted);line-height:1.6;margin-bottom:8px">' + esc(fDesc) + '</div>' +
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
    var cat = (window.FRAMEWORK_CATEGORIES || {})[f.t || f.type] || {name: f.t || '—', nameEn: f.t || '—', icon: '📋', color: 'var(--muted)'};
    var lang = window.i18n ? window.i18n.getLang() : 'ar';
    var catName = (lang === 'en' && cat.nameEn) ? cat.nameEn : cat.name;
    var fTitle = (lang === 'en' && f.titleEn) ? f.titleEn : (f.title || key);

    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.innerHTML = '<div class="modal" style="max-width:640px">' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">' +
        '<h3 style="margin:0">' + (f.icon || '📋') + ' ' + esc(fTitle) + '</h3>' +
        '<span class="badge" style="background:' + cat.color + '20;color:' + cat.color + '">' + (f.code || '') + '</span>' +
      '</div>' +
      (f.titleEn && lang !== 'en' ? '<div style="font-size:.82rem;color:var(--muted2);margin-bottom:12px">' + esc(f.titleEn) + '</div>' : '') +
      '<div style="display:grid;gap:12px;margin-top:12px">' +
        section('📝 ' + tr('ca_desc_label'), esc(f.desc || '')) +
        (f.descEn && lang !== 'en' ? section('📝 ' + tr('ca_desc_label') + ' (EN)', esc(f.descEn)) : '') +
        (f.when ? section('⏰ ' + tr('ca_when_label'), esc(f.when)) : '') +
        (f.steps && f.steps.length ? section('📋 ' + tr('ca_steps_label'), f.steps.map(function(s){ return '• ' + esc(s); }).join('<br>')) : '') +
        (f.outputs && f.outputs.length ? section('🎯 ' + tr('ca_outputs_label'), f.outputs.map(function(s){ return '• ' + esc(s); }).join('<br>')) : '') +
        (f.source ? section('📚 ' + tr('ca_source_label'), esc(f.source)) : '') +
        '<div style="padding:10px;background:var(--grad-soft);border-radius:10px;font-size:.78rem">' +
          '<b>' + tr('ca_classification') + ':</b> ' + cat.icon + ' ' + catName +
        '</div>' +
      '</div>' +
      '<div class="modal-actions">' +
        '<button class="btn btn-sm btn-ghost" id="fwClose">' + tr('ca_close') + '</button>' +
        '<button class="btn btn-sm" id="fwEdit">' + tr('ca_edit') + '</button>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);
    bd.querySelector('#fwClose').onclick = function(){ bd.remove(); };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
    bd.querySelector('#fwEdit').onclick = function(){ bd.remove(); editFramework(key); };
  }

  /* ==================== ADD/EDIT FRAMEWORK ==================== */
  function frameworkFields(){
    var lang = window.i18n ? window.i18n.getLang() : 'ar';
    var catOpts = Object.keys(window.FRAMEWORK_CATEGORIES || {}).map(function(k){
      var c = window.FRAMEWORK_CATEGORIES[k];
      var name = (lang === 'en' && c.nameEn) ? c.nameEn : c.name;
      return { v: k, l: c.icon + ' ' + name };
    });
    return [
      {key:'icon', label: tr('ca_icon_label'), placeholder:'🎯'},
      {key:'title', label: tr('ca_title_ar_label')},
      {key:'titleEn', label: tr('ca_title_en_label')},
      {key:'code', label: tr('ca_code_label'), placeholder:'CUS-001'},
      {key:'t', label: tr('ca_category_label'), type:'select', options: catOpts},
      {key:'desc', label: tr('ca_desc_label'), type:'textarea'},
      {key:'descEn', label: tr('ca_desc_label') + ' (EN)', type:'textarea'},
      {key:'when', label: tr('ca_when_label'), type:'textarea'},
      {key:'steps', label: tr('ca_steps_label'), type:'textarea'},
      {key:'source', label: tr('ca_source_label')}
    ];
  }

  function addFramework(){
    window.showModal(tr('ca_add_framework'), frameworkFields(), {
      icon:'📋', title:'', titleEn:'', code:'', t:'strategic', 
      desc:'', descEn:'', when:'', steps:'', source:''
    }, function(data){
      if(!data.title) return toast(tr('ca_enter_fw_title'), 'warn');
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
      toast(tr('ca_fw_added'), 'success');
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
    
    window.showModal(tr('ca_edit_title') + ' ' + (f.title || key), frameworkFields(), prefill, function(data){
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
      toast(tr('ca_fw_updated'), 'success');
    });
  }

  function deleteFramework(key){
    window.customConfirm(tr('ca_fw_delete_confirm'), function(){
      window.space.customFrameworks = (window.space.customFrameworks || []).filter(function(x){ return x.key !== key; });
      saveSpace();
      renderFrameworks();
      toast(tr('ca_fw_deleted'), 'success');
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
  
  console.log('🌍 Country Adapter CRUD loaded (FIXED v2 — i18n)');
})();