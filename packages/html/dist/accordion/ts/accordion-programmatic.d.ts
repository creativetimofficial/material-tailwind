import { AccordionConfig, IAccordion } from './accordion.types';
export declare class Accordion implements IAccordion {
    private container;
    private options;
    private initialized;
    constructor(container: HTMLElement, options?: AccordionConfig);
    private init;
    private resolveElement;
    toggle(element: HTMLElement | string): void;
    show(element: HTMLElement | string): void;
    hide(element: HTMLElement | string): void;
    showAll(): void;
    hideAll(): void;
    cleanup(): void;
    private toggleHandler;
    private setAccordionState;
}
