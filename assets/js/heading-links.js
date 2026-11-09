/* Heading links: hover a heading to reveal a "#" that copies a link to that section. */
(function () {
  var article = document.querySelector('.page-content');
  if (!article) return;

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy') ? resolve() : reject(); } catch (e) { reject(e); }
      document.body.removeChild(ta);
    });
  }

  article.querySelectorAll('h2[id], h3[id], h4[id]').forEach(function (h) {
    var a = document.createElement('a');
    a.className = 'heading-anchor';
    a.href = '#' + h.id;
    a.textContent = '#';
    a.setAttribute('aria-label', 'Copy link to "' + h.textContent.trim() + '"');
    var timer;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      history.replaceState(null, '', '#' + h.id);
      var url = window.location.origin + window.location.pathname + '#' + h.id;
      copy(url).then(function () {
        a.classList.add('copied');
        clearTimeout(timer);
        timer = setTimeout(function () { a.classList.remove('copied'); }, 1400);
      }, function () {});
    });
    h.appendChild(a);
  });
})();
