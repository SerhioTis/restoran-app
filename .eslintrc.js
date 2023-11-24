module.exports = {
    extends: [
      'next/core-web-vitals',
      'plugin:tailwindcss/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:unicorn/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'tailwindcss'],
    settings: {
      'import/internal-regex': '^@/',
    },
    root: true,
    rules: {
      'unicorn/no-static-only-class': 'warn',
      'unicorn/prefer-logical-operator-over-ternary': 'off',
      'unicorn/consistent-destructuring': 'off',
      'unicorn/no-nested-ternary': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/switch-case-braces': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/prefer-node-protocol': 'off',
      'unicorn/no-abusive-eslint-disable': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'tailwindcss/no-custom-classname': 0,
      'import/newline-after-import': [
        'error',
        {
          count: 1,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '_',
          argsIgnorePattern: '^_',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'object',
            'type',
            'index',
            'sibling',
          ],
          pathGroups: [
            {
              pattern: '{react,next}',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'react-native', 'builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
        },
      ],
      'react-hooks/exhaustive-deps': 'off',
    },
  };
  