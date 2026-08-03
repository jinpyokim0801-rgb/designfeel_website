# Design Feel Archive

Design Feel의 아동 그림 아카이브 및 프라이빗 커미션 홈페이지입니다. 현재 운영 화면의 React/Next.js 소스, 이미지, 로고, 폰트와 배포 설정을 모두 포함합니다.

## 기술 구성

- Next.js 16 (App Router)
- React 19
- TypeScript
- 순수 CSS
- 외부 데이터베이스 및 외부 UI 라이브러리 없음
- 폰트와 이미지 자체 호스팅

## 프로젝트 구조

```text
designfeel-production/
├── app/
│   ├── globals.css       # 전체 디자인 및 반응형 스타일
│   ├── layout.tsx        # 메타데이터와 공통 레이아웃
│   └── page.tsx          # 전체 홈페이지 및 신청 폼 동작
├── public/
│   ├── fonts/            # 웹폰트와 라이선스
│   ├── images/
│   │   ├── brand/        # Design Feel 로고
│   │   └── process/      # 작품·과정·아카이브 이미지
│   └── favicon.svg
├── ASSETS.md             # 이미지·폰트 안내
├── package.json          # 실행 명령과 의존성
├── package-lock.json     # 고정된 의존성 버전
├── next.config.ts        # Next.js 설정
├── netlify.toml          # Netlify 빌드 설정
├── vercel.json           # Vercel 프레임워크 설정
└── tsconfig.json         # TypeScript 설정
```

## 로컬 실행

Node.js 22 LTS와 npm을 권장합니다.

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 프로덕션 빌드

```bash
npm ci
npm run build
npm run start
```

## GitHub 업로드

압축을 해제한 폴더에서 다음 명령을 실행합니다.

```bash
git init
git add .
git commit -m "Initial Design Feel website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

`node_modules`와 빌드 결과물은 `.gitignore`에 포함되어 있어 GitHub에 올라가지 않습니다.

## Vercel 배포

1. GitHub에 프로젝트를 업로드합니다.
2. Vercel에서 **Add New → Project**를 선택합니다.
3. GitHub 저장소를 연결합니다.
4. Framework Preset이 **Next.js**인지 확인합니다.
5. 별도 환경변수 없이 **Deploy**를 누릅니다.

Vercel CLI를 사용할 수도 있습니다.

```bash
npx vercel
```

## Netlify 배포

1. Netlify에서 **Add new site → Import an existing project**를 선택합니다.
2. GitHub 저장소를 연결합니다.
3. 빌드 명령은 `npm run build`로 설정합니다.
4. `netlify.toml`이 Node.js 버전과 빌드 명령을 자동 지정합니다.

## 신청 폼 동작

신청 폼은 별도 서버나 데이터베이스 없이 방문자의 기본 이메일 앱을 열어 입력 내용을 아래 주소로 전송하도록 구성되어 있습니다.

- 수신 이메일: `kim.chaewon00@outlook.com`

완전한 웹 제출 방식이 필요하면 Formspree, Resend, Netlify Forms 또는 자체 API로 교체할 수 있습니다. 현재 방식은 API 키나 개인정보 데이터베이스가 필요 없다는 장점이 있습니다.

## 의존성

운영 의존성:

- `next`
- `react`
- `react-dom`

개발 의존성:

- `typescript`
- `eslint`
- `eslint-config-next`
- `@types/node`
- `@types/react`
- `@types/react-dom`

정확한 버전과 하위 의존성은 `package.json`과 `package-lock.json`에서 확인할 수 있습니다.

## 운영 전 확인 사항

- 연락처, 주소, 이메일이 최신 정보인지 확인
- 이미지와 로고의 상업적 사용 권한 확인
- 실제 도메인 연결 후 개인정보 처리방침 추가
- 메일 앱 방식 대신 서버 전송 폼을 사용할 경우 스팸 방지와 개인정보 동의 절차 추가
- 작품 가격이나 결제 기능을 도입할 경우 전자상거래 고지와 환불 정책 추가

## 저작권

브랜드 로고, 작품 이미지, 사진과 사업 콘텐츠의 권리는 Design Feel에 있습니다. 번들된 EB Garamond와 Noto Serif KR은 각 폴더에 포함된 SIL Open Font License를 따릅니다.
