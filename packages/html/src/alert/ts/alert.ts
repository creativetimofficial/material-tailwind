import { AlertEvent } from "./alert.types";

const initializedElements = new WeakSet<HTMLElement>();

export function closeAlert(event: AlertEvent): void {
  const button = event.currentTarget; // No need for type assertion; AlertEvent ensures it's an HTMLElement
  const alert = button.closest('[role="alert"]') as HTMLElement | null;
  if (alert) {
    alert.remove(); // Remove the alert
  }
}

export function initAlert(): void {
  document.querySelectorAll("[data-dismiss='alert']").forEach((button) => {
    if (!initializedElements.has(button as HTMLElement)) {
      // Cast the listener to ensure compatibility with AlertEvent
      button.addEventListener("click", closeAlert as EventListener);
      initializedElements.add(button as HTMLElement);
    }
  });
}

// Auto-initialize on DOMContentLoaded and observe dynamically added elements
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initAlert(); // Initialize alerts after DOM is loaded

    // Observe the DOM for dynamically added alerts
    const observer = new MutationObserver(() => {
      initAlert(); // Re-initialize alerts when new elements are added
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
}
