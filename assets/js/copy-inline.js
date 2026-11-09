/* Click inline code in a table cell (a command, a flag, a pattern) to copy it. */
(function () {
  var article = document.querySelector('.page-content');
  if (!article || !window.siteCopy) return;

  var toast = document.createElement('div');
  toast.className = 'copy-toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  document.body.appendChild(toast);
  var timer;

  function show(text) {
    var shown = text.length > 48 ? text.slice(0, 47) + '…' : text;
    toast.textContent = '';
    var label = document.createElement('span');
    label.textContent = 'Copied';
    var code = document.createElement('code');
    code.textContent = shown;
    toast.appendChild(label);
    toast.appendChild(code);
    toast.classList.add('visible');
    clearTimeout(timer);
    timer = setTimeout(function () { toast.classList.remove('visible'); }, 1600);
  }

  var targets = article.querySelectorAll('td code');
  targets.forEach(function (el) { el.classList.add('copyable'); el.setAttribute('data-tip', 'Click to copy'); });

  article.addEventListener('click', function (e) {
    var el = e.target.closest('td code.copyable');
    if (!el || el.closest('a')) return;
    // Let people select text by dragging without copying the whole snippet.
    if (String(window.getSelection()).length) return;
    var text = el.textContent;
    window.siteCopy(text).then(function () { show(text); }, function () {});
  });
})();
