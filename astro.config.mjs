import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://asemabdelal.dev',
  integrations: [sitemap()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }
});
