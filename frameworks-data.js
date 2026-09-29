/* ============================================================
   🏛️ frameworks-data.js — قاعدة البيانات الشاملة
   الأطر + الدول + القطاعات + SDG + ESG + القيادة + المبيعات
   ============================================================ */

/* ========== 1. أطر التخطيط الاستراتيجي ========== */
var FRAMEWORKS_DB = {
  "SWOT": {
    code: "STR-001", type: "strategic", h: 0,
    title: "تحليل SWOT",
    titleEn: "SWOT Analysis",
    desc: "تحليل نقاط القوة والضعف والفرص والتهديدات",
    category: "تحليل بيئي",
    when: "بداية أي مشروع أو مراجعة استراتيجية",
    steps: ["حدد نقاط القوة", "حدد نقاط الضعف", "حدد الفرص", "حدد التهديدات"],
    outputs: ["مصفوفة SWOT", "خطة عمل"],
    relatedSDG: [],
    source: "Harvard Business School"
  },
  "PESTEL": {
    code: "STR-002", type: "strategic",
    title: "تحليل PESTEL",
    titleEn: "PESTEL Analysis",
    desc: "تحليل البيئة الخارجية: سياسية، اقتصادية، اجتماعية، تكنولوجية، بيئية، قانونية",
    category: "تحليل بيئي",
    steps: ["Political", "Economic", "Social", "Technological", "Environmental", "Legal"],
    source: "Francis Aguilar (1967)"
  },
  "OKRs": {
    code: "STR-003", type: "execution",
    title: "الأهداف والنتائج الرئيسية",
    titleEn: "Objectives & Key Results",
    desc: "نظام أهداف قابل للقياس — Objectives عريضة + Key Results قابلة للقياس",
    category: "تنفيذ",
    source: "John Doerr / Intel"
  },
  "BSC": {
    code: "STR-004", type: "performance",
    title: "بطاقة الأداء المتوازن",
    titleEn: "Balanced Scorecard",
    desc: "4 منظورات: مالي، عميل، عمليات، تعلّم ونمو",
    source: "Kaplan & Norton"
  },
  "Theory of Change": {
    code: "IMP-001", type: "impact",
    title: "نظرية التغيير",
    desc: "رسم مسار التغيير: Inputs → Activities → Outputs → Outcomes → Impact",
    category: "قياس الأثر"
  },
  "Business Model Canvas": {
    code: "IDEA-001", type: "business",
    title: "نموذج العمل التجاري",
    titleEn: "Business Model Canvas",
    desc: "9 كتل: العملاء، القيمة، القنوات، العلاقات، الإيرادات، الموارد، الأنشطة، الشراكات، التكاليف",
    source: "Osterwalder"
  },
  "Lean Canvas": {
    code: "IDEA-002", type: "business",
    title: "الكانفاس الرشيق",
    titleEn: "Lean Canvas",
    desc: "نسخة معدّلة للشركات الناشئة — تركز على المشكلة والحل والمقاييس",
    source: "Ash Maurya"
  },
  "P5 Standard": {
    code: "SUS-001", type: "sustainability",
    title: "معيار P5 للاستدامة",
    titleEn: "GPM P5 Standard",
    desc: "5 محاور: People, Planet, Prosperity, Process, Product",
    source: "PMI + GPM Global",
    version: "4.0 (2026)",
    outputs: ["P5 Impact Analysis", "Sustainability Management Plan"]
  },
  "PRiSM": {
    code: "SUS-002", type: "sustainability",
    title: "دورة حياة PRiSM",
    titleEn: "Projects Integrating Sustainable Methods",
    desc: "دورة حياة مشروع مستدام — 6 مراحل: Pre-Project → Design → Build → Operate → Close → Benefit Realization",
    source: "GPM Global"
  },
  "S-EPM": {
    code: "SUS-003", type: "sustainability",
    title: "إدارة المشاريع الريادية المستدامة",
    titleEn: "Sustainable Entrepreneurial Project Management",
    desc: "إطار يجمع الريادة + الاستدامة + إدارة المشاريع",
    source: "Springer (2026)"
  },
  "COM-B": {
    code: "LEAD-001", type: "leadership",
    title: "نموذج COM-B للسلوك",
    desc: "Capability, Opportunity, Motivation → Behavior",
    source: "Michie et al."
  },
  "Situational Leadership": {
    code: "LEAD-002", type: "leadership",
    title: "القيادة الموقفية",
    desc: "4 أنماط: Telling, Selling, Participating, Delegating — حسب نضج الفريق",
    source: "Hersey & Blanchard"
  },
  "MEDDIC": {
    code: "SALES-001", type: "sales",
    title: "إطار MEDDIC للمبيعات",
    desc: "Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion",
    source: "Jack Napoli"
  },
  "SPIN Selling": {
    code: "SALES-002", type: "sales",
    title: "بيع SPIN",
    desc: "Situation, Problem, Implication, Need-Payoff — أسئلة بيعية متسلسلة",
    source: "Neil Rackham"
  },
  "Challenger Sale": {
    code: "SALES-003", type: "sales",
    title: "البيع التحدّي",
    desc: "Teach, Tailor, Take Control — البائع المُعلّم",
    source: "Dixon & Adamson"
  }
};

/* ========== 2. مؤشرات الدول ========== */
var COUNTRIES_DB = {
  "JO": {
    name: "الأردن", nameEn: "Jordan",
    region: "MENA", currency: "JOD",
    esgScore: 42.5, esgRank: 85,
    sdgIndex: 68.2, sdgRank: 82,
    keySectors: ["تقنية معلومات", "سياحة", "طاقة متجددة", "تعليم", "صحة"],
    businessCulture: "علاقات شخصية قوية، قرارات جماعية، أهمية الوسطاء",
    legalNotes: "قانون الشركات 22/1997، هيئة تشجيع الاستثمار، مناطق تنموية",
    sustainabilityFocus: ["طاقة شمسية", "إدارة مياه", "توظيف شباب"],
    incentives: ["إعفاءات ضريبية للمناطق التنموية", "صناديق دعم ريادة"],
    sdgPriorities: [4, 8, 9, 17]
  },
  "AE": {
    name: "الإمارات", nameEn: "UAE",
    region: "MENA", currency: "AED",
    esgScore: 58.3, esgRank: 48,
    sdgIndex: 79.4, sdgRank: 35,
    keySectors: ["تقنية", "لوجستيات", "طاقة", "سياحة", "فضاء"],
    businessCulture: "رسمية، احترام التسلسل، شراكات محلية ضرورية",
    legalNotes: "قوانين المناطق الحرة، ملكية أجنبية، ضريبة شركات 9%",
    sustainabilityFocus: ["استدامة", "طاقة نظيفة", "ذكاء اصطناعي"],
    incentives: ["إعفاءات المناطق الحرة", "صناديق ابتكار"],
    sdgPriorities: [7, 8, 9, 11]
  },
  "SA": {
    name: "السعودية", nameEn: "Saudi Arabia",
    region: "MENA", currency: "SAR",
    esgScore: 30.6, esgRank: 120,
    sdgIndex: 72.5, sdgRank: 65,
    keySectors: ["طاقة", "تقنية", "سياحة", "ترفيه", "صحة"],
    businessCulture: "علاقات، وساطة، احترام الشريعة",
    legalNotes: "رؤية 2030، نظام الشركات الجديد، هيئة السوق المالية",
    sustainabilityFocus: ["تنويع اقتصادي", "طاقة متجددة", "تمكين المرأة"],
    incentives: ["صندوق الاستثمارات العامة", "برامج رؤية 2030"],
    sdgPriorities: [7, 8, 9, 5]
  },
  "EG": {
    name: "مصر", nameEn: "Egypt",
    region: "MENA", currency: "EGP",
    esgScore: 22.7, esgRank: 145,
    sdgIndex: 68.8, sdgRank: 80,
    keySectors: ["زراعة", "تصنيع", "سياحة", "تقنية", "تعليم"],
    businessCulture: "بيروقراطية، علاقات، مرونة في التفاوض",
    legalNotes: "قانون الاستثمار 72/2017، هيئة الرقابة المالية",
    sustainabilityFocus: ["زراعة مستدامة", "تحلية مياه", "مشروعات صغيرة"],
    incentives: ["مناطق اقتصادية", "صندوق تحيا مصر"],
    sdgPriorities: [2, 6, 8, 9]
  },
  "MA": {
    name: "المغرب", nameEn: "Morocco",
    region: "Africa", currency: "MAD",
    esgScore: 48.2, esgRank: 72,
    sdgIndex: 71.8, sdgRank: 68,
    keySectors: ["سيارات", "طاقة", "زراعة", "سياحة", "تقنية"],
    businessCulture: "فرنسية/عربية، بيروقراطية، علاقات",
    legalNotes: "قانون الشركات، CRI للاستثمار، مناطق حرة",
    sustainabilityFocus: ["طاقة شمسية (نور)", "سيارات كهربائية", "زراعة"],
    incentives: ["CRI", "صندوق محمد السادس"],
    sdgPriorities: [7, 8, 9, 13]
  },
  "QA": {
    name: "قطر", nameEn: "Qatar",
    region: "MENA", currency: "QAR",
    esgScore: 52.1, esgRank: 58,
    sdgIndex: 75.2, sdgRank: 55,
    keySectors: ["غاز", "مالية", "سياحة", "تقنية", "تعليم"],
    businessCulture: "رسمي، شراكات محلية، QFC للمناطق الحرة",
    legalNotes: "قانون الشركات، QFC، ملكية أجنبية",
    sustainabilityFocus: ["استدامة مونديال", "طاقة نظيفة", "تنويع"],
    incentives: ["QFC", "صناديق سيادية"],
    sdgPriorities: [7, 8, 9, 17]
  },
  "KW": {
    name: "الكويت", nameEn: "Kuwait",
    region: "MENA", currency: "KWD",
    esgScore: 35.0, esgRank: 95,
    sdgIndex: 70.1, sdgRank: 72,
    keySectors: ["نفط", "مالية", "تقنية", "صحة"],
    businessCulture: "علاقات، ديوانية، قرارات بطيئة",
    legalNotes: "قانون الشركات، هيئة أسواق المال",
    sustainabilityFocus: ["طاقة متجددة", "تنويع اقتصادي"],
    incentives: ["الصندوق الكويتي للتنمية"],
    sdgPriorities: [7, 8, 9]
  }
};

/* ========== 3. القطاعات ========== */
var SECTORS_DB = {
  "energy": {
    name: "الطاقة",
    icon: "⚡",
    sdg: [7, 13],
    keyRisks: ["تقلب أسعار", "لوائح", "تقنية"],
    esgFocus: ["انبعاثات", "كفاءة", "مجتمع"],
    p5Focus: ["Planet", "Prosperity"],
    frameworks: ["P5 Standard", "Theory of Change", "PESTEL"]
  },
  "agriculture": {
    name: "الزراعة",
    icon: "🌾",
    sdg: [2, 15],
    keyRisks: ["مناخ", "مياه", "أسواق"],
    esgFocus: ["مياه", "تربة", "تنوع حيوي"],
    p5Focus: ["Planet", "People"],
    frameworks: ["P5 Standard", "S-EPM", "Business Model Canvas"]
  },
  "tech": {
    name: "التقنية",
    icon: "💻",
    sdg: [9, 8],
    keyRisks: ["أمن سيبراني", "مواهب", "تمويل"],
    esgFocus: ["خصوصية", "شمول رقمي", "طاقة مراكز بيانات"],
    p5Focus: ["Process", "Product"],
    frameworks: ["Lean Canvas", "OKRs", "P5 Standard"]
  },
  "health": {
    name: "الصحة",
    icon: "🏥",
    sdg: [3],
    keyRisks: ["تنظيم", "تكاليف", "جودة"],
    esgFocus: ["وصول", "جودة", "تسعير عادل"],
    p5Focus: ["People", "Product"],
    frameworks: ["Theory of Change", "P5 Standard", "BSC"]
  },
  "education": {
    name: "التعليم",
    icon: "📚",
    sdg: [4],
    keyRisks: ["جودة", "تمويل", "هدر"],
    esgFocus: ["شمول", "جودة", "مهارات"],
    p5Focus: ["People", "Product"],
    frameworks: ["Theory of Change", "OKRs", "P5 Standard"]
  },
  "tourism": {
    name: "السياحة",
    icon: "✈️",
    sdg: [8, 12],
    keyRisks: ["موسمية", "ثقافة", "بيئة"],
    esgFocus: ["تراث", "بيئة", "مجتمع محلي"],
    p5Focus: ["People", "Planet", "Prosperity"],
    frameworks: ["P5 Standard", "S-EPM", "Business Model Canvas"]
  },
  "manufacturing": {
    name: "التصنيع",
    icon: "🏭",
    sdg: [9, 12],
    keyRisks: ["سلسلة إمداد", "تكاليف", "لوائح"],
    esgFocus: ["انبعاثات", "نفايات", "عمال"],
    p5Focus: ["Planet", "Process", "Product"],
    frameworks: ["P5 Standard", "PRiSM", "BSC"]
  }
};

/* ========== 4. أهداف التنمية المستدامة ========== */
var SDG_DB = {
  1: {name: "القضاء على الفقر", icon: "🚫", color: "#e5243b"},
  2: {name: "القضاء على الجوع", icon: "🌾", color: "#dda63a"},
  3: {name: "الصحة الجيدة", icon: "🏥", color: "#4c9f38"},
  4: {name: "التعليم الجيد", icon: "📚", color: "#c5192d"},
  5: {name: "المساواة بين الجنسين", icon: "⚖️", color: "#ff3a21"},
  6: {name: "المياه النظيفة", icon: "💧", color: "#26bde2"},
  7: {name: "طاقة نظيفة", icon: "⚡", color: "#fcc30b"},
  8: {name: "عمل لائق ونمو", icon: "💼", color: "#a21942"},
  9: {name: "صناعة وابتكار", icon: "🏭", color: "#fd6925"},
  10: {name: "تقليل الفوارق", icon: "📊", color: "#dd1367"},
  11: {name: "مدن مستدامة", icon: "🏙️", color: "#fd9d24"},
  12: {name: "استهلاك مسؤول", icon: "♻️", color: "#bf8b2e"},
  13: {name: "العمل المناخي", icon: "🌍", color: "#3f7e44"},
  14: {name: "الحياة تحت الماء", icon: "🐟", color: "#0a97d9"},
  15: {name: "الحياة على الأرض", icon: "🌳", color: "#56c02b"},
  16: {name: "سلام وعدالة", icon: "⚖️", color: "#00689d"},
  17: {name: "شراكات", icon: "🤝", color: "#19486a"}
};

/* ========== 5. أنماط القيادة ========== */
var LEADERSHIP_STYLES = {
  "transformational": {
    name: "القيادة التحويلية",
    desc: "إلهام الفريق برؤية، تحفيز فكري، اعتبار فردي",
    when: "تغيير كبير، مشاريع مبتكرة",
    skills: ["رؤية", "إلهام", "تطوير"],
    frameworks: ["COM-B", "Situational Leadership"]
  },
  "servant": {
    name: "القيادة الخادمة",
    desc: "خدمة الفريق أولاً، تمكين، نمو شخصي",
    when: "فرق مبدعة، منظمات مجتمعية",
    skills: ["تعاطف", "تمكين", "استماع"],
    frameworks: ["COM-B"]
  },
  "situational": {
    name: "القيادة الموقفية",
    desc: "تكييف النمط حسب نضج الفريق",
    when: "فرق متنوعة، مشاريع متعددة",
    skills: ["تشخيص", "مرونة", "تفويض"],
    frameworks: ["Situational Leadership"]
  }
};

/* ========== 6. أطر المبيعات ========== */
var SALES_FRAMEWORKS = {
  "MEDDIC": {
    name: "MEDDIC",
    desc: "إطار لتأهيل الفرص البيعية الكبيرة",
    components: ["Metrics", "Economic Buyer", "Decision Criteria", "Decision Process", "Identify Pain", "Champion"],
    when: "مبيعات B2B معقدة"
  },
  "SPIN": {
    name: "SPIN Selling",
    desc: "أسئلة بيعية متسلسلة",
    components: ["Situation", "Problem", "Implication", "Need-Payoff"],
    when: "مبيعات استشارية"
  },
  "Challenger": {
    name: "Challenger Sale",
    desc: "البائع الذي يُعلّم ويتحدى",
    components: ["Teach", "Tailor", "Take Control"],
    when: "أسواق تنافسية"
  },
  "Value Selling": {
    name: "البيع بالقيمة",
    desc: "التركيز على ROI والقيمة المضافة",
    when: "حلول مكلفة، إقناع الإدارة"
  }
};

/* ========== توليد DESC للتوافق ========== */
var FRAMEWORKS_DESC = {};
Object.keys(FRAMEWORKS_DB).forEach(function(k){
  FRAMEWORKS_DESC[k] = FRAMEWORKS_DB[k].desc;
});