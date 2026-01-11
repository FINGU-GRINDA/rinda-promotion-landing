# Rinda 수출 액셀러레이팅 프로모션 랜딩페이지

GRINDA의 수출 액셀러레이팅 프로그램 홍보를 위한 모바일 최적화 랜딩페이지입니다.

## 프로젝트 개요

- **목적**: 3주 집중 수출 액셀러레이팅 프로그램 홍보 및 신청 유도
- **타겟**: 수출을 시작하려는 국내 중소기업/스타트업 대표
- **핵심 가치**: 영어/무역 지식 없이도 3주 만에 해외 바이어 50개사 확보

## 기술 스택

- **Framework**: Next.js 15.1.1 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (Accordion)
- **Language**: TypeScript

## 주요 섹션

| 섹션 | 설명 |
|------|------|
| Hero | 메인 후크 + CTA |
| Target | 타겟 페르소나 체크리스트 |
| Problem | 기존 방법의 한계점 제시 |
| Solution | 린다 프로그램의 4단계 해결책 |
| Success Story | 성공 사례 (익투스 침구) |
| Curriculum | 3주 커리큘럼 타임라인 |
| Instructor | 강사 소개 |
| Pricing | 가격 및 얼리버드 혜택 |
| FAQ | 자주 묻는 질문 |
| Final CTA | 마지막 전환 유도 |

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버: http://localhost:3000

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   └── globals.css     # 전역 스타일
├── components/
│   ├── layout/         # 레이아웃 컴포넌트
│   │   ├── StickyMobileCTA.tsx
│   │   └── KakaoChannelButton.tsx
│   ├── sections/       # 페이지 섹션 컴포넌트
│   │   ├── HeroSection.tsx
│   │   ├── TargetSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── SuccessStorySection.tsx
│   │   ├── CurriculumSection.tsx
│   │   ├── InstructorSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── FinalCTASection.tsx
│   └── ui/             # 재사용 UI 컴포넌트
│       ├── Header.tsx
│       ├── accordion.tsx
│       └── CountdownTimer.tsx
└── data/
    └── curriculum.ts   # 커리큘럼 데이터
```

## 배포

Vercel 배포 권장:

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

## 주요 기능

- 모바일 최적화 반응형 디자인
- 스크롤 기반 고정 CTA 버튼
- 카운트다운 타이머 (얼리버드 마감)
- 부드러운 스크롤 네비게이션
- 카카오톡 채널 연동 버튼

## 담당자

GRINDA 마케팅팀
