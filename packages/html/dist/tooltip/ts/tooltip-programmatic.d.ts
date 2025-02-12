import { TooltipConfig, ITooltip } from "./tooltip.types";
import { Instance as PopperInstance } from "@popperjs/core";
export declare class Tooltip implements ITooltip {
    triggerElement: HTMLElement;
    tooltipElement: HTMLElement | null;
    tooltipInstance: PopperInstance | null;
    options: TooltipConfig;
    constructor(triggerElement: HTMLElement, options?: TooltipConfig);
    private init;
    showTooltip(): Promise<void>;
    hideTooltip(): void;
    destroy(): void;
}
