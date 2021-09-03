```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier --save-dev

touch .eslintrc.js

touch .prettierrc.json
```

#### tsconfig.json

```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "lib": ["DOM", "ES2020"],
    "jsx": "react",
    "strict": true,
    "sourceMap": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true
  },
  "ts-node": {
    "compilerOptions": {
      "target": "ES2015",
      "module": "CommonJS"
    }
  }
}
```

#### .eslintrc.js

```
module.exports = {
  root: true,
  // 対象環境
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  // パーサー
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  // 基本は recommended
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  rules: {},
}
```

#### .prettierrc.json

```
{
  "singleQuote": true,
  "semi": false,
  "jsxBracketSameLine": true
}
```

#### setting.json(workspace)

```
{
   // デフォルトフォーマッタをprettierに
   "editor.defaultFormatter": "esbenp.prettier-vscode",
   // prettierで整形
   "editor.formatOnSave": true,
   // eslintでリント
   "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
   },
}
```
