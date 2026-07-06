// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
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
  },
  {
    provider: fontProviders.googleicons(),
    name: "Material Symbols Outlined",
    cssVariable: "--font-material-symbols",
  }],

  integrations: [icon({
      include: {
        mdi: ["instagram", "facebook", "youtube"],
      },
    })]
});