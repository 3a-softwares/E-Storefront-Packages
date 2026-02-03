import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  // ===================== BASE =====================
  js.configs.recommended,

  // ===================== TYPESCRIPT =====================
  ...tseslint.configs.recommended,

  // ===================== PROJECT RULES =====================
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        module: 'writable',
        process: 'readonly'
      }
    },
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'prettier/prettier': 'error',

      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off'
    }
  },

  // ===================== STORYBOOK =====================
  {
    files: ['**/*.stories.*'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },

  // ===================== PRETTIER (MUST BE LAST) =====================
  prettierConfig
];
