"use client";

import * as React from "react";

// @hooks
import { useTheme } from "@context";

// @types
import type { SharedProps } from "@types";

// @theme
import { progressTheme, progressBarTheme } from "@theme";

// @utils
import { twMerge } from "tailwind-merge";

// @types
import { BaseProps } from "@types";

// progress context
export interface ProgressContextProps {
  value?: number;
  color?: SharedProps["color"];
}

export const ProgressContext = React.createContext<ProgressContextProps>({
  value: 0,
  color: "primary",
});

// progress root
export type ProgressProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    value?: number;
  } & Omit<SharedProps, "variant">
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/progress) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/progress#progress-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/progress#progress-theme)
 */
function ProgressRootBase<T extends React.ElementType = "div">(
  { as, size, color, value, className, children, ...props }: ProgressProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme.progress ?? progressTheme;
  const defaultProps = theme?.defaultProps;

  size ??= (defaultProps?.size as ProgressProps["size"]) ?? "md";
  color ??= (defaultProps?.color as ProgressProps["color"]) ?? "primary";

  const styles = twMerge(theme.baseStyle, theme.size[size], className);

  const contextValue = React.useMemo(() => ({ value, color }), [value, color]);

  return (
    <ProgressContext.Provider value={contextValue}>
      <Component {...props} ref={ref} className={styles}>
        {children}
      </Component>
    </ProgressContext.Provider>
  );
}

ProgressRootBase.displayName = "MaterialTailwind.Progress";

export const ProgressRoot = React.forwardRef(ProgressRootBase) as <
  T extends React.ElementType = "div",
>(
  props: ProgressProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// progress bar
export type ProgressBarProps<T extends React.ElementType = "div"> =
  BaseProps<T>;

function ProgressBarRoot<T extends React.ElementType = "div">(
  { as, className, children, ...props }: ProgressBarProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("div" as any);
  const contextTheme = useTheme();
  const { color, value } = React.useContext(ProgressContext);
  const theme = contextTheme.progressBar ?? progressBarTheme;

  const styles = twMerge(
    theme.baseStyle,
    theme.color[color as string],
    className,
  );

  return (
    <Component
      {...props}
      ref={ref}
      className={styles}
      style={{
        width: `${value}%`,
        ...props?.style,
      }}
    >
      {children}
    </Component>
  );
}

ProgressBarRoot.displayName = "MaterialTailwind.ProgressBar";

export const ProgressBar = React.forwardRef(ProgressBarRoot) as <
  T extends React.ElementType = "div",
>(
  props: ProgressBarProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Progress = Object.assign(ProgressRoot, {
  Bar: ProgressBar,
});

export default Progress;
