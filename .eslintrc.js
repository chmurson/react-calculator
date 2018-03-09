module.exports = {
  parser: "babel-eslint",
  extends: ['eslint:recommended', 'airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    jasmine: true,
    jest: true
  },
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
        semi: false
      }
    ],
    'semi': ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/prefer-stateless-function': 'off',
    'react/forbid-prop-types': 'off',
    "no-use-before-define": ["error", { "functions": false, "classes": false }]
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  }
};
