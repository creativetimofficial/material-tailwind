# Material Tailwind - Free Tailwind CSS Components Library

[Material Tailwind](https://www.material-tailwind.com/docs/v3/html/overview) is a free and open-source collection of customizable, production-ready UI components built with **Tailwind CSS**. Designed to be developer-friendly and performance-focused, Material Tailwind streamlines the creation of modern, visually appealing interfaces, helping you deliver high-quality user experiences faster.

[![Material Tailwind Thumb](https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/material-tailwind-v3-readme.jpg)](https://www.material-tailwind.com/docs/v3/html/overview)

<div align="center">
  
[![npm version](https://img.shields.io/npm/v/@material-tailwind/html.svg)](https://www.npmjs.com/package/@material-tailwind/html)
[![npm downloads](https://img.shields.io/npm/dm/@material-tailwind/html.svg)](https://www.npmjs.com/package/@material-tailwind/html)

</div>

## Table of Contents

- [Material Tailwind - Free Tailwind CSS Components Library](#material-tailwind---free-tailwind-css-components-library)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Using with CDN](#using-with-cdn)
    - [Basic Usage NPM](#basic-usage-npm)
    - [Using with Global Access](#using-with-global-access)
    - [Typescript](#typescript)
  - [Documentation](#documentation)
  - [Explore Components](#explore-components)
  - [Community](#community)
  - [License](#license)
  - [Contribute \& Feedback](#contribute--feedback)

## Getting Started

Learn how to use `@material-tailwind/html` components to quickly and easily create elegant and flexible pages using Tailwind CSS.

`@material-tailwind/html` is working with Tailwind CSS classes and you need to have Tailwind CSS installed on your project - <a href="https://tailwindcss.com/docs/installation" target="_blank">Tailwind CSS Installation.</a>

### Using with CDN

You can include `@material-tailwind/html` via a CDN and initialize alerts globally in the browser. Add the following script to your HTML file:

```html
<script
  src="https://cdn.jsdelivr.net/gh/creativetimofficial/material-tailwind@3.0.0-beta.2/packages/dist/material-tailwind.min.js"
  defer
></script>
```

### Basic Usage NPM

```bash
npm i @material-tailwind/html@3.0.0-beta.2
```

After installing, you can use the components in your project across different frameworks:

```tsx
import { initAlert } from "@material-tailwind/html";

// Initialize alerts
initAlert();
```

### Using with Global Access

If you prefer, you can use the Material Tailwind global object instead of directly importing initAlert:

```tsx
import * as MaterialTailwind from "@material-tailwind/html";

// Initialize alerts
MaterialTailwind.initAlert();
```

## TypeScript

Material Tailwind components can be used in two ways - through simple ESM imports or programmatically with TypeScript support. Here's how to use both approaches:

### Simple ESM Import

The quickest way to use components is through direct ESM imports:

```tsx
import { initAlert } from "@material-tailwind/html";

// Initialize alerts
initAlert();
```

### Programmatic Usage with TypeScript

For more control and type safety, you can use the programmatic approach with full TypeScript support:

This programmatic approach provides:

- Full TypeScript support
- Fine-grained control over component behavior
- Access to component instance methods
- Proper cleanup on unmount

```tsx
import { Accordion } from "@material-tailwind/html";
import type { AccordionConfig, IAccordion } from "@material-tailwind/html";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("accordion-container");

  if (container) {
    const config: AccordionConfig = {
      exclusive: true,
      allOpen: false,
    };

    const accordion: IAccordion = new Accordion(container, config);

    // Handle external button controls
    const showAllButton = document.getElementById("show-all");
    const hideAllButton = document.getElementById("hide-all");
    const toggleFirstButton = document.getElementById("toggle-first");

    showAllButton?.addEventListener("click", () => {
      accordion.showAll();
    });

    hideAllButton?.addEventListener("click", () => {
      accordion.hideAll();
    });

    toggleFirstButton?.addEventListener("click", () => {
      const firstButton = document.getElementById("button-1") as HTMLElement;
      if (firstButton) {
        accordion.toggle(firstButton);
      }
    });

    // Cleanup on unmount
    window.addEventListener("unload", () => {
      accordion.cleanup();
    });
  }
});
```

For detailed usage of each component, check out their respective documentation:

- [Accordion](https://www.material-tailwind.com/docs/v3/html/accordion) (ESM & Programmatic)
- [Alert](https://www.material-tailwind.com/docs/v3/html/alert) (ESM)
- [Collapse](https://www.material-tailwind.com/docs/v3/html/collapse) (ESM & Programmatic)
- [Dropdown](https://www.material-tailwind.com/docs/v3/html/dropdown) (ESM & Programmatic)
- [Gallery](https://www.material-tailwind.com/docs/v3/html/gallery) (ESM)
- [Modal](https://www.material-tailwind.com/docs/v3/html/modal) (ESM & Programmatic)
- [Popover](https://www.material-tailwind.com/docs/v3/html/popover) (ESM & Programmatic)
- [Stepper](https://www.material-tailwind.com/docs/v3/html/stepper) (ESM & Programmatic)
- [Tabs](https://www.material-tailwind.com/docs/v3/html/tabs) (ESM & Programmatic)
- [Tooltip](https://www.material-tailwind.com/docs/v3/html/tooltip) (ESM & Programmatic)

Congratulations 🥳, you did it, now you're ready to use `@material-tailwind/html`.

## Documentation

Material Tailwind’s documentation includes code snippets, previews, and detailed usage instructions for each component, ensuring a smooth implementation process.

Visit the **[Material Tailwind Docs](https://www.material-tailwind.com/docs/v3/html/overview)** to explore the entire library.

## Explore Components

<table>
  
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/accordion">
        <img alt="accordion" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/accordion-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/alert">
        <img alt="alert" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/alert-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/avatar">
        <img alt="avatar" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/avatar-thumbnail.jpg">
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Accordion</td>
    <td width="33.3333%">Alert</td>
    <td width="33.3333%">Avatar</td>
  </tr>
  <tr height="30"></tr>
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/badge">
        <img alt="typography" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/badge-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/breadcrumb">
        <img alt="breadcrumbs" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/breadcrumbs-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/button">
        <img alt="button" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/button-thumbnail.jpg">
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Badge</td>
    <td width="33.3333%">Breadcrumbs</td>
    <td width="33.3333%">Button</td>
  </tr>
  <tr height="30"></tr>
  
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/button-group">
        <img alt="select" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/buttongroup-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/card">
        <img alt="card" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/card-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/checkbox">
        <img alt="checkbox" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/checkbox-thumbnail.jpg">
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Button Group</td>
    <td width="33.3333%">Card</td>
    <td width="33.3333%">Checkbox</td>
  </tr>
  <tr height="30"></tr>
  
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/chip">
        <img alt="chip" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/chip-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/collapse">
        <img alt="tooltip" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/collapse-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/dropdown">
        <img alt="menu" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/menu-thumbnail.jpg">
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Chip</td>
    <td width="33.3333%">Collapse</td>
    <td width="33.3333%">Dropdown</td>
  </tr>
  <tr height="30"></tr>
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/footer">
        <img alt="typography" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/footer-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/icon-button">
        <img alt="icon-button" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/icon-button-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/image">
        <img alt="typography" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/img-thumbnail.jpg">
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Footer</td>
    <td width="33.3333%">Icon Button</td>
    <td width="33.3333%">Image</td>
  </tr>
  <tr height="30"></tr>
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/input">
        <img alt="input" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/input-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/list">
        <img alt="tooltip" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/list-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/modal">
        <img alt="dialog" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/dialog-thumbnail.jpg"> 
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Input</td>
    <td width="33.3333%">List</td>
    <td width="33.3333%">Modal</td>
  </tr>
  <tr height="30"></tr>
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/navbar">
        <img alt="navbar" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/navbar-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/pagination">
        <img alt="pagination" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/pagination-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/popover">
        <img alt="popover" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/popover-thumbnail.jpg">
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Navbar</td>
    <td width="33.3333%">Pagination</td>
    <td width="33.3333%">Popover</td>
  </tr>
  <tr height="30"></tr>
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/progress">
        <img alt="progress-bar" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/progress-bar-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/radio">
        <img alt="radio-button" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/radio-button-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/rating">
        <img alt="tooltip" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/ratingbar-thumbnail.jpg">
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Progress Bar</td>
    <td width="33.3333%">Radio Button</td>
    <td width="33.3333%">Rating Bar</td>
  </tr>
  <tr height="30"></tr>
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/sidebar">
        <img alt="tooltip" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/sidebar-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/spinner">
        <img alt="tooltip" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/spinner-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/stepper">
        <img alt="tooltip" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/stepper-thumbnail.jpg">
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Sidebar</td>
    <td width="33.3333%">Spinner</td>
    <td width="33.3333%">Stepper</td>
  </tr>
  <tr height="30"></tr>
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/switch">
        <img alt="switch" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/switch-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/table">
        <img alt="typography" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/table-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/tabs">
        <img alt="tabs" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/tabs-thumbnail.jpg">
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Switch</td>
    <td width="33.3333%">Table</td>
    <td width="33.3333%">Tabs</td>
  </tr>
  <tr height="30"></tr>
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/textarea">
        <img alt="textarea" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/text-area-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/tooltip">
        <img alt="tooltip" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/tooltip-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/typography">
        <img alt="typography" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/typography-thumbnail.jpg">
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Textarea</td>
    <td width="33.3333%">Tooltip</td>
    <td width="33.3333%">Typography</td>
  </tr>
  <tr height="30"></tr>
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/timeline">
        <img alt="tooltip" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/timeline-thumbnail.jpg">
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="https://www.material-tailwind.com/docs/v3/html/video">
        <img alt="tooltip" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind-pro/v3/components-thumbnails/video-thumbnail.jpg">
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Timeline</td>
    <td width="33.3333%">Video</td>
  </tr>
</table>

## Community

- We're excited to see the community adopt Material Tailwind, raise issues, and provide feedback.
- Whether it's a feature request, bug report, or a project to showcase, please get involved!

## License

Copyright (c) 2020-2025 [Creative Tim](https://www.creative-tim.com)

Material Tailwind is distributed under the **[MIT License](https://creative-tim.com/material-tailwind/docs/html/license)**, providing freedom and flexibility for all projects.

## Contribute & Feedback

We welcome contributions and feedback! If you have suggestions, encounter issues, or want to propose new components, feel free to open an issue or submit a pull request on our repository. Your input helps make Material Tailwind better for everyone.

---

**Build better, faster, and smarter with Material Tailwind.** Explore the documentation and start leveraging our components to deliver polished, user-friendly interfaces with ease.
