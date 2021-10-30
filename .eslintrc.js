module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12
  },
  plugins: [
    'react'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'react/no-unescaped-entities': ['warn'],
    'no-underscore-dangle': ['warn'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-fragments': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-console': 'off',
    'implicit-arrow-linebreak': 'off',
    'consistent-return': 'off',
    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
    'import/no-named-as-default-member': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'react/state-in-constructor': 'off',
    'max-len': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-quotes': 'off',
    'react/prefer-stateless-function': 'off',
    'no-return-await': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'no-multi-assign': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off'
  }
};
