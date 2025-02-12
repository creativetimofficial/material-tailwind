/**
 * Configuration options for the Dropdown component.
 */
export interface DropdownConfig {
    /**
     * Placement of the dropdown relative to the button (default: "bottom-start").
     */
    placement?: string;
    /**
     * Whether clicking outside the dropdown menu closes it (default: true).
     */
    closeOnOutsideClick?: boolean;
    /**
     * Offset of the dropdown menu relative to the button ([x, y]).
     */
    offset?: [number, number];
}
/**
 * Interface for the Dropdown component.
 */
export interface IDropdown {
    /**
     * Toggles the dropdown menu visibility.
     */
    toggle(): void;
    /**
     * Opens the dropdown menu.
     */
    open(): void;
    /**
     * Closes the dropdown menu.
     */
    close(): void;
    /**
     * Destroys the Dropdown instance and cleans up resources.
     */
    destroy(): void;
    /**
     * Set the prevent outside click flag to true.
     */
    preventOutsideClick(): void;
}
