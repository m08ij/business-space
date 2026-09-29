/* ============================================================
   🗂️ project-classifier.js — فرز المشاريع + حذف تعاقبي
   يستبدل عرض الأفكار في idea-incubator بعرض ذكي
   ============================================================ */
(function(){
  'use strict';

  function tr(k, p){ return window.t ? window.t(k, p) : k; }
  function toast(m,t,d){ if(typeof window.toast === 'function') window.toast(m, t||'info', d||2200); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function getSpace(){ return window.space || {ideas:[], projects:[]}; }
  function save(){ if(window.saveSpace) window.saveSpace(); }
  function getLang(){ return window.i18n ? window.i18n.getLang() : 'ar'; }
  function pick(obj, base){
    if(getLang() === 'en' && obj[base+'En']) return obj[base+'En'];
    return obj[base] || '';
  }

  /* ============ حالة العرض ============ */
  var view = {
    mode: 'grid',           // grid | list
    filterType: 'all',      // all | startup | sme | social | ngo | corporate
    filterSector: 'all',
    filterCountry: 'all',
    filterStage: 'all',     // للأفكار: all | idea | project
    sortBy: 'recent',       // recent | name | progress | sdg
    search: ''
  };

  /* ============ قراءة إعدادات محفوظة ============ */
  function loadView(){
    try{
      var v = JSON.parse(localStorage.getItem('bd_classifier_view') || 'null');
      if(v) view = Object.assign(view, v);
    }catch(e){}
  }
  function saveView(){
    try{ localStorage.setItem('bd_classifier_view', JSON.stringify(view)); }catch(e){}
  }

  /* ============ إحصائيات تعاقبية ============ */
  function countRelated(idea){
    var sp = getSpace();
    var project = (sp.projects || []).find(function(p){ return p.ideaId === idea.id; });
    if(!project) return {tasks:0, budget:0, milestones:0, risks:0};
    return {
      tasks: (sp.tasks || []).filter(function(t){ return t.project === project.name || t.projectId === project.id; }).length,
      budget: (sp.budget || []).filter(function(b){ return b.projectId === project.id || b.note && b.note.indexOf(project.name) > -1; }).length,
      milestones: (project.milestones || []).length,
      risks: (project.risks || []).length
    };
  }

  /* ============ حذف تعاقبي ============ */
  function cascadeDeleteIdea(ideaId){
    var sp = getSpace();
    var idea = (sp.ideas || []).find(function(x){ return x.id === ideaId; });
    if(!idea) return;
    var project = (sp.projects || []).find(function(p){ return p.ideaId === ideaId; });

    var related = countRelated(idea);
    var projectName = project ? project.name : '';
    var projectId = project ? project.id : '';

    var msg = tr('cls_delete_confirm') + '\n\n' +
      '📌 ' + idea.name + '\n' +
      (project ? '💼 ' + tr('cls_will_delete_project') + '\n' : '') +
      (related.tasks ? '📝 ' + related.tasks + ' ' + tr('archive_tasks') + '\n' : '') +
      (related.budget ? '💰 ' + related.budget + ' ' + tr('budget_title') + '\n' : '') +
      (related.milestones ? '🎯 ' + related.milestones + ' ' + tr('archive_stages') + '\n' : '') +
      (related.risks ? '⚠️ ' + related.risks + ' ' + tr('archive_risks') + '\n' : '') +
      '\n' + tr('cls_cannot_undo');

    window.customConfirm(msg, function(){
      /* 1) حذف المهام */
      if(projectName || projectId){
        sp.tasks = (sp.tasks || []).filter(function(t){
          return !(t.project === projectName || t.projectId === projectId);
        });
        /* 2) حذف بنود الميزانية */
        sp.budget = (sp.budget || []).filter(function(b){
          if(b.projectId === projectId) return false;
          if(projectName && b.note && b.note.indexOf(projectName) > -1) return false;
          return true;
        });
        /* 3) حذف أصحاب المصلحة المرتبطين */
        sp.stakeholders = (sp.stakeholders || []).filter(function(s){
          return !(s.projectId === projectId || s.project === projectName);
        });
      }
      /* 4) حذف المشروع */
      if(projectId){
        sp.projects = (sp.projects || []).filter(function(p){ return p.id !== projectId; });
      }
      /* 5) حذف الفكرة */
      sp.ideas = (sp.ideas || []).filter(function(x){ return x.id !== ideaId; });

      save();
      renderClassifier();
      toast(tr('cls_deleted'), 'success');
    });
  }

  /* ============ حذف مشروع مباشرة ============ */
  function cascadeDeleteProject(projectId){
    var sp = getSpace();
    var project = (sp.projects || []).find(function(p){ return p.id === projectId; });
    if(!project) return;
    var related = {
      tasks: (sp.tasks || []).filter(function(t){ return t.project === project.name || t.projectId === project.id; }).length,
      budget: (sp.budget || []).filter(function(b){ return b.projectId === project.id; }).length,
      milestones: (project.milestones || []).length,
      risks: (project.risks || []).length
    };
    var msg = tr('cls_delete_project_confirm') + '\n\n' +
      '💼 ' + project.name + '\n' +
      (related.tasks ? '📝 ' + related.tasks + ' ' + tr('archive_tasks') + '\n' : '') +
      (related.budget ? '💰 ' + related.budget + ' ' + tr('budget_title') + '\n' : '') +
      (related.milestones ? '🎯 ' + related.milestones + ' ' + tr('archive_stages') + '\n' : '') +
      (related.risks ? '⚠️ ' + related.risks + ' ' + tr('archive_risks') + '\n' : '') +
      '\n' + tr('cls_cannot_undo');

    window.customConfirm(msg, function(){
      sp.tasks = (sp.tasks || []).filter(function(t){
        return !(t.project === project.name || t.projectId === project.id);
      });
      sp.budget = (sp.budget || []).filter(function(b){ return b.projectId !== project.id; });
      sp.stakeholders = (sp.stakeholders || []).filter(function(s){
        return !(s.projectId === project.id || s.project === project.name);
      });
      sp.projects = (sp.projects || []).filter(function(p){ return p.id !== projectId; });
      save();
      renderClassifier();
      toast(tr('cls_deleted'), 'success');
    });
  }

  /* ============ الفلترة ============ */
  function applyFilters(items){
    return items.filter(function(item){
      if(view.filterType !== 'all' && item.type !== view.filterType) return false;
      if(view.filterSector !== 'all' && item.sector !== view.filterSector) return false;
      if(view.filterCountry !== 'all' && item.country !== view.filterCountry) return false;
      if(view.search){
        var q = view.search.toLowerCase();
        var text = (item.name || '') + ' ' + (item.description || '') + ' ' + (item.problem || '');
        if(text.toLowerCase().indexOf(q) === -1) return false;
      }
      return true;
    });
  }

  function sortItems(items){
    var arr = items.slice();
    if(view.sortBy === 'name'){
      arr.sort(function(a,b){ return (a.name||'').localeCompare(b.name||'', getLang()); });
    } else if(view.sortBy === 'progress'){
      arr.sort(function(a,b){
        var pa = a.impact ? (a.impact.sdg || []).length : 0;
        var pb = b.impact ? (b.impact.sdg || []).length : 0;
        return pb - pa;
      });
    } else if(view.sortBy === 'sdg'){
      arr.sort(function(a,b){
        var sa = (a.sdgTargets || []).length;
        var sb = (b.sdgTargets || []).length;
        return sb - sa;
      });
    } else {
      arr.sort(function(a,b){
        return (b.createdAt || '').localeCompare(a.createdAt || '');
      });
    }
    return arr;
  }

  /* ============ شريط الأدوات ============ */
  function renderToolbar(filteredCount, totalCount){
    var types = window.IDEA_TYPES || {};
    var sectors = window.SECTORS_DB || {};
    var countries = window.getAllCountries ? window.getAllCountries() : (window.COUNTRIES_DB || {});

    var typeOpts = '<option value="all">' + tr('cls_all_types') + '</option>';
    Object.keys(types).forEach(function(k){
      var t = types[k];
      typeOpts += '<option value="' + k + '"' + (view.filterType === k ? ' selected' : '') + '>' + t.icon + ' ' + pick(t, 'name') + '</option>';
    });

    var sectorOpts = '<option value="all">' + tr('cls_all_sectors') + '</option>';
    Object.keys(sectors).forEach(function(k){
      var s = sectors[k];
      sectorOpts += '<option value="' + k + '"' + (view.filterSector === k ? ' selected' : '') + '>' + s.icon + ' ' + pick(s, 'name') + '</option>';
    });

    var countryOpts = '<option value="all">' + tr('cls_all_countries') + '</option>';
    Object.keys(countries).slice(0, 30).forEach(function(k){
      var c = countries[k];
      countryOpts += '<option value="' + k + '"' + (view.filterCountry === k ? ' selected' : '') + '>' + (c.flag||'') + ' ' + pick(c, 'name') + '</option>';
    });

    var sortOpts =
      '<option value="recent"' + (view.sortBy === 'recent' ? ' selected' : '') + '>' + tr('cls_sort_recent') + '</option>' +
      '<option value="name"' + (view.sortBy === 'name' ? ' selected' : '') + '>' + tr('cls_sort_name') + '</option>' +
      '<option value="progress"' + (view.sortBy === 'progress' ? ' selected' : '') + '>' + tr('cls_sort_progress') + '</option>' +
      '<option value="sdg"' + (view.sortBy === 'sdg' ? ' selected' : '') + '>' + tr('cls_sort_sdg') + '</option>';

    return '' +
    '<div class="card" style="margin-bottom:16px;padding:14px">' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:10px">' +
        '<div style="flex:1;min-width:200px;position:relative">' +
          '<input id="clsSearch" type="text" value="' + esc(view.search) + '" placeholder="' + tr('cls_search_ph') + '" ' +
            'style="width:100%;background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:9px 14px;border-radius:10px;font-family:inherit;font-size:.85rem;outline:none">' +
        '</div>' +
        '<button class="btn btn-sm" id="clsToggleView" title="' + tr('cls_toggle_view') + '">' + (view.mode === 'grid' ? '📋' : '▦') + '</button>' +
        '<button class="btn btn-sm btn-ghost" id="clsClearFilters" title="' + tr('cls_clear') + '">✖️</button>' +
      '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px">' +
        '<select id="clsFilterType" style="background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:8px 10px;border-radius:9px;font-family:inherit;font-size:.82rem;outline:none">' + typeOpts + '</select>' +
        '<select id="clsFilterSector" style="background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:8px 10px;border-radius:9px;font-family:inherit;font-size:.82rem;outline:none">' + sectorOpts + '</select>' +
        '<select id="clsFilterCountry" style="background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:8px 10px;border-radius:9px;font-family:inherit;font-size:.82rem;outline:none">' + countryOpts + '</select>' +
        '<select id="clsSortBy" style="background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:8px 10px;border-radius:9px;font-family:inherit;font-size:.82rem;outline:none">' + sortOpts + '</select>' +
      '</div>' +
      '<div style="text-align:center;font-size:.76rem;color:var(--muted);margin-top:10px">' +
        '📊 ' + tr('cls_showing') + ' <b style="color:var(--cyan)">' + filteredCount + '</b> ' + tr('cls_of') + ' ' + totalCount +
      '</div>' +
    '</div>';
  }

  /* ============ كارت فكرة ============ */
  function renderIdeaCard(idea){
    var type = (window.IDEA_TYPES || {})[idea.type] || {icon:'💡', name:'—'};
    var sector = (window.SECTORS_DB || {})[idea.sector] || {icon:'📦', name:'—'};
    var country = window.getCountryDisplay ? window.getCountryDisplay(idea.country) : {flag:'🌍', name:idea.country};
    var related = countRelated(idea);
    var hasProject = (getSpace().projects || []).some(function(p){ return p.ideaId === idea.id; });

    var sdgTags = (idea.sdgTargets || []).slice(0, 4).map(function(n){
      var s = window.SDG_DB[n]; if(!s) return '';
      return '<span style="font-size:.62rem;padding:2px 6px;border-radius:5px;background:' + s.color + '20;color:' + s.color + ';font-weight:700">' + s.icon + ' ' + n + '</span>';
    }).join('');

    var relatedSummary = '';
    if(hasProject){
      relatedSummary = '<div style="display:flex;gap:10px;font-size:.7rem;color:var(--muted);padding-top:8px;border-top:1px solid var(--border);margin-top:8px">' +
        (related.milestones ? '<span>🎯 ' + related.milestones + '</span>' : '') +
        (related.tasks ? '<span>📝 ' + related.tasks + '</span>' : '') +
        (related.risks ? '<span>⚠️ ' + related.risks + '</span>' : '') +
        (related.budget ? '<span>💰 ' + related.budget + '</span>' : '') +
        '<span style="color:var(--green);font-weight:700;margin-inline-start:auto">✓ ' + tr('cls_has_project') + '</span>' +
      '</div>';
    }

    return '<div class="card" data-idea-card="' + idea.id + '" style="position:relative">' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">' +
        '<div style="flex:1;min-width:0">' +
          '<div style="font-weight:800;font-size:.95rem">' + type.icon + ' ' + esc(idea.name) + '</div>' +
          '<div style="font-size:.7rem;color:var(--muted2);margin-top:2px">' + (country.flag||'🌍') + ' ' + esc(country.name) + ' · ' + sector.icon + ' ' + esc(pick(sector,'name')) + '</div>' +
        '</div>' +
        '<span class="badge" style="background:var(--grad-soft);color:var(--cyan);font-size:.62rem">' + pick(type,'name') + '</span>' +
      '</div>' +
      '<div style="font-size:.8rem;color:var(--muted);line-height:1.6;margin-bottom:8px">' + esc((idea.description||'').slice(0,120)) + ((idea.description||'').length > 120 ? '...' : '') + '</div>' +
      (sdgTags ? '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px">' + sdgTags + '</div>' : '') +
      '<div style="display:flex;gap:5px;flex-wrap:wrap">' +
        '<button class="btn btn-sm" data-cls-view="' + idea.id + '">👁️</button>' +
        '<button class="btn btn-sm btn-ghost" data-cls-edit="' + idea.id + '">✏️</button>' +
        (hasProject
          ? '<button class="btn btn-sm btn-ghost" data-cls-goto="' + idea.id + '" style="color:var(--green)">🗺️</button>'
          : '<button class="btn btn-sm btn-ghost" data-cls-toproject="' + idea.id + '">🚀</button>') +
        '<button class="btn btn-sm btn-danger" data-cls-delete="' + idea.id + '" style="margin-inline-start:auto" title="' + tr('cls_delete_all') + '">🗑</button>' +
      '</div>' +
      relatedSummary +
    '</div>';
  }

  /* ============ كارت مشروع ============ */
  function renderProjectCard(project){
    var sector = (window.SECTORS_DB || {})[project.sector] || {icon:'📦', name:'—'};
    var country = window.getCountryDisplay ? window.getCountryDisplay(project.country) : {flag:'🌍', name:project.country};
    var stage = (window.PRISM_STAGES || {})[project.stage] || {icon:'❓', name:'—'};
    var sp = getSpace();
    var taskCount = (sp.tasks || []).filter(function(t){ return t.project === project.name || t.projectId === project.id; }).length;
    var budgetCount = (sp.budget || []).filter(function(b){ return b.projectId === project.id; }).length;
    var sdgTags = (project.impact && project.impact.sdg || []).slice(0, 4).map(function(n){
      var s = window.SDG_DB[n]; if(!s) return '';
      return '<span style="font-size:.62rem;padding:2px 6px;border-radius:5px;background:' + s.color + '20;color:' + s.color + ';font-weight:700">' + s.icon + ' ' + n + '</span>';
    }).join('');

    return '<div class="card" data-project-card="' + project.id + '">' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">' +
        '<div style="flex:1;min-width:0">' +
          '<div style="font-weight:800;font-size:.95rem">💼 ' + esc(project.name) + '</div>' +
          '<div style="font-size:.7rem;color:var(--muted2);margin-top:2px">' + (country.flag||'🌍') + ' ' + esc(country.name) + ' · ' + sector.icon + ' ' + esc(pick(sector,'name')) + '</div>' +
        '</div>' +
        '<span class="badge" style="font-size:.62rem">' + stage.icon + ' ' + pick(stage,'name') + '</span>' +
      '</div>' +
      (sdgTags ? '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px">' + sdgTags + '</div>' : '') +
      '<div style="display:flex;gap:10px;font-size:.7rem;color:var(--muted);padding-top:8px;border-top:1px solid var(--border)">' +
        '<span>🎯 ' + (project.milestones||[]).length + '</span>' +
        '<span>📝 ' + taskCount + '</span>' +
        '<span>⚠️ ' + (project.risks||[]).length + '</span>' +
        '<span>💰 ' + budgetCount + '</span>' +
      '</div>' +
      '<div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:10px">' +
        '<button class="btn btn-sm btn-ghost" data-cls-goto-project="' + project.id + '">🗺️ ' + tr('view') + '</button>' +
        '<button class="btn btn-sm btn-danger" data-cls-delete-project="' + project.id + '" style="margin-inline-start:auto">🗑</button>' +
      '</div>' +
    '</div>';
  }

  /* ============ الرسم الرئيسي ============ */
  function renderClassifier(){
    var grid = document.getElementById('ideasGrid');
    if(!grid) return;
    var sp = getSpace();
    var allIdeas = sp.ideas || [];
    var allProjects = sp.projects || [];

    /* اختيار العناصر حسب الفلتر */
    var showIdeas = allIdeas;
    var showProjects = view.filterStage === 'all' || view.filterStage === 'project' ? allProjects : [];

    var filteredIdeas = applyFilters(showIdeas);
    var filteredProjects = applyFilters(showProjects);
    var allFiltered = sortItems(filteredIdeas.concat(filteredProjects.map(function(p){ 
      return Object.assign({}, p, { _isProject: true }); 
    })));

    /* Toolbar */
    var toolbar = renderToolbar(allFiltered.length, allIdeas.length + allProjects.length);

    /* Grid */
    var gridClass = view.mode === 'grid' ? 'grid grid-2' : '';
    var gridStyle = view.mode === 'grid' ? '' : 'display:flex;flex-direction:column;gap:10px';

    var bodyHtml = '<div class="' + gridClass + '" style="' + gridStyle + '">';
    if(!allFiltered.length){
      bodyHtml += '<div class="empty" style="grid-column:1/-1"><div class="ic">💡</div><p>' + tr('cls_no_results') + '</p><p class="sub">' + tr('cls_no_results_hint') + '</p></div>';
    } else {
      allFiltered.forEach(function(item){
        if(item._isProject){
          bodyHtml += renderProjectCard(item);
        } else {
          bodyHtml += renderIdeaCard(item);
        }
      });
    }
    bodyHtml += '</div>';

    grid.parentNode.innerHTML = toolbar + bodyHtml;

    bindClassifierEvents();
  }

  /* ============ الأحداث ============ */
  function bindClassifierEvents(){
    /* Search */
    var search = document.getElementById('clsSearch');
    if(search){
      search.oninput = function(){
        view.search = search.value;
        saveView();
        renderClassifier();
        var s = document.getElementById('clsSearch');
        if(s){ s.focus(); s.setSelectionRange(s.value.length, s.value.length); }
      };
    }
    /* Filters */
    ['clsFilterType:filterType','clsFilterSector:filterSector','clsFilterCountry:filterCountry','clsSortBy:sortBy'].forEach(function(pair){
      var parts = pair.split(':');
      var el = document.getElementById(parts[0]);
      if(el){
        el.onchange = function(){
          view[parts[1]] = el.value;
          saveView();
          renderClassifier();
        };
      }
    });
    /* Toggle view */
    var tv = document.getElementById('clsToggleView');
    if(tv) tv.onclick = function(){
      view.mode = view.mode === 'grid' ? 'list' : 'grid';
      saveView();
      renderClassifier();
    };
    /* Clear */
    var clr = document.getElementById('clsClearFilters');
    if(clr) clr.onclick = function(){
      view.filterType = 'all';
      view.filterSector = 'all';
      view.filterCountry = 'all';
      view.sortBy = 'recent';
      view.search = '';
      saveView();
      renderClassifier();
    };

    /* Idea actions */
    document.querySelectorAll('[data-cls-view]').forEach(function(b){
      b.onclick = function(){ if(window.viewIdea) window.viewIdea(b.dataset.clsView); };
    });
    document.querySelectorAll('[data-cls-edit]').forEach(function(b){
      b.onclick = function(){ if(window.editIdea) window.editIdea(b.dataset.clsEdit); };
    });
    document.querySelectorAll('[data-cls-toproject]').forEach(function(b){
      b.onclick = function(){ if(window.convertToProject) window.convertToProject(b.dataset.clsToproject); };
    });
    document.querySelectorAll('[data-cls-goto]').forEach(function(b){
      b.onclick = function(){
        var idea = (getSpace().ideas || []).find(function(x){ return x.id === b.dataset.clsGoto; });
        if(!idea) return;
        var proj = (getSpace().projects || []).find(function(p){ return p.ideaId === idea.id; });
        if(proj && window.switchTab) window.switchTab('roadmap');
      };
    });
    /* ← الحذف التعاقبي بكبسة واحدة */
    document.querySelectorAll('[data-cls-delete]').forEach(function(b){
      b.onclick = function(e){
        e.stopPropagation();
        cascadeDeleteIdea(b.dataset.clsDelete);
      };
    });
    document.querySelectorAll('[data-cls-delete-project]').forEach(function(b){
      b.onclick = function(e){
        e.stopPropagation();
        cascadeDeleteProject(b.dataset.clsDeleteProject);
      };
    });
    document.querySelectorAll('[data-cls-goto-project]').forEach(function(b){
      b.onclick = function(){ if(window.switchTab) window.switchTab('roadmap'); };
    });
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
      if(tab === 'ideas') setTimeout(renderClassifier, 120);
      return r;
    };

    /* استبدال renderIdeas الأصلي */
    if(typeof window.renderIdeas === 'function'){
      window._origRenderIdeas = window.renderIdeas;
      window.renderIdeas = renderClassifier;
    }
  }

  document.addEventListener('languagechange', function(){
    var active = document.querySelector('.section.active');
    if(active && active.id === 'ideas') renderClassifier();
  });

  window.renderClassifier = renderClassifier;
  window.cascadeDeleteIdea = cascadeDeleteIdea;
  window.cascadeDeleteProject = cascadeDeleteProject;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();

  console.log('🗂️ Project Classifier loaded');
})();