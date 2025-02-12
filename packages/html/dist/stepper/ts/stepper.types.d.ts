/**
 * Configuration options for initializing a Stepper instance
 * @interface StepperConfig
 */
export interface StepperConfig {
    /** Array of HTML elements representing the step indicators */
    stepElements: HTMLElement[];
    /** Array of HTML elements containing the content for each step */
    contentElements: HTMLElement[];
    /** HTML element for the "previous" navigation button */
    prevButton: HTMLElement;
    /** HTML element for the "next" navigation button */
    nextButton: HTMLElement;
    /** Optional initial step number (defaults to 1 if not provided) */
    initialStep?: number;
}
/**
 * Interface defining the public API for the Stepper component
 * @interface IStepper
 */
export interface IStepper {
    /** Advances to the next step if available */
    next(): void;
    /** Returns to the previous step if available */
    prev(): void;
    /**
     * Jumps to a specific step number
     * @param step - The step number to navigate to
     */
    goToStep(step: number): void;
    /** Returns the current active step number */
    getCurrentStep(): number;
    /** Destroys the Stepper instance, cleaning up event listeners and references */
    destroy(): void;
}
