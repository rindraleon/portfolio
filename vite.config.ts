import { defineConfig } from "vite"

import react from "@vitejs/plugin-react"

import tailwindcss from "@tailwindcss/vite"

import path from "node:path"

export default defineConfig(() => {
  return {
    base: "/portfolio/",

    build: {
      sourcemap: false,

      minify: true,
    },

    plugins: [
      react(),

      tailwindcss(),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    server: {
      host: "0.0.0.0",

      port: parseInt(process.env.PORT || "3000"),

      strictPort: true,

      allowedHosts: true as const,
    },

    preview: {
      host: "0.0.0.0",

      port: parseInt(process.env.PORT || "3000"),
    },
  }
})
