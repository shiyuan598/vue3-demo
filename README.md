# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

npm install -g create-vite
create-vite my-vue3-project --template vue-ts

配置 ESLint 和 Prettier：
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier

在项目根目录创建 .eslintrc.js 文件
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // 添加您自定义的 ESLint 规则
  },
};

添加.prettierrc
{
    "semi": true,
    "trailingComma": "none",
    "singleQuote": false,
    "printWidth": 120,
    "bracketSpacing": true,
    "tabWidth": 4,
    "bracketSameLine": true,
    "arrowParens": "always",
    "htmlWhitespaceSensitivity": "ignore",
    "useTabs": false
}


使用tailwind:
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
配置：
npx tailwindcss init -p
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: "media",
    content: [],
    theme: {
        extend: {}
    },
    plugins: []
};

在入口css中引入：
@tailwind base;
@tailwind components;
@tailwind utilities;

vscode中tailwind不提示：
"editor.quickSuggestions": {
     "other": "on",
     "comments": "off",
     "strings": "on"
 },

错误处理：
Cannot find module './App.vue' or its corresponding type declarations.
npm install --save-dev @types/vue
