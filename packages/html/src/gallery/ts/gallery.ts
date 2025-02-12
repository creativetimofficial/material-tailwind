// Gallery component
const initializedElements = new WeakSet<Element>();

export function changeMainImage(event: Event): void {
  const thumbnail = event.currentTarget as HTMLImageElement;
  const mainImage = document.querySelector<HTMLImageElement>('[data-main-image]');

  if (mainImage) {
    // Change the main image's src to the clicked thumbnail's src
    mainImage.src = thumbnail.src;

    // Optional: Add an "active" class to the clicked thumbnail
    document.querySelectorAll<HTMLElement>('[data-thumbnail]').forEach((thumb) => {
      thumb.classList.remove('active-thumbnail');
    });
    thumbnail.classList.add('active-thumbnail');
  }
}

export function initGallery(): void {
  document.querySelectorAll<HTMLElement>('[data-thumbnail]').forEach((thumbnail) => {
    if (!initializedElements.has(thumbnail)) {
      thumbnail.addEventListener('click', changeMainImage);
      initializedElements.add(thumbnail);
    }
  });
}

export function cleanupGallery(): void {
  document.querySelectorAll<HTMLElement>('[data-thumbnail]').forEach((thumbnail) => {
    if (initializedElements.has(thumbnail)) {
      thumbnail.removeEventListener('click', changeMainImage);
      initializedElements.delete(thumbnail);
    }
  });
}

// Auto-initialize on DOMContentLoaded and observe dynamically added elements
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initGallery(); // Initialize gallery after DOM is loaded

    // Observe the DOM for dynamically added thumbnails
    const observer = new MutationObserver(() => {
      initGallery(); // Re-initialize gallery when new elements are added
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
}