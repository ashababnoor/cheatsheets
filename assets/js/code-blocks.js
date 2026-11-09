/* Code blocks: line numbers on longer programming-language blocks, copy button on all. Needs clipboard.js. */
(function() {
  var LINE_NUMBER_LANGS = ['python', 'js', 'javascript', 'css', 'sql', 'html', 'bash', 'sh', 'json', 'go', 'graphql'];
  var LINE_NUMBER_MIN_LINES = 4;
  var COPY_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
  var CHECK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

  document.querySelectorAll('.page-content div.highlighter-rouge').forEach(function(block) {
    var match = block.className.match(/language-(\S+)/);
    var lang = match ? match[1] : '';
    if (lang === 'mermaid') return;
    var pre = block.querySelector('pre');
    var code = pre && pre.querySelector('code');
    if (!code) return;

    var text = code.textContent.replace(/\n$/, '');
    var lines = text.split('\n');
    var contentLines = lines.filter(function(l) { return l.trim() !== ''; }).length;

    if (LINE_NUMBER_LANGS.indexOf(lang) !== -1 && contentLines >= LINE_NUMBER_MIN_LINES) {
      var gutter = document.createElement('span');
      gutter.className = 'line-numbers';
      gutter.setAttribute('aria-hidden', 'true');
      gutter.textContent = lines.map(function(_, i) { return i + 1; }).join('\n');
      pre.insertBefore(gutter, code);
      pre.classList.add('has-line-numbers');
    }

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.setAttribute('aria-label', 'Copy code');
    btn.setAttribute('data-tip', 'Copy code');
    btn.innerHTML = COPY_ICON;
    var timer;
    btn.addEventListener('click', function() {
      window.siteCopy(text).then(function() {
        btn.innerHTML = CHECK_ICON;
        btn.classList.add('copied');
        btn.setAttribute('aria-label', 'Copied');
        clearTimeout(timer);
        timer = setTimeout(function() {
          btn.innerHTML = COPY_ICON;
          btn.classList.remove('copied');
          btn.setAttribute('aria-label', 'Copy code');
        }, 1500);
      }, function() {});
    });
    block.appendChild(btn);
  });
})();
