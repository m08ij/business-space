/* ============================================================
   🌍 kb-i18n-patch.js — مفاتيح Classifier + Wizard
   ✅ لا يُطلق languagechange عند التحميل (كان يسبب ارتباك)
   ============================================================ */
(function(){
  'use strict';
  if(!window.i18n || !window.i18n.I18N){ console.warn('kb-i18n-patch: not loaded'); return; }
  var AR = window.i18n.I18N.ar;
  var EN = window.i18n.I18N.en;

  /* Classifier */
  Object.assign(AR, {
    cls_all_types:'كل الأنواع', cls_all_sectors:'كل القطاعات', cls_all_countries:'كل الدول',
    cls_search_ph:'ابحث في الأفكار...', cls_toggle_view:'تبديل العرض', cls_clear:'مسح الفلاتر',
    cls_sort_recent:'الأحدث', cls_sort_name:'الاسم',
    cls_showing:'يُعرض', cls_of:'من',
    cls_has_project:'مشروع', cls_no_results:'لا نتائج', cls_no_results_hint:'جرّب تغيير الفلاتر',
    cls_delete_all:'حذف الفكرة وكل ما يرتبط بها',
    cls_delete_confirm:'⚠️ حذف نهائي — سيمسح كل ما يلي:',
    cls_will_delete_idea:'الفكرة',
    cls_will_delete_project:'المشروع',
    cls_cannot_undo:'⚠️ لا يمكن التراجع!',
    cls_deleting:'🗑 جاري الحذف',
    cls_deleted:'✅ تم حذف كل شيء بنجاح',
    cls_not_found:'⚠️ العنصر غير موجود',
	sh_project: 'المشروع المرتبط',
    sh_no_project: '— بدون —',
  });
  Object.assign(EN, {
    cls_all_types:'All Types', cls_all_sectors:'All Sectors', cls_all_countries:'All Countries',
    cls_search_ph:'Search ideas...', cls_toggle_view:'Toggle View', cls_clear:'Clear Filters',
    cls_sort_recent:'Most Recent', cls_sort_name:'Name',
    cls_showing:'Showing', cls_of:'of',
    cls_has_project:'Project', cls_no_results:'No results', cls_no_results_hint:'Try changing filters',
    cls_delete_all:'Delete idea & all related',
    cls_delete_confirm:'⚠️ Permanent delete — will remove:',
    cls_will_delete_idea:'Idea',
    cls_will_delete_project:'Project',
    cls_cannot_undo:'⚠️ Cannot be undone!',
    cls_deleting:'🗑 Deleting',
    cls_deleted:'✅ Everything deleted',
    cls_not_found:'⚠️ Not found',
    sh_project: 'Linked Project',
    sh_no_project: '— None —',	
  });

  /* Wizard */
  Object.assign(AR, {
    spw_q3_hint_sector:'💡 نصيحة لقطاع "{sector}"',
    spw_q4_suggest:'⭐ اقتراحات لقطاع: {sector}',
    spw_q5_extra:'أسئلة إضافية', spw_q5_extra_hint:'حسب نوع المشروع',
    spw_q5_legal:'الشكل القانوني المقترح', spw_q5_funding:'مصادر التمويل',
    spw_q5_skip:'لا توجد أسئلة إضافية',
    spw_q7_similar:'مشاريع مشابهة في مساحتك',
    spw_sum_risks:'{n} مخاطر مبدئية', spw_sum_okrs:'OKRs تمهيدية',
    spw_success_risks:'مخاطر', spw_success_budget:'بنود ميزانية',
    spw_resume_draft:'عندك مسودة غير مكتملة. هل تريد استكمالها؟',
    spw_err_story:'املأ الوصف أو المشكلة على الأقل'
  });
  Object.assign(EN, {
    spw_q3_hint_sector:'💡 Tip for "{sector}"',
    spw_q4_suggest:'⭐ Suggested for: {sector}',
    spw_q5_extra:'Extra Questions', spw_q5_extra_hint:'By project type',
    spw_q5_legal:'Legal structure', spw_q5_funding:'Funding sources',
    spw_q5_skip:'No extra questions',
    spw_q7_similar:'Similar projects in your space',
    spw_sum_risks:'{n} starter risks', spw_sum_okrs:'Starter OKRs',
    spw_success_risks:'Risks', spw_success_budget:'Budget items',
    spw_resume_draft:'You have an unfinished draft. Continue?',
    spw_err_story:'Fill description or problem at least'
  });

  /* ✅ لا dispatch هنا — يُطلق تلقائياً عندما يتغير setLang */

  console.log('🌍 KB i18n loaded');
})();