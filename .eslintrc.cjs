module.exports = {
  root: true,
  env: { browser: true, node: true, es2022: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react', 'react-hooks'],
  settings: { react: { version: '18.3' } },
  ignorePatterns: ['dist/', 'node_modules/', 'functions/', 'netlify/', 'src/pages/GestureDemo.jsx'],
  rules: { 'react/react-in-jsx-scope': 'off', 'react/prop-types': 'off', 'react/no-unescaped-entities': 'off' }
};
