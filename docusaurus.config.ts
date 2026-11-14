import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Local search: enabled automatically once `yarn add @easyops-cn/docusaurus-search-local` is run.
let searchTheme: any[] = [];
try {
  require.resolve('@easyops-cn/docusaurus-search-local');
  searchTheme = [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: '/docs',
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ];
} catch {}

const config: Config = {
  themes: searchTheme,
  title: 'Agent1o1 Docs',
  tagline: 'Help and guides for Agent1o1',
  favicon: 'img/favicon.ico',

  headTags: [
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'}},
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Sans:wght@500;600;700&display=swap',
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.agent1o1.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'agent1o1', // Usually your GitHub org/user name.
  projectName: 'agent1o1-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw'}},

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.png',
    metadata: [
      {name: 'keywords', content: 'Agent1o1, AI automation, AI agents, playbooks, workflow automation, no-code, documentation, API'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'theme-color', content: '#66ff4c'},
    ],
    announcementBar: {
      id: 'docs-2026-11-security-ai-steps',
      content:
        'New: the <a href="/docs/playbooks/ai-steps">AI steps reference</a> and <a href="/docs/account-and-team/security-and-privacy">Security and privacy</a> pages. See <a href="/docs/help/whats-new">What&apos;s new</a>.',
      backgroundColor: '#66ff4c',
      textColor: '#0b1a06',
      isCloseable: true,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Agent1o1 Docs',
      logo: {
        alt: 'Agent1o1 Logo',
        src: 'img/a-logo-light-256.png',
        srcDark: 'img/a-logo-dark-256.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs'},
        {to: '/docs/playbooks/overview', label: 'Playbooks', position: 'left'},
        {to: '/docs/agents/overview', label: 'Agents', position: 'left'},
        {to: '/docs/developers/api-overview', label: 'API', position: 'left'},
        {to: '/docs/welcome/quickstart', label: 'Get started', position: 'right', className: 'button-cta'},
      ],
    },
    footer: {
      style: 'dark',
      logo: {alt: 'Agent1o1', src: 'img/a-logo-light-256.png', srcDark: 'img/a-logo-dark-256.png', href: '/', width: 40, height: 40},
      links: [
        {title: 'Learn', items: [
          {label: 'Quickstart', to: '/docs/welcome/quickstart'},
          {label: 'Key terms', to: '/docs/welcome/key-terms'},
          {label: 'Playbooks', to: '/docs/playbooks/overview'},
          {label: 'Agents', to: '/docs/agents/overview'},
        ]},
        {title: 'Build', items: [
          {label: 'Apps', to: '/docs/apps-and-keys/apps'},
          {label: 'API overview', to: '/docs/developers/api-overview'},
          {label: 'Webhooks', to: '/docs/developers/webhooks'},
        ]},
        {title: 'Help', items: [
          {label: 'Troubleshooting', to: '/docs/help/troubleshooting'},
          {label: 'FAQ', to: '/docs/help/faq'},
          {label: 'Plans', to: '/docs/billing/plans'},
        ]},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Agent1o1. All rights reserved.`,
    },
    docs: {sidebar: {hideable: true, autoCollapseCategories: true}},
    tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 3},
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'json', 'php', 'yaml', 'javascript', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
