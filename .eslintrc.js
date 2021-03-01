const resolve = require('path').resolve;

module.exports = {
  env: {
    browser: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
    '@nuxtjs/eslint-config-typescript',
    'airbnb-typescript/base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    project: resolve(`${__dirname}/tsconfig.json`),
    extraFileExtensions: [
      '.vue',
    ],
  },
  plugins: [
    'jest',
  ],
  root: true,
  // add your custom rules here
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
        ignorePattern: 'd="[\\s\\S]*?"'
      }
    ]
  },
  settings: {
  //   'import/parsers': {
  //     '@typescript-eslint/parser': ['.ts', '.tsx'],
  //   },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {},
      [require.resolve('eslint-import-resolver-webpack')]: {
        config: require.resolve('@vue/cli-service/webpack.config.js'),
      },
      'alias': {
        map: [
          [ '@/', 'src/'],
          [ '~/', 'src/'],
        ],
        extensions: [ '.ts', '.vue'],
      },
    },
    //   'import/extensions': [
    //     '.js',
    //     '.jsx',
    //     '.mjs',
    //     '.ts',
    //     '.tsx',
    //   ],
  //     typescript: {
  //       alwaysTryTypes: true,
  //       project: './tsconfig.json',
  //     },
  },
};
