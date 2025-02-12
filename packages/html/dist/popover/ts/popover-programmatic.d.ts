import type { PopoverConfig, IPopover } from "./popover.types";
/**
 * Class representing a programmatic Popover component.
 */
export declare class Popover implements IPopover {
    private trigger;
    private config;
    private popperInstance;
    private popoverElement;
    /**
     * Creates an instance of Popover.
     * @param trigger - The element that triggers the popover.
     * @param config - Configuration options for the popover.
     */
    constructor(trigger: HTMLElement, config: PopoverConfig);
    /**
     * Initializes the Popover instance.
     */
    private init;
    /**
     * Handles the click event on the trigger element.
     * @param event - The click event.
     */
    private handleTriggerClick;
    /**
     * Opens the popover programmatically.
     */
    open(): Promise<void>;
    /**
     * Closes the popover programmatically.
     */
    close(): void;
    /**
     * Toggles the popover's visibility programmatically.
     */
    toggle(): void;
    /**
     * Destroys the Popover instance and cleans up resources.
     */
    destroy(): void;
}
