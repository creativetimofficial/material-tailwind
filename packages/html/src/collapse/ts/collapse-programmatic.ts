import type { CollapseConfig, ICollapse } from "./collapse.types";

/**
 * Class representing a programmatic Collapse component.
 */
export class Collapse implements ICollapse {
  private button: HTMLElement;
  private collapseElement: HTMLElement;
  private config: CollapseConfig;

  /**
   * Creates an instance of Collapse.
   * @param button - The button element or its selector controlling the collapsible content.
   * @param collapseElement - The collapsible content element or its selector.
   * @param config - Configuration options for the collapse.
   */
  constructor(button: HTMLElement | string, collapseElement: HTMLElement | string, config: CollapseConfig = {}) {
    this.button = this.resolveElement(button, "Button element not found");
    this.collapseElement = this.resolveElement(collapseElement, "Collapsible content element not found");
    this.config = config;

    this.init();
  }

  /**
   * Resolves an element from an HTMLElement or selector string.
   * @param elementOrSelector - HTMLElement or a selector string.
   * @param errorMessage - Error message if the element is not found.
   * @returns The resolved HTMLElement.
   */
  private resolveElement(elementOrSelector: HTMLElement | string, errorMessage: string): HTMLElement {
    if (typeof elementOrSelector === "string") {
      const resolvedElement = document.querySelector<HTMLElement>(elementOrSelector);
      if (!resolvedElement) throw new Error(errorMessage);
      return resolvedElement;
    } else if (elementOrSelector instanceof HTMLElement) {
      return elementOrSelector;
    }
    throw new Error(errorMessage);
  }

  /**
   * Initializes the Collapse component by attaching event listeners.
   */
  private init(): void {
    this.button.addEventListener("click", () => this.toggle());
  }

  /**
   * Toggles the collapsible content visibility.
   */
  toggle(): void {
    const isExpanded = this.button.getAttribute("aria-expanded") === "true";

    // Toggle max-height
    this.collapseElement.style.maxHeight = isExpanded ? "0" : `${this.collapseElement.scrollHeight}px`;

    // Update aria-expanded attribute
    this.button.setAttribute("aria-expanded", `${!isExpanded}`);

    // Toggle rotate class for icons if specified
    if (this.config.iconSelector) {
      const icon = document.querySelector<HTMLElement>(this.config.iconSelector);
      if (icon) {
        icon.classList.toggle("rotate-180", !isExpanded);
      }
    }
  }

  /**
   * Expands the collapsible content.
   */
  expand(): void {
    this.collapseElement.style.maxHeight = `${this.collapseElement.scrollHeight}px`;
    this.button.setAttribute("aria-expanded", "true");

    // Update icon state
    if (this.config.iconSelector) {
      const icon = document.querySelector<HTMLElement>(this.config.iconSelector);
      if (icon) {
        icon.classList.add("rotate-180");
      }
    }
  }

  /**
   * Collapses the collapsible content.
   */
  collapse(): void {
    this.collapseElement.style.maxHeight = "0";
    this.button.setAttribute("aria-expanded", "false");

    // Update icon state
    if (this.config.iconSelector) {
      const icon = document.querySelector<HTMLElement>(this.config.iconSelector);
      if (icon) {
        icon.classList.remove("rotate-180");
      }
    }
  }
}
