import buttonTheme from "./button";
import collapseTheme from "./collapse";
import checkboxTheme from "./checkbox";
import typographyTheme from "./typography";
import iconButtonTheme from "./icon-button";
import buttonGroupTheme from "./button-group";

// @types
import type { DeepPartial } from "@types";

export type Theme = DeepPartial<typeof theme>;

export const theme = {
  button: buttonTheme,
  collapse: collapseTheme,
  checkbox: checkboxTheme,
  iconButton: iconButtonTheme,
  typography: typographyTheme,
  buttonGroup: buttonGroupTheme,
};

export default theme;
