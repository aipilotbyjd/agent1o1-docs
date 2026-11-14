// Generates AI-friendly versions of the docs at build time:
//   static/llms.txt          index of every page (https://llmstxt.org)
//   static/llms-full.txt     every page in one file
//   static/md/<id>.md        a clean Markdown copy of each page (used by the "Copy page" button)
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.join(root, 'docs');
const config = fs.readFileSync(path.join(root, 'docusaurus.config.ts'), 'utf8');
const SITE = (process.env.DOCS_URL || config.match(/^\s*url:\s*'([^']+)'/m)?.[1] || '').replace(/\/$/, '');

const strip = (s) => s.replace(/^\d+-/, '');
const idOf = (rel) => rel.replace(/\.mdx?$/, '').split('/').map(strip).join('/');
const pageUrl = (id) => (id === 'intro' ? `${SITE}/docs/` : `${SITE}/docs/${id}`);

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : /\.mdx?$/.test(e.name) ? [p] : [];
  });
}

function parse(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const fm = {};
  if (m) for (const line of m[1].split('\n')) { const k = line.match(/^(\w+):\s*(.*)$/); if (k) fm[k[1]] = k[2].replace(/^['"]|['"]$/g, ''); }
  return {fm, body: m ? raw.slice(m[0].length) : raw};
}

function convert(body, relFile) {
  const dir = path.posix.dirname(relFile);
  let inFence = false, adm = null;
  const out = [];
  for (let line of body.split('\n')) {
    if (/^```/.test(line)) { inFence = !inFence; out.push(line); continue; }
    if (!inFence) {
      const open = line.match(/^:::(\w+)(?:\[(.*)\])?\s*$/);
      if (open) { adm = true; const label = open[1][0].toUpperCase() + open[1].slice(1); out.push(`> **${label}${open[2] ? ': ' + open[2] : ''}**`); continue; }
      if (adm && /^:::\s*$/.test(line)) { adm = null; out.push(''); continue; }
      if (/^\s*<\/?[A-Za-z]/.test(line)) continue; // drop layout-only JSX
      if (adm) line = '> ' + line;
      line = line.replace(/\]\(([^)\s]+?)\.md(#[^)]*)?\)/g, (_, p, hash = '') => {
        const abs = path.posix.normalize(path.posix.join(dir, p + '.md'));
        return `](${pageUrl(idOf(abs))}${hash})`;
      });
    }
    out.push(line);
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

// Order and grouping follow the sidebar.
const sidebar = fs.readFileSync(path.join(root, 'sidebars.ts'), 'utf8');
const groups = [];
let current = {label: 'Start', ids: []};
for (const line of sidebar.split('\n')) {
  const label = line.match(/^\s*label:\s*'([^']+)'/);
  if (label) { current = {label: label[1], ids: []}; groups.push(current); continue; }
  for (const m of line.matchAll(/'([a-z0-9-]+(?:\/[a-z0-9-]+)*)'/g)) if (m[1] !== 'docsSidebar') current.ids.push(m[1]);
}
const first = groups.length ? [] : null;
const pages = new Map();
for (const f of walk(docsDir)) {
  const rel = path.relative(docsDir, f).split(path.sep).join('/');
  const {fm, body} = parse(f);
  pages.set(idOf(rel), {id: idOf(rel), rel, title: fm.title || idOf(rel), description: fm.description || '', md: convert(body, rel)});
}

const outDir = path.join(root, 'static', 'md');
fs.rmSync(outDir, {recursive: true, force: true});
const full = [];
const index = [`# Agent1o1 Documentation`, '', `> Guides for building AI automations (playbooks) and agents with Agent1o1, connecting apps, and using the API. Each link below is a Markdown version of the page.`, ''];

const write = (p) => {
  const file = path.join(outDir, `${p.id}.md`);
  fs.mkdirSync(path.dirname(file), {recursive: true});
  const content = `# ${p.title}\n\n${p.description ? `> ${p.description}\n\n` : ''}Source: ${pageUrl(p.id)}\n\n${p.md.replace(/^# .*\n+/, '')}\n`;
  fs.writeFileSync(file, content);
  full.push(content);
};

const seen = new Set();
const intro = pages.get('intro');
if (intro) { write(intro); seen.add('intro'); index.push('## Start', '', `- [${intro.title}](${SITE}/md/intro.md): ${intro.description}`, ''); }
for (const g of groups) {
  const items = g.ids.filter((id) => pages.has(id) && !seen.has(id));
  if (!items.length) continue;
  index.push(`## ${g.label}`, '');
  for (const id of items) { const p = pages.get(id); write(p); seen.add(id); index.push(`- [${p.title}](${SITE}/md/${id}.md): ${p.description}`); }
  index.push('');
}
for (const p of pages.values()) if (!seen.has(p.id)) { write(p); seen.add(p.id); }

fs.writeFileSync(path.join(root, 'static', 'llms.txt'), index.join('\n').trim() + '\n');
fs.writeFileSync(path.join(root, 'static', 'llms-full.txt'), full.join('\n---\n\n'));
console.log(`[llm-docs] ${seen.size} pages -> static/md, llms.txt, llms-full.txt (site: ${SITE})`);
