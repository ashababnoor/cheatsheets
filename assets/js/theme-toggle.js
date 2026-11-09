/* Theme toggle button. The initial theme is set by the inline script in the head, before first paint. */
(function() {
  var btn = document.getElementById('theme-toggle');
  btn.addEventListener('click', function() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();
