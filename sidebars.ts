import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  overviewSidebar: [
    {
      type: 'category',
      label: '개요',
      collapsed: false,
      items: [
        'overview/intro',
        'overview/why-sw-engineering',
        'overview/five-pillars',
      ],
    },
  ],

  aiAmplifierSidebar: [
    {
      type: 'category',
      label: 'AI × 공학',
      collapsed: false,
      items: [
        'ai-amplifier/intro',
        'ai-amplifier/dora-2025',
        'ai-amplifier/engineering-foundation',
      ],
    },
  ],

  systemDesignSidebar: [
    {
      type: 'category',
      label: '시스템 설계',
      collapsed: false,
      items: [
        'system-design/intro',
        'system-design/architecture',
        'system-design/local-vs-system',
      ],
    },
  ],

  qualitySidebar: [
    {
      type: 'category',
      label: '품질과 검증',
      collapsed: false,
      items: [
        'quality/intro',
        'quality/ai-code-review',
        'quality/tdd-static-analysis',
      ],
    },
  ],

  contextDocsSidebar: [
    {
      type: 'category',
      label: '컨텍스트와 문서',
      collapsed: false,
      items: [
        'context-docs/intro',
        'context-docs/context-engineering',
        'context-docs/adr-documentation',
      ],
    },
  ],

  developerRoleSidebar: [
    {
      type: 'category',
      label: '개발자 역할',
      collapsed: false,
      items: [
        'developer-role/intro',
        'developer-role/designer-validator',
        'developer-role/supervised-agents',
      ],
    },
  ],

  llmopsSidebar: [
    {
      type: 'category',
      label: 'LLMOps & 보안',
      collapsed: false,
      items: [
        'llmops/intro',
        'llmops/mlops-llmops',
        'llmops/security-ethics',
        'llmops/cost-optimization',
      ],
    },
  ],

  lawsSidebar: [
    {
      type: 'category',
      label: 'SW공학의 법칙들',
      collapsed: false,
      items: [
        'laws/intro',
      ],
    },
  ],
};

export default sidebars;
