/* Site search: a keyboard-driven overlay over a build-time index (search.json).
   Open with "/" or Ctrl/Cmd+K, or click anything with [data-search-open]. */
(function () {
  var modal = document.getElementById('search-modal');
  if (!modal) return;

  var input = document.getElementById('search-modal-input');
  var list = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  var indexUrl = modal.getAttribute('data-index');
  var MAX_RESULTS = 20;

  var engine = null;
  var docs = [];
  var loading = null;
  var results = [];
  var active = -1;
  var lastFocus = null;

  function decode(s) {
    return new DOMParser().parseFromString(s, 'text/html').documentElement.textContent;
  }

  function loadIndex() {
    if (loading) return loading;
    loading = fetch(indexUrl)
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (rows) {
        docs = rows.map(function (r, i) {
          return {
            id: i,
            title: decode(r.title),
            category: r.category,
            url: r.url,
            anchor: r.anchor,
            section: decode(r.section),
            text: decode(r.text)
          };
        });
        engine = new MiniSearch({
          fields: ['section', 'title', 'text'],
          storeFields: [],
          searchOptions: {
            boost: { section: 4, title: 2 },
            prefix: true,
            // Tolerate typos only in longer words, so "flock" does not match "block".
            fuzzy: function (term) { return term.length > 5 ? 0.2 : false; }
          },
          // Keep code-like tokens (kubectl, git-rebase, O(n)) searchable as words.
          tokenize: function (s) { return s.split(/[^A-Za-z0-9_]+/).filter(Boolean); },
          processTerm: function (t) { return t.toLowerCase(); }
        });
        engine.addAll(docs);
      })
      .catch(function () {
        loading = null;
        status.textContent = 'Search is unavailable right now.';
      });
    return loading;
  }

  function terms(q) {
    return q.toLowerCase().split(/[^a-z0-9_]+/).filter(Boolean);
  }

  function esc(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function highlight(text, ts) {
    var safe = esc(text);
    if (!ts.length) return safe;
    var re = new RegExp('(' + ts.map(function (t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }).join('|') + ')', 'gi');
    return safe.replace(re, '<mark>$1</mark>');
  }

  function snippet(text, ts) {
    var lower = text.toLowerCase();
    var at = -1;
    for (var i = 0; i < ts.length; i++) {
      var p = lower.indexOf(ts[i]);
      if (p !== -1 && (at === -1 || p < at)) at = p;
    }
    var start = Math.max(0, at - 50);
    var out = text.slice(start, start + 150);
    return (start > 0 ? '… ' : '') + out + (start + 150 < text.length ? ' …' : '');
  }

  function search(q) {
    var res = engine.search(q, { combineWith: 'AND' });
    if (!res.length) res = engine.search(q, { combineWith: 'OR' });
    return res.map(function (r) { return docs[r.id]; });
  }

  // Compare paths without a trailing slash or .html, so /git-commands and /git-commands/ match.
  function norm(path) {
    return path.replace(/\/index\.html$/, '/').replace(/\.html$/, '').replace(/(.)\/$/, '$1');
  }

  var here = norm(window.location.pathname);

  function item(d, i, ts, onPage) {
    var heading = d.section ? highlight(d.section, ts) : highlight(d.title, ts);
    var where = onPage ? (d.section ? '' : 'Top of page') : (d.section ? d.title : d.category);
    return '<li role="option" id="search-opt-' + i + '" data-i="' + i + '" aria-selected="false">' +
      '<a href="' + esc(d.url + (d.anchor ? '#' + d.anchor : '')) + '">' +
      '<span class="sr-head"><span class="sr-title">' + heading + '</span>' +
      '<span class="sr-where">' + esc(where) + '</span></span>' +
      '<span class="sr-text">' + highlight(snippet(d.text, ts), ts) + '</span>' +
      '</a></li>';
  }

  function group(label, count, current) {
    return '<li role="presentation" class="sr-group' + (current ? ' sr-group-current' : '') + '">' +
      '<span>' + esc(label) + '</span><span class="sr-count">' + count + '</span></li>';
  }

  function render(q) {
    var ts = terms(q);
    if (!ts.length) {
      list.innerHTML = '';
      results = [];
      active = -1;
      status.textContent = 'Type to search every cheatsheet.';
      return;
    }

    var all = search(q);
    var onPage = [];
    var elsewhere = [];
    all.forEach(function (d) { (norm(d.url) === here ? onPage : elsewhere).push(d); });
    onPage = onPage.slice(0, 8);
    elsewhere = elsewhere.slice(0, 12);

    // Only cheatsheet pages have a "this page"; the homepage and 404 get one flat list.
    var onCheatsheet = docs.some(function (d) { return norm(d.url) === here; });

    results = onPage.concat(elsewhere);
    active = results.length ? 0 : -1;
    status.textContent = results.length
      ? results.length + (results.length === 1 ? ' result' : ' results')
      : 'No results for "' + q + '".';

    var html = '';
    var n = 0;
    if (onCheatsheet && results.length) {
      html += group('On this page', onPage.length, true);
      if (onPage.length) {
        onPage.forEach(function (d) { html += item(d, n++, ts, true); });
      } else {
        html += '<li role="presentation" class="sr-none">No matches on this page</li>';
      }
      if (elsewhere.length) html += group('Other cheatsheets', elsewhere.length, false);
    }
    elsewhere.forEach(function (d) { html += item(d, n++, ts, false); });

    list.innerHTML = html;
    var first = list.querySelector('[role="option"]');
    if (first) {
      first.classList.add('active');
      first.setAttribute('aria-selected', 'true');
    }
    input.setAttribute('aria-activedescendant', first ? first.id : '');
  }

  function setActive(n) {
    if (!results.length) return;
    active = (n + results.length) % results.length;
    Array.prototype.forEach.call(list.querySelectorAll('[role="option"]'), function (li, i) {
      var on = i === active;
      li.classList.toggle('active', on);
      li.setAttribute('aria-selected', on ? 'true' : 'false');
      if (on) {
        li.scrollIntoView({ block: 'nearest' });
        input.setAttribute('aria-activedescendant', li.id);
      }
    });
  }

  function go(i) {
    var d = results[i];
    if (d) window.location.href = d.url + (d.anchor ? '#' + d.anchor : '');
  }

  function open(prefill) {
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('search-open');
    input.value = prefill || '';
    status.textContent = 'Loading search…';
    input.focus();
    loadIndex().then(function () {
      if (modal.hidden || !engine) return;
      render(input.value);
    });
  }

  function close() {
    modal.hidden = true;
    document.body.classList.remove('search-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  input.addEventListener('input', function () {
    if (engine) render(input.value);
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
    else if (e.key === 'Enter') { e.preventDefault(); if (active >= 0) go(active); }
  });

  modal.addEventListener('mousedown', function (e) {
    if (e.target.hasAttribute('data-search-close')) close();
  });

  list.addEventListener('mousemove', function (e) {
    var li = e.target.closest('[role="option"]');
    if (li && +li.getAttribute('data-i') !== active) setActive(+li.getAttribute('data-i'));
  });

  list.addEventListener('click', function () { close(); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) { e.preventDefault(); close(); return; }
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
    var combo = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
    var slash = e.key === '/' && !typing && !e.metaKey && !e.ctrlKey && !e.altKey;
    if (combo || slash) {
      e.preventDefault();
      if (modal.hidden) open(); else input.select();
    }
  });

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-search-open]');
    if (trigger) { e.preventDefault(); open(); }
  });

  // Warm the index when the user shows intent, so the first search is instant.
  document.querySelectorAll('[data-search-open]').forEach(function (el) {
    ['pointerenter', 'focus'].forEach(function (ev) {
      el.addEventListener(ev, loadIndex, { once: true });
    });
  });
})();
