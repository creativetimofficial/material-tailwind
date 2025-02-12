import { createPopper, Placement, Instance as PopperInstance } from "@popperjs/core";
import { loadPopperJs } from "../../utils/loadPopper";

/**
 * Tracks initialized popover triggers to prevent duplicate initialization.
 */
const initializedPopovers = new WeakSet<HTMLElement>();

/**
 * Tracks active popovers for cleanup.
 */
let activePopovers: { trigger: HTMLElement; popoverElement: HTMLElement; popperInstance: PopperInstance | null }[] = [];

/**
 * Initializes all popovers in the DOM.
 */
export function initPopovers(): void {
  document.querySelectorAll<HTMLElement>("[data-toggle='popover']").forEach((trigger) => {
    if (initializedPopovers.has(trigger)) return; // Skip if already initialized

    const placement = trigger.getAttribute("data-placement") || "top";
    const popoverClasses = trigger.getAttribute("data-popover-class") || "popover-default";
    const plainContent = trigger.getAttribute("data-popover-content");
    const isOpenByDefault = trigger.hasAttribute("data-open");

    let popoverInstance: PopperInstance | null = null;
    let popperInstance: PopperInstance | null = null;
    let popoverElement: HTMLElement | null = null;
    let originalContentElement: HTMLElement | null = null;

    // Find content element next to the trigger
    const contentElement = trigger.nextElementSibling?.matches("[data-popover-content]")
      ? (trigger.nextElementSibling as HTMLElement)
      : null;

    /**
     * Opens the popover.
     */
    async function openPopover(): Promise<void> {
      await loadPopperJs();

      // Create the popover element
      popoverElement = document.createElement("div");
      popoverElement.className = popoverClasses;

      // Use custom HTML content or plain text
      if (contentElement) {
        originalContentElement = contentElement.cloneNode(true) as HTMLElement;
        originalContentElement.classList.remove("hidden");
        popoverElement.appendChild(originalContentElement);
      } else if (plainContent) {
        popoverElement.textContent = plainContent;
      } else {
        console.error("No content provided for popover:", trigger);
        return;
      }

      // Append the popover element to the body
      document.body.appendChild(popoverElement);

      // Initialize Popper.js
      popoverInstance = createPopper(trigger, popoverElement, {
        placement: placement as Placement,
        modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
      });

      // Add a small delay to ensure Popper.js calculations are correct
      requestAnimationFrame(() => {
        if (popoverElement) {
          popoverElement.style.opacity = "1"; // Make the popover visible
          popoverElement.style.transform = "scale(1)"; // Apply scaling animation
          popoverInstance?.update(); // Ensure Popper.js recalculates position
        }
      });

      // Track active popovers for cleanup
      if (popoverInstance) {
        activePopovers.push({ trigger, popoverElement, popperInstance });
      }
    }

    /**
     * Closes the popover.
     */
    function closePopover(): void {
      if (popoverInstance) {
        popoverInstance.destroy();
        popoverInstance = null;
      }

      if (popoverElement) {
        popoverElement.remove();
        popoverElement = null;
      }

      if (originalContentElement) {
        originalContentElement.classList.add("hidden");
      }

      // Remove from active popovers
      activePopovers = activePopovers.filter((p) => p.trigger !== trigger);
    }

    // Toggle popover on click
    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      if (popoverInstance) {
        closePopover();
      } else {
        openPopover();
      }
    });

    // Open popover by default if specified
    if (isOpenByDefault) {
      openPopover();
    }

    // Mark as initialized
    initializedPopovers.add(trigger);
  });
}

/**
 * Cleans up all active popovers and their event listeners.
 */
export function cleanupPopovers(): void {
  activePopovers.forEach(({ popoverElement, popperInstance }) => {
    if (popperInstance) popperInstance.destroy();
    if (popoverElement) popoverElement.remove();
  });
  activePopovers = [];
}

/**
 * Loads Popper.js dynamically and initializes popovers.
 */
export async function loadAndInitPopovers(): Promise<void> {
  await loadPopperJs();
  initPopovers();
}

// Auto-initialize Popovers in the Browser Environment
if (typeof window !== "undefined" && typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    loadAndInitPopovers();

    // Observe the DOM for dynamically added popovers
    const observer = new MutationObserver(() => {
      initPopovers(); // Reinitialize popovers when new elements are added
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
}
