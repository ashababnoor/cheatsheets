/* Site tooltips: any element with data-tip="text" shows a small tooltip on hover or focus.
   One shared element, positioned with fixed coordinates so scrolling tables never clip it. */
(function () {
  var tip = document.createElement('div');
  tip.className = 'tooltip';
  tip.id = 'site-tooltip';
  tip.setAttribute('role', 'tooltip');
  document.body.appendChild(tip);

  var current = null;
  var timer;

  function place(el) {
    var r = el.getBoundingClientRect();
    var w = tip.offsetWidth;
    var h = tip.offsetHeight;
    var left = Math.max(8, Math.min(r.left + r.width / 2 - w / 2, window.innerWidth - w - 8));
    var top = r.top - h - 8;
    if (top < 8) top = r.bottom + 8;          // not enough room above, so go below
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }

  function show(el) {
    var text = el.getAttribute('data-tip');
    if (!text) return;
    current = el;
    tip.textContent = text;
    place(el);
    tip.classList.add('visible');
    el.setAttribute('aria-describedby', tip.id);
  }

  function hide() {
    clearTimeout(timer);
    tip.classList.remove('visible');
    if (current) current.removeAttribute('aria-describedby');
    current = null;
  }

  function target(e) {
    return e.target.closest ? e.target.closest('[data-tip]') : null;
  }

  document.addEventListener('mouseover', function (e) {
    var el = target(e);
    if (!el || el === current) return;
    hide();
    timer = setTimeout(function () { show(el); }, 350);   // short delay avoids flicker
  });

  document.addEventListener('mouseout', function (e) {
    var el = target(e);
    if (el && !el.contains(e.relatedTarget)) hide();
  });

  document.addEventListener('focusin', function (e) {
    var el = target(e);
    if (el) show(el);
  });

  document.addEventListener('focusout', hide);
  document.addEventListener('mousedown', hide);
  document.addEventListener('scroll', hide, true);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
})();
