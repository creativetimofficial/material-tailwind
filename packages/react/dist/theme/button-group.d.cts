import { DeepPartial } from '../types/general.cjs';
import 'react';

type ButtonGroupTheme = DeepPartial<typeof buttonGroupTheme>;
declare const buttonGroupTheme: {
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

export { ButtonGroupTheme, buttonGroupTheme, buttonGroupTheme as default };
