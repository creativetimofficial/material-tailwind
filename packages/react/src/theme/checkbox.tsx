import type { DeepPartial } from "@types";

export type CheckboxTheme = DeepPartial<typeof checkboxTheme>;

export const checkboxTheme = {
  defaultProps: {
    color: "primary",
    icon: (
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
  baseStyle: "inline-block relative h-5 w-5",
  inputStyle:
    "peer h-full w-full appearance-none rounded bg-secondary-dark transition-all duration-200 ease-in disabled:opacity-50 disabled:pointer-events-none",
  inputColor: {
    primary: "checked:bg-primary-main",
    secondary: "checked:bg-secondary-main",
    info: "checked:bg-info-main",
    success: "checked:bg-success-main",
    warning: "checked:bg-warning-main",
    error: "checked:bg-error-main",
  },
  iconStyle:
    "pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 scale-75 opacity-0 transition-all duration-200 ease-in peer-checked:scale-100 peer-checked:opacity-100",
  iconColor: {
    primary: "text-primary-content",
    secondary: "text-secondary-content",
    info: "text-info-content",
    success: "text-success-content",
    warning: "text-warning-content",
    error: "text-error-content",
  },
};
