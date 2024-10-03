import type { DeepPartial } from "@types";

export type SelectTheme = DeepPartial<typeof selectTheme>;
export type SelectTriggerTheme = DeepPartial<typeof selectTriggerTheme>;
export type SelectListTheme = DeepPartial<typeof selectListTheme>;
export type SelectOptionTheme = DeepPartial<typeof selectOptionTheme>;

export const selectTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    isPill: false,
    isError: false,
    isSuccess: false,
    placement: "bottom",
    offset: 5,
  },
};

export const selectTriggerTheme = {
  defaultProps: {
    indicator: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
        className="h-[1em] w-[1em] translate-x-0.5 stroke-[1.5]"
      >
        <path
          d="M17 8L12 3L7 8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 16L12 21L7 16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  baseStyle:
    "flex items-center gap-4 justify-between h-max w-full outline-none focus:outline-none text-foreground bg-transparent ring-transparent border border-surface transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none text-start data-[shape=pill]:rounded-full [&_data-slot=placeholder]:text-foreground/60",
  size: {
    sm: "text-sm rounded-md py-1.5 px-2 ring shadow-sm",
    md: "text-sm rounded-md py-2 px-2.5 ring shadow-sm",
    lg: "text-base rounded-lg py-2.5 px-3 ring-4 shadow-sm",
  },
  color: {
    primary:
      "hover:border-primary hover:ring-primary/10 focus:border-primary focus:ring-primary/10 data-[open=true]:border-primary data-[open=true]:ring-primary/10",
    secondary:
      "hover:border-secondary hover:ring-secondary/10 focus:border-secondary focus:ring-secondary/10 data-[open=true]:border-secondary data-[open=true]:ring-secondary/10",
    info: "hover:border-info hover:ring-info/10 focus:border-info focus:ring-info/10 data-[open=true]:border-info data-[open=true]:ring-info/10",
    success:
      "hover:border-success hover:ring-success/10 focus:border-success focus:ring-success/10 data-[open=true]:border-success data-[open=true]:ring-success/10",
    warning:
      "hover:border-warning hover:ring-warning/10 focus:border-warning focus:ring-warning/10 data-[open=true]:border-warning data-[open=true]:ring-warning/10",
    error:
      "hover:border-error hover:ring-error/10 focus:border-error focus:ring-error/10 data-[open=true]:border-error data-[open=true]:ring-error/10",
  },
};

export const selectListTheme = {
  defaultProps: {
    disabled: false,
    initialFocus: 0,
    returnFocus: true,
    guards: true,
    modal: true,
    visuallyHiddenDismiss: true,
    closeOnFocusOut: true,
    order: ["content"],
  },
  baseStyle:
    "flex flex-col gap-0.5 bg-background p-1 rounded-lg shadow-xl shadow-black/[0.025] border border-surface outline-none",
};

export const selectOptionTheme = {
  defaultProps: {
    ripple: true,
    indicator: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    ),
  },
  baseStyle:
    "outline-none flex items-center justify-between gap-4 py-1.5 px-2.5 rounded align-middle select-none text-sm font-sans transition-all duration-300 ease-in disabled:opacity-50 disabled:cursor-not-allowed bg-transparent text-foreground hover:text-black dark:hover:text-white hover:bg-surface focus:bg-surface focus:text-black dark:focus:text-white data-[selected=true]:bg-surface data-[selected=true]:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70",
};
