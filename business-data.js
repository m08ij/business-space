/* ============================================================
   💼 business-data.js — قاعدة البيانات الشاملة
   الأطر + الدول + القطاعات + SDG + ESG + القيادة + المبيعات
   ============================================================ */

/* ========== 1. أطر التخطيط والاستراتيجية ========== */
var FRAMEWORKS_DB = {
  "SWOT": {
    code:"STR-001", t:"strategic", icon:"🎯",
    title:"تحليل SWOT", titleEn:"SWOT Analysis",
    desc:"تحليل نقاط القوة والضعف والفرص والتهديدات",
    when:"بداية أي مشروع أو مراجعة استراتيجية",
    steps:["قوّتك الداخلية","ضعفك الداخلي","الفرص الخارجية","التهديدات الخارجية"],
    outputs:["مصفوفة 4 مربعات","خطة عمل"],
    source:"Harvard Business School"
  },
  "PESTEL": {
    code:"STR-002", t:"strategic", icon:"🌍",
    title:"تحليل PESTEL", titleEn:"PESTEL Analysis",
    desc:"تحليل البيئة الخارجية الكلية: سياسية، اقتصادية، اجتماعية، تكنولوجية، بيئية، قانونية",
    when:"دراسة سوق جديد أو دخول قطاع",
    steps:["Political — سياسي","Economic — اقتصادي","Social — اجتماعي","Technological — تكنولوجي","Environmental — بيئي","Legal — قانوني"],
    source:"Francis Aguilar (1967)"
  },
  "OKRs": {
    code:"STR-003", t:"execution", icon:"🎯",
    title:"الأهداف والنتائج الرئيسية", titleEn:"OKRs",
    desc:"نظام أهداف قابل للقياس — Objectives عريضة + Key Results قابلة للقياس",
    when:"بداية ربع أو سنة",
    source:"John Doerr / Intel"
  },
  "BSC": {
    code:"STR-004", t:"performance", icon:"📊",
    title:"بطاقة الأداء المتوازن", titleEn:"Balanced Scorecard",
    desc:"4 منظورات: مالي، عميل، عمليات داخلية، تعلم ونمو",
    source:"Kaplan & Norton"
  },
  "Theory of Change": {
    code:"IMP-001", t:"impact", icon:"🌱",
    title:"نظرية التغيير", titleEn:"Theory of Change",
    desc:"رسم مسار التغيير: مدخلات ← أنشطة ← مخرجات ← نتائج ← أثر",
    when:"تخطيط مشاريع التنمية والأثر الاجتماعي",
    source:"Aspen Institute"
  },
  "Business Model Canvas": {
    code:"IDEA-001", t:"business", icon:"📋",
    title:"نموذج العمل التجاري", titleEn:"Business Model Canvas",
    desc:"9 كتل: العملاء، القيمة، القنوات، العلاقات، الإيرادات، الموارد، الأنشطة، الشراكات، التكاليف",
    source:"Osterwalder & Pigneur"
  },
  "Lean Canvas": {
    code:"IDEA-002", t:"business", icon:"⚡",
    title:"الكانفاس الرشيق", titleEn:"Lean Canvas",
    desc:"نسخة معدّلة للشركات الناشئة — تركز على المشكلة والحل والمقاييس والميزة غير العادلة",
    source:"Ash Maurya"
  },
  "Value Proposition Canvas": {
    code:"IDEA-003", t:"business", icon:"💎",
    title:"كانفاس القيمة المقترحة", titleEn:"Value Proposition Canvas",
    desc:"ربط آلام العملاء ومكاسبهم بحلولك",
    source:"Osterwalder"
  },
  "P5 Standard": {
    code:"SUS-001", t:"sustainability", icon:"♻️",
    title:"معيار P5 للاستدامة", titleEn:"GPM P5 Standard",
    desc:"5 محاور: People, Planet, Prosperity, Process, Product",
    when:"إدارة المشاريع المستدامة",
    source:"GPM Global — الإصدار 4.0"
  },
  "PRiSM": {
    code:"SUS-002", t:"sustainability", icon:"🔄",
    title:"دورة حياة PRiSM", titleEn:"Projects Integrating Sustainable Methods",
    desc:"6 مراحل: ما قبل المشروع → التصميم → البناء → التشغيل → الإغلاق → تحقيق المنفعة",
    source:"GPM Global"
  },
  "S-EPM": {
    code:"SUS-003", t:"sustainability", icon:"🌿",
    title:"إدارة المشاريع الريادية المستدامة", titleEn:"S-EPM",
    desc:"إطار يجمع الريادة + الاستدامة + إدارة المشاريع",
    source:"Springer (2026)"
  },
  "COM-B": {
    code:"LEAD-001", t:"leadership", icon:"🧠",
    title:"نموذج COM-B للسلوك", titleEn:"COM-B Model",
    desc:"Capability + Opportunity + Motivation → Behavior",
    source:"Michie et al."
  },
  "Situational Leadership": {
    code:"LEAD-002", t:"leadership", icon:"👥",
    title:"القيادة الموقفية", titleEn:"Situational Leadership",
    desc:"4 أنماط: Telling, Selling, Participating, Delegating — حسب نضج الفريق",
    source:"Hersey & Blanchard"
  },
  "Transformational Leadership": {
    code:"LEAD-003", t:"leadership", icon:"✨",
    title:"القيادة التحويلية", titleEn:"Transformational Leadership",
    desc:"إلهام برؤية، تحفيز فكري، اعتبار فردي، تأثير مثالي",
    source:"Burns / Bass"
  },
  "MEDDIC": {
    code:"SALES-001", t:"sales", icon:"🎯",
    title:"إطار MEDDIC", titleEn:"MEDDIC",
    desc:"Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion",
    when:"مبيعات B2B معقدة",
    source:"Jack Napoli"
  },
  "SPIN Selling": {
    code:"SALES-002", t:"sales", icon:"💬",
    title:"بيع SPIN", titleEn:"SPIN Selling",
    desc:"Situation, Problem, Implication, Need-Payoff — أسئلة بيعية متسلسلة",
    source:"Neil Rackham"
  },
  "Challenger Sale": {
    code:"SALES-003", t:"sales", icon:"🔥",
    title:"البيع التحدّي", titleEn:"Challenger Sale",
    desc:"Teach, Tailor, Take Control — البائع المُعلّم",
    source:"Dixon & Adamson"
  },
  "Value Selling": {
    code:"SALES-004", t:"sales", icon:"💰",
    title:"البيع بالقيمة", titleEn:"Value Selling",
    desc:"التركيز على ROI والقيمة المضافة بدل السعر",
    source:"RAIN Group"
  }
};

/* ========== 2. الدول ========== */
var COUNTRIES_DB = {
  "QA": {
    name:"قطر", nameEn:"Qatar", flag:"🇶🇦", region:"MENA", currency:"QAR",
    esgScore:52.1, esgRank:58, sdgIndex:75.2, sdgRank:55,
    keySectors:["غاز","مالية","سياحة","تقنية","تعليم","لوجستيات"],
    businessCulture:"رسمي، شراكات محلية ضرورية، احترام التسلسل الهرمي، العلاقات مهمة",
    legalNotes:"قانون الشركات 11/2015، مركز قطر للمال QFC، ملكية أجنبية تصل 100% في بعض القطاعات",
    sustainabilityFocus:["استدامة المونديال","طاقة نظيفة","تنويع اقتصادي","رؤية قطر 2030"],
    incentives:["QFC للشركات الأجنبية","صناديق سيادية","منطقة حرة بميناء حمد"],
    sdgPriorities:[7,8,9,17],
    vision:"رؤية قطر الوطنية 2030 — تنويع اقتصادي وبيئي واجتماعي"
  },
  "AE": {
    name:"الإمارات", nameEn:"UAE", flag:"🇦🇪", region:"MENA", currency:"AED",
    esgScore:58.3, esgRank:48, sdgIndex:79.4, sdgRank:35,
    keySectors:["تقنية","لوجستيات","طاقة","سياحة","فضاء","ذكاء اصطناعي"],
    businessCulture:"رسمي، شراكات محلية، احترام التسلسل، سرعة إنجاز",
    legalNotes:"مناطق حرة 100% ملكية أجنبية، ضريبة شركات 9%، قانون الشركات التجارية 2021",
    sustainabilityFocus:["استدامة","طاقة نظيفة","ذكاء اصطناعي","مئوية الإمارات 2071"],
    incentives:["إعفاءات المناطق الحرة","صناديق ابتكار","استراتيجية 2031"],
    sdgPriorities:[7,8,9,11],
    vision:"مئوية الإمارات 2071"
  },
  "SA": {
    name:"السعودية", nameEn:"Saudi Arabia", flag:"🇸🇦", region:"MENA", currency:"SAR",
    esgScore:30.6, esgRank:120, sdgIndex:72.5, sdgRank:65,
    keySectors:["طاقة","تقنية","سياحة","ترفيه","صحة","صناعة"],
    businessCulture:"علاقات، وساطة، احترام الشريعة، قرارات جماعية",
    legalNotes:"نظام الشركات الجديد 2022، هيئة السوق المالية، رؤية 2030",
    sustainabilityFocus:["تنويع اقتصادي","طاقة متجددة","تمكين المرأة","نيوم"],
    incentives:["صندوق الاستثمارات العامة","برامج رؤية 2030","مناطق اقتصادية خاصة"],
    sdgPriorities:[7,8,9,5],
    vision:"رؤية السعودية 2030"
  },
  "JO": {
    name:"الأردن", nameEn:"Jordan", flag:"🇯🇴", region:"MENA", currency:"JOD",
    esgScore:42.5, esgRank:85, sdgIndex:68.2, sdgRank:82,
    keySectors:["تقنية","سياحة","طاقة متجددة","تعليم","صحة"],
    businessCulture:"علاقات شخصية قوية، قرارات جماعية، أهمية الوسطاء",
    legalNotes:"قانون الشركات 22/1997، هيئة تشجيع الاستثمار، مناطق تنموية",
    sustainabilityFocus:["طاقة شمسية","إدارة مياه","توظيف شباب"],
    incentives:["إعفاءات ضريبية للمناطق التنموية","صناديق دعم ريادة"],
    sdgPriorities:[4,8,9,17],
    vision:"رؤية الأردن 2025"
  },
  "EG": {
    name:"مصر", nameEn:"Egypt", flag:"🇪🇬", region:"MENA", currency:"EGP",
    esgScore:22.7, esgRank:145, sdgIndex:68.8, sdgRank:80,
    keySectors:["زراعة","تصنيع","سياحة","تقنية","تعليم"],
    businessCulture:"بيروقراطية، علاقات، مرونة في التفاوض",
    legalNotes:"قانون الاستثمار 72/2017، هيئة الرقابة المالية",
    sustainabilityFocus:["زراعة مستدامة","تحلية مياه","مشروعات صغيرة"],
    incentives:["مناطق اقتصادية","صندوق تحيا مصر"],
    sdgPriorities:[2,6,8,9],
    vision:"رؤية مصر 2030"
  },
  "MA": {
    name:"المغرب", nameEn:"Morocco", flag:"🇲🇦", region:"Africa", currency:"MAD",
    esgScore:48.2, esgRank:72, sdgIndex:71.8, sdgRank:68,
    keySectors:["سيارات","طاقة","زراعة","سياحة","تقنية"],
    businessCulture:"فرنسية/عربية، بيروقراطية، علاقات",
    legalNotes:"قانون الشركات، CRI للاستثمار، مناطق حرة",
    sustainabilityFocus:["طاقة شمسية","سيارات كهربائية","زراعة"],
    incentives:["CRI","صندوق محمد السادس"],
    sdgPriorities:[7,8,9,13],
    vision:"النموذج التنموي الجديد"
  },
  "KW": {
    name:"الكويت", nameEn:"Kuwait", flag:"🇰🇼", region:"MENA", currency:"KWD",
    esgScore:35.0, esgRank:95, sdgIndex:70.1, sdgRank:72,
    keySectors:["نفط","مالية","تقنية","صحة"],
    businessCulture:"علاقات، ديوانية، قرارات بطيئة",
    legalNotes:"قانون الشركات، هيئة أسواق المال",
    sustainabilityFocus:["طاقة متجددة","تنويع اقتصادي"],
    incentives:["الصندوق الكويتي للتنمية"],
    sdgPriorities:[7,8,9],
    vision:"رؤية الكويت 2035"
  },
  "BH": {
    name:"البحرين", nameEn:"Bahrain", flag:"🇧🇭", region:"MENA", currency:"BHD",
    esgScore:44.0, esgRank:78, sdgIndex:73.5, sdgRank:60,
    keySectors:["مالية","تقنية","سياحة","صناعة"],
    businessCulture:"مفتوحة، إنجليزية شائعة، علاقات",
    legalNotes:"ملكية أجنبية 100%، مجلس التنمية الاقتصادية",
    sustainabilityFocus:["تنويع اقتصادي","ذكاء اصطناعي"],
    incentives:["Team Bahrain","منطقة حرة"],
    sdgPriorities:[8,9,17],
    vision:"رؤية البحرين 2030"
  },
  "OM": {
    name:"عمان", nameEn:"Oman", flag:"🇴🇲", region:"MENA", currency:"OMR",
    esgScore:40.5, esgRank:88, sdgIndex:71.0, sdgRank:70,
    keySectors:["نفط","لوجستيات","سياحة","تعدين"],
    businessCulture:"رسمي، هادئ، علاقات طويلة",
    legalNotes:"قانون الشركات، ملكية أجنبية حتى 70%",
    sustainabilityFocus:["عمان 2040","لوجستيات","سياحة بيئية"],
    incentives:["مناطق حرة","Ithraa"],
    sdgPriorities:[8,9,14],
    vision:"رؤية عمان 2040"
  }
};

/* ========== 3. القطاعات ========== */
var SECTORS_DB = {
  "energy": {
    name:"الطاقة", icon:"⚡", sdg:[7,13],
    keyRisks:["تقلب أسعار","لوائح","تقنية","تمويل"],
    esgFocus:["انبعاثات","كفاءة","مجتمع محلي"],
    p5Focus:["Planet","Prosperity"],
    frameworks:["P5 Standard","Theory of Change","PESTEL"]
  },
  "tech": {
    name:"التقنية", icon:"💻", sdg:[9,8],
    keyRisks:["أمن سيبراني","مواهب","تمويل","منافسة"],
    esgFocus:["خصوصية","شمول رقمي","طاقة مراكز بيانات"],
    p5Focus:["Process","Product"],
    frameworks:["Lean Canvas","OKRs","P5 Standard"]
  },
  "health": {
    name:"الصحة", icon:"🏥", sdg:[3],
    keyRisks:["تنظيم","تكاليف","جودة"],
    esgFocus:["وصول","جودة","تسعير عادل"],
    p5Focus:["People","Product"],
    frameworks:["Theory of Change","P5 Standard","BSC"]
  },
  "education": {
    name:"التعليم", icon:"📚", sdg:[4],
    keyRisks:["جودة","تمويل","هدر"],
    esgFocus:["شمول","جودة","مهارات"],
    p5Focus:["People","Product"],
    frameworks:["Theory of Change","OKRs","P5 Standard"]
  },
  "tourism": {
    name:"السياحة", icon:"✈️", sdg:[8,12],
    keyRisks:["موسمية","ثقافة","بيئة"],
    esgFocus:["تراث","بيئة","مجتمع محلي"],
    p5Focus:["People","Planet","Prosperity"],
    frameworks:["P5 Standard","S-EPM","Business Model Canvas"]
  },
  "manufacturing": {
    name:"التصنيع", icon:"🏭", sdg:[9,12],
    keyRisks:["سلسلة إمداد","تكاليف","لوائح"],
    esgFocus:["انبعاثات","نفايات","عمال"],
    p5Focus:["Planet","Process","Product"],
    frameworks:["P5 Standard","PRiSM","BSC"]
  },
  "agriculture": {
    name:"الزراعة", icon:"🌾", sdg:[2,15],
    keyRisks:["مناخ","مياه","أسواق"],
    esgFocus:["مياه","تربة","تنوع حيوي"],
    p5Focus:["Planet","People"],
    frameworks:["P5 Standard","S-EPM","Business Model Canvas"]
  },
  "finance": {
    name:"المالية", icon:"💰", sdg:[8,9],
    keyRisks:["تنظيم","أمن","ثقة"],
    esgFocus:["شفافية","شمول مالي","حوكمة"],
    p5Focus:["Prosperity","Process"],
    frameworks:["BSC","P5 Standard","OKRs"]
  },
  "logistics": {
    name:"اللوجستيات", icon:"🚚", sdg:[9,11],
    keyRisks:["وقود","طرق","جودة"],
    esgFocus:["انبعاثات","كفاءة","عمال"],
    p5Focus:["Planet","Process"],
    frameworks:["P5 Standard","BSC","PRiSM"]
  },
  "retail": {
    name:"التجزئة", icon:"🛒", sdg:[8,12],
    keyRisks:["منافسة","هامش","مخزون"],
    esgFocus:["عمال","نفايات","مصادر"],
    p5Focus:["Product","Process"],
    frameworks:["Business Model Canvas","Value Proposition Canvas","OKRs"]
  }
};

/* ========== 4. أهداف التنمية المستدامة ========== */
var SDG_DB = {
  1:{name:"القضاء على الفقر", icon:"🚫", color:"#e5243b"},
  2:{name:"القضاء على الجوع", icon:"🌾", color:"#dda63a"},
  3:{name:"الصحة الجيدة", icon:"🏥", color:"#4c9f38"},
  4:{name:"التعليم الجيد", icon:"📚", color:"#c5192d"},
  5:{name:"المساواة بين الجنسين", icon:"⚖️", color:"#ff3a21"},
  6:{name:"المياه النظيفة", icon:"💧", color:"#26bde2"},
  7:{name:"طاقة نظيفة", icon:"⚡", color:"#fcc30b"},
  8:{name:"عمل لائق ونمو", icon:"💼", color:"#a21942"},
  9:{name:"صناعة وابتكار", icon:"🏭", color:"#fd6925"},
  10:{name:"تقليل الفوارق", icon:"📊", color:"#dd1367"},
  11:{name:"مدن مستدامة", icon:"🏙️", color:"#fd9d24"},
  12:{name:"استهلاك مسؤول", icon:"♻️", color:"#bf8b2e"},
  13:{name:"العمل المناخي", icon:"🌍", color:"#3f7e44"},
  14:{name:"الحياة تحت الماء", icon:"🐟", color:"#0a97d9"},
  15:{name:"الحياة على الأرض", icon:"🌳", color:"#56c02b"},
  16:{name:"سلام وعدالة", icon:"⚖️", color:"#00689d"},
  17:{name:"شراكات", icon:"🤝", color:"#19486a"}
};

/* ========== 5. محاور P5 ========== */
var P5_DB = {
  people:    {name:"People — الناس", icon:"👥", color:"#34d399", desc:"المجتمع، العمال، حقوق الإنسان"},
  planet:    {name:"Planet — الكوكب", icon:"🌍", color:"#22d3ee", desc:"البيئة، المناخ، التنوع الحيوي"},
  prosperity:{name:"Prosperity — الازدهار", icon:"💎", color:"#fbbf24", desc:"النمو الاقتصادي، العائد، الاستدامة المالية"},
  process:   {name:"Process — العمليات", icon:"⚙️", color:"#a78bfa", desc:"العمليات، الحوكمة، الشفافية"},
  product:   {name:"Product — المنتج", icon:"📦", color:"#f472b6", desc:"المنتج/الخدمة، دورة الحياة، الجودة"}
};

/* ========== 6. أنواع الأفكار ========== */
var IDEA_TYPES = {
  "startup":   {name:"شركة ناشئة", icon:"🚀", color:"var(--cyan)"},
  "sme":       {name:"مشروع صغير", icon:"🏪", color:"var(--green)"},
  "social":    {name:"مشروع اجتماعي", icon:"🌱", color:"var(--purple)"},
  "ngo":       {name:"منظمة غير ربحية", icon:"🤝", color:"var(--amber)"},
  "corporate": {name:"مبادرة مؤسسية", icon:"🏢", color:"var(--pink)"}
};

/* ========== 7. مراحل PRiSM ========== */
var PRISM_STAGES = {
  "pre-project": {name:"ما قبل المشروع", icon:"🔍", desc:"التقييم والتحقق من الجدوى"},
  "design":      {name:"التصميم",         icon:"📐", desc:"تخطيط مفصل، مواردميزانية"},
  "build":       {name:"البناء",          icon:"🏗️", desc:"التنفيذ الفعلي"},
  "operate":     {name:"التشغيل",         icon:"⚙️", desc:"تشغيل واختبار"},
  "close":       {name:"الإغلاق",         icon:"🏁", desc:"تسليم وإغلاق"},
  "benefit":     {name:"تحقيق المنفعة",   icon:"🌟", desc:"قياس الأثر ومراجعة"}
};

/* ========== 8. أنواع المخاطر ========== */
var RISK_TYPES = {
  "strategic": {name:"استراتيجية", icon:"🎯", color:"var(--cyan)"},
  "operational":{name:"تشغيلية", icon:"⚙️", color:"var(--green)"},
  "financial": {name:"مالية",     icon:"💰", color:"var(--amber)"},
  "legal":     {name:"قانونية",   icon:"⚖️", color:"var(--purple)"},
  "esg":       {name:"ESG/بيئية", icon:"🌍", color:"var(--pink)"},
  "market":    {name:"سوقية",     icon:"📊", color:"var(--red)"}
};

/* ========== 9. تصنيفات الميزانية ========== */
var BUDGET_CATS = [
  {v:'setup',    l:'تأسيس',        i:'🏗️'},
  {v:'marketing',l:'تسويق',        i:'📣'},
  {v:'rnd',      l:'بحث وتطوير',   i:'🔬'},
  {v:'salaries', l:'رواتب',        i:'👥'},
  {v:'tech',     l:'تقنية',        i:'💻'},
  {v:'legal',    l:'قانوني',       i:'⚖️'},
  {v:'office',   l:'مكتب',         i:'🏢'},
  {v:'travel',   l:'سفر',          i:'✈️'},
  {v:'certifications',l:'شهادات',  i:'📜'},
  {v:'contingency',l:'احتياطي',    i:'🛡️'},
  {v:'investment',l:'استثمار',     i:'📈'},
  {v:'grant',    l:'منحة',         i:'🎁'},
  {v:'loan',     l:'قرض',          i:'🏦'},
  {v:'revenue',  l:'إيرادات',      i:'💵'},
  {v:'other-in', l:'دخل آخر',      i:'➕'},
  {v:'other-out',l:'مصروف آخر',    i:'➖'}
];

/* ========== 10. مراحل القمع البيعي ========== */
var PIPELINE_STAGES = {
  "lead":        {name:"عميل محتمل",    icon:"🔍", color:"var(--muted)"},
  "qualified":   {name:"مؤهّل",         icon:"✅", color:"var(--cyan)"},
  "proposal":    {name:"عرض مقدّم",     icon:"📄", color:"var(--amber)"},
  "negotiation": {name:"تفاوض",         icon:"💬", color:"var(--purple)"},
  "won":         {name:"صفقة رابحة",    icon:"🎉", color:"var(--green)"},
  "lost":        {name:"صفقة خاسرة",    icon:"❌", color:"var(--red)"}
};

/* ========== 11. اقتباسات تطوير الأعمال ========== */
var QUOTES = [
  {t:'العميل لا يشتري منتجًا، بل يشتري حلًا لمشكلة.', a:'Theodore Levitt'},
  {t:'الاستدامة ليست تكلفة، بل استثمار في المستقبل.', a:'—'},
  {t:'لا تبدأ بمشروع، ابدأ بمشكلة حقيقية.', a:'—'},
  {t:'القيادة هي فن تمكين الآخرين من الإنجاز.', a:'—'},
  {t:'استمع أكثر مما تتكلم — العميل سيبيع لنفسه.', a:'—'},
  {t:'الابتكار ليس فكرة، بل تنفيذ.', a:'Thomas Edison'},
  {t:'كل صفقة صعبة تُعلّمك شيئًا جديدًا.', a:'—'},
  {t:'المشروع الذي لا يُقاس، لا يُدار.', a:'Peter Drucker'}
];

/* ========== 12. نصائح تطوير الأعمال ========== */
var TIPS = [
  '💡 ركّز على مشكلة واحدة وحلّها بامتياز.',
  '💡 اختبر فكرتك مع 10 عملاء محتملين قبل البناء.',
  '💡 MVP ≠ منتج ناقص، بل أصغر منتج يحل المشكلة.',
  '💡 قيّم أثرك على SDG من البداية، لا في النهاية.',
  '💡 شراكة واحدة جيدة أفضل من 10 شراكات ضعيفة.',
  '💡 اعرف عميلك الاقتصادي (Economic Buyer) مبكرًا.',
  '💡 سجّل كل اجتماع وكل قرار.',
  '💡 البيانات أولًا، الحدس ثانيًا.'
];

/* ========== 13. ثوابت مساعدة ========== */
var FRAMEWORK_CATEGORIES = {
  "strategic":      {name:"استراتيجية",  icon:"🎯", color:"var(--cyan)"},
  "execution":      {name:"تنفيذ",       icon:"⚙️", color:"var(--green)"},
  "performance":    {name:"أداء",        icon:"📊", color:"var(--amber)"},
  "impact":         {name:"أثر",         icon:"🌱", color:"var(--purple)"},
  "business":       {name:"أعمال",       icon:"💼", color:"var(--pink)"},
  "sustainability": {name:"استدامة",     icon:"♻️", color:"var(--green)"},
  "leadership":     {name:"قيادة",       icon:"👥", color:"var(--purple)"},
  "sales":          {name:"مبيعات",      icon:"💎", color:"var(--cyan)"}
};

/* ========== 14. دوال مساعدة ========== */
function findFrameworkByCode(code){
  code = String(code || '').trim();
  if(!code) return null;
  var keys = Object.keys(FRAMEWORKS_DB);
  for(var i = 0; i < keys.length; i++){
    if(FRAMEWORKS_DB[keys[i]].code === code){
      return {name: keys[i], info: FRAMEWORKS_DB[keys[i]]};
    }
  }
  return null;
}

function searchFrameworks(query){
  query = String(query || '').trim().toLowerCase();
  if(!query) return [];
  var results = [];
  Object.keys(FRAMEWORKS_DB).forEach(function(name){
    var info = FRAMEWORKS_DB[name];
    if(name.toLowerCase().indexOf(query) > -1 || info.code.indexOf(query) > -1){
      results.push({name:name, info:info});
    }
  });
  return results;
}

/* ========== توليد وصف مختصر للتوافق ========== */
var FRAMEWORKS_DESC = {};
Object.keys(FRAMEWORKS_DB).forEach(function(k){ FRAMEWORKS_DESC[k] = FRAMEWORKS_DB[k].desc; });