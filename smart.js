/* ============================================================
   📦 smart.js — AUTO-GENERATED BUNDLE
   Generated: 2026-09-29T12:48:56.133Z
   Sources: 4 files
   ⚠️ لا تعدّل هذا الملف — عدّل المصادر في src/ ثم أعد التشغيل
   ============================================================ */


/* ========== project-knowledge-base.js ========== */
/* ============================================================
   🧠 project-knowledge-base.js — قاعدة معرفة المشاريع والأفكار
   اقتراحات ذكية بناءً على: القطاع، النوع، الحجم، الدولة
   ============================================================ */
(function(){
  'use strict';

  function pick(obj, base){
    var lang = window.i18n ? window.i18n.getLang() : 'ar';
    if(lang === 'en' && obj[base + 'En']) return obj[base + 'En'];
    return obj[base] || obj[base + 'En'] || '';
  }

  /* ============ KB: قطاعات ============ */
  var SECTOR_KB = {
    energy: {
      sdg: [7, 13, 9],
      milestones: [
        { ar:'دراسة الجدوى الطاقية', en:'Energy feasibility study', days:30 },
        { ar:'الحصول على التراخيص البيئية', en:'Environmental permits', days:45 },
        { ar:'تركيب البنية التحتية', en:'Infrastructure installation', days:60 },
        { ar:'التشغيل والاختبار', en:'Operational testing', days:30 }
      ],
      risks: [
        { ar:'تأخر التراخيص البيئية', en:'Delayed environmental permits', p:3, i:4, cat:'legal' },
        { ar:'ارتفاع تكاليف المعدات', en:'Rising equipment costs', p:4, i:3, cat:'financial' },
        { ar:'تقلب أسعار الطاقة', en:'Energy price volatility', p:3, i:4, cat:'market' }
      ],
      kpis: [
        { ar:'إنتاج الطاقة (kWh/شهر)', en:'Energy output (kWh/mo)' },
        { ar:'تكلفة kWh', en:'Cost per kWh' },
        { ar:'تقليل CO₂ (طن/سنة)', en:'CO₂ reduction (t/yr)' }
      ],
      team: [
        { ar:'مهندس طاقة', en:'Energy Engineer', role:'technical' },
        { ar:'مسؤول امتثال بيئي', en:'Environmental Compliance', role:'legal' },
        { ar:'مدير مشروع', en:'Project Manager', role:'management' }
      ],
      budget: { rnd:30, equipment:30, legal:10, marketing:5, salaries:15, contingency:10 }
    },

    tech: {
      sdg: [9, 8, 4],
      milestones: [
        { ar:'تحديد متطلبات المنتج (PRD)', en:'Product Requirements (PRD)', days:20 },
        { ar:'تصميم واجهات UX/UI', en:'UX/UI design', days:25 },
        { ar:'بناء MVP', en:'MVP build', days:60 },
        { ar:'اختبار Beta مع مستخدمين', en:'Beta testing', days:30 },
        { ar:'الإطلاق الرسمي', en:'Official launch', days:15 }
      ],
      risks: [
        { ar:'تأخر التطوير بسبب المواهب', en:'Dev delays from talent shortage', p:4, i:4, cat:'operational' },
        { ar:'ثغرات أمنية', en:'Security vulnerabilities', p:3, i:5, cat:'operational' },
        { ar:'تغير متطلبات العميل', en:'Changing client requirements', p:3, i:3, cat:'strategic' }
      ],
      kpis: [
        { ar:'مستخدمون نشطون شهرياً (MAU)', en:'Monthly Active Users (MAU)' },
        { ar:'معدل الاستحواذ (CAC)', en:'Customer Acquisition Cost' },
        { ar:'معدل الاستبقاء', en:'Retention rate' }
      ],
      team: [
        { ar:'مهندس برمجيات', en:'Software Engineer', role:'technical' },
        { ar:'مصمم UX/UI', en:'UX/UI Designer', role:'design' },
        { ar:'مدير منتج', en:'Product Manager', role:'management' },
        { ar:'مهندس جودة', en:'QA Engineer', role:'technical' }
      ],
      budget: { rnd:40, tech:15, marketing:15, salaries:20, legal:5, contingency:5 }
    },

    health: {
      sdg: [3, 10],
      milestones: [
        { ar:'دراسة الاحتياج الصحي', en:'Health needs assessment', days:25 },
        { ar:'الحصول على تراخيص صحية', en:'Health permits', days:60 },
        { ar:'تجهيز المرافق', en:'Facility setup', days:45 },
        { ar:'تدريب الكوادر', en:'Staff training', days:20 },
        { ar:'بدء التشغيل', en:'Operational launch', days:15 }
      ],
      risks: [
        { ar:'تعقيدات التراخيص الصحية', en:'Health license complexities', p:4, i:4, cat:'legal' },
        { ar:'نقص الكوادر المؤهلة', en:'Qualified staff shortage', p:3, i:4, cat:'operational' },
        { ar:'ارتفاع تكاليف المعدات الطبية', en:'Rising medical equipment costs', p:3, i:3, cat:'financial' }
      ],
      kpis: [
        { ar:'عدد المرضى/المستفيدين', en:'Patients/beneficiaries' },
        { ar:'معدل رضا المرضى', en:'Patient satisfaction' },
        { ar:'معدل نجاح العلاج', en:'Treatment success rate' }
      ],
      team: [
        { ar:'طبيب/أخصائي', en:'Physician/Specialist', role:'technical' },
        { ar:'مدير طبي', en:'Medical Director', role:'management' },
        { ar:'ممرضين', en:'Nurses', role:'technical' },
        { ar:'مسؤول امتثال', en:'Compliance Officer', role:'legal' }
      ],
      budget: { equipment:35, salaries:30, legal:10, marketing:5, rnd:10, contingency:10 }
    },

    education: {
      sdg: [4, 10],
      milestones: [
        { ar:'تحديد المنهجية التعليمية', en:'Define curriculum', days:20 },
        { ar:'بناء المحتوى', en:'Content creation', days:45 },
        { ar:'تطوير المنصة', en:'Platform development', days:50 },
        { ar:'تدريب المدربين', en:'Train the trainers', days:15 },
        { ar:'الإطلاق التجريبي', en:'Pilot launch', days:20 }
      ],
      risks: [
        { ar:'ضعف تفاعل المتعلمين', en:'Low learner engagement', p:3, i:4, cat:'operational' },
        { ar:'نقص التمويل المستدام', en:'Unsustainable funding', p:3, i:4, cat:'financial' },
        { ar:'منافسة من منصات كبرى', en:'Competition from big platforms', p:4, i:3, cat:'market' }
      ],
      kpis: [
        { ar:'عدد المتعلمين', en:'Learner count' },
        { ar:'معدل الإكمال', en:'Completion rate' },
        { ar:'معدل الرضا', en:'Satisfaction score' }
      ],
      team: [
        { ar:'مصمم تعليمي', en:'Instructional Designer', role:'technical' },
        { ar:'مدرب/معلم', en:'Trainer/Teacher', role:'technical' },
        { ar:'مهندس منصة', en:'Platform Engineer', role:'technical' },
        { ar:'مدير أكاديمي', en:'Academic Manager', role:'management' }
      ],
      budget: { rnd:25, tech:20, marketing:15, salaries:30, legal:5, contingency:5 }
    },

    tourism: {
      sdg: [8, 12, 11],
      milestones: [
        { ar:'دراسة السوق السياحي', en:'Tourism market study', days:25 },
        { ar:'تصميم التجربة السياحية', en:'Experience design', days:30 },
        { ar:'الشراكات مع الفنادق والمنظمين', en:'Hotel & tour operator partnerships', days:40 },
        { ar:'حملة إطلاق', en:'Launch campaign', days:20 },
        { ar:'التشغيل الكامل', en:'Full operation', days:15 }
      ],
      risks: [
        { ar:'الموسمية الحادة', en:'Severe seasonality', p:4, i:3, cat:'market' },
        { ar:'تقلب أعداد السياح', en:'Tourism volume volatility', p:3, i:4, cat:'market' },
        { ar:'تأثير بيئي سلبي', en:'Negative environmental impact', p:2, i:4, cat:'esg' }
      ],
      kpis: [
        { ar:'عدد السياح', en:'Tourist count' },
        { ar:'متوسط الإنفاق للزائر', en:'Avg. spend per visitor' },
        { ar:'معدل العودة', en:'Return rate' }
      ],
      team: [
        { ar:'مرشد سياحي', en:'Tour Guide', role:'technical' },
        { ar:'مدير عمليات', en:'Operations Manager', role:'management' },
        { ar:'مسؤول تسويق', en:'Marketing Lead', role:'marketing' }
      ],
      budget: { marketing:30, salaries:25, operations:20, legal:5, contingency:10, rnd:10 }
    },

    manufacturing: {
      sdg: [9, 12, 13],
      milestones: [
        { ar:'تصميم خط الإنتاج', en:'Production line design', days:40 },
        { ar:'شراء وتوريد المعدات', en:'Equipment procurement', days:60 },
        { ar:'تركيب خط الإنتاج', en:'Production line installation', days:45 },
        { ar:'اختبار الجودة', en:'Quality testing', days:20 },
        { ar:'بدء الإنتاج الكامل', en:'Full production start', days:15 }
      ],
      risks: [
        { ar:'تأخر سلسلة التوريد', en:'Supply chain delays', p:4, i:4, cat:'operational' },
        { ar:'ارتفاع تكاليف المواد الخام', en:'Raw material cost increase', p:4, i:3, cat:'financial' },
        { ar:'لوائح بيئية صارمة', en:'Strict environmental regulations', p:3, i:4, cat:'legal' }
      ],
      kpis: [
        { ar:'الطاقة الإنتاجية', en:'Production capacity' },
        { ar:'معدل الجودة', en:'Quality rate' },
        { ar:'تكلفة الوحدة', en:'Cost per unit' }
      ],
      team: [
        { ar:'مهندس إنتاج', en:'Production Engineer', role:'technical' },
        { ar:'مدير مصنع', en:'Plant Manager', role:'management' },
        { ar:'مراقب جودة', en:'QC Inspector', role:'technical' }
      ],
      budget: { equipment:45, rnd:10, salaries:20, legal:5, contingency:15, marketing:5 }
    },

    agriculture: {
      sdg: [2, 6, 15],
      milestones: [
        { ar:'دراسة التربة والمناخ', en:'Soil & climate study', days:20 },
        { ar:'تصميم نظام الري', en:'Irrigation system design', days:25 },
        { ar:'تهيئة الأرض والزراعة', en:'Land prep & planting', days:30 },
        { ar:'التشغيل والمتابعة', en:'Operation & monitoring', days:90 },
        { ar:'أول حصاد تجاري', en:'First commercial harvest', days:30 }
      ],
      risks: [
        { ar:'تقلب المناخ', en:'Climate volatility', p:4, i:5, cat:'esg' },
        { ar:'شح المياه', en:'Water scarcity', p:4, i:4, cat:'esg' },
        { ar:'آفات وأمراض', en:'Pests & diseases', p:3, i:3, cat:'operational' }
      ],
      kpis: [
        { ar:'الإنتاجية (طن/هكتار)', en:'Yield (ton/hectare)' },
        { ar:'استهلاك المياه', en:'Water consumption' },
        { ar:'هامش الربح', en:'Profit margin' }
      ],
      team: [
        { ar:'مهندس زراعي', en:'Agricultural Engineer', role:'technical' },
        { ar:'مدير مزرعة', en:'Farm Manager', role:'management' },
        { ar:'عمالة حقلية', en:'Field Workers', role:'technical' }
      ],
      budget: { equipment:30, rnd:15, salaries:25, legal:5, contingency:15, operations:10 }
    },

    finance: {
      sdg: [8, 9, 1],
      milestones: [
        { ar:'الحصول على ترخيص مالي', en:'Financial license', days:60 },
        { ar:'بناء المنصة التقنية', en:'Platform build', days:60 },
        { ar:'الامتثال والتدقيق', en:'Compliance & audit', days:30 },
        { ar:'إطلاق تجريبي', en:'Pilot launch', days:20 },
        { ar:'التوسع', en:'Expansion', days:60 }
      ],
      risks: [
        { ar:'تغييرات تنظيمية', en:'Regulatory changes', p:4, i:5, cat:'legal' },
        { ar:'مخاطر أمنية', en:'Security risks', p:3, i:5, cat:'operational' },
        { ar:'ضعف ثقة العملاء', en:'Low customer trust', p:3, i:4, cat:'market' }
      ],
      kpis: [
        { ar:'حجم المعاملات', en:'Transaction volume' },
        { ar:'عدد العملاء', en:'Customer count' },
        { ar:'معدل الاحتفاظ', en:'Retention rate' }
      ],
      team: [
        { ar:'محلل مالي', en:'Financial Analyst', role:'technical' },
        { ar:'مدير امتثال', en:'Compliance Manager', role:'legal' },
        { ar:'مدير مخاطر', en:'Risk Manager', role:'management' },
        { ar:'مهندس fintech', en:'Fintech Engineer', role:'technical' }
      ],
      budget: { rnd:25, tech:25, legal:15, salaries:20, marketing:5, contingency:10 }
    },

    logistics: {
      sdg: [9, 11, 13],
      milestones: [
        { ar:'تحليل المسارات والعمليات', en:'Routes & ops analysis', days:25 },
        { ar:'شراء/استئجار الأسطول', en:'Fleet acquisition', days:45 },
        { ar:'بناء نظام التتبع', en:'Tracking system', days:40 },
        { ar:'التشغيل التجريبي', en:'Pilot operation', days:30 },
        { ar:'التوسع', en:'Expansion', days:60 }
      ],
      risks: [
        { ar:'ارتفاع أسعار الوقود', en:'Fuel price increase', p:4, i:3, cat:'financial' },
        { ar:'ازدحام الطرق', en:'Traffic congestion', p:4, i:3, cat:'operational' },
        { ar:'تلف الشحنات', en:'Cargo damage', p:3, i:4, cat:'operational' }
      ],
      kpis: [
        { ar:'دقة التسليم في الوقت', en:'On-time delivery rate' },
        { ar:'تكلفة الشحنة', en:'Cost per shipment' },
        { ar:'رضا العملاء', en:'Customer satisfaction' }
      ],
      team: [
        { ar:'مدير أسطول', en:'Fleet Manager', role:'management' },
        { ar:'مهندس لوجستيات', en:'Logistics Engineer', role:'technical' },
        { ar:'سائقون', en:'Drivers', role:'technical' }
      ],
      budget: { equipment:35, tech:15, salaries:20, legal:5, operations:15, contingency:10 }
    },

    retail: {
      sdg: [8, 12],
      milestones: [
        { ar:'دراسة الموقع والسوق', en:'Location & market study', days:20 },
        { ar:'تصميم المتجر/المنصة', en:'Store/platform design', days:30 },
        { ar:'التوريد والمخزون', en:'Supply & inventory', days:35 },
        { ar:'حملة افتتاح', en:'Opening campaign', days:20 },
        { ar:'التشغيل المستقر', en:'Stable operation', days:60 }
      ],
      risks: [
        { ar:'منافسة سعرية', en:'Price competition', p:4, i:3, cat:'market' },
        { ar:'تراكم المخزون', en:'Inventory buildup', p:3, i:4, cat:'financial' },
        { ar:'تغير أذواق العملاء', en:'Changing customer tastes', p:3, i:3, cat:'market' }
      ],
      kpis: [
        { ar:'المبيعات اليومية', en:'Daily sales' },
        { ar:'هامش الربح', en:'Profit margin' },
        { ar:'معدل دوران المخزون', en:'Inventory turnover' }
      ],
      team: [
        { ar:'مدير متجر', en:'Store Manager', role:'management' },
        { ar:'مسؤول تسويق', en:'Marketing Lead', role:'marketing' },
        { ar:'بائع/موظف', en:'Sales Staff', role:'technical' }
      ],
      budget: { equipment:20, marketing:25, salaries:20, operations:20, legal:5, contingency:10 }
    }
  };

  /* ============ KB: أنواع المشاريع ============ */
  var TYPE_KB = {
    startup: {
      legalStructure: { ar:'شركة ذات مسؤولية محدودة (LLC)', en:'LLC' },
      fundingSources: [
        { ar:'مستثمرون ملائكيون', en:'Angel investors' },
        { ar:'صناديق رأس مال مخاطر', en:'VC funds' },
        { ar:'منح تسريع الأعمال', en:'Accelerator grants' }
      ],
      extraQuestions: [
        { key:'stage', ar:'في أي مرحلة أنت؟', en:'What stage?',
          options:[{v:'idea',ar:'فكرة',en:'Idea'},{v:'mvp',ar:'MVP',en:'MVP'},{v:'growth',ar:'نمو',en:'Growth'}] },
        { key:'market', ar:'من هو جمهورك المستهدف؟', en:'Target audience?', type:'text' }
      ]
    },
    sme: {
      legalStructure: { ar:'مؤسسة فردية أو شركة', en:'Sole proprietorship or LLC' },
      fundingSources: [
        { ar:'قروض بنكية', en:'Bank loans' },
        { ar:'صناديق دعم المشاريع الصغيرة', en:'SME support funds' }
      ],
      extraQuestions: [
        { key:'location', ar:'أين سيكون مقر المشروع؟', en:'Where is the location?', type:'text' }
      ]
    },
    social: {
      legalStructure: { ar:'مؤسسة مجتمعية أو جمعية', en:'Social enterprise or association' },
      fundingSources: [
        { ar:'منح حكومية', en:'Government grants' },
        { ar:'منظمات مانحة دولية', en:'International donors' }
      ],
      extraQuestions: [
        { key:'beneficiaries', ar:'من هم المستفيدون؟', en:'Who are the beneficiaries?', type:'text' },
        { key:'impactGoal', ar:'ما هدف الأثر الأساسي؟', en:'Primary impact goal?', type:'text' }
      ]
    },
    ngo: {
      legalStructure: { ar:'منظمة غير ربحية مسجلة', en:'Registered nonprofit' },
      fundingSources: [
        { ar:'منح دولية', en:'International grants' },
        { ar:'تبرعات', en:'Donations' }
      ],
      extraQuestions: [
        { key:'mission', ar:'ما رسالتك الأساسية؟', en:'Core mission?', type:'text' }
      ]
    },
    corporate: {
      legalStructure: { ar:'مبادرة داخلية', en:'Internal initiative' },
      fundingSources: [
        { ar:'ميزانية داخلية', en:'Internal budget' }
      ],
      extraQuestions: [
        { key:'department', ar:'أي قسم؟', en:'Which department?', type:'text' },
        { key:'owner', ar:'من هو المسؤول؟', en:'Who is the owner?', type:'text' }
      ]
    }
  };

  /* ============ دوال مساعدة ============ */
  function getSectorKB(sector){
    return SECTOR_KB[sector] || SECTOR_KB.tech;
  }

  function getTypeKB(type){
    return TYPE_KB[type] || TYPE_KB.startup;
  }

  /* ============ اقتراحات ============ */
  function suggestSDG(sector){
    return (getSectorKB(sector).sdg || []).slice();
  }

  function suggestMilestones(sector, timeline, startDate){
    var kb = getSectorKB(sector);
    var ms = kb.milestones || [];
    var scale = timeline === 'short' ? 0.5 : timeline === 'long' ? 1.5 : 1;
    var start = new Date(startDate || new Date());
    var cumulative = 0;
    return ms.map(function(m){
      var duration = Math.max(7, Math.round(m.days * scale));
      var s = new Date(start); s.setDate(s.getDate() + cumulative);
      var e = new Date(s); e.setDate(e.getDate() + duration);
      var item = {
        id: 'ms_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6),
        title: pick(m, 'ar'),
        start: s.toISOString().slice(0,10),
        end: e.toISOString().slice(0,10),
        status: cumulative === 0 ? 'in-progress' : 'not-started',
        progress: cumulative === 0 ? 10 : 0,
        owner: '',
        notes: ''
      };
      cumulative += duration;
      return item;
    });
  }

  function suggestRisks(sector){
    var kb = getSectorKB(sector);
    return (kb.risks || []).map(function(r){
      return {
        id: 'risk_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6),
        title: pick(r, 'ar'),
        desc: '',
        category: r.cat || 'strategic',
        probability: r.p || 3,
        impact: r.i || 3,
        mitigation: '',
        owner: '',
        status: 'open',
        createdAt: new Date().toISOString()
      };
    });
  }

  function suggestKPIs(sector){
    var kb = getSectorKB(sector);
    return (kb.kpis || []).map(function(k){ return pick(k, 'ar'); });
  }

  function suggestTeam(sector){
    var kb = getSectorKB(sector);
    return (kb.team || []).map(function(t){ return pick(t, 'ar'); });
  }

  function suggestBudgetBreakdown(sector, type, budgetScale){
    var sectorKB = getSectorKB(sector);
    var totalScale = budgetScale === 'small' ? 10000 : budgetScale === 'large' ? 500000 : 75000;
    var dist = sectorKB.budget || { rnd:30, marketing:20, salaries:30, legal:10, contingency:10 };
    var out = [];
    Object.keys(dist).forEach(function(cat){
      var amount = Math.round((dist[cat] / 100) * totalScale);
      if(amount < 500) return;
      out.push({
        id: 'budget_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6),
        type: 'expense',
        category: cat === 'equipment' ? 'setup' : cat === 'operations' ? 'office' : cat,
        amount: amount,
        date: new Date().toISOString().slice(0,10),
        note: ''
      });
    });
    return out;
  }

  function suggestOKRs(projectName){
    return [{
      objective: pick({ar:'إطلاق ' + projectName + ' بنجاح', en:'Successfully launch ' + projectName}, 'ar'),
      keyResults: [
        { name: pick({ar:'إكمال 100% من المهام الأساسية', en:'Complete 100% of core tasks'}, 'ar'), progress: 0 },
        { name: pick({ar:'تحقيق 80% رضا العملاء', en:'Achieve 80% customer satisfaction'}, 'ar'), progress: 0 },
        { name: pick({ar:'إطلاق النسخة الأولى', en:'Launch first version'}, 'ar'), progress: 0 }
      ]
    }];
  }

  /* ============ إيجاد مشاريع مشابهة ============ */
  function findSimilar(profile, existingProjects){
    if(!existingProjects || !existingProjects.length) return [];
    var score = function(p){
      var s = 0;
      if(p.sector === profile.sector) s += 3;
      if(p.country === profile.country) s += 1;
      if(p.stage === profile.stage) s += 1;
      return s;
    };
    return existingProjects
      .map(function(p){ return { project: p, score: score(p) }; })
      .filter(function(x){ return x.score >= 3; })
      .sort(function(a,b){ return b.score - a.score; })
      .slice(0, 3);
  }

  /* ============ اقتراحات ذكية للأفكار ============ */
  function suggestIdeaEnhancements(idea){
    var out = { improvedDescription: '', suggestedSDG: [], suggestedNextStep: '' };
    var sector = idea.sector || 'tech';
    out.suggestedSDG = suggestSDG(sector);
    if(!idea.problem){
      out.suggestedNextStep = pick({ar:'حدد المشكلة الأساسية التي يحلها المشروع', en:'Define the core problem'}, 'ar');
    } else if(!idea.solution){
      out.suggestedNextStep = pick({ar:'اقترح حلاً واضحاً للمشكلة', en:'Propose a clear solution'}, 'ar');
    } else {
      out.suggestedNextStep = pick({ar:'انتقل لإنشاء المشروع وابدأ التخطيط', en:'Move to project creation'}, 'ar');
    }
    return out;
  }

  /* ============ تصدير ============ */
  window.PROJECT_KB = {
    SECTOR_KB: SECTOR_KB,
    TYPE_KB: TYPE_KB,
    getSectorKB: getSectorKB,
    getTypeKB: getTypeKB,
    suggestSDG: suggestSDG,
    suggestMilestones: suggestMilestones,
    suggestRisks: suggestRisks,
    suggestKPIs: suggestKPIs,
    suggestTeam: suggestTeam,
    suggestBudgetBreakdown: suggestBudgetBreakdown,
    suggestOKRs: suggestOKRs,
    findSimilar: findSimilar,
    suggestIdeaEnhancements: suggestIdeaEnhancements
  };

  console.log('🧠 Project Knowledge Base loaded — ' + Object.keys(SECTOR_KB).length + ' sectors');
})();

/* ========== smart-project-wizard.js ========== */
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

/* ========== project-classifier.js ========== */
/* ============================================================
   🗂️ project-classifier.js v2 — فرز ذكي + حذف تعاقبي
   ✅ لا يستبدل renderIdeas — يعمل كـ hook بعد العرض
   ✅ حذف أصحاب المصلحة مرتبط
   ✅ Progress Popup أثناء الحذف
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m, t||'info', d||2200); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function getSpace(){ return window.space || {ideas:[], projects:[], tasks:[], budget:[], stakeholders:[]}; }
  function save(){ if(window.saveSpace) window.saveSpace(); }
  function getLang(){ return window.i18n ? window.i18n.getLang() : 'ar'; }
  function pick(obj, base){
    if(getLang() === 'en' && obj[base+'En']) return obj[base+'En'];
    return obj[base] || '';
  }

  /* ============ Progress Popup ============ */
  var _busyEl = null;
  function showBusy(text){
    hideBusy();
    _busyEl = document.createElement('div');
    _busyEl.id = 'clsBusyPopup';
    _busyEl.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:9999;' +
      'background:var(--card);border:1px solid var(--cyan);border-radius:14px;padding:14px 22px;' +
      'display:flex;align-items:center;gap:12px;box-shadow:0 20px 60px rgba(0,0,0,.5),0 0 30px var(--glow);' +
      'animation:clsBusyIn .25s ease';
    _busyEl.innerHTML =
      '<div style="width:22px;height:22px;border:3px solid var(--border2);border-top-color:var(--cyan);border-radius:50%;animation:clsSpin .8s linear infinite"></div>' +
      '<div style="font-weight:700;font-size:.85rem">' + esc(text) + '</div>';
    /* إضافة الأنيميشن إن لم يكن موجود */
    if(!document.getElementById('clsBusyStyle')){
      var st = document.createElement('style');
      st.id = 'clsBusyStyle';
      st.textContent = '@keyframes clsSpin{to{transform:rotate(360deg)}}' +
        '@keyframes clsBusyIn{from{opacity:0;transform:translateX(-50%) translateY(20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
      document.head.appendChild(st);
    }
    document.body.appendChild(_busyEl);
  }
  function hideBusy(){
    if(_busyEl){ _busyEl.remove(); _busyEl = null; }
  }

  /* ============ ربط شامل ============ */
  function findProject(idea){
    var sp = getSpace();
    return (sp.projects || []).find(function(p){ return p.ideaId === idea.id || p.name === idea.name; });
  }

  function findRelated(project, idea){
    var sp = getSpace();
    var names = [project && project.name, idea && idea.name].filter(Boolean);
    var ids = [project && project.id, idea && idea.id].filter(Boolean);
    return {
      tasks: (sp.tasks || []).filter(function(t){
        return ids.indexOf(t.projectId) > -1 || names.indexOf(t.project) > -1;
      }),
      budget: (sp.budget || []).filter(function(b){
        if(ids.indexOf(b.projectId) > -1) return true;
        if(b.note && names.some(function(n){ return b.note.indexOf(n) > -1; })) return true;
        return false;
      }),
      stakeholders: (sp.stakeholders || []).filter(function(s){
        if(ids.indexOf(s.projectId) > -1) return true;
        if(names.indexOf(s.project) > -1) return true;
        return false;
      }),
      milestones: project ? (project.milestones || []) : [],
      risks: project ? (project.risks || []) : []
    };
  }

  /* ============ الحذف التعاقبي ============ */
  function cascadeDelete(ideaId, projectId){
    var sp = getSpace();
    var idea = ideaId ? (sp.ideas || []).find(function(x){ return x.id === ideaId; }) : null;
    var project = projectId
      ? (sp.projects || []).find(function(x){ return x.id === projectId; })
      : (idea ? findProject(idea) : null);

    if(!idea && !project){
      toast(tr('cls_not_found'), 'warn');
      return;
    }

    var related = findRelated(project, idea);
    var title = idea ? idea.name : project.name;

    /* بناء قائمة ما سيُحذف */
    var lines = [];
    if(idea) lines.push('💡 ' + tr('cls_will_delete_idea'));
    if(project) lines.push('💼 ' + tr('cls_will_delete_project'));
    if(related.milestones.length) lines.push('🎯 ' + related.milestones.length + ' ' + tr('ms_title'));
    if(related.tasks.length) lines.push('📝 ' + related.tasks.length + ' ' + tr('nav_tasks'));
    if(related.budget.length) lines.push('💰 ' + related.budget.length + ' ' + tr('nav_budget'));
    if(related.stakeholders.length) lines.push('👥 ' + related.stakeholders.length + ' ' + tr('nav_stakeholders'));
    if(related.risks.length) lines.push('⚠️ ' + related.risks.length + ' ' + tr('nav_risks'));

    var msg = tr('cls_delete_confirm') + '\n\n📌 ' + title + '\n\n' + lines.join('\n') + '\n\n' + tr('cls_cannot_undo');

    window.customConfirm(msg, function(){
      /* إظهار progress */
      showBusy(tr('cls_deleting') + ' "' + title + '"...');

      /* تأخير بسيط لإظهار البوب أب */
      setTimeout(function(){
        try{
          /* 1) المهام */
          if(related.tasks.length){
            var taskIds = related.tasks.map(function(t){ return t.id; });
            sp.tasks = sp.tasks.filter(function(t){ return taskIds.indexOf(t.id) === -1; });
          }
          /* 2) الميزانية */
          if(related.budget.length){
            var bIds = related.budget.map(function(b){ return b.id; });
            sp.budget = sp.budget.filter(function(b){ return bIds.indexOf(b.id) === -1; });
          }
          /* 3) أصحاب المصلحة */
          if(related.stakeholders.length){
            var sIds = related.stakeholders.map(function(s){ return s.id; });
            sp.stakeholders = sp.stakeholders.filter(function(s){ return sIds.indexOf(s.id) === -1; });
          }
          /* 4) المشروع */
          if(project){
            sp.projects = sp.projects.filter(function(p){ return p.id !== project.id; });
          }
          /* 5) الفكرة */
          if(idea){
            sp.ideas = sp.ideas.filter(function(x){ return x.id !== idea.id; });
          }

          save();
        }catch(e){
          console.error('Cascade delete error:', e);
        }

        /* إخفاء البوب أب */
        setTimeout(function(){
          hideBusy();
          toast(tr('cls_deleted'), 'success', 2500);

          /* إعادة رسم الشاشة الحالية */
          redrawCurrent();
        }, 350);
      }, 250);
    });
  }

  /* ============ إعادة الرسم ============ */
  function redrawCurrent(){
    var active = document.querySelector('.section.active');
    if(!active) return;
    var id = active.id;
    var fn = {
      ideas: window.renderIdeas,
      dashboard: window.renderDashboard,
      roadmap: window.renderRoadmap,
      stakeholders: window.renderStakeholders,
      tasks: window.renderTasks,
      budget: window.renderBudget,
      reports: window.renderInsights,
      milestones: window.renderMilestones,
      risks: window.renderRisks
    }[id];
    if(typeof fn === 'function'){
      try{ fn(); }catch(e){ console.error('redraw', id, e); }
    }
  }

  /* ============ شريط الفلاتر ============ */
  var view = {
    filterType: 'all',
    filterSector: 'all',
    search: '',
    sortBy: 'recent'
  };

  function loadView(){
    try{
      var v = JSON.parse(localStorage.getItem('bd_classifier_view') || 'null');
      if(v) view = Object.assign(view, v);
    }catch(e){}
  }
  function saveView(){
    try{ localStorage.setItem('bd_classifier_view', JSON.stringify(view)); }catch(e){}
  }

  /* ============ injectToolbar (تعمل مرة واحدة) ============ */
  function injectToolbar(){
    var ideasSection = document.getElementById('ideas');
    if(!ideasSection) return;
    if(ideasSection.querySelector('#clsToolbar')) {
      updateToolbarStats();
      return;
    }

    var controls = ideasSection.querySelector('.controls');
    if(!controls) return;

    var bar = document.createElement('div');
    bar.id = 'clsToolbar';
    bar.style.cssText = 'background:var(--card);border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:14px;display:flex;flex-direction:column;gap:10px';
    bar.innerHTML = '' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">' +
        '<input id="clsSearch" type="text" placeholder="' + tr('cls_search_ph') + '" ' +
          'style="flex:1;min-width:180px;background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:8px 12px;border-radius:9px;font-family:inherit;font-size:.82rem;outline:none">' +
        '<select id="clsFilterType" style="background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:8px 10px;border-radius:9px;font-family:inherit;font-size:.8rem;outline:none"></select>' +
        '<select id="clsFilterSector" style="background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:8px 10px;border-radius:9px;font-family:inherit;font-size:.8rem;outline:none"></select>' +
        '<select id="clsSortBy" style="background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:8px 10px;border-radius:9px;font-family:inherit;font-size:.8rem;outline:none"></select>' +
        '<button class="btn btn-sm btn-ghost" id="clsClear" title="' + tr('cls_clear') + '">✖️</button>' +
      '</div>' +
      '<div id="clsStats" style="font-size:.74rem;color:var(--muted);text-align:center"></div>';

    /* إدراج قبل الفلاتر الحالية */
    controls.parentNode.insertBefore(bar, controls.nextSibling);

    /* تعبئة selectors */
    fillSelectors();
    bindToolbarEvents();
    applyFiltersToCards();
  }

  function fillSelectors(){
    var types = window.IDEA_TYPES || {};
    var sectors = window.SECTORS_DB || {};

    var tSel = document.getElementById('clsFilterType');
    if(tSel){
      tSel.innerHTML = '<option value="all">' + tr('cls_all_types') + '</option>' +
        Object.keys(types).map(function(k){
          return '<option value="' + k + '"' + (view.filterType === k ? ' selected' : '') + '>' + types[k].icon + ' ' + pick(types[k], 'name') + '</option>';
        }).join('');
    }
    var sSel = document.getElementById('clsFilterSector');
    if(sSel){
      sSel.innerHTML = '<option value="all">' + tr('cls_all_sectors') + '</option>' +
        Object.keys(sectors).map(function(k){
          return '<option value="' + k + '"' + (view.filterSector === k ? ' selected' : '') + '>' + sectors[k].icon + ' ' + pick(sectors[k], 'name') + '</option>';
        }).join('');
    }
    var sortSel = document.getElementById('clsSortBy');
    if(sortSel){
      sortSel.innerHTML =
        '<option value="recent"' + (view.sortBy === 'recent' ? ' selected' : '') + '>' + tr('cls_sort_recent') + '</option>' +
        '<option value="name"' + (view.sortBy === 'name' ? ' selected' : '') + '>' + tr('cls_sort_name') + '</option>';
    }

    var search = document.getElementById('clsSearch');
    if(search && !search._bound) search.value = view.search || '';
  }

  function bindToolbarEvents(){
    var search = document.getElementById('clsSearch');
    if(search && !search._bound){
      search._bound = true;
      search.oninput = function(){
        view.search = search.value;
        saveView();
        applyFiltersToCards();
      };
    }
    var tSel = document.getElementById('clsFilterType');
    if(tSel && !tSel._bound){
      tSel._bound = true;
      tSel.onchange = function(){ view.filterType = tSel.value; saveView(); applyFiltersToCards(); };
    }
    var sSel = document.getElementById('clsFilterSector');
    if(sSel && !sSel._bound){
      sSel._bound = true;
      sSel.onchange = function(){ view.filterSector = sSel.value; saveView(); applyFiltersToCards(); };
    }
    var sortSel = document.getElementById('clsSortBy');
    if(sortSel && !sortSel._bound){
      sortSel._bound = true;
      sortSel.onchange = function(){ view.sortBy = sortSel.value; saveView(); applyFiltersToCards(); };
    }
    var clr = document.getElementById('clsClear');
    if(clr && !clr._bound){
      clr._bound = true;
      clr.onclick = function(){
        view = { filterType: 'all', filterSector: 'all', search: '', sortBy: 'recent' };
        saveView();
        fillSelectors();
        applyFiltersToCards();
      };
    }
  }

  /* ============ تطبيق الفلاتر على الكروت الموجودة ============ */
  function applyFiltersToCards(){
    var grid = document.getElementById('ideasGrid');
    if(!grid) return;

    var cards = grid.querySelectorAll('[data-idea-card]');
    var visible = 0;
    var total = cards.length;

    cards.forEach(function(card){
      var id = card.dataset.ideaCard;
      var sp = getSpace();
      var idea = (sp.ideas || []).find(function(x){ return x.id === id; });
      if(!idea){ card.style.display = 'none'; return; }

      var match = true;
      if(view.filterType !== 'all' && idea.type !== view.filterType) match = false;
      if(view.filterSector !== 'all' && idea.sector !== view.filterSector) match = false;
      if(view.search){
        var q = view.search.toLowerCase();
        var text = ((idea.name||'') + ' ' + (idea.description||'') + ' ' + (idea.problem||'')).toLowerCase();
        if(text.indexOf(q) === -1) match = false;
      }

      card.style.display = match ? '' : 'none';
      if(match) visible++;
    });

    /* إضافة زر الحذف التعاقبي لكل كارت ظاهر */
    cards.forEach(function(card){
      if(card.querySelector('[data-cls-cascade]')) return;
      var id = card.dataset.ideaCard;
      var actions = card.querySelector('div[style*="display:flex"][style*="gap"]');
      if(!actions) return;
      var btn = document.createElement('button');
      btn.className = 'btn btn-sm btn-danger';
      btn.dataset.clsCascade = id;
      btn.title = tr('cls_delete_all');
      btn.style.marginInlineStart = 'auto';
      btn.textContent = '🗑';
      btn.onclick = function(e){
        e.stopPropagation();
        cascadeDelete(id, null);
      };
      actions.appendChild(btn);
    });

    /* تحديث الإحصاء */
    var stats = document.getElementById('clsStats');
    if(stats){
      stats.innerHTML = '📊 ' + tr('cls_showing') + ' <b style="color:var(--cyan)">' + visible + '</b> ' + tr('cls_of') + ' ' + total;
    }
  }

  /* ============ Hook على switchTab ============ */
  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._classifierInstalled) return;
    window._classifierInstalled = true;
    loadView();

    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'ideas'){
        setTimeout(function(){
          injectToolbar();
          applyFiltersToCards();
        }, 180);
      }
      return r;
    };

    /* hook على renderIdeas الأصلي */
    if(typeof window.renderIdeas === 'function' && !window._clsRenderHook){
      window._clsRenderHook = true;
      var origRender = window.renderIdeas;
      window.renderIdeas = function(){
        var r = origRender.apply(this, arguments);
        setTimeout(function(){
          injectToolbar();
          applyFiltersToCards();
        }, 60);
        return r;
      };
    }
  }

  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'ideas'){
      setTimeout(function(){
        /* إعادة بناء الـ toolbar باللغة الجديدة */
        var bar = document.getElementById('clsToolbar');
        if(bar) bar.remove();
        injectToolbar();
        applyFiltersToCards();
      }, 150);
    }
  });

  window.renderClassifier = function(){ injectToolbar(); applyFiltersToCards(); };
  window.cascadeDeleteIdea = function(id){ cascadeDelete(id, null); };
  window.cascadeDeleteProject = function(id){ cascadeDelete(null, id); };
  window.clsShowBusy = showBusy;
  window.clsHideBusy = hideBusy;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();

  console.log('🗂️ Classifier v2 loaded (light)');
})();

/* ========== demo-project.js ========== */
/* ============================================================
   🎬 demo-project.js — إنشاء مشروع افتراضي كامل
   يولّد كل شيء: فكرة، مشروع، استراتيجية، أثر، مراحل، مخاطر،
   مهام، ميزانية، مبيعات، أصحاب مصلحة — مع عرض تقدّم خطوة بخطوة
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m, t||'info', d||2200); }
  function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
  function getSpace(){ return window.space || null; }
  function save(){ if(window.saveSpace) window.saveSpace(); }
  function daysFromNow(n){ 
    var d = new Date(); d.setDate(d.getDate() + n); 
    return d.toISOString().slice(0,10); 
  }

  /* ============ البيانات الكاملة للمشروع الافتراضي ============ */
  function buildDemoData(){
    var today = new Date().toISOString().slice(0,10);
    return {
      idea: {
        name: 'منصة الزراعة الذكية المستدامة — قطر',
        description: 'منصة IoT + AI لإدارة المزارع المائية (Hydroponics) في قطر، توفر 40% من المياه وترفع الإنتاجية 60% عبر الاستشعار الذكي والتحليلات التنبؤية.',
        type: 'startup',
        sector: 'agriculture',
        country: 'QA',
        problem: 'تستهلك الزراعة القطرية ~70% من المياه العذبة بينما تُستورد 90% من الغذاء، مع ندرة مائية حادة (أقل من 100 م³/فرد/سنة).',
        solution: 'نظام استشعار IoT + محرك AI للري الدقيق، مع لوحة تحكم بالعربية، وتقارير استدامة آلية (SDG 2, 6, 7, 12, 13).'
      },
      project: {
        stage: 'design',
        strategy: {
          swot: {
            strengths: [
              'فريق تقني + زراعي متكامل بخبرة 8 سنوات',
              'شراكة مع جامعة قطر وQatar Foundation',
              'منتج مُحلي يتوافق مع رؤية قطر 2030',
              'براءة اختراع مبدئية في خوارزمية الري الدقيق'
            ],
            weaknesses: [
              'رأس المال الأولي محدود (500K QAR فقط)',
              'لا يوجد سجل تجاري بعد',
              'اعتماد على موردين أجانب للحساسات',
              'قاعدة عملاء أولية صغيرة'
            ],
            opportunities: [
              'دعم حكومي عبر صندوق قطر للتنمية (QFFD)',
              'برنامج قطر الوطني للأمن الغذائي 2024-2030',
              'سوق المزارع المائية في الخليج ينمو 18% سنوياً',
              'اهتمام متزايد بـ ESG من المستثمرين'
            ],
            threats: [
              'منافسون دوليون (إسرائيل، هولندا) بتقنيات ناضجة',
              'تقلب أسعار الحساسات والتوريد',
              'تحديات تنظيمية في تصاريح الزراعة',
              'تغير المناخ وتأثيره على دورة المياه'
            ]
          },
          pestel: {
            political: 'دعم حكومي قوي عبر رؤية قطر 2030 وبرنامج الأمن الغذائي، استقرار سياسي، علاقات دولية جيدة.',
            economic: 'اقتصاد متنوع، ناتج محلي مرتفع، تمويل متاح من QDB وQFC، لكن تضخم عالمي يؤثر على التوريد.',
            social: 'وعي متزايد بالاستدامة، شغف بالتقنية، شباب مؤهل، لكن قلة خبرة في الزراعة المائية.',
            technological: 'بنية تحتية 5G ممتازة، حوسبة سحابية محلية، لكن مواهب AI شحيحة.',
            environmental: 'ندرة مائية حادة، حرارة مرتفعة، رؤية 2030 للاستدامة البيئية.',
            legal: 'قانون الشركات 11/2015، QFC للملكية الأجنبية 100%، قوانين صارمة للمياه.'
          },
          okrs: [
            {
              objective: 'إطلاق MVP وتشغيل أول 5 مزارع تجريبية',
              keyResults: [
                {name: 'توقيع عقود مع 5 مزارع', progress: 40},
                {name: 'توفير 30% من المياه في كل مزرعة', progress: 25},
                {name: 'رضا العملاء ≥ 4.5/5', progress: 0}
              ]
            },
            {
              objective: 'بناء شراكات استراتيجية ومصادر تمويل',
              keyResults: [
                {name: 'الحصول على منحة QFFD', progress: 60},
                {name: 'شراكة مع جامعة قطر', progress: 100},
                {name: 'انضمام مستشار زراعي', progress: 100}
              ]
            }
          ]
        },
        impact: {
          sdg: [2, 6, 7, 8, 12, 13],
          p5: { people: 75, planet: 85, prosperity: 70, process: 65, product: 80 },
          esg: { e: 85, s: 72, g: 68 }
        },
        milestones: [
          { title: 'دراسة الجدوى والتحقق من السوق',   start: daysFromNow(-30), end: daysFromNow(-10), status: 'completed',   progress: 100, owner: 'CEO',       notes: 'تحققنا من 15 مزرعة، 12 أبدت اهتماماً.' },
          { title: 'تصميم النظام والمعمارية التقنية', start: daysFromNow(-9),  end: daysFromNow(20),  status: 'in-progress', progress: 55,  owner: 'CTO',       notes: 'اخترنا 3 موردين، جاري تصميم الـAI Model.' },
          { title: 'بناء MVP + 3 نماذج أولية',         start: daysFromNow(15),  end: daysFromNow(75),  status: 'not-started', progress: 0,   owner: 'Dev Team',  notes: 'الموعد المستهدف: نهاية الربع.' },
          { title: 'التشغيل التجريبي في 5 مزارع',      start: daysFromNow(70),  end: daysFromNow(130), status: 'not-started', progress: 0,   owner: 'Ops',       notes: 'مزارع الريان، الوكرة، الشمال.' },
          { title: 'التسليم النهائي والتوثيق',         start: daysFromNow(125), end: daysFromNow(150), status: 'not-started', progress: 0,   owner: 'PM',        notes: 'مع شهادات استدامة GPM.' },
          { title: 'قياس الأثر وإصدار تقرير SDG',      start: daysFromNow(145), end: daysFromNow(180), status: 'not-started', progress: 0,   owner: 'Impact Lead', notes: 'تقرير ESG متوافق مع GRI.' }
        ],
        risks: [
          { title: 'تأخر تصاريح الزراعة من البلدية', category: 'legal',       probability: 4, impact: 4, status: 'mitigating', mitigation: 'استشار قانوني متخصص + تواصل مبكر مع البلدية', owner: 'Legal' },
          { title: 'نقص المواهب في AI الزراعي',      category: 'operational', probability: 3, impact: 4, status: 'open',       mitigation: 'شراكة مع جامعة قطر + برنامج تدريب', owner: 'HR' },
          { title: 'تجاوز الميزانية بنسبة 20%',       category: 'financial',   probability: 3, impact: 3, status: 'mitigating', mitigation: 'احتياطي 15% + مراجعة شهرية', owner: 'CFO' },
          { title: 'منافسة سعرية من لاعب دولي',       category: 'market',      probability: 3, impact: 4, status: 'open',       mitigation: 'التميز بالمحلية + خدمة بالعربية', owner: 'Sales' },
          { title: 'ضعف إثبات الأثر البيئي',          category: 'esg',         probability: 2, impact: 5, status: 'mitigating', mitigation: 'قياس منهجي من اليوم الأول + طرف ثالث', owner: 'Impact' }
        ]
      },
      tasks: [
        { title: 'إنهاء نموذج AI للري الدقيق',       due: daysFromNow(20),  project: 'منصة الزراعة الذكية المستدامة — قطر' },
        { title: 'اجتماع مع وزارة البلدية للتصاريح', due: daysFromNow(5),   project: 'منصة الزراعة الذكية المستدامة — قطر' },
        { title: 'اختيار 3 موردين للحساسات',         due: daysFromNow(12),  project: 'منصة الزراعة الذكية المستدامة — قطر' },
        { title: 'كتابة عرض QFFD للمنحة',            due: daysFromNow(8),   project: 'منصة الزراعة الذكية المستدامة — قطر' },
        { title: 'تصميم لوحة التحكم بالعربية',       due: daysFromNow(25),  project: 'منصة الزراعة الذكية المستدامة — قطر' },
        { title: 'توقيع عقد أول مزرعة تجريبية',      due: daysFromNow(30),  project: 'منصة الزراعة الذكية المستدامة — قطر' },
        { title: 'بناء بروتوكول قياس الأثر (SDG)',   due: daysFromNow(18),  project: 'منصة الزراعة الذكية المستدامة — قطر' },
        { title: 'تجهيز Pitch Deck للمستثمرين',      due: daysFromNow(22),  project: 'منصة الزراعة الذكية المستدامة — قطر' }
      ],
      stakeholders: [
        { name: 'د. محمد الكواري',    role: 'مستشار زراعي',      org: 'وزارة البلدية',         contact: 'm.alkuwari@municipality.gov.qa' },
        { name: 'م. سارة العبدالله',  role: 'مديرة الابتكار',    org: 'Qatar Foundation',      contact: 's.alabdullah@qf.org.qa' },
        { name: 'أ. خالد المري',      role: 'مدير مزرعة',        org: 'مزارع الريان',          contact: '+974-5555-1234' },
        { name: 'م. فاطمة الهاجري',   role: 'مهندسة IoT',        org: 'Ooredoo Business',      contact: 'f.alhajri@ooredoo.qa' },
        { name: 'د. أحمد النعيمي',    role: 'أستاذ AI زراعي',    org: 'جامعة قطر',             contact: 'a.alnaimi@qu.edu.qa' }
      ],
      budget: [
        { type:'income',  category:'grant',      amount: 250000, date: daysFromNow(-5),  note: 'منحة QFFD — دفعة أولى' },
        { type:'income',  category:'investment', amount: 150000, date: daysFromNow(30),  note: 'استثمار مبدئي من مستثمر ملائكي' },
        { type:'expense', category:'rnd',        amount: 120000, date: daysFromNow(-20), note: 'تطوير AI + حساسات' },
        { type:'expense', category:'salaries',   amount: 90000,  date: daysFromNow(-15), note: 'رواتب الفريق — 3 أشهر' },
        { type:'expense', category:'legal',      amount: 25000,  date: daysFromNow(-10), note: 'تصاريح + تأسيس' },
        { type:'expense', category:'marketing',  amount: 30000,  date: daysFromNow(20),  note: 'حملة إطلاق MVP' }
      ],
      deals: [
        {
          client: 'مزارع الريان', project: 'تركيب نظام IoT كامل',
          value: 85000, currency: 'QAR', stage: 'negotiation',
          notes: 'عرض تقني مُسلّم، بانتظار موافقة الإدارة.',
          meddic: {
            metrics: 'توفير 40% مياه = 60K QAR سنوياً',
            economicBuyer: 'مدير المزرعة + المدير المالي',
            decisionCriteria: 'السعر، الصيانة، دعم بالعربية',
            decisionProcess: 'لجنة شراء داخلية — 3 أسابيع',
            identifyPain: 'فاتورة مياه 150K QAR سنوياً',
            champion: 'م. خالد المري (مهندس الزراعة)'
          }
        },
        {
          client: 'مجموعة الشمال الزراعية', project: 'اشتراك سنوي SaaS',
          value: 120000, currency: 'QAR', stage: 'proposal',
          notes: 'بانتظار موافقة على العرض المالي.',
          meddic: {
            metrics: 'زيادة إنتاجية 60%', economicBuyer: 'الرئيس التنفيذي',
            decisionCriteria: 'ROI، تقارير ESG', decisionProcess: 'CEO مباشر',
            identifyPain: 'ضغط حكومي لتحسين الكفاءة', champion: 'مدير العمليات'
          }
        },
        {
          client: 'شركة الديار الزراعية', project: 'استشارة + إطلاق مشروع',
          value: 45000, currency: 'QAR', stage: 'qualified',
          notes: 'اجتماع أول ناجح، بانتظار إعداد العرض.',
          meddic: { metrics: 'توفير 25% في السنة الأولى', economicBuyer: 'غير محدد بعد' }
        }
      ]
    };
  }

  /* ============ شريط التقدم ============ */
  function showProgressModal(){
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    bd.id = 'demoModalBackdrop';
    bd.innerHTML =
      '<div class="modal" style="max-width:520px">' +
        '<h3 style="text-align:center;margin-bottom:6px">🎬 إنشاء مشروع افتراضي</h3>' +
        '<p style="text-align:center;color:var(--muted);font-size:.82rem;margin-bottom:18px">' +
          'سنقوم بإنشاء مشروع واقعي كامل مع كل البيانات لكل مرحلة.' +
        '</p>' +
        '<div style="height:8px;background:var(--bg2);border-radius:8px;overflow:hidden;margin-bottom:16px">' +
          '<div id="demoProgressBar" style="height:100%;width:0%;background:var(--grad);transition:width .4s ease"></div>' +
        '</div>' +
        '<div id="demoSteps" style="display:flex;flex-direction:column;gap:6px;max-height:340px;overflow-y:auto;font-size:.82rem"></div>' +
        '<div class="modal-actions" style="justify-content:center;margin-top:18px">' +
          '<button class="btn btn-sm btn-ghost" id="demoCloseBtn">إغلاق</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(bd);
    bd.querySelector('#demoCloseBtn').onclick = function(){ bd.remove(); };
    return bd;
  }

  function addStep(bd, text, icon){
    var steps = bd.querySelector('#demoSteps');
    if(!steps) return;
    var div = document.createElement('div');
    div.style.cssText = 'display:flex;gap:10px;align-items:center;padding:8px 10px;background:var(--bg2);border-radius:8px;animation:childIn .3s';
    div.innerHTML = '<span style="font-size:1.1rem">' + (icon || '✅') + '</span><span style="flex:1">' + text + '</span>';
    steps.appendChild(div);
    steps.scrollTop = steps.scrollHeight;
  }

  function setProgress(bd, pct){
    var bar = bd.querySelector('#demoProgressBar');
    if(bar) bar.style.width = pct + '%';
  }

  /* ============ المعالج الرئيسي ============ */
  async function runDemoWizard(){
    var sp = getSpace();
    if(!sp){
      toast('⚠️ لم يتم تحميل البيانات بعد', 'warn');
      return;
    }

    var demo = buildDemoData();
    var projectId = uid();
    var ideaId = uid();

    var bd = showProgressModal();
    var step = 0;
    var totalSteps = 10;

    function advance(icon, label, delay){
      step++;
      setProgress(bd, Math.round((step / totalSteps) * 100));
      addStep(bd, label, icon);
      return new Promise(function(r){ setTimeout(r, delay || 450); });
    }

    // 1) الفكرة
    await advance('💡', 'إنشاء الفكرة: ' + demo.idea.name);
    if(!Array.isArray(sp.ideas)) sp.ideas = [];
    sp.ideas.push(Object.assign({ id: ideaId, createdAt: new Date().toISOString() }, demo.idea));
    save();

    // 2) المشروع
    await advance('💼', 'تحويل الفكرة إلى مشروع نشط');
    if(!Array.isArray(sp.projects)) sp.projects = [];
    sp.projects.push({
      id: projectId,
      name: demo.idea.name,
      description: demo.idea.description,
      sector: demo.idea.sector,
      country: demo.idea.country,
      stage: demo.project.stage,
      ideaId: ideaId,
      createdAt: new Date().toISOString(),
      strategy: demo.project.strategy,
      impact: demo.project.impact,
      milestones: demo.project.milestones.map(function(m){ return Object.assign({ id: uid() }, m); }),
      risks: demo.project.risks.map(function(r){ return Object.assign({ id: uid(), createdAt: new Date().toISOString() }, r); }),
      tasks: []
    });
    save();

    // 3) الاستراتيجية
    await advance('🎯', 'بناء SWOT + PESTEL + OKRs (2 أهداف، 6 نتائج)');
    await advance('📈', 'قياس الأثر: 6 SDG + P5 + ESG');

    // 4) المهام
    await advance('📝', 'إضافة ' + demo.tasks.length + ' مهام موزّعة على المراحل');
    if(!Array.isArray(sp.tasks)) sp.tasks = [];
    demo.tasks.forEach(function(t){
      sp.tasks.push({
        id: uid(), done: false,
        title: t.title, project: t.project, due: t.due
      });
    });
    save();

    // 5) أصحاب المصلحة
    await advance('👥', 'إضافة ' + demo.stakeholders.length + ' أصحاب مصلحة');
    if(!Array.isArray(sp.stakeholders)) sp.stakeholders = [];
    demo.stakeholders.forEach(function(s){
      sp.stakeholders.push(Object.assign({ id: uid() }, s));
    });
    save();

    // 6) الميزانية
    await advance('💰', 'الميزانية: 6 بنود (400K دخل · 265K مصروف)');
    if(!Array.isArray(sp.budget)) sp.budget = [];
    demo.budget.forEach(function(b){
      sp.budget.push(Object.assign({ id: uid() }, b));
    });
    save();

    // 7) المبيعات
    await advance('💼', 'قمع المبيعات: 3 فرص + MEDDIC مُكتمل');
    if(!Array.isArray(sp.salesPipeline)) sp.salesPipeline = [];
    demo.deals.forEach(function(d){
      sp.salesPipeline.push(Object.assign({ id: uid(), createdAt: new Date().toISOString() }, d));
    });
    save();

    // 8) ربط المهام بالمشروع
    await advance('🔗', 'ربط المهام بمراحل PRiSM');
    var proj = sp.projects.find(function(p){ return p.id === projectId; });
    if(proj){
      proj.tasks = demo.project.milestones.slice(0, 3).map(function(m){
        return { id: uid(), title: m.title, stage: m.title.indexOf('تصميم') > -1 ? 'design' : (m.title.indexOf('بناء') > -1 ? 'build' : 'pre-project'), done: m.progress === 100 };
      });
    }
    save();

    // 9) التقارير
    await advance('📊', 'توليد التقارير والتحليلات');

    // 10) اكتمل
    await advance('🎉', 'اكتمل! المشروع جاهز للاستعراض', 800);

    // عرض الملخص
    setTimeout(function(){ 
      bd.remove(); 
      showSummary(proj, demo);
    }, 700);
  }

  /* ============ ملخص المشروع ============ */
  function showSummary(project, demo){
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
    var stages = window.PRISM_STAGES || {};
    var msList = (project.milestones || []).map(function(m){
      var st = m.status;
      var color = st === 'completed' ? 'var(--green)' : st === 'in-progress' ? 'var(--cyan)' : 'var(--muted)';
      return '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);font-size:.8rem">' +
        '<span>' + m.title + '</span>' +
        '<span style="color:' + color + ';font-weight:700">' + (m.progress || 0) + '%</span></div>';
    }).join('');

    var riskList = (project.risks || []).slice(0,3).map(function(r){
      var sev = (r.probability||0) * (r.impact||0);
      var color = sev > 15 ? 'var(--red)' : sev > 9 ? 'var(--amber)' : 'var(--green)';
      return '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);font-size:.8rem">' +
        '<span>⚠️ ' + r.title + '</span>' +
        '<span style="color:' + color + ';font-weight:700">P×I=' + sev + '</span></div>';
    }).join('');

    bd.innerHTML =
      '<div class="modal" style="max-width:620px">' +
        '<div style="text-align:center;margin-bottom:16px">' +
          '<div style="font-size:3rem">🎉</div>' +
          '<h3 style="color:var(--cyan);margin:6px 0">تم إنشاء المشروع بنجاح!</h3>' +
          '<p style="color:var(--muted);font-size:.82rem">' + project.name + '</p>' +
        '</div>' +

        '<div class="grid grid-4" style="margin-bottom:16px">' +
          '<div class="stat"><div class="ic">🎯</div><div><div class="v">6</div><div class="l">مراحل</div></div></div>' +
          '<div class="stat"><div class="ic">⚠️</div><div><div class="v">' + project.risks.length + '</div><div class="l">مخاطر</div></div></div>' +
          '<div class="stat"><div class="ic">📝</div><div><div class="v">' + demo.tasks.length + '</div><div class="l">مهام</div></div></div>' +
          '<div class="stat"><div class="ic">💼</div><div><div class="v">3</div><div class="l">فرص بيعية</div></div></div>' +
        '</div>' +

        '<div style="padding:12px;background:var(--bg2);border-radius:10px;margin-bottom:12px">' +
          '<div style="font-weight:800;color:var(--cyan);font-size:.85rem;margin-bottom:8px">🗺️ مراحل PRiSM</div>' +
          msList +
        '</div>' +

        '<div style="padding:12px;background:var(--bg2);border-radius:10px;margin-bottom:12px">' +
          '<div style="font-weight:800;color:var(--amber);font-size:.85rem;margin-bottom:8px">⚠️ أعلى 3 مخاطر</div>' +
          riskList +
        '</div>' +

        '<div style="padding:12px;background:linear-gradient(135deg,rgba(34,211,238,.08),rgba(167,139,250,.08));border-radius:10px;font-size:.82rem;line-height:1.7">' +
          '<b>💡 جرّب الآن:</b><br>' +
          '• افتح <b>خريطة الطريق</b> ← اختر المشروع<br>' +
          '• افتح <b>المعالم الزمنية</b> ← شاهد Gantt<br>' +
          '• افتح <b>سجل المخاطر</b> ← مصفوفة 5×5<br>' +
          '• افتح <b>التقارير</b> ← تحليلات كاملة<br>' +
          '• افتح <b>المبيعات</b> ← MEDDIC مُكتمل' +
        '</div>' +

        '<div class="modal-actions" style="justify-content:center;margin-top:16px">' +
          '<button class="btn btn-ghost" id="demoGoDashboard">📊 لوحة التحكم</button>' +
          '<button class="btn" id="demoGoRoadmap">🗺️ افتح المشروع</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(bd);

    bd.querySelector('#demoGoDashboard').onclick = function(){
      bd.remove();
      if(window.switchTab) window.switchTab('dashboard');
      if(window.renderDashboard) window.renderDashboard();
    };
    bd.querySelector('#demoGoRoadmap').onclick = function(){
      bd.remove();
      if(window.switchTab) window.switchTab('roadmap');
    };
    bd.onclick = function(e){ if(e.target === bd) bd.remove(); };
  }

  /* ============ الزر في لوحة التحكم ============ */
  function injectDemoButton(){
    var dash = document.getElementById('dashboard');
    if(!dash || dash.querySelector('#demoProjectCard')) return;
    var head = dash.querySelector('.page-head');
    if(!head) return;

    var card = document.createElement('div');
    card.id = 'demoProjectCard';
    card.style.cssText = 'background:linear-gradient(135deg,rgba(34,211,238,.10),rgba(167,139,250,.10));border:1px dashed var(--glow);border-radius:14px;padding:16px 18px;margin-bottom:16px;display:flex;align-items:center;gap:14px;flex-wrap:wrap';
    card.innerHTML =
      '<div style="font-size:2rem">🎬</div>' +
      '<div style="flex:1;min-width:200px">' +
        '<div style="font-weight:800;font-size:.95rem">إنشاء مشروع افتراضي كامل</div>' +
        '<div style="font-size:.78rem;color:var(--muted);margin-top:2px">تجربة شاملة: فكرة + استراتيجية + مراحل + مخاطر + ميزانية + مبيعات + تقارير</div>' +
      '</div>' +
      '<button class="btn" id="demoProjectBtn" style="white-space:nowrap">🚀 ابدأ التجربة</button>';
    head.parentNode.insertBefore(card, head.nextSibling);

    card.querySelector('#demoProjectBtn').onclick = function(){
      runDemoWizard();
    };
  }

  /* ============ ربط ============ */
  window.runDemoWizard = runDemoWizard;
  window.injectDemoButton = injectDemoButton;

  function install(){
    injectDemoButton();
    // أعد الزر عند كل render للـ dashboard
    if(typeof window.renderDashboard === 'function' && !window._demoHooked){
      window._demoHooked = true;
      var orig = window.renderDashboard;
      window.renderDashboard = function(){
        var r = orig.apply(this, arguments);
        setTimeout(injectDemoButton, 50);
        return r;
      };
    }
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(install, 800); });
  else setTimeout(install, 800);

  console.log('🎬 Demo Project module loaded');
})();
