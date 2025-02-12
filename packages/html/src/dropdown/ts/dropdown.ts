import { loadPopperJs } from "../../utils/loadPopper"; // Centralized loader
import { createPopper, Instance, Placement } from "@popperjs/core";

const initializedDropdowns = new WeakSet<HTMLElement>(); // Prevent duplicate initialization
let activeDropdowns: { dropdown: HTMLElement; popperInstance: Instance | null }[] = []; // Track active dropdowns for cleanup

export class Dropdown {
  dropdown: HTMLElement;
  button: HTMLElement;
  menu: HTMLElement;
  popperInstance: Instance | null = null;
  placement: string;

  constructor(dropdownElement: HTMLElement) {
    this.dropdown = dropdownElement;
    this.button = this.dropdown.querySelector('[data-toggle="dropdown"],[data-toggle="menu"]') as HTMLElement;
    this.menu = this.dropdown.querySelector('[data-role="menu"]') as HTMLElement;
    this.placement = this.dropdown.getAttribute("data-placement") || "bottom-start";

    this.init();
  }

  async init(): Promise<void> {
    // Ensure Popper.js is loaded
    await loadPopperJs();

    // Initialize Popper.js
    this.popperInstance = createPopper(this.button, this.menu, {
      placement: this.placement as Placement,
      modifiers: [{ name: "offset", options: { offset: [0, 5] } }],
    });

    // Add event listeners
    this.button.addEventListener("click", (e: Event) => {
      e.stopPropagation();
      this.toggleDropdown();
    });

    document.addEventListener("click", (e: Event) => {
      if (!this.dropdown.contains(e.target as Node)) {
        this.closeDropdown();
      }
    });

    // Track active dropdown for cleanup
    activeDropdowns.push({ dropdown: this.dropdown, popperInstance: this.popperInstance });
  }

  toggleDropdown(): void {
    const isExpanded = this.button.getAttribute("aria-expanded") === "true";
    isExpanded ? this.closeDropdown() : this.openDropdown();
  }

  openDropdown(): void {
    this.button.setAttribute("aria-expanded", "true");
    this.menu.hidden = false;
    this.menu.classList.remove("hidden");
    if (this.popperInstance) {
      this.popperInstance.update();
    }
  }

  closeDropdown(): void {
    this.button.setAttribute("aria-expanded", "false");
    this.menu.hidden = true;
    this.menu.classList.add("hidden");
  }
}

export function initDropdowns(): void {
  document.querySelectorAll<HTMLElement>(".dropdown, .menu").forEach((dropdownElement) => {
    if (!initializedDropdowns.has(dropdownElement)) {
      new Dropdown(dropdownElement);
      initializedDropdowns.add(dropdownElement);
    }
  });
}

// Cleanup function to destroy all active dropdowns
export function cleanupDropdowns(): void {
  activeDropdowns.forEach(({ dropdown, popperInstance }) => {
    if (popperInstance) popperInstance.destroy();
    if (dropdown) initializedDropdowns.delete(dropdown);
  });
  activeDropdowns = [];
}

// Combined initialization function
export async function loadAndInitDropdowns(): Promise<void> {
  await loadPopperJs();
  initDropdowns();
}

// Auto-initialize Dropdowns in the Browser Environment
if (typeof window !== "undefined" && typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    loadAndInitDropdowns();

    // Observe the DOM for dynamically added dropdowns
    const observer = new MutationObserver(() => {
      initDropdowns();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
}
