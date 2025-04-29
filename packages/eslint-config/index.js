module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:prettier/recommended", // Prettier 연동
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import",
    "jsx-a11y",
    "prettier",
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Next.js 스타일 허용
    "import/no-relative-parent-imports": "error", // 상대경로 금지 (@/ 강제)
    "prettier/prettier": "error", // Prettier 위반 = 에러로 처리
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }], // tsx/jsx 파일만 JSX 가능
    "import/extensions": "off", // import할 때 확장자 붙일 필요 없음
    "no-console": "warn", // console.log는 warning 처리
  },
  settings: {
    "import/resolver": {
      typescript: {}, // @/ 경로 alias 인식
    },
  },
};
