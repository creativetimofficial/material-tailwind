import { ModalConfig, IModal } from './modal.types';
/**
 * A class to handle programmatic modal behavior.
 * @implements {IModal}
 */
export declare class Modal implements IModal {
    private _isVisible;
    private _config;
    private _modalElement;
    /**
     * Initialize the modal.
     * @param {HTMLElement} modalElement - The modal element.
     * @param {ModalConfig} [config={}] - Configuration options for the modal.
     */
    constructor(modalElement: HTMLElement, config?: ModalConfig);
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
     * @returns {boolean}
     */
    isVisible(): boolean;
    /**
     * Set up initial modal state.
     * Hides the modal if it's not already hidden.
     */
    private setupModal;
    /**
     * Handle keydown events (e.g., Escape to close the modal).
     * @param {KeyboardEvent} event
     */
    private handleKeydown;
    /**
     * Handle clicks outside the modal content to close the modal.
     * @param {MouseEvent} event
     */
    private handleOutsideClick;
    /**
     * Removes the hidden class from the modal element.
     * This is typically called before showing the modal.
     */
    private removeHiddenClass;
}
