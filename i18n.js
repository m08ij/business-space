/* ============================================================
   🌍 i18n.js — نظام الترجمة الكامل (عربي/إنجليزي)
   تبديل فوري + RTL/LTR + حفظ التفضيل
   ============================================================ */
(function(){
  'use strict';

  var STORAGE_KEY = 'bd_lang';
  var currentLang = 'ar';

  /* ==================== القاموس الكامل ==================== */
  var I18N = {

    /* ========== ARABIC ========== */
    ar: {
      // عام
      brand: 'تطوير أعمالي',
      brand_tagline: 'منصة شاملة لتطوير الأعمال والمشاريع المستدامة',
      search_placeholder: 'ابحث...',
      settings: 'الإعدادات',
      menu: 'القائمة',
      close: 'إغلاق',
      save: 'حفظ',
      cancel: 'إلغاء',
      delete: 'حذف',
      edit: 'تعديل',
      view: 'عرض',
      add: 'إضافة',
      confirm: 'تأكيد',
      yes: 'نعم',
      no: 'لا',
      loading: 'جاري التحميل...',
      no_data: 'لا توجد بيانات',
      no_results: 'لا نتائج',
      all: 'الكل',
      back: 'رجوع',
      next: 'التالي',
      prev: 'السابق',
      finish: 'إنهاء',
      done: 'تم',
      optional: 'اختياري',

      // Welcome
      welcome_title: 'أهلاً بك في تطوير أعمالي',
      welcome_sub: 'منصة شاملة لتطوير الأعمال والمشاريع المستدامة',
      welcome_name_ph: 'اكتب اسمك...',
      welcome_country: 'اختر دولتك',
      welcome_start: 'ابدأ رحلتك 🚀',
      welcome_name_required: 'اكتب اسمك 😊',
      welcome_greeting: 'أهلاً',

      // Settings
      set_install: 'تثبيت التطبيق',
      set_sync: 'المزامنة السحابية',
      set_themes: 'الثيمات',
      set_lang: 'اللغة',
      set_pdf: 'تصدير PDF',
      set_backup: 'تصدير نسخة',
      set_restore: 'استيراد نسخة',
      set_calendar: 'تصدير التقويم (.ics)',

      // Theme
      theme_title: '🎨 اختر الثيم',

      // Nav
      nav_dashboard: 'لوحة التحكم',
      nav_ideas_projects: 'الأفكار والمشاريع',
      nav_ideas: 'أفكاري',
      nav_roadmap: 'خريطة الطريق',
      nav_strategy_section: 'الاستراتيجية',
      nav_strategy: 'الاستراتيجية',
      nav_impact: 'قياس الأثر',
      nav_stakeholders: 'أصحاب المصلحة',
      nav_sales_section: 'المبيعات والقيادة',
      nav_sales: 'المبيعات',
      nav_leadership: 'القيادة',
      nav_mgmt_section: 'الإدارة',
      nav_tasks: 'المهام',
      nav_budget: 'الميزانية',
      nav_files: 'الملفات',
      nav_notes: 'ملاحظاتي',
      nav_refs_section: 'المراجع',
      nav_countries: 'الدول والأطر',
      nav_reports: 'التقارير',

      // Dashboard
      dash_title: '📊 لوحة التحكم',
      dash_greeting_morning: 'صباح الخير',
      dash_greeting_evening: 'مساء الخير',
      dash_you_have: 'لديك',
      dash_projects: 'مشروع',
      dash_and: 'و',
      dash_tasks: 'مهمة',
      dash_projects_label: 'مشروع',
      dash_ideas_label: 'فكرة',
      dash_pending_tasks: 'مهمة متبقية',
      dash_deals: 'فرصة بيعية',
      dash_upcoming_tasks: '📌 مهام قادمة',
      dash_pipeline: '💼 القمع البيعي',
      dash_recent_ideas: '💡 آخر الأفكار',
      dash_no_tasks: '✨ لا مهام قريبة',
      dash_no_deals: '💼 لا توجد فرص',
      dash_no_ideas: '💡 لا توجد أفكار',
      dash_today: 'اليوم',
      dash_tomorrow: 'غداً',
      dash_in_days: 'بعد {n} يوم',
      dash_overdue: 'متأخر {n}',

      // Ideas
      ideas_title: '💡 أفكاري',
      ideas_sub: 'أفكارك ومشاريعك',
      ideas_add: '+ فكرة جديدة',
      ideas_empty: 'لا توجد أفكار بعد',
      ideas_empty_sub: 'اضغط "+ فكرة جديدة" للبدء',
      idea_new: '💡 فكرة جديدة',
      idea_edit: '✏️ تعديل فكرة',
      idea_name: 'اسم الفكرة',
      idea_desc: 'الوصف',
      idea_type: 'النوع',
      idea_sector: 'القطاع',
      idea_country: 'الدولة',
      idea_problem: 'المشكلة التي تحلّها',
      idea_solution: 'الحل المقترح',
      idea_name_required: 'أدخل اسم الفكرة',
      idea_added: '✓ أُضيفت الفكرة',
      idea_updated: '✓ حُدّثت',
      idea_deleted: '🗑 حُدفت',
      idea_convert: '🚀 تحويل لمشروع',
      idea_convert_confirm: 'تحويل "{name}" إلى مشروع نشط؟',
      idea_converted: '🚀 تحوّلت لمشروع!',
      idea_delete_confirm: 'حذف الفكرة؟',

      // Roadmap
      roadmap_title: '🗺️ خريطة الطريق',
      roadmap_sub: 'مراحل PRiSM للمشاريع',
      roadmap_stages: '🗺️ مراحل PRiSM',
      roadmap_current: '▶ المرحلة الحالية',
      roadmap_completed: '✓ مكتملة',
      roadmap_stage_tasks: 'مهام المرحلة',
      roadmap_add_task: '+ مهمة',
      roadmap_no_tasks: 'لا توجد مهام في هذه المرحلة',
      roadmap_task_prompt: 'عنوان المهمة:',
      roadmap_stage_set: '✓ المرحلة: {name}',
      roadmap_no_projects: 'لا توجد مشاريع',
      roadmap_no_projects_sub: 'أضف مشروعاً من "أفكاري"',

      // Strategy
      strategy_title: '🎯 الاستراتيجية',
      strategy_sub: 'SWOT · PESTEL · OKRs',
      strategy_no_projects: 'لا توجد مشاريع',
      strategy_select_project: 'اختر مشروعاً لعرض أدوات الاستراتيجية',
      swot_title: '🎯 تحليل SWOT',
      swot_strengths: '💪 نقاط القوة',
      swot_weaknesses: '⚠️ نقاط الضعف',
      swot_opportunities: '🌟 الفرص',
      swot_threats: '🌩️ التهديدات',
      swot_add_item: 'أضف عنصراً في "{key}":',
      swot_added: '✓ أُضيف',
      pestel_title: '🌍 تحليل PESTEL',
      pestel_political: '🏛️ سياسي',
      pestel_economic: '💰 اقتصادي',
      pestel_social: '👥 اجتماعي',
      pestel_tech: '💻 تكنولوجي',
      pestel_env: '🌍 بيئي',
      pestel_legal: '⚖️ قانوني',
      pestel_placeholder: 'اكتب ملاحظاتك...',
      okr_title: '🎯 الأهداف والنتائج (OKRs)',
      okr_add: '+ هدف',
      okr_empty: 'لا توجد أهداف',
      okr_objective_prompt: 'الهدف (Objective):',
      okr_kr_prompt: 'النتيجة الرئيسية:',
      okr_add_kr: '+ نتيجة رئيسية',
      export: '📤 تصدير',
      copied: '📋 نُسخ التحليل',

      // Impact
      impact_title: '📈 قياس الأثر',
      impact_sub: 'SDG · ESG · P5',
      impact_sdg: '🎯 أهداف التنمية المستدامة (SDG)',
      impact_p5: '♻️ تحليل P5 (GPM)',
      impact_esg: '🏢 مؤشر ESG',
      impact_no_projects: 'لا توجد مشاريع',
      impact_no_projects_sub: 'أضف مشروعاً من "أفكاري"',

      // Stakeholders
      sh_title: '👥 أصحاب المصلحة',
      sh_sub: 'خريطة الأطراف المعنية',
      sh_list_title: '👥 قائمة أصحاب المصلحة',
      sh_add: '+ جديد',
      sh_empty: 'لا يوجد أصحاب مصلحة',
      sh_new: '👥 صاحب مصلحة',
      sh_name: 'الاسم',
      sh_role: 'الدور',
      sh_org: 'الجهة',
      sh_contact: 'التواصل',
      sh_name_required: 'أدخل الاسم',
      sh_added: '✓ أُضيف',
      sh_delete_confirm: 'حذف؟',

      // Sales
      sales_title: '💼 المبيعات',
      sales_sub: 'Pipeline · MEDDIC · SPIN',
      sales_add: '+ فرصة جديدة',
      sales_empty: 'لا توجد فرص',
      sales_empty_sub: 'اضغط "+ فرصة جديدة"',
      sales_opportunities: 'فرصة',
      sales_total_value: 'قيمة إجمالية',
      sales_won: 'صفقة رابحة',
      sales_revenue: 'إيراد محقق',
      sales_deal_new: '💼 فرصة بيعية جديدة',
      sales_deal_edit: '✏️ تعديل الفرصة',
      sales_client: 'العميل',
      sales_project: 'المشروع / الموضوع',
      sales_value: 'القيمة المتوقعة',
      sales_currency: 'العملة',
      sales_stage: 'المرحلة',
      sales_notes: 'ملاحظات',
      sales_client_required: 'أدخل اسم العميل',
      sales_added: '✓ أُضيفت الفرصة',
      sales_updated: '✓ حُدّثت',
      sales_deleted: '🗑 حُدفت',
      sales_delete_confirm: 'حذف الفرصة؟',
      sales_meddic_title: '🎯 تحليل MEDDIC:',
      sales_meddic_edit: '✏️ تعديل MEDDIC',
      sales_meddic_updated: '✓ حُدّث MEDDIC',
      sales_meddic_not_filled: 'لم يُملأ',
      sales_meddic_metrics: 'Metrics — المقاييس',
      sales_meddic_buyer: 'Economic Buyer — المشتري الاقتصادي',
      sales_meddic_criteria: 'Decision Criteria — معايير القرار',
      sales_meddic_process: 'Decision Process — عملية القرار',
      sales_meddic_pain: 'Identify Pain — تحديد الألم',
      sales_meddic_champion: 'Champion — المناصر',

      // Leadership
      leadership_title: '🎓 القيادة',
      leadership_sub: 'اكتشف نمط قيادتك',
      leadership_test_title: '📋 اختبار نمط القيادة',
      leadership_test_sub: 'أجب على 10 أسئلة سريعة لمعرفة نمط قيادتك السائد.',
      leadership_start: '▶ ابدأ الاختبار',
      leadership_retake: '🔄 إعادة',
      leadership_question: 'السؤال {current} من {total}',
      leadership_results: '📊 نتائجك التفصيلية:',
      leadership_recommendations: '💡 توصيات:',
      leadership_completed: '✅ أكملت الاختبار!',

      // Tasks
      tasks_title: '📝 المهام',
      tasks_sub: 'تابع مهامك',
      tasks_add: '+ مهمة',
      tasks_filter_all: 'الكل',
      tasks_filter_pending: 'قيد الانتظار',
      tasks_filter_done: 'مكتملة',
      tasks_empty: 'لا توجد مهام',
      tasks_new: '📝 مهمة جديدة',
      tasks_edit: '✏️ تعديل مهمة',
      tasks_title_field: 'عنوان المهمة',
      tasks_project_field: 'المشروع (اختياري)',
      tasks_due_field: 'تاريخ التسليم',
      tasks_title_required: 'أدخل عنواناً',
      tasks_added: '✓ أُضيفت المهمة',
      tasks_delete_confirm: 'حذف المهمة؟',
      tasks_done_msg: '✓ أحسنت!',
	
// Empty states
ideas_empty: 'لا توجد أفكار بعد',
ideas_empty_sub: 'اضغط "+ فكرة جديدة" للبدء',
roadmap_no_projects: 'لا توجد مشاريع',
roadmap_no_projects_sub: 'أضف مشروعاً من "أفكاري"',
strategy_select_project: 'اختر مشروعاً لعرض أدوات الاستراتيجية',
impact_no_projects: 'لا توجد مشاريع',
impact_no_projects_sub: 'أضف مشروعاً من "أفكاري"',
sales_no_deals: 'لا توجد فرص',
sales_no_deals_sub: 'اضغط "+ فرصة جديدة"',
sh_list_empty: 'لا يوجد أصحاب مصلحة بعد',
sales_filter_all: 'الكل',
sales_stats_deals: 'فرصة',
sales_stats_value: 'قيمة إجمالية',
sales_stats_won: 'صفقة رابحة',
sales_stats_revenue: 'إيراد محقق',
widgets_stats_projects: 'مشروع',
widgets_stats_tasks: 'مهمة',
widgets_stats_deals: 'فرصة',
widgets_sales_deals: 'فرصة',
widgets_sales_won: 'رابحة',
widgets_sales_value: 'القيمة',
widgets_impact_empty: 'لا SDG مختارة',
widgets_upcoming_empty: 'لا أحداث قادمة',
widgets_budget_income: 'دخل',
widgets_budget_expense: 'مصروف',
widgets_budget_balance: 'رصيد',
widgets_quote_title: '✨ اقتباس اليوم',
widgets_quote_next: '🔀 اقتباس جديد',
widgets_focus_title: 'وضع التركيز',
widgets_focus_sub: 'شاشة كاملة + مؤقت + مهام',
widgets_focus_start: '▶ ابدأ التركيز',
widgets_stats_title: 'ملخص سريع',
widgets_upcoming_title: 'الأحداث القادمة',
widgets_sales_title: 'القمع البيعي',
widgets_impact_title: 'أثر SDG',
widgets_budget_title: 'الميزانية',
widgets_customize_title: 'تخصيص الأدوات',
widgets_customize_default: '↺ الافتراضي',
widgets_quick_tools: 'الأدوات السريعة',
widgets_no_widgets: 'ما اخترت أي widget',
      // Budget
      budget_title: '💰 الميزانية',
      budget_sub: 'دخل ومصاريف ورصيد',
      budget_income: '+ دخل',
      budget_expense: '+ مصروف',
      budget_total_income: 'إجمالي الدخل',
      budget_total_expense: 'إجمالي المصاريف',
      budget_balance: 'الرصيد',
      budget_empty: 'لا توجد عناصر',
      budget_add_income: 'إضافة دخل',
      budget_add_expense: 'إضافة مصروف',
      budget_category: 'التصنيف',
      budget_amount: 'المبلغ',
      budget_date: 'التاريخ',
      budget_note: 'ملاحظة',
      budget_amount_required: 'أدخل مبلغاً',
      budget_added: '✓ أُضيف',
      budget_delete_confirm: 'حذف العنصر؟',

      // Files
      files_title: '📁 الملفات',
      files_sub: 'ملفات مشاريعك',
      files_no_projects: 'لا توجد مشاريع',
      files_project_files: '📁 ملفات المشروع',
      files_upload: '📤 رفع ملف',
      files_no_files: 'ما في ملفات بعد',
      files_loading: 'جاري التحميل...',
      files_sync_disabled: 'المزامنة غير مفعّلة',
      files_count: '{n} ملف',
      files_uploading: '📤 جاري الرفع...',
      files_uploaded: '✅ تم الرفع!',
      files_upload_failed: 'فشل الرفع',
      files_size_limit: '⚠️ الحد 25 MB',
      files_delete_confirm: 'حذف الملف؟',
      files_deleted: '🗑 حُذف',
      files_delete_failed: 'فشل الحذف',
      files_load_failed: 'فشل التحميل',

      // Notes
      notes_title: '📔 ملاحظاتي',
      notes_sub: 'تُحفظ تلقائياً',
      notes_add: '+ ملاحظة',
      notes_empty: 'لا توجد ملاحظات',
      notes_count: '{n} ملاحظة',
      notes_title_ph: 'عنوان...',
      notes_body_ph: 'اكتب...',
      notes_added: '✓ أُضيفت',
      notes_delete_confirm: 'حذف الملاحظة؟',

      // Countries
      countries_title: '🌍 الدول والأطر',
      countries_sub: 'مؤشرات دولية + مكتبة الأطر',
      countries_tab_countries: '🌍 الدول',
      countries_tab_frameworks: '📚 الأطر',
      countries_full_details: '📋 التفاصيل الكاملة',
      countries_indicators: '📊 المؤشرات',
      countries_sectors: '🏭 القطاعات الرئيسية',
      countries_sustainability: '♻️ تركيز الاستدامة',
      countries_incentives: '🎁 الحوافز',
      countries_culture: '💼 ثقافة العمل',
      countries_legal: '⚖️ ملاحظات قانونية',
      countries_set_default: '🎯 اجعله دولتي',
      countries_default_set: '✓ تم تعيين {name} كدولتك',

      // Reports
      reports_title: '📊 التقارير',
      reports_sub: 'تحليلات وإحصاءات',
      reports_projects: 'مشروع',
      reports_active: 'نشط',
      reports_ideas: 'فكرة',
      reports_win_rate: 'نسبة الفوز',
      reports_by_stage: '🗺️ توزيع المشاريع حسب المرحلة',
      reports_pipeline: '💼 القمع البيعي',
      reports_sdg: '🎯 أهداف التنمية المستدامة (SDG)',

      // Modal
      modal_confirm_delete: 'تأكيد الحذف',
      modal_delete_yes: '🗑 نعم، احذف',
      modal_delete_no: 'إلغاء',

      // Toast
      toast_saved_cloud: '☁️ حُفظ سحابياً',
      toast_saved_local: '💾 حُفظ محلياً',
      toast_server_ok: '✅ متصل — حفظ تلقائي',
      toast_server_off: '💾 حفظ محلي',
      toast_backup_done: '💾 تم التنزيل',
      toast_restore_done: '✅ تمت الاستعادة',
      toast_restore_failed: 'ملف تالف',
      toast_backup_failed: 'فشل',
      toast_pdf_preparing: '🖨️ جاري التجهيز...',
      toast_search_results: '🔍 {n} نتيجة: {name}',
      // ar:
       toast_app_installed: '🎉 تم تثبيت التطبيق',
       toast_app_installed_already: 'التطبيق مثبت بالفعل أو غير مدعوم',

      // FAB
      fab_idea: 'فكرة جديدة',
      fab_task: 'مهمة جديدة',
      fab_deal: 'فرصة بيعية',
      fab_expense: 'مصروف',
      fab_note: 'ملاحظة',

      // AI
      ai_name: 'مستشارك الذكي',
      ai_status: 'متصل',
      ai_placeholder: 'اسألني عن مساحتك...',

      // Sync
      sync_title: '☁️ رمز المزامنة',
      sync_desc: 'هذا الرمز هو مفتاح مساحتك في السحابة. أدخله على أي جهاز آخر لترى نفس بياناتك.',
      sync_code: 'الرمز',
      sync_copy: '📋 نسخ',
      sync_share: '📤 مشاركة',
      sync_change: '🔄 تغيير',
      sync_close: 'إغلاق',
      sync_save_note: '💡 احفظ هذا الرمز في مكان آمن.',
      sync_copied: '📋 نُسخ الرمز',
      sync_changed: '✅ تم التغيير، أعد تحميل الصفحة',
      sync_new_code: 'أدخل رمزًا جديدًا:',

      // Backup Badge
      backup_badge_saved: 'تم الحفظ'
    },

    /* ========== ENGLISH ========== */
    en: {
      // General
      brand: 'Business Dev',
      brand_tagline: 'A comprehensive platform for business development & sustainable projects',
      search_placeholder: 'Search...',
      settings: 'Settings',
      menu: 'Menu',
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      view: 'View',
      add: 'Add',
      confirm: 'Confirm',
      yes: 'Yes',
      no: 'No',
      loading: 'Loading...',
      no_data: 'No data',
      no_results: 'No results',
      all: 'All',
      back: 'Back',
      next: 'Next',
      prev: 'Previous',
      finish: 'Finish',
      done: 'Done',
      optional: 'Optional',

      // Welcome
      welcome_title: 'Welcome to Business Dev',
      welcome_sub: 'A comprehensive platform for business development & sustainable projects',
      welcome_name_ph: 'Enter your name...',
      welcome_country: 'Select your country',
      welcome_start: 'Start Your Journey 🚀',
      welcome_name_required: 'Please enter your name 😊',
      welcome_greeting: 'Welcome',

      // Settings
      set_install: 'Install App',
      set_sync: 'Cloud Sync',
      set_themes: 'Themes',
      set_lang: 'Language',
      set_pdf: 'Export PDF',
      set_backup: 'Export Backup',
      set_restore: 'Import Backup',
      set_calendar: 'Export Calendar (.ics)',

      // Theme
      theme_title: '🎨 Choose Theme',

      // Nav
      nav_dashboard: 'Dashboard',
      nav_ideas_projects: 'Ideas & Projects',
      nav_ideas: 'My Ideas',
      nav_roadmap: 'Roadmap',
      nav_strategy_section: 'Strategy',
      nav_strategy: 'Strategy',
      nav_impact: 'Impact',
      nav_stakeholders: 'Stakeholders',
      nav_sales_section: 'Sales & Leadership',
      nav_sales: 'Sales',
      nav_leadership: 'Leadership',
      nav_mgmt_section: 'Management',
      nav_tasks: 'Tasks',
      nav_budget: 'Budget',
      nav_files: 'Files',
      nav_notes: 'My Notes',
      nav_refs_section: 'References',
      nav_countries: 'Countries & Frameworks',
      nav_reports: 'Reports',

      // Dashboard
      dash_title: '📊 Dashboard',
      dash_greeting_morning: 'Good morning',
      dash_greeting_evening: 'Good evening',
      dash_you_have: 'You have',
      dash_projects: 'projects',
      dash_and: 'and',
      dash_tasks: 'tasks',
      dash_projects_label: 'Projects',
      dash_ideas_label: 'Ideas',
      dash_pending_tasks: 'Pending Tasks',
      dash_deals: 'Sales Deals',
      dash_upcoming_tasks: '📌 Upcoming Tasks',
      dash_pipeline: '💼 Sales Pipeline',
      dash_recent_ideas: '💡 Recent Ideas',
      dash_no_tasks: '✨ No upcoming tasks',
      dash_no_deals: '💼 No deals yet',
      dash_no_ideas: '💡 No ideas yet',
      dash_today: 'Today',
      dash_tomorrow: 'Tomorrow',
      dash_in_days: 'In {n} days',
      dash_overdue: 'Overdue {n}',

      // Ideas
      ideas_title: '💡 My Ideas',
      ideas_sub: 'Your ideas & projects',
      ideas_add: '+ New Idea',
      ideas_empty: 'No ideas yet',
      ideas_empty_sub: 'Click "+ New Idea" to start',
      idea_new: '💡 New Idea',
      idea_edit: '✏️ Edit Idea',
      idea_name: 'Idea Name',
      idea_desc: 'Description',
      idea_type: 'Type',
      idea_sector: 'Sector',
      idea_country: 'Country',
      idea_problem: 'Problem You Solve',
      idea_solution: 'Proposed Solution',
      idea_name_required: 'Enter idea name',
      idea_added: '✓ Idea added',
      idea_updated: '✓ Updated',
      idea_deleted: '🗑 Deleted',
      idea_convert: '🚀 Convert to Project',
      idea_convert_confirm: 'Convert "{name}" to an active project?',
      idea_converted: '🚀 Converted to project!',
      idea_delete_confirm: 'Delete idea?',

      // Roadmap
      roadmap_title: '🗺️ Roadmap',
      roadmap_sub: 'PRiSM project stages',
      roadmap_stages: '🗺️ PRiSM Stages',
      roadmap_current: '▶ Current Stage',
      roadmap_completed: '✓ Completed',
      roadmap_stage_tasks: 'Stage Tasks',
      roadmap_add_task: '+ Task',
      roadmap_no_tasks: 'No tasks in this stage',
      roadmap_task_prompt: 'Task title:',
      roadmap_stage_set: '✓ Stage: {name}',
      roadmap_no_projects: 'No projects',
      roadmap_no_projects_sub: 'Add a project from "Ideas"',

      // Strategy
      strategy_title: '🎯 Strategy',
      strategy_sub: 'SWOT · PESTEL · OKRs',
      strategy_no_projects: 'No projects',
      strategy_select_project: 'Select a project to view strategy tools',
      swot_title: '🎯 SWOT Analysis',
      swot_strengths: '💪 Strengths',
      swot_weaknesses: '⚠️ Weaknesses',
      swot_opportunities: '🌟 Opportunities',
      swot_threats: '🌩️ Threats',
      swot_add_item: 'Add item to "{key}":',
      swot_added: '✓ Added',
      pestel_title: '🌍 PESTEL Analysis',
      pestel_political: '🏛️ Political',
      pestel_economic: '💰 Economic',
      pestel_social: '👥 Social',
      pestel_tech: '💻 Technological',
      pestel_env: '🌍 Environmental',
      pestel_legal: '⚖️ Legal',
      pestel_placeholder: 'Write your notes...',
      okr_title: '🎯 Objectives & Key Results (OKRs)',
      okr_add: '+ Objective',
      okr_empty: 'No objectives',
      okr_objective_prompt: 'Objective:',
      okr_kr_prompt: 'Key Result:',
      okr_add_kr: '+ Key Result',
      export: '📤 Export',
      copied: '📋 Copied',

      // Impact
      impact_title: '📈 Impact Measurement',
      impact_sub: 'SDG · ESG · P5',
      impact_sdg: '🎯 Sustainable Development Goals (SDG)',
      impact_p5: '♻️ P5 Analysis (GPM)',
      impact_esg: '🏢 ESG Score',
      impact_no_projects: 'No projects',
      impact_no_projects_sub: 'Add a project from "Ideas"',

      // Stakeholders
      sh_title: '👥 Stakeholders',
      sh_sub: 'Stakeholder map',
      sh_list_title: '👥 Stakeholders List',
      sh_add: '+ New',
      sh_empty: 'No stakeholders yet',
      sh_new: '👥 Stakeholder',
      sh_name: 'Name',
      sh_role: 'Role',
      sh_org: 'Organization',
      sh_contact: 'Contact',
      sh_name_required: 'Enter name',
      sh_added: '✓ Added',
      sh_delete_confirm: 'Delete?',

      // Sales
      sales_title: '💼 Sales',
      sales_sub: 'Pipeline · MEDDIC · SPIN',
      sales_add: '+ New Deal',
      sales_empty: 'No deals yet',
      sales_empty_sub: 'Click "+ New Deal"',
      sales_opportunities: 'Deals',
      sales_total_value: 'Total Value',
      sales_won: 'Deals Won',
      sales_revenue: 'Revenue',
      sales_deal_new: '💼 New Sales Deal',
      sales_deal_edit: '✏️ Edit Deal',
      sales_client: 'Client',
      sales_project: 'Project / Topic',
      sales_value: 'Expected Value',
      sales_currency: 'Currency',
      sales_stage: 'Stage',
      sales_notes: 'Notes',
      sales_client_required: 'Enter client name',
      sales_added: '✓ Deal added',
      sales_updated: '✓ Updated',
      sales_deleted: '🗑 Deleted',
      sales_delete_confirm: 'Delete deal?',
      sales_meddic_title: '🎯 MEDDIC Analysis:',
      sales_meddic_edit: '✏️ Edit MEDDIC',
      sales_meddic_updated: '✓ MEDDIC updated',
      sales_meddic_not_filled: 'Not filled',
      sales_meddic_metrics: 'Metrics',
      sales_meddic_buyer: 'Economic Buyer',
      sales_meddic_criteria: 'Decision Criteria',
      sales_meddic_process: 'Decision Process',
      sales_meddic_pain: 'Identify Pain',
      sales_meddic_champion: 'Champion',

      // Leadership
      leadership_title: '🎓 Leadership',
      leadership_sub: 'Discover your leadership style',
      leadership_test_title: '📋 Leadership Style Test',
      leadership_test_sub: 'Answer 10 quick questions to discover your dominant style.',
      leadership_start: '▶ Start Test',
      leadership_retake: '🔄 Retake',
      leadership_question: 'Question {current} of {total}',
      leadership_results: '📊 Your Detailed Results:',
      leadership_recommendations: '💡 Recommendations:',
      leadership_completed: '✅ Test completed!',

      // Tasks
      tasks_title: '📝 Tasks',
      tasks_sub: 'Track your tasks',
      tasks_add: '+ Task',
      tasks_filter_all: 'All',
      tasks_filter_pending: 'Pending',
      tasks_filter_done: 'Completed',
      tasks_empty: 'No tasks',
      tasks_new: '📝 New Task',
      tasks_edit: '✏️ Edit Task',
      tasks_title_field: 'Task Title',
      tasks_project_field: 'Project (optional)',
      tasks_due_field: 'Due Date',
      tasks_title_required: 'Enter a title',
      tasks_added: '✓ Task added',
      tasks_delete_confirm: 'Delete task?',
      tasks_done_msg: '✓ Well done!',

      // Budget
      budget_title: '💰 Budget',
      budget_sub: 'Income, expenses & balance',
      budget_income: '+ Income',
      budget_expense: '+ Expense',
      budget_total_income: 'Total Income',
      budget_total_expense: 'Total Expenses',
      budget_balance: 'Balance',
      budget_empty: 'No items',
      budget_add_income: 'Add Income',
      budget_add_expense: 'Add Expense',
      budget_category: 'Category',
      budget_amount: 'Amount',
      budget_date: 'Date',
      budget_note: 'Note',
      budget_amount_required: 'Enter amount',
      budget_added: '✓ Added',
      budget_delete_confirm: 'Delete item?',

ideas_empty: 'No ideas yet',
ideas_empty_sub: 'Click "+ New Idea" to start',
roadmap_no_projects: 'No projects yet',
roadmap_no_projects_sub: 'Add a project from "My Ideas"',
strategy_select_project: 'Select a project to view strategy tools',
impact_no_projects: 'No projects yet',
impact_no_projects_sub: 'Add a project from "My Ideas"',
sales_no_deals: 'No deals yet',
sales_no_deals_sub: 'Click "+ New Deal"',
sh_list_empty: 'No stakeholders yet',
sales_filter_all: 'All',
sales_stats_deals: 'Deals',
sales_stats_value: 'Total Value',
sales_stats_won: 'Won Deals',
sales_stats_revenue: 'Revenue',
widgets_stats_projects: 'Projects',
widgets_stats_tasks: 'Tasks',
widgets_stats_deals: 'Deals',
widgets_sales_deals: 'Deals',
widgets_sales_won: 'Won',
widgets_sales_value: 'Value',
widgets_impact_empty: 'No SDG selected',
widgets_upcoming_empty: 'No upcoming events',
widgets_budget_income: 'Income',
widgets_budget_expense: 'Expense',
widgets_budget_balance: 'Balance',
widgets_quote_title: '✨ Quote of the Day',
widgets_quote_next: '🔀 New Quote',
widgets_focus_title: 'Focus Mode',
widgets_focus_sub: 'Full screen + timer + tasks',
widgets_focus_start: '▶ Start Focus',
widgets_stats_title: 'Quick Summary',
widgets_upcoming_title: 'Upcoming Events',
widgets_sales_title: 'Sales Pipeline',
widgets_impact_title: 'SDG Impact',
widgets_budget_title: 'Budget',
widgets_customize_title: 'Customize Widgets',
widgets_customize_default: '↺ Default',
widgets_quick_tools: 'Quick Tools',
widgets_no_widgets: 'No widgets selected',

      // Files
      files_title: '📁 Files',
      files_sub: 'Your project files',
      files_no_projects: 'No projects',
      files_project_files: '📁 Project Files',
      files_upload: '📤 Upload File',
      files_no_files: 'No files yet',
      files_loading: 'Loading...',
      files_sync_disabled: 'Sync disabled',
      files_count: '{n} files',
      files_uploading: '📤 Uploading...',
      files_uploaded: '✅ Uploaded!',
      files_upload_failed: 'Upload failed',
      files_size_limit: '⚠️ Limit 25 MB',
      files_delete_confirm: 'Delete file?',
      files_deleted: '🗑 Deleted',
      files_delete_failed: 'Delete failed',
      files_load_failed: 'Load failed',

      // Notes
      notes_title: '📔 My Notes',
      notes_sub: 'Auto-saved',
      notes_add: '+ Note',
      notes_empty: 'No notes',
      notes_count: '{n} notes',
      notes_title_ph: 'Title...',
      notes_body_ph: 'Write...',
      notes_added: '✓ Added',
      notes_delete_confirm: 'Delete note?',

      // Countries
      countries_title: '🌍 Countries & Frameworks',
      countries_sub: 'Global indicators + framework library',
      countries_tab_countries: '🌍 Countries',
      countries_tab_frameworks: '📚 Frameworks',
      countries_full_details: '📋 Full Details',
      countries_indicators: '📊 Indicators',
      countries_sectors: '🏭 Key Sectors',
      countries_sustainability: '♻️ Sustainability Focus',
      countries_incentives: '🎁 Incentives',
      countries_culture: '💼 Business Culture',
      countries_legal: '⚖️ Legal Notes',
      countries_set_default: '🎯 Set as My Country',
      countries_default_set: '✓ {name} set as your country',

      // Reports
      reports_title: '📊 Reports',
      reports_sub: 'Analytics & statistics',
      reports_projects: 'Projects',
      reports_active: 'Active',
      reports_ideas: 'Ideas',
      reports_win_rate: 'Win Rate',
      reports_by_stage: '🗺️ Projects by Stage',
      reports_pipeline: '💼 Sales Pipeline',
      reports_sdg: '🎯 SDG Goals',

      // Modal
      modal_confirm_delete: 'Confirm Delete',
      modal_delete_yes: '🗑 Yes, delete',
      modal_delete_no: 'Cancel',

      // Toast
      toast_saved_cloud: '☁️ Saved to cloud',
      toast_saved_local: '💾 Saved locally',
      toast_server_ok: '✅ Connected — auto-save',
      toast_server_off: '💾 Local save',
      toast_backup_done: '💾 Downloaded',
      toast_restore_done: '✅ Restored',
      toast_restore_failed: 'Corrupted file',
      toast_backup_failed: 'Failed',
      toast_pdf_preparing: '🖨️ Preparing...',
      toast_search_results: '🔍 {n} results: {name}',

      // FAB
      fab_idea: 'New Idea',
      fab_task: 'New Task',
      fab_deal: 'New Deal',
      fab_expense: 'Expense',
      fab_note: 'Note',

      // AI
      ai_name: 'Your AI Advisor',
      ai_status: 'Online',
      ai_placeholder: 'Ask me about your space...',

      // Sync
      sync_title: '☁️ Sync Code',
      sync_desc: 'This code is your cloud key. Enter it on any device to see the same data.',
      sync_code: 'Code',
      sync_copy: '📋 Copy',
      sync_share: '📤 Share',
      sync_change: '🔄 Change',
      sync_close: 'Close',
      sync_save_note: '💡 Save this code in a safe place.',
      sync_copied: '📋 Code copied',
      sync_changed: '✅ Changed, reload the page',
      sync_new_code: 'Enter a new code:',

      // Backup Badge
      backup_badge_saved: 'Saved'
    }
  };

  /* ==================== Get current lang ==================== */
  function detectInitialLang(){
    try{
      var saved = localStorage.getItem(STORAGE_KEY);
      if(saved === 'ar' || saved === 'en') return saved;
    }catch(e){}
    // Auto-detect from browser
    var navLang = (navigator.language || 'ar').toLowerCase();
    if(navLang.indexOf('en') === 0) return 'en';
    return 'ar';
  }

  /* ==================== Translation ==================== */
  function t(key, params){
    var lang = currentLang;
    var dict = I18N[lang] || I18N.ar;
    var str = dict[key];
    if(str === undefined){
      // fallback to arabic
      str = (I18N.ar[key] !== undefined) ? I18N.ar[key] : key;
    }
    if(params && typeof params === 'object'){
      str = String(str).replace(/\{(\w+)\}/g, function(m, k){
        return params[k] !== undefined ? params[k] : m;
      });
    }
    return str;
  }

  /* ==================== Apply to DOM ==================== */
  function applyTranslations(root){
    root = root || document;
    // data-i18n → textContent
    root.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'){
        if(el.hasAttribute('placeholder')) el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });
    // data-i18n-html → innerHTML
    root.querySelectorAll('[data-i18n-html]').forEach(function(el){
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    // data-i18n-placeholder
    root.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    // data-i18n-title
    root.querySelectorAll('[data-i18n-title]').forEach(function(el){
      el.title = t(el.getAttribute('data-i18n-title'));
    });
  }

  /* ==================== Set Language ==================== */
  function setLang(lang, silent){
    if(lang !== 'ar' && lang !== 'en') lang = 'ar';
    currentLang = lang;

    // Save
    try{ localStorage.setItem(STORAGE_KEY, lang); }catch(e){}

    // Direction
    var dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', dir);

    // Translate static
    applyTranslations();

    // Update lang button
    var langBtn = document.getElementById('langBtn');
    if(langBtn){
      langBtn.textContent = lang === 'ar' ? 'EN' : 'ع';
      langBtn.title = lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية';
    }

    // Notify all modules
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang } }));

    // Re-render dynamic content
    try{ if(typeof window.renderDashboard === 'function') window.renderDashboard(); }catch(e){}
    try{ if(typeof window.renderTasks === 'function') window.renderTasks(); }catch(e){}
    try{ if(typeof window.renderBudget === 'function') window.renderBudget(); }catch(e){}
    try{ if(typeof window.renderNotes === 'function') window.renderNotes(); }catch(e){}
    try{ if(typeof window.renderStakeholders === 'function') window.renderStakeholders(); }catch(e){}
    try{ if(typeof window.renderIdeas === 'function') window.renderIdeas(); }catch(e){}
    try{ if(typeof window.renderSales === 'function') window.renderSales(); }catch(e){}
    try{ if(typeof window.renderCountries === 'function') window.renderCountries(); }catch(e){}
    try{ if(typeof window.renderFrameworks === 'function') window.renderFrameworks(); }catch(e){}
    try{ if(typeof window.renderLeadership === 'function') window.renderLeadership(); }catch(e){}

    // Re-render current tab
    var activeTab = document.querySelector('.section.active');
    if(activeTab){
      var tabId = activeTab.id;
      var map = {
        dashboard: 'renderDashboard', tasks: 'renderTasks', budget: 'renderBudget',
        notes: 'renderNotes', stakeholders: 'renderStakeholders', ideas: 'renderIdeas',
        sales: 'renderSales', countries: 'renderCountries', reports: 'renderInsights',
        leadership: 'renderLeadership', strategy: 'renderStrategySelector',
        roadmap: 'renderRoadmap', impact: 'renderImpact', files: 'renderFiles'
      };
      var fn = map[tabId];
      if(fn && typeof window[fn] === 'function'){
        try{ window[fn](); }catch(e){}
      }
    }

    if(!silent && typeof window.toast === 'function'){
      window.toast(lang === 'ar' ? '🌍 تم التبديل للعربية' : '🌍 Switched to English', 'success', 1800);
    }
  }

  function getLang(){ return currentLang; }
  function toggleLang(){ setLang(currentLang === 'ar' ? 'en' : 'ar'); }

  /* ==================== Init ==================== */
  function init(){
    currentLang = detectInitialLang();
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

    // Wait for DOM
    setTimeout(function(){
      applyTranslations();
      var langBtn = document.getElementById('langBtn');
      if(langBtn){
        langBtn.textContent = currentLang === 'ar' ? 'EN' : 'ع';
        langBtn.title = currentLang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية';
        langBtn.onclick = function(){ toggleLang(); };
      }
    }, 100);
  }

  /* ==================== Exports ==================== */
  window.i18n = {
    t: t,
    setLang: setLang,
    getLang: getLang,
    toggleLang: toggleLang,
    applyTranslations: applyTranslations,
    I18N: I18N
  };
  window.t = t;

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  console.log('🌍 i18n loaded — current:', currentLang);
})();