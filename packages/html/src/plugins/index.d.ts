export interface Color {
    default?: `#${string}`;
    dark?: `#${string}`;
    light?: `#${string}`;
    foreground?: `#${string}`;
}
export interface Colors {
    background?: `#${string}`;
    foreground?: `#${string}`;
    black?: `#${string}`;
    white?: `#${string}`;
    surface?: Color;
    primary?: Color;
    secondary?: Color;
    info?: Color;
    success?: Color;
    warning?: Color;
    error?: Color;
}
export interface Options {
    fonts?: Record<string, string | string[]>;
    radius?: string;
    colors?: Colors;
    darkColors?: Colors;
}
export declare const mtConfig: any;
export default mtConfig;
//# sourceMappingURL=index.d.ts.map