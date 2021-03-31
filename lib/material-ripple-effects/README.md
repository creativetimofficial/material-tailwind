# material-ripple-effects

### Material Design Ripple Effects.

material-ripple-effects makes you able to have Material Design Ripple Effect on any element you want.

#### material-ripple-effects comes with two colors:

1. Light
2. Dark

## Installation

### Using NPM or Yarn

1. Install the material-ripple-effects from npm or yarn.

```
npm i material-ripple-effects

yarn add material-ripple-effects
```

2. Import the material-ripple-effects in to your project.

```
import Ripple from 'material-ripple-effects';
```

3. material-ripple-effects works using react events on the element. You need to initialize the Ripple() object first and then use its create() method on the element event.

```
import React from "react";
import Ripple from 'material-ripple-effects';

export default function Button() {
  const ripple = new Ripple();

  return (
    <>
      <button onMouseUp={(e) => ripple.create(e, 'light')>Material Ripple</button>
      <button onMouseUp={(e) => ripple.create(e, 'dark')>Material Ripple</button>
    </>
  );
}
```

### Using CDN

1. Add the CDN script of material-ripple-effects in to your HTML file.

```
<script crossorigin src="https://unpkg.com/material-ripple-effects/ripple.js"></script>
```

2. material-ripple-effects cdn works using the data attribute on the element, set the `data-ripple-light` or `data-ripple-dark` on the element you want to have material design ripple effect.

```
<button data-ripple-light="true">Material Ripple</button>
<button data-ripple-dark="true">Material Ripple</button>
```
