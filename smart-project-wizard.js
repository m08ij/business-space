/* ============================================================
   🧙 smart-project-wizard.js v2 — معالج ذكي باستخدام KB
   6 خطوات + معاينة + مشاريع مشابهة + حفظ مسودة
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m, t||'info', d||2200); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
  function getSpace(){ return window.space || {}; }
  function getLang(){ return window.i18n ? window.i18n.getLang() : 'ar'; }
  function pick(obj, base){
    if(getLang() === 'en' && obj[base+'En']) return obj[base+'En'];
    return obj[base] || '';
  }
  function KB(){ return window.PROJECT_KB || {}; }

  var TOTAL_STEPS = 6;
  var state = null;

  /* ============ مسودة ============ */
  function saveDraft(){
    if(!state) return;
    try{ localStorage.setItem('bd_spw_draft', JSON.stringify(state)); }catch(e){}
  }
  function loadDraft(){
    try{
      var d = JSON.parse(localStorage.getItem('bd_spw_draft') || 'null');
      if(d && d.data && d.savedAt && (Date.now() - d.savedAt < 7 * 24 * 3600 * 1000)){
        return d;
      }
    }catch(e){}
    return null;
  }
  function clearDraft(){
    try{ localStorage.removeItem('bd_spw_draft'); }catch(e){}
  }

  /* ============ الحالة ============ */
  function newState(){
    var sp = getSpace();
    return {
      step: 0,
      data: {
        name: '',
        type: 'startup',
        sector: 'tech',
        country: (sp.profile && sp.profile.country) || 'QA',
        description: '',
        problem: '',
        solution: '',
        sdg: [],
        budget: 'medium',
        timeline: 'medium',
        teamSize: 'small',
        // Type-specific
        stage: 'idea',
        market: '',
        beneficiaries: '',
        impactGoal: '',
        mission: '',
        department: '',
        owner: '',
        location: ''
      },
      savedAt: Date.now()
    };
  }

  /* ============ الرسم الرئيسي ============ */
  function showModal(){
    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.id = 'spwBackdrop';
    bd.innerHTML = '<div class="modal" id="spwModal" style="max-width:600px;padding:0;overflow:hidden">' +
      '<div style="padding:16px 22px;background:linear-gradient(135deg,rgba(167,139,250,.15),rgba(244,114,182,.15));border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px">' +
        '<div style="font-size:1.8rem">🧙</div>' +
        '<div style="flex:1">' +
          '<div style="font-weight:800;font-size:1rem">' + tr('spw_title') + '</div>' +
          '<div style="font-size:.7rem;color:var(--muted)" id="spwSub">' + tr('spw_sub') + '</div>' +
        '</div>' +
        '<button class="btn btn-sm btn-ghost" id="spwClose" title="' + tr('close') + '">✕</button>' +
      '</div>' +
      '<div style="padding:14px 22px 0">' +
        '<div style="display:flex;justify-content:space-between;font-size:.66rem;color:var(--muted2);margin-bottom:6px" id="spwStepDots"></div>' +
        '<div style="height:5px;background:var(--bg2);border-radius:5px;overflow:hidden">' +
          '<div id="spwProgress" style="height:100%;width:0%;background:var(--grad);transition:width .4s"></div>' +
        '</div>' +
      '</div>' +
      '<div id="spwBody" style="padding:18px 22px 22px;min-height:260px"></div>' +
      '<div style="padding:12px 22px;border-top:1px solid var(--border);display:flex;justify-content:space-between;gap:8px;background:var(--card2)">' +
        '<button class="btn btn-sm btn-ghost" id="spwBack">← ' + tr('spw_back') + '</button>' +
        '<div style="display:flex;gap:6px">' +
          '<button class="btn btn-sm btn-ghost" id="spwSkip">' + tr('spw_skip') + '</button>' +
          '<button class="btn btn-sm" id="spwNext">' + tr('spw_next') + ' →</button>' +
        '</div>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);

    bd.querySelector('#spwClose').onclick = closeWizard;
    bd.querySelector('#spwBack').onclick = goBack;
    bd.querySelector('#spwNext').onclick = goNext;
    bd.querySelector('#spwSkip').onclick = goSkip;
    bd.onclick = function(e){ if(e.target === bd) closeWizard(); };

    renderStep();
  }

  function closeWizard(){
    if(state){
      state.savedAt = Date.now();
      saveDraft();
    }
    var bd = document.getElementById('spwBackdrop');
    if(bd) bd.remove();
  }

  function updateProgress(){
    var pct = Math.round(((state.step) / (TOTAL_STEPS - 1)) * 100);
    var prog = document.getElementById('spwProgress');
    if(prog) prog.style.width = pct + '%';

    var dots = document.getElementById('spwStepDots');
    if(dots){
      var html = '';
      for(var i = 0; i < TOTAL_STEPS; i++){
        var active = i === state.step;
        var done = i < state.step;
        html += '<span style="color:' + (active ? 'var(--cyan)' : done ? 'var(--green)' : 'var(--muted2)') + ';font-weight:' + (active ? '800' : '600') + '">' +
          (done ? '✓' : (i + 1)) +
        '</span>';
      }
      dots.innerHTML = html;
    }
  }

  function goNext(){
    if(!validate()) return;
    if(state.step === TOTAL_STEPS - 1){
      finish();
      return;
    }
    state.step++;
    state.savedAt = Date.now();
    saveDraft();
    renderStep();
  }
  function goBack(){
    if(state.step === 0) return;
    state.step--;
    renderStep();
  }
  function goSkip(){
    if(state.step === TOTAL_STEPS - 1){
      finish();
      return;
    }
    state.step++;
    renderStep();
  }
  function validate(){
    var d = state.data;
    if(state.step === 0){
      if(!d.name.trim()){ toast(tr('spw_err_name'), 'warn'); return false; }
    }
    if(state.step === 2){
      if(!d.description.trim() && !d.problem.trim()){ toast(tr('spw_err_story'), 'warn'); return false; }
    }
    return true;
  }

  /* ============ الرسم لكل خطوة ============ */
  function renderStep(){
    updateProgress();
    var body = document.getElementById('spwBody');
    if(!body) return;
    var back = document.getElementById('spwBack');
    var next = document.getElementById('spwNext');
    if(back) back.style.visibility = state.step === 0 ? 'hidden' : 'visible';
    if(next) next.textContent = state.step === TOTAL_STEPS - 1 ? '✓ ' + tr('spw_finish') : tr('spw_next') + ' →';

    var steps = [step1, step2, step3, step4, step5, step6];
    body.innerHTML = steps[state.step]();
    var binders = [bind1, bind2, bind3, bind4, bind5, bind6];
    if(binders[state.step]) binders[state.step]();
    body.scrollTop = 0;
  }

  /* ============ خطوة 1: الأساسيات ============ */
  function step1(){
    var typeOpts = Object.keys(window.IDEA_TYPES || {}).map(function(k){
      var t = window.IDEA_TYPES[k];
      var sel = state.data.type === k;
      return '<button type="button" data-spw-type="' + k + '" style="padding:12px 8px;border-radius:11px;border:2px solid ' + (sel ? 'var(--cyan)' : 'var(--border)') + ';background:' + (sel ? 'var(--grad-soft)' : 'var(--bg2)') + ';color:' + (sel ? 'var(--cyan)' : 'var(--text)') + ';cursor:pointer;font-family:inherit;text-align:center;transition:.2s">' +
        '<div style="font-size:1.4rem">' + t.icon + '</div>' +
        '<div style="font-size:.72rem;font-weight:700;margin-top:3px">' + pick(t, 'name') + '</div>' +
      '</button>';
    }).join('');

    var sectorOpts = Object.keys(window.SECTORS_DB || {}).map(function(k){
      var s = window.SECTORS_DB[k];
      var sel = state.data.sector === k;
      return '<button type="button" data-spw-sector="' + k + '" style="padding:9px 6px;border-radius:10px;border:2px solid ' + (sel ? 'var(--cyan)' : 'var(--border)') + ';background:' + (sel ? 'var(--grad-soft)' : 'var(--bg2)') + ';color:' + (sel ? 'var(--cyan)' : 'var(--text)') + ';cursor:pointer;font-family:inherit;text-align:center;transition:.2s">' +
        '<div style="font-size:1.2rem">' + s.icon + '</div>' +
        '<div style="font-size:.68rem;font-weight:700;margin-top:2px">' + pick(s, 'name') + '</div>' +
      '</button>';
    }).join('');

    var countries = window.buildCountryOptions ? window.buildCountryOptions() : { featured: window.COUNTRIES_DB || {}, featuredCodes: [] };
    var codes = countries.featuredCodes.length ? countries.featuredCodes.slice(0, 10) : Object.keys(countries.featured).slice(0, 10);
    var countryBtns = codes.map(function(code){
      var c = countries.featured[code]; if(!c) return '';
      var sel = state.data.country === code;
      return '<button type="button" data-spw-country="' + code + '" style="padding:6px 11px;border-radius:9px;border:1px solid ' + (sel ? 'var(--cyan)' : 'var(--border)') + ';background:' + (sel ? 'var(--grad-soft)' : 'var(--card)') + ';color:' + (sel ? 'var(--cyan)' : 'var(--text)') + ';cursor:pointer;font-family:inherit;font-size:.76rem;font-weight:600">' + (c.flag||'') + ' ' + esc(pick(c,'name')) + '</button>';
    }).join('');

    return '<div>' +
      '<h4 style="margin:0 0 4px;font-size:1rem">' + tr('spw_q1_name') + '</h4>' +
      '<p style="margin:0 0 10px;font-size:.76rem;color:var(--muted)">' + tr('spw_q1_hint') + '</p>' +
      '<input id="spwName" type="text" value="' + esc(state.data.name) + '" placeholder="' + tr('spw_q1_ph') + '" ' +
        'style="width:100%;background:var(--bg2);border:2px solid var(--border);color:var(--text);padding:12px;border-radius:10px;font-family:inherit;font-size:.95rem;outline:none;margin-bottom:14px" autofocus>' +

      '<h4 style="margin:0 0 8px;font-size:.9rem">' + tr('spw_q1_type') + '</h4>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(95px,1fr));gap:6px;margin-bottom:14px">' + typeOpts + '</div>' +

      '<h4 style="margin:0 0 8px;font-size:.9rem">' + tr('spw_q2_sector') + '</h4>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(80px,1fr));gap:6px;margin-bottom:14px">' + sectorOpts + '</div>' +

      '<h4 style="margin:0 0 8px;font-size:.9rem">' + tr('spw_q2_country') + '</h4>' +
      '<div style="display:flex;flex-wrap:wrap;gap:5px">' + countryBtns + '</div>' +
    '</div>';
  }

  function bind1(){
    var inp = document.getElementById('spwName');
    if(inp){
      inp.oninput = function(){ state.data.name = inp.value; };
      setTimeout(function(){ inp.focus(); }, 80);
      inp.onkeydown = function(e){ if(e.key === 'Enter') goNext(); };
    }
    document.querySelectorAll('[data-spw-type]').forEach(function(b){
      b.onclick = function(){ state.data.type = b.dataset.spwType; saveDraft(); renderStep(); };
    });
    document.querySelectorAll('[data-spw-sector]').forEach(function(b){
      b.onclick = function(){
        state.data.sector = b.dataset.spwSector;
        state.data.sdg = KB().suggestSDG ? KB().suggestSDG(state.data.sector) : [];
        saveDraft();
        renderStep();
      };
    });
    document.querySelectorAll('[data-spw-country]').forEach(function(b){
      b.onclick = function(){ state.data.country = b.dataset.spwCountry; saveDraft(); renderStep(); };
    });
  }

  /* ============ خطوة 2: القصة ============ */
  function step2(){
    var sectorName = pick((window.SECTORS_DB||{})[state.data.sector] || {}, 'name');
    return '<div>' +
      '<div style="padding:10px 12px;background:var(--grad-soft);border-radius:10px;font-size:.78rem;margin-bottom:14px">' +
        '💡 ' + tr('spw_q3_hint_sector', { sector: sectorName }) +
      '</div>' +
      '<label style="display:block;font-size:.8rem;font-weight:700;margin-bottom:5px">' + tr('spw_q3_desc') + '</label>' +
      '<textarea id="spwDesc" rows="3" placeholder="' + tr('spw_q3_desc_ph') + '" style="width:100%;background:var(--bg2);border:2px solid var(--border);color:var(--text);padding:11px;border-radius:10px;font-family:inherit;font-size:.85rem;outline:none;margin-bottom:12px;resize:vertical">' + esc(state.data.description) + '</textarea>' +

      '<label style="display:block;font-size:.8rem;font-weight:700;margin-bottom:5px">' + tr('spw_q3_problem') + '</label>' +
      '<textarea id="spwProblem" rows="3" placeholder="' + tr('spw_q3_problem_ph') + '" style="width:100%;background:var(--bg2);border:2px solid var(--border);color:var(--text);padding:11px;border-radius:10px;font-family:inherit;font-size:.85rem;outline:none;margin-bottom:12px;resize:vertical">' + esc(state.data.problem) + '</textarea>' +

      '<label style="display:block;font-size:.8rem;font-weight:700;margin-bottom:5px">' + tr('spw_q3_solution') + '</label>' +
      '<textarea id="spwSolution" rows="3" placeholder="' + tr('spw_q3_solution_ph') + '" style="width:100%;background:var(--bg2);border:2px solid var(--border);color:var(--text);padding:11px;border-radius:10px;font-family:inherit;font-size:.85rem;outline:none;resize:vertical">' + esc(state.data.solution) + '</textarea>' +
    '</div>';
  }
  function bind2(){
    var bind = function(id, key){
      var el = document.getElementById(id);
      if(el) el.oninput = function(){ state.data[key] = el.value; };
    };
    bind('spwDesc', 'description');
    bind('spwProblem', 'problem');
    bind('spwSolution', 'solution');
  }

  /* ============ خطوة 3: SDG ============ */
  function step3(){
    var suggested = KB().suggestSDG ? KB().suggestSDG(state.data.sector) : [];
    var sectorName = pick((window.SECTORS_DB||{})[state.data.sector] || {}, 'name');

    var grid = Object.keys(window.SDG_DB || {}).map(function(n){
      var sdg = window.SDG_DB[n];
      var sel = state.data.sdg.indexOf(parseInt(n)) > -1;
      var isSug = suggested.indexOf(parseInt(n)) > -1;
      return '<button type="button" data-spw-sdg="' + n + '" style="padding:8px 4px;border-radius:10px;border:2px solid ' + (sel ? sdg.color : 'var(--border)') + ';background:' + (sel ? sdg.color + '25' : 'var(--bg2)') + ';color:' + (sel ? sdg.color : 'var(--muted)') + ';cursor:pointer;font-family:inherit;font-weight:700;font-size:.66rem;text-align:center;transition:.2s;position:relative">' +
        (isSug && !sel ? '<span style="position:absolute;top:-4px;left:-4px;font-size:.7rem">⭐</span>' : '') +
        '<div style="font-size:1.1rem">' + sdg.icon + '</div>' +
        '<div>' + n + '</div>' +
      '</button>';
    }).join('');

    return '<div>' +
      '<h4 style="margin:0 0 4px;font-size:1rem">' + tr('spw_q4_sdg') + '</h4>' +
      '<p style="margin:0 0 10px;font-size:.76rem;color:var(--muted)">' + tr('spw_q4_sdg_hint') + '</p>' +
      '<div style="padding:9px 12px;background:linear-gradient(135deg,rgba(251,191,36,.12),rgba(34,211,238,.12));border-radius:10px;font-size:.76rem;margin-bottom:12px">' +
        '⭐ ' + tr('spw_q4_suggest', { sector: sectorName }) +
      '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(64px,1fr));gap:5px;margin-bottom:10px">' + grid + '</div>' +
      '<div style="text-align:center;font-size:.8rem;font-weight:700;color:var(--cyan)">' + tr('spw_q4_count', { n: state.data.sdg.length }) + '</div>' +
    '</div>';
  }
  function bind3(){
    document.querySelectorAll('[data-spw-sdg]').forEach(function(b){
      b.onclick = function(){
        var n = parseInt(b.dataset.spwSdg);
        var i = state.data.sdg.indexOf(n);
        if(i > -1) state.data.sdg.splice(i, 1);
        else state.data.sdg.push(n);
        saveDraft();
        renderStep();
      };
    });
  }

  /* ============ خطوة 4: الموارد ============ */
  function step4(){
    var budget = [
      {v:'small', i:'💧', l: tr('spw_q5_budget_small'), sub:'~10K'},
      {v:'medium', i:'💰', l: tr('spw_q5_budget_medium'), sub:'~75K'},
      {v:'large', i:'💎', l: tr('spw_q5_budget_large'), sub:'500K+'}
    ];
    var time = [
      {v:'short', i:'⚡', l: tr('spw_q5_time_short'), sub:'3 ' + tr('ms_days')},
      {v:'medium', i:'📅', l: tr('spw_q5_time_medium'), sub:'6 ' + tr('ms_days')},
      {v:'long', i:'🏔️', l: tr('spw_q5_time_long'), sub:'12 ' + tr('ms_days')}
    ];
    var team = [
      {v:'solo', i:'👤', l: tr('spw_q6_team_solo')},
      {v:'small', i:'👥', l: tr('spw_q6_team_small')},
      {v:'medium', i:'👨‍👩‍👦', l: tr('spw_q6_team_medium')},
      {v:'large', i:'🏢', l: tr('spw_q6_team_large')}
    ];

    var btn = function(arr, key, dataKey){
      return arr.map(function(x){
        var sel = state.data[dataKey] === x.v;
        return '<button type="button" data-spw-' + key + '="' + x.v + '" style="padding:11px 6px;border-radius:11px;border:2px solid ' + (sel ? 'var(--cyan)' : 'var(--border)') + ';background:' + (sel ? 'var(--grad-soft)' : 'var(--bg2)') + ';color:' + (sel ? 'var(--cyan)' : 'var(--text)') + ';cursor:pointer;font-family:inherit;text-align:center;transition:.2s">' +
          '<div style="font-size:1.3rem">' + x.i + '</div>' +
          '<div style="font-size:.72rem;font-weight:700;margin-top:3px">' + x.l + '</div>' +
          (x.sub ? '<div style="font-size:.6rem;color:var(--muted2);margin-top:1px">' + x.sub + '</div>' : '') +
        '</button>';
      }).join('');
    };

    return '<div>' +
      '<h4 style="margin:0 0 4px;font-size:1rem">' + tr('spw_q5_resources') + '</h4>' +
      '<p style="margin:0 0 12px;font-size:.76rem;color:var(--muted)">' + tr('spw_q5_resources_hint') + '</p>' +
      '<div style="font-weight:700;font-size:.85rem;margin-bottom:6px">💰 ' + tr('spw_q5_budget') + '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:16px">' + btn(budget, 'budget', 'budget') + '</div>' +
      '<div style="font-weight:700;font-size:.85rem;margin-bottom:6px">📅 ' + tr('spw_q5_timeline') + '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:16px">' + btn(time, 'timeline', 'timeline') + '</div>' +
      '<div style="font-weight:700;font-size:.85rem;margin-bottom:6px">👥 ' + tr('spw_q6_team') + '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px">' + btn(team, 'team', 'teamSize') + '</div>' +
    '</div>';
  }
  function bind4(){
    document.querySelectorAll('[data-spw-budget]').forEach(function(b){
      b.onclick = function(){ state.data.budget = b.dataset.spwBudget; saveDraft(); renderStep(); };
    });
    document.querySelectorAll('[data-spw-timeline]').forEach(function(b){
      b.onclick = function(){ state.data.timeline = b.dataset.spwTimeline; saveDraft(); renderStep(); };
    });
    document.querySelectorAll('[data-spw-team]').forEach(function(b){
      b.onclick = function(){ state.data.teamSize = b.dataset.spwTeam; saveDraft(); renderStep(); };
    });
  }

  /* ============ خطوة 5: أسئلة خاصة بالنوع ============ */
  function step5(){
    var typeKB = KB().getTypeKB ? KB().getTypeKB(state.data.type) : null;
    if(!typeKB) return '<div><p style="color:var(--muted);text-align:center;padding:20px">' + tr('spw_q5_skip') + '</p></div>';

    var extra = typeKB.extraQuestions || [];
    var html = '<div>' +
      '<h4 style="margin:0 0 4px;font-size:1rem">' + tr('spw_q5_extra') + '</h4>' +
      '<p style="margin:0 0 14px;font-size:.76rem;color:var(--muted)">' + tr('spw_q5_extra_hint') + '</p>';

    extra.forEach(function(q){
      html += '<label style="display:block;font-size:.82rem;font-weight:700;margin-bottom:5px">' + pick(q, 'ar') + '</label>';
      if(q.options){
        html += '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px">';
        q.options.forEach(function(o){
          var sel = state.data[q.key] === o.v;
          html += '<button type="button" data-spw-extra="' + q.key + ':' + o.v + '" style="padding:8px 14px;border-radius:10px;border:2px solid ' + (sel ? 'var(--cyan)' : 'var(--border)') + ';background:' + (sel ? 'var(--grad-soft)' : 'var(--bg2)') + ';color:' + (sel ? 'var(--cyan)' : 'var(--text)') + ';cursor:pointer;font-family:inherit;font-size:.82rem;font-weight:600">' + pick(o, 'ar') + '</button>';
        });
        html += '</div>';
      } else {
        html += '<input type="text" data-spw-extra-input="' + q.key + '" value="' + esc(state.data[q.key] || '') + '" placeholder="' + pick(q, 'ar') + '" style="width:100%;background:var(--bg2);border:2px solid var(--border);color:var(--text);padding:11px;border-radius:10px;font-family:inherit;font-size:.85rem;outline:none;margin-bottom:14px">';
      }
    });

    /* معلومات قانونية مفيدة */
    if(typeKB.legalStructure){
      html += '<div style="padding:10px 12px;background:var(--grad-soft);border-radius:10px;font-size:.76rem;margin-top:4px">' +
        '⚖️ ' + tr('spw_q5_legal') + ': <b>' + pick(typeKB.legalStructure, 'ar') + '</b>' +
      '</div>';
    }
    if(typeKB.fundingSources && typeKB.fundingSources.length){
      html += '<div style="padding:10px 12px;background:linear-gradient(135deg,rgba(52,211,153,.12),rgba(34,211,238,.12));border-radius:10px;font-size:.76rem;margin-top:8px">' +
        '💵 ' + tr('spw_q5_funding') + ': ' + typeKB.fundingSources.map(function(s){ return pick(s, 'ar'); }).join(' · ') +
      '</div>';
    }

    html += '</div>';
    return html;
  }
  function bind5(){
    document.querySelectorAll('[data-spw-extra]').forEach(function(b){
      b.onclick = function(){
        var parts = b.dataset.spwExtra.split(':');
        state.data[parts[0]] = parts[1];
        saveDraft();
        renderStep();
      };
    });
    document.querySelectorAll('[data-spw-extra-input]').forEach(function(inp){
      inp.oninput = function(){
        state.data[inp.dataset.spwExtraInput] = inp.value;
        saveDraft();
      };
    });
  }

  /* ============ خطوة 6: الملخص ============ */
  function step6(){
    var d = state.data;
    var type = (window.IDEA_TYPES||{})[d.type] || {icon:'💡'};
    var sector = (window.SECTORS_DB||{})[d.sector] || {icon:'📦'};
    var countries = window.getAllCountries ? window.getAllCountries() : (window.COUNTRIES_DB || {});
    var country = countries[d.country] || {flag:'🌍'};

    var msCount = d.timeline === 'short' ? 4 : d.timeline === 'long' ? 6 : 5;
    var risksCount = KB().getSectorKB ? (KB().getSectorKB(d.sector).risks || []).length : 3;
    var budgetCount = KB().getSectorKB ? Object.keys(KB().getSectorKB(d.sector).budget || {}).length : 5;

    /* مشاريع مشابهة */
    var similar = KB().findSimilar ? KB().findSimilar(d, getSpace().projects || []) : [];
    var similarHtml = '';
    if(similar.length){
      similarHtml = '<div style="padding:10px 12px;background:rgba(251,191,36,.1);border:1px dashed rgba(251,191,36,.4);border-radius:10px;font-size:.76rem;margin-bottom:12px">' +
        '💡 ' + tr('spw_q7_similar') + ':<br>' +
        similar.map(function(s){ return '• ' + esc(s.project.name) + ' (' + pick((window.SECTORS_DB||{})[s.project.sector]||{}, 'name') + ')'; }).join('<br>') +
      '</div>';
    }

    var sdgTags = d.sdg.map(function(n){
      var s = window.SDG_DB[n]; if(!s) return '';
      return '<span style="font-size:.66rem;padding:3px 7px;border-radius:6px;background:' + s.color + '20;color:' + s.color + ';font-weight:700">' + s.icon + ' ' + n + '</span>';
    }).join('');

    var auto = [
      '💡 ' + tr('spw_sum_idea'),
      '💼 ' + tr('spw_sum_project'),
      d.sdg.length ? '🎯 ' + tr('spw_sum_sdg', { n: d.sdg.length }) : '',
      '🗺️ ' + tr('spw_sum_milestones', { n: msCount }),
      '⚠️ ' + tr('spw_sum_risks', { n: risksCount }),
      '💰 ' + tr('spw_sum_budget', { n: budgetCount }),
      '✅ ' + tr('spw_sum_okrs')
    ].filter(Boolean);

    return '<div>' +
      '<h4 style="margin:0 0 4px;font-size:1rem">' + tr('spw_q7_summary') + '</h4>' +
      '<p style="margin:0 0 12px;font-size:.76rem;color:var(--muted)">' + tr('spw_q7_summary_hint') + '</p>' +

      similarHtml +

      '<div style="padding:12px;background:var(--bg2);border-radius:12px;margin-bottom:12px">' +
        '<div style="font-weight:800;font-size:.95rem">' + type.icon + ' ' + esc(d.name) + '</div>' +
        '<div style="font-size:.72rem;color:var(--muted2);margin-top:3px">' + (country.flag||'🌍') + ' ' + esc(pick(country,'name')) + ' · ' + sector.icon + ' ' + esc(pick(sector,'name')) + ' · ' + pick(type,'name') + '</div>' +
        (d.description ? '<div style="font-size:.78rem;color:var(--muted);margin-top:6px;line-height:1.5">' + esc(d.description.slice(0, 120)) + (d.description.length > 120 ? '...' : '') + '</div>' : '') +
        (sdgTags ? '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:8px">' + sdgTags + '</div>' : '') +
      '</div>' +

      '<div style="padding:12px;background:linear-gradient(135deg,rgba(34,211,238,.08),rgba(167,139,250,.08));border:1px dashed var(--glow);border-radius:12px">' +
        '<div style="font-weight:800;font-size:.82rem;color:var(--cyan);margin-bottom:6px">✨ ' + tr('spw_q7_will_create') + '</div>' +
        auto.map(function(t){ return '<div style="font-size:.78rem;padding:2px 0">' + t + '</div>'; }).join('') +
      '</div>' +
    '</div>';
  }
  function bind6(){ /* لا يحتاج binding */ }

  /* ============ الإنهاء ============ */
  function finish(){
    var d = state.data;
    var sp = getSpace();
    if(!sp) return;

    /* ضمان المصفوفات */
    ['ideas','projects','tasks','budget','stakeholders'].forEach(function(k){
      if(!Array.isArray(sp[k])) sp[k] = [];
    });

    var ideaId = uid();
    var projectId = uid();
    var today = new Date().toISOString().slice(0,10);

    /* 1) الفكرة */
    sp.ideas.push({
      id: ideaId,
      name: d.name,
      description: d.description,
      type: d.type,
      sector: d.sector,
      country: d.country,
      problem: d.problem,
      solution: d.solution,
      createdAt: new Date().toISOString(),
      sdgTargets: d.sdg.slice()
    });

    /* 2) المشروع — مع KB */
    var milestones = KB().suggestMilestones ? KB().suggestMilestones(d.sector, d.timeline, today) : [];
    var risks = KB().suggestRisks ? KB().suggestRisks(d.sector) : [];
    var okrs = KB().suggestOKRs ? KB().suggestOKRs(d.name) : [];
    var initialStage = (d.type === 'corporate' || d.type === 'ngo') ? 'design' : 'pre-project';

    var project = {
      id: projectId,
      name: d.name,
      description: d.description,
      sector: d.sector,
      country: d.country,
      stage: initialStage,
      ideaId: ideaId,
      createdAt: new Date().toISOString(),
      strategy: {
        swot: {
          strengths: d.solution ? [d.solution.slice(0, 80)] : [],
          weaknesses: [],
          opportunities: [],
          threats: []
        },
        pestel: {},
        okrs: okrs
      },
      impact: {
        sdg: d.sdg.slice(),
        p5: {},
        esg: { e: 50, s: 50, g: 50 }
      },
      milestones: milestones,
      risks: risks,
      tasks: []
    };
    sp.projects.push(project);

    /* 3) بنود الميزانية */
    var budgetItems = KB().suggestBudgetBreakdown ? KB().suggestBudgetBreakdown(d.sector, d.type, d.budget) : [];
    budgetItems.forEach(function(b){
      b.projectId = projectId;
      b.note = d.name;
      sp.budget.push(b);
    });

    /* 4) مهام أولية */
    var tasks = [
      { ar: 'تعريف الفريق والأدوار', en: 'Define team and roles' },
      { ar: 'إعداد خطة العمل التفصيلية', en: 'Prepare detailed work plan' },
      { ar: 'بدء التنفيذ', en: 'Start execution' }
    ];
    tasks.forEach(function(t, i){
      var due = new Date(); due.setDate(due.getDate() + 7 * (i+1));
      sp.tasks.push({
        id: uid(),
        title: pick(t, 'ar'),
        project: d.name,
        projectId: projectId,
        due: due.toISOString().slice(0,10),
        done: false
      });
    });
    /* 4.5) ✅ إنشاء أصحاب مصلحة مبدئيين من KB */
    if(window.PROJECT_KB && window.PROJECT_KB.getSectorKB){
      var teamKB = window.PROJECT_KB.getSectorKB(d.sector).team || [];
      teamKB.forEach(function(member){
        var name = (getLang() === 'en' && member.en) ? member.en : member.ar;
        sp.stakeholders.push({
          id: uid(),
          name: name,
          role: member.role || 'team',
          org: d.name,
          contact: '',
          projectId: projectId,
          project: d.name,
          createdAt: new Date().toISOString()
        });
      });
    }

    /* 5) حفظ */
    if(window.saveSpace) window.saveSpace();
    clearDraft();

    /* إغلاق */
    var bd = document.getElementById('spwBackdrop');
    if(bd) bd.remove();
    state = null;

    /* ملخص النجاح */
    showSuccess(d, project, { milestones: milestones.length, risks: risks.length, budget: budgetItems.length });
  }

  function showSuccess(d, project, counts){
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.innerHTML = '<div class="modal" style="max-width:540px;text-align:center">' +
      '<div style="font-size:3.5rem;margin:8px 0">🎉</div>' +
      '<h3 style="color:var(--cyan);margin:6px 0">' + tr('spw_success_title') + '</h3>' +
      '<p style="color:var(--muted);font-size:.85rem;margin-bottom:16px">' + esc(d.name) + '</p>' +

      '<div class="grid grid-4" style="gap:8px;margin-bottom:14px">' +
        '<div class="stat"><div class="ic">🎯</div><div><div class="v">' + d.sdg.length + '</div><div class="l">SDG</div></div></div>' +
        '<div class="stat"><div class="ic">🗺️</div><div><div class="v">' + counts.milestones + '</div><div class="l">' + tr('spw_success_milestones') + '</div></div></div>' +
        '<div class="stat"><div class="ic">⚠️</div><div><div class="v">' + counts.risks + '</div><div class="l">' + tr('spw_success_risks') + '</div></div></div>' +
        '<div class="stat"><div class="ic">💰</div><div><div class="v">' + counts.budget + '</div><div class="l">' + tr('spw_success_budget') + '</div></div></div>' +
      '</div>' +

      '<div style="padding:11px 14px;background:var(--grad-soft);border-radius:10px;font-size:.78rem;text-align:start;line-height:1.6;margin-bottom:16px">' +
        '💡 ' + tr('spw_success_hint') +
      '</div>' +

      '<div class="modal-actions" style="justify-content:center">' +
        '<button class="btn btn-ghost" id="spwDoneDash">📊 ' + tr('nav_dashboard') + '</button>' +
        '<button class="btn btn-ghost" id="spwDoneIdeas">💡 ' + tr('nav_ideas') + '</button>' +
        '<button class="btn" id="spwDoneRoadmap">🗺️ ' + tr('spw_open_project') + '</button>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);

    bd.querySelector('#spwDoneDash').onclick = function(){
      bd.remove(); if(window.switchTab) window.switchTab('dashboard');
    };
    bd.querySelector('#spwDoneIdeas').onclick = function(){
      bd.remove(); if(window.switchTab) window.switchTab('ideas');
    };
    bd.querySelector('#spwDoneRoadmap').onclick = function(){
      bd.remove(); if(window.switchTab) window.switchTab('roadmap');
    };
  }

  /* ============ البدء ============ */
  function startWizard(){
    var draft = loadDraft();
    if(draft && draft.data && draft.data.name){
      window.customConfirm(tr('spw_resume_draft') + '\n\n"' + draft.data.name + '"', function(){
        state = draft;
        state.savedAt = Date.now();
        showModal();
      });
      return;
    }
    state = newState();
    showModal();
  }

  /* ============ أزرار التثبيت ============ */
  function injectButtons(){
    /* زر في أفكاري */
    var ideasCtrl = document.querySelector('#ideas .controls');
    if(ideasCtrl && !document.getElementById('spwOpenBtn')){
      var btn = document.createElement('button');
      btn.className = 'btn';
      btn.id = 'spwOpenBtn';
      btn.style.background = 'linear-gradient(135deg,#a78bfa,#f472b6)';
      btn.innerHTML = '🧙 ' + tr('spw_open_wizard');
      btn.onclick = startWizard;
      ideasCtrl.appendChild(btn);
    }
    /* بطاقة في الداشبورد */
    var dash = document.getElementById('dashboard');
    if(dash && !document.getElementById('spwDashCard')){
      var head = dash.querySelector('.page-head');
      if(head){
        var card = document.createElement('div');
        card.id = 'spwDashCard';
        card.style.cssText = 'background:linear-gradient(135deg,rgba(167,139,250,.12),rgba(244,114,182,.12));border:1px dashed rgba(167,139,250,.5);border-radius:14px;padding:16px 18px;margin-bottom:16px;display:flex;align-items:center;gap:14px;flex-wrap:wrap';
        card.innerHTML = '<div style="font-size:2rem">🧙</div>' +
          '<div style="flex:1;min-width:200px">' +
            '<div style="font-weight:800;font-size:.95rem">' + tr('spw_card_title') + '</div>' +
            '<div style="font-size:.78rem;color:var(--muted);margin-top:2px">' + tr('spw_card_sub') + '</div>' +
          '</div>' +
          '<button class="btn" id="spwStartBtn" style="white-space:nowrap;background:linear-gradient(135deg,#a78bfa,#f472b6)">🚀 ' + tr('spw_card_btn') + '</button>';
        head.parentNode.insertBefore(card, head.nextSibling);
        card.querySelector('#spwStartBtn').onclick = startWizard;
      }
    }
    /* FAB */
    var fabMenu = document.getElementById('fabMenu');
    if(fabMenu && !fabMenu.querySelector('[data-fab="wizard"]')){
      var fabBtn = document.createElement('button');
      fabBtn.className = 'fab-action';
      fabBtn.dataset.fab = 'wizard';
      fabBtn.innerHTML = '<span class="fa-ic">🧙</span> <span>' + tr('spw_fab') + '</span>';
      fabBtn.onclick = function(){
        if(window.toggleFabMenu) window.toggleFabMenu();
        setTimeout(startWizard, 200);
      };
      fabMenu.insertBefore(fabBtn, fabMenu.firstChild);
    }
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._spwInstalled) return;
    window._spwInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'dashboard' || tab === 'ideas') setTimeout(injectButtons, 150);
      return r;
    };
    setTimeout(injectButtons, 900);
  }

  document.addEventListener('languagechange', function(){ setTimeout(injectButtons, 200); });

  window.startSmartProjectWizard = startWizard;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();

  console.log('🧙 Smart Wizard v2 loaded');
})();