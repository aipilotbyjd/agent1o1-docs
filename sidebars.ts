import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Welcome',
      className: 'a1-cat a1-cat-welcome',
      link: {type: 'generated-index', title: 'Welcome', description: 'Start here: your first playbook and the words used in the app.', slug: '/category/welcome'},
      collapsed: false,
      items: ['welcome/quickstart', 'welcome/key-terms'],
    },
    {
      type: 'category',
      label: 'Account and Team',
      className: 'a1-cat a1-cat-account',
      link: {type: 'generated-index', title: 'Account and Team', description: 'Sign in, secure your account, and work with your team.', slug: '/category/account'},
      items: [
        'account-and-team/sign-in-and-security',
        'account-and-team/team-and-roles',
        'account-and-team/notifications',
      ],
    },
    {
      type: 'category',
      label: 'Playbooks',
      className: 'a1-cat a1-cat-playbooks',
      link: {type: 'generated-index', title: 'Playbooks', description: 'Build automations that run the same way every time.', slug: '/category/playbooks'},
      items: [
        'playbooks/overview',
        'playbooks/building-playbooks',
        'playbooks/steps',
        'playbooks/flow-control',
        'playbooks/approvals',
        'playbooks/triggers',
        'playbooks/runs-and-trail',
        'playbooks/publishing',
        'playbooks/organising',
      ],
    },
    {
      type: 'category',
      label: 'Agents',
      className: 'a1-cat a1-cat-agents',
      link: {type: 'generated-index', title: 'Agents', description: 'Create AI agents that decide the steps toward a goal.', slug: '/category/agents'},
      items: [
        'agents/overview',
        'agents/abilities',
        'agents/autonomy',
        'agents/knowledge',
        'agents/skills',
        'agents/insights',
      ],
    },
    {
      type: 'category',
      label: 'Assistant',
      className: 'a1-cat a1-cat-assistant',
      link: {type: 'generated-index', title: 'Assistant', description: 'Your personal AI for briefings, meeting prep and your inbox.', slug: '/category/assistant'},
      items: ['assistant/assistant'],
    },
    {
      type: 'category',
      label: 'Apps, Vault and Keys',
      className: 'a1-cat a1-cat-apps',
      link: {type: 'generated-index', title: 'Apps, Vault and Keys', description: 'Connect your apps and keep secrets and keys safe.', slug: '/category/apps'},
      items: [
        'apps-and-keys/apps',
        'apps-and-keys/vault',
        'apps-and-keys/ai-providers',
      ],
    },
    {
      type: 'category',
      label: 'Pages, Blueprints and Files',
      className: 'a1-cat a1-cat-pages',
      link: {type: 'generated-index', title: 'Pages, Blueprints and Files', description: 'Share playbooks as pages, reuse templates, and manage files.', slug: '/category/pages'},
      items: [
        'pages-and-files/pages',
        'pages-and-files/blueprints',
        'pages-and-files/artifacts',
      ],
    },
    {
      type: 'category',
      label: 'Plans and Billing',
      className: 'a1-cat a1-cat-billing',
      link: {type: 'generated-index', title: 'Plans and Billing', description: 'Plans, credits, usage and referrals.', slug: '/category/billing'},
      items: ['billing/plans', 'billing/credits', 'billing/referrals'],
    },
    {
      type: 'category',
      label: 'For Developers',
      className: 'a1-cat a1-cat-developers',
      link: {type: 'generated-index', title: 'For Developers', description: 'Run playbooks and talk to agents from your own code.', slug: '/category/developers'},
      items: [
        'developers/api-overview',
        'developers/run-a-playbook',
        'developers/talk-to-an-agent',
        'developers/webhooks',
        'developers/errors',
      ],
    },
    {
      type: 'category',
      label: 'Help',
      className: 'a1-cat a1-cat-help',
      link: {type: 'generated-index', title: 'Help', description: 'Fix common problems and find quick answers.', slug: '/category/help'},
      items: ['help/troubleshooting', 'help/faq'],
    },
  ],
};

export default sidebars;
