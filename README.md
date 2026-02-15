# 프랩 애플리케이션 (안드로이드)

이 애플리케이션은 [Expo](https://expo.dev) 프로젝트로 [`create-expo-app`](https://www.npmjs.com/package/create-expo-app)로 생성되었습니다. 모바일(Android)과 웹 브라우저 환경에서 실행할 수 있습니다.

## 기술 스택

- Node.js 18
- Expo SDK 54
- React 19
- React Native 0.81
- TypeScript
- EAS Build / EAS Deploy

## 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 애플리케이션 실행

```bash
npm run start
```

**Android**

개발 서버 실행 후 `a` 키를 누르면
`Expo`와 연결된` Android Emulator`가 실행됩니다.

사전에 `Android Studio` 및 `Emulator` 설정이 필요합니다.

**Web**

개발 서버 실행 후 `w` 키를 누르면
브라우저 환경에서 애플리케이션이 실행됩니다.

## 프로젝트 구조

```
test-1/
├── README.md                          # 프로젝트 문서
├── app/                               # Expo Router 기반 라우팅 및 화면 엔트리
├── assets/                            # 이미지, 폰트 등 정적 리소스
└── src/
    ├── components/                    # 공통 컴포넌트
    ├── features/                      # 도메인(기능) 단위 모듈
    ├── mock/                          # 개발용 목 데이터
    └── provider/                      # 전역 상태 및 컨텍스트 관리

```

이 프로젝트는 `Expo`로 배포하였으며, URL 접속 시 바로 확인할 수 있습니다.

## 배포

**Web 미리보기**

`Web` 환경에서는 바텀 시트의 뒤로가기 닫기 기능이 정상 동작하지 않을 수 있습니다.

[웹 브라우저에서 Expo App 미리보기](https://prap-app--p65e1vs70c.expo.app/)

**Android APK 다운로드**

`Android` 기기에서 아래 링크를 통해 APK를 설치하여 확인할 수 있습니다.

[구글 드라이브 APK 다운로드](https://drive.google.com/file/d/1mEA9PAqJTszxU2yeGqbV0jeLFXsv_qxM/view?usp=drive_link)
