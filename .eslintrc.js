module.exports = {
  env: {
    browser: true,
    'jest/globals': true,
    node: true
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.json',
  },
  plugins: [
    'import',
    'jest'
  ],
  root: true,
  // add your custom rules here
  rules: {},
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      }
    }
  }
}
