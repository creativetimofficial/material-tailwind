// Gallery component
const initializedElements = new WeakSet();

export function changeMainImage(event) {
  const thumbnail = event.currentTarget;
  const mainImage = document.querySelector('[data-main-image]');

  if (mainImage) {
    // Change the main image's src to the clicked thumbnail's src
    mainImage.src = thumbnail.src;

    // Optional: Add an "active" class to the clicked thumbnail
    document.querySelectorAll('[data-thumbnail]').forEach((thumb) => {
      thumb.classList.remove('active-thumbnail');
    });
    thumbnail.classList.add('active-thumbnail');
  }
}

export function initGallery() {
  document.querySelectorAll('[data-thumbnail]').forEach((thumbnail) => {
    if (!initializedElements.has(thumbnail)) {
      thumbnail.addEventListener('click', changeMainImage);
      initializedElements.add(thumbnail);
    }
  });
}

export function cleanupGallery() {
  document.querySelectorAll('[data-thumbnail]').forEach((thumbnail) => {
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