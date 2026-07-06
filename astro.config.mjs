// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://beardvis.github.io',
  base: '/pozniak-business-card',
  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [{
    provider: fontProviders.google(),
    name: "EB Garamond",
    cssVariable: "--font-eb-garamond",
  },
  {
    provider: fontProviders.google(),
    name: "Inter",
    cssVariable: "--font-inter",
  }],

  integrations: [icon({
      include: {
        mdi: ["instagram", "facebook", "youtube", "menu", "close", "arrow-forward", "format-quote-close"],
      },
    })]
});