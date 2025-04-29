# @sard-runway/eslint-config

> 모던 타입스크립트 + 리액트 프로젝트를 위한 Airbnb 기반 ESLint 설정

---

## ✨ 특징

- Airbnb 스타일 가이드 기반
- TypeScript 완전 지원
- Prettier 통합 (포맷팅 자동화)
- Import 경로 alias(`@/`) 인식 지원
- React Hooks 룰 포함
- Simple Import Sort로 깔끔한 import 정렬

---

## 📦 설치

루트에서 다음 명령어로 설치합니다:

```bash
pnpm add -D eslint @sard-runway/eslint-config
```

또는 npm 사용시:
```bash
npm install --save-dev eslint @sard-runway/eslint-config
```

### 주의:
이 설정은 peerDependencies로 다음 패키지들을 필요로 합니다:
`eslint`, `eslint-plugin-react`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `@typescript-eslint/*`, `prettier` 등

## ⚙️ 사용 방법

각 패키지(예: packages/web)의 .eslintrc.js 파일에 다음처럼 설정합니다:
```javascript
module.exports = {
  extends: ['@sard-runway/eslint-config'],
};
```

## 🛠️ 추가 설정

**tsconfig.json**

프로젝트 루트 또는 패키지에 baseUrl과 paths를 설정해야 합니다:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**VsCode 권장 설정**
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "prettier.requireConfig": true
}
```

## 📝 스크립트 예시
루트 package.json에 다음 스크립트를 추가할 수 있습니다:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
  }
}
```