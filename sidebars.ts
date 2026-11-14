import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Welcome',
      collapsed: false,
      items: ['welcome/quickstart', 'welcome/key-terms'],
    },
    {
      type: 'category',
      label: 'Account and Team',
      items: [
        'account-and-team/sign-in-and-security',
        'account-and-team/team-and-roles',
        'account-and-team/notifications',
      ],
    },
    {
      type: 'category',
      label: 'Playbooks',
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
      items: ['assistant/assistant'],
    },
    {
      type: 'category',
      label: 'Apps, Vault and Keys',
      items: [
        'apps-and-keys/apps',
        'apps-and-keys/vault',
        'apps-and-keys/ai-providers',
      ],
    },
    {
      type: 'category',
      label: 'Pages, Blueprints and Files',
      items: [
        'pages-and-files/pages',
        'pages-and-files/blueprints',
        'pages-and-files/artifacts',
      ],
    },
    {
      type: 'category',
      label: 'Plans and Billing',
      items: ['billing/plans', 'billing/credits', 'billing/referrals'],
    },
    {
      type: 'category',
      label: 'For Developers',
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
      items: ['help/troubleshooting', 'help/faq'],
    },
  ],
};

export default sidebars;
