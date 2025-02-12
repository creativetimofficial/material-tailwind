/**
 * Configuration options for the Accordion component
 */
export interface AccordionConfig {
    /** When true, only one section can be open at a time */
    exclusive?: boolean;
    /** When true, allows multiple sections to be open simultaneously */
    allOpen?: boolean;
}
/**
 * Interface defining the public API for controlling Accordion behavior
 */
export interface IAccordion {
    /**
     * Toggles the open/closed state of an accordion section
     * @param element - The accordion section element or its ID
     */
    toggle: (element: HTMLElement | string) => void;
    /**
     * Opens an accordion section
     * @param element - The accordion section element or its ID
     */
    show: (element: HTMLElement | string) => void;
    /**
     * Closes an accordion section
     * @param element - The accordion section element or its ID
     */
    hide: (element: HTMLElement | string) => void;
    /**
     * Opens all accordion sections simultaneously
     */
    showAll: () => void;
    /**
     * Closes all accordion sections simultaneously
     */
    hideAll: () => void;
    /**
     * Removes all event listeners and cleans up the accordion instance
     */
    cleanup: () => void;
}
