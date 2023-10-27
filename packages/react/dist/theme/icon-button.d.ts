import { DeepPartial } from '../types/general.js';
import 'react';

type IconButtonTheme = DeepPartial<typeof iconButtonTheme>;
declare const iconButtonTheme: {
    defaultProps: {
        size: string;
        color: string;
        variant: string;
        ripple: boolean;
    };
    baseStyle: string;
    rounded: string;
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    variant: {
        ghost: {
            primary: string;
            secondary: string;
            info: string;
            success: string;
            warning: string;
            error: string;
        };
        solid: {
            primary: string;
            secondary: string;
            info: string;
            success: string;
            warning: string;
            error: string;
        };
        outline: {
            primary: string;
            secondary: string;
            info: string;
            success: string;
            warning: string;
            error: string;
        };
        gradient: {
            primary: string;
            secondary: string;
            info: string;
            success: string;
            warning: string;
            error: string;
        };
    };
};

export { IconButtonTheme, iconButtonTheme as default, iconButtonTheme };
