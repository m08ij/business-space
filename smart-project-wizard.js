/* ============================================================
   🧙 smart-project-wizard.js — معالج إضافة مشروع ذكي
   يسأل خطوة بخطوة + يُنشئ كل شيء تلقائياً
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m, t||'info', d||2200); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
  function getSpace(){ return window.space || {}; }
  function getLang(){ return window.i18n ? window.i18n.getLang() : 'ar'; }
  function pickLang(obj, base){ 
    if(getLang() === 'en' && obj[base+'En']) return obj[base+'En']; 
    return obj[base] || '';
  }

  /* ============ اقتراحات SDG حسب القطاع ============ */
  var SECTOR_SDG_SUGGEST = {
    energy: [7, 13, 9], tech: [9, 8, 4], health: [3, 10], education: [4, 10],
    tourism: [8, 12, 11], manufacturing: [9, 12, 13], agriculture: [2, 6, 15],
    finance: [8, 9, 1], logistics: [9, 11, 13], retail: [8, 12]
  };

  /* ============ اقتراح التصنيفات حسب النوع ============ */
  var TYPE_BUDGET = {
    startup: ['setup', 'marketing', 'rnd', 'salaries', 'tech', 'contingency'],
    sme: ['setup', 'marketing', 'office', 'salaries', 'contingency'],
    social: ['setup', 'marketing', 'grant', 'contingency'],
    ngo: ['setup', 'grant', 'office', 'salaries'],
    corporate: ['setup', 'marketing', 'tech', 'legal', 'office']
  };

  /* ============ مراحل تلقائية حسب المدة ============ */
  function genMilestones(timeline, startDate){
    var start = new Date(startDate);
    var addDays = function(d){ var x = new Date(start); x.setDate(x.getDate() + d); return x.toISOString().slice(0,10); };
    var template = {
      short: [
        { title: 'التخطيط والجدوى', start: addDays(0), end: addDays(15), status: 'in-progress', progress: 20 },
        { title: 'التنفيذ السريع', start: addDays(15), end: addDays(60), status: 'not-started', progress: 0 },
        { title: 'الإطلاق والتقييم', start: addDays(60), end: addDays(90), status: 'not-started', progress: 0 }
      ],
      medium: [
        { title: 'التخطيط والجدوى', start: addDays(0), end: addDays(30), status: 'in-progress', progress: 15 },
        { title: 'التصميم والتحضير', start: addDays(30), end: addDays(75), status: 'not-started', progress: 0 },
        { title: 'التنفيذ والبناء', start: addDays(75), end: addDays(150), status: 'not-started', progress: 0 },
        { title: 'الإطلاق والقياس', start: addDays(150), end: addDays(180), status: 'not-started', progress: 0 }
      ],
      long: [
        { title: 'التخطيط والجدوى', start: addDays(0), end: addDays(45), status: 'in-progress', progress: 10 },
        { title: 'التصميم التفصيلي', start: addDays(45), end: addDays(120), status: 'not-started', progress: 0 },
        { title: 'البناء و MVP', start: addDays(120), end: addDays(240), status: 'not-started', progress: 0 },
        { title: 'التشغيل التجريبي', start: addDays(240), end: addDays(330), status: 'not-started', progress: 0 },
        { title: 'الإطلاق الكامل', start: addDays(330), end: addDays(365), status: 'not-started', progress: 0 },
        { title: 'قياس الأثر', start: addDays(365), end: addDays(400), status: 'not-started', progress: 0 }
      ]
    };
    return (template[timeline] || template.medium).map(function(m){ 
      return Object.assign({ id: 'ms_' + uid() }, m); 
    });
  }

  /* ============ مراحل PRiSM حسب النوع ============ */
  function getInitialStage(type){
    return type === 'corporate' || type === 'ngo' ? 'design' : 'pre-project';
  }

  /* ============ الحالة ============ */
  var state = null;

  function resetState(){
    state = {
      step: 0,
      totalSteps: 7,
      data: {
        name: '',
        type: 'startup',
        sector: 'tech',
        country: (getSpace().profile && getSpace().profile.country) || 'QA',
        description: '',
        problem: '',
        solution: '',
        sdg: [],
        teamSize: 'small',
        budget: 'medium',
        timeline: 'medium'
      }
    };
  }

  /* ============ المودال الرئيسي ============ */
  function showWizardModal(){
    document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.id = 'spwBackdrop';
    bd.innerHTML = '<div class="modal" id="spwModal" style="max-width:560px;padding:0;overflow:hidden">' +
      '<div style="padding:18px 24px;background:var(--grad-soft);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px">' +
        '<div style="font-size:1.6rem">🧙</div>' +
        '<div style="flex:1">' +
          '<div style="font-weight:800;font-size:1rem" id="spwTitle">' + tr('spw_title') + '</div>' +
          '<div style="font-size:.72rem;color:var(--muted)" id="spwSubtitle">' + tr('spw_sub') + '</div>' +
        '</div>' +
        '<button class="btn btn-sm btn-ghost" id="spwClose">×</button>' +
      '</div>' +
      '<div style="padding:6px 24px 0">' +
        '<div style="height:6px;background:var(--bg2);border-radius:6px;overflow:hidden;margin-top:14px">' +
          '<div id="spwProgress" style="height:100%;width:0%;background:var(--grad);transition:width .4s ease"></div>' +
        '</div>' +
        '<div id="spwStepLabel" style="text-align:center;font-size:.72rem;color:var(--muted);margin-top:8px"></div>' +
      '</div>' +
      '<div id="spwBody" style="padding:16px 24px 24px"></div>' +
      '<div style="padding:14px 24px;border-top:1px solid var(--border);display:flex;justify-content:space-between;gap:8px;background:var(--card2)">' +
        '<button class="btn btn-sm btn-ghost" id="spwBack">← ' + tr('spw_back') + '</button>' +
        '<div style="display:flex;gap:8px">' +
          '<button class="btn btn-sm btn-ghost" id="spwSkip">' + tr('spw_skip') + '</button>' +
          '<button class="btn btn-sm" id="spwNext">' + tr('spw_next') + ' →</button>' +
        '</div>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);

    bd.querySelector('#spwClose').onclick = closeWizard;
    bd.querySelector('#spwBack').onclick = goBack;
    bd.querySelector('#spwNext').onclick = goNext;
    bd.querySelector('#spwSkip').onclick = skipStep;
    bd.onclick = function(e){ if(e.target === bd) closeWizard(); };

    renderStep();
  }

  function closeWizard(){
    var bd = document.getElementById('spwBackdrop');
    if(bd) bd.remove();
    state = null;
  }

  function updateProgress(){
    var pct = Math.round((state.step / state.totalSteps) * 100);
    var prog = document.getElementById('spwProgress');
    var lbl = document.getElementById('spwStepLabel');
    if(prog) prog.style.width = pct + '%';
    if(lbl) lbl.textContent = tr('spw_step_of', { current: state.step + 1, total: state.totalSteps });
  }

  /* ============ التنقل ============ */
  function goNext(){
    if(!validateStep()) return;
    if(state.step === state.totalSteps - 1){
      finishWizard();
      return;
    }
    state.step++;
    renderStep();
  }

  function goBack(){
    if(state.step === 0) return;
    state.step--;
    renderStep();
  }

  function skipStep(){
    if(state.step === state.totalSteps - 1){
      finishWizard();
      return;
    }
    state.step++;
    renderStep();
  }

  function validateStep(){
    if(state.step === 0){
      if(!state.data.name.trim()){
        toast(tr('spw_err_name'), 'warn');
        return false;
      }
    }
    return true;
  }

  /* ============ الرسم ============ */
  function renderStep(){
    updateProgress();
    var body = document.getElementById('spwBody');
    if(!body) return;
    var nextBtn = document.getElementById('spwNext');
    var backBtn = document.getElementById('spwBack');
    if(backBtn) backBtn.style.visibility = state.step === 0 ? 'hidden' : 'visible';
    if(nextBtn) nextBtn.textContent = state.step === state.totalSteps - 1 ? '✓ ' + tr('spw_finish') : tr('spw_next') + ' →';

    switch(state.step){
      case 0: body.innerHTML = stepBasics(); bindBasics(); break;
      case 1: body.innerHTML = stepSector(); bindSector(); break;
      case 2: body.innerHTML = stepStory(); break;
      case 3: body.innerHTML = stepImpact(); bindImpact(); break;
      case 4: body.innerHTML = stepResources(); break;
      case 5: body.innerHTML = stepTeam(); break;
      case 6: body.innerHTML = stepSummary(); break;
    }
  }

  /* ============ الخطوة 1: الأساسيات ============ */
  function stepBasics(){
    var typeOpts = Object.keys(window.IDEA_TYPES || {}).map(function(k){
      var t = window.IDEA_TYPES[k];
      var selected = state.data.type === k;
      return '<button type="button" data-spw-type="' + k + '" style="padding:14px;border-radius:12px;border:2px solid ' + (selected ? 'var(--cyan)' : 'var(--border)') + ';background:' + (selected ? 'var(--grad-soft)' : 'var(--bg2)') + ';color:' + (selected ? 'var(--cyan)' : 'var(--text)') + ';cursor:pointer;font-family:inherit;text-align:center;transition:.2s">' +
        '<div style="font-size:1.5rem">' + t.icon + '</div>' +
        '<div style="font-size:.78rem;font-weight:700;margin-top:4px">' + pickLang(t, 'name') + '</div>' +
      '</button>';
    }).join('');

    return '<div>' +
      '<div style="font-weight:800;font-size:1.1rem;margin-bottom:6px">' + tr('spw_q1_name') + '</div>' +
      '<div style="font-size:.8rem;color:var(--muted);margin-bottom:12px">' + tr('spw_q1_hint') + '</div>' +
      '<input id="spwName" type="text" value="' + esc(state.data.name) + '" placeholder="' + tr('spw_q1_ph') + '" ' +
        'style="width:100%;background:var(--bg2);border:2px solid var(--border);color:var(--text);padding:14px;border-radius:12px;font-family:inherit;font-size:1rem;outline:none;margin-bottom:20px" autofocus>' +
      '<div style="font-weight:800;font-size:1rem;margin-bottom:10px">' + tr('spw_q1_type') + '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px">' + typeOpts + '</div>' +
    '</div>';
  }

  function bindBasics(){
    var inp = document.getElementById('spwName');
    if(inp){
      inp.oninput = function(){ state.data.name = inp.value; };
      setTimeout(function(){ inp.focus(); }, 100);
      inp.onkeydown = function(e){ if(e.key === 'Enter') goNext(); };
    }
    document.querySelectorAll('[data-spw-type]').forEach(function(b){
      b.onclick = function(){
        state.data.type = b.dataset.spwType;
        renderStep();
      };
    });
  }

  /* ============ الخطوة 2: القطاع والدولة ============ */
  function stepSector(){
    var sectorOpts = Object.keys(window.SECTORS_DB || {}).map(function(k){
      var s = window.SECTORS_DB[k];
      var selected = state.data.sector === k;
      return '<button type="button" data-spw-sector="' + k + '" style="padding:12px;border-radius:11px;border:2px solid ' + (selected ? 'var(--cyan)' : 'var(--border)') + ';background:' + (selected ? 'var(--grad-soft)' : 'var(--bg2)') + ';color:' + (selected ? 'var(--cyan)' : 'var(--text)') + ';cursor:pointer;font-family:inherit;text-align:center;transition:.2s">' +
        '<div style="font-size:1.3rem">' + s.icon + '</div>' +
        '<div style="font-size:.72rem;font-weight:700;margin-top:3px">' + pickLang(s, 'name') + '</div>' +
      '</button>';
    }).join('');

    var countries = window.buildCountryOptions ? window.buildCountryOptions() : {featured: window.COUNTRIES_DB || {}, featuredCodes: []};
    var countryOpts = '';
    (countries.featuredCodes || Object.keys(countries.featured || {})).slice(0, 12).forEach(function(code){
      var c = countries.featured[code];
      if(!c) return;
      var selected = state.data.country === code;
      countryOpts += '<button type="button" data-spw-country="' + code + '" style="padding:8px 12px;border-radius:10px;border:1px solid ' + (selected ? 'var(--cyan)' : 'var(--border)') + ';background:' + (selected ? 'var(--grad-soft)' : 'var(--card)') + ';color:' + (selected ? 'var(--cyan)' : 'var(--text)') + ';cursor:pointer;font-family:inherit;font-size:.8rem;font-weight:600;transition:.2s">' +
        (c.flag || '🌍') + ' ' + esc(getLang()==='en'?(c.nameEn||c.name):c.name) +
      '</button>';
    });

    return '<div>' +
      '<div style="font-weight:800;font-size:1.1rem;margin-bottom:6px">' + tr('spw_q2_sector') + '</div>' +
      '<div style="font-size:.8rem;color:var(--muted);margin-bottom:12px">' + tr('spw_q2_sector_hint') + '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(90px,1fr));gap:8px;margin-bottom:20px">' + sectorOpts + '</div>' +
      '<div style="font-weight:800;font-size:1rem;margin-bottom:10px">' + tr('spw_q2_country') + '</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:6px">' + countryOpts + '</div>' +
    '</div>';
  }

  function bindSector(){
    document.querySelectorAll('[data-spw-sector]').forEach(function(b){
      b.onclick = function(){
        state.data.sector = b.dataset.spwSector;
        var suggested = SECTOR_SDG_SUGGEST[state.data.sector] || [];
        state.data.sdg = suggested.slice();
        renderStep();
      };
    });
    document.querySelectorAll('[data-spw-country]').forEach(function(b){
      b.onclick = function(){
        state.data.country = b.dataset.spwCountry;
        renderStep();
      };
    });
  }

  /* ============ الخطوة 3: القصة ============ */
  function stepStory(){
    return '<div>' +
      '<div style="font-weight:800;font-size:1.1rem;margin-bottom:6px">' + tr('spw_q3_story') + '</div>' +
      '<div style="font-size:.8rem;color:var(--muted);margin-bottom:12px">' + tr('spw_q3_story_hint') + '</div>' +
      '<label style="display:block;font-size:.78rem;color:var(--muted);font-weight:600;margin-bottom:5px">' + tr('spw_q3_desc') + '</label>' +
      '<textarea id="spwDesc" rows="3" placeholder="' + tr('spw_q3_desc_ph') + '" style="width:100%;background:var(--bg2);border:2px solid var(--border);color:var(--text);padding:12px;border-radius:10px;font-family:inherit;font-size:.88rem;outline:none;margin-bottom:14px;resize:vertical">' + esc(state.data.description) + '</textarea>' +
      '<label style="display:block;font-size:.78rem;color:var(--muted);font-weight:600;margin-bottom:5px">' + tr('spw_q3_problem') + '</label>' +
      '<textarea id="spwProblem" rows="3" placeholder="' + tr('spw_q3_problem_ph') + '" style="width:100%;background:var(--bg2);border:2px solid var(--border);color:var(--text);padding:12px;border-radius:10px;font-family:inherit;font-size:.88rem;outline:none;margin-bottom:14px;resize:vertical">' + esc(state.data.problem) + '</textarea>' +
      '<label style="display:block;font-size:.78rem;color:var(--muted);font-weight:600;margin-bottom:5px">' + tr('spw_q3_solution') + '</label>' +
      '<textarea id="spwSolution" rows="3" placeholder="' + tr('spw_q3_solution_ph') + '" style="width:100%;background:var(--bg2);border:2px solid var(--border);color:var(--text);padding:12px;border-radius:10px;font-family:inherit;font-size:.88rem;outline:none;resize:vertical">' + esc(state.data.solution) + '</textarea>' +
    '</div>';
  }

  /* نُحدّث القيم أثناء الكتابة */
  document.addEventListener('input', function(e){
    if(!state) return;
    if(e.target.id === 'spwDesc') state.data.description = e.target.value;
    if(e.target.id === 'spwProblem') state.data.problem = e.target.value;
    if(e.target.id === 'spwSolution') state.data.solution = e.target.value;
  });

  /* ============ الخطوة 4: الأثر ============ */
  function stepImpact(){
    var sdgGrid = Object.keys(window.SDG_DB || {}).map(function(n){
      var sdg = window.SDG_DB[n];
      var selected = state.data.sdg.indexOf(parseInt(n)) > -1;
      var suggested = (SECTOR_SDG_SUGGEST[state.data.sector] || []).indexOf(parseInt(n)) > -1;
      return '<button type="button" data-spw-sdg="' + n + '" style="padding:8px;border-radius:10px;border:2px solid ' + (selected ? sdg.color : 'var(--border)') + ';background:' + (selected ? sdg.color + '20' : 'var(--bg2)') + ';color:' + (selected ? sdg.color : 'var(--muted)') + ';cursor:pointer;font-family:inherit;font-weight:700;font-size:.68rem;text-align:center;transition:.2s;position:relative">' +
        '<div style="font-size:1.1rem">' + sdg.icon + '</div>' +
        '<div>' + n + '</div>' +
        (suggested && !selected ? '<div style="position:absolute;top:2px;right:4px;font-size:.55rem">💡</div>' : '') +
      '</button>';
    }).join('');

    var count = state.data.sdg.length;
    return '<div>' +
      '<div style="font-weight:800;font-size:1.1rem;margin-bottom:6px">' + tr('spw_q4_sdg') + '</div>' +
      '<div style="font-size:.8rem;color:var(--muted);margin-bottom:8px">' + tr('spw_q4_sdg_hint') + '</div>' +
      '<div style="padding:10px;background:var(--grad-soft);border-radius:10px;font-size:.76rem;margin-bottom:14px">' +
        '💡 ' + tr('spw_q4_sdg_suggest', { sector: pickLang((window.SECTORS_DB||{})[state.data.sector] || {}, 'name') }) +
      '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(72px,1fr));gap:6px;margin-bottom:10px">' + sdgGrid + '</div>' +
      '<div style="text-align:center;font-size:.82rem;color:var(--cyan);font-weight:700">' + tr('spw_q4_count', {n: count}) + '</div>' +
    '</div>';
  }

  function bindImpact(){
    document.querySelectorAll('[data-spw-sdg]').forEach(function(b){
      b.onclick = function(){
        var num = parseInt(b.dataset.spwSdg);
        var i = state.data.sdg.indexOf(num);
        if(i > -1) state.data.sdg.splice(i, 1);
        else state.data.sdg.push(num);
        renderStep();
      };
    });
  }

  /* ============ الخطوة 5: الموارد ============ */
  function stepResources(){
    var budget = [
      {v:'small', i:'💧', l: tr('spw_q5_budget_small')},
      {v:'medium', i:'💰', l: tr('spw_q5_budget_medium')},
      {v:'large', i:'💎', l: tr('spw_q5_budget_large')}
    ];
    var timeline = [
      {v:'short', i:'⚡', l: tr('spw_q5_time_short')},
      {v:'medium', i:'📅', l: tr('spw_q5_time_medium')},
      {v:'long', i:'🏔️', l: tr('spw_q5_time_long')}
    ];
    var budgetHtml = budget.map(function(b){
      var sel = state.data.budget === b.v;
      return '<button type="button" data-spw-budget="' + b.v + '" style="padding:14px;border-radius:12px;border:2px solid ' + (sel ? 'var(--cyan)' : 'var(--border)') + ';background:' + (sel ? 'var(--grad-soft)' : 'var(--bg2)') + ';color:' + (sel ? 'var(--cyan)' : 'var(--text)') + ';cursor:pointer;font-family:inherit;text-align:center;transition:.2s">' +
        '<div style="font-size:1.4rem">' + b.i + '</div>' +
        '<div style="font-size:.76rem;font-weight:700;margin-top:4px">' + b.l + '</div>' +
      '</button>';
    }).join('');
    var timelineHtml = timeline.map(function(t){
      var sel = state.data.timeline === t.v;
      return '<button type="button" data-spw-timeline="' + t.v + '" style="padding:14px;border-radius:12px;border:2px solid ' + (sel ? 'var(--cyan)' : 'var(--border)') + ';background:' + (sel ? 'var(--grad-soft)' : 'var(--bg2)') + ';color:' + (sel ? 'var(--cyan)' : 'var(--text)') + ';cursor:pointer;font-family:inherit;text-align:center;transition:.2s">' +
        '<div style="font-size:1.4rem">' + t.i + '</div>' +
        '<div style="font-size:.76rem;font-weight:700;margin-top:4px">' + t.l + '</div>' +
      '</button>';
    }).join('');

    return '<div>' +
      '<div style="font-weight:800;font-size:1.1rem;margin-bottom:6px">' + tr('spw_q5_resources') + '</div>' +
      '<div style="font-size:.8rem;color:var(--muted);margin-bottom:12px">' + tr('spw_q5_resources_hint') + '</div>' +
      '<div style="font-weight:700;font-size:.9rem;margin-bottom:8px">💰 ' + tr('spw_q5_budget') + '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:20px">' + budgetHtml + '</div>' +
      '<div style="font-weight:700;font-size:.9rem;margin-bottom:8px">📅 ' + tr('spw_q5_timeline') + '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">' + timelineHtml + '</div>' +
    '</div>';
  }

  document.addEventListener('click', function(e){
    if(!state) return;
    var t = e.target.closest('[data-spw-budget]');
    if(t){ state.data.budget = t.dataset.spwBudget; renderStep(); }
    var tm = e.target.closest('[data-spw-timeline]');
    if(tm){ state.data.timeline = tm.dataset.spwTimeline; renderStep(); }
  });

  /* ============ الخطوة 6: الفريق ============ */
  function stepTeam(){
    var sizes = [
      {v:'solo', i:'👤', l: tr('spw_q6_team_solo')},
      {v:'small', i:'👥', l: tr('spw_q6_team_small')},
      {v:'medium', i:'👨‍👩‍👦', l: tr('spw_q6_team_medium')},
      {v:'large', i:'🏢', l: tr('spw_q6_team_large')}
    ];
    var html = sizes.map(function(s){
      var sel = state.data.teamSize === s.v;
      return '<button type="button" data-spw-team="' + s.v + '" style="padding:16px;border-radius:12px;border:2px solid ' + (sel ? 'var(--cyan)' : 'var(--border)') + ';background:' + (sel ? 'var(--grad-soft)' : 'var(--bg2)') + ';color:' + (sel ? 'var(--cyan)' : 'var(--text)') + ';cursor:pointer;font-family:inherit;text-align:center;transition:.2s">' +
        '<div style="font-size:1.5rem">' + s.i + '</div>' +
        '<div style="font-size:.76rem;font-weight:700;margin-top:4px">' + s.l + '</div>' +
      '</button>';
    }).join('');

    return '<div>' +
      '<div style="font-weight:800;font-size:1.1rem;margin-bottom:6px">' + tr('spw_q6_team') + '</div>' +
      '<div style="font-size:.8rem;color:var(--muted);margin-bottom:14px">' + tr('spw_q6_team_hint') + '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px">' + html + '</div>' +
    '</div>';
  }

  document.addEventListener('click', function(e){
    if(!state) return;
    var t = e.target.closest('[data-spw-team]');
    if(t){ state.data.teamSize = t.dataset.spwTeam; renderStep(); }
  });

  /* ============ الخطوة 7: الملخص ============ */
  function stepSummary(){
    var d = state.data;
    var type = (window.IDEA_TYPES || {})[d.type] || {icon:'💡', name:'—'};
    var sector = (window.SECTORS_DB || {})[d.sector] || {icon:'📦', name:'—'};
    var countries = window.getAllCountries ? window.getAllCountries() : {};
    var country = countries[d.country] || (window.COUNTRIES_DB || {})[d.country] || {flag:'🌍', name:'—'};

    var sdgTags = d.sdg.map(function(n){
      var s = window.SDG_DB[n]; if(!s) return '';
      return '<span style="font-size:.68rem;padding:3px 8px;border-radius:6px;background:' + s.color + '20;color:' + s.color + ';font-weight:700">' + s.icon + ' SDG ' + n + '</span>';
    }).join('');

    var auto = [];
    auto.push('💡 ' + tr('spw_sum_idea'));
    auto.push('💼 ' + tr('spw_sum_project'));
    if(d.sdg.length) auto.push('🎯 ' + tr('spw_sum_sdg', {n: d.sdg.length}));
    var budgetCats = TYPE_BUDGET[d.type] || [];
    if(budgetCats.length) auto.push('💰 ' + tr('spw_sum_budget', {n: budgetCats.length}));
    auto.push('🗺️ ' + tr('spw_sum_milestones', {n: (d.timeline === 'short' ? 3 : d.timeline === 'long' ? 6 : 4)}));
    auto.push('📊 ' + tr('spw_sum_strategy'));

    return '<div>' +
      '<div style="font-weight:800;font-size:1.1rem;margin-bottom:6px">' + tr('spw_q7_summary') + '</div>' +
      '<div style="font-size:.8rem;color:var(--muted);margin-bottom:14px">' + tr('spw_q7_summary_hint') + '</div>' +
      '<div style="padding:14px;background:var(--bg2);border-radius:12px;margin-bottom:12px">' +
        '<div style="font-weight:800;font-size:1rem">' + type.icon + ' ' + esc(d.name) + '</div>' +
        '<div style="font-size:.76rem;color:var(--muted2);margin-top:4px">' + country.flag + ' ' + esc(country.name) + ' · ' + sector.icon + ' ' + esc(pickLang(sector, 'name')) + ' · ' + pickLang(type, 'name') + '</div>' +
        (d.description ? '<div style="font-size:.8rem;color:var(--muted);margin-top:8px;line-height:1.6">' + esc(d.description.slice(0, 140)) + (d.description.length > 140 ? '...' : '') + '</div>' : '') +
        (sdgTags ? '<div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:10px">' + sdgTags + '</div>' : '') +
      '</div>' +
      '<div style="padding:14px;background:linear-gradient(135deg,rgba(34,211,238,.08),rgba(167,139,250,.08));border:1px dashed var(--glow);border-radius:12px">' +
        '<div style="font-weight:800;font-size:.85rem;color:var(--cyan);margin-bottom:8px">✨ ' + tr('spw_q7_will_create') + '</div>' +
        '<div style="display:flex;flex-direction:column;gap:6px">' +
          auto.map(function(t){ return '<div style="font-size:.8rem">' + t + '</div>'; }).join('') +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* ============ الإنهاء ============ */
  function finishWizard(){
    var d = state.data;
    var sp = getSpace();
    if(!sp){ toast('⚠️', 'warn'); return; }
    if(!Array.isArray(sp.ideas)) sp.ideas = [];
    if(!Array.isArray(sp.projects)) sp.projects = [];
    if(!Array.isArray(sp.budget)) sp.budget = [];
    if(!Array.isArray(sp.tasks)) sp.tasks = [];

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

    /* 2) المشروع الكامل */
    var milestones = genMilestones(d.timeline, today);
    var initialStage = getInitialStage(d.type);
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
        okrs: [{
          objective: tr('spw_obj_launch') + ' ' + d.name,
          keyResults: [
            {name: tr('spw_kr_1'), progress: 0},
            {name: tr('spw_kr_2'), progress: 0},
            {name: tr('spw_kr_3'), progress: 0}
          ]
        }]
      },
      impact: {
        sdg: d.sdg.slice(),
        p5: {},
        esg: {e: 50, s: 50, g: 50}
      },
      milestones: milestones,
      risks: [],
      tasks: []
    };
    sp.projects.push(project);

    /* 3) بنود الميزانية التمهيدية */
    var budgetCats = TYPE_BUDGET[d.type] || ['setup'];
    var budgetAmount = d.budget === 'small' ? 5000 : d.budget === 'large' ? 200000 : 50000;
    budgetCats.forEach(function(cat, i){
      sp.budget.push({
        id: uid(),
        type: 'expense',
        category: cat,
        amount: Math.round(budgetAmount / budgetCats.length),
        date: today,
        note: tr('spw_budget_note') + ' — ' + d.name
      });
    });

    /* 4) مهام أولية */
    var starterTasks = [
      tr('spw_task_1'),
      tr('spw_task_2'),
      tr('spw_task_3')
    ];
    starterTasks.forEach(function(t, i){
      var due = new Date(); due.setDate(due.getDate() + 7 * (i+1));
      sp.tasks.push({
        id: uid(),
        title: t,
        project: d.name,
        due: due.toISOString().slice(0,10),
        done: false
      });
    });

    /* حفظ */
    if(window.saveSpace) window.saveSpace();

    /* إغلاق + ملخص */
    closeWizard();
    showSuccess(d, project);
  }

  function showSuccess(d, project){
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.innerHTML = '<div class="modal" style="max-width:520px;text-align:center">' +
      '<div style="font-size:3.5rem;margin:8px 0">🎉</div>' +
      '<h3 style="color:var(--cyan);margin:8px 0">' + tr('spw_success_title') + '</h3>' +
      '<p style="color:var(--muted);font-size:.85rem;margin-bottom:20px">' + esc(d.name) + '</p>' +
      '<div class="grid grid-3" style="gap:10px;margin-bottom:18px">' +
        '<div class="stat"><div class="ic">🎯</div><div><div class="v">' + d.sdg.length + '</div><div class="l">' + tr('spw_success_sdg') + '</div></div></div>' +
        '<div class="stat"><div class="ic">🎯</div><div><div class="v">' + (project.milestones||[]).length + '</div><div class="l">' + tr('spw_success_milestones') + '</div></div></div>' +
        '<div class="stat"><div class="ic">📝</div><div><div class="v">3</div><div class="l">' + tr('spw_success_tasks') + '</div></div></div>' +
      '</div>' +
      '<div style="padding:12px;background:var(--grad-soft);border-radius:10px;font-size:.78rem;text-align:start;line-height:1.7;margin-bottom:18px">' +
        '💡 ' + tr('spw_success_hint') +
      '</div>' +
      '<div class="modal-actions" style="justify-content:center">' +
        '<button class="btn btn-ghost" id="spwDoneDash">📊 ' + tr('nav_dashboard') + '</button>' +
        '<button class="btn" id="spwDoneProject">🗺️ ' + tr('spw_open_project') + '</button>' +
      '</div>' +
    '</div>';
    document.body.appendChild(bd);

    bd.querySelector('#spwDoneDash').onclick = function(){
      bd.remove();
      if(window.switchTab) window.switchTab('dashboard');
    };
    bd.querySelector('#spwDoneProject').onclick = function(){
      bd.remove();
      if(window.switchTab) window.switchTab('roadmap');
    };
  }

  /* ============ الأزرار في الصفحة ============ */
  function injectButtons(){
    /* زر في قسم الأفكار */
    var ideasCtrl = document.getElementById('ideas');
    if(ideasCtrl && !ideasCtrl.querySelector('#spwOpenBtn')){
      var controls = ideasCtrl.querySelector('.controls');
      if(controls){
        var btn = document.createElement('button');
        btn.className = 'btn';
        btn.id = 'spwOpenBtn';
        btn.style.background = 'linear-gradient(135deg,#a78bfa,#f472b6)';
        btn.innerHTML = '🧙 ' + tr('spw_open_wizard');
        btn.onclick = startWizard;
        controls.appendChild(btn);
      }
    }

    /* زر في الداشبورد */
    var dash = document.getElementById('dashboard');
    if(dash && !dash.querySelector('#spwDashCard')){
      var head = dash.querySelector('.page-head');
      if(head && !dash.querySelector('#demoProjectCard')){
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

    /* FAB Action */
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

  function startWizard(){
    resetState();
    showWizardModal();
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

  document.addEventListener('languagechange', function(){
    setTimeout(injectButtons, 200);
  });

  window.startSmartProjectWizard = startWizard;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();

  console.log('🧙 Smart Project Wizard loaded');
})();