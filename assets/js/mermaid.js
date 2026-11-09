/* Mermaid diagrams: loads the library only on pages that have a mermaid code block. */
var blocks = document.querySelectorAll('code.language-mermaid');
if (blocks.length) {
  var mermaid = (await import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs')).default;
  var nodes = [];
  blocks.forEach(function(code) {
    var pre = code.parentElement;
    var div = document.createElement('div');
    div.className = 'mermaid';
    div.textContent = code.textContent;
    pre.parentElement.replaceChild(div, pre);
    nodes.push(div);
  });
  var theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'default' : 'dark';
  // The library loads after the page's load event, so render explicitly instead of startOnLoad.
  mermaid.initialize({ startOnLoad: false, theme: theme });
  await mermaid.run({ nodes: nodes });
}
