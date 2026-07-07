// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://Next-Trip.github.io",
  base: "/pozniak-business-card",
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "EB Garamond",
      cssVariable: "--font-eb-garamond",
      subsets: ["latin", "cyrillic", "latin-ext"],
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      subsets: ["latin", "cyrillic", "latin-ext"],
    },
  ],

  integrations: [
    icon({
      include: {
        mdi: [
          "instagram",
          "facebook",
          "youtube",
          "menu",
          "close",
          "arrow-forward",
          "format-quote-close",
        ],
      },
    }),
  ],

  i18n: {
    locales: ["uk", "en", "cs"],
    defaultLocale: "en",
  },
});
