/**
 * Toggle the modal on or off.
 */
export declare function toggleModal(event: Event): void;
/**
 * Close the modal programmatically or via an event.
 * Accepts either an Event or a direct HTMLElement.
 */
export declare function closeModal(input: Event | HTMLElement): void;
/**
 * Initialize modal triggers and dismiss buttons.
 */
export declare function initModal(): void;
/**
 * Cleanup function to remove event listeners from active modals.
 */
export declare function cleanupModals(): void;
