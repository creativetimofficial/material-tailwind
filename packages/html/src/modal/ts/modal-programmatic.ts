import { ModalConfig, IModal } from './modal.types';

/**
 * A class to handle programmatic modal behavior.
 * @implements {IModal}
 */
export class Modal implements IModal {
  private _isVisible: boolean = false;
  private _config: ModalConfig;
  private _modalElement: HTMLElement;

  /**
   * Initialize the modal.
   * @param {HTMLElement} modalElement - The modal element.
   * @param {ModalConfig} [config={}] - Configuration options for the modal.
   */
  constructor(modalElement: HTMLElement, config: ModalConfig = {}) {
    this._modalElement = modalElement;
    this._config = {
      keyboard: true,
      closeOnOutsideClick: true,
      ...config,
    };

    // Setup modal
    this.setupModal();

    setTimeout(() => {
      this.removeHiddenClass();
    }, 300);
  }

  /**
   * Show the modal.
   */
  public show(): void {
    if (this._isVisible) return;
    this._isVisible = true;

    this._modalElement.classList.remove('opacity-0', 'pointer-events-none');
    this._modalElement.classList.add('opacity-100');
    this._modalElement.setAttribute('aria-hidden', 'false');

    // Add listeners
    if (this._config.keyboard) {
      document.addEventListener('keydown', this.handleKeydown);
    }
    if (this._config.closeOnOutsideClick) {
      document.addEventListener('click', this.handleOutsideClick, true); // Capture phase
    }
  }

  /**
   * Hide the modal.
   */
  public hide(): void {
    if (!this._isVisible) return;
    this._isVisible = false;

    // Hide the modal element with animation
    this._modalElement.classList.add('opacity-0', 'pointer-events-none');
    this._modalElement.classList.remove('opacity-100');
    this._modalElement.setAttribute('aria-hidden', 'true');

    // Remove listeners
    if (this._config.keyboard) {
      document.removeEventListener('keydown', this.handleKeydown);
    }
    if (this._config.closeOnOutsideClick) {
      document.removeEventListener('click', this.handleOutsideClick, true);
    }
  }

  /**
   * Toggle the modal's visibility.
   */
  public toggle(): void {
    this._isVisible ? this.hide() : this.show();
  }

  /**
   * Check if the modal is currently visible.
   * @returns {boolean}
   */
  public isVisible(): boolean {
    return this._isVisible;
  }

  /**
   * Set up initial modal state.
   * Hides the modal if it's not already hidden.
   */
  private setupModal(): void {
    const isHidden = this._modalElement.classList.contains('opacity-0') ||
                     this._modalElement.getAttribute('aria-hidden') === 'true';
    this._isVisible = !isHidden;

    // Ensure proper initial state
    if (isHidden) {
      this._modalElement.classList.add('opacity-0', 'pointer-events-none');
      this._modalElement.classList.remove('opacity-100');
    } else {
      this._modalElement.classList.remove('opacity-0', 'pointer-events-none');
      this._modalElement.classList.add('opacity-100');
    }
    this._modalElement.setAttribute('aria-hidden', String(isHidden));
  }

  /**
   * Handle keydown events (e.g., Escape to close the modal).
   * @param {KeyboardEvent} event
   */
  private handleKeydown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      this.hide();
    }
  };

  /**
   * Handle clicks outside the modal content to close the modal.
   * @param {MouseEvent} event
   */
  private handleOutsideClick = (event: MouseEvent): void => {
    const target = event.target as HTMLElement;

    // Reference to the first child of the modal element
    const modalContent = this._modalElement.firstElementChild;

    // Check if the click is outside the modal content
    if (modalContent && !modalContent.contains(target)) {
      this.hide();
    }
  };

  /**
   * Removes the hidden class from the modal element.
   * This is typically called before showing the modal.
   */
  private removeHiddenClass(): void {
    this._modalElement.classList.remove('hidden');
  }
}
