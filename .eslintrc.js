module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
  ],
  parserOptions: {
      ecmaVersion: 6,
      parser: 'babel-eslint',
      sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': [2, 2],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'vue/html-indent': ['error', 2, { 'alignAttributesVertically': true }],
    'space-before-function-paren': 'off',
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }]
  }
}
