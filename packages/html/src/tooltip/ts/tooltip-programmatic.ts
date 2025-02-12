import { TooltipConfig, ITooltip } from "./tooltip.types";
import { loadPopperJs } from "../../utils/loadPopper";
import { createPopper, Instance as PopperInstance } from "@popperjs/core";

export class Tooltip implements ITooltip {
  public triggerElement: HTMLElement;
  public tooltipElement: HTMLElement | null = null;
  public tooltipInstance: PopperInstance | null = null;
  public options: TooltipConfig;

  constructor(triggerElement: HTMLElement, options: TooltipConfig = {}) {
    this.triggerElement = triggerElement;
    this.options = {
      placement: options.placement || "top",
      tooltipClass: options.tooltipClass || "tooltip-default",
      content: options.content || "",
    };

    this.init();
  }

  private async init(): Promise<void> {
    await loadPopperJs();

    this.triggerElement.addEventListener("mouseenter", this.showTooltip.bind(this));
    this.triggerElement.addEventListener("mouseleave", this.hideTooltip.bind(this));
  }

  public async showTooltip(): Promise<void> { // Changed to public
    if (this.tooltipElement) return; // Avoid duplicate tooltips

    this.tooltipElement = document.createElement("div");
    this.tooltipElement.className = this.options.tooltipClass!;

    if (typeof this.options.content === "string") {
      this.tooltipElement.textContent = this.options.content;
    } else if (this.options.content instanceof HTMLElement) {
      const contentClone = this.options.content.cloneNode(true) as HTMLElement;
      contentClone.classList.remove("hidden");
      this.tooltipElement.appendChild(contentClone);
    } else {
      console.warn("No valid content provided for tooltip.");
      return;
    }

    document.body.appendChild(this.tooltipElement);

    this.tooltipInstance = createPopper(this.triggerElement, this.tooltipElement, {
      placement: this.options.placement,
      modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
    });
  }

  public hideTooltip(): void { // Changed to public
    if (this.tooltipInstance) {
      this.tooltipInstance.destroy();
      this.tooltipInstance = null;
    }

    if (this.tooltipElement) {
      this.tooltipElement.remove();
      this.tooltipElement = null;
    }
  }

  public destroy(): void {
    this.triggerElement.removeEventListener("mouseenter", this.showTooltip.bind(this));
    this.triggerElement.removeEventListener("mouseleave", this.hideTooltip.bind(this));
    this.hideTooltip();
  }
}

