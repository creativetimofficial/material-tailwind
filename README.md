# @material-tailwind

![version](https://img.shields.io/badge/version-0.3.4-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) <a href="https://github.com/creativetimofficial/material-tailwind/issues?q=is%3Aopen+is%3Aissue" target="_blank">![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/md-tailwind.svg)</a> <a href="https://github.com/creativetimofficial/material-tailwind/issues?q=is%3Aissue+is%3Aclosed" target="_blank">![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/md-tailwind.svg)</a>

<div align="center"><img src="./assets/img/material-tailwind-logo.png" alt="@material-tailwind" width="150"/></div>

### Material Tailwind

@material-tailwind is an easy to use components library for Tailwind CSS and Material Design.
It features multiple React components, all written with Tailwind CSS classes and Material Design guidelines.
Coming soon components for VueJS, Angular and many more. Add this repository to your watch list to get the latest news, or join our newsletter community: https://material-tailwind.com/.

## Table of Contents

-   [Components](https://material-tailwind.com/components)
-   [Quick Start](https://material-tailwind.com/documentation/quick-start)

## Components

-   [Alerts](https://material-tailwind.com/documentation/react/alerts)
-   [Buttons](https://material-tailwind.com/documentation/react/buttons/filled)
-   [Cards](https://material-tailwind.com/documentation/react/cards)
-   [Checkbox](https://material-tailwind.com/documentation/react/checkbox)
-   [Dropdowns](https://material-tailwind.com/documentation/react/dropdowns/filled)
-   [Dropups](https://material-tailwind.com/documentation/react/dropups/filled)
-   [Images](https://material-tailwind.com/documentation/react/images)
-   [Inputs](https://material-tailwind.com/documentation/react/inputs)
-   [Labels](https://material-tailwind.com/documentation/react/labels)
-   [Menus](https://material-tailwind.com/documentation/react/menus)
-   [Modals](https://material-tailwind.com/documentation/react/modals)
-   [Navbars](https://material-tailwind.com/documentation/react/navbars)
-   [Paginations](https://material-tailwind.com/documentation/react/paginations)
-   [Popovers](https://material-tailwind.com/documentation/react/popovers)
-   [Progressbars](https://material-tailwind.com/documentation/react/progressbars)
-   [Radio Button](https://material-tailwind.com/documentation/react/radioButton)
-   [Tabs](https://material-tailwind.com/documentation/react/tabs/icon)
-   [Textarea](https://material-tailwind.com/documentation/react/textareas)
-   [Tooltips](https://material-tailwind.com/documentation/react/tooltips)
-   [Typography](https://material-tailwind.com/documentation/react/typography/headings)

## Quick start

### React

##### Using NPM

```
npm i -E @material-tailwind/react
```

##### Using Yarn

```
yarn add @material-tailwind/react -E
```

##### Import Material Tailwind Style Sheet

Import the `tailwind.css` into your `app.js` file. Make sure to import the `tailwind.css` style sheet after all other style sheets.

```
import "@material-tailwind/react/tailwind.css";
```

##### Link Material Icons Fonts to your project

Add a link for the material icons fonts inside the head of your project, so to use the material icons with material tailwind components. You can also use font awesome font family for the project just add a link for it inside the head of your project.

```
// Material Icons Link
<link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
/>

// Font Awesome Link
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
    integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
    crossOrigin="anonymous"
/>
```

## Documentation - React

After you have installed `@material-tailwind` into your project, you can import and use our components like so:

### Usage

```
import React from "react";
import Button from "@material-tailwind/react/Button";

export default function Example() {
  return (
    <Button
      color="lightBlue"
      ripple="light"
    >
      Button
    </Button>
  )
}
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

|                                                               Chrome                                                               |                                                               Firefox                                                                |                                                               Edge                                                                |                                                               Safari                                                                |                                                               Opera                                                                |
| :--------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64"> |

## Reporting Issues

We use GitHub Issues as the official bug tracker for the @material-tailwind. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the @material-tailwind.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

-   Copyright 2021 <a href="https://www.creative-tim.com/?ref=nnjs-readme" target="_blank">Creative Tim</a>

-   Licensed under <a href="https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md" target="_blank">MIT</a>

## Useful Links

-   <a href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w" target="_blank">Tutorials</a>
-   <a href="https://www.creative-tim.com/affiliates/new?ref=nnjs-readme" target="_blank">Affiliate Program</a> (earn money)
-   <a href="http://blog.creative-tim.com/?ref=nnjs-readme" target="_blank">Blog Creative Tim</a>
-   <a href="https://www.creative-tim.com/templates/free?ref=nnjs-readme" target="_blank">Free Products</a> from Creative Tim
-   <a href="https://www.creative-tim.com/templates/premium?ref=nnjs-readme" target="_blank">Premium Products</a> from Creative Tim
-   <a href="https://www.creative-tim.com/templates/react?ref=nnjs-readme" target="_blank">React Products</a> from Creative Tim
-   <a href="https://www.creative-tim.com/templates/angular?ref=nnjs-readme" target="_blank">Angular Products</a> from Creative Tim
-   <a href="https://www.creative-tim.com/templates/vuejs?ref=nnjs-readme" target="_blank">VueJS Products</a> from Creative Tim
-   <a href="https://www.creative-tim.com/templates?ref=nnjs-readme" target="_blank">More products</a> from Creative Tim
-   Check our Bundles <a href="https://www.creative-tim.com/bundles?ref=nnjs-readme" target="_blank">here</a>
-   Check our awesome builder <a href="https://www.creative-tim.com/builder/argon?ref=nnjs-readme" target="_blank">here</a>

### Social Media

Twitter: <a href="https://twitter.com/CreativeTim" target="_blank">https://twitter.com/CreativeTim</a>

Facebook: <a href="https://www.facebook.com/CreativeTim" target="_blank">https://www.facebook.com/CreativeTim</a>

Dribbble: <a href="https://dribbble.com/creativetim" target="_blank">https://dribbble.com/creativetim</a>

Instagram: <a href="https://www.instagram.com/creativetimofficial/" target="_blank">https://www.instagram.com/creativetimofficial/</a>
