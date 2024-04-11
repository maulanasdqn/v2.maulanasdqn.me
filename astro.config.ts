import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

export default defineConfig({
  image: {
    domains: ["astro.build"],
  },
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
});

