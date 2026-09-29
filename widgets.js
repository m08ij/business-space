/* ============================================================
   🎯 widgets.js — نسخة مضمونة مع logging شامل
   ============================================================ */
(function(){
  'use strict';

  var WIDGET_PREFIX = 'bd_w_';
  var LOG = true;

  function log(){ if(LOG) console.log.apply(console, ['[🎯 Widgets]'].concat(Array.prototype.slice.call(arguments))); }
  function warn(){ if(LOG) console.warn.apply(console, ['[🎯 Widgets]'].concat(Array.prototype.slice.call(arguments))); }

  function tr(k){ 
    var v = (window.t && window.t(k)) || k;
    return v;
  }
  function getSpace(){ return window.space || {profile:{},projects:[],tasks:[]}; }
  function toast(m,t){ if(typeof window.toast === 'function') window.toast(m, t || 'info', 2200); }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function pick(obj, key){
    var lang = window.i18n ? window.i18n.getLang() : 'ar';
    if(lang === 'en' && obj[key + 'En']) return obj[key + 'En'];
    return obj[key] || '';
  }

  /* ============ CSS ============ */
  function injectCSS(){
    if(document.getElementById('lw-style')) { log('CSS already injected'); return; }
    log('Injecting CSS...');
    var style = document.createElement('style');
    style.id = 'lw-style';
    style.textContent = `
      .lw-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(3px);z-index:401;opacity:0;pointer-events:none;transition:opacity .3s}
      .lw-backdrop.show{opacity:1;pointer-events:auto}
      .lw-expand-btn{position:fixed;top:50%;right:0;transform:translateY(-50%);z-index:403;width:42px;height:54px;border-radius:14px 0 0 14px;background:var(--card);border:1px solid var(--border);border-right:none;color:var(--cyan);cursor:pointer;font-family:inherit;font-size:1.25rem;padding:0;display:flex;align-items:center;justify-content:center;box-shadow:-3px 0 14px rgba(0,0,0,.25);transition:.3s}
      .lw-expand-btn:hover{background:var(--card2);box-shadow:0 0 20px var(--glow)}
      .lw-expand-btn.hidden{opacity:0;pointer-events:none;transform:translateY(-50%) translateX(70px)}
      html[dir="rtl"] .lw-expand-btn{right:auto;left:0;border-radius:0 14px 14px 0;border-right:1px solid var(--border);border-left:none;box-shadow:3px 0 14px rgba(0,0,0,.25)}
      html[dir="rtl"] .lw-expand-btn.hidden{transform:translateY(-50%) translateX(-70px)}
      .lw-sidebar{position:fixed;top:74px;right:0;width:320px;max-width:calc(100vw - 60px);max-height:calc(100vh - 100px);padding:14px;background:var(--bg2);border:1px solid var(--border);border-right:none;border-radius:20px 0 0 20px;overflow-y:auto;z-index:402;display:flex;flex-direction:column;gap:10px;box-shadow:var(--shadow-lg);transform:translateX(100%);opacity:0;pointer-events:none;transition:.35s}
      html[dir="rtl"] .lw-sidebar{right:auto;left:0;border-radius:0 20px 20px 0;border-right:1px solid var(--border);border-left:none;transform:translateX(-100%)}
      .lw-sidebar.open{transform:translateX(0);opacity:1;pointer-events:auto}
      .lw-close-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:2px;padding:0 2px}
      .lw-close-title{font-size:.72rem;font-weight:800;color:var(--muted);letter-spacing:.5px}
      .lw-close-actions{display:flex;gap:6px}
      .lw-close-btn{width:28px;height:28px;border-radius:8px;background:var(--card);border:1px solid var(--border);color:var(--muted);cursor:pointer;font-family:inherit;font-size:1rem;padding:0;line-height:1;display:flex;align-items:center;justify-content:center;transition:.2s}
      .lw-close-btn:hover{background:var(--card2);border-color:var(--cyan);color:var(--cyan)}
      .lw-card{background:var(--card);border:1px solid var(--border);border-radius:13px;padding:12px;position:relative;overflow:hidden;transition:.25s}
      .lw-card:hover{border-color:var(--border2)}
      .lw-title{font-size:.74rem;font-weight:700;color:var(--muted);margin-bottom:10px;display:flex;align-items:center;gap:6px}
      .lw-title .lw-ic{font-size:1rem}
      .lw-quote{background:linear-gradient(135deg,rgba(167,139,250,.08),rgba(244,114,182,.08));border-color:rgba(167,139,250,.22);text-align:center}
      .lw-quote-text{font-size:.82rem;font-style:italic;line-height:1.7;color:var(--text);margin:4px 2px 8px;min-height:56px;display:flex;align-items:center;justify-content:center}
      .lw-quote-author{font-size:.66rem;color:var(--muted);font-weight:700;margin-bottom:9px}
      .lw-item{display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border);font-size:.78rem}
      .lw-item:last-child{border-bottom:none;padding-bottom:0}
      .lw-item:first-child{padding-top:0}
      .lw-item-ic{font-size:1rem;flex-shrink:0;width:20px;text-align:center}
      .lw-item-body{flex:1;min-width:0}
      .lw-item-title{font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.78rem}
      .lw-item-meta{font-size:.64rem;color:var(--muted);margin-top:2px}
      .lw-item-when{font-size:.62rem;font-weight:800;padding:3px 7px;border-radius:7px;background:var(--grad-soft);color:var(--cyan);white-space:nowrap;flex-shrink:0}
      .lw-item-when.urgent{background:rgba(239,68,68,.15);color:var(--red)}
      .lw-stats{display:flex;gap:8px;flex-wrap:wrap}
      .lw-stat{flex:1;min-width:70px;background:var(--bg2);border-radius:10px;padding:10px 8px;text-align:center}
      .lw-stat-val{font-size:1.15rem;font-weight:800;color:var(--cyan);line-height:1.1}
      .lw-stat-val.green{color:var(--green)}
      .lw-stat-val.red{color:var(--red)}
      .lw-stat-val.amber{color:var(--amber)}
      .lw-stat-lbl{font-size:.62rem;color:var(--muted);margin-top:4px}
      .lw-empty-mini{text-align:center;padding:14px 4px;font-size:.74rem;color:var(--muted2);display:flex;flex-direction:column;gap:4px;align-items:center}
      .lw-empty-mini .lw-em-ic{font-size:1.5rem;opacity:.4}
      .lw-customize-backdrop{position:fixed;inset:0;z-index:999;background:rgba(0,0,0,.55);backdrop-filter:blur(4px)}
      .lw-customize-panel{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:340px;max-width:calc(100vw - 32px);max-height:80vh;background:var(--card);border:1px solid var(--border);border-radius:18px;padding:18px;box-shadow:var(--shadow-lg);z-index:1000;display:flex;flex-direction:column}
      .lw-cust-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;font-weight:800;font-size:.95rem}
      .lw-cust-list{display:flex;flex-direction:column;gap:3px;overflow-y:auto;max-height:55vh;padding:4px 2px}
      .lw-cust-item{display:flex;align-items:center;gap:11px;padding:11px 13px;border-radius:11px;cursor:pointer;transition:.2s;border:1px solid transparent}
      .lw-cust-item:hover{background:var(--card2);border-color:var(--border)}
      .lw-cust-item.checked{background:var(--grad-soft);border-color:var(--glow)}
      .lw-cust-item input{width:18px;height:18px;accent-color:var(--cyan);cursor:pointer;flex-shrink:0;margin:0}
      .lw-cust-ic{font-size:1.2rem;flex-shrink:0}
      .lw-cust-title{font-size:.85rem;font-weight:600;flex:1}
      .lw-cust-footer{margin-top:12px;padding-top:12px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center}
      .lw-cust-btn{padding:8px 14px;background:var(--card2);border:1px solid var(--border);color:var(--muted);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.76rem;font-weight:700}
      .lw-cust-btn:hover{border-color:var(--cyan);color:var(--cyan)}
      @media(max-width:900px){.lw-sidebar{top:66px;width:min(340px,calc(100vw - 50px))}}
    `;
    document.head.appendChild(style);
    log('CSS injected ✓');
  }

  /* ============ WIDGETS ============ */
  var WIDGETS = {
    focus: {
      titleKey:'widgets_focus_title', icon:'🎯', default:true,
      html: function(){
        return '<div class="lw-card" data-widget="focus" style="background:linear-gradient(135deg,rgba(34,211,238,.08),rgba(167,139,250,.08));border-color:var(--glow)">' +
          '<div style="display:flex;align-items:center;gap:12px">' +
            '<div style="font-size:1.6rem">🎯</div>' +
            '<div style="flex:1"><div style="font-weight:800;font-size:.86rem">' + tr('widgets_focus_title') + '</div>' +
            '<div style="font-size:.66rem;color:var(--muted);margin-top:2px">' + tr('widgets_focus_sub') + '</div></div>' +
          '</div>' +
          '<button class="btn btn-sm" style="width:100%;margin-top:10px" id="lwFocusStart">' + tr('widgets_focus_start') + '</button>' +
        '</div>';
      },
      attach: function(card){
        var b = card.querySelector('#lwFocusStart');
        if(b) b.onclick = function(){ toast('🎯 ' + tr('widgets_focus_title'), 'info', 2500); };
      }
    },
    quote: {
      titleKey:'widgets_quote_title', icon:'✨', default:true,
      html: function(){
        return '<div class="lw-card lw-quote" data-widget="quote">' +
          '<div class="lw-title" style="justify-content:center"><span class="lw-ic">✨</span> ' + tr('widgets_quote_title') + '</div>' +
          '<div class="lw-quote-text" id="lwQuoteText">—</div>' +
          '<div class="lw-quote-author" id="lwQuoteAuthor">—</div>' +
          '<button class="btn btn-sm btn-ghost" id="lwQuoteNext" style="width:100%">' + tr('widgets_quote_next') + '</button>' +
        '</div>';
      },
      attach: function(card){
        var b = card.querySelector('#lwQuoteNext');
        if(b) b.onclick = function(){ rotateQuote(true); };
        renderQuote();
      }
    },
    stats: {
      titleKey:'widgets_stats_title', icon:'📊', default:true,
      html: function(){
        return '<div class="lw-card" data-widget="stats">' +
          '<div class="lw-title"><span class="lw-ic">📊</span> ' + tr('widgets_stats_title') + '</div>' +
          '<div id="lwStatsBody"></div>' +
        '</div>';
      },
      attach: function(card){ renderStatsBody(); }
    },
    upcoming: {
      titleKey:'widgets_upcoming_title', icon:'📅', default:true,
      html: function(){
        return '<div class="lw-card" data-widget="upcoming">' +
          '<div class="lw-title"><span class="lw-ic">📅</span> ' + tr('widgets_upcoming_title') + '</div>' +
          '<div id="lwUpcomingBody"></div>' +
        '</div>';
      },
      attach: function(card){ renderUpcomingBody(); }
    },
    sales: {
      titleKey:'widgets_sales_title', icon:'💼', default:false,
      html: function(){
        return '<div class="lw-card" data-widget="sales">' +
          '<div class="lw-title"><span class="lw-ic">💼</span> ' + tr('widgets_sales_title') + '</div>' +
          '<div id="lwSalesBody"></div>' +
        '</div>';
      },
      attach: function(card){ renderSalesBody(); }
    },
    impact: {
      titleKey:'widgets_impact_title', icon:'🌱', default:false,
      html: function(){
        return '<div class="lw-card" data-widget="impact">' +
          '<div class="lw-title"><span class="lw-ic">🌱</span> ' + tr('widgets_impact_title') + '</div>' +
          '<div id="lwImpactBody"></div>' +
        '</div>';
      },
      attach: function(card){ renderImpactBody(); }
    },
    budget: {
      titleKey:'widgets_budget_title', icon:'💰', default:false,
      html: function(){
        return '<div class="lw-card" data-widget="budget">' +
          '<div class="lw-title"><span class="lw-ic">💰</span> ' + tr('widgets_budget_title') + '</div>' +
          '<div id="lwBudgetBody"></div>' +
        '</div>';
      },
      attach: function(card){ renderBudgetBody(); }
    }
  };

  var enabledWidgets = [];

  /* ============ localStorage ============ */
  function loadEnabled(){
    try{
      var v = JSON.parse(localStorage.getItem(WIDGET_PREFIX + 'lw_enabled_widgets') || 'null');
      if(Array.isArray(v) && v.length) return v;
    }catch(e){ warn('loadEnabled error:', e); }
    return Object.keys(WIDGETS).filter(function(k){ return WIDGETS[k].default; });
  }

  function saveEnabled(){
    try{ localStorage.setItem(WIDGET_PREFIX + 'lw_enabled_widgets', JSON.stringify(enabledWidgets)); }catch(e){}
  }

  /* ============ HTML Injection ============ */
  function injectHTML(){
    if(document.getElementById('lwSidebar')) { log('Sidebar already exists'); return; }
    log('Injecting HTML...');
    
    var backdrop = document.createElement('div');
    backdrop.className = 'lw-backdrop'; backdrop.id = 'lwBackdrop';
    document.body.appendChild(backdrop);
    
    var expandBtn = document.createElement('button');
    expandBtn.className = 'lw-expand-btn'; 
    expandBtn.id = 'lwExpandBtn';
    expandBtn.type = 'button';
    expandBtn.title = tr('widgets_quick_tools');
    expandBtn.innerHTML = '🎯';
    document.body.appendChild(expandBtn);
    
    var aside = document.createElement('aside');
    aside.className = 'lw-sidebar'; aside.id = 'lwSidebar';
    document.body.appendChild(aside);
    
    log('HTML injected ✓ — expandBtn:', !!document.getElementById('lwExpandBtn'));
  }

  /* ============ Render Sidebar ============ */
  function renderSidebar(){
    var sidebar = document.getElementById('lwSidebar'); 
    if(!sidebar){ warn('renderSidebar: sidebar not found'); return; }
    
    log('Rendering sidebar, widgets:', enabledWidgets);
    
    var html = '<div class="lw-close-row">' +
      '<span class="lw-close-title">' + tr('widgets_quick_tools') + '</span>' +
      '<div class="lw-close-actions">' +
        '<button class="lw-close-btn" id="lwCustomizeBtn" title="⚙">⚙</button>' +
        '<button class="lw-close-btn" id="lwCloseBtn" title="×">×</button>' +
      '</div>' +
    '</div>';
    
    if(!enabledWidgets.length){
      html += '<div class="lw-empty-mini" style="padding:40px 16px"><div class="lw-em-ic">🎨</div><div>' + tr('widgets_no_widgets') + '</div></div>';
    } else {
      enabledWidgets.forEach(function(id){ 
        var w = WIDGETS[id]; 
        if(w) html += w.html(); 
      });
    }
    
    sidebar.innerHTML = html;
    
    // Bind close/customize
    var closeBtn = sidebar.querySelector('#lwCloseBtn');
    if(closeBtn) closeBtn.onclick = function(){ setSidebarOpen(false); };
    var custBtn = sidebar.querySelector('#lwCustomizeBtn');
    if(custBtn) custBtn.onclick = openCustomizePanel;
    
    // Attach widgets
    enabledWidgets.forEach(function(id){
      var w = WIDGETS[id]; 
      if(!w) return;
      var card = sidebar.querySelector('[data-widget="' + id + '"]');
      if(card && w.attach){
        try { w.attach(card); log('Attached widget:', id); }
        catch(e){ warn('Attach failed for', id, e); }
      } else {
        warn('Card not found for widget:', id);
      }
    });
    
    log('Sidebar rendered ✓');
  }

  /* ============ Customize Panel ============ */
  function openCustomizePanel(){
    var old = document.getElementById('lwCustomizePanel'); if(old) old.remove();
    var oldBd = document.getElementById('lwCustomizeBackdrop'); if(oldBd) oldBd.remove();
    
    var backdrop = document.createElement('div');
    backdrop.className = 'lw-customize-backdrop'; backdrop.id = 'lwCustomizeBackdrop';
    document.body.appendChild(backdrop);
    
    var panel = document.createElement('div');
    panel.id = 'lwCustomizePanel'; 
    panel.className = 'lw-customize-panel';
    
    var html = '<div class="lw-cust-header"><span>🎨 ' + tr('widgets_customize_title') + '</span><button class="lw-close-btn" id="lwCustClose">×</button></div><div class="lw-cust-list">';
    Object.keys(WIDGETS).forEach(function(id){
      var w = WIDGETS[id];
      var checked = enabledWidgets.indexOf(id) > -1;
      html += '<label class="lw-cust-item ' + (checked ? 'checked' : '') + '" data-cid="' + id + '">' +
        '<input type="checkbox" data-wid="' + id + '" ' + (checked ? 'checked' : '') + '>' +
        '<span class="lw-cust-ic">' + w.icon + '</span>' +
        '<span class="lw-cust-title">' + tr(w.titleKey) + '</span>' +
      '</label>';
    });
    html += '</div><div class="lw-cust-footer">' +
      '<span style="font-size:.72rem;color:var(--muted2)">' + enabledWidgets.length + ' / ' + Object.keys(WIDGETS).length + '</span>' +
      '<button class="lw-cust-btn" id="lwCustReset">' + tr('widgets_customize_default') + '</button>' +
    '</div>';
    
    panel.innerHTML = html;
    document.body.appendChild(panel);
    
    function close(){ panel.remove(); backdrop.remove(); }
    panel.querySelector('#lwCustClose').onclick = close;
    backdrop.onclick = close;
    
    panel.querySelectorAll('input[data-wid]').forEach(function(cb){
      cb.onchange = function(){
        var id = cb.dataset.wid;
        var idx = enabledWidgets.indexOf(id);
        if(cb.checked && idx === -1) enabledWidgets.push(id);
        else if(!cb.checked && idx > -1) enabledWidgets.splice(idx, 1);
        var item = panel.querySelector('[data-cid="' + id + '"]');
        if(item) item.classList.toggle('checked', cb.checked);
        saveEnabled(); 
        renderSidebar();
      };
    });
    
    panel.querySelector('#lwCustReset').onclick = function(){
      enabledWidgets = Object.keys(WIDGETS).filter(function(k){ return WIDGETS[k].default; });
      saveEnabled(); close(); renderSidebar(); 
      toast('↺ ' + tr('done'), 'success');
    };
  }

  /* ============ Sidebar Open/Close ============ */
  function setSidebarOpen(v){
    var sidebar = document.getElementById('lwSidebar');
    var expandBtn = document.getElementById('lwExpandBtn');
    var backdrop = document.getElementById('lwBackdrop');
    if(!sidebar || !expandBtn){ warn('setSidebarOpen: missing elements'); return; }
    
    sidebar.classList.toggle('open', v);
    expandBtn.classList.toggle('hidden', v);
    if(backdrop) backdrop.classList.toggle('show', v);
    
    try{ localStorage.setItem(WIDGET_PREFIX + 'lw_sidebar_open', JSON.stringify(v)); }catch(e){}
    log('Sidebar', v ? 'opened' : 'closed');
  }

  function initSidebar(){
    var expandBtn = document.getElementById('lwExpandBtn');
    var backdrop = document.getElementById('lwBackdrop');
    if(!expandBtn){ warn('initSidebar: no expandBtn'); return; }
    
    var open = false;
    try{
      var saved = localStorage.getItem(WIDGET_PREFIX + 'lw_sidebar_open');
      if(saved !== null) open = JSON.parse(saved);
    }catch(e){}
    
    setSidebarOpen(open);
    
    expandBtn.onclick = function(){ 
      log('Expand button clicked');
      setSidebarOpen(true); 
    };
    if(backdrop) backdrop.onclick = function(){ setSidebarOpen(false); };
    
    log('Sidebar events bound ✓');
  }

  /* ============ Quote ============ */
  var QUOTE_INDEX_KEY = WIDGET_PREFIX + 'lw_quote_index_v2';

  function getQuotes(){
    return (window.QUOTES || [{t:'لا تنتظر الفرصة، اصنعها.', tEn:"Don't wait for opportunity, create it.", a:'—'}]);
  }

  function rotateQuote(advance){
    var quotes = getQuotes();
    var idx = 0;
    try{ idx = parseInt(localStorage.getItem(QUOTE_INDEX_KEY) || '0'); }catch(e){}
    if(advance) idx = (idx + 1) % quotes.length;
    try{ localStorage.setItem(QUOTE_INDEX_KEY, String(idx)); }catch(e){}
    window._lwCurrentQuote = quotes[idx];
    renderQuote();
  }

  function renderQuote(){
    var t = document.getElementById('lwQuoteText'); if(!t) return;
    var q = window._lwCurrentQuote || getQuotes()[0];
    t.textContent = pick(q, 't');
    var a = document.getElementById('lwQuoteAuthor'); if(a) a.textContent = '— ' + (q.a || '—');
  }

  /* ============ Stats ============ */
  function renderStatsBody(){
    var el = document.getElementById('lwStatsBody'); if(!el) return;
    var sp = getSpace();
    var projects = (sp.projects || []).length;
    var tasks = (sp.tasks || []).filter(function(t){ return !t.done; }).length;
    var deals = (sp.salesPipeline || []).length;
    el.innerHTML = '<div class="lw-stats">' +
      '<div class="lw-stat"><div class="lw-stat-val">' + projects + '</div><div class="lw-stat-lbl">' + tr('widgets_stats_projects') + '</div></div>' +
      '<div class="lw-stat"><div class="lw-stat-val amber">' + tasks + '</div><div class="lw-stat-lbl">' + tr('widgets_stats_tasks') + '</div></div>' +
      '<div class="lw-stat"><div class="lw-stat-val green">' + deals + '</div><div class="lw-stat-lbl">' + tr('widgets_stats_deals') + '</div></div>' +
    '</div>';
  }

  /* ============ Upcoming ============ */
  function renderUpcomingBody(){
    var el = document.getElementById('lwUpcomingBody'); if(!el) return;
    var sp = getSpace();
    var today = new Date().toISOString().slice(0,10);
    var items = [];
    (sp.tasks || []).forEach(function(t){
      if(t.done || !t.due || t.due < today) return;
      items.push({icon:'📝', title:t.title, date:t.due});
    });
    items.sort(function(a,b){ return a.date.localeCompare(b.date); });
    items = items.slice(0, 5);
    if(!items.length){
      el.innerHTML = '<div class="lw-empty-mini"><div class="lw-em-ic">🌴</div>' + tr('widgets_upcoming_empty') + '</div>';
      return;
    }
    var html = '';
    items.forEach(function(it){
      var days = Math.ceil((new Date(it.date) - new Date(today)) / 86400000);
      var when = days === 0 ? tr('dash_today') : days === 1 ? tr('dash_tomorrow') : tr('dash_in_days', {n: days});
      var cls = days <= 2 ? 'urgent' : '';
      html += '<div class="lw-item"><div class="lw-item-ic">' + it.icon + '</div>' +
        '<div class="lw-item-body"><div class="lw-item-title">' + esc(it.title) + '</div>' +
        '<div class="lw-item-meta">' + it.date + '</div></div>' +
        '<div class="lw-item-when ' + cls + '">' + when + '</div></div>';
    });
    el.innerHTML = html;
  }

  /* ============ Sales ============ */
  function renderSalesBody(){
    var el = document.getElementById('lwSalesBody'); if(!el) return;
    var sp = getSpace();
    var pipeline = sp.salesPipeline || [];
    var won = pipeline.filter(function(d){ return d.stage === 'won'; }).length;
    var total = pipeline.length;
    var totalValue = pipeline.reduce(function(a,b){ return a + (parseFloat(b.value) || 0); }, 0);
    el.innerHTML = '<div class="lw-stats">' +
      '<div class="lw-stat"><div class="lw-stat-val">' + total + '</div><div class="lw-stat-lbl">' + tr('widgets_sales_deals') + '</div></div>' +
      '<div class="lw-stat"><div class="lw-stat-val green">' + won + '</div><div class="lw-stat-lbl">' + tr('widgets_sales_won') + '</div></div>' +
      '<div class="lw-stat"><div class="lw-stat-val amber">' + totalValue.toFixed(0) + '</div><div class="lw-stat-lbl">' + tr('widgets_sales_value') + '</div></div>' +
    '</div>';
  }

  /* ============ Impact ============ */
  function renderImpactBody(){
    var el = document.getElementById('lwImpactBody'); if(!el) return;
    var sp = getSpace();
    var sdgSet = {};
    (sp.projects || []).forEach(function(p){
      if(p.impact && Array.isArray(p.impact.sdg)) p.impact.sdg.forEach(function(n){ sdgSet[n] = true; });
    });
    var list = Object.keys(sdgSet);
    if(!list.length){
      el.innerHTML = '<div class="lw-empty-mini"><div class="lw-em-ic">🌱</div>' + tr('widgets_impact_empty') + '</div>';
      return;
    }
    var html = '<div style="display:flex;flex-wrap:wrap;gap:6px">';
    list.forEach(function(n){
      var sdg = window.SDG_DB && window.SDG_DB[n];
      if(!sdg) return;
      html += '<span style="font-size:.7rem;padding:3px 9px;border-radius:8px;background:' + sdg.color + '20;color:' + sdg.color + ';font-weight:700">' + sdg.icon + ' SDG ' + n + '</span>';
    });
    html += '</div>';
    el.innerHTML = html;
  }

  /* ============ Budget ============ */
  function renderBudgetBody(){
    var el = document.getElementById('lwBudgetBody'); if(!el) return;
    var sp = getSpace();
    var inc = (sp.budget || []).filter(function(b){ return b.type === 'income'; }).reduce(function(a,b){ return a + (parseFloat(b.amount) || 0); }, 0);
    var exp = (sp.budget || []).filter(function(b){ return b.type === 'expense'; }).reduce(function(a,b){ return a + (parseFloat(b.amount) || 0); }, 0);
    var bal = inc - exp;
    el.innerHTML = '<div class="lw-stats">' +
      '<div class="lw-stat"><div class="lw-stat-val green">' + inc.toFixed(0) + '</div><div class="lw-stat-lbl">' + tr('widgets_budget_income') + '</div></div>' +
      '<div class="lw-stat"><div class="lw-stat-val red">' + exp.toFixed(0) + '</div><div class="lw-stat-lbl">' + tr('widgets_budget_expense') + '</div></div>' +
      '<div class="lw-stat"><div class="lw-stat-val ' + (bal >= 0 ? 'green' : 'red') + '">' + bal.toFixed(0) + '</div><div class="lw-stat-lbl">' + tr('widgets_budget_balance') + '</div></div>' +
    '</div>';
  }

  /* ============ Init (قوي مع retry) ============ */
  var _initAttempts = 0;
  function init(){
    _initAttempts++;
    log('=== INIT attempt #' + _initAttempts + ' ===');
    log('document.body ready?', !!document.body);
    
    if(!document.body){
      if(_initAttempts < 20){
        setTimeout(init, 200);
        return;
      } else {
        warn('Failed to init: no body');
        return;
      }
    }
    
    try{ injectCSS(); } catch(e){ warn('injectCSS:', e); }
    try{ injectHTML(); } catch(e){ warn('injectHTML:', e); }
    
    enabledWidgets = loadEnabled();
    log('Enabled widgets:', enabledWidgets);
    
    try{ renderSidebar(); } catch(e){ warn('renderSidebar:', e); }
    try{ initSidebar(); } catch(e){ warn('initSidebar:', e); }
    try{ rotateQuote(false); } catch(e){ warn('rotateQuote:', e); }
    
    setInterval(function(){ try{ rotateQuote(true); }catch(e){} }, 5 * 60 * 1000);
    setInterval(function(){
      try {
        if(enabledWidgets.indexOf('stats') > -1) renderStatsBody();
        if(enabledWidgets.indexOf('upcoming') > -1) renderUpcomingBody();
      } catch(e){}
    }, 60 * 1000);
    
    log('=== INIT complete ===');
  }

  document.addEventListener('languagechange', function(){
    try {
      var expandBtn = document.getElementById('lwExpandBtn');
      if(expandBtn) expandBtn.title = tr('widgets_quick_tools');
      renderSidebar();
    } catch(e){}
  });

  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM جاهز، لكن انتظر قليلاً عشان السكريبتات الأخرى تحمّل
    setTimeout(init, 300);
  }

  // تصدير
  window.openWidgetsPanel = function(){ setSidebarOpen(true); };
  
  console.log('🎯 Widgets loaded — attempts will be logged as [🎯 Widgets]');
})();