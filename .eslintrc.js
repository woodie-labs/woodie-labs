module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    'no-unused-vars': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-children-prop': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  ignorePatterns: ['.*.js', 'node_modules/', '.next/', 'out/', 'build/', 'next-env.d.ts'],
};
