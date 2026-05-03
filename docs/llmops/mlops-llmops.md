---
sidebar_position: 2
title: MLOps와 LLMOps 실천
---

# MLOps와 LLMOps 실천

## MLOps vs LLMOps

| 구분 | MLOps | LLMOps |
|------|-------|--------|
| 모델 유형 | 전통 ML 모델 | 대규모 언어 모델 |
| 학습 비용 | 중간 | 매우 높음 (직접 학습 시) |
| 주요 활용 | 파인튜닝, 프롬프트 엔지니어링 | 주로 프롬프트 엔지니어링 |
| 평가 방법 | 정량 지표 (accuracy, F1) | 정성+정량 (evals, human feedback) |
| 버전 관리 | 모델 가중치, 데이터셋 | 프롬프트, 설정, 모델 버전 |

## 프롬프트 엔지니어링의 공학화

프롬프트는 더 이상 임시방편이 아닙니다. **소프트웨어 아티팩트**로 관리합니다.

### 프롬프트 버전 관리

```
prompts/
├── system/
│   ├── v1.0.0_2024-01-01.txt
│   ├── v1.1.0_2024-03-15.txt
│   └── current.txt → v1.1.0_2024-03-15.txt
├── user-templates/
│   ├── summarize.txt
│   └── extract.txt
└── CHANGELOG.md
```

### 프롬프트 테스트 (Evals)

```python
# 예시: 프롬프트 평가 파이프라인
def eval_prompt(prompt_version, test_cases):
    results = []
    for case in test_cases:
        response = llm.complete(
            system=load_prompt(prompt_version),
            user=case.input
        )
        score = evaluator.score(response, case.expected)
        results.append(score)
    return aggregate_scores(results)
```

## CI/CD for AI

AI 모델을 포함한 시스템의 지속적 통합/배포:

```yaml
# AI 시스템 CI 파이프라인 예시
stages:
  - code-quality:    린팅, 타입 체크, 단위 테스트
  - prompt-evals:    프롬프트 품질 평가
  - integration:     LLM API 통합 테스트
  - load-test:       레이턴시 및 처리량 테스트
  - deploy-staging:  스테이징 환경 배포
  - smoke-test:      기본 기능 동작 확인
  - deploy-prod:     프로덕션 배포
  - monitor:         응답 품질 모니터링
```

## RAG (Retrieval-Augmented Generation) 운영

RAG 파이프라인에는 추가적인 운영 고려사항이 있습니다.

- 벡터 DB 인덱스 업데이트 전략
- 청킹(chunking) 전략 최적화
- 검색 품질 평가 (recall, precision)
- 컨텍스트 윈도우 최적화

## 장애 대응 패턴

LLM 의존 시스템의 장애 유형과 대응:

| 장애 유형 | 원인 | 대응 |
|---------|------|------|
| API 타임아웃 | 모델 서버 과부하 | 재시도 로직, 지수 백오프 |
| 품질 저하 | 프롬프트 드리프트 | 자동 품질 모니터링, 알림 |
| 비용 폭증 | 토큰 사용량 급증 | 토큰 예산 제한, 알림 |
| Hallucination | 모델 특성 | RAG, 출처 검증, 사실 확인 |
