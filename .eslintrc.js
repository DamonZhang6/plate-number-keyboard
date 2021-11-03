module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'max-len': 0,
    'no-shadow': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'import/no-unresolved': 0,
    'no-unused-expressions': 0,
    'import/prefer-default-export': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
