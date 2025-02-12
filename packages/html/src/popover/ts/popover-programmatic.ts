import { createPopper, Placement, Instance as PopperInstance } from "@popperjs/core";
import { loadPopperJs } from "../../utils/loadPopper";
import type { PopoverConfig, IPopover } from "./popover.types";

/**
 * Class representing a programmatic Popover component.
 */
export class Popover implements IPopover {
  private trigger: HTMLElement;
  private config: PopoverConfig;
  private popperInstance: PopperInstance | null = null;
  private popoverElement: HTMLElement | null = null;

  /**
   * Creates an instance of Popover.
   * @param trigger - The element that triggers the popover.
   * @param config - Configuration options for the popover.
   */
  constructor(trigger: HTMLElement, config: PopoverConfig) {
    this.trigger = trigger;
    this.config = {
      placement: config.placement || "top",
      popoverClass: config.popoverClass || "popover-default",
      content: config.content || "",
      openByDefault: config.openByDefault || false,
      offset: config.offset || [0, 8],
    };

    this.init();
  }

  /**
   * Initializes the Popover instance.
   */
  private async init(): Promise<void> {
    if (this.config.openByDefault) {
      await this.open();
    }

    // Attach click event to toggle popover
    this.trigger.addEventListener("click", this.handleTriggerClick.bind(this));
  }

  /**
   * Handles the click event on the trigger element.
   * @param event - The click event.
   */
  private handleTriggerClick(event: MouseEvent): void {
    event.stopPropagation();
    this.toggle();
  }

  /**
   * Opens the popover programmatically.
   */
  async open(): Promise<void> {
    if (this.popoverElement) return; // Prevent duplicate popovers

    await loadPopperJs();

    // Create the popover element
    this.popoverElement = document.createElement("div");
    this.popoverElement.className = this.config.popoverClass || "popover-default";

    // Set the content
    if (typeof this.config.content === "string") {
      this.popoverElement.textContent = this.config.content;
    } else if (this.config.content instanceof HTMLElement) {
      this.popoverElement.appendChild(this.config.content);
    } else {
      console.error("Invalid content provided for popover:", this.trigger);
      return;
    }

    // Append to the body
    document.body.appendChild(this.popoverElement);

    // Initialize Popper.js
    this.popperInstance = createPopper(this.trigger, this.popoverElement, {
      placement: this.config.placement as Placement,
      modifiers: [{ name: "offset", options: { offset: this.config.offset } }],
    });

    // Make visible
    requestAnimationFrame(() => {
      if (this.popoverElement) {
        this.popoverElement.style.opacity = "1";
        this.popoverElement.style.transform = "scale(1)";
        this.popperInstance?.update();
      }
    });
  }

  /**
   * Closes the popover programmatically.
   */
  close(): void {
    if (!this.popperInstance || !this.popoverElement) return;

    this.popperInstance.destroy();
    this.popperInstance = null;

    this.popoverElement.remove();
    this.popoverElement = null;
  }

  /**
   * Toggles the popover's visibility programmatically.
   */
  toggle(): void {
    if (this.popoverElement) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Destroys the Popover instance and cleans up resources.
   */
  destroy(): void {
    this.close();
    this.trigger.removeEventListener("click", this.handleTriggerClick.bind(this));
  }
}
