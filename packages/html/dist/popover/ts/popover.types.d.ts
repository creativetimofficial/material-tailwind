/**
 * Configuration options for the Popover component.
 */
export interface PopoverConfig {
    /**
     * The placement of the popover relative to the trigger.
     */
    placement?: string;
    /**
     * Custom classes to apply to the popover element.
     */
    popoverClass?: string;
    /**
     * Plain text content for the popover.
     */
    content?: string | HTMLElement;
    /**
     * Whether the popover is open by default.
     */
    openByDefault?: boolean;
    /**
     * Offset for the popover position.
     */
    offset?: [number, number];
}
/**
 * Interface for the Popover instance.
 */
export interface IPopover {
    /**
     * Opens the popover programmatically.
     */
    open(): void;
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
