/* ============================================================
   🌍 i18n-patch.js — كل المفاتيح الإضافية
   ============================================================ */
(function(){
  'use strict';
  if(!window.i18n || !window.i18n.I18N){ console.warn('i18n-patch: not loaded'); return; }

  var AR = window.i18n.I18N.ar;
  var EN = window.i18n.I18N.en;

  /* ============ Milestones ============ */
  Object.assign(AR, {
    ms_title:'🎯 المعالم الزمنية', ms_sub:'خط زمني مرئي', ms_total:'إجمالي المعالم',
    ms_in_progress:'جارية', ms_completed:'مكتملة', ms_delayed:'متأخرة',
    ms_add:'+ معلم', ms_print:'🖨️ طباعة', ms_empty:'لا معالم', ms_empty_sub:'أضف معالم',
    ms_details:'تفاصيل المعالم', ms_gantt:'مخطط جانت', ms_task:'المهمة', ms_no_dates:'لا تواريخ',
    ms_days:'يوم', ms_progress:'التقدّم', ms_overdue:'متأخرة', ms_update:'تحديث',
    ms_delete_confirm:'حذف المعلم؟', ms_deleted:'🗑 حُذف', ms_progress_prompt:'نسبة الإنجاز:',
    ms_new:'🎯 معلم جديد', ms_edit:'✏️ تعديل', ms_start:'البداية', ms_end:'النهاية',
    ms_owner:'المسؤول', ms_progress_label:'الإنجاز %', ms_status:'الحالة',
    ms_status_not_started:'لم تبدأ', ms_status_in_progress:'جارية', ms_status_completed:'مكتملة',
    ms_status_delayed:'متأخرة', ms_status_on_hold:'معلّقة', ms_notes:'ملاحظات',
    ms_title_required:'أدخل العنوان', ms_added:'✓ أُضيف', ms_updated:'✓ حُدّث'
  });
  Object.assign(EN, {
    ms_title:'🎯 Milestones', ms_sub:'Visual timeline', ms_total:'Total',
    ms_in_progress:'In Progress', ms_completed:'Completed', ms_delayed:'Delayed',
    ms_add:'+ Milestone', ms_print:'🖨️ Print', ms_empty:'No milestones', ms_empty_sub:'Add milestones',
    ms_details:'Details', ms_gantt:'Gantt Chart', ms_task:'Task', ms_no_dates:'No dates',
    ms_days:'days', ms_progress:'Progress', ms_overdue:'Overdue', ms_update:'Update',
    ms_delete_confirm:'Delete milestone?', ms_deleted:'🗑 Deleted', ms_progress_prompt:'Progress:',
    ms_new:'🎯 New Milestone', ms_edit:'✏️ Edit', ms_start:'Start', ms_end:'End',
    ms_owner:'Owner', ms_progress_label:'Progress %', ms_status:'Status',
    ms_status_not_started:'Not Started', ms_status_in_progress:'In Progress', ms_status_completed:'Completed',
    ms_status_delayed:'Delayed', ms_status_on_hold:'On Hold', ms_notes:'Notes',
    ms_title_required:'Enter title', ms_added:'✓ Added', ms_updated:'✓ Updated'
  });

  /* ============ Risks ============ */
  Object.assign(AR, {
    risk_title:'⚠️ سجل المخاطر', risk_sub:'تحليل الاحتمالية × التأثير', risk_total:'إجمالي',
    risk_critical:'حرجة', risk_high:'عالية', risk_medium:'متوسطة', risk_low:'منخفضة',
    risk_add:'+ مخاطرة', risk_empty:'لا مخاطر', risk_empty_sub:'أضف مخاطر',
    risk_list:'قائمة المخاطر', risk_matrix:'مصفوفة المخاطر',
    risk_p1:'نادر',risk_p2:'منخفض',risk_p3:'متوسط',risk_p4:'مرتفع',risk_p5:'شبه مؤكد',
    risk_i1:'ضئيل',risk_i2:'طفيف',risk_i3:'متوسط',risk_i4:'كبير',risk_i5:'كارثي',
    risk_p:'احتمالية', risk_i:'تأثير', risk_impact:'التأثير', risk_probability:'الاحتمالية',
    risk_delete_confirm:'حذف؟', risk_deleted:'🗑 حُذفت', risk_new:'⚠️ مخاطرة جديدة',
    risk_edit:'✏️ تعديل', risk_desc:'الوصف', risk_category:'التصنيف',
    risk_mitigation:'خطة التخفيف', risk_owner:'المسؤول', risk_status:'الحالة',
    risk_status_open:'مفتوحة', risk_status_mitigating:'قيد التخفيف',
    risk_status_closed:'مغلقة', risk_status_accepted:'مقبولة',
    risk_title_required:'أدخل العنوان', risk_added:'✓ أُضيفت', risk_updated:'✓ حُدّثت'
  });
  Object.assign(EN, {
    risk_title:'⚠️ Risk Register', risk_sub:'Probability × Impact', risk_total:'Total',
    risk_critical:'Critical', risk_high:'High', risk_medium:'Medium', risk_low:'Low',
    risk_add:'+ Risk', risk_empty:'No risks', risk_empty_sub:'Add risks',
    risk_list:'Risk List', risk_matrix:'Risk Matrix',
    risk_p1:'Rare',risk_p2:'Low',risk_p3:'Medium',risk_p4:'High',risk_p5:'Almost Certain',
    risk_i1:'Negligible',risk_i2:'Minor',risk_i3:'Moderate',risk_i4:'Major',risk_i5:'Catastrophic',
    risk_p:'Probability', risk_i:'Impact', risk_impact:'Impact', risk_probability:'Probability',
    risk_delete_confirm:'Delete?', risk_deleted:'🗑 Deleted', risk_new:'⚠️ New Risk',
    risk_edit:'✏️ Edit', risk_desc:'Description', risk_category:'Category',
    risk_mitigation:'Mitigation', risk_owner:'Owner', risk_status:'Status',
    risk_status_open:'Open', risk_status_mitigating:'Mitigating',
    risk_status_closed:'Closed', risk_status_accepted:'Accepted',
    risk_title_required:'Enter title', risk_added:'✓ Added', risk_updated:'✓ Updated'
  });

  /* ============ Digest ============ */
  Object.assign(AR, {
    digest_title:'📧 البريد الدوري', digest_sub:'جدولة تقارير', digest_desc:'ملخص دوري عبر البريد',
    digest_schedule:'الجدولة', digest_manual:'يدوي', digest_daily:'يومي', digest_weekly:'أسبوعي', digest_monthly:'شهري',
    digest_subject:'العنوان', digest_sections:'الأقسام',
    digest_sec_tasks:'المهام', digest_sec_projects:'المشاريع', digest_sec_sales:'المبيعات',
    digest_sec_budget:'الميزانية', digest_sec_risks:'المخاطر', digest_sec_milestones:'المعالم', digest_sec_notes:'الملاحظات',
    digest_recipients:'المستلمون', digest_add_recipient:'+ مستلم', digest_no_recipients:'لا مستلمون', digest_no_name:'بدون اسم',
    digest_add_cc:'+ CC', digest_no_cc:'لا CC', digest_preview:'المعاينة', digest_refresh:'تحديث',
    digest_send:'📤 إرسال', digest_copy_body:'📋 نسخ', digest_saved:'✓ حُفظ', digest_refreshed:'✓ تم التحديث',
    digest_delete_confirm:'حذف؟', digest_name:'الاسم', digest_email:'البريد', digest_email_invalid:'بريد خاطئ',
    digest_no_title:'بدون عنوان', digest_summary:'الملخص', digest_footer:'ملخص آلي',
    digest_opened:'✉️ فُتح البريد', digest_new_recipient:'➕ إضافة مستلم', digest_new_cc:'➕ إضافة CC'
  });
  Object.assign(EN, {
    digest_title:'📧 Email Digest', digest_sub:'Schedule reports', digest_desc:'Periodic email summaries',
    digest_schedule:'Schedule', digest_manual:'Manual', digest_daily:'Daily', digest_weekly:'Weekly', digest_monthly:'Monthly',
    digest_subject:'Subject', digest_sections:'Sections',
    digest_sec_tasks:'Tasks', digest_sec_projects:'Projects', digest_sec_sales:'Sales',
    digest_sec_budget:'Budget', digest_sec_risks:'Risks', digest_sec_milestones:'Milestones', digest_sec_notes:'Notes',
    digest_recipients:'Recipients', digest_add_recipient:'+ Recipient', digest_no_recipients:'No recipients', digest_no_name:'No name',
    digest_add_cc:'+ CC', digest_no_cc:'No CC', digest_preview:'Preview', digest_refresh:'Refresh',
    digest_send:'📤 Send', digest_copy_body:'📋 Copy', digest_saved:'✓ Saved', digest_refreshed:'✓ Refreshed',
    digest_delete_confirm:'Delete?', digest_name:'Name', digest_email:'Email', digest_email_invalid:'Invalid email',
    digest_no_title:'No title', digest_summary:'Summary', digest_footer:'Automated summary',
    digest_opened:'✉️ Client opened', digest_new_recipient:'➕ Add recipient', digest_new_cc:'➕ Add CC'
  });

  /* ============ Archive ============ */
  Object.assign(AR, {
    archive_title:'📦 الأرشيف', archive_sub:'مشاريعك المؤرشفة',
    archive_empty:'الأرشيف فارغ', archive_empty_sub:'عند أرشفة مشروع سيظهر هنا',
    archive_projects_archived:'مشاريع مؤرشفة', archive_archived_in:'أُرشف في',
    archive_stages:'مراحل', archive_risks:'مخاطر', archive_tasks:'مهام',
    archive_view:'👁️ عرض', archive_restore:'♻️ استعادة', archive_delete_permanent:'🗑 حذف نهائي',
    archive_move_confirm:'نقل "{name}" للأرشيف؟', archive_moved:'📦 تم النقل',
    archive_restore_confirm:'استعادة "{name}"؟', archive_restored:'♻️ استُعيد',
    archive_delete_confirm:'حذف نهائي؟', archive_deleted:'🗑 حُذف', archive_no_stages:'لا مراحل'
  });
  Object.assign(EN, {
    archive_title:'📦 Archive', archive_sub:'Your archived projects',
    archive_empty:'Archive is empty', archive_empty_sub:'Archived projects will appear here',
    archive_projects_archived:'Archived Projects', archive_archived_in:'Archived',
    archive_stages:'Stages', archive_risks:'Risks', archive_tasks:'Tasks',
    archive_view:'👁️ View', archive_restore:'♻️ Restore', archive_delete_permanent:'🗑 Delete',
    archive_move_confirm:'Move "{name}" to archive?', archive_moved:'📦 Moved',
    archive_restore_confirm:'Restore "{name}"?', archive_restored:'♻️ Restored',
    archive_delete_confirm:'Permanent delete?', archive_deleted:'🗑 Deleted', archive_no_stages:'No stages'
  });

  /* ============ Insights ============ */
  Object.assign(AR, {
    insights_projects:'مشروع', insights_active:'نشط', insights_ideas:'فكرة',
    insights_win_rate:'نسبة الفوز', insights_projects_by_stage:'🗺️ توزيع المشاريع',
    insights_pipeline_title:'💼 القمع البيعي', insights_sdg_title:'🎯 أهداف التنمية'
  });
  Object.assign(EN, {
    insights_projects:'Projects', insights_active:'Active', insights_ideas:'Ideas',
    insights_win_rate:'Win Rate', insights_projects_by_stage:'🗺️ Projects by Stage',
    insights_pipeline_title:'💼 Sales Pipeline', insights_sdg_title:'🎯 SDG Goals'
  });

  /* ============ Smart Wizard ============ */
  Object.assign(AR, {
    spw_title: 'معالج المشروع الذكي',
    spw_sub: 'أجب على الأسئلة وسنبني كل شيء',
    spw_step_of: 'الخطوة {current} من {total}',
    spw_back: 'السابق', spw_next: 'التالي', spw_skip: 'تخطّي', spw_finish: 'إنشاء',
    spw_open_wizard: 'معالج المشروع الذكي',
    spw_card_title: '🧙 معالج المشروع الذكي',
    spw_card_sub: 'أجب على أسئلة سريعة وسنبني كل شيء تلقائياً',
    spw_card_btn: 'ابدأ المعالج',
    spw_fab: 'معالج ذكي',
    spw_q1_name: 'ما اسم مشروعك؟',
    spw_q1_hint: 'اسم واضح ومميز',
    spw_q1_ph: 'مثال: منصة تعليمية ذكية',
    spw_q1_type: 'ما نوع المشروع؟',
    spw_q2_sector: 'في أي قطاع؟',
    spw_q2_sector_hint: 'سنساعدك في اختيار SDG المناسبة',
    spw_q2_country: 'في أي دولة؟',
    spw_q3_story: 'أخبرنا عن المشروع',
    spw_q3_story_hint: 'الوصف والمشكلة والحل',
    spw_q3_desc: 'الوصف المختصر',
    spw_q3_desc_ph: 'ما هو المشروع في سطرين؟',
    spw_q3_problem: 'المشكلة التي يحلّها',
    spw_q3_problem_ph: 'ما المشكلة الحقيقية؟',
    spw_q3_solution: 'الحل المقترح',
    spw_q3_solution_ph: 'كيف ستحلها؟',
    spw_q4_sdg: 'ما أهداف SDG؟',
    spw_q4_sdg_hint: 'اخترنا اقتراحات بناءً على قطاعك',
    spw_q4_sdg_suggest: '💡 نوصي بـ SDG المرتبطة بقطاع "{sector}"',
    spw_q4_count: 'اخترت {n} هدف',
    spw_q5_resources: 'ما الموارد المتاحة؟',
    spw_q5_resources_hint: 'سنساعدك في التخطيط',
    spw_q5_budget: 'الميزانية',
    spw_q5_budget_small: 'محدودة', spw_q5_budget_medium: 'متوسطة', spw_q5_budget_large: 'كبيرة',
    spw_q5_timeline: 'الجدول الزمني',
    spw_q5_time_short: 'سريع (3 أشهر)', spw_q5_time_medium: 'متوسط (6 أشهر)', spw_q5_time_long: 'طويل (سنة)',
    spw_q6_team: 'حجم الفريق؟',
    spw_q6_team_hint: 'يساعدنا في اقتراح الأدوار',
    spw_q6_team_solo: 'فرد واحد', spw_q6_team_small: '2-5 أفراد',
    spw_q6_team_medium: '6-20 فرد', spw_q6_team_large: 'أكثر من 20',
    spw_q7_summary: 'ملخص المشروع',
    spw_q7_summary_hint: 'مراجعة سريعة قبل الإنشاء',
    spw_q7_will_create: 'سننشئ لك تلقائياً:',
    spw_sum_idea: 'الفكرة في "أفكاري"',
    spw_sum_project: 'المشروع في "خريطة الطريق"',
    spw_sum_sdg: '{n} أهداف SDG',
    spw_sum_budget: '{n} بنود ميزانية',
    spw_sum_milestones: '{n} معالم زمنية',
    spw_sum_strategy: 'SWOT + OKRs تمهيدية',
    spw_err_name: 'أدخل اسم المشروع',
    spw_success_title: 'تم إنشاء المشروع!',
    spw_success_sdg: 'أهداف SDG', spw_success_milestones: 'معالم', spw_success_tasks: 'مهام',
    spw_success_hint: 'اذهب إلى "خريطة الطريق" لتتبع المراحل، أو "قياس الأثر" لمراجعة SDG.',
    spw_open_project: 'افتح المشروع',
    spw_obj_launch: 'إطلاق',
    spw_kr_1: 'إكمال 100% من المهام الأساسية',
    spw_kr_2: 'تحقيق 80% من رضا العملاء',
    spw_kr_3: 'إطلاق النسخة الأولى',
    spw_budget_note: 'بند تمهيدي',
    spw_task_1: 'تعريف الفريق والأدوار',
    spw_task_2: 'إعداد خطة العمل التفصيلية',
    spw_task_3: 'بدء التنفيذ'
  });
  Object.assign(EN, {
    spw_title: 'Smart Project Wizard',
    spw_sub: 'Answer questions and we build everything',
    spw_step_of: 'Step {current} of {total}',
    spw_back: 'Back', spw_next: 'Next', spw_skip: 'Skip', spw_finish: 'Create',
    spw_open_wizard: 'Smart Project Wizard',
    spw_card_title: '🧙 Smart Project Wizard',
    spw_card_sub: 'Answer quick questions and we auto-build everything',
    spw_card_btn: 'Start Wizard',
    spw_fab: 'Smart Wizard',
    spw_q1_name: 'What is your project name?',
    spw_q1_hint: 'Clear and distinctive name',
    spw_q1_ph: 'e.g. Smart Learning Platform',
    spw_q1_type: 'What type of project?',
    spw_q2_sector: 'Which sector?',
    spw_q2_sector_hint: 'We will suggest relevant SDGs',
    spw_q2_country: 'Which country?',
    spw_q3_story: 'Tell us about the project',
    spw_q3_story_hint: 'Description, problem, and solution',
    spw_q3_desc: 'Brief description',
    spw_q3_desc_ph: 'What is the project in 2 lines?',
    spw_q3_problem: 'The problem it solves',
    spw_q3_problem_ph: 'What is the real problem?',
    spw_q3_solution: 'Proposed solution',
    spw_q3_solution_ph: 'How will you solve it?',
    spw_q4_sdg: 'Which SDG goals?',
    spw_q4_sdg_hint: 'We suggested based on your sector',
    spw_q4_sdg_suggest: '💡 Recommendations for "{sector}" sector',
    spw_q4_count: 'Selected {n} goals',
    spw_q5_resources: 'Available resources?',
    spw_q5_resources_hint: 'We will help you plan',
    spw_q5_budget: 'Budget',
    spw_q5_budget_small: 'Limited', spw_q5_budget_medium: 'Medium', spw_q5_budget_large: 'Large',
    spw_q5_timeline: 'Timeline',
    spw_q5_time_short: 'Fast (3 mo)', spw_q5_time_medium: 'Medium (6 mo)', spw_q5_time_long: 'Long (1 yr)',
    spw_q6_team: 'Team size?',
    spw_q6_team_hint: 'Helps us suggest roles',
    spw_q6_team_solo: 'Solo', spw_q6_team_small: '2-5 people',
    spw_q6_team_medium: '6-20', spw_q6_team_large: '20+',
    spw_q7_summary: 'Project Summary',
    spw_q7_summary_hint: 'Quick review before creation',
    spw_q7_will_create: 'We will auto-create:',
    spw_sum_idea: 'Idea in "My Ideas"',
    spw_sum_project: 'Project in "Roadmap"',
    spw_sum_sdg: '{n} SDG goals',
    spw_sum_budget: '{n} budget items',
    spw_sum_milestones: '{n} milestones',
    spw_sum_strategy: 'Starter SWOT + OKRs',
    spw_err_name: 'Enter project name',
    spw_success_title: 'Project created!',
    spw_success_sdg: 'SDG Goals', spw_success_milestones: 'Milestones', spw_success_tasks: 'Tasks',
    spw_success_hint: 'Go to "Roadmap" to track stages, or "Impact" to review SDGs.',
    spw_open_project: 'Open Project',
    spw_obj_launch: 'Launch',
    spw_kr_1: 'Complete 100% of core tasks',
    spw_kr_2: 'Achieve 80% customer satisfaction',
    spw_kr_3: 'Launch first version',
    spw_budget_note: 'Starter item',
    spw_task_1: 'Define team and roles',
    spw_task_2: 'Prepare detailed work plan',
    spw_task_3: 'Start execution'
  });

  if(window.i18n.applyTranslations) window.i18n.applyTranslations();
  document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: window.i18n.getLang() } }));

  console.log('🌍 i18n-patch loaded — full');
})();