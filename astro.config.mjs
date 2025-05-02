import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import astroIcon from 'astro-icon';

export default defineConfig({
  integrations: [tailwind(), astroIcon()],
});