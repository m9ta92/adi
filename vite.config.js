import { defineConfig } from "vite";
import glob from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig(({ command }) => {
  return {
    optimizeDeps: {
      include: ["simplelightbox"],
    },
    ssr: {
      external: ["simplelightbox"],
    },
    define: {
      [command === "serve" ? "global" : "_global"]: {},
    },
    root: ".",
    build: {
      sourcemap: true,
      outDir: "../dist",
    },
    plugins: [injectHTML(), FullReload(["./src/**/**.html"])],
  };
});
