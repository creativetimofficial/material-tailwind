import { AccordionConfig, IAccordion } from './accordion.types';

export class Accordion implements IAccordion {
  private container: HTMLElement;
  private options: AccordionConfig;
  private initialized: WeakSet<HTMLElement> = new WeakSet();

  constructor(container: HTMLElement, options: AccordionConfig = {}) {
    this.container = container;
    this.options = options;
    this.init();
  }

  private init(): void {
    const buttons = Array.from(this.container.children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement
    );

    buttons.forEach((button) => {
      const content = button.nextElementSibling as HTMLElement;
      if (content) {
        this.initialized.add(button);

        button.addEventListener('click', this.toggleHandler);

        const isExpanded = this.options.allOpen || false;
        this.setAccordionState(button, content, isExpanded);
      }
    });

    if (this.options.allOpen) {
      this.showAll();
    }
  }


  private resolveElement(element: HTMLElement | string): HTMLElement | null {
    if (typeof element === 'string') {
      return document.getElementById(element);
    }
    return element;
  }

  public toggle(element: HTMLElement | string): void {
    const button = this.resolveElement(element);
    if (!button) return;

    const content = button.nextElementSibling as HTMLElement;
    if (!content) return;

    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    if (this.options.exclusive) {
      Array.from(this.container.children).forEach((child) => {
        if (child instanceof HTMLElement && child !== button) {
          const otherContent = child.nextElementSibling as HTMLElement;
          if (otherContent) {
            this.setAccordionState(child, otherContent, false);
          }
        }
      });
    }

    this.setAccordionState(button, content, !isExpanded);
  }

  public show(element: HTMLElement | string): void {
    const button = this.resolveElement(element);
    if (!button) return;

    const content = button.nextElementSibling as HTMLElement;
    if (!content) return;

    this.setAccordionState(button, content, true);
  }

  public hide(element: HTMLElement | string): void {
    const button = this.resolveElement(element);
    if (!button) return;

    const content = button.nextElementSibling as HTMLElement;
    if (!content) return;

    this.setAccordionState(button, content, false);
  }

  public showAll(): void {
    Array.from(this.container.children).forEach((child) => {
      if (child instanceof HTMLElement) {
        const content = child.nextElementSibling as HTMLElement;
        if (content) {
          this.setAccordionState(child, content, true);
        }
      }
    });
  }

  public hideAll(): void {
    Array.from(this.container.children).forEach((child) => {
      if (child instanceof HTMLElement) {
        const content = child.nextElementSibling as HTMLElement;
        if (content) {
          this.setAccordionState(child, content, false);
        }
      }
    });
  }

  public cleanup(): void {
    Array.from(this.container.children).forEach((button) => {
      if (button instanceof HTMLElement && this.initialized.has(button)) {
        button.removeEventListener('click', this.toggleHandler);
        this.initialized.delete(button);
      }
    });
  }

  private toggleHandler = (event: Event): void => {
    const button = event.currentTarget as HTMLElement;
    this.toggle(button);
  };


  private setAccordionState(
    button: HTMLElement,
    content: HTMLElement,
    isExpanded: boolean
  ): void {
    content.style.maxHeight = isExpanded ? `${content.scrollHeight}px` : '0';
    button.setAttribute('aria-expanded', String(isExpanded));

    const openIcon = button.querySelector<HTMLElement>('[data-accordion-icon-open]');
    const closeIcon = button.querySelector<HTMLElement>('[data-accordion-icon-close]');

    if (openIcon) {
      openIcon.style.display = isExpanded ? 'block' : 'none';
    }
    if (closeIcon) {
      closeIcon.style.display = isExpanded ? 'none' : 'block';
    }

    const icon = button.querySelector('[data-accordion-icon]');
    if (icon) {
      icon.classList.toggle('rotate-180', isExpanded);
    }
  }
}
