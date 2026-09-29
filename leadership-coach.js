/* ============================================================
   🎓 leadership-coach.js — مدرّب القيادة
   ============================================================ */
(function(){
  'use strict';

  function getSpace(){ return window.space || {profile:{}}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  var QUESTIONS = [
    {q:'كيف تتعامل مع فشل فريقك؟', opts:[
      {t:'أوبّخ الفريق', s:'telling'},
      {t:'أشجع وأشرح', s:'selling'},
      {t:'أناقش السبب معاً', s:'participating'},
      {t:'أتركهم يتعلمون', s:'delegating'}
    ]},
    {q:'عندما يُعطى فريقك مهمة صعبة:', opts:[
      {t:'أعطي خطوات دقيقة', s:'telling'},
      {t:'أشرح الفائدة', s:'selling'},
      {t:'أساعد في التخطيط', s:'participating'},
      {t:'أثق بأنهم يحلّونها', s:'delegating'}
    ]},
    {q:'في اجتماع فريق جديد:', opts:[
      {t:'أقود النقاش', s:'telling'},
      {t:'أحفّز المشاركة', s:'selling'},
      {t:'أستمع أكثر', s:'participating'},
      {t:'أراقب فقط', s:'delegating'}
    ]},
    {q:'قرار مهم في المشروع:', opts:[
      {t:'أقرر بنفسي', s:'telling'},
      {t:'أقنع الفريق', s:'selling'},
      {t:'نقرر معاً', s:'participating'},
      {t:'أفوّض القرار', s:'delegating'}
    ]},
    {q:'موظف جديد في فريقك:', opts:[
      {t:'أملي عليه المهام', s:'telling'},
      {t:'أشرح له بدقة', s:'selling'},
      {t:'أوجّهه وأشجعه', s:'participating'},
      {t:'أتركه يستكشف', s:'delegating'}
    ]},
    {q:'في الأزمات:', opts:[
      {t:'أتخذ القرار بسرعة', s:'telling'},
      {t:'أشرح الموقف للفريق', s:'selling'},
      {t:'نضع خطة معاً', s:'participating'},
      {t:'أثق بقدرات الفريق', s:'delegating'}
    ]},
    {q:'قيم الفريق الأساسية:', opts:[
      {t:'الطاعة والانضباط', s:'telling'},
      {t:'الحماس والرؤية', s:'selling'},
      {t:'التعاون والاحترام', s:'participating'},
      {t:'الاستقلالية والمسؤولية', s:'delegating'}
    ]},
    {q:'كيف تحفّز الفريق؟', opts:[
      {t:'بالمكافآت والغرامات', s:'telling'},
      {t:'بالإلهام والرؤية', s:'selling'},
      {t:'بالمشاركة والتقدير', s:'participating'},
      {t:'بالثقة والحرية', s:'delegating'}
    ]},
    {q:'عند اختيار أعضاء الفريق:', opts:[
      {t:'من ينفّذ الأوامر', s:'telling'},
      {t:'من يشاركني الرؤية', s:'selling'},
      {t:'من يتعاون جيداً', s:'participating'},
      {t:'من يعمل باستقلالية', s:'delegating'}
    ]},
    {q:'في تقييم الأداء:', opts:[
      {t:'أقيس الالتزام', s:'telling'},
      {t:'أقيس الحماس والرؤية', s:'selling'},
      {t:'أقيس التعاون والتطور', s:'participating'},
      {t:'أقيس النتائج', s:'delegating'}
    ]}
  ];

  var STYLES = {
    telling:      {name:'Telling — التوجيهي', icon:'📢', color:'var(--red)', desc:'تقود بتعليمات مباشرة. مناسب للفرق الجديدة أو الأزمات.'},
    selling:      {name:'Selling — البيعي', icon:'💬', color:'var(--amber)', desc:'تقود بالإقناع والإلهام. مناسب للفرق المتحمسة حديثاً.'},
    participating:{name:'Participating — المشارك', icon:'🤝', color:'var(--cyan)', desc:'تقود بالمشاركة والدعم. مناسب للفرق المتوسطة النضج.'},
    delegating:   {name:'Delegating — المفوض', icon:'🎯', color:'var(--green)', desc:'تقود بالثقة والتفويض. مناسب للفرق الناضجة جداً.'}
  };

  function renderLeadership(){
    var el = document.getElementById('leadershipBody');
    if(!el) return;
    var sp = getSpace();
    var result = sp.leadershipAssessment;

    var html = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>📋 اختبار نمط القيادة</h3>' +
      (result ? '<button class="btn btn-sm btn-ghost" id="retakeTest">🔄 إعادة</button>' : '') + '</div>';

    if(!result){
      html += '<div style="font-size:.85rem;color:var(--muted);margin-bottom:16px">أجب على 10 أسئلة سريعة لمعرفة نمط قيادتك السائد.</div>' +
        '<button class="btn" id="startTest" style="width:100%">▶ ابدأ الاختبار</button>';
    } else {
      var style = STYLES[result.winner];
      html += '<div style="text-align:center;padding:24px;background:var(--grad-soft);border-radius:16px;margin-bottom:16px">' +
        '<div style="font-size:3rem">' + style.icon + '</div>' +
        '<div style="font-size:1.3rem;font-weight:800;color:' + style.color + ';margin:8px 0">' + style.name + '</div>' +
        '<div style="font-size:.85rem;color:var(--muted);line-height:1.7">' + style.desc + '</div>' +
      '</div>';
      html += '<div style="font-weight:700;margin-bottom:10px">📊 نتائجك التفصيلية:</div>';
      Object.keys(STYLES).forEach(function(k){
        var s = STYLES[k];
        var score = result.scores[k] || 0;
        var pct = Math.round((score / QUESTIONS.length) * 100);
        html += '<div style="margin-bottom:10px">' +
          '<div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px">' +
            '<span>' + s.icon + ' ' + s.name + '</span>' +
            '<span style="color:' + s.color + ';font-weight:700">' + pct + '%</span>' +
          '</div>' +
          '<div style="height:8px;background:var(--bg2);border-radius:8px;overflow:hidden">' +
            '<div style="height:100%;width:' + pct + '%;background:' + s.color + ';border-radius:8px"></div>' +
          '</div>' +
        '</div>';
      });
      html += '<div style="margin-top:16px;padding:12px;background:var(--bg2);border-radius:10px;font-size:.82rem;line-height:1.8">' +
        '<b>💡 توصيات:</b><br>' +
        (result.winner === 'telling' ? '• جرّب تفويض مهام صغيرة<br>• استمع أكثر للفريق<br>• انتقل تدريجياً للنمط المشارك' : '') +
        (result.winner === 'selling' ? '• وازن بين الإلهام والتنفيذ<br>• ضع مؤشرات قياس<br>• طوّر مهارات التفويض' : '') +
        (result.winner === 'participating' ? '• في الأزمات، قرّر بسرعة<br>• لا تفرط في التشاور<br>• درّب الفريق على الاستقلالية' : '') +
        (result.winner === 'delegating' ? '• تأكد من المتابعة الدورية<br>• لا تفترض أن الجميع جاهز<br>• كن مرناً حسب الموقف' : '') +
      '</div>';
    }
    html += '</div>';
    el.innerHTML = html;

    if(!result){
      var startBtn = document.getElementById('startTest');
      if(startBtn) startBtn.onclick = startTest;
    } else {
      var retake = document.getElementById('retakeTest');
      if(retake) retake.onclick = function(){
        var sp2 = getSpace();
        delete sp2.leadershipAssessment;
        if(window.saveSpace) window.saveSpace();
        renderLeadership();
      };
    }
  }

  function startTest(){
    var answers = [];
    var idx = 0;

    function renderQuestion(){
      document.querySelectorAll('.modal-backdrop').forEach(function(m){ m.remove(); });
      if(idx >= QUESTIONS.length){
        finishTest(answers);
        return;
      }
      var q = QUESTIONS[idx];
      var bd = document.createElement('div');
      bd.className = 'modal-backdrop show';
      var progress = Math.round(((idx) / QUESTIONS.length) * 100);
      var html = '<div class="modal" style="max-width:500px">' +
        '<div style="height:6px;background:var(--bg2);border-radius:6px;overflow:hidden;margin-bottom:16px">' +
          '<div style="height:100%;width:' + progress + '%;background:var(--grad);border-radius:6px"></div>' +
        '</div>' +
        '<div style="font-size:.75rem;color:var(--muted);margin-bottom:8px">السؤال ' + (idx + 1) + ' من ' + QUESTIONS.length + '</div>' +
        '<h3 style="margin-bottom:16px">' + esc(q.q) + '</h3>' +
        '<div style="display:flex;flex-direction:column;gap:8px">';
      q.opts.forEach(function(o, i){
        html += '<button data-answer="' + i + '" style="padding:14px;background:var(--bg2);border:1px solid var(--border);color:var(--text);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.85rem;text-align:right;transition:.2s">' + esc(o.t) + '</button>';
      });
      html += '</div></div>';
      bd.innerHTML = html;
      document.body.appendChild(bd);
      bd.querySelectorAll('[data-answer]').forEach(function(b){
        b.addEventListener('click', function(){
          var chosen = q.opts[parseInt(b.dataset.answer)];
          answers.push(chosen.s);
          idx++;
          renderQuestion();
        });
      });
    }

    renderQuestion();
  }

  function finishTest(answers){
    var scores = {telling:0, selling:0, participating:0, delegating:0};
    answers.forEach(function(a){ scores[a] = (scores[a] || 0) + 1; });
    var winner = Object.keys(scores).reduce(function(a, b){ return scores[a] > scores[b] ? a : b; });

    var sp = getSpace();
    sp.leadershipAssessment = {scores: scores, winner: winner, ts: Date.now()};
    if(window.saveSpace) window.saveSpace();
    renderLeadership();
    toast('✅ أكملت الاختبار!', 'success');
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._leadershipInstalled) return;
    window._leadershipInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'leadership') setTimeout(renderLeadership, 100);
      return r;
    };
  }

  window.renderLeadership = renderLeadership;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
  console.log('🎓 Leadership Coach loaded');
})();