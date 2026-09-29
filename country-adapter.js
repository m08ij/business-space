/* ============================================================
   🌍 country-adapter.js — مُكيّف الدولة
   يعرض مؤشرات الدول ويقترح أطر مناسبة
   ============================================================ */
(function(){
  'use strict';

  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function renderCountries(){
    var el = document.getElementById('countriesGrid');
    if(!el) return;
    var countries = window.COUNTRIES_DB || {};
    var html = '';
    Object.keys(countries).forEach(function(k){
      var c = countries[k];
      html += '<div class="card" data-country-card="' + k + '">' +
        '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">' +
          '<div style="font-size:2rem">' + c.flag + '</div>' +
          '<div style="flex:1">' +
            '<div style="font-weight:800;font-size:1rem">' + esc(c.name) + '</div>' +
            '<div style="font-size:.72rem;color:var(--muted2)">' + esc(c.nameEn) + ' · ' + c.currency + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">' +
          '<div style="background:var(--bg2);padding:8px;border-radius:8px;text-align:center">' +
            '<div style="font-size:.65rem;color:var(--muted)">ESG</div>' +
            '<div style="font-size:1rem;font-weight:800;color:var(--cyan)">' + c.esgScore + '</div>' +
            '<div style="font-size:.6rem;color:var(--muted2)">#' + c.esgRank + '</div>' +
          '</div>' +
          '<div style="background:var(--bg2);padding:8px;border-radius:8px;text-align:center">' +
            '<div style="font-size:.65rem;color:var(--muted)">SDG Index</div>' +
            '<div style="font-size:1rem;font-weight:800;color:var(--green)">' + c.sdgIndex + '</div>' +
            '<div style="font-size:.6rem;color:var(--muted2)">#' + c.sdgRank + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="font-size:.74rem;color:var(--muted);line-height:1.6;margin-bottom:8px">' +
          '<b>🎯 الرؤية:</b> ' + esc(c.vision) +
        '</div>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">';
      c.sdgPriorities.forEach(function(sdgNum){
        var sdg = window.SDG_DB[sdgNum];
        if(!sdg) return;
        html += '<span style="font-size:.65rem;padding:2px 7px;border-radius:6px;background:' + sdg.color + '20;color:' + sdg.color + ';font-weight:700">' + sdg.icon + ' SDG ' + sdgNum + '</span>';
      });
      html += '</div>' +
        '<button class="btn btn-sm" data-country-view="' + k + '" style="width:100%">📋 التفاصيل الكاملة</button>' +
      '</div>';
    });
    el.innerHTML = html;

    el.querySelectorAll('[data-country-view]').forEach(function(b){
      b.addEventListener('click', function(){ viewCountry(b.dataset.countryView); });
    });
  }

  function viewCountry(code){
    var c = window.COUNTRIES_DB[code];
    if(!c) return;

    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.innerHTML = '<div class="modal" style="max-width:600px">' +
      '<h3>' + c.flag + ' ' + esc(c.name) + ' — ' + esc(c.nameEn) + '</h3>' +
      '<div style="display:grid;gap:12px;margin-top:16px">' +
        '<div style="padding:12px;background:var(--bg2);border-radius:10px">' +
          '<div style="font-weight:700;color:var(--cyan);margin-bottom:6px">📊 المؤشرات</div>' +
          '<div style="font-size:.85rem;line-height:1.8">' +
            'ESG Score: <b>' + c.esgScore + '</b> (#' + c.esgRank + ')<br>' +
            'SDG Index: <b>' + c.sdgIndex + '</b> (#' + c.sdgRank + ')' +
          '</div>' +
        '</div>' +
        '<div style="padding:12px;background:var(--bg2);border-radius:10px">' +
          '<div style="font-weight:700;color:var(--cyan);margin-bottom:6px">🏭 القطاعات الرئيسية</div>' +
          '<div style="font-size:.85rem;line-height:1.8">' + c.keySectors.map(function(s){return '• '+s;}).join('<br>') + '</div>' +
        '</div>' +
        '<div style="padding:12px;background:var(--bg2);border-radius:10px">' +
          '<div style="font-weight:700;color:var(--cyan);margin-bottom:6px">♻️ تركيز الاستدامة</div>' +
          '<div style="font-size:.85rem;line-height:1.8">' + c.sustainabilityFocus.map(function(s){return '• '+s;}).join('<br>') + '</div>' +
        '</div>' +
        '<div style="padding:12px;background:var(--bg2);border-radius:10px">' +
          '<div style="font-weight:700;color:var(--cyan);margin-bottom:6px">🎁 الحوافز</div>' +
          '<div style="font-size:.85rem;line-height:1.8">' + c.incentives.map(function(s){return '• '+s;}).join('<br>') + '</div>' +
        '</div>' +
        '<div style="padding:12px;background:var(--bg2);border-radius:10px">' +
          '<div style="font-weight:700;color:var(--cyan);margin-bottom:6px">💼 ثقافة العمل</div>' +
          '<div style="font-size:.85rem;line-height:1.7">' + esc(c.businessCulture) + '</div>' +
        '</div>' +
        '<div style="padding:12px;background:var(--bg2);border-radius:10px">' +
          '<div style="font-weight:700;color:var(--cyan);margin-bottom:6px">⚖️ ملاحظات قانونية</div>' +
          '<div style="font-size:.85rem;line-height:1.7">' + esc(c.legalNotes) + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="modal-actions">' +
        '<button class="btn btn-sm btn-ghost" id="countryClose">إغلاق</button>' +
        '<button class="btn btn-sm" id="countrySetDefault">🎯 اجعله دولتي</button>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);
    bd.querySelector('#countryClose').onclick = function(){ bd.remove(); };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
    bd.querySelector('#countrySetDefault').onclick = function(){
      if(window.space){
        if(!window.space.profile) window.space.profile = {};
        window.space.profile.country = code;
        if(window.saveSpace) window.saveSpace();
        toast('✓ تم تعيين ' + c.name + ' كدولتك', 'success');
        bd.remove();
      }
    };
  }

  /* ============ renderFrameworks ============ */
  function renderFrameworks(){
    var el = document.getElementById('frameworksGrid');
    if(!el) return;
    var frameworks = window.FRAMEWORKS_DB || {};
    var categories = window.FRAMEWORK_CATEGORIES || {};
    var html = '';
    Object.keys(categories).forEach(function(catKey){
      var cat = categories[catKey];
      var items = Object.keys(frameworks).filter(function(k){ return frameworks[k].t === catKey; });
      if(!items.length) return;
      html += '<div style="margin-bottom:20px">' +
        '<div style="font-weight:800;color:' + cat.color + ';font-size:.9rem;margin-bottom:10px;padding:6px 12px;background:var(--grad-soft);border-radius:10px;display:inline-block">' + cat.icon + ' ' + cat.name + ' (' + items.length + ')</div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px">';
      items.forEach(function(name){
        var f = frameworks[name];
        html += '<div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:14px">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px">' +
            '<div style="font-weight:800;font-size:.9rem">' + f.icon + ' ' + esc(f.title) + '</div>' +
            '<span style="font-size:.65rem;padding:2px 7px;border-radius:6px;background:' + cat.color + '20;color:' + cat.color + ';font-weight:700;white-space:nowrap">' + f.code + '</span>' +
          '</div>' +
          '<div style="font-size:.8rem;color:var(--muted);line-height:1.6;margin-bottom:8px">' + esc(f.desc) + '</div>' +
          (f.when ? '<div style="font-size:.7rem;color:var(--muted2)">⏰ ' + esc(f.when) + '</div>' : '') +
          '<div style="font-size:.68rem;color:var(--muted2);margin-top:6px;border-top:1px solid var(--border);padding-top:6px">📚 ' + esc(f.source) + '</div>' +
        '</div>';
      });
      html += '</div></div>';
    });
    el.innerHTML = html;
  }

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

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('🌍 Country Adapter loaded');
})();