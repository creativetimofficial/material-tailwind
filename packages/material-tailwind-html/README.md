# @material-tailwind/html

Material Tailwind HTML is an easy to use components library for Tailwind CSS. Material Tailwind HTML features multiple components, all written with Tailwind CSS classes and Material Design guidelines. Material Tailwind HTML provides a simple way to customize your components, you can change the colors, fonts, breakpoints and everything you need.

<br />

## Tailwind CSS Components

- Alert
- Avatar
- Button
- Checkbox
- Chip
- Icon Button
- Input
- Progress Bar
- Radio Button
- Switch
- Textarea
- Typography

<br />

# Quick Start

###### You can download and install @material-tailwind/html as a dependency on your project.

## Using NPM

```bash
npm i @material-tailwind/html
```

<br />

## Using Yarn

```bash
yarn add @material-tailwind/html
```

<br />

## Using PNPM

```bash
pnpm i @material-tailwind/html
```

<br />

## TailwindCSS Configurations

Once you install @material-tailwind/html you need to wrap your tailwind css configurations with the `withMT()` function coming from @material-tailwind/html.

```js
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {}
  },
  plugins: []
});
```

<br />

## Example

Now you're good to go and use @material-tailwind/html in your project.

```html
<button class="button button-pink">Button</button>
```
