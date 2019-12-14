module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: false,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
    'import/resolver': {
      'babel-module': {
        root: ['./'],
        alias: {
          '@': '.',
        },
      },
    },
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'function-paren-newline': 0,
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/forbid-prop-types': 0,
    'import/extensions': 0,
    'jsx-a11y/anchor-is-valid': 0,
  },
};
