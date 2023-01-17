import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    /* see https://github.com/gxmari007/vite-plugin-eslint#options */
    eslint({ fix: true }),
  ],
});
