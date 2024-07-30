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

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
