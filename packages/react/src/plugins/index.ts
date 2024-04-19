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
            options?.colors?.background || "#FFFFFF",
          ),
          "--color-foreground": getRgbChannels(
            options?.colors?.foreground || "#4B5563",
          ),

          /* surface color */
          "--color-surface": getRgbChannels(
            options?.colors?.surface?.default || "#E5E7EB",
          ),
          "--color-surface-dark": getRgbChannels(
            options?.colors?.surface?.dark || "#030712",
          ),
          "--color-surface-light": getRgbChannels(
            options?.colors?.surface?.light || "#F9FaFB",
          ),
          "--color-surface-foreground": getRgbChannels(
            options?.colors?.surface?.foreground || "#1F2937",
          ),

          /* primary color */
          "--color-primary": getRgbChannels(
            options?.colors?.primary?.default || "#111827",
          ),
          "--color-primary-dark": getRgbChannels(
            options?.colors?.primary?.dark || "#030712",
          ),
          "--color-primary-light": getRgbChannels(
            options?.colors?.primary?.light || "#1F2937",
          ),
          "--color-primary-foreground": getRgbChannels(
            options?.colors?.primary?.foreground || "#F9FAFB",
          ),

          /* secondary color */
          "--color-secondary": getRgbChannels(
            options?.colors?.secondary?.default || "#E5E7EB",
          ),
          "--color-secondary-dark": getRgbChannels(
            options?.colors?.secondary?.dark || "#D1D5DB",
          ),
          "--color-secondary-light": getRgbChannels(
            options?.colors?.secondary?.light || "#F9FAFB",
          ),
          "--color-secondary-foreground": getRgbChannels(
            options?.colors?.secondary?.foreground || "#030712",
          ),

          /* info color */
          "--color-info": getRgbChannels(
            options?.colors?.info?.default || "#2563EB",
          ),
          "--color-info-dark": getRgbChannels(
            options?.colors?.info?.dark || "#1D4ED8",
          ),
          "--color-info-light": getRgbChannels(
            options?.colors?.info?.light || "#3B82F6",
          ),
          "--color-info-foreground": getRgbChannels(
            options?.colors?.info?.foreground || "#F9FAFB",
          ),

          /* success color */
          "--color-success": getRgbChannels(
            options?.colors?.success?.default || "#16A34A",
          ),
          "--color-success-dark": getRgbChannels(
            options?.colors?.success?.dark || "#15803D",
          ),
          "--color-success-light": getRgbChannels(
            options?.colors?.success?.light || "#22C55E",
          ),
          "--color-success-foreground": getRgbChannels(
            options?.colors?.success?.foreground || "#F9FAFB",
          ),

          /* warning color */
          "--color-warning": getRgbChannels(
            options?.colors?.warning?.default || "#EAB308",
          ),
          "--color-warning-dark": getRgbChannels(
            options?.colors?.warning?.dark || "#CA8A04",
          ),
          "--color-warning-light": getRgbChannels(
            options?.colors?.warning?.light || "#FACC15",
          ),
          "--color-warning-foreground": getRgbChannels(
            options?.colors?.warning?.foreground || "#030712",
          ),

          /* error color */
          "--color-error": getRgbChannels(
            options?.colors?.error?.default || "#DC2626",
          ),
          "--color-error-dark": getRgbChannels(
            options?.colors?.error?.dark || "#B91C1C",
          ),
          "--color-error-light": getRgbChannels(
            options?.colors?.error?.light || "#EF4444",
          ),
          "--color-error-foreground": getRgbChannels(
            options?.colors?.error?.foreground || "#F9FAFB",
          ),
        },

        ".dark": {
          /* base colors */
          "--color-background": getRgbChannels(
            options?.darkColors?.background || "#030712",
          ),
          "--color-foreground": getRgbChannels(
            options?.darkColors?.foreground || "#9CA3AF",
          ),

          /* surface color */
          "--color-surface": getRgbChannels(
            options?.darkColors?.surface?.default || "#1F2937",
          ),
          "--color-surface-dark": getRgbChannels(
            options?.darkColors?.surface?.dark || "#F9FAFB",
          ),
          "--color-surface-light": getRgbChannels(
            options?.darkColors?.surface?.light || "#111827",
          ),
          "--color-surface-foreground": getRgbChannels(
            options?.darkColors?.surface?.foreground || "#E5E7EB",
          ),

          /* primary color */
          "--color-primary": getRgbChannels(
            options?.darkColors?.primary?.default || "#F3F4F6",
          ),
          "--color-primary-dark": getRgbChannels(
            options?.darkColors?.primary?.dark || "#E5E7EB",
          ),
          "--color-primary-light": getRgbChannels(
            options?.darkColors?.primary?.light || "#F9FAFB",
          ),
          "--color-primary-foreground": getRgbChannels(
            options?.darkColors?.primary?.foreground || "#030712",
          ),

          /* secondary color */
          "--color-secondary": getRgbChannels(
            options?.darkColors?.secondary?.default || "#1F2937",
          ),
          "--color-secondary-dark": getRgbChannels(
            options?.darkColors?.secondary?.dark || "#111827",
          ),
          "--color-secondary-light": getRgbChannels(
            options?.darkColors?.secondary?.light || "#374151",
          ),
          "--color-secondary-foreground": getRgbChannels(
            options?.darkColors?.secondary?.foreground || "#F9FAFB",
          ),

          /* info color */
          "--color-info": getRgbChannels(
            options?.darkColors?.info?.default || "#3B82F6",
          ),
          "--color-info-dark": getRgbChannels(
            options?.darkColors?.info?.dark || "#60A5FA",
          ),
          "--color-info-light": getRgbChannels(
            options?.darkColors?.info?.light || "#2563EB",
          ),
          "--color-info-foreground": getRgbChannels(
            options?.darkColors?.info?.foreground || "#030712",
          ),

          /* success color */
          "--color-success": getRgbChannels(
            options?.darkColors?.success?.default || "#22C55E",
          ),
          "--color-success-dark": getRgbChannels(
            options?.darkColors?.success?.dark || "#16A34A",
          ),
          "--color-success-light": getRgbChannels(
            options?.darkColors?.success?.light || "#4ADE80",
          ),
          "--color-success-foreground": getRgbChannels(
            options?.darkColors?.success?.foreground || "#030712",
          ),

          /* warning color */
          "--color-warning": getRgbChannels(
            options?.darkColors?.warning?.default || "#FACC15",
          ),
          "--color-warning-dark": getRgbChannels(
            options?.darkColors?.warning?.dark || "#EABC08",
          ),
          "--color-warning-light": getRgbChannels(
            options?.darkColors?.warning?.light || "#FDE047",
          ),
          "--color-warning-foreground": getRgbChannels(
            options?.darkColors?.warning?.foreground || "#030712",
          ),

          /* error color */
          "--color-error": getRgbChannels(
            options?.darkColors?.error?.default || "#EF4444",
          ),
          "--color-error-dark": getRgbChannels(
            options?.darkColors?.error?.dark || "#DC2626",
          ),
          "--color-error-light": getRgbChannels(
            options?.darkColors?.error?.light || "#F87171",
          ),
          "--color-error-foreground": getRgbChannels(
            options?.darkColors?.error?.foreground || "#030712",
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
