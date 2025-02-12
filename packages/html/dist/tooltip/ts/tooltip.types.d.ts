import { Placement, Instance as PopperInstance } from "@popperjs/core";
/**
 * Options for configuring a tooltip instance.
 */
export interface TooltipConfig {
    /**
     * The placement of the tooltip relative to the trigger element.
     * Possible values include "top", "bottom", "left", "right", etc.
     * @see https://popper.js.org/docs/v2/constructors/#placement
     */
    placement?: Placement;
    /**
     * CSS classes to apply to the tooltip element for styling.
     */
    tooltipClass?: string;
    /**
     * The content to display inside the tooltip.
     * This can be a string or an HTML element.
     */
    content?: string | HTMLElement;
}
/**
 * Represents an active tooltip instance.
 */
export interface ITooltip {
    /**
     * The HTML element that serves as the trigger for the tooltip.
     */
    triggerElement: HTMLElement;
    /**
     * The tooltip's HTML element.
     */
    tooltipElement: HTMLElement | null;
    /**
     * The Popper.js instance used for positioning.
     */
    tooltipInstance: PopperInstance | null;
    /**
     * Shows the tooltip.
     * @returns A promise that resolves once the tooltip is displayed.
     */
    showTooltip: () => Promise<void>;
    /**
     * Hides the tooltip.
     */
    hideTooltip: () => void;
    /**
     * Destroys the tooltip instance, removing all event listeners and DOM elements.
     */
    destroy: () => void;
}
