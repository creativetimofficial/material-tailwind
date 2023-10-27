import { DeepPartial } from '../types/general.js';
import 'react';

type TypographyTheme = DeepPartial<typeof typographyTheme>;
declare const typographyTheme: {
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

export { TypographyTheme, typographyTheme as default, typographyTheme };
