import React from 'react';

declare const MaterialTailwindThemeContext: React.Context<any>;
/**
 * @remarks
 * [Documentation](https://www.material-tailwind.com/docs/react/theming) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/theming#theme-provider-props)
 *
 * @example
 * ```tsx
 * import { ThemeProvider } from "@material-tailwind/react";
 *
 * export default function App() {
 *  return (
 *    <ThemeProvider value={{...}}>
 *      {...}
 *    </ThemeProvider>
 *  );
 * }
 * ```
 */
declare function ThemeProvider({ value, ...rest }: {
    value: any;
}): JSX.Element;
/**
 * Gets the Material Tailwind Theme Object
 * @returns Object
 */
declare function useTheme(): any;

export { MaterialTailwindThemeContext, ThemeProvider, useTheme };
