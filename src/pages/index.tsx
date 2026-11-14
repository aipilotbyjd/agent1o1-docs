import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const I = ({d}: {d: string}) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={d} />
  </svg>
);

const cards = [
  {i: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z', t: 'Playbooks', d: 'Connect steps that run the same way every time, on a schedule or on an event.', to: '/docs/playbooks/overview'},
  {i: 'M12 8V4H8M4 12h16v8H4zM2 16h2M20 16h2M9 16v.01M15 16v.01', t: 'Agents', d: 'Give an AI a goal, knowledge and tools, and let it decide the steps.', to: '/docs/agents/overview'},
  {i: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 17l.7 1.8L21.5 19.5l-1.8.7L19 22l-.7-1.8-1.8-.7 1.8-.7L19 17z', t: 'Assistant', d: 'A personal AI for daily briefings, meeting prep and a smart inbox.', to: '/docs/assistant/assistant'},
  {i: 'M9 2v6M15 2v6M7 8h10v4a5 5 0 0 1-10 0V8zM12 17v5', t: 'Apps & Vault', d: 'Connect the tools you already use and keep every secret safe.', to: '/docs/apps-and-keys/apps'},
  {i: 'M4 4h16v16H4zM4 9h16M9 9v11', t: 'Pages & Blueprints', d: 'Share playbooks as web forms, or start fast from a ready-made template.', to: '/docs/pages-and-files/pages'},
  {i: 'M16 18l6-6-6-6M8 6l-6 6 6 6', t: 'Developers', d: 'Run playbooks and talk to agents from your own code with the API.', to: '/docs/developers/api-overview'},
];

const steps = [
  {t: 'Start from a Blueprint', d: 'Pick a ready-made template or a blank canvas.'},
  {t: 'Connect your apps', d: 'Sign in to Slack, Gmail, Sheets and more.'},
  {t: 'Run it', d: 'Press Run, or trigger it on a schedule or event.'},
  {t: 'Check the Trail', d: 'See every step of every run, with results.'},
];

const guides = [
  {t: 'Quickstart', d: 'Build and run your first playbook.', to: '/docs/welcome/quickstart', tag: 'Start here'},
  {t: 'Steps you can use', d: 'Every AI, data, logic and app step.', to: '/docs/playbooks/steps', tag: 'Playbooks'},
  {t: 'Starting playbooks automatically', d: 'Schedules, webhooks and app events.', to: '/docs/playbooks/triggers', tag: 'Playbooks'},
  {t: 'Create an agent', d: 'Goals, abilities, knowledge and autonomy.', to: '/docs/agents/overview', tag: 'Agents'},
  {t: 'Run a playbook from code', d: 'Call your playbooks over the API.', to: '/docs/developers/run-a-playbook', tag: 'API'},
  {t: 'Troubleshooting', d: 'Fix the most common problems fast.', to: '/docs/help/troubleshooting', tag: 'Help'},
];

function Flow() {
  return (
    <div className="a1-flow" aria-hidden>
      <div className="a1-flow-bar"><i /><i /><i /><span>New lead → CRM</span><b>● Running</b></div>
      <div className="a1-flow-body">
        <div className="a1-node n1"><small>Trigger</small>Form submitted</div>
        <div className="a1-link" />
        <div className="a1-node n2"><small>AI Score</small>Rate the lead 1–10</div>
        <div className="a1-link" />
        <div className="a1-node n3"><small>Filter</small>Score ≥ 8</div>
        <div className="a1-link" />
        <div className="a1-node n4"><small>Slack</small>Message #sales</div>
      </div>
      <div className="a1-flow-foot"><span>✓ 4 of 4 steps</span><span>2.4s</span><span>3 credits</span></div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Documentation" description="Guides for building AI automations and agents with Agent1o1.">
      <header className="a1-hero">
        <div className="a1-orb o1" /><div className="a1-orb o2" />
        <div className="a1-hero-inner">
          <Link to="/docs/welcome/quickstart" className="a1-badge"><b>New</b> Build your first playbook in 10 minutes →</Link>
          <h1>Automate work with <em>AI agents</em> and playbooks</h1>
          <p>Connect your apps, describe what should happen, and let Agent1o1 do it every time. No code required.</p>
          <div className="a1-actions">
            <Link className="a1-btn primary" to="/docs/welcome/quickstart">Get started</Link>
            <Link className="a1-btn" to="/docs/">Browse the docs</Link>
          </div>
          <Flow />
        </div>
      </header>
      <main>
        <div className="a1-stats">
          <div><b>10 min</b><span>to your first playbook</span></div>
          <div><b>60+</b><span>apps to connect</span></div>
          <div><b>15+</b><span>built-in AI steps</span></div>
          <div><b>REST API</b><span>and webhooks</span></div>
        </div>
        <section className="a1-section">
          <h2>Everything you need, in one place</h2>
          <p className="a1-sub">Pick what you want to build and dive in.</p>
          <div className="a1-grid">
            {cards.map((c) => (
              <Link key={c.t} className="a1-card" to={c.to}>
                <span className="a1-ico"><I d={c.i} /></span>
                <strong>{c.t}</strong>
                <span className="a1-desc">{c.d}</span>
                <span className="a1-more">Learn more →</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="a1-section">
          <h2>Up and running in four steps</h2>
          <p className="a1-sub">From sign-up to a working automation.</p>
          <div className="a1-steps">
            {steps.map((s) => (
              <div key={s.t} className="a1-step"><strong>{s.t}</strong><span>{s.d}</span></div>
            ))}
          </div>
        </section>
        <section className="a1-section">
          <h2>Popular guides</h2>
          <p className="a1-sub">The pages people read most.</p>
          <div className="a1-guides">
            {guides.map((g) => (
              <Link key={g.t} className="a1-guide" to={g.to}>
                <em>{g.tag}</em><strong>{g.t}</strong><span>{g.d}</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="a1-section">
          <div className="a1-cta">
            <h2>Ready to put busywork on autopilot?</h2>
            <p>Follow the quickstart and have your first automation running today.</p>
            <div className="a1-actions">
              <Link className="a1-btn primary" to="/docs/welcome/quickstart">Start the quickstart</Link>
              <Link className="a1-btn" to="/docs/help/faq">Read the FAQ</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
