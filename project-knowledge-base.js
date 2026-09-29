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