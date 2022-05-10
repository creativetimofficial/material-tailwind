# @material-tailwind/react

Material Tailwind React is an easy to use components library for ReactJS and Tailwind CSS. Material Tailwind React features multiple react.js components, all written with Tailwind CSS classes and Material Design guidelines. Material Tailwind React provides a simple way to customize your button, you can change the colors, fonts, breakpoints and everything you need.

Material Tailwind React is written in TypeScript and you can easily use it for building TypeScript based applications.

<br />

## ReactJS Components

- Accordion
- Alert
- Avatar
- Breadcrumbs
- Button
- Card
- Checkbox
- Chip
- Dialog
- Icon Button
- Input
- Menu
- Navbar
- Popover
- Progress Bar
- Radio Button
- Select
- Switch
- Tabs
- Textarea
- Tooltip
- Typography

<br />

# Quick Start

###### You can download and install @material-tailwind/react as a dependency on your project.

## Using NPM

```bash
npm i @material-tailwind/react
```

<br />

## Using Yarn

```bash
yarn add @material-tailwind/react
```

<br />

## Using PNPM

```bash
pnpm i @material-tailwind/react
```

<br />

## TailwindCSS Configurations

Once you install @material-tailwind/react you need to wrap your tailwind css configurations with the `withMT()` function coming from @material-tailwind/react.

```js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
```

<br />

## Theme Provider

@material-tailwind/react is comes with a theme provider that you can use to provide your own theme to your components. You need to wrap your entire application with the `ThemeProvider` coming from @material-tailwind/react.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import { ThemeProvider } from "@material-tailwind/react";

const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
```

<br />

## Example

Now you're good to go and use @material-tailwind/react in your project.

```jsx
import { Button } from "@material-tailwind/react";

export default function Example() {
  return <Button>Button</Button>;
}
```
