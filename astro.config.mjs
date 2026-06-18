import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tina from 'astro-tina';

export default defineConfig({
  output: 'static',
  site: 'https://terribledevice.com',
  integrations: [react(), tina()],
});
