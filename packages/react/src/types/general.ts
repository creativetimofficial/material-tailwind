import * as React from "react";

export type BaseComponent<T> = Omit<
  React.AllHTMLAttributes<T>,
  "size" | "as"
> & {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "gradient" | "ghost";
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error";
};

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
