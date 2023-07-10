import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import postcss from 'postcss';

export default defineConfig({
  integrations: [
    tailwind(),
    {
      name: 'postcss', // Add the name property
      // Use the "postcss" integration to configure PostCSS
      // Add any necessary plugins to the "plugins" array
      postcss: {
        plugins: [
          // Add your PostCSS plugins here if needed
        ],
      },
    },
  ],
});
