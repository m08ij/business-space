/* ============================================================
   🤖 ai-advisor.js — المستشار الذكي لتطوير الأعمال
   يقرأ كل بيانات المشروع ويجيب على الأسئلة
   ============================================================ */
(function(){
  'use strict';

  function getSpace(){ return window.space || {profile:{},ideas:[],projects:[],salesPipeline:[],tasks:[],budget:[],stakeholders:[]}; }
  function getS(){ return window.S || {get:function(k,d){return d;},set:function(){}}; }
  function getFrameworks(){ return window.FRAMEWORKS_DB || {}; }
  function getCountries(){ return window.COUNTRIES_DB || {}; }
  function getSectors(){ return window.SECTORS_DB || {}; }

  /* ============ خريطة الأقسام ============ */
  var SITE_MAP = {
    dashboard:     {name:'لوحة التحكم',    icon:'📊', desc:'نظرة عامة على مشاريعك',    keys:['لوحة','لوحه','dashboard','رئيسية','الرئيسية','البداية']},
    ideas:         {name:'أفكاري',         icon:'💡', desc:'الأفكار والمشاريع',         keys:['افكار','أفكار','افكاري','ideas','فكرة','مشروع','مشاريع']},
    roadmap:       {name:'خريطة الطريق',   icon:'🗺️', desc:'مراحل PRiSM',              keys:['خريطة','مراحل','roadmap','PRiSM','دورة','حياة']},
    strategy:      {name:'الاستراتيجية',   icon:'🎯', desc:'SWOT, PESTEL, OKRs',       keys:['استراتيجية','strategy','SWOT','PESTEL','OKR','تحليل','سوات']},
    impact:        {name:'قياس الأثر',     icon:'📈', desc:'SDG + ESG + P5',           keys:['اثر','أثر','impact','SDG','ESG','P5','استدامة']},
    stakeholders:  {name:'أصحاب المصلحة',  icon:'👥', desc:'خريطة الأطراف',            keys:['اصحاب','أصحاب','stakeholders','مصلحة','شركاء','فريق']},
    sales:         {name:'المبيعات',       icon:'💼', desc:'Pipeline + MEDDIC',        keys:['مبيعات','sales','فرص','pipeline','MEDDIC','عميل','عملاء']},
    leadership:    {name:'القيادة',        icon:'🎓', desc:'أنماط وتطوير',             keys:['قيادة','leadership','فريق','team','نمط']},
    budget:        {name:'الميزانية',      icon:'💰', desc:'دخل ومصاريف',              keys:['ميزانية','budget','مصاريف','فلوس','تمويل','رصيد','دخل','مصروف']},
    files:         {name:'الملفات',        icon:'📁', desc:'ملفات المشروع',            keys:['ملفات','files','وثائق','مستندات','رفع']},
    tasks:         {name:'المهام',         icon:'📝', desc:'المهام والمراحل',          keys:['مهام','tasks','مهمة','واجب','متابعة']},
    notes:         {name:'ملاحظاتي',       icon:'📔', desc:'ملاحظات المشروع',          keys:['ملاحظات','notes','مذكرة','تدوين']},
    countries:     {name:'الدول والأطر',   icon:'🌍', desc:'مؤشرات الدول',             keys:['دول','دولة','countries','قطر','Qatar','SDG','اطار','أطر']},
    reports:       {name:'التقارير',       icon:'📊', desc:'تحليلات وتقارير',          keys:['تقارير','reports','تحليلات','إحصاء']}
  };

  /* ============ كيفية الاستخدام ============ */
  var HOWTO = {
    ideas:'💡 **إضافة فكرة:**\n\n1️⃣ افتح "أفكاري"\n2️⃣ اضغط "+ فكرة جديدة"\n3️⃣ املأ البيانات\n4️⃣ اختر القطاع والدولة\n5️⃣ احفظ',
    strategy:'🎯 **بناء استراتيجية:**\n\n1️⃣ افتح "الاستراتيجية"\n2️⃣ اختر مشروعاً من الأعلى\n3️⃣ ابدأ بـ SWOT (نقاط القوة/الضعف/الفرص/التهديدات)\n4️⃣ انتقل إلى PESTEL\n5️⃣ ثم OKRs',
    roadmap:'🗺️ **خريطة الطريق:**\n\n• مراحل PRiSM الست:\n  🔍 ما قبل المشروع\n  📐 التصميم\n  🏗️ البناء\n  ⚙️ التشغيل\n  🏁 الإغلاق\n  🌟 تحقيق المنفعة\n\n1️⃣ اختر المشروع\n2️⃣ اضغط على المرحلة\n3️⃣ أضف مهام',
    impact:'📈 **قياس الأثر:**\n\n1️⃣ افتح "قياس الأثر"\n2️⃣ اختر مشروعاً\n3️⃣ اختر أهداف SDG (17 هدف)\n4️⃣ املأ محاور P5 الخمسة\n5️⃣ قيّم ESG\n\n💡 P5: People, Planet, Prosperity, Process, Product',
    sales:'💼 **إدارة المبيعات:**\n\n1️⃣ افتح "المبيعات"\n2️⃣ "+ فرصة جديدة"\n3️⃣ ادخل بيانات العميل\n4️⃣ طبّق إطار MEDDIC:\n  M - Metrics\n  E - Economic Buyer\n  D - Decision Criteria\n  D - Decision Process\n  I - Identify Pain\n  C - Champion',
    budget:'💰 **الميزانية:**\n\n📈 زر "+ دخل" للتمويل والمنح\n📉 زر "+ مصروف" للتكاليف\n\n• 16 تصنيفاً متاحاً\n• رصيد تلقائي\n• تصنيف حسب النوع',
    tasks:'📝 **المهام:**\n\n1️⃣ افتح "المهام"\n2️⃣ "+ مهمة"\n3️⃣ اربطها بمشروع (اختياري)\n4️⃣ حدد تاريخ التسليم\n\n💡 ستظهر في لوحة التحكم',
    files:'📁 **الملفات:**\n\n1️⃣ افتح "الملفات"\n2️⃣ اختر مشروعاً\n3️⃣ "📤 رفع ملف"\n\n📦 الحد 25 MB\n☁️ مزامنة تلقائية عبر Supabase',
    countries:'🌍 **الدول والأطر:**\n\n🌍 تبويب "الدول": مؤشرات ESG/SDG لـ 9 دول\n📚 تبويب "الأطر": 17 إطار دولي\n\n💡 يمكنك تعيين دولتك من أي بطاقة',
    leadership:'🎓 **اختبار القيادة:**\n\n1️⃣ افتح "القيادة"\n2️⃣ "▶ ابدأ الاختبار"\n3️⃣ أجب على 10 أسئلة\n4️⃣ اعرف نمطك:\n  📢 Telling\n  💬 Selling\n  🤝 Participating\n  🎯 Delegating',
    dashboard:'📊 **لوحة التحكم:**\n\n• إحصائيات رئيسية\n• مهام قادمة\n• القمع البيعي\n• آخر الأفكار\n• اقتباس اليوم',
    stakeholders:'👥 **أصحاب المصلحة:**\n\n1️⃣ افتح "أصحاب المصلحة"\n2️⃣ "+ جديد"\n3️⃣ الاسم + الدور + الجهة + التواصل\n\n💡 استخدمها لخريطة أطراف المشروع',
    notes:'📔 **ملاحظاتي:**\n\n1️⃣ "+ ملاحظة"\n2️⃣ اكتب العنوان والتفاصيل\n\n💾 حفظ تلقائي أثناء الكتابة'
  };

  /* ============ اقتراحات ============ */
  var SUGG_POOL = [
    'ملخص مساحتي',
    'كم مشروع عندي؟',
    'شنو SWOT؟',
    'كيف أضيف فكرة؟',
    'افتح المبيعات',
    'مؤشرات قطر',
    'كم مهامي المتبقية؟',
    'كيف أحسب الأثر؟',
    'شنو PRiSM؟',
    'افتح الاستراتيجية',
    'قارن بين قطر والإمارات',
    'كم رصيدي؟',
    'نصائح تطوير أعمال',
    'أطر المبيعات',
    'افتح خريطة الطريق'
  ];

  function pickRandom(arr, n){
    var copy = arr.slice(); var out = [];
    for(var i = 0; i < n && copy.length; i++){
      var idx = Math.floor(Math.random() * copy.length);
      out.push(copy.splice(idx, 1)[0]);
    }
    return out;
  }

  /* ============ تطبيع النص العربي ============ */
  function normalizeArabic(s){
    return String(s || '')
      .replace(/[\u064B-\u0652\u0670\u0640]/g, '')
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/[ىئ]/g, 'ي')
      .replace(/ؤ/g, 'و')
      .replace(/[؟?.,،!؛;:]/g, ' ')
      .replace(/\s+/g, ' ')
      .toLowerCase()
      .trim();
  }

  function fuzzyMatch(text, keyword){
    text = text || ''; keyword = keyword || '';
    if(!text || !keyword) return false;
    if(text.indexOf(keyword) > -1) return true;
    if(keyword.length >= 4 && text.indexOf(keyword.slice(0, 3)) > -1) return true;
    return false;
  }

  /* ============ Toggle / Open ============ */
  function toggleAI(){
    var p = document.getElementById('aiPanel'); if(!p) return;
    var willOpen = !p.classList.contains('show');
    p.classList.toggle('show');
    if(willOpen){
      var fm = document.getElementById('fabMenu'); if(fm) fm.classList.remove('show');
      var fmm = document.getElementById('fabMain'); if(fmm) fmm.classList.remove('active');
      var aiBtn = document.getElementById('aiFab'); if(aiBtn) aiBtn.classList.remove('hidden');
      var m = document.getElementById('aiMessages');
      if(m && !m.children.length) initAI();
    }
  }

  /* ============ Init ============ */
  function initAI(){
    var s = document.getElementById('aiSuggestions'); if(!s) return;
    var picks = pickRandom(SUGG_POOL, 5);
    var html = '';
    picks.forEach(function(x){ html += '<button class="ai-suggestion">' + x + '</button>'; });
    s.innerHTML = html;
    s.querySelectorAll('.ai-suggestion').forEach(function(b){
      b.addEventListener('click', function(){
        var inp = document.getElementById('aiInput');
        if(inp) inp.value = b.textContent;
        sendAI();
      });
    });

    var sp = getSpace();
    var name = (sp.profile && sp.profile.name) || '';
    var country = (sp.profile && sp.profile.country) || 'QA';
    var countryInfo = getCountries()[country] || {flag:'🌍', name:''};
    var intro = (name ? '👋 أهلاً ' + name.split(' ')[0] + '! ' : '👋 أهلاً! ') +
      countryInfo.flag + '\n\n' +
      'أنا **مستشارك الذكي** 🤖\n\n' +
      '✨ **أعرف كل شي عن مساحتك:**\n' +
      '• 📊 إحصائيات مشاريعك وأفكارك\n' +
      '• 💼 المبيعات والقمع البيعي\n' +
      '• 🌍 مؤشرات 9 دول عربية\n' +
      '• 📚 17 إطار دولي (SWOT, PESTEL, MEDDIC...)\n' +
      '• 📖 شرح كل شيء خطوة بخطوة\n\n' +
      '💡 **جرّب:**\n' +
      '• "ملخص مساحتي"\n' +
      '• "شنو SWOT؟"\n' +
      '• "افتح المبيعات"\n' +
      '• "مؤشرات قطر"\n' +
      '• "كيف أضيف فكرة؟"\n\n' +
      '📝 أفهم العامية والفصحى!';
    addAIMessage('bot', intro);
  }

  /* ============ إضافة رسالة ============ */
  function addAIMessage(type, text){
    var c = document.getElementById('aiMessages'); if(!c) return;
    var m = document.createElement('div');
    m.className = 'ai-msg ' + type;
    var html = String(text)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    // Bold
    html = html.replace(/\*\*([^*\n]+?)\*\*/g, '<b>$1</b>');
    // Italic
    html = html.replace(/(^|\s)_([^_\n]+?)_(\s|$)/g, '$1<i>$2</i>$3');
    // Code
    html = html.replace(/`([^`\n]+?)`/g, '<code style="background:rgba(0,0,0,.25);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:.85em;direction:ltr">$1</code>');
    m.innerHTML = html;
    c.appendChild(m);
    c.scrollTop = c.scrollHeight;
  }

  /* ============ Send ============ */
  function sendAI(){
    var inp = document.getElementById('aiInput'); if(!inp) return;
    var q = inp.value.trim(); if(!q) return;
    addAIMessage('user', q); inp.value = '';
    var c = document.getElementById('aiMessages');
    var typing = null;
    if(c){
      typing = document.createElement('div');
      typing.className = 'ai-msg bot';
      typing.innerHTML = '<span class="ai-dots"><span></span><span></span><span></span></span>';
      c.appendChild(typing); c.scrollTop = c.scrollHeight;
    }
    setTimeout(function(){
      if(typing && typing.parentNode) typing.parentNode.removeChild(typing);
      addAIMessage('bot', aiRespond(q));
    }, 500);
  }

  /* ============ الرد الرئيسي ============ */
  function aiRespond(q){
    var raw = String(q).trim();
    if(!raw) return '🤔 اكتب سؤالك.';

    var lower = normalizeArabic(raw);
    var today = new Date().toISOString().slice(0,10);
    var now = new Date();
    var r;

    // 1. تنقل
    r = detectNavigation(lower); if(r) return r;

    // 2. كيف أستخدم
    r = detectHowTo(lower); if(r) return r;

    // 3. استعلامات البيانات
    r = answerDataQuery(lower, today, now); if(r) return r;

    // 4. الأطر
    r = answerFrameworkQuery(lower); if(r) return r;

    // 5. الدول
    r = answerCountryQuery(lower); if(r) return r;

    // 6. روابط ومساعدات عامة
    r = answerGeneral(lower); if(r) return r;

    // 7. اقتباس/نصيحة
    r = answerTips(lower); if(r) return r;

    // 8. بحث عام
    r = generalSearch(raw); if(r) return r;

    // fallback
    return '🤔 ما فهمت "' + raw + '" تماماً.\n\n' +
      '💡 **جرّب:**\n\n' +
      '🧭 **للتنقل:**\n• "افتح المبيعات"\n• "افتح الأفكار"\n\n' +
      '❓ **للاستفسار:**\n• "كيف أضيف فكرة؟"\n• "شنو SWOT؟"\n\n' +
      '📊 **بياناتك:**\n• "ملخص مساحتي"\n• "كم مشروع عندي؟"\n\n' +
      '🌍 **مؤشرات:**\n• "مؤشرات قطر"';
  }

  /* ============ 1. التنقل ============ */
  var NAV_VERBS = ['افتح','روح','اذهب','خذني','انتقل','ودني','ابغى','ابي','اريد','شوف','اعرض','عرض','اظهر','سير','خدني','open'];

  function detectNavigation(lower){
    var hasNavVerb = false;
    for(var i=0;i<NAV_VERBS.length;i++){
      if(fuzzyMatch(lower, NAV_VERBS[i])){ hasNavVerb = true; break; }
    }

    var tabKeys = Object.keys(SITE_MAP);
    var foundTab = null;
    for(var t=0;t<tabKeys.length;t++){
      var keys = SITE_MAP[tabKeys[t]].keys;
      for(var k=0;k<keys.length;k++){
        var key = keys[k].toLowerCase();
        if(lower === key || lower.indexOf(' '+key+' ') > -1 ||
           lower.indexOf(key+' ') === 0 ||
           lower.indexOf(' '+key) === lower.length - key.length - 1 ||
           fuzzyMatch(lower, key)){
          foundTab = tabKeys[t]; break;
        }
      }
      if(foundTab) break;
    }
    if(!foundTab) return null;

    // إذا لم يكن هناك فعل تنقل والسؤال طويل، لا تنقّل
    if(!hasNavVerb && lower.split(' ').filter(Boolean).length > 4) return null;
    // إذا لم يكن هناك فعل تنقل، ولم يكن النص مجرد اسم القسم، لا تنقل
    if(!hasNavVerb && lower.split(' ').filter(Boolean).length > 2) return null;

    try{
      if(typeof window.switchTab === 'function'){
        window.switchTab(foundTab);
        var s = SITE_MAP[foundTab];
        return '✅ فتحت ' + s.icon + ' **' + s.name + '**\n\n💡 ' + s.desc;
      }
    }catch(e){}
    return null;
  }

  /* ============ 2. كيف ============ */
  function detectHowTo(lower){
    var isHowTo = fuzzyMatch(lower,'كيف') || fuzzyMatch(lower,'طريقه') ||
                  fuzzyMatch(lower,'شرح') || fuzzyMatch(lower,'اشرح') ||
                  fuzzyMatch(lower,'وضح') || fuzzyMatch(lower,'علمني') ||
                  fuzzyMatch(lower,'كيفيه') || fuzzyMatch(lower,'استخدم') ||
                  fuzzyMatch(lower,'اسوي') || fuzzyMatch(lower,'اضيف') ||
                  fuzzyMatch(lower,'احط') || fuzzyMatch(lower,'ازيد') ||
                  fuzzyMatch(lower,'how');
    if(!isHowTo) return null;

    var tabKeys = Object.keys(HOWTO);
    for(var i=0;i<tabKeys.length;i++){
      var keys = SITE_MAP[tabKeys[i]] ? SITE_MAP[tabKeys[i]].keys : [];
      for(var k=0;k<keys.length;k++){
        if(fuzzyMatch(lower, keys[k].toLowerCase())) return HOWTO[tabKeys[i]];
      }
    }
    return null;
  }

  /* ============ 3. استعلامات البيانات ============ */
  function answerDataQuery(lower, today, now){
    var sp = getSpace();
    var projects = sp.projects || [];
    var ideas = sp.ideas || [];
    var tasks = sp.tasks || [];
    var pending = tasks.filter(function(t){ return !t.done; });
    var deals = sp.salesPipeline || [];

    /* ---- ملخص كامل ---- */
    if(lower.indexOf('ملخص') > -1 || lower.indexOf('كل شي') > -1 || lower.indexOf('وضعي') > -1){
      var name = (sp.profile && sp.profile.name) || 'صديقي';
      var country = (sp.profile && sp.profile.country) || 'QA';
      var cInfo = getCountries()[country] || {flag:'🌍', name:''};
      var inc = (sp.budget || []).filter(function(b){ return b.type === 'income'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
      var exp = (sp.budget || []).filter(function(b){ return b.type === 'expense'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
      var bal = inc - exp;
      var won = deals.filter(function(d){ return d.stage === 'won'; }).length;

      return '📊 **ملخص مساحة ' + name + '** ' + cInfo.flag + '\n' +
        '━━━━━━━━━━━━━━━\n\n' +
        '💼 **المشاريع:** ' + projects.length + '\n' +
        '💡 **الأفكار:** ' + ideas.length + '\n' +
        '📝 **المهام:** ' + pending.length + ' متبقية / ' + tasks.length + ' كلي\n' +
        '💼 **الفرص البيعية:** ' + deals.length + ' (' + won + ' رابحة)\n' +
        '👥 **أصحاب المصلحة:** ' + (sp.stakeholders || []).length + '\n' +
        '📁 **الملفات:** ' + Object.keys(sp.projectFiles || {}).length + ' مجموعة\n\n' +
        '💰 **الميزانية:**\n' +
        '• دخل: ' + inc.toFixed(0) + '\n' +
        '• مصروف: ' + exp.toFixed(0) + '\n' +
        '• رصيد: **' + bal.toFixed(0) + '** ' + (bal >= 0 ? '👍' : '⚠️') + '\n\n' +
        '📔 الملاحظات: ' + (sp.notes || []).length;
    }

    /* ---- مشاريع ---- */
    if(lower.indexOf('مشروع') > -1 || lower.indexOf('مشاريع') > -1){
      if(!projects.length) return '💼 ما عندك مشاريع بعد.\n\n➕ روح "أفكاري" وحوّل فكرة لمشروع';
      var lines = projects.slice(0, 8).map(function(p){
        var stage = (window.PRISM_STAGES || {})[p.stage] || {name:'—', icon:'❓'};
        return '• ' + stage.icon + ' **' + p.name + '** (' + stage.name + ')';
      });
      return '💼 **مشاريعك (' + projects.length + '):**\n\n' + lines.join('\n');
    }

    /* ---- أفكار ---- */
    if(lower.indexOf('افكار') > -1 || lower.indexOf('افكاري') > -1 || lower.indexOf('فكره') > -1){
      if(!ideas.length) return '💡 ما عندك أفكار بعد.\n\n➕ روح "أفكاري" → "+ فكرة جديدة"';
      var list = ideas.slice(0, 6).map(function(idea){
        var t = (window.IDEA_TYPES || {})[idea.type] || {icon:'💡'};
        return '• ' + t.icon + ' ' + idea.name;
      });
      return '💡 **أفكارك (' + ideas.length + '):**\n\n' + list.join('\n') +
        (ideas.length > 6 ? '\n\n💡 ...و ' + (ideas.length - 6) + ' أكثر' : '');
    }

    /* ---- مهام ---- */
    if(lower.indexOf('مهام') > -1 || lower.indexOf('مهمه') > -1 || lower.indexOf('واجب') > -1){
      if(!tasks.length) return '📝 ما عندك مهام.\n\n➕ روح "المهام" → "+ مهمة"';
      var overdue = pending.filter(function(t){ return t.due && t.due < today; });
      var dueToday = pending.filter(function(t){ return t.due === today; });
      var msg = '📝 **ملخص المهام:**\n• متبقية: **' + pending.length + '**\n• مكتملة: **' + (tasks.length - pending.length) + '**';
      if(overdue.length) msg += '\n\n⚠️ **متأخرة (' + overdue.length + '):**\n' + overdue.slice(0,4).map(function(t){ return '• ' + t.title; }).join('\n');
      if(dueToday.length) msg += '\n\n📌 **اليوم (' + dueToday.length + '):**\n' + dueToday.slice(0,4).map(function(t){ return '• ' + t.title; }).join('\n');
      return msg;
    }

    /* ---- مبيعات ---- */
    if(lower.indexOf('مبيعات') > -1 || lower.indexOf('فرص') > -1 || lower.indexOf('عملاء') > -1){
      if(!deals.length) return '💼 ما عندك فرص بيعية.\n\n➕ روح "المبيعات" → "+ فرصة جديدة"';
      var won = deals.filter(function(d){ return d.stage === 'won'; }).length;
      var lost = deals.filter(function(d){ return d.stage === 'lost'; }).length;
      var totalValue = deals.reduce(function(a,b){ return a + (parseFloat(b.value)||0); }, 0);
      var wonValue = deals.filter(function(d){ return d.stage === 'won'; }).reduce(function(a,b){ return a + (parseFloat(b.value)||0); }, 0);
      var winRate = (won + lost) ? Math.round(won / (won + lost) * 100) : 0;
      return '💼 **المبيعات:**\n\n' +
        '📊 إجمالي الفرص: **' + deals.length + '**\n' +
        '🎉 رابحة: **' + won + '**\n' +
        '❌ خاسرة: **' + lost + '**\n' +
        '📈 نسبة الفوز: **' + winRate + '%**\n\n' +
        '💰 قيمة إجمالية: **' + totalValue.toFixed(0) + '**\n' +
        '💵 إيراد محقق: **' + wonValue.toFixed(0) + '**';
    }

    /* ---- ميزانية ---- */
    if(lower.indexOf('ميزانيه') > -1 || lower.indexOf('رصيد') > -1 || lower.indexOf('دخل') > -1 ||
       lower.indexOf('مصروف') > -1 || lower.indexOf('مصاريف') > -1 || lower.indexOf('فلوس') > -1){
      var inc = (sp.budget || []).filter(function(b){ return b.type === 'income'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
      var exp = (sp.budget || []).filter(function(b){ return b.type === 'expense'; }).reduce(function(a,b){ return a + (parseFloat(b.amount)||0); }, 0);
      var bal = inc - exp;
      return '💰 **الميزانية:**\n\n' +
        '📈 دخل: **' + inc.toFixed(0) + '**\n' +
        '📉 مصروف: **' + exp.toFixed(0) + '**\n' +
        '💼 رصيد: **' + bal.toFixed(0) + '** ' + (bal >= 0 ? '👍' : '⚠️');
    }

    /* ---- أصحاب مصلحة ---- */
    if(lower.indexOf('اصحاب') > -1 || lower.indexOf('مصلحه') > -1 || lower.indexOf('شركاء') > -1){
      var sh = sp.stakeholders || [];
      if(!sh.length) return '👥 ما عندك أصحاب مصلحة.\n\n➕ روح "أصحاب المصلحة" → "+ جديد"';
      return '👥 **أصحاب المصلحة (' + sh.length + '):**\n\n' +
        sh.slice(0, 6).map(function(s){ return '• ' + s.name + (s.role ? ' — ' + s.role : ''); }).join('\n');
    }

    /* ---- ملاحظات ---- */
    if(lower.indexOf('ملاحظات') > -1 || lower.indexOf('ملاحظه') > -1){
      var notes = sp.notes || [];
      if(!notes.length) return '📔 ما عندك ملاحظات.';
      return '📔 **ملاحظاتك:** ' + notes.length + '\n\nآخر: **' + (notes[0].title || 'بدون عنوان') + '**';
    }

    /* ---- قيادة ---- */
    if(lower.indexOf('قياده') > -1 || lower.indexOf('نمط') > -1){
      var r = sp.leadershipAssessment;
      if(!r) return '🎓 ما عملت اختبار القيادة بعد.\n\n➕ روح "القيادة" → "▶ ابدأ الاختبار"';
      var styles = {
        telling:{name:'التوجيهي 📢', desc:'تقود بتعليمات مباشرة'},
        selling:{name:'البيعي 💬', desc:'تقود بالإقناع'},
        participating:{name:'المشارك 🤝', desc:'تقود بالمشاركة'},
        delegating:{name:'المفوض 🎯', desc:'تقود بالثقة'}
      };
      var w = styles[r.winner] || {name:'—', desc:''};
      return '🎓 **نمط قيادتك:** ' + w.name + '\n\n' + w.desc;
    }

    return null;
  }

  /* ============ 4. الأطر ============ */
  function answerFrameworkQuery(lower){
    var fw = getFrameworks();
    var keys = Object.keys(fw);
    if(!keys.length) return null;

    // بحث بالاسم أو الكود
    for(var i = 0; i < keys.length; i++){
      var name = keys[i];
      var nameLower = normalizeArabic(name);
      var code = (fw[name].code || '').toLowerCase();
      if(lower.indexOf(nameLower) > -1 || (code && lower.indexOf(code) > -1)){
        var f = fw[name];
        var msg = f.icon + ' **' + f.title + '**' + (f.titleEn ? ' (' + f.titleEn + ')' : '') + '\n\n' +
          '📝 **الوصف:** ' + f.desc + '\n\n';
        if(f.when) msg += '⏰ **متى يُستخدم:** ' + f.when + '\n\n';
        if(f.steps && f.steps.length) msg += '📋 **الخطوات/المكونات:**\n' + f.steps.map(function(s){ return '• ' + s; }).join('\n') + '\n\n';
        if(f.source) msg += '📚 **المصدر:** ' + f.source;
        return msg;
      }
    }
    return null;
  }

  /* ============ 5. الدول ============ */
  function answerCountryQuery(lower){
    var countries = getCountries();
    var keys = Object.keys(countries);
    for(var i = 0; i < keys.length; i++){
      var c = countries[keys[i]];
      var nameAr = normalizeArabic(c.name);
      var nameEn = (c.nameEn || '').toLowerCase();
      if(lower.indexOf(nameAr) > -1 || (nameEn && lower.indexOf(nameEn) > -1)){
        var msg = c.flag + ' **' + c.name + ' (' + c.nameEn + ')**\n\n' +
          '📊 **المؤشرات:**\n' +
          '• ESG Score: **' + c.esgScore + '** (#' + c.esgRank + ')\n' +
          '• SDG Index: **' + c.sdgIndex + '** (#' + c.sdgRank + ')\n\n' +
          '🏭 **القطاعات:**\n' + c.keySectors.slice(0,5).map(function(x){ return '• ' + x; }).join('\n') + '\n\n' +
          '♻️ **تركيز الاستدامة:**\n' + c.sustainabilityFocus.slice(0,3).map(function(x){ return '• ' + x; }).join('\n') + '\n\n' +
          '🎁 **الحوافز:**\n' + c.incentives.slice(0,3).map(function(x){ return '• ' + x; }).join('\n') + '\n\n' +
          '🎯 **الرؤية:** ' + c.vision;
        return msg;
      }
    }
    return null;
  }

  /* ============ 6. عام ============ */
  function answerGeneral(lower){
    // تحيات
    if(/^(مرحبا|هلا|اهلا|هاي|السلام عليكم|صباح|مساء|hi|hello)/.test(lower)){
      if(lower.indexOf('السلام') > -1) return '👋 وعليكم السلام ورحمة الله! كيف أساعدك؟';
      if(lower.indexOf('صباح') > -1) return '☀️ صباح النور! جاهز أساعدك.';
      if(lower.indexOf('مساء') > -1) return '🌆 مساء النور! كيف أساعدك؟';
      return '👋 أهلاً! اسألني عن مشاريعك أو الأطر أو الدول.';
    }
    if(lower.indexOf('كيف حالك') > -1 || lower.indexOf('كيفك') > -1){
      return '😊 بخير! جاهز لخدمتك.';
    }
    if(lower.indexOf('شكرا') > -1 || lower.indexOf('مشكور') > -1){
      return '🙏 على الرحب والسعة! 💙';
    }
    if(lower.indexOf('من انت') > -1 || lower.indexOf('مين انت') > -1){
      return '🤖 **أنا مستشارك الذكي**\n\n✨ أعرف:\n• بياناتك (مشاريع، أفكار، مبيعات)\n• 17 إطار دولي\n• مؤشرات 9 دول\n• 10 قطاعات\n\n💡 جرّب "ملخص مساحتي"';
    }
    if(lower.indexOf('اقسام') > -1 || lower.indexOf('قائمه') > -1){
      var keys = Object.keys(SITE_MAP);
      var out = '🗺️ **أقسام الموقع (' + keys.length + '):**\n\n';
      keys.forEach(function(k){
        var s = SITE_MAP[k];
        out += s.icon + ' **' + s.name + '** — ' + s.desc + '\n';
      });
      return out;
    }
    if(lower.indexOf('اطار') > -1 || lower.indexOf('أطر') > -1 || lower.indexOf('frameworks') > -1){
      var fw = getFrameworks();
      var fwKeys = Object.keys(fw);
      var out = '📚 **الأطر المتوفرة (' + fwKeys.length + '):**\n\n';
      fwKeys.forEach(function(k){
        var f = fw[k];
        out += f.icon + ' ' + f.title + '\n';
      });
      return out + '\n💡 اكتب اسم الإطار لمعرفة تفاصيله';
    }
    if(lower.indexOf('دول') > -1 || lower.indexOf('countries') > -1){
      var countries = getCountries();
      var cKeys = Object.keys(countries);
      var out = '🌍 **الدول المتوفرة (' + cKeys.length + '):**\n\n';
      cKeys.forEach(function(k){
        var c = countries[k];
        out += c.flag + ' ' + c.name + ' (ESG: ' + c.esgScore + ' · SDG: ' + c.sdgIndex + ')\n';
      });
      return out + '\n💡 اكتب اسم دولة لتفاصيلها';
    }
    if(lower.indexOf('قطاع') > -1 || lower.indexOf('sectors') > -1){
      var sectors = getSectors();
      var sKeys = Object.keys(sectors);
      var out = '🏭 **القطاعات (' + sKeys.length + '):**\n\n';
      sKeys.forEach(function(k){
        var s = sectors[k];
        out += s.icon + ' ' + s.name + '\n';
      });
      return out;
    }
    if(lower.indexOf('رابط') > -1 || lower.indexOf('بوابه') > -1){
      return '🔗 **روابط مهمة:**\n\n' +
        '🇶🇦 • وزارة التجارة: moci.gov.qa\n' +
        '💰 • QFC: qfc.qa\n' +
        '🎓 • رؤية قطر: qa2030.com\n\n' +
        '💡 استخدم قسم "الدول والأطر" للمزيد';
    }
    return null;
  }

  /* ============ 7. نصائح ============ */
  function answerTips(lower){
    var tips = window.TIPS || [];
    var quotes = window.QUOTES || [];
    if(lower.indexOf('نصيحه') > -1 || lower.indexOf('نصائح') > -1 || lower.indexOf('نصيح') > -1){
      if(!tips.length) return '💡 ركّز على مشكلة واحدة وحلّها بامتياز.';
      return tips[Math.floor(Math.random() * tips.length)];
    }
    if(lower.indexOf('اقتباس') > -1 || lower.indexOf('حكمه') > -1){
      if(!quotes.length) return '✨ "لا تنتظر الفرصة، اصنعها."';
      var q = quotes[Math.floor(Math.random() * quotes.length)];
      return '✨ **"' + q.t + '"**\n— ' + q.a;
    }
    if(lower.indexOf('محبط') > -1 || lower.indexOf('تعبان') > -1){
      if(quotes.length){
        var q2 = quotes[Math.floor(Math.random() * quotes.length)];
        return '💪 **لا تيأس!**\n\n✨ "' + q2.t + '"\n— ' + q2.a;
      }
      return '💪 استمر! كل مشروع ناجح يمر بلحظات صعبة.';
    }
    return null;
  }

  /* ============ 8. بحث عام ============ */
  function generalSearch(raw){
    if(!raw || raw.length < 3) return null;
    var sp = getSpace();
    var q = raw.toLowerCase();
    // بحث في المشاريع
    var mp = (sp.projects || []).find(function(p){ return p.name && p.name.toLowerCase().indexOf(q) > -1; });
    if(mp) return '💼 **وجدته!**\n\n📌 ' + mp.name;
    // بحث في الأفكار
    var mi = (sp.ideas || []).find(function(i){ return i.name && i.name.toLowerCase().indexOf(q) > -1; });
    if(mi) return '💡 **وجدتها!**\n\n📌 ' + mi.name;
    return null;
  }

  /* ============ Bind Events ============ */
  function bindAIEvents(){
    var aiFab = document.getElementById('aiFab');
    var aiClose = document.getElementById('aiClose');
    var aiSend = document.getElementById('aiSend');
    var aiInput = document.getElementById('aiInput');

    if(aiFab && !aiFab._aiBound){
      aiFab.addEventListener('click', toggleAI);
      aiFab._aiBound = true;
    }
    if(aiClose && !aiClose._aiBound){
      aiClose.addEventListener('click', toggleAI);
      aiClose._aiBound = true;
    }
    if(aiSend && !aiSend._aiBound){
      aiSend.addEventListener('click', sendAI);
      aiSend._aiBound = true;
    }
    if(aiInput && !aiInput._aiBound){
      aiInput.addEventListener('keydown', function(e){
        if(e.key === 'Enter'){ e.preventDefault(); sendAI(); }
      });
      aiInput._aiBound = true;
    }
  }

  /* ============ Exports ============ */
  window.toggleAI = toggleAI;
  window.initAI = initAI;
  window.addAIMessage = addAIMessage;
  window.sendAI = sendAI;
  window.aiRespond = aiRespond;
  window.bindAIEvents = bindAIEvents;

  /* ============ Auto-bind ============ */
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(bindAIEvents, 300); });
  } else {
    setTimeout(bindAIEvents, 300);
  }

  console.log('🤖 AI Advisor loaded');
})();