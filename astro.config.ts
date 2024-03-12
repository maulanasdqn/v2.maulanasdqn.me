import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
  image: {
    domains: ["astro.build"],
  },
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      apiOptions: {
        region: "us",
      },
      components: {
        main: "components/storyblok/main",
        hero: "components/storyblok/hero",
        about: "components/storyblok/about",
      },
    }),
    UnoCSS({
      injectReset: true,
    }),
  ],
});
