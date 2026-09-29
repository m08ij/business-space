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
		'<div class="cls-idea-actions" style="display:flex;gap:6px;flex-wrap:wrap">' +
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
  if(typeof window.cascadeDeleteIdea === 'function'){
    window.cascadeDeleteIdea(id);
    return;
  }
  // fallback: حذف الفكرة فقط
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