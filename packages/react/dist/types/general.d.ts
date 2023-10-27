import React from 'react';

type BaseComponent<T extends keyof JSX.IntrinsicElements> = React.ComponentProps<T> & {
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "outline" | "gradient" | "ghost";
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error";
};
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export { BaseComponent, DeepPartial };
