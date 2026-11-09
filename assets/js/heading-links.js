/* Heading links: hover a heading to reveal a "#" that copies a link to that section. */
(function () {
  var article = document.querySelector('.page-content');
  if (!article || !window.siteCopy) return;

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
      window.siteCopy(url).then(function () {
        a.classList.add('copied');
        clearTimeout(timer);
        timer = setTimeout(function () { a.classList.remove('copied'); }, 1400);
      }, function () {});
    });
    h.appendChild(a);
  });
})();
