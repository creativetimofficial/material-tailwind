# @md-tailwind

![version](https://img.shields.io/badge/version-0.1.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) <a href="https://github.com/creativetimofficial/md-tailwind/issues?q=is%3Aopen+is%3Aissue" target="_blank">![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/md-tailwind.svg)</a> <a href="https://github.com/creativetimofficial/md-tailwind/issues?q=is%3Aissue+is%3Aclosed" target="_blank">![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/md-tailwind.svg)</a>

<div align="center"><img src="./assets/img/material-tailwind-logo.png" alt="@material-tailwind" width="150"/></div>

### Material Design Tailwind

@material-tailwind is an easy to use React components for Tailwind CSS and Material Design.

## Table of Contents

- [Components](#components)
- [Quick Start](#quick-start)

## Components

- [Alerts](#alerts)
- [Buttons](#buttons)
- [Cards](#cards)
- [Dropdowns](#dropdowns)
- [Dropups](#dropups)
- [Images](#images)
- [Inputs](#inputs)
- [Labels](#labels)
- [Menus](#menus)
- [Modals](#modals)
- [Navbars](#navbars)
- [Paginations](#paginations)
- [Popovers](#popovers)
- [Progressbars](#progressbars)
- [Tabs](#tabs)
- [Tooltips](#tooltips)
- [Typography](#typography)

## Quick start

```
npm i @material-tailwind
```

## Documentation - React

After you have installed `@material-tailwind` into your project, you can import and use our components like so:

### Usage

```
import React from "react";
import Buttons from "@material-tailwind/react/Buttons";
import Ripple from "material-ripple-effects";

export default function Buttons() {
  const ripple = new Ripple();

  return (
    <Buttons
      color="lightBlue"
      onMouseUp={(e) => ripple.create(e, 'light')}
    >
      Button
    </Buttons>
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

- Copyright 2020 <a href="https://www.creative-tim.com/?ref=nnjs-readme" target="_blank">Creative Tim</a>

- Licensed under <a href="https://github.com/creativetimofficial/notus-nextjs/blob/master/LICENSE.md" target="_blank">MIT</a>

## Useful Links

- <a href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w" target="_blank">Tutorials</a>
- <a href="https://www.creative-tim.com/affiliates/new?ref=nnjs-readme" target="_blank">Affiliate Program</a> (earn money)
- <a href="http://blog.creative-tim.com/?ref=nnjs-readme" target="_blank">Blog Creative Tim</a>
- <a href="https://www.creative-tim.com/templates/free?ref=nnjs-readme" target="_blank">Free Products</a> from Creative Tim
- <a href="https://www.creative-tim.com/templates/premium?ref=nnjs-readme" target="_blank">Premium Products</a> from Creative Tim
- <a href="https://www.creative-tim.com/templates/react?ref=nnjs-readme" target="_blank">React Products</a> from Creative Tim
- <a href="https://www.creative-tim.com/templates/angular?ref=nnjs-readme" target="_blank">Angular Products</a> from Creative Tim
- <a href="https://www.creative-tim.com/templates/vuejs?ref=nnjs-readme" target="_blank">VueJS Products</a> from Creative Tim
- <a href="https://www.creative-tim.com/templates?ref=nnjs-readme" target="_blank">More products</a> from Creative Tim
- Check our Bundles <a href="https://www.creative-tim.com/bundles?ref=nnjs-readme" target="_blank">here</a>
- Check our awesome builder <a href="https://www.creative-tim.com/builder/argon?ref=nnjs-readme" target="_blank">here</a>

### Social Media

Twitter: <a href="https://twitter.com/CreativeTim" target="_blank">https://twitter.com/CreativeTim</a>

Facebook: <a href="https://www.facebook.com/CreativeTim" target="_blank">https://www.facebook.com/CreativeTim</a>

Dribbble: <a href="https://dribbble.com/creativetim" target="_blank">https://dribbble.com/creativetim</a>

Instagram: <a href="https://www.instagram.com/creativetimofficial/" target="_blank">https://www.instagram.com/creativetimofficial/</a>
