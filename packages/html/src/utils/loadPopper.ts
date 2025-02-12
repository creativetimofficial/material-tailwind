let popperLoaded = false; // Singleton flag to track loading state
let popperReady: Promise<typeof import('@popperjs/core') | undefined> | null = null; // Promise to handle loading Popper.js once

declare global {
  interface Window {
    Popper?: typeof import('@popperjs/core');
  }
}

export function loadPopperJs(): Promise<typeof import('@popperjs/core') | undefined> {
  if (popperLoaded) {
    return popperReady!; // Return the existing Promise if already loading or loaded
  }

  popperLoaded = true; // Mark Popper.js as being loaded

  popperReady = new Promise((resolve, reject) => {
    if (window.Popper) {
      resolve(window.Popper); // If already loaded globally, resolve immediately
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@popperjs/core@2';
    script.defer = true;

    script.onload = () => {
      resolve(window.Popper); // Resolve once Popper.js is loaded
    };

    script.onerror = () => {
      reject(new Error('Failed to load Popper.js'));
    };

    document.head.appendChild(script);
  });

  return popperReady;
}
