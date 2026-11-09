#!/usr/bin/env node
// Generates 1200x630 link-preview images into assets/og/ (one per cheatsheet + default.png).
// Needs Google Chrome (headless). Re-run after adding or retitling a cheatsheet:
//   node scripts/generate-og-images.mjs
import { readFileSync, readdirSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, basename } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const INVERT = new Set(['github', 'markdown', 'bash']); // dark-ink logos
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const plain = s => s.replace(/`([^`]*)`/g, '$1').replace(/[*_]/g, '');

function frontMatter(file) {
  const m = readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/);
  const fm = {};
  for (const line of (m ? m[1] : '').split('\n')) {
    const k = line.match(/^(\w+):\s*(.*)$/);
    if (k) fm[k[1]] = k[2].replace(/^"(.*)"$/, '$1');
  }
  return fm;
}

function iconHtml(fm) {
  if (fm.logo) {
    const svg = readFileSync(join(root, 'assets/logos', fm.logo + '.svg'), 'utf8');
    const uri = 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64');
    return `<img src="${uri}" style="${INVERT.has(fm.logo) ? 'filter:invert(1);' : ''}">`;
  }
  if (fm.icon) return readFileSync(join(root, '_includes/icons', fm.icon + '.svg'), 'utf8');
  return '';
}

const brand = readFileSync(join(root, 'favicon.svg'), 'utf8');

function page({ title, subtitle, category, icon }) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  *{box-sizing:border-box;margin:0}
  body{width:1200px;height:630px;background:#121212;color:#fff;font-family:Inter,-apple-system,"Helvetica Neue",Arial,sans-serif;
    padding:64px 80px;display:flex;flex-direction:column;position:relative;overflow:hidden}
  body::before{content:"";position:absolute;right:-220px;top:-220px;width:620px;height:620px;border-radius:50%;
    background:radial-gradient(circle,rgba(59,130,246,.22),rgba(59,130,246,0) 70%)}
  .top{display:flex;align-items:center;justify-content:space-between;position:relative}
  .brand{display:flex;align-items:center;gap:16px;font-size:30px;font-weight:600;letter-spacing:-.01em;color:#e5e5e5}
  .brand svg{width:48px;height:48px}
  .cat{font-size:22px;font-weight:500;color:#a3a3a3;border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:8px 20px}
  .main{margin-top:auto;position:relative}
  .tile{width:112px;height:112px;border-radius:26px;background:#1e1e1e;border:1px solid rgba(255,255,255,.14);
    display:flex;align-items:center;justify-content:center;margin-bottom:36px}
  .compact .tile{width:92px;height:92px;border-radius:22px}.compact .row{margin-bottom:28px}
  .compact .tile svg{width:50px;height:50px}.compact .tile img{width:62px;height:62px}
  .compact p{-webkit-line-clamp:1;margin-top:20px}
  .tile svg{width:60px;height:60px;color:#fff}.tile img{width:76px;height:76px;object-fit:contain}
  h1{font-size:104px;line-height:1.02;font-weight:700;letter-spacing:-.035em}
  .row{display:flex;align-items:center;gap:24px;margin-bottom:36px}
  .row .tile{margin-bottom:0}
  .kind{font-size:42px;font-weight:500;color:#a3a3a3;letter-spacing:-.01em}
  p{margin-top:24px;font-size:30px;line-height:1.4;color:#a3a3a3;max-width:980px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
  </style></head><body>
  <div class="top"><div class="brand">${brand}<span>Cheatsheets</span></div>${category ? `<div class="cat">${esc(category)}</div>` : ''}</div>
  <div class="main" id="main">${icon ? `<div class="row"><div class="tile">${icon}</div><span class="kind">Cheatsheet on</span></div>` : ''}
    <h1>${esc(title)}</h1>
    ${subtitle ? `<p>${esc(subtitle)}</p>` : ''}</div>
  <script>
  // One-line titles stay at full size. A title that wraps to two lines gets a smaller size, chosen as the
  // largest that keeps a fixed gap under the header row. Measure only once the web font has loaded.
  const GAP = 56, BOTTOM = 64, FULL = 104, WRAPPED = 84;
  const main = document.getElementById('main'), h1 = main.querySelector('h1');
  const room = () => 630 - BOTTOM - (document.querySelector('.top').getBoundingClientRect().bottom + GAP);
  const wraps = () => h1.getBoundingClientRect().height > parseFloat(h1.style.fontSize) * 1.5;
  const fit = (from, min) => { for (let s = from; s >= min; s -= 2) { h1.style.fontSize = s + 'px'; if (main.offsetHeight <= room()) return true; } return false; };
  document.fonts.ready.then(() => {
    h1.style.fontSize = FULL + 'px';
    if (!wraps() && main.offsetHeight <= room()) return;
    if (!fit(WRAPPED, 72)) { document.body.classList.add('compact'); fit(WRAPPED, 56); }
  });
  </script></body></html>`;
}

const tmp = join(tmpdir(), 'og-gen'); mkdirSync(tmp, { recursive: true });
const out = join(root, 'assets/og'); mkdirSync(out, { recursive: true });

function shoot(name, data) {
  const html = join(tmp, name + '.html');
  writeFileSync(html, page(data));
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--window-size=1200,630', '--virtual-time-budget=4000', `--screenshot=${join(out, name + '.png')}`, 'file://' + html],
    { stdio: 'ignore' });
  console.log('✓', name);
}

shoot('default', { title: 'Cheatsheets', subtitle: 'Concise, easy-to-reference cheatsheets for programming languages, tools, and CS fundamentals.', category: '', icon: '' });
for (const f of readdirSync(join(root, '_cheatsheets')).filter(f => f.endsWith('.md'))) {
  const fm = frontMatter(join(root, '_cheatsheets', f));
  shoot(basename(f, '.md'), { title: fm.title, subtitle: plain(fm.subtitle || ''), category: fm.category, icon: iconHtml(fm) });
}
rmSync(tmp, { recursive: true, force: true });
