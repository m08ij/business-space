/* ============================================================
   🌍 i18n-extra.js — مفاتيح ترجمة إضافية للملفات المُصلَّحة
   ✅ يحل محل prompt() في الاستراتيجية والمعالم
   ============================================================ */
(function(){
  'use strict';
  if(!window.i18n || !window.i18n.I18N){ console.warn('i18n-extra: i18n not loaded'); return; }
  var AR = window.i18n.I18N.ar;
  var EN = window.i18n.I18N.en;

  /* ============ Strategy Builder — SWOT ============ */
  Object.assign(AR, {
    swot_add_item: 'أضف عنصراً في',
    swot_item_label: 'النص',
    swot_item_ph: 'اكتب العنصر...',
    swot_item_required: 'أدخل نصاً',
    swot_strengths_short: 'نقاط القوة',
    swot_weaknesses_short: 'نقاط الضعف',
    swot_opportunities_short: 'الفرص',
    swot_threats_short: 'التهديدات'
  });
  Object.assign(EN, {
    swot_add_item: 'Add item to',
    swot_item_label: 'Text',
    swot_item_ph: 'Write item...',
    swot_item_required: 'Enter text',
    swot_strengths_short: 'Strengths',
    swot_weaknesses_short: 'Weaknesses',
    swot_opportunities_short: 'Opportunities',
    swot_threats_short: 'Threats'
  });

  /* ============ Strategy Builder — OKRs ============ */
  Object.assign(AR, {
    okr_add_objective_title: '🎯 هدف جديد',
    okr_edit_objective_title: '✏️ تعديل الهدف',
    okr_objective_field: 'الهدف (Objective)',
    okr_objective_ph: 'مثال: إطلاق MVP بنجاح',
    okr_objective_required: 'أدخل الهدف',
    okr_add_kr_title: '➕ نتيجة رئيسية جديدة',
    okr_kr_field: 'النتيجة الرئيسية (Key Result)',
    okr_kr_ph: 'مثال: إكمال 100% من المهام',
    okr_kr_required: 'أدخل النتيجة',
    okr_added: '✓ أُضيف الهدف',
    okr_kr_added: '✓ أُضيفت النتيجة',
    okr_deleted: '🗑 حُذف الهدف',
    okr_no_objectives: 'لا توجد أهداف بعد'
  });
  Object.assign(EN, {
    okr_add_objective_title: '🎯 New Objective',
    okr_edit_objective_title: '✏️ Edit Objective',
    okr_objective_field: 'Objective',
    okr_objective_ph: 'e.g. Successfully launch MVP',
    okr_objective_required: 'Enter objective',
    okr_add_kr_title: '➕ New Key Result',
    okr_kr_field: 'Key Result',
    okr_kr_ph: 'e.g. Complete 100% of tasks',
    okr_kr_required: 'Enter key result',
    okr_added: '✓ Objective added',
    okr_kr_added: '✓ Key result added',
    okr_deleted: '🗑 Objective deleted',
    okr_no_objectives: 'No objectives yet'
  });

  /* ============ Milestones — Progress ============ */
  Object.assign(AR, {
    ms_progress_title: '📊 تحديث نسبة الإنجاز',
    ms_progress_hint: 'اسحب الشريط أو اكتب النسبة من 0 إلى 100',
    ms_progress_percent: 'النسبة (%)',
    ms_progress_updated: '✓ حُدّثت النسبة',
    ms_progress_invalid: 'أدخل رقماً من 0 إلى 100',
    ms_progress_auto_complete: '🎉 اكتمل المعلم تلقائياً!',
    ms_progress_auto_start: '▶ بدأ العمل تلقائياً'
  });
  Object.assign(EN, {
    ms_progress_title: '📊 Update Progress',
    ms_progress_hint: 'Slide or type a number between 0 and 100',
    ms_progress_percent: 'Percent (%)',
    ms_progress_updated: '✓ Progress updated',
    ms_progress_invalid: 'Enter a number from 0 to 100',
    ms_progress_auto_complete: '🎉 Milestone auto-completed!',
    ms_progress_auto_start: '▶ Work started automatically'
  });

  /* ============ Milestones — Extra ============ */
  Object.assign(AR, {
    ms_export_copied: '📋 نُسخ الجدول الزمني',
    ms_delete_title: 'حذف المعلم؟',
    ms_delete_msg: 'سيتم حذف "{title}" نهائياً'
  });
  Object.assign(EN, {
    ms_export_copied: '📋 Timeline copied',
    ms_delete_title: 'Delete milestone?',
    ms_delete_msg: '"{title}" will be permanently deleted'
  });

  /* ============ Strategy — Export ============ */
  Object.assign(AR, {
    swot_export_copied: '📋 نُسخ تحليل SWOT',
    pestel_export_copied: '📋 نُسخ تحليل PESTEL'
  });
  Object.assign(EN, {
    swot_export_copied: '📋 SWOT copied',
    pestel_export_copied: '📋 PESTEL copied'
  });

  console.log('🌍 i18n-extra loaded — +40 keys');
})();