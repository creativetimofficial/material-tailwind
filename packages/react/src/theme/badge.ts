import type { DeepPartial } from "@types";

export type BadgeTheme = DeepPartial<typeof badgeTheme>;
export type BadgeContentTheme = DeepPartial<typeof badgeContentTheme>;
export type BadgeIndicatorTheme = DeepPartial<typeof badgeIndicatorTheme>;

export const badgeTheme = {
  defaultProps: {
    color: "primary",
    overlap: "square",
    placement: "top-end",
  },
  baseStyle: "relative inline-flex",
};

export const badgeContentTheme = {
  baseStyle: "",
};

export const badgeIndicatorTheme = {
  baseStyle: `
    absolute px-1 py-0.5 text-xs border leading-none grid place-items-center rounded-full min-w-3 min-h-3

    data-[placement='top-start']:data-[overlap='square']:top-[6%] data-[placement='top-start']:data-[overlap='square']:left-[6%]
    data-[placement='top-start']:data-[overlap='square']:-translate-x-1/2 data-[placement='top-start']:data-[overlap='square']:-translate-y-1/2
    data-[placement='top-start']:data-[overlap='circular']:top-[14%] data-[placement='top-start']:data-[overlap='circular']:left-[14%]
    data-[placement='top-start']:data-[overlap='circular']:-translate-x-1/2 data-[placement='top-start']:data-[overlap='circular']:-translate-y-1/2
    
    data-[placement='top-end']:data-[overlap='square']:top-[6%] data-[placement='top-end']:data-[overlap='square']:right-[6%]
    data-[placement='top-end']:data-[overlap='square']:translate-x-1/2 data-[placement='top-end']:data-[overlap='square']:-translate-y-1/2
    data-[placement='top-end']:data-[overlap='circular']:top-[14%] data-[placement='top-end']:data-[overlap='circular']:right-[14%]
    data-[placement='top-end']:data-[overlap='circular']:translate-x-1/2 data-[placement='top-end']:data-[overlap='circular']:-translate-y-1/2
    
    data-[placement='bottom-start']:data-[overlap='square']:bottom-[6%] data-[placement='bottom-start']:data-[overlap='square']:left-[6%]
    data-[placement='bottom-start']:data-[overlap='square']:-translate-x-1/2 data-[placement='bottom-start']:data-[overlap='square']:translate-y-1/2
    data-[placement='bottom-start']:data-[overlap='circular']:bottom-[14%] data-[placement='bottom-start']:data-[overlap='circular']:left-[14%]
    data-[placement='bottom-start']:data-[overlap='circular']:-translate-x-1/2 data-[placement='bottom-start']:data-[overlap='circular']:translate-y-1/2
    
    data-[placement='bottom-end']:data-[overlap='square']:bottom-[6%] data-[placement='bottom-end']:data-[overlap='square']:right-[6%]
    data-[placement='bottom-end']:data-[overlap='square']:translate-x-1/2 data-[placement='bottom-end']:data-[overlap='square']:translate-y-1/2
    data-[placement='bottom-end']:data-[overlap='circular']:bottom-[14%] data-[placement='bottom-end']:data-[overlap='circular']:right-[14%]
    data-[placement='bottom-end']:data-[overlap='circular']:translate-x-1/2 data-[placement='bottom-end']:data-[overlap='circular']:translate-y-1/2
  `,
  color: {
    primary: "bg-primary border-primary text-primary-foreground",
    secondary: "bg-secondary border-secondary text-secondary-foreground",
    info: "bg-info border-info text-info-foreground",
    success: "bg-success border-success text-success-foreground",
    warning: "bg-warning border-warning text-warning-foreground",
    error: "bg-error border-error text-error-foreground",
  },
};
