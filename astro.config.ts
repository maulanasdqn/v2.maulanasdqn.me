import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
const { STORYBLOK_TOKEN } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export default defineConfig({
  image: {
    domains: ["astro.build"],
  },
  integrations: [
    storyblok({
      accessToken: STORYBLOK_TOKEN,
      apiOptions: {
        region: "us",
      },
      components: {
        page: "storyblok/Page",
        text: "storyblok/Text",
        image: "storyblok/Image",
        description: "storyblok/Description",
      },
    }),
    UnoCSS({
      injectReset: true,
      preflight: true,
    }),
  ],
});
