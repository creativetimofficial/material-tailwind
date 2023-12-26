import radioTheme from "./radio";
import buttonTheme from "./button";
import collapseTheme from "./collapse";
import checkboxTheme from "./checkbox";
import typographyTheme from "./typography";
import iconButtonTheme from "./icon-button";
import buttonGroupTheme from "./button-group";
import swtichTheme from "./switch";
import { inputTheme, inputFieldTheme, inputIconTheme } from "./input";
import textareaTheme from "./textarea";
import ratingTheme from "./rating";
import selectTheme from "./select";
import {
  listTheme,
  listItemTheme,
  listItemStartTheme,
  listItemEndTheme,
} from "./list";
import avatarTheme from "./avatar";

// @types
import type { DeepPartial } from "@types";

export type Theme = DeepPartial<typeof theme>;

export const theme = {
  button: buttonTheme,
  buttonGroup: buttonGroupTheme,
  checkbox: checkboxTheme,
  iconButton: iconButtonTheme,
  radio: radioTheme,
  collapse: collapseTheme,
  typography: typographyTheme,
  switch: swtichTheme,
  input: inputTheme,
  inputField: inputFieldTheme,
  inputIcon: inputIconTheme,
  textarea: textareaTheme,
  rating: ratingTheme,
  select: selectTheme,
  list: listTheme,
  listItem: listItemTheme,
  listItemStart: listItemStartTheme,
  listItemEnd: listItemEndTheme,
  avatar: avatarTheme,
};

export default theme;
