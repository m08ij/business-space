/* ============================================================
   🌍 translation-interceptor.js — ترجمة النصوص المضمّنة
   يعترض showModal + toast ويترجم النصوص العربية تلقائياً
   ============================================================ */
(function(){
  'use strict';

  var AR_TO_EN = {
    // الأفكار
    '💡 فكرة جديدة': '💡 New Idea',
    '✏️ تعديل فكرة': '✏️ Edit Idea',
    'اسم الفكرة': 'Idea Name',
    'الوصف': 'Description',
    'النوع': 'Type',
    'القطاع': 'Sector',
    'الدولة': 'Country',
    'المشكلة التي تحلّها': 'Problem You Solve',
    'المشكلة': 'Problem',
    'الحل المقترح': 'Proposed Solution',
    'الحل': 'Solution',
    'أدخل اسم الفكرة': 'Enter idea name',
    '✓ أُضيفت الفكرة': '✓ Idea added',
    '✓ حُدّثت': '✓ Updated',
    '🗑 حُذفت': '🗑 Deleted',
    'حذف الفكرة؟': 'Delete idea?',
    'تحويل لمشروع': 'Convert to Project',
    'عرض': 'View',

    // المبيعات
    '💼 فرصة بيعية جديدة': '💼 New Sales Deal',
    '✏️ تعديل الفرصة': '✏️ Edit Deal',
    'العميل': 'Client',
    'المشروع / الموضوع': 'Project / Topic',
    'المشروع': 'Project',
    'القيمة المتوقعة': 'Expected Value',
    'القيمة': 'Value',
    'العملة': 'Currency',
    'المرحلة': 'Stage',
    'ملاحظات': 'Notes',
    'ملاحظة': 'Note',
    'أدخل اسم العميل': 'Enter client name',
    '✓ أُضيفت الفرصة': '✓ Deal added',
    '🗑 حُدفت': '🗑 Deleted',
    'حذف الفرصة؟': 'Delete deal?',
    '🎯 MEDDIC — ': '🎯 MEDDIC — ',
    'M — المقاييس': 'M — Metrics',
    'E — المشتري الاقتصادي': 'E — Economic Buyer',
    'D — معايير القرار': 'D — Decision Criteria',
    'D — عملية القرار': 'D — Decision Process',
    'I — تحديد الألم': 'I — Identify Pain',
    'C — المناصر': 'C — Champion',
    '✓ حُدّث MEDDIC': '✓ MEDDIC updated',

    // المهام
    '📝 مهمة جديدة': '📝 New Task',
    '✏️ تعديل مهمة': '✏️ Edit Task',
    'عنوان المهمة': 'Task Title',
    'المشروع (اختياري)': 'Project (optional)',
    'تاريخ التسليم': 'Due Date',
    'أدخل عنواناً': 'Enter a title',
    '✓ أُضيفت المهمة': '✓ Task added',
    'حذف المهمة؟': 'Delete task?',
    '✓ أحسنت!': '✓ Well done!',
    'عنوان المهمة:': 'Task title:',

    // الميزانية
    'إضافة دخل': 'Add Income',
    'إضافة مصروف': 'Add Expense',
    'التصنيف': 'Category',
    'المبلغ': 'Amount',
    'التاريخ': 'Date',
    'أدخل مبلغاً': 'Enter amount',
    '✓ أُضيف': '✓ Added',
    'حذف العنصر؟': 'Delete item?',

    // أصحاب المصلحة
    '👥 صاحب مصلحة': '👥 Stakeholder',
    'الاسم': 'Name',
    'الدور': 'Role',
    'الجهة': 'Organization',
    'التواصل': 'Contact',
    'أدخل الاسم': 'Enter name',
    '✓ أُضيف': '✓ Added',
    'حذف؟': 'Delete?',

    // الملاحظات
    '📔 ملاحظة جديدة': '📔 New Note',
    'عنوان...': 'Title...',
    'اكتب...': 'Write...',
    '✓ أُضيفت': '✓ Added',
    'حذف الملاحظة؟': 'Delete note?',

    // الاستراتيجية
    'الهدف (Objective):': 'Objective:',
    'النتيجة الرئيسية:': 'Key Result:',
    'أضف عنصراً في "{key}":': 'Add item to "{key}":',
    'أضف عنصراً': 'Add item',
    'لا توجد أهداف': 'No objectives',
    'لا توجد مهام في هذه المرحلة': 'No tasks in this stage',
    'عنوان المهمة:': 'Task title:',
    'عنوان المهمة': 'Task Title',

    // Toast عام
    '☁️ حُفظ سحابياً': '☁️ Saved to cloud',
    '💾 حُفظ محلياً': '💾 Saved locally',
    '✓ أُضيف': '✓ Added',
    'تم': 'Done',
    '🎉': '🎉',
    '❓ أخرى / Other': '❓ Other',
    '➕ إضافة': '➕ Add',
    '🔴 مفتوحة': '🔴 Open',
    '🛠️ قيد التخفيف': '🛠️ Mitigating',
    '✅ مغلقة': '✅ Closed',
    '✔️ مقبولة': '✔️ Accepted'
  };

  function trKey(str){
    if(!str || typeof str !== 'string') return str;
    var lang = window.i18n ? window.i18n.getLang() : 'ar';
    if(lang === 'ar') return str;
    /* بحث دقيق */
    if(AR_TO_EN[str]) return AR_TO_EN[str];
    /* بحث بالاحتواء (للعناوين المركبة) */
    var keys = Object.keys(AR_TO_EN);
    for(var i = 0; i < keys.length; i++){
      if(keys[i].length > 4 && str.indexOf(keys[i]) > -1){
        str = str.split(keys[i]).join(AR_TO_EN[keys[i]]);
      }
    }
    return str;
  }

  function install(){
    /* 1) اعتراض showModal */
    if(typeof window.showModal === 'function' && !window._showModalPatched){
      window._showModalPatched = true;
      var origShowModal = window.showModal;
      window.showModal = function(title, fields, values, onSubmit, onDelete){
        title = trKey(title);
        fields = (fields || []).map(function(f){
          return Object.assign({}, f, {
            label: trKey(f.label),
            placeholder: trKey(f.placeholder || '')
          });
        });
        return origShowModal.call(this, title, fields, values, onSubmit, onDelete);
      };
    }

    /* 2) اعتراض toast */
    if(typeof window.toast === 'function' && !window._toastPatched){
      window._toastPatched = true;
      var origToast = window.toast;
      window.toast = function(msg, type, dur){
        msg = trKey(msg);
        return origToast.call(this, msg, type, dur);
      };
    }

    /* 3) اعتراض customConfirm */
    if(typeof window.customConfirm === 'function' && !window._confirmPatched){
      window._confirmPatched = true;
      var origConfirm = window.customConfirm;
      window.customConfirm = function(msg, onConfirm){
        msg = trKey(msg);
        return origConfirm.call(this, msg, onConfirm);
      };
    }
  }

  function tryInstall(){
    install();
    if(!window._showModalPatched || !window._toastPatched || !window._confirmPatched){
      setTimeout(tryInstall, 300);
    }
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(tryInstall, 400); });
  else setTimeout(tryInstall, 400);

  /* إعادة التثبيت بعد تغيير اللغة (لا نحتاج، الترجمة تتم لحظياً) */

  window._translateIfNeeded = trKey;
  console.log('🌍 Translation Interceptor loaded');
})();