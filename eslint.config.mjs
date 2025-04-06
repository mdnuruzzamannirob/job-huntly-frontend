import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-plugin-tailwindcss/recommended',
  ),
  {
    rules: {
      // JavaScript essential rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      eqeqeq: ['error', 'always'],
      curly: 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-empty': 'warn',

      // TypeScript essential rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',

      // React/Next.js specific rules
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'no-case-declarations': 'off',
      'jsx-a11y/aria-role': 'off',

      // tailwind css
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/classnames-order': 'off',
      'tailwindcss/enforces-negative-arbitrary-values': 'off',

      // Prettier integration
      'prettier/prettier': 'off',
    },
  },
];

export default eslintConfig;
