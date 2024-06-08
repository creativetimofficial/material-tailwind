import * as React from "react";

type AsProp<T extends React.ElementType> = {
  as?: T;
};

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

export type BaseProps<T extends React.ElementType, P = any> = P &
  AsProp<T> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, P>>;

export type SharedProps = {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "gradient" | "ghost";
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error";
};

export type Props<T> = Omit<
  React.AllHTMLAttributes<T>,
  "as" | "className" | "children" | "size" | "color"
> & {
  size?: string;
  color?: string;
  className?: string;
  as?: React.ElementType;
  children: React.ReactNode;
};

export type BaseComponent<T> = Omit<Props<T>, "size" | "color"> & {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "gradient" | "ghost";
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error";
};

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
