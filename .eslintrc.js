module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: 'test-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
  },
};
