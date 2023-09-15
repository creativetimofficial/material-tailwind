module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 80,
  endOfLine: "auto",
  singleQuote: false,
  trailingComma: "all",
  tailwindConfig: "./apps/site/tailwind.config.js",
  plugins: [require("prettier-plugin-tailwindcss")],
};
