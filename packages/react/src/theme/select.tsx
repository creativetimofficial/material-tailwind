import type { DeepPartial } from "@types";

export type SelectTheme = DeepPartial<typeof selectTheme>;
export type SelectTriggerTheme = DeepPartial<typeof selectTriggerTheme>;
export type SelectListTheme = DeepPartial<typeof selectListTheme>;

export const selectTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    isPill: false,
    isFullWidth: false,
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
    "flex items-center gap-4 justify-between h-max max-w-[240px] w-full outline-none focus:outline-none text-secondary-content bg-transparent ring-transparent border border-secondary-dark transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none dark:border-secondary-dm-main dark:text-secondary-dm-content data-[error=true]:border-error-main dark:data-[error=true]:border-error-dm-main data-[success=true]:border-success-main dark:data-[success=true]:border-success-dm-main select-none text-start",
  isPill: "rounded-full",
  isFullWidth: "max-w-full",
  placeholder: "text-gray-400 dark:text-gray-700",
  size: {
    sm: "text-sm leading-none rounded-md py-[4.5px] px-1.5 ring",
    md: "text-sm leading-none rounded-md py-[8.5px] px-2.5 ring",
    lg: "text-base leading-none rounded-lg py-[12.25px] px-3.5 ring-4",
  },
  color: {
    primary:
      "hover:border-primary-main hover:ring-primary-main/10 focus:border-primary-main focus:ring-primary-main/10 dark:hover:border-primary-dm-main dark:hover:ring-primary-dm-main/20 dark:focus:border-primary-dm-main dark:focus:ring-primary-dm-main/20 data-[open=true]:border-primary-main data-[open=true]:ring-primary-main/10 dark:data-[open=true]:border-primary-dm-main dark:data-[open=true]:ring-primary-dm-main/20",
    secondary:
      "hover:border-secondary-main hover:ring-secondary-main/10 focus:border-secondary-main focus:ring-secondary-main/10 dark:hover:border-secondary-dm-main dark:hover:ring-secondary-dm-main/20 dark:focus:border-secondary-dm-main dark:focus:ring-secondary-dm-main/20 data-[open=true]:border-secondary-main data-[open=true]:ring-secondary-main/10 dark:data-[open=true]:border-secondary-dm-main dark:data-[open=true]:ring-secondary-dm-main/20",
    info: "hover:border-info-main hover:ring-info-main/10 focus:border-info-main focus:ring-info-main/10 dark:hover:border-info-dm-main dark:hover:ring-info-dm-main/20 dark:focus:border-info-dm-main dark:focus:ring-info-dm-main/20 data-[open=true]:border-info-main data-[open=true]:ring-info-main/10 dark:data-[open=true]:border-info-dm-main dark:data-[open=true]:ring-info-dm-main/20",
    success:
      "hover:border-success-main hover:ring-success-main/10 focus:border-success-main focus:ring-success-main/10 dark:hover:border-success-dm-main dark:hover:ring-success-dm-main/20 dark:focus:border-success-dm-main dark:focus:ring-success-dm-main/20 data-[open=true]:border-success-main data-[open=true]:ring-success-main/10 dark:data-[open=true]:border-success-dm-main dark:data-[open=true]:ring-success-dm-main/20",
    warning:
      "hover:border-warning-main hover:ring-warning-main/10 focus:border-warning-main focus:ring-warning-main/10 dark:hover:border-warning-dm-main dark:hover:ring-warning-dm-main/20 dark:focus:border-warning-dm-main dark:focus:ring-warning-dm-main/20 data-[open=true]:border-warning-main data-[open=true]:ring-warning-main/10 dark:data-[open=true]:border-warning-dm-main dark:data-[open=true]:ring-warning-dm-main/20",
    error:
      "hover:border-error-main hover:ring-error-main/10 focus:border-error-main focus:ring-error-main/10 dark:hover:border-error-dm-main dark:hover:ring-error-dm-main/20 dark:focus:border-error-dm-main dark:focus:ring-error-dm-main/20 data-[open=true]:border-error-main data-[open=true]:ring-error-main/10 dark:data-[open=true]:border-error-dm-main dark:data-[open=true]:ring-error-dm-main/20",
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
    "flex flex-col gap-0.5 bg-white p-1 rounded-lg shadow-xl shadow-primary-main/[0.025] border border-secondary-dark outline-none dark:bg-primary-dark dark:border-secondary-dm-main dark:shadow-primary-main/5",
};

export const selectOptionTheme = {
  defaultProps: {
    ripple: true,
    indicator: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
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
    "outline-none flex items-center justify-between gap-4 py-1.5 px-2.5 rounded-[5px] align-middle select-none text-sm font-sans font-normal transition-all duration-300 ease-in disabled:opacity-50 disabled:cursor-not-allowed bg-transparent text-primary-main hover:bg-primary-main/5 focus:bg-primary-main/5 dark:text-primary-dm-main dark:hover:bg-primary-dm-main/5 dark:focus:bg-primary-dm-main/5",
  selected: "bg-primary-main/10 dark:bg-primary-dm-main/10",
};
