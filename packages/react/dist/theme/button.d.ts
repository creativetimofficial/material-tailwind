import { DeepPartial } from '../types/general.js';
import 'react';

type ButtonTheme = DeepPartial<typeof buttonTheme>;
declare const buttonTheme: {
    defaultProps: {
        size: string;
        color: string;
        variant: string;
        ripple: boolean;
        fullWidth: boolean;
    };
    baseStyle: string;
    rounded: string;
    fullWidth: string;
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

export { ButtonTheme, buttonTheme, buttonTheme as default };
