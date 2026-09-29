/* ============================================================
   💼 business-data.js — قاعدة البيانات الشاملة (AR/EN)
   ============================================================ */

/* ========== 1. أطر التخطيط والاستراتيجية ========== */
var FRAMEWORKS_DB = {
  "SWOT": { code:"STR-001", t:"strategic", icon:"🎯", title:"تحليل SWOT", titleEn:"SWOT Analysis", desc:"تحليل نقاط القوة والضعف والفرص والتهديدات", descEn:"Strengths, Weaknesses, Opportunities, Threats analysis", when:"بداية أي مشروع أو مراجعة استراتيجية", whenEn:"Project start or strategic review", source:"Harvard Business School" },
  "PESTEL": { code:"STR-002", t:"strategic", icon:"🌍", title:"تحليل PESTEL", titleEn:"PESTEL Analysis", desc:"تحليل البيئة الخارجية الكلية", descEn:"Macro environment analysis", when:"دراسة سوق جديد", whenEn:"New market study", source:"Francis Aguilar (1967)" },
  "OKRs": { code:"STR-003", t:"execution", icon:"🎯", title:"الأهداف والنتائج الرئيسية", titleEn:"OKRs", desc:"نظام أهداف قابل للقياس", descEn:"Measurable goals system", source:"John Doerr / Intel" },
  "BSC": { code:"STR-004", t:"performance", icon:"📊", title:"بطاقة الأداء المتوازن", titleEn:"Balanced Scorecard", desc:"4 منظورات: مالي، عميل، عمليات، تعلّم", descEn:"4 perspectives: financial, customer, process, learning", source:"Kaplan & Norton" },
  "Theory of Change": { code:"IMP-001", t:"impact", icon:"🌱", title:"نظرية التغيير", titleEn:"Theory of Change", desc:"رسم مسار التغيير من المدخلات إلى الأثر", descEn:"Map change path from inputs to impact", source:"Aspen Institute" },
  "Business Model Canvas": { code:"IDEA-001", t:"business", icon:"📋", title:"نموذج العمل التجاري", titleEn:"Business Model Canvas", desc:"9 كتل: العملاء، القيمة، القنوات...", descEn:"9 blocks: customers, value, channels...", source:"Osterwalder & Pigneur" },
  "Lean Canvas": { code:"IDEA-002", t:"business", icon:"⚡", title:"الكانفاس الرشيق", titleEn:"Lean Canvas", desc:"نسخة معدّلة للشركات الناشئة", descEn:"Startup-focused adaptation", source:"Ash Maurya" },
  "Value Proposition Canvas": { code:"IDEA-003", t:"business", icon:"💎", title:"كانفاس القيمة المقترحة", titleEn:"Value Proposition Canvas", desc:"ربط آلام العملاء ومكاسبهم بحلولك", descEn:"Link customer pains and gains to your solutions", source:"Osterwalder" },
  "P5 Standard": { code:"SUS-001", t:"sustainability", icon:"♻️", title:"معيار P5 للاستدامة", titleEn:"GPM P5 Standard", desc:"5 محاور: People, Planet, Prosperity, Process, Product", descEn:"5 axes: People, Planet, Prosperity, Process, Product", when:"إدارة المشاريع المستدامة", whenEn:"Sustainable project management", source:"GPM Global — v4.0" },
  "PRiSM": { code:"SUS-002", t:"sustainability", icon:"🔄", title:"دورة حياة PRiSM", titleEn:"PRiSM Lifecycle", desc:"6 مراحل: ما قبل المشروع → التصميم → البناء → التشغيل → الإغلاق → تحقيق المنفعة", descEn:"6 phases: Pre-Project → Design → Build → Operate → Close → Benefit", source:"GPM Global" },
  "S-EPM": { code:"SUS-003", t:"sustainability", icon:"🌿", title:"إدارة المشاريع الريادية المستدامة", titleEn:"S-EPM", desc:"إطار يجمع الريادة + الاستدامة + إدارة المشاريع", descEn:"Entrepreneurship + sustainability + project management", source:"Springer (2026)" },
  "COM-B": { code:"LEAD-001", t:"leadership", icon:"🧠", title:"نموذج COM-B للسلوك", titleEn:"COM-B Model", desc:"Capability + Opportunity + Motivation → Behavior", descEn:"Capability + Opportunity + Motivation → Behavior", source:"Michie et al." },
  "Situational Leadership": { code:"LEAD-002", t:"leadership", icon:"👥", title:"القيادة الموقفية", titleEn:"Situational Leadership", desc:"4 أنماط: Telling, Selling, Participating, Delegating", descEn:"4 styles: Telling, Selling, Participating, Delegating", source:"Hersey & Blanchard" },
  "Transformational Leadership": { code:"LEAD-003", t:"leadership", icon:"✨", title:"القيادة التحويلية", titleEn:"Transformational Leadership", desc:"إلهام برؤية، تحفيز فكري، اعتبار فردي", descEn:"Visionary inspiration, intellectual stimulation", source:"Burns / Bass" },
  "MEDDIC": { code:"SALES-001", t:"sales", icon:"🎯", title:"إطار MEDDIC", titleEn:"MEDDIC", desc:"Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion", descEn:"Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion", when:"مبيعات B2B معقدة", whenEn:"Complex B2B sales", source:"Jack Napoli" },
  "SPIN Selling": { code:"SALES-002", t:"sales", icon:"💬", title:"بيع SPIN", titleEn:"SPIN Selling", desc:"Situation, Problem, Implication, Need-Payoff", descEn:"Situation, Problem, Implication, Need-Payoff", source:"Neil Rackham" },
  "Challenger Sale": { code:"SALES-003", t:"sales", icon:"🔥", title:"البيع التحدّي", titleEn:"Challenger Sale", desc:"Teach, Tailor, Take Control", descEn:"Teach, Tailor, Take Control", source:"Dixon & Adamson" },
  "Value Selling": { code:"SALES-004", t:"sales", icon:"💰", title:"البيع بالقيمة", titleEn:"Value Selling", desc:"التركيز على ROI والقيمة المضافة", descEn:"Focus on ROI and value-add", source:"RAIN Group" }
};

/* ========== 2. الدول ========== */
var COUNTRIES_DB = {
  "QA": { name:"قطر", nameEn:"Qatar", flag:"🇶🇦", region:"MENA", currency:"QAR", esgScore:52.1, esgRank:58, sdgIndex:75.2, sdgRank:55,
    keySectors:["غاز","مالية","سياحة","تقنية","تعليم","لوجستيات"], keySectorsEn:["Gas","Finance","Tourism","Tech","Education","Logistics"],
    businessCulture:"رسمي، شراكات محلية ضرورية، احترام التسلسل الهرمي", businessCultureEn:"Formal, local partnerships required, respect for hierarchy",
    legalNotes:"قانون الشركات 11/2015، QFC، ملكية أجنبية تصل 100%", legalNotesEn:"Companies Law 11/2015, QFC, up to 100% foreign ownership",
    sustainabilityFocus:["استدامة المونديال","طاقة نظيفة","تنويع اقتصادي"], sustainabilityFocusEn:["World Cup sustainability","Clean energy","Economic diversification"],
    incentives:["QFC","صناديق سيادية","منطقة حرة بميناء حمد"], incentivesEn:["QFC","Sovereign funds","Hamad Port Free Zone"],
    sdgPriorities:[7,8,9,17], vision:"رؤية قطر الوطنية 2030", visionEn:"Qatar National Vision 2030" },
  "AE": { name:"الإمارات", nameEn:"UAE", flag:"🇦🇪", region:"MENA", currency:"AED", esgScore:58.3, esgRank:48, sdgIndex:79.4, sdgRank:35,
    keySectors:["تقنية","لوجستيات","طاقة","سياحة","فضاء"], keySectorsEn:["Tech","Logistics","Energy","Tourism","Space"],
    businessCulture:"رسمي، شراكات محلية، سرعة إنجاز", businessCultureEn:"Formal, local partnerships, fast execution",
    legalNotes:"مناطق حرة 100% ملكية أجنبية، ضريبة 9%", legalNotesEn:"100% foreign ownership in free zones, 9% corporate tax",
    sustainabilityFocus:["استدامة","طاقة نظيفة","ذكاء اصطناعي"], sustainabilityFocusEn:["Sustainability","Clean energy","AI"],
    incentives:["إعفاءات المناطق الحرة","صناديق ابتكار"], incentivesEn:["Free zone exemptions","Innovation funds"],
    sdgPriorities:[7,8,9,11], vision:"مئوية الإمارات 2071", visionEn:"UAE Centennial 2071" },
  "SA": { name:"السعودية", nameEn:"Saudi Arabia", flag:"🇸🇦", region:"MENA", currency:"SAR", esgScore:30.6, esgRank:120, sdgIndex:72.5, sdgRank:65,
    keySectors:["طاقة","تقنية","سياحة","ترفيه","صحة"], keySectorsEn:["Energy","Tech","Tourism","Entertainment","Health"],
    businessCulture:"علاقات، وساطة، احترام الشريعة", businessCultureEn:"Relationships, intermediaries, Sharia compliance",
    legalNotes:"نظام الشركات الجديد 2022، رؤية 2030", legalNotesEn:"New Companies Law 2022, Vision 2030",
    sustainabilityFocus:["تنويع اقتصادي","طاقة متجددة","تمكين المرأة"], sustainabilityFocusEn:["Economic diversification","Renewables","Women empowerment"],
    incentives:["PIF","برامج رؤية 2030"], incentivesEn:["PIF","Vision 2030 programs"],
    sdgPriorities:[7,8,9,5], vision:"رؤية السعودية 2030", visionEn:"Saudi Vision 2030" },
  "JO": { name:"الأردن", nameEn:"Jordan", flag:"🇯🇴", region:"MENA", currency:"JOD", esgScore:42.5, esgRank:85, sdgIndex:68.2, sdgRank:82,
    keySectors:["تقنية","سياحة","طاقة متجددة","تعليم","صحة"], keySectorsEn:["Tech","Tourism","Renewables","Education","Health"],
    businessCulture:"علاقات شخصية قوية، قرارات جماعية", businessCultureEn:"Strong personal relations, collective decisions",
    legalNotes:"قانون الشركات 22/1997، هيئة تشجيع الاستثمار", legalNotesEn:"Companies Law 22/1997, Investment Promotion Commission",
    sustainabilityFocus:["طاقة شمسية","إدارة مياه","توظيف شباب"], sustainabilityFocusEn:["Solar energy","Water management","Youth employment"],
    incentives:["إعفاءات ضريبية","صناديق دعم ريادة"], incentivesEn:["Tax exemptions","Entrepreneurship funds"],
    sdgPriorities:[4,8,9,17], vision:"رؤية الأردن 2025", visionEn:"Jordan Vision 2025" },
  "EG": { name:"مصر", nameEn:"Egypt", flag:"🇪🇬", region:"MENA", currency:"EGP", esgScore:22.7, esgRank:145, sdgIndex:68.8, sdgRank:80,
    keySectors:["زراعة","تصنيع","سياحة","تقنية","تعليم"], keySectorsEn:["Agriculture","Manufacturing","Tourism","Tech","Education"],
    businessCulture:"بيروقراطية، علاقات، مرونة", businessCultureEn:"Bureaucracy, relationships, flexibility",
    legalNotes:"قانون الاستثمار 72/2017", legalNotesEn:"Investment Law 72/2017",
    sustainabilityFocus:["زراعة مستدامة","تحلية مياه","مشروعات صغيرة"], sustainabilityFocusEn:["Sustainable agriculture","Desalination","SMEs"],
    incentives:["مناطق اقتصادية","صندوق تحيا مصر"], incentivesEn:["Economic zones","Tahya Misr Fund"],
    sdgPriorities:[2,6,8,9], vision:"رؤية مصر 2030", visionEn:"Egypt Vision 2030" },
  "MA": { name:"المغرب", nameEn:"Morocco", flag:"🇲🇦", region:"Africa", currency:"MAD", esgScore:48.2, esgRank:72, sdgIndex:71.8, sdgRank:68,
    keySectors:["سيارات","طاقة","زراعة","سياحة","تقنية"], keySectorsEn:["Automotive","Energy","Agriculture","Tourism","Tech"],
    businessCulture:"فرنسية/عربية، بيروقراطية", businessCultureEn:"French/Arabic, bureaucratic",
    legalNotes:"CRI للاستثمار، مناطق حرة", legalNotesEn:"CRI for investment, free zones",
    sustainabilityFocus:["طاقة شمسية","سيارات كهربائية","زراعة"], sustainabilityFocusEn:["Solar energy","EVs","Agriculture"],
    incentives:["CRI","صندوق محمد السادس"], incentivesEn:["CRI","Mohammed VI Fund"],
    sdgPriorities:[7,8,9,13], vision:"النموذج التنموي الجديد", visionEn:"New Development Model" },
  "KW": { name:"الكويت", nameEn:"Kuwait", flag:"🇰🇼", region:"MENA", currency:"KWD", esgScore:35.0, esgRank:95, sdgIndex:70.1, sdgRank:72,
    keySectors:["نفط","مالية","تقنية","صحة"], keySectorsEn:["Oil","Finance","Tech","Health"],
    businessCulture:"علاقات، ديوانية", businessCultureEn:"Relationships, Diwaniya",
    legalNotes:"قانون الشركات، هيئة أسواق المال", legalNotesEn:"Companies Law, Capital Markets Authority",
    sustainabilityFocus:["طاقة متجددة","تنويع اقتصادي"], sustainabilityFocusEn:["Renewables","Economic diversification"],
    incentives:["الصندوق الكويتي للتنمية"], incentivesEn:["Kuwait Fund for Development"],
    sdgPriorities:[7,8,9], vision:"رؤية الكويت 2035", visionEn:"Kuwait Vision 2035" },
  "BH": { name:"البحرين", nameEn:"Bahrain", flag:"🇧🇭", region:"MENA", currency:"BHD", esgScore:44.0, esgRank:78, sdgIndex:73.5, sdgRank:60,
    keySectors:["مالية","تقنية","سياحة","صناعة"], keySectorsEn:["Finance","Tech","Tourism","Industry"],
    businessCulture:"مفتوحة، إنجليزية شائعة", businessCultureEn:"Open, English widely used",
    legalNotes:"ملكية أجنبية 100%", legalNotesEn:"100% foreign ownership",
    sustainabilityFocus:["تنويع اقتصادي","ذكاء اصطناعي"], sustainabilityFocusEn:["Economic diversification","AI"],
    incentives:["Team Bahrain","منطقة حرة"], incentivesEn:["Team Bahrain","Free zone"],
    sdgPriorities:[8,9,17], vision:"رؤية البحرين 2030", visionEn:"Bahrain Vision 2030" },
  "OM": { name:"عمان", nameEn:"Oman", flag:"🇴🇲", region:"MENA", currency:"OMR", esgScore:40.5, esgRank:88, sdgIndex:71.0, sdgRank:70,
    keySectors:["نفط","لوجستيات","سياحة","تعدين"], keySectorsEn:["Oil","Logistics","Tourism","Mining"],
    businessCulture:"رسمي، هادئ، علاقات طويلة", businessCultureEn:"Formal, calm, long-term relations",
    legalNotes:"قانون الشركات، ملكية أجنبية حتى 70%", legalNotesEn:"Companies Law, up to 70% foreign ownership",
    sustainabilityFocus:["عمان 2040","لوجستيات","سياحة بيئية"], sustainabilityFocusEn:["Oman 2040","Logistics","Eco-tourism"],
    incentives:["مناطق حرة","Ithraa"], incentivesEn:["Free zones","Ithraa"],
    sdgPriorities:[8,9,14], vision:"رؤية عمان 2040", visionEn:"Oman Vision 2040" }
};

/* ========== 3. القطاعات ========== */
var SECTORS_DB = {
  "energy":        {name:"الطاقة",    nameEn:"Energy",        icon:"⚡", sdg:[7,13],  keyRisks:["تقلب أسعار","لوائح","تقنية"],   keyRisksEn:["Price volatility","Regulations","Technology"],   esgFocus:["انبعاثات","كفاءة","مجتمع"],      esgFocusEn:["Emissions","Efficiency","Community"],     p5Focus:["Planet","Prosperity"],         frameworks:["P5 Standard","Theory of Change","PESTEL"]},
  "tech":          {name:"التقنية",   nameEn:"Technology",    icon:"💻", sdg:[9,8],   keyRisks:["أمن سيبراني","مواهب","تمويل"],   keyRisksEn:["Cybersecurity","Talent","Funding"],           esgFocus:["خصوصية","شمول رقمي","طاقة"],    esgFocusEn:["Privacy","Digital inclusion","Energy"],  p5Focus:["Process","Product"],           frameworks:["Lean Canvas","OKRs","P5 Standard"]},
  "health":        {name:"الصحة",     nameEn:"Health",        icon:"🏥", sdg:[3],     keyRisks:["تنظيم","تكاليف","جودة"],          keyRisksEn:["Regulation","Costs","Quality"],              esgFocus:["وصول","جودة","تسعير"],         esgFocusEn:["Access","Quality","Pricing"],            p5Focus:["People","Product"],            frameworks:["Theory of Change","P5 Standard","BSC"]},
  "education":     {name:"التعليم",   nameEn:"Education",     icon:"📚", sdg:[4],     keyRisks:["جودة","تمويل","هدر"],              keyRisksEn:["Quality","Funding","Waste"],                 esgFocus:["شمول","جودة","مهارات"],         esgFocusEn:["Inclusion","Quality","Skills"],          p5Focus:["People","Product"],            frameworks:["Theory of Change","OKRs","P5 Standard"]},
  "tourism":       {name:"السياحة",   nameEn:"Tourism",       icon:"✈️", sdg:[8,12],  keyRisks:["موسمية","ثقافة","بيئة"],          keyRisksEn:["Seasonality","Culture","Environment"],       esgFocus:["تراث","بيئة","مجتمع محلي"],     esgFocusEn:["Heritage","Environment","Local community"],p5Focus:["People","Planet","Prosperity"],frameworks:["P5 Standard","S-EPM","Business Model Canvas"]},
  "manufacturing": {name:"التصنيع",   nameEn:"Manufacturing", icon:"🏭", sdg:[9,12],  keyRisks:["سلسلة إمداد","تكاليف","لوائح"],   keyRisksEn:["Supply chain","Costs","Regulations"],        esgFocus:["انبعاثات","نفايات","عمال"],     esgFocusEn:["Emissions","Waste","Workers"],           p5Focus:["Planet","Process","Product"],  frameworks:["P5 Standard","PRiSM","BSC"]},
  "agriculture":   {name:"الزراعة",   nameEn:"Agriculture",   icon:"🌾", sdg:[2,15],  keyRisks:["مناخ","مياه","أسواق"],            keyRisksEn:["Climate","Water","Markets"],                 esgFocus:["مياه","تربة","تنوع حيوي"],      esgFocusEn:["Water","Soil","Biodiversity"],           p5Focus:["Planet","People"],             frameworks:["P5 Standard","S-EPM","Business Model Canvas"]},
  "finance":       {name:"المالية",   nameEn:"Finance",       icon:"💰", sdg:[8,9],   keyRisks:["تنظيم","أمن","ثقة"],              keyRisksEn:["Regulation","Security","Trust"],             esgFocus:["شفافية","شمول مالي","حوكمة"],   esgFocusEn:["Transparency","Financial inclusion","Governance"],p5Focus:["Prosperity","Process"],   frameworks:["BSC","P5 Standard","OKRs"]},
  "logistics":     {name:"اللوجستيات",nameEn:"Logistics",     icon:"🚚", sdg:[9,11],  keyRisks:["وقود","طرق","جودة"],              keyRisksEn:["Fuel","Roads","Quality"],                    esgFocus:["انبعاثات","كفاءة","عمال"],      esgFocusEn:["Emissions","Efficiency","Workers"],      p5Focus:["Planet","Process"],            frameworks:["P5 Standard","BSC","PRiSM"]},
  "retail":        {name:"التجزئة",   nameEn:"Retail",        icon:"🛒", sdg:[8,12],  keyRisks:["منافسة","هامش","مخزون"],          keyRisksEn:["Competition","Margin","Inventory"],          esgFocus:["عمال","نفايات","مصادر"],        esgFocusEn:["Workers","Waste","Sourcing"],            p5Focus:["Product","Process"],           frameworks:["Business Model Canvas","Value Proposition Canvas","OKRs"]}
};

/* ========== 4. SDG ========== */
var SDG_DB = {
  1:{name:"القضاء على الفقر", nameEn:"No Poverty", icon:"🚫", color:"#e5243b"},
  2:{name:"القضاء على الجوع", nameEn:"Zero Hunger", icon:"🌾", color:"#dda63a"},
  3:{name:"الصحة الجيدة", nameEn:"Good Health", icon:"🏥", color:"#4c9f38"},
  4:{name:"التعليم الجيد", nameEn:"Quality Education", icon:"📚", color:"#c5192d"},
  5:{name:"المساواة بين الجنسين", nameEn:"Gender Equality", icon:"⚖️", color:"#ff3a21"},
  6:{name:"المياه النظيفة", nameEn:"Clean Water", icon:"💧", color:"#26bde2"},
  7:{name:"طاقة نظيفة", nameEn:"Clean Energy", icon:"⚡", color:"#fcc30b"},
  8:{name:"عمل لائق ونمو", nameEn:"Decent Work & Growth", icon:"💼", color:"#a21942"},
  9:{name:"صناعة وابتكار", nameEn:"Industry & Innovation", icon:"🏭", color:"#fd6925"},
  10:{name:"تقليل الفوارق", nameEn:"Reduced Inequalities", icon:"📊", color:"#dd1367"},
  11:{name:"مدن مستدامة", nameEn:"Sustainable Cities", icon:"🏙️", color:"#fd9d24"},
  12:{name:"استهلاك مسؤول", nameEn:"Responsible Consumption", icon:"♻️", color:"#bf8b2e"},
  13:{name:"العمل المناخي", nameEn:"Climate Action", icon:"🌍", color:"#3f7e44"},
  14:{name:"الحياة تحت الماء", nameEn:"Life Below Water", icon:"🐟", color:"#0a97d9"},
  15:{name:"الحياة على الأرض", nameEn:"Life on Land", icon:"🌳", color:"#56c02b"},
  16:{name:"سلام وعدالة", nameEn:"Peace & Justice", icon:"⚖️", color:"#00689d"},
  17:{name:"شراكات", nameEn:"Partnerships", icon:"🤝", color:"#19486a"}
};

/* ========== 5. P5 ========== */
var P5_DB = {
  people:    {name:"People — الناس", nameEn:"People", icon:"👥", color:"#34d399", desc:"المجتمع، العمال، حقوق الإنسان", descEn:"Community, workers, human rights"},
  planet:    {name:"Planet — الكوكب", nameEn:"Planet", icon:"🌍", color:"#22d3ee", desc:"البيئة، المناخ، التنوع الحيوي", descEn:"Environment, climate, biodiversity"},
  prosperity:{name:"Prosperity — الازدهار", nameEn:"Prosperity", icon:"💎", color:"#fbbf24", desc:"النمو الاقتصادي، العائد", descEn:"Economic growth, returns"},
  process:   {name:"Process — العمليات", nameEn:"Process", icon:"⚙️", color:"#a78bfa", desc:"العمليات، الحوكمة، الشفافية", descEn:"Operations, governance, transparency"},
  product:   {name:"Product — المنتج", nameEn:"Product", icon:"📦", color:"#f472b6", desc:"المنتج/الخدمة، دورة الحياة", descEn:"Product/service, lifecycle"}
};

/* ========== 6. أنواع الأفكار ========== */
var IDEA_TYPES = {
  "startup":   {name:"شركة ناشئة", nameEn:"Startup", icon:"🚀", color:"var(--cyan)"},
  "sme":       {name:"مشروع صغير", nameEn:"SME", icon:"🏪", color:"var(--green)"},
  "social":    {name:"مشروع اجتماعي", nameEn:"Social Enterprise", icon:"🌱", color:"var(--purple)"},
  "ngo":       {name:"منظمة غير ربحية", nameEn:"NGO", icon:"🤝", color:"var(--amber)"},
  "corporate": {name:"مبادرة مؤسسية", nameEn:"Corporate Initiative", icon:"🏢", color:"var(--pink)"}
};

/* ========== 7. مراحل PRiSM ========== */
var PRISM_STAGES = {
  "pre-project": {name:"ما قبل المشروع", nameEn:"Pre-Project", icon:"🔍", desc:"التقييم والتحقق من الجدوى", descEn:"Assessment & feasibility"},
  "design":      {name:"التصميم",         nameEn:"Design",      icon:"📐", desc:"تخطيط مفصل، موارد وميزانية", descEn:"Detailed planning, resources, budget"},
  "build":       {name:"البناء",          nameEn:"Build",       icon:"🏗️", desc:"التنفيذ الفعلي", descEn:"Actual execution"},
  "operate":     {name:"التشغيل",         nameEn:"Operate",     icon:"⚙️", desc:"تشغيل واختبار", descEn:"Operation & testing"},
  "close":       {name:"الإغلاق",         nameEn:"Close",       icon:"🏁", desc:"تسليم وإغلاق", descEn:"Handover & closing"},
  "benefit":     {name:"تحقيق المنفعة",   nameEn:"Benefit",     icon:"🌟", desc:"قياس الأثر ومراجعة", descEn:"Impact measurement & review"}
};

/* ========== 8. أنواع المخاطر ========== */
var RISK_TYPES = {
  "strategic":   {name:"استراتيجية", nameEn:"Strategic", icon:"🎯", color:"var(--cyan)"},
  "operational": {name:"تشغيلية",   nameEn:"Operational", icon:"⚙️", color:"var(--green)"},
  "financial":   {name:"مالية",     nameEn:"Financial", icon:"💰", color:"var(--amber)"},
  "legal":       {name:"قانونية",   nameEn:"Legal", icon:"⚖️", color:"var(--purple)"},
  "esg":         {name:"ESG/بيئية", nameEn:"ESG/Environmental", icon:"🌍", color:"var(--pink)"},
  "market":      {name:"سوقية",     nameEn:"Market", icon:"📊", color:"var(--red)"}
};

/* ========== 9. تصنيفات الميزانية ========== */
var BUDGET_CATS = [
  {v:'setup',         l:'تأسيس',        lEn:'Setup',         i:'🏗️'},
  {v:'marketing',     l:'تسويق',        lEn:'Marketing',     i:'📣'},
  {v:'rnd',           l:'بحث وتطوير',   lEn:'R&D',           i:'🔬'},
  {v:'salaries',      l:'رواتب',        lEn:'Salaries',      i:'👥'},
  {v:'tech',          l:'تقنية',        lEn:'Technology',    i:'💻'},
  {v:'legal',         l:'قانوني',       lEn:'Legal',         i:'⚖️'},
  {v:'office',        l:'مكتب',         lEn:'Office',        i:'🏢'},
  {v:'travel',        l:'سفر',          lEn:'Travel',        i:'✈️'},
  {v:'certifications',l:'شهادات',       lEn:'Certifications',i:'📜'},
  {v:'contingency',   l:'احتياطي',      lEn:'Contingency',   i:'🛡️'},
  {v:'investment',    l:'استثمار',      lEn:'Investment',    i:'📈'},
  {v:'grant',         l:'منحة',         lEn:'Grant',         i:'🎁'},
  {v:'loan',          l:'قرض',          lEn:'Loan',          i:'🏦'},
  {v:'revenue',       l:'إيرادات',      lEn:'Revenue',       i:'💵'},
  {v:'other-in',      l:'دخل آخر',      lEn:'Other Income',  i:'➕'},
  {v:'other-out',     l:'مصروف آخر',    lEn:'Other Expense', i:'➖'}
];

/* ========== 10. مراحل القمع البيعي ========== */
var PIPELINE_STAGES = {
  "lead":        {name:"عميل محتمل", nameEn:"Lead",         icon:"🔍", color:"var(--muted)"},
  "qualified":   {name:"مؤهّل",      nameEn:"Qualified",    icon:"✅", color:"var(--cyan)"},
  "proposal":    {name:"عرض مقدّم",  nameEn:"Proposal",     icon:"📄", color:"var(--amber)"},
  "negotiation": {name:"تفاوض",      nameEn:"Negotiation",  icon:"💬", color:"var(--purple)"},
  "won":         {name:"صفقة رابحة", nameEn:"Won",          icon:"🎉", color:"var(--green)"},
  "lost":        {name:"صفقة خاسرة", nameEn:"Lost",         icon:"❌", color:"var(--red)"}
};

/* ========== 11. الاقتباسات ========== */
var QUOTES = [
  {t:'العميل لا يشتري منتجًا، بل يشتري حلًا لمشكلة.', tEn:'Customers don\'t buy products, they buy solutions.', a:'Theodore Levitt'},
  {t:'الاستدامة ليست تكلفة، بل استثمار في المستقبل.', tEn:'Sustainability is not a cost, it\'s an investment in the future.', a:'—'},
  {t:'لا تبدأ بمشروع، ابدأ بمشكلة حقيقية.', tEn:'Don\'t start with a project, start with a real problem.', a:'—'},
  {t:'القيادة هي فن تمكين الآخرين من الإنجاز.', tEn:'Leadership is the art of empowering others to achieve.', a:'—'},
  {t:'استمع أكثر مما تتكلم — العميل سيبيع لنفسه.', tEn:'Listen more than you talk — the customer will sell to themselves.', a:'—'},
  {t:'الابتكار ليس فكرة، بل تنفيذ.', tEn:'Innovation is not an idea, it\'s execution.', a:'Thomas Edison'},
  {t:'كل صفقة صعبة تُعلّمك شيئًا جديدًا.', tEn:'Every tough deal teaches you something new.', a:'—'},
  {t:'المشروع الذي لا يُقاس، لا يُدار.', tEn:'What doesn\'t get measured doesn\'t get managed.', a:'Peter Drucker'}
];

/* ========== 12. النصائح ========== */
var TIPS = [
  {t:'💡 ركّز على مشكلة واحدة وحلّها بامتياز.', tEn:'💡 Focus on one problem and solve it excellently.'},
  {t:'💡 اختبر فكرتك مع 10 عملاء محتملين قبل البناء.', tEn:'💡 Test your idea with 10 potential customers before building.'},
  {t:'💡 MVP ≠ منتج ناقص، بل أصغر منتج يحل المشكلة.', tEn:'💡 MVP ≠ incomplete product, it\'s the smallest product that solves the problem.'},
  {t:'💡 قيّم أثرك على SDG من البداية.', tEn:'💡 Measure your SDG impact from the start.'},
  {t:'💡 شراكة واحدة جيدة أفضل من 10 شراكات ضعيفة.', tEn:'💡 One good partnership beats 10 weak ones.'},
  {t:'💡 اعرف عميلك الاقتصادي (Economic Buyer) مبكرًا.', tEn:'💡 Identify your Economic Buyer early.'},
  {t:'💡 سجّل كل اجتماع وكل قرار.', tEn:'💡 Document every meeting and decision.'},
  {t:'💡 البيانات أولًا، الحدس ثانيًا.', tEn:'💡 Data first, intuition second.'}
];

/* ========== 13. تصنيفات الأطر ========== */
var FRAMEWORK_CATEGORIES = {
  "strategic":      {name:"استراتيجية",  nameEn:"Strategic",      icon:"🎯", color:"var(--cyan)"},
  "execution":      {name:"تنفيذ",       nameEn:"Execution",      icon:"⚙️", color:"var(--green)"},
  "performance":    {name:"أداء",        nameEn:"Performance",    icon:"📊", color:"var(--amber)"},
  "impact":         {name:"أثر",         nameEn:"Impact",         icon:"🌱", color:"var(--purple)"},
  "business":       {name:"أعمال",       nameEn:"Business",       icon:"💼", color:"var(--pink)"},
  "sustainability": {name:"استدامة",     nameEn:"Sustainability", icon:"♻️", color:"var(--green)"},
  "leadership":     {name:"قيادة",       nameEn:"Leadership",     icon:"👥", color:"var(--purple)"},
  "sales":          {name:"مبيعات",      nameEn:"Sales",          icon:"💎", color:"var(--cyan)"}
};

/* ========== 14. دوال مساعدة ========== */
function findFrameworkByCode(code){
  code = String(code || '').trim();
  if(!code) return null;
  var keys = Object.keys(FRAMEWORKS_DB);
  for(var i = 0; i < keys.length; i++){
    if(FRAMEWORKS_DB[keys[i]].code === code) return {name: keys[i], info: FRAMEWORKS_DB[keys[i]]};
  }
  return null;
}

function searchFrameworks(query){
  query = String(query || '').trim().toLowerCase();
  if(!query) return [];
  var results = [];
  Object.keys(FRAMEWORKS_DB).forEach(function(name){
    var info = FRAMEWORKS_DB[name];
    if(name.toLowerCase().indexOf(query) > -1 || info.code.indexOf(query) > -1) results.push({name:name, info:info});
  });
  return results;
}

/* ========== أداة مساعدة للـ i18n ========== */
function pickLang(obj, key){
  var lang = (window.i18n && window.i18n.getLang && window.i18n.getLang()) || 'ar';
  if(lang === 'en'){
    var enKey = key + 'En';
    if(obj[enKey]) return obj[enKey];
  }
  return obj[key] || '';
}

var FRAMEWORKS_DESC = {};
Object.keys(FRAMEWORKS_DB).forEach(function(k){ FRAMEWORKS_DESC[k] = FRAMEWORKS_DB[k].desc; });