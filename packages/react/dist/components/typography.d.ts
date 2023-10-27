import React from 'react';
import { BaseComponent } from '../types/general.js';

type Props<T extends keyof JSX.IntrinsicElements> = React.ComponentProps<T>;
type BaseTypographyProps = Props<"p"> & Props<"h1"> & Props<"h2"> & Props<"h3"> & Props<"h4"> & Props<"h5"> & Props<"h6"> & Props<"p"> & Props<"small"> & Props<any>;
interface TypographyProps extends BaseTypographyProps {
    as?: React.ElementType;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
    color?: BaseComponent<any>["color"];
    isGradient?: boolean;
    className?: string;
    children: React.ReactNode;
}
/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/typography) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/typography#typography-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/typography#typography-theme)
 *
 * @example
 * ```tsx
 * import { Typography } from "@material-tailwind/react";
 *
 * export default function Example() {
 *  return <Typography>Material Tailwind</Typography>;
 * }
 * ```
 */
declare const Typography: React.ForwardRefExoticComponent<Pick<TypographyProps, keyof TypographyProps> & React.RefAttributes<HTMLElement>>;

export { Typography, TypographyProps, Typography as default };
