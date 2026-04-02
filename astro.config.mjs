// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://leandro-calderon.github.io',
  base: '/landing_oir',
  vite: {
    plugins: [tailwindcss()]
  }
});