import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.ex45.com',
  trailingSlash: 'never',
  integrations: [tailwind()],
});
