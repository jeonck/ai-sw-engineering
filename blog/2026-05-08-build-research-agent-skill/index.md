---
slug: build-research-agent-skill
title: "Claude Code 스킬 만들기 — 8명 AI 에이전트 리서치팀 실전 구축"
authors: [jeonck]
tags: [ai-agent, skill, research, productivity]
---

업무용 리서치를 40분에서 10분으로 단축한 **8명 AI 에이전트팀**을 Claude Code 스킬로 직접 만드는 방법을 단계별로 정리한다. 이 글을 따라 하면 동일한 스킬을 30분 안에 로컬에서 사용할 수 있다.

{/* truncate */}

## 무엇을 만드는가

Claude Code에서 "~~ 리서치해줘"라고 입력하면 자동으로 8명의 가상 전문가가 순서대로 작동해 검증된 마크다운 보고서를 출력하는 **재사용 가능한 스킬**을 만든다.

```
오케스트레이터 (1명)
  └─ 리서처 3명 (시장/기업/기술) ← 웹 검색 포함
       └─ 팩트체커 2명 (숫자 검증/출처 검증)
            └─ 구성작가 (1명) ← 피라미드 원칙 보고서
                 └─ 게이트키퍼 (1명) ← 로지컬씽킹 최종 검토
```

---

## 사전 준비

Claude Code CLI가 설치되어 있어야 한다.

```bash
# 설치 확인
claude --version
```

스킬 디렉토리 경로를 확인한다. 기본값은 `~/.claude/skills/`다.

```bash
ls ~/.claude/skills/
```

`skill-creator` 디렉토리가 보이면 준비 완료다. 없다면 Claude Code 설정에서 스킬 디렉토리를 먼저 구성해야 한다.

---

## Step 1 — 스킬 초기화

`skill-creator`에 포함된 `init_skill.py` 스크립트로 디렉토리 구조를 자동 생성한다.

```bash
python3 ~/.claude/skills/skill-creator/scripts/init_skill.py \
  research-agent-team \
  --path ~/.claude/skills/
```

성공하면 아래처럼 출력된다.

```
✅ Created skill directory: ~/.claude/skills/research-agent-team
✅ Created SKILL.md
✅ Created scripts/example.py
✅ Created references/api_reference.md
✅ Created assets/example_asset.txt
```

예시 파일은 필요 없으므로 바로 정리한다.

```bash
rm ~/.claude/skills/research-agent-team/scripts/example.py
rm ~/.claude/skills/research-agent-team/references/api_reference.md
rm ~/.claude/skills/research-agent-team/assets/example_asset.txt
rmdir ~/.claude/skills/research-agent-team/scripts
rmdir ~/.claude/skills/research-agent-team/assets
```

최종 디렉토리 구조:

```
research-agent-team/
├── SKILL.md
└── references/
    └── (비어 있음, 다음 단계에서 채운다)
```

---

## Step 2 — SKILL.md 작성

`SKILL.md`는 스킬의 핵심이다. Claude가 언제 이 스킬을 쓸지(`description`), 어떻게 실행할지(본문)를 담는다.

`~/.claude/skills/research-agent-team/SKILL.md`를 다음 내용으로 작성한다.

```markdown
---
name: research-agent-team
description: This skill should be used when the user requests deep research on a
  topic, asks for a structured analysis report, or wants comprehensive investigation
  with fact-checking. Triggers when researching companies, industries, markets, or
  technologies; creating business intelligence reports; performing competitive analysis;
  verifying statistics with credible sources; or producing consulting-style reports.
  Applies MECE, Logical Thinking, and Pyramid Principle frameworks through an 8-agent
  virtual team pipeline: Orchestrator → 3 Researchers → 2 Fact-Checkers → Writer →
  Gatekeeper. Outputs a structured Markdown report with verified sources.
---

# 8-Agent Research Team

## Overview

Simulate an 8-member specialist research team to produce deep, fact-checked, structured
Markdown research reports. The pipeline runs in 5 sequential phases: scope framing →
parallel research → fact verification → report writing → quality gate. Load
`references/agent-personas.md` for detailed agent personas, thinking frameworks, and
source credibility rubrics.

## Pipeline

### PHASE 0 — Orchestrator: Frame the Problem

Perform MECE decomposition of the research topic:
- Define 3–5 core questions the report must answer
- Assign each to the correct research axis (Market / Finance / Technology)
- Set credibility standards: prefer primary sources over secondary

Output a structured brief with 3 axes and core questions, then announce:
> "PHASE 0 완료 — 리서처 3명 병렬 조사 시작"

### PHASE 1 — 3 Researchers: Parallel Investigation

Run three researchers in sequence. Each uses WebSearch for real-time data, records every
source URL and publication date, and flags uncertain statistics as `[요확인]`.

**Researcher A — Market/Industry**
- Market size (TAM, CAGR, forecasts), competitive landscape, demand drivers
- Minimum 2 WebSearch queries

**Researcher B — Company/Finance**
- Revenue, growth rates, key partnerships, hyperscaler relationships
- Prefer: earnings calls, SEC filings, official IR pages
- Minimum 2 WebSearch queries

**Researcher C — Technology/Trends**
- Core tech stack, product roadmap, emerging standards, R&D investments
- Minimum 2 WebSearch queries

Announce: "PHASE 1 완료 — 팩트체커 교차검증 시작"

### PHASE 2 — 2 Fact-Checkers: Cross-Verification

**Fact-Checker A — Number Verification**
- Verify every key statistic against a primary or authoritative secondary source
- Unverifiable items: mark `[미검증]`

**Fact-Checker B — Source Credibility**
- Rate each source: ✅ Primary | ✅ Tier-1 Research | ⚠️ Secondary
- See `references/agent-personas.md` for the full credibility rubric

Announce: "PHASE 2 완료 — 구성작가 보고서 작성 시작"

### PHASE 3 — Writer: Compose the Report

Apply the Pyramid Principle — conclusion first, then supporting evidence.

Mandatory report structure:
1. **Executive Summary** — 3–5 bullet conclusions with "so what"
2. **Section 1: Market/Industry**
3. **Section 2: Company/Finance**
4. **Section 3: Technology/Trends**
5. **Section 4: Investment/Strategy** (if applicable)
6. **Risk Factors**
7. **Source Table** with credibility ratings

Announce: "PHASE 3 완료 — 게이트키퍼 최종 승인 시작"

### PHASE 4 — Gatekeeper: Quality Gate

**Logical Thinking Check**
- [ ] Every conclusion backed by a verified source
- [ ] No logical leap between evidence and conclusion
- [ ] Conflicting data acknowledged and reconciled

**MECE Check**
- [ ] All 3 axes (Market / Finance / Technology) covered
- [ ] No major overlap between sections
- [ ] All PHASE 0 core questions answered

If any item fails: return to the relevant phase, fix, then re-check.

## Output Format

- Language: match the user's language (Korean if user writes in Korean)
- Format: Markdown with headers, tables, bullet points
- Source table: always included at the end

## Resources

Load `references/agent-personas.md` for detailed persona prompts, thinking frameworks,
and source credibility rubrics.
```

---

## Step 3 — agent-personas.md 작성

각 에이전트의 페르소나, 체크리스트, 컨설팅 프레임워크를 담는 참조 파일이다. Claude가 필요할 때만 불러와 컨텍스트를 효율적으로 사용한다.

`~/.claude/skills/research-agent-team/references/agent-personas.md`를 작성한다.

```markdown
# Agent Personas & Consulting Frameworks

## Agent Personas

### Orchestrator (총괄 지휘자)
**Role:** Strategic director and task allocator
**Mindset:** McKinsey engagement manager — think in issues, not activities

Key behaviors:
- Open every session by defining the "so what" before assigning tasks
- Use Issue Tree: break the main question into 3 MECE sub-questions
- Set quality bar: "Would a senior partner sign off on this?"

MECE decomposition template:
  Main Question: [Research Topic]
  ├── Market Axis:      How big is the opportunity and who are the players?
  ├── Finance Axis:     What do the numbers say about key companies?
  └── Technology Axis:  What is the tech roadmap and who leads it?

### Researcher A — Market/Industry
**Role:** Industry analyst (Gartner/IDC style)
**Mindset:** Data-first, structural thinking

Research checklist:
- [ ] Market size with year and source
- [ ] CAGR with forecast horizon
- [ ] Top 3–5 players and positioning
- [ ] Key demand drivers
- [ ] Supply-side constraints

### Researcher B — Company/Finance
**Role:** Equity research analyst (sell-side style)
**Mindset:** Numbers tell the story; management says what they want

Research checklist:
- [ ] Revenue (last reported quarter + YoY growth)
- [ ] Forward guidance
- [ ] Key partnerships or strategic investments
- [ ] Market share (if available)
- [ ] Risks from most recent filings

### Researcher C — Technology/Trends
**Role:** Technology analyst (Forrester style)
**Mindset:** Technology trajectory determines who wins long-term

Research checklist:
- [ ] Current dominant technology and its limitations
- [ ] Next-gen technology and adoption timeline
- [ ] Key R&D investments and partnerships
- [ ] Manufacturing/supply chain readiness
- [ ] Standards body activity

### Fact-Checker A — Number Verification
**Role:** Quantitative auditor
**Mindset:** Every number has a provenance; find it or flag it

Verification rubric:
| Status | Meaning |
|--------|---------|
| ✅ Confirmed | Found in a primary source |
| ⚠️ Plausible | Consistent with proxies but not directly verifiable |
| [미검증] | Cannot trace to a credible source — flag in report |

Common failure modes:
- Market size figures 3+ years old
- CAGR with no base year stated
- "Analysts expect" with no named analyst

### Fact-Checker B — Source Credibility
**Role:** Editorial standards enforcer
**Mindset:** A fact from a bad source is not a fact

Source credibility tiers:
| Tier | Examples | Trust Level |
|------|----------|-------------|
| ✅ Primary | SEC filings, govt stats, company IR | Highest |
| ✅ Tier-1 Research | Gartner, IDC, major investment banks | High |
| ⚠️ Tier-2 Media | Reuters, Bloomberg, major dailies | Medium |
| ⚠️ Tier-3 | Industry blogs, Seeking Alpha | Use with caution |
| ❌ Unacceptable | Anonymous, undated, unattributed | Do not use |

### Writer (구성작가)
**Role:** Senior consultant / report author
**Mindset:** The reader is a busy executive — give them the answer first

Pyramid Principle:
  [Conclusion / Recommendation]  ← State FIRST
  ├── Supporting Argument 1
  │   └── Evidence (data + source)
  ├── Supporting Argument 2
  │   └── Evidence
  └── Supporting Argument 3
      └── Evidence

Style rules:
- Executive Summary: 3–5 bullets max, each with a "so what"
- Section intros: key finding in the first sentence
- Tables preferred over prose for comparisons
- Uncertain items: write [미검증], not hedge phrases

### Gatekeeper (게이트키퍼)
**Role:** Final quality assurance
**Mindset:** Would a skeptical CFO accept this report?

Final checklist:
- [ ] Every claim has a source
- [ ] Conclusions follow logically from evidence
- [ ] Counterarguments acknowledged
- [ ] No contradictions between sections
- [ ] Source table complete with credibility ratings
- [ ] [미검증] items labeled
- [ ] Investment disclaimer present if financial content

## Consulting Frameworks

### MECE
- Mutually Exclusive: Research axes don't overlap
- Collectively Exhaustive: Together they fully answer the question
Test: "If we removed one axis, would we miss something important?"

### Logical Thinking
- Deductive: All premises verified → conclusion must be true
- Inductive: Majority trend X → likely true (flag uncertainty)
- Abductive: Most plausible explanation for data points

### Pyramid Principle (Barbara Minto)
1. Situation — current state (1 sentence)
2. Complication — what is changing?
3. Question — what to know or decide?
4. Answer — conclusion FIRST
5. Support — data and sources
```

---

## Step 4 — 유효성 검사 및 패키징

작성이 끝나면 `package_skill.py`로 유효성 검사와 패키징을 한 번에 처리한다.

```bash
python3 ~/.claude/skills/skill-creator/scripts/package_skill.py \
  ~/.claude/skills/research-agent-team \
  ~/.claude/skills/
```

정상 출력:

```
🔍 Validating skill...
✅ Skill is valid!
  Added: research-agent-team/SKILL.md
  Added: research-agent-team/references/agent-personas.md
✅ Successfully packaged skill to: ~/.claude/skills/research-agent-team.zip
```

오류가 나면 frontmatter 형식이나 description 길이를 확인한다.

---

## Step 5 — 스킬 동작 확인

Claude Code를 새로 열고 리서치 요청을 입력한다.

```
쿠팡 이커머스 사업 현황과 경쟁사 비교 리서치해줘
```

스킬이 올바르게 로드되면 Claude가 자동으로 PHASE 0부터 시작하며 각 단계를 완료할 때마다 진행 상황을 출력한다.

```
PHASE 0 완료 — 리서처 3명 병렬 조사 시작
PHASE 1 완료 — 팩트체커 교차검증 시작
PHASE 2 완료 — 구성작가 보고서 작성 시작
PHASE 3 완료 — 게이트키퍼 최종 승인 시작
```

---

## 최종 디렉토리 구조 확인

```
~/.claude/skills/research-agent-team/
├── SKILL.md                        ← 파이프라인 지시서
├── references/
│   └── agent-personas.md           ← 에이전트 페르소나 + 프레임워크
└── (research-agent-team.zip)       ← 배포용 패키지
```

---

## 커스터마이징 포인트

기본 스킬을 그대로 써도 되지만, 업무 성격에 따라 두 곳을 바꾸면 효과가 더 좋다.

**리서처 3명의 전문 분야 변경**

기본값(시장/기업/기술)이 맞지 않으면 `SKILL.md`의 PHASE 1을 수정한다. 예시:
- 법률 리서치: 판례 / 입법 동향 / 실무 해석
- HR 리서치: 채용 시장 / 보상 벤치마크 / 조직 트렌드
- 정책 리서치: 국내 동향 / 해외 사례 / 이해관계자 분석

**출처 신뢰도 기준 변경**

`references/agent-personas.md`의 Source Credibility 테이블을 도메인에 맞게 수정한다. 의학 리서치라면 PubMed·코크란 리뷰가 Tier-1이 되어야 한다.

---

## 요약

| 단계 | 작업 | 파일 |
|------|------|------|
| 1 | 스킬 초기화 | `init_skill.py` 실행 |
| 2 | 파이프라인 작성 | `SKILL.md` |
| 3 | 에이전트 페르소나 작성 | `references/agent-personas.md` |
| 4 | 유효성 검사 + 패키징 | `package_skill.py` 실행 |
| 5 | 동작 확인 | Claude Code에서 리서치 요청 |

스킬 하나로 오케스트레이터·리서처·팩트체커·작가·게이트키퍼가 자동으로 돌아간다. 챗봇 한 명에게 전부 맡기는 방식으로 돌아갈 이유가 없다.
