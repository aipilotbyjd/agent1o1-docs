import {useState, type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Icon = ({d}: {d: string}) => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={d} />
  </svg>
);

export default function CopyPage({id}: {id: string}): ReactNode {
  const [state, setState] = useState<'idle' | 'copied' | 'error'>('idle');
  const mdPath = useBaseUrl(`/md/${id}.md`);
  const {siteConfig} = useDocusaurusContext();

  const pageUrl = () => (typeof window === 'undefined' ? siteConfig.url : window.location.href.split('#')[0]);
  const prompt = () => encodeURIComponent(`Read ${pageUrl()} and help me with it. I may ask questions about it.`);

  async function copy() {
    try {
      const res = await fetch(mdPath);
      if (!res.ok) throw new Error(String(res.status));
      await navigator.clipboard.writeText(await res.text());
      setState('copied');
    } catch {
      setState('error');
    }
    setTimeout(() => setState('idle'), 2200);
  }

  return (
    <div className="a1-copy">
      <button type="button" className="a1-copy-btn" onClick={copy} aria-live="polite">
        <Icon d={state === 'copied' ? 'M20 6 9 17l-5-5' : 'M9 9h11v11H9zM5 15H4V4h11v1'} />
        {state === 'copied' ? 'Copied' : state === 'error' ? 'Copy failed' : 'Copy page'}
      </button>
      <details className="a1-copy-menu">
        <summary aria-label="More ways to use this page">
          <Icon d="M6 9l6 6 6-6" />
        </summary>
        <div className="a1-copy-pop" role="menu">
          <a role="menuitem" href={mdPath} target="_blank" rel="noopener noreferrer">
            <strong>View as Markdown</strong>
            <span>Open the plain-text version of this page</span>
          </a>
          <a role="menuitem" href={`https://claude.ai/new?q=${prompt()}`} target="_blank" rel="noopener noreferrer">
            <strong>Open in Claude</strong>
            <span>Ask Claude about this page</span>
          </a>
          <a role="menuitem" href={`https://chatgpt.com/?q=${prompt()}`} target="_blank" rel="noopener noreferrer">
            <strong>Open in ChatGPT</strong>
            <span>Ask ChatGPT about this page</span>
          </a>
        </div>
      </details>
    </div>
  );
}
