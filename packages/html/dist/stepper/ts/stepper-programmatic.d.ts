import { StepperConfig, IStepper } from './stepper.types';
export declare class Stepper implements IStepper {
    private steps;
    private contents;
    private prevButton;
    private nextButton;
    private currentStep;
    constructor(config: StepperConfig);
    private updateState;
    next(): void;
    prev(): void;
    goToStep(step: number): void;
    getCurrentStep(): number;
    destroy(): void;
}
