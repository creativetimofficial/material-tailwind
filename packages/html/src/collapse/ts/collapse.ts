// Collapse Component in TypeScript

// Track initialized elements
const initializedElements = new WeakSet<HTMLElement>();

/**
 * Toggles the visibility of a collapsible element.
 * @param event - The click event triggering the toggle.
 */
export function toggleCollapse(event: Event): void {
  const button = event.currentTarget as HTMLElement | null;
  if (!button) return;

  const collapseID = button.getAttribute("data-target");

  if (collapseID && collapseID.startsWith("#")) {
    const collapseElement = document.querySelector<HTMLElement>(collapseID);
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    if (collapseElement) {
      // Toggle max-height for collapsible content
      collapseElement.style.maxHeight = isExpanded ? "0" : `${collapseElement.scrollHeight}px`;

      // Update aria-expanded attribute
      button.setAttribute("aria-expanded", `${!isExpanded}`);

      // Toggle rotate-180 class on the icon
      const icon = button.querySelector<HTMLElement>("[data-icon]");
      if (icon) {
        icon.classList.toggle("rotate-180", !isExpanded);
      }
    }
  }
}

/**
 * Initializes collapsible buttons by attaching event listeners.
 */
export function initCollapse(): void {
  document.querySelectorAll<HTMLElement>("[data-toggle='collapse']").forEach((button) => {
    if (!initializedElements.has(button)) {
      button.addEventListener("click", toggleCollapse);
      initializedElements.add(button); // Mark as initialized
    }
  });
}

// Auto-initialize on DOMContentLoaded and observe dynamically added elements
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initCollapse(); // Initialize collapsibles after DOM is loaded

    // Observe the DOM for dynamically added collapsible elements
    const observer = new MutationObserver(() => {
      initCollapse(); // Re-initialize collapsibles when new elements are added
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
}
