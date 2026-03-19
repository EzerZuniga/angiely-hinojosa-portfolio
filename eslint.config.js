import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // JavaScript/TypeScript base config
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // Astro config
  ...eslintPluginAstro.configs.recommended,

  // Global ignores
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', '*.min.js'],
  },

  // Custom rules
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,astro}'],
    rules: {
      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/triple-slash-reference': 'off',

      // General
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always'],
    },
  },

  // Relaxed rules for config files
  {
    files: ['*.config.{js,mjs,ts}', 'astro.config.mjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // Astro env.d.ts - allow triple-slash references
  {
    files: ['src/env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
];
