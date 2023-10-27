import { DeepPartial } from '../types/general.cjs';
import 'react';

type CollapseTheme = DeepPartial<typeof collapseTheme>;
declare const collapseTheme: {
    baseStyle: string;
    openStyle: string;
    closeStyle: string;
};

export { CollapseTheme, collapseTheme, collapseTheme as default };
