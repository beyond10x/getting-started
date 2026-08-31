import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'beyond10x — Start here',
  tagline: 'From evidence-backed principles to governed action',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://beyond10x.github.io',
  baseUrl: '/getting-started/',
  organizationName: 'beyond10x',
  projectName: 'getting-started',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      {
        name: 'keywords',
        content:
          'beyond10x, engineering principles, agentic principles, entity runtime, engineering protocols, governed connectors, autonomous engineering, deterministic systems',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'beyond10x',
      hideOnScroll: true,
      logo: {
        alt: 'beyond10x layered mark',
        src: 'img/mark.svg',
      },
      items: [
        {to: '/#engineering-principles', label: 'Principles', position: 'left'},
        {to: '/#entity-runtime', label: 'Entity runtime', position: 'left'},
        {to: '/#engineering-protocols', label: 'Protocols', position: 'left'},
        {href: 'https://beyond10x.github.io/aep-service/', label: 'AEP Service', position: 'left'},
        {to: '/#connectors', label: 'Connectors', position: 'left'},
        {to: '/#boundaries', label: 'Boundaries', position: 'left'},
        {
          href: 'https://github.com/beyond10x',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Start at the bottom',
          items: [
            {
              label: 'Engineering Principles',
              href: 'https://beyond10x.github.io/agentic-principles/',
            },
            {label: 'Entity Runtime', href: 'https://beyond10x.github.io/entity-runtime/'},
            {
              label: 'Engineering Protocols',
              href: 'https://beyond10x.github.io/engineering-protocols/',
            },
            {label: 'AEP Service', href: 'https://beyond10x.github.io/aep-service/'},
            {label: 'Connectors overview', to: '/#connectors'},
          ],
        },
        {
          title: 'Source',
          items: [
            {label: 'This repository', href: 'https://github.com/beyond10x/getting-started'},
            {
              label: 'Agentic Principles',
              href: 'https://github.com/beyond10x/agentic-principles',
            },
            {label: 'Entity Runtime', href: 'https://github.com/beyond10x/entity-runtime'},
            {
              label: 'Engineering Protocols',
              href: 'https://github.com/beyond10x/engineering-protocols',
            },
            {label: 'AEP Service', href: 'https://github.com/beyond10x/aep-service'},
          ],
        },
        {
          title: 'Map',
          items: [
            {label: 'beyond10x Atlas', href: 'https://github.com/beyond10x/atlas'},
            {label: 'Current boundaries', to: '/#boundaries'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} beyond10x · Make the decision explicit.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['yaml', 'json', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
