import withSolid from "rollup-preset-solid";
import summary from "rollup-plugin-summary";

export default withSolid({
  input: "src/index.ts",
  targets: ["esm", "cjs"],
  watch: {},
  printInstructions: true,
  plugins: [summary({ showGzippedSize: true })],
  treeshake: true,
});
