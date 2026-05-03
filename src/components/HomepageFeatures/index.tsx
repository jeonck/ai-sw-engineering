import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI는 증폭기다',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        AI는 조직의 강점과 약점을 증폭합니다. 공학 기반이 탄탄한 팀은 AI로 더 큰 효과를 얻고,
        기반이 약한 팀은 더 빠르게 부채를 쌓습니다.
      </>
    ),
  },
  {
    title: '시스템 설계가 핵심이다',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        AI는 코드를 빠르게 만들지만, 서비스 경계·데이터 일관성·장애 격리는
        여전히 인간 엔지니어의 시스템적 판단이 필요합니다.
      </>
    ),
  },
  {
    title: '문서와 맥락이 생산성이다',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        잘 구조화된 코드, ADR, 설계 문서는 AI의 컨텍스트이자 실행 가이드입니다.
        좋은 문서가 AI 생산성을 결정합니다.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
