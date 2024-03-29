import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
const {
  SECRET_PASSWORD
} = loadEnv(import.meta.env.MODE, process.cwd(), "");
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  experimental: {
    assets: true
  },
  base: '/',
  output: 'server',
  adapter: netlify()
});