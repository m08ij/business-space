/* ============================================================
   📦 bundle.js — دمج الملفات في 4 باندلز
   الاستخدام: node bundle.js
   ============================================================ */
const fs = require('fs');
const path = require('path');

const BUNDLES = {
  'core.js': [
    'i18n.js',
    'i18n-patch.js',
    'kb-i18n-patch.js',
    'translation-interceptor.js',
    'business-data.js',
    'supabase-config.js',
    'supabase-client.js',
    'fix-buttons.js',
    'qc-fix.js'
  ],
  'modules.js': [
    'countries-global.js',
    'country-patch.js',
    'country-adapter.js',
    'idea-incubator.js',
    'strategy-builder.js',
    'impact-calculator.js',
    'leadership-coach.js',
    'sales-toolkit.js',
    'project-lifecycle.js',
    'milestones.js',
    'risk-register.js',
    'email-digest.js',
    'file-sync-plus.js',
    'insights.js',
    'calendar-sync.js',
    'archive.js',
    'ai-advisor.js'
  ],
  'smart.js': [
    'project-knowledge-base.js',
    'smart-project-wizard.js',
    'project-classifier.js',
    'demo-project.js'
  ],
  'widgets-pwa.js': [
    'widgets.js',
    'pwa.js'
  ]
};

const stamp = new Date().toISOString();
let grand = 0;

Object.entries(BUNDLES).forEach(([outName, files]) => {
  let out = '';
  out += `/* ============================================================\n`;
  out += `   📦 ${outName} — AUTO-GENERATED BUNDLE\n`;
  out += `   Generated: ${stamp}\n`;
  out += `   Sources: ${files.length} files\n`;
  out += `   ⚠️ لا تعدّل هذا الملف — عدّل المصادر في src/ ثم أعد التشغيل\n`;
  out += `   ============================================================ */\n\n`;

  let missing = [];
  files.forEach(f => {
    // ابحث في الجذر وفي src/
    let p = f;
    if (!fs.existsSync(p)) p = path.join('src', f);
    if (!fs.existsSync(p)) { missing.push(f); return; }

    out += `\n/* ========== ${f} ========== */\n`;
    out += fs.readFileSync(p, 'utf8');
    out += '\n';
  });

  fs.writeFileSync(outName, out);
  const kb = (out.length / 1024).toFixed(1);
  grand += out.length;
  console.log(`✅ ${outName.padEnd(20)} ${kb.padStart(8)} KB   (${files.length - missing.length}/${files.length})`);
  if (missing.length) console.warn(`   ⚠️  Missing: ${missing.join(', ')}`);
});

console.log(`\n📊 Total bundle size: ${(grand/1024).toFixed(1)} KB`);
console.log(`🚀 Ready to upload: index.html, manifest.json, sw.js, core.js, modules.js, smart.js, widgets-pwa.js`);