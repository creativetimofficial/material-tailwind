// Stepper class implementation
import { StepperConfig, IStepper } from './stepper.types';

export class Stepper implements IStepper {
  private steps: HTMLElement[];
  private contents: HTMLElement[];
  private prevButton: HTMLButtonElement;
  private nextButton: HTMLButtonElement;
  private currentStep: number;

  constructor(config: StepperConfig) {
    this.steps = config.stepElements;
    this.contents = config.contentElements;
    this.prevButton = config.prevButton as HTMLButtonElement;
    this.nextButton = config.nextButton as HTMLButtonElement;
    this.currentStep = config.initialStep || 1;

    this.updateState();

    this.prevButton.addEventListener('click', () => this.prev());
    this.nextButton.addEventListener('click', () => this.next());
  }

  private updateState(): void {
    this.steps.forEach((step, index) => {
      const stepNumber = index + 1;
      step.dataset.active = String(stepNumber === this.currentStep);
      step.dataset.completed = String(stepNumber < this.currentStep);
      step.setAttribute('aria-disabled', String(stepNumber > this.currentStep));
    });

    this.contents.forEach((content, index) => {
      content.classList.toggle('hidden', index + 1 !== this.currentStep);
    });

    this.prevButton.disabled = this.currentStep === 1;
    this.nextButton.disabled = this.currentStep === this.steps.length;
  }

  next(): void {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
      this.updateState();
    }
  }

  prev(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateState();
    }
  }

  goToStep(step: number): void {
    if (step >= 1 && step <= this.steps.length) {
      this.currentStep = step;
      this.updateState();
    }
  }

  getCurrentStep(): number {
    return this.currentStep;
  }

  destroy(): void {
    this.prevButton.removeEventListener('click', () => this.prev());
    this.nextButton.removeEventListener('click', () => this.next());
  }
}

