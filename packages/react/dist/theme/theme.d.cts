import { DeepPartial } from '../types/general.cjs';
import 'react';

type Theme = DeepPartial<typeof theme>;
declare const theme: {
    button: {
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
    collapse: {
        baseStyle: string;
        openStyle: string;
        closeStyle: string;
    };
    iconButton: {
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
    typography: {
        defaultProps: {
            variant: string;
            color: string;
            isGradient: boolean;
        };
        baseStyle: string;
        isGradient: string;
        variant: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            p: string;
            small: string;
        };
        color: {
            inherit: string;
            primary: string;
            secondary: string;
            info: string;
            success: string;
            warning: string;
            error: string;
        };
    };
    buttonGroup: {
        defaultProps: {
            size: string;
            color: string;
            variant: string;
            ripple: boolean;
            fullWidth: boolean;
            orientation: string;
        };
        baseStyle: string;
        vertical: string;
        horizontal: string;
        verticalAppearance: string;
        horizontalAppearance: string;
        fullWidth: string;
    };
};

export { Theme, theme as default, theme };
