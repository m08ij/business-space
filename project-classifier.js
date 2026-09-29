/* ============================================================
   🗂️ project-classifier.js v2 — فرز ذكي + حذف تعاقبي
   ✅ لا يستبدل renderIdeas — يعمل كـ hook بعد العرض
   ✅ حذف أصحاب المصلحة مرتبط
   ✅ Progress Popup أثناء الحذف
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m, t||'info', d||2200); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function getSpace(){ return window.space || {ideas:[], projects:[], tasks:[], budget:[], stakeholders:[]}; }
  function save(){ if(window.saveSpace) window.saveSpace(); }
  function getLang(){ return window.i18n ? window.i18n.getLang() : 'ar'; }
  function pick(obj, base){
    if(getLang() === 'en' && obj[base+'En']) return obj[base+'En'];
    return obj[base] || '';
  }

  /* ============ Progress Popup ============ */
  var _busyEl = null;
  function showBusy(text){
    hideBusy();
    _busyEl = document.createElement('div');
    _busyEl.id = 'clsBusyPopup';
    _busyEl.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:9999;' +
      'background:var(--card);border:1px solid var(--cyan);border-radius:14px;padding:14px 22px;' +
      'display:flex;align-items:center;gap:12px;box-shadow:0 20px 60px rgba(0,0,0,.5),0 0 30px var(--glow);' +
      'animation:clsBusyIn .25s ease';
    _busyEl.innerHTML =
      '<div style="width:22px;height:22px;border:3px solid var(--border2);border-top-color:var(--cyan);border-radius:50%;animation:clsSpin .8s linear infinite"></div>' +
      '<div style="font-weight:700;font-size:.85rem">' + esc(text) + '</div>';
    /* إضافة الأنيميشن إن لم يكن موجود */
    if(!document.getElementById('clsBusyStyle')){
      var st = document.createElement('style');
      st.id = 'clsBusyStyle';
      st.textContent = '@keyframes clsSpin{to{transform:rotate(360deg)}}' +
        '@keyframes clsBusyIn{from{opacity:0;transform:translateX(-50%) translateY(20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
      document.head.appendChild(st);
    }
    document.body.appendChild(_busyEl);
  }
  function hideBusy(){
    if(_busyEl){ _busyEl.remove(); _busyEl = null; }
  }

  /* ============ ربط شامل ============ */
  function findProject(idea){
    var sp = getSpace();
    return (sp.projects || []).find(function(p){ return p.ideaId === idea.id || p.name === idea.name; });
  }

  function findRelated(project, idea){
    var sp = getSpace();
    var names = [project && project.name, idea && idea.name].filter(Boolean);
    var ids = [project && project.id, idea && idea.id].filter(Boolean);
    return {
      tasks: (sp.tasks || []).filter(function(t){
        return ids.indexOf(t.projectId) > -1 || names.indexOf(t.project) > -1;
      }),
      budget: (sp.budget || []).filter(function(b){
        if(ids.indexOf(b.projectId) > -1) return true;
        if(b.note && names.some(function(n){ return b.note.indexOf(n) > -1; })) return true;
        return false;
      }),
      stakeholders: (sp.stakeholders || []).filter(function(s){
        if(ids.indexOf(s.projectId) > -1) return true;
        if(names.indexOf(s.project) > -1) return true;
        return false;
      }),
      milestones: project ? (project.milestones || []) : [],
      risks: project ? (project.risks || []) : []
    };
  }

  /* ============ الحذف التعاقبي ============ */
  function cascadeDelete(ideaId, projectId){
    var sp = getSpace();
    var idea = ideaId ? (sp.ideas || []).find(function(x){ return x.id === ideaId; }) : null;
    var project = projectId
      ? (sp.projects || []).find(function(x){ return x.id === projectId; })
      : (idea ? findProject(idea) : null);

    if(!idea && !project){
      toast(tr('cls_not_found'), 'warn');
      return;
    }

    var related = findRelated(project, idea);
    var title = idea ? idea.name : project.name;

    /* بناء قائمة ما سيُحذف */
    var lines = [];
    if(idea) lines.push('💡 ' + tr('cls_will_delete_idea'));
    if(project) lines.push('💼 ' + tr('cls_will_delete_project'));
    if(related.milestones.length) lines.push('🎯 ' + related.milestones.length + ' ' + tr('ms_title'));
    if(related.tasks.length) lines.push('📝 ' + related.tasks.length + ' ' + tr('nav_tasks'));
    if(related.budget.length) lines.push('💰 ' + related.budget.length + ' ' + tr('nav_budget'));
    if(related.stakeholders.length) lines.push('👥 ' + related.stakeholders.length + ' ' + tr('nav_stakeholders'));
    if(related.risks.length) lines.push('⚠️ ' + related.risks.length + ' ' + tr('nav_risks'));

    var msg = tr('cls_delete_confirm') + '\n\n📌 ' + title + '\n\n' + lines.join('\n') + '\n\n' + tr('cls_cannot_undo');

    window.customConfirm(msg, function(){
      /* إظهار progress */
      showBusy(tr('cls_deleting') + ' "' + title + '"...');

      /* تأخير بسيط لإظهار البوب أب */
      setTimeout(function(){
        try{
          /* 1) المهام */
          if(related.tasks.length){
            var taskIds = related.tasks.map(function(t){ return t.id; });
            sp.tasks = sp.tasks.filter(function(t){ return taskIds.indexOf(t.id) === -1; });
          }
          /* 2) الميزانية */
          if(related.budget.length){
            var bIds = related.budget.map(function(b){ return b.id; });
            sp.budget = sp.budget.filter(function(b){ return bIds.indexOf(b.id) === -1; });
          }
          /* 3) أصحاب المصلحة */
          if(related.stakeholders.length){
            var sIds = related.stakeholders.map(function(s){ return s.id; });
            sp.stakeholders = sp.stakeholders.filter(function(s){ return sIds.indexOf(s.id) === -1; });
          }
          /* 4) المشروع */
          if(project){
            sp.projects = sp.projects.filter(function(p){ return p.id !== project.id; });
          }
          /* 5) الفكرة */
          if(idea){
            sp.ideas = sp.ideas.filter(function(x){ return x.id !== idea.id; });
          }

          save();
        }catch(e){
          console.error('Cascade delete error:', e);
        }

        /* إخفاء البوب أب */
        setTimeout(function(){
          hideBusy();
          toast(tr('cls_deleted'), 'success', 2500);

          /* إعادة رسم الشاشة الحالية */
          redrawCurrent();
        }, 350);
      }, 250);
    });
  }

  /* ============ إعادة الرسم ============ */
  function redrawCurrent(){
    var active = document.querySelector('.section.active');
    if(!active) return;
    var id = active.id;
    var fn = {
      ideas: window.renderIdeas,
      dashboard: window.renderDashboard,
      roadmap: window.renderRoadmap,
      stakeholders: window.renderStakeholders,
      tasks: window.renderTasks,
      budget: window.renderBudget,
      reports: window.renderInsights,
      milestones: window.renderMilestones,
      risks: window.renderRisks
    }[id];
    if(typeof fn === 'function'){
      try{ fn(); }catch(e){ console.error('redraw', id, e); }
    }
  }

  /* ============ شريط الفلاتر ============ */
  var view = {
    filterType: 'all',
    filterSector: 'all',
    search: '',
    sortBy: 'recent'
  };

  function loadView(){
    try{
      var v = JSON.parse(localStorage.getItem('bd_classifier_view') || 'null');
      if(v) view = Object.assign(view, v);
    }catch(e){}
  }
  function saveView(){
    try{ localStorage.setItem('bd_classifier_view', JSON.stringify(view)); }catch(e){}
  }

  /* ============ injectToolbar (تعمل مرة واحدة) ============ */
  function injectToolbar(){
    var ideasSection = document.getElementById('ideas');
    if(!ideasSection) return;
    if(ideasSection.querySelector('#clsToolbar')) {
      updateToolbarStats();
      return;
    }

    var controls = ideasSection.querySelector('.controls');
    if(!controls) return;

    var bar = document.createElement('div');
    bar.id = 'clsToolbar';
    bar.style.cssText = 'background:var(--card);border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:14px;display:flex;flex-direction:column;gap:10px';
    bar.innerHTML = '' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">' +
        '<input id="clsSearch" type="text" placeholder="' + tr('cls_search_ph') + '" ' +
          'style="flex:1;min-width:180px;background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:8px 12px;border-radius:9px;font-family:inherit;font-size:.82rem;outline:none">' +
        '<select id="clsFilterType" style="background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:8px 10px;border-radius:9px;font-family:inherit;font-size:.8rem;outline:none"></select>' +
        '<select id="clsFilterSector" style="background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:8px 10px;border-radius:9px;font-family:inherit;font-size:.8rem;outline:none"></select>' +
        '<select id="clsSortBy" style="background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:8px 10px;border-radius:9px;font-family:inherit;font-size:.8rem;outline:none"></select>' +
        '<button class="btn btn-sm btn-ghost" id="clsClear" title="' + tr('cls_clear') + '">✖️</button>' +
      '</div>' +
      '<div id="clsStats" style="font-size:.74rem;color:var(--muted);text-align:center"></div>';

    /* إدراج قبل الفلاتر الحالية */
    controls.parentNode.insertBefore(bar, controls.nextSibling);

    /* تعبئة selectors */
    fillSelectors();
    bindToolbarEvents();
    applyFiltersToCards();
  }

  function fillSelectors(){
    var types = window.IDEA_TYPES || {};
    var sectors = window.SECTORS_DB || {};

    var tSel = document.getElementById('clsFilterType');
    if(tSel){
      tSel.innerHTML = '<option value="all">' + tr('cls_all_types') + '</option>' +
        Object.keys(types).map(function(k){
          return '<option value="' + k + '"' + (view.filterType === k ? ' selected' : '') + '>' + types[k].icon + ' ' + pick(types[k], 'name') + '</option>';
        }).join('');
    }
    var sSel = document.getElementById('clsFilterSector');
    if(sSel){
      sSel.innerHTML = '<option value="all">' + tr('cls_all_sectors') + '</option>' +
        Object.keys(sectors).map(function(k){
          return '<option value="' + k + '"' + (view.filterSector === k ? ' selected' : '') + '>' + sectors[k].icon + ' ' + pick(sectors[k], 'name') + '</option>';
        }).join('');
    }
    var sortSel = document.getElementById('clsSortBy');
    if(sortSel){
      sortSel.innerHTML =
        '<option value="recent"' + (view.sortBy === 'recent' ? ' selected' : '') + '>' + tr('cls_sort_recent') + '</option>' +
        '<option value="name"' + (view.sortBy === 'name' ? ' selected' : '') + '>' + tr('cls_sort_name') + '</option>';
    }

    var search = document.getElementById('clsSearch');
    if(search && !search._bound) search.value = view.search || '';
  }

  function bindToolbarEvents(){
    var search = document.getElementById('clsSearch');
    if(search && !search._bound){
      search._bound = true;
      search.oninput = function(){
        view.search = search.value;
        saveView();
        applyFiltersToCards();
      };
    }
    var tSel = document.getElementById('clsFilterType');
    if(tSel && !tSel._bound){
      tSel._bound = true;
      tSel.onchange = function(){ view.filterType = tSel.value; saveView(); applyFiltersToCards(); };
    }
    var sSel = document.getElementById('clsFilterSector');
    if(sSel && !sSel._bound){
      sSel._bound = true;
      sSel.onchange = function(){ view.filterSector = sSel.value; saveView(); applyFiltersToCards(); };
    }
    var sortSel = document.getElementById('clsSortBy');
    if(sortSel && !sortSel._bound){
      sortSel._bound = true;
      sortSel.onchange = function(){ view.sortBy = sortSel.value; saveView(); applyFiltersToCards(); };
    }
    var clr = document.getElementById('clsClear');
    if(clr && !clr._bound){
      clr._bound = true;
      clr.onclick = function(){
        view = { filterType: 'all', filterSector: 'all', search: '', sortBy: 'recent' };
        saveView();
        fillSelectors();
        applyFiltersToCards();
      };
    }
  }

  /* ============ تطبيق الفلاتر على الكروت الموجودة ============ */
  function applyFiltersToCards(){
    var grid = document.getElementById('ideasGrid');
    if(!grid) return;

    var cards = grid.querySelectorAll('[data-idea-card]');
    var visible = 0;
    var total = cards.length;

    cards.forEach(function(card){
      var id = card.dataset.ideaCard;
      var sp = getSpace();
      var idea = (sp.ideas || []).find(function(x){ return x.id === id; });
      if(!idea){ card.style.display = 'none'; return; }

      var match = true;
      if(view.filterType !== 'all' && idea.type !== view.filterType) match = false;
      if(view.filterSector !== 'all' && idea.sector !== view.filterSector) match = false;
      if(view.search){
        var q = view.search.toLowerCase();
        var text = ((idea.name||'') + ' ' + (idea.description||'') + ' ' + (idea.problem||'')).toLowerCase();
        if(text.indexOf(q) === -1) match = false;
      }

      card.style.display = match ? '' : 'none';
      if(match) visible++;
    });

    /* إضافة زر الحذف التعاقبي لكل كارت ظاهر */
    cards.forEach(function(card){
      if(card.querySelector('[data-cls-cascade]')) return;
      var id = card.dataset.ideaCard;
      var actions = card.querySelector('div[style*="display:flex"][style*="gap"]');
      if(!actions) return;
      var btn = document.createElement('button');
      btn.className = 'btn btn-sm btn-danger';
      btn.dataset.clsCascade = id;
      btn.title = tr('cls_delete_all');
      btn.style.marginInlineStart = 'auto';
      btn.textContent = '🗑';
      btn.onclick = function(e){
        e.stopPropagation();
        cascadeDelete(id, null);
      };
      actions.appendChild(btn);
    });

    /* تحديث الإحصاء */
    var stats = document.getElementById('clsStats');
    if(stats){
      stats.innerHTML = '📊 ' + tr('cls_showing') + ' <b style="color:var(--cyan)">' + visible + '</b> ' + tr('cls_of') + ' ' + total;
    }
  }

  /* ============ Hook على switchTab ============ */
  function install(){
    if(typeof window.switchTab !== 'function'){ setTimeout(install, 500); return; }
    if(window._classifierInstalled) return;
    window._classifierInstalled = true;
    loadView();

    var orig = window.switchTab;
    window.switchTab = function(tab){
      var r = orig.apply(this, arguments);
      if(tab === 'ideas'){
        setTimeout(function(){
          injectToolbar();
          applyFiltersToCards();
        }, 180);
      }
      return r;
    };

    /* hook على renderIdeas الأصلي */
    if(typeof window.renderIdeas === 'function' && !window._clsRenderHook){
      window._clsRenderHook = true;
      var origRender = window.renderIdeas;
      window.renderIdeas = function(){
        var r = origRender.apply(this, arguments);
        setTimeout(function(){
          injectToolbar();
          applyFiltersToCards();
        }, 60);
        return r;
      };
    }
  }

  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'ideas'){
      setTimeout(function(){
        /* إعادة بناء الـ toolbar باللغة الجديدة */
        var bar = document.getElementById('clsToolbar');
        if(bar) bar.remove();
        injectToolbar();
        applyFiltersToCards();
      }, 150);
    }
  });

  window.renderClassifier = function(){ injectToolbar(); applyFiltersToCards(); };
  window.cascadeDeleteIdea = function(id){ cascadeDelete(id, null); };
  window.cascadeDeleteProject = function(id){ cascadeDelete(null, id); };
  window.clsShowBusy = showBusy;
  window.clsHideBusy = hideBusy;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();

  console.log('🗂️ Classifier v2 loaded (light)');
})();