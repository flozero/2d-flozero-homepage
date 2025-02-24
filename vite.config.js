import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" && process.env.CUSTOM_DOMAIN
    ? "/"  // for florent.dev
    : "/2d-flozero-homepage/",  // for GitHub Pages project URL
  plugins: [react()],
});
