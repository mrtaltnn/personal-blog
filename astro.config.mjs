import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
const { SECRET_PASSWORD } = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  experimental:{
    assets:true
  },
  base:'/'
});