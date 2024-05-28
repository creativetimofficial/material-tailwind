import hexRgb from "hex-rgb";
import plugin from "tailwindcss/plugin";

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

function getRgbChannels(hex: `#${string}`) {
  const { red, green, blue } = hexRgb(hex);
  return `${red} ${green} ${blue}`;
}

export const mtConfig = plugin.withOptions(
  function (options: Options) {
    return function ({ addBase }) {
      addBase({
        ":root": {
          /* border radius */
          "--radius": options?.radius || "1.5rem",

          /* fonts */
          "--font-sans": options?.fonts?.sans || "Inter",
          "--font-serif": options?.fonts?.serif || "",
          "--font-mono": options?.fonts?.mono || "Fira Code",

          /* base colors */
          "--color-background": getRgbChannels(
            options?.colors?.background || "#ffffff",
          ),
          "--color-foreground": getRgbChannels(
            options?.colors?.foreground || "#374151",
          ),
          "--color-black": getRgbChannels(options?.colors?.black || "#030712"),
          "--color-white": getRgbChannels(options?.colors?.white || "#ffffff"),

          /* surface color */
          "--color-surface": getRgbChannels(
            options?.colors?.surface?.default || "#e5e7eb",
          ),
          "--color-surface-dark": getRgbChannels(
            options?.colors?.surface?.dark || "#d1d5db",
          ),
          "--color-surface-light": getRgbChannels(
            options?.colors?.surface?.light || "#f3f4f6",
          ),
          "--color-surface-foreground": getRgbChannels(
            options?.colors?.surface?.foreground || "#030712",
          ),

          /* primary color */
          "--color-primary": getRgbChannels(
            options?.colors?.primary?.default || "#6028ff",
          ),
          "--color-primary-dark": getRgbChannels(
            options?.colors?.primary?.dark || "#5216eb",
          ),
          "--color-primary-light": getRgbChannels(
            options?.colors?.primary?.light || "#724dff",
          ),
          "--color-primary-foreground": getRgbChannels(
            options?.colors?.primary?.foreground || "#f9fafb",
          ),

          /* secondary color */
          "--color-secondary": getRgbChannels(
            options?.colors?.secondary?.default || "#e5e7eb",
          ),
          "--color-secondary-dark": getRgbChannels(
            options?.colors?.secondary?.dark || "#d1d5db",
          ),
          "--color-secondary-light": getRgbChannels(
            options?.colors?.secondary?.light || "#f3f4f6",
          ),
          "--color-secondary-foreground": getRgbChannels(
            options?.colors?.secondary?.foreground || "#030712",
          ),

          /* info color */
          "--color-info": getRgbChannels(
            options?.colors?.info?.default || "#0062ff",
          ),
          "--color-info-dark": getRgbChannels(
            options?.colors?.info?.dark || "#0055dd",
          ),
          "--color-info-light": getRgbChannels(
            options?.colors?.info?.light || "#007aff",
          ),
          "--color-info-foreground": getRgbChannels(
            options?.colors?.info?.foreground || "#f9fafb",
          ),

          /* success color */
          "--color-success": getRgbChannels(
            options?.colors?.success?.default || "#00bf6b",
          ),
          "--color-success-dark": getRgbChannels(
            options?.colors?.success?.dark || "#00a35f",
          ),
          "--color-success-light": getRgbChannels(
            options?.colors?.success?.light || "#02e585",
          ),
          "--color-success-foreground": getRgbChannels(
            options?.colors?.success?.foreground || "#f9fafb",
          ),

          /* warning color */
          "--color-warning": getRgbChannels(
            options?.colors?.warning?.default || "#fca327",
          ),
          "--color-warning-dark": getRgbChannels(
            options?.colors?.warning?.dark || "#f67d0a",
          ),
          "--color-warning-light": getRgbChannels(
            options?.colors?.warning?.light || "#fdba4c",
          ),
          "--color-warning-foreground": getRgbChannels(
            options?.colors?.warning?.foreground || "#f9fafb",
          ),

          /* error color */
          "--color-error": getRgbChannels(
            options?.colors?.error?.default || "#ef4444",
          ),
          "--color-error-dark": getRgbChannels(
            options?.colors?.error?.dark || "#dc2626",
          ),
          "--color-error-light": getRgbChannels(
            options?.colors?.error?.light || "#f87171",
          ),
          "--color-error-foreground": getRgbChannels(
            options?.colors?.error?.foreground || "#f9fafb",
          ),
        },

        ".dark": {
          /* base colors */
          "--color-background": getRgbChannels(
            options?.darkColors?.background || "#030712",
          ),
          "--color-foreground": getRgbChannels(
            options?.darkColors?.foreground || "#d1d5db",
          ),
          "--color-black": getRgbChannels(
            options?.darkColors?.black || "#030712",
          ),
          "--color-white": getRgbChannels(
            options?.darkColors?.white || "#ffffff",
          ),

          /* surface color */
          "--color-surface": getRgbChannels(
            options?.darkColors?.surface?.default || "#1f2937",
          ),
          "--color-surface-dark": getRgbChannels(
            options?.darkColors?.surface?.dark || "#111827",
          ),
          "--color-surface-light": getRgbChannels(
            options?.darkColors?.surface?.light || "#374151",
          ),
          "--color-surface-foreground": getRgbChannels(
            options?.darkColors?.surface?.foreground || "#f9fafb",
          ),

          /* primary color */
          "--color-primary": getRgbChannels(
            options?.darkColors?.primary?.default || "#6028ff",
          ),
          "--color-primary-dark": getRgbChannels(
            options?.darkColors?.primary?.dark || "#5216eb",
          ),
          "--color-primary-light": getRgbChannels(
            options?.darkColors?.primary?.light || "#724dff",
          ),
          "--color-primary-foreground": getRgbChannels(
            options?.darkColors?.primary?.foreground || "#f9fafb",
          ),

          /* secondary color */
          "--color-secondary": getRgbChannels(
            options?.darkColors?.secondary?.default || "#1f2937",
          ),
          "--color-secondary-dark": getRgbChannels(
            options?.darkColors?.secondary?.dark || "#111827",
          ),
          "--color-secondary-light": getRgbChannels(
            options?.darkColors?.secondary?.light || "#374151",
          ),
          "--color-secondary-foreground": getRgbChannels(
            options?.darkColors?.secondary?.foreground || "#f9fafb",
          ),

          /* info color */
          "--color-info": getRgbChannels(
            options?.darkColors?.info?.default || "#0062ff",
          ),
          "--color-info-dark": getRgbChannels(
            options?.darkColors?.info?.dark || "#0055dd",
          ),
          "--color-info-light": getRgbChannels(
            options?.darkColors?.info?.light || "#007aff",
          ),
          "--color-info-foreground": getRgbChannels(
            options?.darkColors?.info?.foreground || "#f9fafb",
          ),

          /* success color */
          "--color-success": getRgbChannels(
            options?.darkColors?.success?.default || "#00bf6b",
          ),
          "--color-success-dark": getRgbChannels(
            options?.darkColors?.success?.dark || "#00a35f",
          ),
          "--color-success-light": getRgbChannels(
            options?.darkColors?.success?.light || "#02e585",
          ),
          "--color-success-foreground": getRgbChannels(
            options?.darkColors?.success?.foreground || "#f9fafb",
          ),

          /* warning color */
          "--color-warning": getRgbChannels(
            options?.darkColors?.warning?.default || "#fca327",
          ),
          "--color-warning-dark": getRgbChannels(
            options?.darkColors?.warning?.dark || "#f67d0a",
          ),
          "--color-warning-light": getRgbChannels(
            options?.darkColors?.warning?.light || "#fdba4c",
          ),
          "--color-warning-foreground": getRgbChannels(
            options?.darkColors?.warning?.foreground || "#f9fafb",
          ),

          /* error color */
          "--color-error": getRgbChannels(
            options?.darkColors?.error?.default || "#ef4444",
          ),
          "--color-error-dark": getRgbChannels(
            options?.darkColors?.error?.dark || "#dc2626",
          ),
          "--color-error-light": getRgbChannels(
            options?.darkColors?.error?.light || "#f87171",
          ),
          "--color-error-foreground": getRgbChannels(
            options?.darkColors?.error?.foreground || "#f9fafb",
          ),
        },
      });
    };
  },
  function (options) {
    return {
      darkMode: "class",
      content: [
        "./node_modules/@material-tailwind/react/src/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/src/theme/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ["var(--font-sans)", "sans-serif"],
            serif: ["var(--font-serif)", "serif"],
            body: ["var(--font-sans)", "sans-serif"],
            mono: ["var(--font-mono)", "monospace"],
          },
          borderRadius: {
            full: "calc(var(--radius) * 1000)",
            "3xl": "var(--radius)",
            "2xl": "calc(var(--radius) - 8px)",
            xl: "calc(var(--radius) - 12px)",
            lg: "calc(var(--radius) - 16px)",
            md: "calc(var(--radius) - 18px)",
            DEFAULT: "calc(var(--radius) - 20px)",
            sm: "calc(var(--radius) - 22px)",
          },
          colors: {
            background: "rgb(var(--color-background) / <alpha-value>)",
            foreground: "rgb(var(--color-foreground) / <alpha-value>)",
            black: "rgb(var(--color-black) / <alpha-value>)",
            white: "rgb(var(--color-white) / <alpha-value>)",
            surface: {
              DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
              dark: "rgb(var(--color-surface-dark) / <alpha-value>)",
              light: "rgb(var(--color-surface-light) / <alpha-value>)",
              foreground:
                "rgb(var(--color-surface-foreground) / <alpha-value>)",
            },
            primary: {
              DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
              dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
              light: "rgb(var(--color-primary-light) / <alpha-value>)",
              foreground:
                "rgb(var(--color-primary-foreground) / <alpha-value>)",
            },
            secondary: {
              DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
              dark: "rgb(var(--color-secondary-dark) / <alpha-value>)",
              light: "rgb(var(--color-secondary-light) / <alpha-value>)",
              foreground:
                "rgb(var(--color-secondary-foreground) / <alpha-value>)",
            },
            info: {
              DEFAULT: "rgb(var(--color-info) / <alpha-value>)",
              dark: "rgb(var(--color-info-dark) / <alpha-value>)",
              light: "rgb(var(--color-info-light) / <alpha-value>)",
              foreground: "rgb(var(--color-info-foreground) / <alpha-value>)",
            },
            success: {
              DEFAULT: "rgb(var(--color-success) / <alpha-value>)",
              dark: "rgb(var(--color-success-dark) / <alpha-value>)",
              light: "rgb(var(--color-success-light) / <alpha-value>)",
              foreground:
                "rgb(var(--color-success-foreground) / <alpha-value>)",
            },
            warning: {
              DEFAULT: "rgb(var(--color-warning) / <alpha-value>)",
              dark: "rgb(var(--color-warning-dark) / <alpha-value>)",
              light: "rgb(var(--color-warning-light) / <alpha-value>)",
              foreground:
                "rgb(var(--color-warning-foreground) / <alpha-value>)",
            },
            error: {
              DEFAULT: "rgb(var(--color-error) / <alpha-value>)",
              dark: "rgb(var(--color-error-dark) / <alpha-value>)",
              light: "rgb(var(--color-error-light) / <alpha-value>)",
              foreground: "rgb(var(--color-error-foreground) / <alpha-value>)",
            },
          },
        },
      },
    };
  },
);

export default mtConfig;
