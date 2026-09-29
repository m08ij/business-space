/* ============================================================
   🌍 i18n-finish.js — ترجمة نهائية لكل النصوص الصلبة المتبقية
   ============================================================ */
(function(){
  'use strict';
  if(!window.i18n || !window.i18n.I18N){ console.warn('i18n-finish: not loaded'); return; }
  var AR = window.i18n.I18N.ar;
  var EN = window.i18n.I18N.en;

  /* ============ Country Adapter ============ */
  Object.assign(AR, {
    ca_add_country: '➕ إضافة دولة',
    ca_countries_count: '{n} دولة',
    ca_add_framework: '➕ إضافة إطار جديد',
    ca_frameworks_count: '{n} إطار',
    ca_custom_badge: 'مخصص',
    ca_full_details: '📋 التفاصيل الكاملة',
    ca_indicators: '📊 المؤشرات',
    ca_key_sectors: '🏭 القطاعات الرئيسية',
    ca_sustain_focus: '♻️ تركيز الاستدامة',
    ca_incentives: '🎁 الحوافز',
    ca_biz_culture: '💼 ثقافة العمل',
    ca_legal_notes: '⚖️ ملاحظات قانونية',
    ca_set_default: '🎯 اجعله دولتي',
    ca_edit_title: '✏️ تعديل',
    ca_delete_confirm: 'حذف هذه الدولة؟',
    ca_deleted: '🗑 حُذفت',
    ca_added: '✓ أُضيفت الدولة',
    ca_updated: '✓ حُدّثت الدولة',
    ca_enter_name: 'أدخل اسم الدولة',
    ca_fw_delete_confirm: 'حذف هذا الإطار؟',
    ca_fw_deleted: '🗑 حُذف',
    ca_fw_added: '✓ أُضيف الإطار',
    ca_fw_updated: '✓ حُدّث الإطار',
    ca_enter_fw_title: 'أدخل عنوان الإطار',
    ca_classification: 'التصنيف',
    ca_close: 'إغلاق',
    ca_edit: '✏️ تعديل',
    ca_delete: '🗑 حذف',
    ca_flag_label: 'العلم (emoji)',
    ca_name_ar_label: 'الاسم بالعربية',
    ca_name_en_label: 'الاسم بالإنجليزية',
    ca_currency_label: 'العملة',
    ca_vision_label: 'الرؤية الوطنية',
    ca_sectors_label: 'القطاعات الرئيسية (افصل بفاصلة ,)',
    ca_sustain_label: 'تركيز الاستدامة (افصل بفاصلة ,)',
    ca_incentives_label: 'الحوافز (افصل بفاصلة ,)',
    ca_culture_label: 'ثقافة العمل',
    ca_legal_label: 'ملاحظات قانونية',
    ca_icon_label: 'الأيقونة (emoji)',
    ca_title_ar_label: 'العنوان بالعربية',
    ca_title_en_label: 'العنوان بالإنجليزية',
    ca_code_label: 'الرمز',
    ca_category_label: 'التصنيف',
    ca_desc_label: 'الوصف',
    ca_when_label: 'متى يُستخدم',
    ca_steps_label: 'الخطوات/المكونات (كل خطوة في سطر)',
    ca_source_label: 'المصدر'
  });
  Object.assign(EN, {
    ca_add_country: '➕ Add Country',
    ca_countries_count: '{n} countries',
    ca_add_framework: '➕ Add Framework',
    ca_frameworks_count: '{n} frameworks',
    ca_custom_badge: 'Custom',
    ca_full_details: '📋 Full Details',
    ca_indicators: '📊 Indicators',
    ca_key_sectors: '🏭 Key Sectors',
    ca_sustain_focus: '♻️ Sustainability Focus',
    ca_incentives: '🎁 Incentives',
    ca_biz_culture: '💼 Business Culture',
    ca_legal_notes: '⚖️ Legal Notes',
    ca_set_default: '🎯 Set as My Country',
    ca_edit_title: '✏️ Edit',
    ca_delete_confirm: 'Delete this country?',
    ca_deleted: '🗑 Deleted',
    ca_added: '✓ Country added',
    ca_updated: '✓ Country updated',
    ca_enter_name: 'Enter country name',
    ca_fw_delete_confirm: 'Delete this framework?',
    ca_fw_deleted: '🗑 Deleted',
    ca_fw_added: '✓ Framework added',
    ca_fw_updated: '✓ Framework updated',
    ca_enter_fw_title: 'Enter framework title',
    ca_classification: 'Category',
    ca_close: 'Close',
    ca_edit: '✏️ Edit',
    ca_delete: '🗑 Delete',
    ca_flag_label: 'Flag (emoji)',
    ca_name_ar_label: 'Arabic name',
    ca_name_en_label: 'English name',
    ca_currency_label: 'Currency',
    ca_vision_label: 'National Vision',
    ca_sectors_label: 'Key sectors (comma separated)',
    ca_sustain_label: 'Sustainability focus (comma separated)',
    ca_incentives_label: 'Incentives (comma separated)',
    ca_culture_label: 'Business culture',
    ca_legal_label: 'Legal notes',
    ca_icon_label: 'Icon (emoji)',
    ca_title_ar_label: 'Arabic title',
    ca_title_en_label: 'English title',
    ca_code_label: 'Code',
    ca_category_label: 'Category',
    ca_desc_label: 'Description',
    ca_when_label: 'When to use',
    ca_steps_label: 'Steps (one per line)',
    ca_source_label: 'Source'
  });

  /* ============ Sales Toolkit ============ */
  Object.assign(AR, {
    st_close: 'إغلاق',
    st_meddic_edit: '✏️ تعديل MEDDIC',
    st_meddic_not_filled: 'لم يُملأ',
    st_meddic_metrics_label: 'M — المقاييس',
    st_meddic_buyer_label: 'E — المشتري الاقتصادي',
    st_meddic_criteria_label: 'D — معايير القرار',
    st_meddic_process_label: 'D — عملية القرار',
    st_meddic_pain_label: 'I — تحديد الألم',
    st_meddic_champion_label: 'C — المناصر',
    st_meddic_updated: '✓ حُدّث MEDDIC',
    st_new_deal: '💼 فرصة بيعية جديدة',
    st_edit_deal: '✏️ تعديل الفرصة',
    st_client_required: 'أدخل اسم العميل',
    st_added: '✓ أُضيفت الفرصة',
    st_updated: '✓ حُدّثت',
    st_deleted: '🗑 حُذفت',
    st_delete_confirm: 'حذف الفرصة؟'
  });
  Object.assign(EN, {
    st_close: 'Close',
    st_meddic_edit: '✏️ Edit MEDDIC',
    st_meddic_not_filled: 'Not filled',
    st_meddic_metrics_label: 'M — Metrics',
    st_meddic_buyer_label: 'E — Economic Buyer',
    st_meddic_criteria_label: 'D — Decision Criteria',
    st_meddic_process_label: 'D — Decision Process',
    st_meddic_pain_label: 'I — Identify Pain',
    st_meddic_champion_label: 'C — Champion',
    st_meddic_updated: '✓ MEDDIC updated',
    st_new_deal: '💼 New Sales Deal',
    st_edit_deal: '✏️ Edit Deal',
    st_client_required: 'Enter client name',
    st_added: '✓ Deal added',
    st_updated: '✓ Updated',
    st_deleted: '🗑 Deleted',
    st_delete_confirm: 'Delete deal?'
  });

  /* ============ Email Digest ============ */
  Object.assign(AR, {
    ed_close: 'إغلاق',
    ed_notes_label: 'ملاحظات',
    ed_sent_success: '✅ تم إرسال البريد!',
    ed_sent_fail: '❌ فشل الإرسال',
    ed_network_error: '❌ خطأ في الشبكة',
    ed_sending: 'جاري الإرسال...'
  });
  Object.assign(EN, {
    ed_close: 'Close',
    ed_notes_label: 'Notes',
    ed_sent_success: '✅ Email sent!',
    ed_sent_fail: '❌ Send failed',
    ed_network_error: '❌ Network error',
    ed_sending: 'Sending...'
  });

  /* ============ File Sync ============ */
  Object.assign(AR, {
    fs_no_projects: 'لا توجد مشاريع',
    fs_loading: 'جاري التحميل...',
    fs_sync_disabled: 'المزامنة غير مفعّلة',
    fs_no_files: 'ما في ملفات بعد',
    fs_files_count: '{n} ملف',
    fs_uploading: '📤 جاري الرفع...',
    fs_uploaded: '✅ تم الرفع!',
    fs_upload_failed: 'فشل الرفع',
    fs_size_limit: '⚠️ الحد 25 MB',
    fs_delete_confirm: 'حذف الملف؟',
    fs_deleted: '🗑 حُذف',
    fs_delete_failed: 'فشل الحذف',
    fs_load_failed: 'فشل التحميل',
    fs_project_files: '📁 ملفات المشروع',
    fs_upload_btn: '📤 رفع ملف',
    fs_upload_unavailable: 'خدمة الرفع غير متوفرة'
  });
  Object.assign(EN, {
    fs_no_projects: 'No projects',
    fs_loading: 'Loading...',
    fs_sync_disabled: 'Sync disabled',
    fs_no_files: 'No files yet',
    fs_files_count: '{n} files',
    fs_uploading: '📤 Uploading...',
    fs_uploaded: '✅ Uploaded!',
    fs_upload_failed: 'Upload failed',
    fs_size_limit: '⚠️ Limit 25 MB',
    fs_delete_confirm: 'Delete file?',
    fs_deleted: '🗑 Deleted',
    fs_delete_failed: 'Delete failed',
    fs_load_failed: 'Load failed',
    fs_project_files: '📁 Project Files',
    fs_upload_btn: '📤 Upload File',
    fs_upload_unavailable: 'Upload service unavailable'
  });

  /* ============ Calendar Sync ============ */
  Object.assign(AR, {
    cal_export_done: '📅 تم تنزيل ملف التقويم',
    cal_export_failed: 'فشل التصدير',
    cal_menu_label: 'تصدير للمهام التقويم (.ics)'
  });
  Object.assign(EN, {
    cal_export_done: '📅 Calendar file downloaded',
    cal_export_failed: 'Export failed',
    cal_menu_label: 'Export tasks to Calendar (.ics)'
  });

  /* ============ Keyboard Shortcuts ============ */
  Object.assign(AR, {
    kb_help_title: '⌨️ اختصارات لوحة المفاتيح',
    kb_search: 'بحث شامل',
    kb_save: 'حفظ',
    kb_undo: 'تراجع',
    kb_escape: 'إغلاق النوافذ',
    kb_new_idea: 'فكرة جديدة',
    kb_new_task: 'مهمة جديدة',
    kb_new_wizard: 'المعالج الذكي',
    kb_hub: 'لوحة المشروع',
    kb_dashboard: 'لوحة التحكم',
    kb_ideas: 'أفكاري',
    kb_roadmap: 'خريطة الطريق',
    kb_help: 'عرض هذه القائمة'
  });
  Object.assign(EN, {
    kb_help_title: '⌨️ Keyboard Shortcuts',
    kb_search: 'Search',
    kb_save: 'Save',
    kb_undo: 'Undo',
    kb_escape: 'Close modals',
    kb_new_idea: 'New Idea',
    kb_new_task: 'New Task',
    kb_new_wizard: 'Smart Wizard',
    kb_hub: 'Project Hub',
    kb_dashboard: 'Dashboard',
    kb_ideas: 'My Ideas',
    kb_roadmap: 'Roadmap',
    kb_help: 'Show this list'
  });

  /* ============ Undo ============ */
  Object.assign(AR, {
    undo_done: '↶ تم التراجع',
    undo_nothing: 'لا شيء للتراجع عنه',
    undo_deleted_idea: '↶ استُرجع: الفكرة',
    undo_deleted_task: '↶ استُرجع: المهمة',
    undo_deleted_budget: '↶ استُرجع: بند الميزانية'
  });
  Object.assign(EN, {
    undo_done: '↶ Undone',
    undo_nothing: 'Nothing to undo',
    undo_deleted_idea: '↶ Restored: Idea',
    undo_deleted_task: '↶ Restored: Task',
    undo_deleted_budget: '↶ Restored: Budget item'
  });

  /* ============ Project Hub ============ */
  Object.assign(AR, {
    hub_title: '🎯 لوحة المشروع',
    hub_sub: 'كل شيء عن مشروعك في صفحة واحدة',
    hub_no_project: 'لا يوجد مشروع محدد',
    hub_no_project_sub: 'اختر مشروعاً من الأعلى',
    hub_overview: '📊 نظرة عامة',
    hub_tasks: '📝 المهام',
    hub_budget: '💰 الميزانية',
    hub_stakeholders: '👥 أصحاب المصلحة',
    hub_deals: '💼 الفرص',
    hub_risks: '⚠️ المخاطر',
    hub_milestones: '🎯 المعالم',
    hub_sdg: '🌱 SDG',
    hub_stage: 'المرحلة',
    hub_progress: 'التقدم',
    hub_health: 'صحة المشروع',
    hub_health_good: 'ممتاز',
    hub_health_warning: 'يحتاج انتباه',
    hub_health_critical: 'حرج',
    hub_quick_actions: 'إجراءات سريعة',
    hub_go_strategy: 'الاستراتيجية',
    hub_go_impact: 'الأثر',
    hub_go_files: 'الملفات',
    hub_go_milestones: 'المعالم',
    hub_go_risks: 'المخاطر',
    hub_days_left: '{n} يوم متبقي',
    hub_days_overdue: '{n} يوم متأخر',
    hub_balance: 'الرصيد',
    hub_active_tasks: 'مهام نشطة',
    hub_open_risks: 'مخاطر مفتوحة',
    hub_won_deals: 'صفقات رابحة',
    hub_team_size: 'حجم الفريق',
    hub_last_update: 'آخر تحديث',
    hub_total_budget: 'الميزانية الكلية',
    hub_income: 'الدخل',
    hub_expense: 'المصروف',
    hub_risk_heat: 'حرارة المخاطر'
  });
  Object.assign(EN, {
    hub_title: '🎯 Project Hub',
    hub_sub: 'Everything about your project in one place',
    hub_no_project: 'No project selected',
    hub_no_project_sub: 'Select a project above',
    hub_overview: '📊 Overview',
    hub_tasks: '📝 Tasks',
    hub_budget: '💰 Budget',
    hub_stakeholders: '👥 Stakeholders',
    hub_deals: '💼 Deals',
    hub_risks: '⚠️ Risks',
    hub_milestones: '🎯 Milestones',
    hub_sdg: '🌱 SDG',
    hub_stage: 'Stage',
    hub_progress: 'Progress',
    hub_health: 'Project Health',
    hub_health_good: 'Excellent',
    hub_health_warning: 'Needs attention',
    hub_health_critical: 'Critical',
    hub_quick_actions: 'Quick Actions',
    hub_go_strategy: 'Strategy',
    hub_go_impact: 'Impact',
    hub_go_files: 'Files',
    hub_go_milestones: 'Milestones',
    hub_go_risks: 'Risks',
    hub_days_left: '{n} days left',
    hub_days_overdue: '{n} days overdue',
    hub_balance: 'Balance',
    hub_active_tasks: 'Active Tasks',
    hub_open_risks: 'Open Risks',
    hub_won_deals: 'Won Deals',
    hub_team_size: 'Team Size',
    hub_last_update: 'Last Update',
    hub_total_budget: 'Total Budget',
    hub_income: 'Income',
    hub_expense: 'Expense',
    hub_risk_heat: 'Risk Heat'
  });

  console.log('🌍 i18n-finish loaded — +180 keys');
})();