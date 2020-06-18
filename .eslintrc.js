module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true }
    ],
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-body-style': ['warn', 'as-needed'],
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-default': 0,
  },
  extends: 'airbnb',
  overrides: [
    {
      files: [ 'src/**/*.js' ],
      rules: {
        indent: [2],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      }
    }
  ]
}