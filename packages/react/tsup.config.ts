import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: {
    resolve: true,
  },
  format: ["cjs", "esm"],
  minify: true,
  sourcemap: false,
  splitting: false,
  treeshake: true,
  external: ["react", "react-dom"],
  noExternal: ["tailwindcss", "hex-rgb", "deepmerge"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
    options.alias = {
      "@context": "./src/context",
      "@plugins": "./src/plugins",
      "@theme": "./src/theme",
      "@types": "./src/types",
      "@utils": "./src/utils",
      "@components": "./src/components"
    };
  },
});

