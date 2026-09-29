/* ============================================================
   🌍 i18n-patch.js — المفاتيح الإضافية (Archive, Insights, Digest)
   يجب تحميله بعد i18n.js
   ============================================================ */
(function(){
  'use strict';
  if(!window.i18n || !window.i18n.I18N){ 
    console.warn('i18n-patch: i18n.js not loaded'); return; 
  }

  var AR = window.i18n.I18N.ar;
  var EN = window.i18n.I18N.en;

  /* ============ Milestones (ms_*) ============ */
  Object.assign(AR, {
    ms_title: '🎯 المعالم الزمنية', ms_sub: 'خط زمني مرئي للمشاريع',
    ms_total: 'إجمالي المعالم', ms_in_progress: 'جارية',
    ms_completed: 'مكتملة', ms_delayed: 'متأخرة',
    ms_add: '+ معلم جديد', ms_print: '🖨️ طباعة',
    ms_empty: 'لا توجد معالم بعد',
    ms_empty_sub: 'أضف معالم لعرض المخطط الزمني',
    ms_details: 'تفاصيل المعالم', ms_gantt: 'مخطط جانت',
    ms_task: 'المهمة', ms_no_dates: 'لا تواريخ', ms_days: 'يوم',
    ms_progress: 'التقدّم', ms_overdue: 'متأخرة', ms_update: 'تحديث',
    ms_delete_confirm: 'حذف المعلم؟', ms_deleted: '🗑 حُذف',
    ms_progress_prompt: 'نسبة الإنجاز (0-100):',
    ms_new: '🎯 معلم جديد', ms_edit: '✏️ تعديل المعلم',
    ms_start: 'تاريخ البداية', ms_end: 'تاريخ النهاية',
    ms_owner: 'المسؤول', ms_progress_label: 'نسبة الإنجاز %',
    ms_status: 'الحالة',
    ms_status_not_started: 'لم تبدأ', ms_status_in_progress: 'جارية',
    ms_status_completed: 'مكتملة', ms_status_delayed: 'متأخرة',
    ms_status_on_hold: 'معلّقة',
    ms_notes: 'ملاحظات', ms_title_required: 'أدخل عنوان المعلم',
    ms_added: '✓ أُضيف المعلم', ms_updated: '✓ حُدّث المعلم'
  });
  Object.assign(EN, {
    ms_title: '🎯 Milestones', ms_sub: 'Visual project timeline',
    ms_total: 'Total Milestones', ms_in_progress: 'In Progress',
    ms_completed: 'Completed', ms_delayed: 'Delayed',
    ms_add: '+ New Milestone', ms_print: '🖨️ Print',
    ms_empty: 'No milestones yet',
    ms_empty_sub: 'Add milestones to see the timeline',
    ms_details: 'Milestone Details', ms_gantt: 'Gantt Chart',
    ms_task: 'Task', ms_no_dates: 'No dates', ms_days: 'days',
    ms_progress: 'Progress', ms_overdue: 'Overdue', ms_update: 'Update',
    ms_delete_confirm: 'Delete milestone?', ms_deleted: '🗑 Deleted',
    ms_progress_prompt: 'Progress (0-100):',
    ms_new: '🎯 New Milestone', ms_edit: '✏️ Edit Milestone',
    ms_start: 'Start Date', ms_end: 'End Date',
    ms_owner: 'Owner', ms_progress_label: 'Progress %',
    ms_status: 'Status',
    ms_status_not_started: 'Not Started', ms_status_in_progress: 'In Progress',
    ms_status_completed: 'Completed', ms_status_delayed: 'Delayed',
    ms_status_on_hold: 'On Hold',
    ms_notes: 'Notes', ms_title_required: 'Enter milestone title',
    ms_added: '✓ Milestone added', ms_updated: '✓ Milestone updated'
  });

  /* ============ Risks (risk_*) ============ */
  Object.assign(AR, {
    risk_title: '⚠️ سجل المخاطر', risk_sub: 'تحليل الاحتمالية × التأثير',
    risk_total: 'إجمالي المخاطر', risk_critical: 'حرجة',
    risk_high: 'عالية', risk_medium: 'متوسطة', risk_low: 'منخفضة',
    risk_add: '+ مخاطرة جديدة',
    risk_empty: 'لا توجد مخاطر مسجّلة',
    risk_empty_sub: 'أضف مخاطر لتحليلها في مصفوفة 5×5',
    risk_list: 'قائمة المخاطر',
    risk_matrix: 'مصفوفة المخاطر (الاحتمالية × التأثير)',
    risk_p1: 'نادر', risk_p2: 'منخفض', risk_p3: 'متوسط',
    risk_p4: 'مرتفع', risk_p5: 'شبه مؤكد',
    risk_i1: 'ضئيل', risk_i2: 'طفيف', risk_i3: 'متوسط',
    risk_i4: 'كبير', risk_i5: 'كارثي',
    risk_p: 'احتمالية', risk_i: 'تأثير',
    risk_impact: 'التأثير', risk_probability: 'الاحتمالية',
    risk_delete_confirm: 'حذف المخاطرة؟', risk_deleted: '🗑 حُذفت',
    risk_new: '⚠️ مخاطرة جديدة', risk_edit: '✏️ تعديل المخاطرة',
    risk_desc: 'الوصف', risk_category: 'التصنيف',
    risk_mitigation: 'خطة التخفيف', risk_owner: 'المسؤول',
    risk_status: 'الحالة',
    risk_status_open: 'مفتوحة', risk_status_mitigating: 'قيد التخفيف',
    risk_status_closed: 'مغلقة', risk_status_accepted: 'مقبولة',
    risk_title_required: 'أدخل عنوان المخاطرة',
    risk_added: '✓ أُضيفت المخاطرة', risk_updated: '✓ حُدّثت المخاطرة'
  });
  Object.assign(EN, {
    risk_title: '⚠️ Risk Register', risk_sub: 'Probability × Impact analysis',
    risk_total: 'Total Risks', risk_critical: 'Critical',
    risk_high: 'High', risk_medium: 'Medium', risk_low: 'Low',
    risk_add: '+ New Risk',
    risk_empty: 'No risks recorded',
    risk_empty_sub: 'Add risks to analyze in the 5×5 matrix',
    risk_list: 'Risk List',
    risk_matrix: 'Risk Matrix (Probability × Impact)',
    risk_p1: 'Rare', risk_p2: 'Low', risk_p3: 'Medium',
    risk_p4: 'High', risk_p5: 'Almost Certain',
    risk_i1: 'Negligible', risk_i2: 'Minor', risk_i3: 'Moderate',
    risk_i4: 'Major', risk_i5: 'Catastrophic',
    risk_p: 'Probability', risk_i: 'Impact',
    risk_impact: 'Impact', risk_probability: 'Probability',
    risk_delete_confirm: 'Delete risk?', risk_deleted: '🗑 Deleted',
    risk_new: '⚠️ New Risk', risk_edit: '✏️ Edit Risk',
    risk_desc: 'Description', risk_category: 'Category',
    risk_mitigation: 'Mitigation Plan', risk_owner: 'Owner',
    risk_status: 'Status',
    risk_status_open: 'Open', risk_status_mitigating: 'Mitigating',
    risk_status_closed: 'Closed', risk_status_accepted: 'Accepted',
    risk_title_required: 'Enter risk title',
    risk_added: '✓ Risk added', risk_updated: '✓ Risk updated'
  });

  /* ============ Digest (digest_*) ============ */
  Object.assign(AR, {
    digest_title: '📧 البريد الدوري', digest_sub: 'جدولة تقارير أسبوعية/شهرية',
    digest_desc: 'أرسل ملخصاً دورياً لمشاريعك ومهامك ومخاطرك عبر البريد الإلكتروني.',
    digest_schedule: 'الجدولة', digest_manual: 'يدوي',
    digest_daily: 'يومي', digest_weekly: 'أسبوعي', digest_monthly: 'شهري',
    digest_subject: 'عنوان الرسالة', digest_sections: 'الأقسام المُضمّنة',
    digest_sec_tasks: 'المهام', digest_sec_projects: 'المشاريع',
    digest_sec_sales: 'المبيعات', digest_sec_budget: 'الميزانية',
    digest_sec_risks: 'المخاطر', digest_sec_milestones: 'المعالم',
    digest_sec_notes: 'الملاحظات',
    digest_recipients: 'المستلمون', digest_add_recipient: '+ مستلم',
    digest_no_recipients: 'لا يوجد مستلمون', digest_no_name: 'بدون اسم',
    digest_add_cc: '+ CC', digest_no_cc: 'لا يوجد CC',
    digest_preview: 'المعاينة', digest_refresh: 'تحديث',
    digest_send: '📤 إرسال', digest_copy_body: '📋 نسخ النص',
    digest_saved: '✓ حُفظ', digest_refreshed: '✓ تم التحديث',
    digest_delete_confirm: 'حذف هذا العنصر؟',
    digest_name: 'الاسم', digest_email: 'البريد الإلكتروني',
    digest_email_invalid: 'بريد غير صحيح', digest_no_title: 'بدون عنوان',
    digest_summary: 'الملخص', digest_footer: 'ملخص آلي من مساحتك',
    digest_opened: '✉️ فُتح بريدك الإلكتروني',
    digest_new_recipient: '➕ إضافة مستلم جديد',
    digest_new_cc: '➕ إضافة CC جديد'
  });
  Object.assign(EN, {
    digest_title: '📧 Email Digest', digest_sub: 'Schedule weekly/monthly reports',
    digest_desc: 'Send periodic summaries of your projects, tasks and risks via email.',
    digest_schedule: 'Schedule', digest_manual: 'Manual',
    digest_daily: 'Daily', digest_weekly: 'Weekly', digest_monthly: 'Monthly',
    digest_subject: 'Subject', digest_sections: 'Included Sections',
    digest_sec_tasks: 'Tasks', digest_sec_projects: 'Projects',
    digest_sec_sales: 'Sales', digest_sec_budget: 'Budget',
    digest_sec_risks: 'Risks', digest_sec_milestones: 'Milestones',
    digest_sec_notes: 'Notes',
    digest_recipients: 'Recipients', digest_add_recipient: '+ Recipient',
    digest_no_recipients: 'No recipients', digest_no_name: 'No name',
    digest_add_cc: '+ CC', digest_no_cc: 'No CC',
    digest_preview: 'Preview', digest_refresh: 'Refresh',
    digest_send: '📤 Send', digest_copy_body: '📋 Copy Body',
    digest_saved: '✓ Saved', digest_refreshed: '✓ Refreshed',
    digest_delete_confirm: 'Delete this item?',
    digest_name: 'Name', digest_email: 'Email',
    digest_email_invalid: 'Invalid email', digest_no_title: 'No title',
    digest_summary: 'Summary', digest_footer: 'Automated summary from your space',
    digest_opened: '✉️ Email client opened',
    digest_new_recipient: '➕ Add new recipient',
    digest_new_cc: '➕ Add new CC'
  });

  /* ============ Archive (archive_*) ============ */
  Object.assign(AR, {
    archive_title: '📦 الأرشيف', archive_sub: 'مشاريعك المؤرشفة',
    archive_empty: 'الأرشيف فارغ',
    archive_empty_sub: 'عند أرشفة مشروع، سيظهر هنا مع كل بياناته',
    archive_projects_archived: 'مشاريع مؤرشفة',
    archive_archived_in: 'أُرشف في',
    archive_stages: 'مراحل', archive_risks: 'مخاطر',
    archive_tasks: 'مهام',
    archive_view: '👁️ عرض', archive_restore: '♻️ استعادة',
    archive_delete_permanent: '🗑 حذف نهائي',
    archive_move_confirm: 'نقل "{name}" إلى الأرشيف؟ سيتم الاحتفاظ بكل البيانات.',
    archive_moved: '📦 تم النقل للأرشيف',
    archive_restore_confirm: 'استعادة "{name}" من الأرشيف؟',
    archive_restored: '♻️ تم الاستعادة',
    archive_delete_confirm: 'حذف نهائي؟ لا يمكن التراجع.',
    archive_deleted: '🗑 حُذف نهائياً',
    archive_no_stages: 'لا مراحل'
  });
  Object.assign(EN, {
    archive_title: '📦 Archive', archive_sub: 'Your archived projects',
    archive_empty: 'Archive is empty',
    archive_empty_sub: 'Archived projects will appear here with all their data',
    archive_projects_archived: 'Archived Projects',
    archive_archived_in: 'Archived in',
    archive_stages: 'Stages', archive_risks: 'Risks',
    archive_tasks: 'Tasks',
    archive_view: '👁️ View', archive_restore: '♻️ Restore',
    archive_delete_permanent: '🗑 Delete Permanently',
    archive_move_confirm: 'Move "{name}" to archive? All data will be kept.',
    archive_moved: '📦 Moved to archive',
    archive_restore_confirm: 'Restore "{name}" from archive?',
    archive_restored: '♻️ Restored',
    archive_delete_confirm: 'Permanent delete? Cannot be undone.',
    archive_deleted: '🗑 Deleted permanently',
    archive_no_stages: 'No stages'
  });

  /* ============ Insights (insights_*) ============ */
  Object.assign(AR, {
    insights_projects: 'مشروع',
    insights_active: 'نشط',
    insights_ideas: 'فكرة',
    insights_win_rate: 'نسبة الفوز',
    insights_projects_by_stage: '🗺️ توزيع المشاريع حسب المرحلة',
    insights_pipeline_title: '💼 القمع البيعي',
    insights_sdg_title: '🎯 أهداف التنمية المستدامة (SDG)'
  });
  Object.assign(EN, {
    insights_projects: 'Projects',
    insights_active: 'Active',
    insights_ideas: 'Ideas',
    insights_win_rate: 'Win Rate',
    insights_projects_by_stage: '🗺️ Projects by Stage',
    insights_pipeline_title: '💼 Sales Pipeline',
    insights_sdg_title: '🎯 SDG Goals'
  });

  if(window.i18n.applyTranslations) window.i18n.applyTranslations();
  document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: window.i18n.getLang() } }));

  console.log('🌍 i18n-patch loaded');
})();