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
  