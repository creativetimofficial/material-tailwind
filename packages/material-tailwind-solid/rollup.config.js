import withSolid from "rollup-preset-solid";
// import commonjs from "@rollup/plugin-commonjs";

export default withSolid({
  input: "src/index.ts",
  targets: ["esm", "cjs"],
  watch: {},
  printInstructions: true,
  treeshake: false, // TODO: Enable this once we figured out how to include withMT function
});
