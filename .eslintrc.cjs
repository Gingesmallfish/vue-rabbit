/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "no-unused-vars": "off",
    'vue/multi-word-component-names': 'off',
    "generator-star-spacing": "off",
    "no-tabs":"off",
    "no-console":"off",
    "no-irregular-whitespace":"off",
    "no-debugger": "off"
  }

}
