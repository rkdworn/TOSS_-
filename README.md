# 군적금 계산기 (Milpay Calc App)

토스 미니앱(Apps in Toss) 기반의 군 복무 형태별 장병내일준비적금(군적금) 만기 수령액 및 이자 계산기입니다.

## 주요 기능
- **복무 형태별 계산 지원**: 육군/해병대(18개월), 해군(20개월), 공군(21개월), 사회복무요원(21개월)
- **적금 만기액 자동 산출**: 원금, 은행 기본 이자(연 5%), 정부 매칭지원금 계산
- **토스 디자인 시스템(TDS Mobile) 적용**: 토스 UX 가이드라인에 맞춘 깔끔한 인터페이스
- **토스 광고 SDK 연동**: Apps in Toss 전면 광고 로드 및 노출 흐름 지원

## 기술 스택
- **Framework**: React 18, Vite
- **UI & Styling**: `@toss/tds-mobile`, `@toss/tds-colors`, Emotion
- **Mini-app Platform**: `@apps-in-toss/web-framework` (Granite)

## 실행 방법
```bash
# 패키지 설치
npm install

# 로컬 개발 서버 실행
npm run dev

# 빌드 및 배포 패키징
npm run build
```
