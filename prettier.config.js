module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 80,
  endOfLine: "auto",
  singleQuote: false,
  trailingComma: "all",
  tailwindConfig: "./tailwind.config.js",
  plugins: [require("prettier-plugin-tailwindcss")],
};
