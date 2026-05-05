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
      label: '📐 설계 원칙',
      collapsed: false,
      items: [
        'laws/solid-principles',        // OOP 필수, 가장 광범위하게 사용
        'laws/dry-principle',           // 매일 적용하는 기본 원칙
        'laws/kiss-principle',          // 단순성의 핵심 원칙
        'laws/yagni',                   // 과잉 설계 방지, 애자일 핵심
        'laws/law-of-demeter',          // 결합도 감소, 실무 직결
        'laws/postels-law',             // API 설계 필수
        'laws/principle-of-least-astonishment', // UX·API 설계 원칙
        'laws/gilbs-law',               // 측정 기반 관리
      ],
    },
    {
      type: 'category',
      label: '🏗️ 아키텍처 & 복잡성',
      collapsed: false,
      items: [
        'laws/conways-law',             // 조직-아키텍처 관계, 매우 광범위하게 인용
        'laws/technical-debt',          // 모든 개발자가 직면하는 현실
        'laws/law-of-leaky-abstractions', // 추상화 한계, 실무 직결
        'laws/galls-law',               // 복잡 시스템 설계 핵심
        'laws/hyrums-law',              // API·라이브러리 설계 필수
        'laws/teslers-law',             // UX 복잡성 관리
        'laws/second-system-effect',    // 두 번째 시스템 과잉 설계 경계
        'laws/lehmans-laws',            // 소프트웨어 진화 법칙
        'laws/zawinskis-law',           // 기능 팽창 경계
      ],
    },
    {
      type: 'category',
      label: '⚙️ 개발 프로세스',
      collapsed: false,
      items: [
        'laws/brooks-law',              // 프로젝트 관리 최고 인용 법칙
        'laws/premature-optimization',  // Knuth 인용구, 일상 개발 경고
        'laws/goodharts-law',           // KPI·지표 관리 핵심
        'laws/parkinsons-law',          // 일정·자원 관리 직결
        'laws/hofstadters-law',         // 일정 추정 현실
        'laws/ninety-ninety-rule',      // 완료 기준 현실
        'laws/murphys-law',             // 장애·리스크 대비 보편 원칙
        'laws/law-of-unintended-consequences', // 변경 영향 분석 필수
      ],
    },
    {
      type: 'category',
      label: '🧪 품질 & 테스팅',
      collapsed: false,
      items: [
        'laws/testing-pyramid',         // 테스트 전략 표준
        'laws/boy-scout-rule',          // 코드 품질 일상 원칙
        'laws/broken-windows-theory',   // 기술 부채 전파 방지
        'laws/pesticide-paradox',       // 테스트 다양성 필수
        'laws/linuss-law',              // 오픈소스·코드 리뷰 근거
        'laws/kernighans-law',          // 코드 단순성 경고
        'laws/cunninghams-law',         // 집단 지성 활용 전략
      ],
    },
    {
      type: 'category',
      label: '🌐 분산 시스템',
      collapsed: false,
      items: [
        'laws/cap-theorem',             // 분산 DB 설계 필수
        'laws/fallacies-of-distributed-computing', // 분산 시스템 설계 경고
        'laws/amdahls-law',             // 병렬화 성능 한계
        'laws/gustafsons-law',          // 병렬 확장 전략
        'laws/metcalfes-law',           // 네트워크 효과 전략
      ],
    },
    {
      type: 'category',
      label: '👥 조직 & 팀',
      collapsed: false,
      items: [
        'laws/dunbars-number',          // 팀 규모 설계 근거
        'laws/bus-factor',              // 지식 리스크 관리 필수
        'laws/ringelmann-effect',       // 팀 생산성 관리
        'laws/prices-law',              // 핵심 인재 집중 전략
        'laws/peter-principle',         // 승진·평가 제도 설계
        'laws/putts-law',               // 기술-관리 역할 분리
        'laws/dilbert-principle',       // 조직 역설 인식
      ],
    },
    {
      type: 'category',
      label: '🧠 인지 & 사고',
      collapsed: false,
      items: [
        'laws/occams-razor',            // 가장 보편적으로 알려진 사고 원칙
        'laws/dunning-kruger-effect',   // 자기 평가·채용·교육 핵심
        'laws/confirmation-bias',       // 의사결정 편향 인식 필수
        'laws/first-principles-thinking', // 혁신적 문제 해결 도구
        'laws/sunk-cost-fallacy',       // 프로젝트 킬 결정에 직결
        'laws/hanlons-razor',           // 팀 갈등 해소 원칙
        'laws/inversion-thinking',      // 역방향 문제 해결
        'laws/map-is-not-the-territory', // 모델·문서 한계 인식
      ],
    },
    {
      type: 'category',
      label: '📈 기술 트렌드 & 경제',
      collapsed: false,
      items: [
        'laws/pareto-principle',        // 80/20, 가장 보편적 활용
        'laws/hype-cycle-amaras-law',   // 기술 도입 판단 필수
        'laws/lindy-effect',            // 기술 선택·지속성 판단
        'laws/sturgeons-law',           // 품질 기준 현실 인식
      ],
    },
  ],
};

export default sidebars;
