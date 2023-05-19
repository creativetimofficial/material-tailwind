import withSolid from "rollup-preset-solid";
import filesize from "rollup-plugin-filesize";

export default withSolid({
  input: "src/index.ts",
  targets: ["esm", "cjs"],
  watch: {},
  printInstructions: true,
  plugins: [filesize()],
  treeshake: true,
});
