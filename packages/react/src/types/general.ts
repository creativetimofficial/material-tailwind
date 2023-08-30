import React from "react";

export type BaseComponent<T extends keyof JSX.IntrinsicElements> =
  React.ComponentProps<T> & {
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "outline" | "gradient" | "ghost";
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error";
  };
