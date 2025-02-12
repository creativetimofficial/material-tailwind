import { Instance } from "@popperjs/core";
export declare class Dropdown {
    dropdown: HTMLElement;
    button: HTMLElement;
    menu: HTMLElement;
    popperInstance: Instance | null;
    placement: string;
    constructor(dropdownElement: HTMLElement);
    init(): Promise<void>;
    toggleDropdown(): void;
    openDropdown(): void;
    closeDropdown(): void;
}
export declare function initDropdowns(): void;
export declare function cleanupDropdowns(): void;
export declare function loadAndInitDropdowns(): Promise<void>;
