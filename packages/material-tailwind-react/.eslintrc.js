module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/jsx-props-no-spreading": "off",
    "react/button-has-type": "off",
    "react/require-default-props": "off",
    "no-param-reassign": "off",
  },
  settings: {
    "import/resolver": { node: { moduleDirectory: ["node_modules", "src/"] } },
  },
};
