module.exports = {
  extends: [
    '@mate-academy/eslint-config-react-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    // React
    'react/prop-types': 0,
    'react/self-closing-comp': 0,
    'react/display-name': 0,

    // JavaScript
    'no-proto': 0,
    'no-unused-vars': 0,

    // TypeScript
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/semi': ['error'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
