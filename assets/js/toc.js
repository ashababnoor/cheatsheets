/* "On this page": builds the sidebar list and the mobile menu panel from the headings, and highlights the current section. */
(function() {
  const article = document.querySelector('.page-content');
  const tocNav = document.getElementById('toc-nav');
  const tocSidebar = document.getElementById('toc-sidebar');
  if (!article || !tocNav) return;

  const headings = article.querySelectorAll('h2, h3');
  if (headings.length < 2) {
    tocSidebar.style.display = 'none';
    document.querySelector('.page-layout').classList.add('no-toc');
    return;
  }

  const list = document.createElement('ul');
  headings.forEach(function(h, i) {
    if (!h.id) h.id = 'section-' + i;
    const li = document.createElement('li');
    li.className = h.tagName === 'H3' ? 'toc-h3' : 'toc-h2';
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    list.appendChild(li);
  });
  tocNav.appendChild(list);

  // Mobile: the same list opens from the header's menu button.
  const panel = document.getElementById('toc-panel');
  const toggle = document.getElementById('toc-toggle');
  const backdrop = document.getElementById('toc-backdrop');
  if (panel && toggle) {
    panel.appendChild(list.cloneNode(true));
    toggle.hidden = false;
    const setOpen = function(open) {
      panel.hidden = !open;
      backdrop.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', function() { setOpen(panel.hidden); });
    panel.addEventListener('click', function(e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('click', function(e) {
      if (!panel.hidden && !panel.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && !panel.hidden) { setOpen(false); toggle.focus(); } });
    window.matchMedia('(min-width: 901px)').addEventListener('change', function(e) { if (e.matches) setOpen(false); });
  }

  // Highlight active heading on scroll
  const links = document.querySelectorAll('#toc-nav a, #toc-panel a');
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        links.forEach(function(l) { l.classList.remove('active'); });
        document.querySelectorAll('#toc-nav a[href="#' + entry.target.id + '"], #toc-panel a[href="#' + entry.target.id + '"]')
          .forEach(function(a) { a.classList.add('active'); });
      }
    });
  }, { rootMargin: '0px 0px -70% 0px', threshold: 0 });

  headings.forEach(function(h) { observer.observe(h); });
})();
