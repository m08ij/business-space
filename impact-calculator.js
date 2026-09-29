/* ============================================================
   📈 impact-calculator.js — قياس الأثر (SDG, ESG, P5)
   ============================================================ */
(function(){
  'use strict';

  function getSpace(){ return window.space || {projects:[]}; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m,t||'info',d||2500); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  var currentProject = null;

  function renderImpact(){
    var el = document.getElementById('impactBody');
    if(!el) return;
    var sp = getSpace();
    var projects = sp.projects || [];

    if(!projects.length){
      el.innerHTML = '<div class="empty"><div class="ic">📈</div><p>' + tr('impact_no_projects') + '</p><p class="sub">' + tr('impact_no_projects_sub') + '</p></div>';
      return;
    }
    if(window.ProjectContext){ window.ProjectContext.ensureValid(); currentProject = window.ProjectContext.getCurrent(); }
    if(!currentProject) currentProject = projects[0].id;

    // اختيار المشروع
    var html = '<div class="controls">';
    projects.forEach(function(p){
      var active = currentProject === p.id;
      html += '<button class="chip' + (active ? ' active' : '') + '" data-imp-select="' + p.id + '">' + (active ? '✓ ' : '') + esc(p.name) + '</button>';
    });
    html += '</div>';

    var project = projects.find(function(p){ return p.id === currentProject; });
    if(!project){ el.innerHTML = html; return; }

    if(!project.impact) project.impact = {sdg: [], p5: {}, esg: {}};
    var imp = project.impact;

    // بطاقة SDG
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>🎯 أهداف التنمية المستدامة (SDG)</h3>' +
      '<span class="badge">' + (imp.sdg || []).length + ' / 17</span></div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px">';
    Object.keys(window.SDG_DB || {}).forEach(function(num){
      var sdg = window.SDG_DB[num];
      var selected = (imp.sdg || []).indexOf(parseInt(num)) > -1;
      html += '<button data-sdg-toggle="' + num + '" style="padding:10px;border-radius:10px;border:2px solid ' + (selected ? sdg.color : 'var(--border)') + ';background:' + (selected ? sdg.color + '20' : 'var(--bg2)') + ';color:' + (selected ? sdg.color : 'var(--muted)') + ';cursor:pointer;font-family:inherit;font-weight:700;font-size:.72rem;text-align:center;transition:.2s">' +
        '<div style="font-size:1.3rem">' + sdg.icon + '</div>' +
        '<div>' + num + '. ' + sdg.name.split(' ').slice(0,2).join(' ') + '</div>' +
      '</button>';
    });
    html += '</div></div>';

    // P5 Impact
    html += '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-head"><h3>♻️ تحليل P5 (GPM)</h3>' +
      '<span class="badge" id="p5Score">—</span></div>' +
      '<div style="display:flex;flex-direction:column;gap:12px">';
    Object.keys(window.P5_DB || {}).forEach(function(key){
      var p5 = window.P5_DB[key];
      var score = (imp.p5 && imp.p5[key]) || 0;
      html += '<div>' +
        '<div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:6px">' +
          '<span>' + p5.icon + ' <b>' + p5.name + '</b> — ' + esc(p5.desc) + '</span>' +
          '<span style="color:' + p5.color + ';font-weight:700">' + score + '%</span>' +
        '</div>' +
        '<input type="range" min="0" max="100" value="' + score + '" data-p5-slider="' + key + '" style="width:100%">' +
      '</div>';
    });
    html += '</div></div>';

    // ESG
    html += '<div class="card">' +
      '<div class="card-head"><h3>🏢 مؤشر ESG</h3>' +
      '<span class="badge" id="esgScore">—</span></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">' +
        '<div style="text-align:center;padding:14px;background:var(--bg2);border-radius:10px">' +
          '<div style="font-size:1.5rem">🌱</div>' +
          '<div style="font-size:.7rem;color:var(--muted);margin:4px 0">Environmental</div>' +
          '<input type="number" min="0" max="100" value="' + ((imp.esg && imp.esg.e) || 50) + '" data-esg="e" style="width:100%;background:var(--card);border:1px solid var(--border);color:var(--text);padding:6px;border-radius:8px;font-family:inherit;text-align:center;font-weight:800;font-size:1rem;outline:none">' +
        '</div>' +
        '<div style="text-align:center;padding:14px;background:var(--bg2);border-radius:10px">' +
          '<div style="font-size:1.5rem">👥</div>' +
          '<div style="font-size:.7rem;color:var(--muted);margin:4px 0">Social</div>' +
          '<input type="number" min="0" max="100" value="' + ((imp.esg && imp.esg.s) || 50) + '" data-esg="s" style="width:100%;background:var(--card);border:1px solid var(--border);color:var(--text);padding:6px;border-radius:8px;font-family:inherit;text-align:center;font-weight:800;font-size:1rem;outline:none">' +
        '</div>' +
        '<div style="text-align:center;padding:14px;background:var(--bg2);border-radius:10px">' +
          '<div style="font-size:1.5rem">⚖️</div>' +
          '<div style="font-size:.7rem;color:var(--muted);margin:4px 0">Governance</div>' +
          '<input type="number" min="0" max="100" value="' + ((imp.esg && imp.esg.g) || 50) + '" data-esg="g" style="width:100%;background:var(--card);border:1px solid var(--border);color:var(--text);padding:6px;border-radius:8px;font-family:inherit;text-align:center;font-weight:800;font-size:1rem;outline:none">' +
        '</div>' +
      '</div>' +
    '</div>';

    el.innerHTML = html;

    // Bind
    el.querySelectorAll('[data-imp-select]').forEach(function(b){
      b.addEventListener('click', function(){
        if(window.ProjectContext) window.ProjectContext.setCurrent(b.dataset.impSelect);
        else { currentProject = b.dataset.impSelect; renderImpact(); }
      });
    });
    el.querySelectorAll('[data-sdg-toggle]').forEach(function(b){
      b.addEventListener('click', function(){
        var num = parseInt(b.dataset.sdgToggle);
        if(!imp.sdg) imp.sdg = [];
        var i = imp.sdg.indexOf(num);
        if(i > -1) imp.sdg.splice(i, 1); else imp.sdg.push(num);
        if(window.saveSpace) window.saveSpace();
        renderImpact();
      });
    });
    el.querySelectorAll('[data-p5-slider]').forEach(function(sl){
      sl.addEventListener('input', function(){
        if(!imp.p5) imp.p5 = {};
        imp.p5[sl.dataset.p5Slider] = parseInt(sl.value);
        if(window.saveSpace) window.saveSpace();
        updateScores(project);
      });
    });
    el.querySelectorAll('[data-esg]').forEach(function(inp){
      inp.addEventListener('input', function(){
        if(!imp.esg) imp.esg = {};
        imp.esg[inp.dataset.esg] = Math.max(0, Math.min(100, parseInt(inp.value) || 0));
        if(window.saveSpace) window.saveSpace();
        updateScores(project);
      });
    });

    updateScores(project);
  }

  function updateScores(project){
    var p5 = (project.impact && project.impact.p5) || {};
    var p5Avg = 0, cnt = 0;
    Object.keys(window.P5_DB || {}).forEach(function(k){
      p5Avg += (p5[k] || 0); cnt++;
    });
    p5Avg = cnt ? Math.round(p5Avg / cnt) : 0;
    var p5El = document.getElementById('p5Score');
    if(p5El) p5El.textContent = 'P5: ' + p5Avg + '%';

    var esg = (project.impact && project.impact.esg) || {};
    var esgAvg = Math.round(((esg.e || 0) + (esg.s || 0) + (esg.g || 0)) / 3);
    var esgEl = document.getElementById('esgScore');
    if(esgEl) esgEl.textContent = 'ESG: ' + esgAvg;
  }

  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._impactInstalled) return;
    window._impactInstalled = true;
    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'impact') setTimeout(renderImpact, 100);
	  if(window.ProjectContext){
		window.ProjectContext.subscribe(function(){
		  var active = document.querySelector('.section.active');
		  if(active && active.id === 'impact') renderImpact();
		});
	  }
      return r;
    };
  }

  window.renderImpact = renderImpact;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
document.addEventListener('languagechange', function(){ renderImpact(); });
  console.log('📈 Impact Calculator loaded');
})();