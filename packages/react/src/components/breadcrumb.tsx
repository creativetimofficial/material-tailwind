"use client";

import * as React from "react";

// @hooks
import { useTheme } from "@context";

// @utils
import { twMerge } from "tailwind-merge";

// @theme
import {
  breadcrumbTheme,
  breadcrumbLinkTheme,
  breadcrumbSeparatorTheme,
} from "@theme";

// breadcrumb root
export interface BreadcrumbProps extends React.HtmlHTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const BreadcrumbRoot = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ as, className, children, ...rest }, ref) => {
    const Element = as || "nav";
    const contextTheme = useTheme();
    const theme = contextTheme.breadcrumb || breadcrumbTheme;

    const styles = twMerge(theme.baseStyle, className);

    return (
      <Element {...rest} ref={ref} className={styles}>
        {children}
      </Element>
    );
  },
);

BreadcrumbRoot.displayName = "MaterialTailwind.Breadcrumb";

// breadcrumb link
export interface BreadcrumbLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement | HTMLElement,
  BreadcrumbLinkProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "a";
  const contextTheme = useTheme();
  const theme = contextTheme.breadcrumbLink || breadcrumbLinkTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element {...rest} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

BreadcrumbLink.displayName = "MaterialTailwind.BreadcrumbLink";

// breadcrumb separator
export interface BreadcrumbSeparatorProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export const BreadcrumbSeparator = React.forwardRef<
  HTMLSpanElement | HTMLElement,
  BreadcrumbSeparatorProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "span";
  const contextTheme = useTheme();
  const theme = contextTheme.breadcrumbSeparator || breadcrumbSeparatorTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element {...rest} ref={ref} className={styles}>
      {children || "/"}
    </Element>
  );
});

BreadcrumbSeparator.displayName = "MaterialTailwind.BreadcrumbSeparator";

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Link: BreadcrumbLink,
  Separator: BreadcrumbSeparator,
});

export default Breadcrumb;
