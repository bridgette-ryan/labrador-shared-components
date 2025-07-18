// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

const esDefaultWithIgnore = {
  ...eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ignores: ["./src/factories"]
}

export default tseslint.config(
  esDefaultWithIgnore
);