import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const GITHUB_USERNAME = 'jeonck';
const REPO_NAME = 'ai-sw-engineering';
const SITE_TITLE = 'AI시대의 SW공학';
const SITE_TAGLINE = 'AI가 만든 코드를 설계하고, 검증하고, 운영하는 기술';

const config: Config = {
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  title: SITE_TITLE,
  tagline: SITE_TAGLINE,
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: `https://${GITHUB_USERNAME}.github.io`,
  baseUrl: `/${REPO_NAME}/`,
  organizationName: GITHUB_USERNAME,
  projectName: REPO_NAME,
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: `⚙️ ${SITE_TITLE}`,
      items: [
        { type: 'docSidebar', sidebarId: 'overviewSidebar',      position: 'left', label: '개요' },
        { type: 'docSidebar', sidebarId: 'aiAmplifierSidebar',   position: 'left', label: 'AI × 공학' },
        { type: 'docSidebar', sidebarId: 'systemDesignSidebar',  position: 'left', label: '시스템 설계' },
        { type: 'docSidebar', sidebarId: 'qualitySidebar',       position: 'left', label: '품질과 검증' },
        { type: 'docSidebar', sidebarId: 'contextDocsSidebar',   position: 'left', label: '컨텍스트와 문서' },
        { type: 'docSidebar', sidebarId: 'developerRoleSidebar', position: 'left', label: '개발자 역할' },
        { type: 'docSidebar', sidebarId: 'llmopsSidebar',        position: 'left', label: 'LLMOps & 보안' },
        { type: 'docSidebar', sidebarId: 'lawsSidebar',          position: 'left', label: 'SW공학의 법칙들' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} ${SITE_TITLE}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
