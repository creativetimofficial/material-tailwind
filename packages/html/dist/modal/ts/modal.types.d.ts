/**
 * Configuration options for the Modal component.
 */
export interface ModalConfig {
    /**
     * Whether the Escape key should close the modal (default: true).
     */
    keyboard?: boolean;
    /**
     * Whether clicking outside the modal content should close the modal (default: true).
     */
    closeOnOutsideClick?: boolean;
}
/**
 * Interface for the Modal component.
 */
export interface IModal {
    /**
     * Show the modal.
     */
    show(): void;
    /**
     * Hide the modal.
     */
    hide(): void;
    /**
     * Toggle the modal's visibility.
     */
    toggle(): void;
    /**
     * Check if the modal is currently visible.
     */
    isVisible(): boolean;
}
