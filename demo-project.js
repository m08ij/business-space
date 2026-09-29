/* ============================================================
   🎬 demo-project.js v2 — إنشاء مشروع افتراضي كامل
   ✅ إضافة projectId + project لكل العناصر (مهام/ميزانية/مصلحة/فرص)
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

  /* ============ البيانات ============ */
  function buildDemoData(){
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
        { title: 'إنهاء نموذج AI للري الدقيق',       due: daysFromNow(20) },
        { title: 'اجتماع مع وزارة البلدية للتصاريح', due: daysFromNow(5)  },
        { title: 'اختيار 3 موردين للحساسات',         due: daysFromNow(12) },
        { title: 'كتابة عرض QFFD للمنحة',            due: daysFromNow(8)  },
        { title: 'تصميم لوحة التحكم بالعربية',       due: daysFromNow(25) },
        { title: 'توقيع عقد أول مزرعة تجريبية',      due: daysFromNow(30) },
        { title: 'بناء بروتوكول قياس الأثر (SDG)',   due: daysFromNow(18) },
        { title: 'تجهيز Pitch Deck للمستثمرين',      due: daysFromNow(22) }
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
    var projectName = demo.idea.name;

    var bd = showProgressModal();
    var step = 0;
    var totalSteps = 10;

    function advance(icon, label, delay){
      step++;
      setProgress(bd, Math.round((step / totalSteps) * 100));
      addStep(bd, label, icon);
      return new Promise(function(r){ setTimeout(r, delay || 450); });
    }

    /* 1) الفكرة */
    await advance('💡', 'إنشاء الفكرة: ' + demo.idea.name);
    if(!Array.isArray(sp.ideas)) sp.ideas = [];
    sp.ideas.push(Object.assign({ id: ideaId, createdAt: new Date().toISOString() }, demo.idea));
    save();

    /* 2) المشروع */
    await advance('💼', 'تحويل الفكرة إلى مشروع نشط');
    if(!Array.isArray(sp.projects)) sp.projects = [];
    sp.projects.push({
      id: projectId,
      name: projectName,
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

    /* 3) الاستراتيجية + الأثر */
    await advance('🎯', 'بناء SWOT + PESTEL + OKRs (2 أهداف، 6 نتائج)');
    await advance('📈', 'قياس الأثر: 6 SDG + P5 + ESG');

    /* 4) المهام — مع projectId ✅ */
    await advance('📝', 'إضافة ' + demo.tasks.length + ' مهام موزّعة على المراحل');
    if(!Array.isArray(sp.tasks)) sp.tasks = [];
    demo.tasks.forEach(function(t){
      sp.tasks.push({
        id: uid(), done: false,
        title: t.title,
        project: projectName,
        projectId: projectId,          // ✅ جديد
        due: t.due
      });
    });
    save();

    /* 5) أصحاب المصلحة — مع projectId + project ✅ */
    await advance('👥', 'إضافة ' + demo.stakeholders.length + ' أصحاب مصلحة');
    if(!Array.isArray(sp.stakeholders)) sp.stakeholders = [];
    demo.stakeholders.forEach(function(s){
      sp.stakeholders.push(Object.assign({
        id: uid(),
        projectId: projectId,          // ✅ جديد
        project: projectName,          // ✅ جديد
        createdAt: new Date().toISOString()
      }, s));
    });
    save();

    /* 6) الميزانية — مع projectId + project ✅ */
    await advance('💰', 'الميزانية: 6 بنود (400K دخل · 265K مصروف)');
    if(!Array.isArray(sp.budget)) sp.budget = [];
    demo.budget.forEach(function(b){
      sp.budget.push(Object.assign({
        id: uid(),
        projectId: projectId,          // ✅ جديد
        project: projectName           // ✅ جديد
      }, b));
    });
    save();

    /* 7) المبيعات — مع projectId + project ✅ */
    await advance('💼', 'قمع المبيعات: 3 فرص + MEDDIC مُكتمل');
    if(!Array.isArray(sp.salesPipeline)) sp.salesPipeline = [];
    demo.deals.forEach(function(d){
      sp.salesPipeline.push(Object.assign({
        id: uid(),
        projectId: projectId,          // ✅ جديد
        project: projectName,          // ✅ جديد
        createdAt: new Date().toISOString()
      }, d));
    });
    save();

    /* 8) ربط المهام بالمراحل */
    await advance('🔗', 'ربط المهام بمراحل PRiSM');
    var proj = sp.projects.find(function(p){ return p.id === projectId; });
    if(proj){
      proj.tasks = demo.project.milestones.slice(0, 3).map(function(m){
        return {
          id: uid(),
          title: m.title,
          stage: m.title.indexOf('تصميم') > -1 ? 'design' : (m.title.indexOf('بناء') > -1 ? 'build' : 'pre-project'),
          done: m.progress === 100
        };
      });
    }
    save();

    /* 9) التقارير */
    await advance('📊', 'توليد التقارير والتحليلات');

    /* 10) اكتمل */
    await advance('🎉', 'اكتمل! المشروع جاهز للاستعراض', 800);

    setTimeout(function(){
      bd.remove();
      showSummary(proj, demo);
    }, 700);
  }

  /* ============ ملخص المشروع ============ */
  function showSummary(project, demo){
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop show';
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
          '• افتح <b>المبيعات</b> ← MEDDIC مُكتمل<br>' +
          '• 💥 اضغط <b>زر الحذف التعاقبي</b> لتجربة الحذف الشامل' +
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

  window.runDemoWizard = runDemoWizard;
  window.injectDemoButton = injectDemoButton;

  function install(){
    injectDemoButton();
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

  console.log('🎬 Demo Project module v2 loaded');
})();