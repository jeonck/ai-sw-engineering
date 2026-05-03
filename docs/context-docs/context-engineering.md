---
sidebar_position: 2
title: Context Engineering
---

# Context Engineering

## 개념

Context Engineering은 Martin Fowler가 제시한 개념으로, AI 모델이 좋은 결과를 내도록 **적절한 컨텍스트를 설계하고 제공하는 기술**입니다.

단순히 "프롬프트를 잘 쓰는 것"을 넘어, 코드 구조·문서·규칙·예시 등 **모든 컨텍스트 소스를 설계**하는 공학입니다.

## 좋은 컨텍스트의 구성 요소

### 1. 코드 구조 (Structure)

AI는 코드 구조에서 패턴을 추론합니다.

```
좋은 구조 예시:
src/
├── domain/          ← 비즈니스 규칙 (AI가 변경하면 안 됨)
├── usecases/        ← 유스케이스 (AI가 구현하는 영역)
├── infrastructure/  ← 외부 연동 (패턴 유지 중요)
└── api/             ← 인터페이스 (AI가 생성하는 영역)
```

### 2. 규칙 문서 (Rules)

명시적 규칙은 AI의 일관성을 높입니다.

```markdown
# CLAUDE.md 예시

## 코딩 규칙
- 모든 비동기 함수는 async/await 사용 (Promise.then 금지)
- 에러는 반드시 도메인 에러 클래스로 래핑
- 외부 API 호출은 반드시 infrastructure 레이어에서

## 금지 패턴
- 도메인 레이어에서 직접 DB 접근
- 유스케이스에서 HTTP 상태 코드 참조
```

### 3. 예시 (Examples)

기존 코드의 좋은 예시를 명시적으로 가리킵니다.

```markdown
## 참고 예시
- 새 유스케이스 작성: src/usecases/CreateUser.ts 참고
- 에러 처리 패턴: src/usecases/UpdateUser.ts 참고
- 통합 테스트 작성: tests/integration/user.test.ts 참고
```

### 4. 지침 (Instructions)

AI 에이전트가 작업을 어떻게 수행할지 명시합니다.

```markdown
## 작업 방식
1. 변경 전 관련 테스트를 먼저 확인
2. 기존 패턴을 참고해 일관성 유지
3. 변경 범위 외 파일 수정 최소화
4. PR 크기는 200줄 이하로 유지
```

## 컨텍스트 품질이 AI 품질을 결정한다

```
낮은 품질 컨텍스트  →  AI가 추측에 의존  →  일관성 없는 코드
높은 품질 컨텍스트  →  AI가 의도 파악  →  일관성 있는 코드
```

## 컨텍스트 엔지니어링 실천

1. **점진적 개선**: CLAUDE.md를 한 번에 완벽하게 쓰려 하지 말고, AI 실수가 발생할 때마다 규칙 추가
2. **팀 공유**: 컨텍스트 문서는 팀 지식으로 관리 (AI만을 위한 게 아님)
3. **버전 관리**: 컨텍스트 문서도 코드처럼 git으로 관리
4. **효과 측정**: AI 생성 코드 리뷰 지적 사항 유형을 추적해 컨텍스트 개선
