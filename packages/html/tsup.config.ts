import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/plugins/index.ts"],
  clean: true,
  format: ["cjs", "esm"],
  dts: {
    resolve: true,
  },
  sourcemap: false,
  minify: true,
  splitting: false,
  keepNames: true,
  skipNodeModulesBundle: true,
});
