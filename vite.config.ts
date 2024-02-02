import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    console.log("Building library");
    return {
      plugins: [react()],
      publicDir: false,
      build: {
        lib: {
          name: "MapIconsReact",
          fileName: (format) => `map-icons-react.${format}.js`,
          entry: "lib/index.ts",
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
    };
  } else {
    console.log("Building preview app");
    const base =
      mode === "production" ? "https://usace.github.io/map-icons-react/" : "";
    return {
      plugins: [react()],
      base: base,
      build: {
        outDir: "docs",
      },
    };
  }
});
