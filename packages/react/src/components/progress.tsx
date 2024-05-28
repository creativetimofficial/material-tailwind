"use client";

import * as React from "react";

// @hooks
import { useTheme } from "@context";

// @types
import type { BaseComponent } from "@types";

// @theme
import { progressTheme, progressBarTheme } from "@theme";
import { twMerge } from "tailwind-merge";

// progress context
export interface ProgressContextProps {
  value?: number;
  color?: BaseComponent<HTMLElement>["color"];
}

export const ProgressContext = React.createContext<ProgressContextProps>({
  value: 0,
  color: "primary",
});

// progress root
export interface ProgressProps extends BaseComponent<HTMLElement> {
  as?: React.ElementType;
  value?: number;
  className?: string;
  children?: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/progress) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/progress#progress-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/progress#progress-theme)
 */
export const ProgressRoot = React.forwardRef<HTMLElement, ProgressProps>(
  ({ as, size, color, value, className, children, ...rest }, ref) => {
    const Element = as ?? "div";
    const contextTheme = useTheme();
    const theme = contextTheme.progress ?? progressTheme;
    const defaultProps = theme?.defaultProps;

    size ??= (defaultProps?.size as ProgressProps["size"]) ?? "md";
    color ??= (defaultProps?.color as ProgressProps["color"]) ?? "primary";

    const styles = twMerge(theme.baseStyle, theme.size[size], className);
    const contextValue = React.useMemo(
      () => ({ value, color }),
      [value, color],
    );

    return (
      <ProgressContext.Provider value={contextValue}>
        <Element {...rest} ref={ref} className={styles}>
          {children}
        </Element>
      </ProgressContext.Provider>
    );
  },
);

ProgressRoot.displayName = "MaterialTailwind.Progress";

// progress bar
export interface ProgressBarProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export const ProgressBar = React.forwardRef<HTMLElement, ProgressBarProps>(
  ({ as, className, children, ...rest }, ref) => {
    const Element = as ?? "div";
    const contextTheme = useTheme();
    const { color, value } = React.useContext(ProgressContext);
    const theme = contextTheme.progressBar ?? progressBarTheme;

    const styles = twMerge(
      theme.baseStyle,
      theme.color[color as string],
      className,
    );

    return (
      <Element
        {...rest}
        ref={ref}
        className={styles}
        style={{
          width: `${value}%`,
          ...rest?.style,
        }}
      >
        {children}
      </Element>
    );
  },
);

ProgressBar.displayName = "MaterialTailwind.ProgressBar";

export const Progress = Object.assign(ProgressRoot, {
  Bar: ProgressBar,
});

export default Progress;
