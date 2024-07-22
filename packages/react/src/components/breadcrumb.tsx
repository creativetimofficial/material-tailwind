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

import type { BaseProps } from "@types";

// breadcrumb root
export type BreadcrumbProps<T extends React.ElementType = "nav"> = BaseProps<T>;

function BreadcrumbRootBase<T extends React.ElementType = "nav">(
  { as, className, children, ...props }: BreadcrumbProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("nav" as any);
  const contextTheme = useTheme();
  const theme = contextTheme.breadcrumb || breadcrumbTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

BreadcrumbRootBase.displayName = "MaterialTailwind.Breadcrumb";

export const BreadcrumbRoot = React.forwardRef(BreadcrumbRootBase) as <
  T extends React.ElementType = "nav",
>(
  props: BreadcrumbProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// breadcrumb link
export type BreadcrumbLinkProps<T extends React.ElementType = "a"> =
  BaseProps<T>;

function BreadcrumbLinkRoot<T extends React.ElementType = "a">(
  { as, className, children, ...props }: BreadcrumbLinkProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("a" as any);
  const contextTheme = useTheme();
  const theme = contextTheme.breadcrumbLink || breadcrumbLinkTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

BreadcrumbLinkRoot.displayName = "MaterialTailwind.BreadcrumbLink";

export const BreadcrumbLink = React.forwardRef(BreadcrumbLinkRoot) as <
  T extends React.ElementType = "a",
>(
  props: BreadcrumbLinkProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// breadcrumb separator
export type BreadcrumbSeparatorProps<T extends React.ElementType = "span"> =
  BaseProps<T>;

function BreadcrumbSeparatorRoot<T extends React.ElementType = "span">(
  { as, className, children, ...props }: BreadcrumbSeparatorProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("span" as any);
  const contextTheme = useTheme();
  const theme = contextTheme.breadcrumbSeparator || breadcrumbSeparatorTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children || "/"}
    </Component>
  );
}

BreadcrumbSeparatorRoot.displayName = "MaterialTailwind.BreadcrumbSeparator";

export const BreadcrumbSeparator = React.forwardRef(
  BreadcrumbSeparatorRoot,
) as <T extends React.ElementType = "span">(
  props: BreadcrumbSeparatorProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Link: BreadcrumbLink,
  Separator: BreadcrumbSeparator,
});

export default Breadcrumb;
