import type { DropdownConfig, IDropdown } from "./dropdown.types";
/**
 * Class representing a programmatic Dropdown component.
 */
export declare class Dropdown implements IDropdown {
    private menu;
    private referenceElement;
    private popperInstance;
    private config;
    private isOpen;
    private shouldIgnoreClick;
    private documentClickHandler;
    /**
     * Creates an instance of Dropdown.
     * @param reference - The element or selector to position the dropdown menu relative to.
     * @param menu - The menu element to display as the dropdown.
     * @param config - Configuration options for the dropdown.
     */
    constructor(reference: HTMLElement | string, menu: HTMLElement | string, config: DropdownConfig);
    /**
     * Resolves an element from an HTMLElement or selector string.
     * @param elementOrSelector - HTMLElement or a selector string.
     * @param errorMessage - Error message if the element is not found.
     * @returns The resolved HTMLElement.
     */
    private resolveElement;
    /**
     * Handles document click events for outside clicks
     */
    private handleDocumentClick;
    /**
     * Initializes the Dropdown component.
     */
    private init;
    /**
     * Set the prevent outside click flag to true.
     */
    preventOutsideClick(): void;
    /**
     * Toggles the dropdown menu visibility.
     */
    toggle(): void;
    /**
     * Opens the dropdown menu programmatically.
     */
    open(): void;
    /**
     * Closes the dropdown menu programmatically.
     */
    close(): void;
    /**
     * Destroys the Dropdown instance and cleans up resources.
     */
    destroy(): void;
}
