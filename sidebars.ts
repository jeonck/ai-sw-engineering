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
    'laws/intro',
    {
      type: 'category',
      label: '🌐 분산 시스템',
      collapsed: false,
      items: [
        'laws/cap-theorem',
        'laws/fallacies-of-distributed-computing',
        'laws/amdahls-law',
        'laws/gustafsons-law',
        'laws/metcalfes-law',
      ],
    },
    {
      type: 'category',
      label: '📐 설계 원칙',
      collapsed: false,
      items: [
        'laws/solid-principles',
        'laws/dry-principle',
        'laws/kiss-principle',
        'laws/yagni',
        'laws/law-of-demeter',
        'laws/postels-law',
        'laws/principle-of-least-astonishment',
        'laws/gilbs-law',
      ],
    },
    {
      type: 'category',
      label: '🏗️ 아키텍처 & 복잡성',
      collapsed: false,
      items: [
        'laws/conways-law',
        'laws/galls-law',
        'laws/hyrums-law',
        'laws/law-of-leaky-abstractions',
        'laws/teslers-law',
        'laws/zawinskis-law',
        'laws/second-system-effect',
        'laws/technical-debt',
        'laws/lehmans-laws',
      ],
    },
    {
      type: 'category',
      label: '⚙️ 개발 프로세스',
      collapsed: false,
      items: [
        'laws/brooks-law',
        'laws/hofstadters-law',
        'laws/ninety-ninety-rule',
        'laws/parkinsons-law',
        'laws/premature-optimization',
        'laws/law-of-unintended-consequences',
        'laws/murphys-law',
        'laws/goodharts-law',
      ],
    },
    {
      type: 'category',
      label: '🧪 품질 & 테스팅',
      collapsed: false,
      items: [
        'laws/boy-scout-rule',
        'laws/broken-windows-theory',
        'laws/kernighans-law',
        'laws/linuss-law',
        'laws/pesticide-paradox',
        'laws/testing-pyramid',
        'laws/cunninghams-law',
      ],
    },
    {
      type: 'category',
      label: '👥 조직 & 팀',
      collapsed: false,
      items: [
        'laws/dunbars-number',
        'laws/ringelmann-effect',
        'laws/bus-factor',
        'laws/prices-law',
        'laws/putts-law',
        'laws/peter-principle',
        'laws/dilbert-principle',
      ],
    },
    {
      type: 'category',
      label: '🧠 인지 & 사고',
      collapsed: false,
      items: [
        'laws/confirmation-bias',
        'laws/dunning-kruger-effect',
        'laws/sunk-cost-fallacy',
        'laws/hanlons-razor',
        'laws/occams-razor',
        'laws/first-principles-thinking',
        'laws/inversion-thinking',
        'laws/map-is-not-the-territory',
      ],
    },
    {
      type: 'category',
      label: '📈 기술 트렌드 & 경제',
      collapsed: false,
      items: [
        'laws/hype-cycle-amaras-law',
        'laws/lindy-effect',
        'laws/pareto-principle',
        'laws/sturgeons-law',
      ],
    },
  ],
};

export default sidebars;
