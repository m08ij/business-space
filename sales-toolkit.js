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
    var sp = getSpace();
    if(!sp.salesPipeline) sp.salesPipeline = [];

    // إحصائيات
    var stats = {total:0, value:0, won:0, wonValue:0};
    sp.salesPipeline.forEach(function(d){
      stats.total++;
      stats.value += parseFloat(d.value) || 0;
      if(d.stage === 'won'){ stats.won++; stats.wonValue += parseFloat(d.value) || 0; }
    });

    var html = '<div class="grid grid-4" style="margin-bottom:16px">' +
      '<div class="stat"><div class="ic">📊</div><div><div class="v">' + stats.total + '</div><div class="l">فرصة</div></div></div>' +
      '<div class="stat"><div class="ic">💰</div><div><div class="v">' + stats.value.toFixed(0) + '</div><div class="l">قيمة إجمالية</div></div></div>' +
      '<div class="stat"><div class="ic">🎉</div><div><div class="v">' + stats.won + '</div><div class="l">صفقة رابحة</div></div></div>' +
      '<div class="stat"><div class="ic">📈</div><div><div class="v">' + stats.wonValue.toFixed(0) + '</div><div class="l">إيراد محقق</div></div></div>' +
    '</div>';

    // فلاتر
    html += '<div class="controls">';
    var stages = window.PIPELINE_STAGES || {};
    html += '<button class="chip' + (currentFilter === 'all' ? ' active' : '') + '" data-sp-filter="all">الكل</button>';
    Object.keys(stages).forEach(function(k){
      var s = stages[k];
      var count = sp.salesPipeline.filter(function(d){ return d.stage === k; }).length;
      html += '<button class="chip' + (currentFilter === k ? ' active' : '') + '" data-sp-filter="' + k + '">' + s.icon + ' ' + s.name + ' (' + count + ')</button>';
    });
    html += '</div>';

    // القائمة
    var filtered = currentFilter === 'all' ? sp.salesPipeline : sp.salesPipeline.filter(function(d){ return d.stage === currentFilter; });
    if(!filtered.length){
      html += '<div class="empty"><div class="ic">💼</div><p>لا توجد فرص</p><p class="sub">اضغط "+ فرصة جديدة"</p></div>';
    } else {
      filtered.forEach(function(d){
        var stage = stages[d.stage] || {name:'—', icon:'❓', color:'var(--muted)'};
        html += '<div class="card" style="margin-bottom:10px">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">' +
            '<div style="flex:1;min-width:0">' +
              '<div style="font-weight:800;font-size:.95rem">' + esc(d.client) + '</div>' +
              '<div style="font-size:.72rem;color:var(--muted2)">' + esc(d.project || '') + '</div>' +
            '</div>' +
            '<span style="font-size:.68rem;padding:3px 10px;border-radius:8px;background:' + stage.color + '20;color:' + stage.color + ';font-weight:700;white-space:nowrap">' + stage.icon + ' ' + stage.name + '</span>' +
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
  console.log('💼 Sales Toolkit loaded');
})();