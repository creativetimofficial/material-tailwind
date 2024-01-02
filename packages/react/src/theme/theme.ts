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
import {
  listTheme,
  listItemTheme,
  listItemStartTheme,
  listItemEndTheme,
} from "./list";
import avatarTheme from "./avatar";
import {
  chipTheme,
  chipLabelTheme,
  chipIconTheme,
  chipDismissTriggerTheme,
} from "./chip";
import {
  alertTheme,
  alertContentTheme,
  alertIconTheme,
  alertDismissTriggerTheme,
} from "./alert";
import {
  selectTriggerTheme,
  selectListTheme,
  selectOptionTheme,
} from "./select";

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
  list: listTheme,
  listItem: listItemTheme,
  listItemStart: listItemStartTheme,
  listItemEnd: listItemEndTheme,
  avatar: avatarTheme,
  chip: chipTheme,
  chipLabel: chipLabelTheme,
  chipIcon: chipIconTheme,
  chipDismissTrigger: chipDismissTriggerTheme,
  alert: alertTheme,
  alertContent: alertContentTheme,
  alertIcon: alertIconTheme,
  alertDismissTrigger: alertDismissTriggerTheme,
  selectTrigger: selectTriggerTheme,
  selectList: selectListTheme,
  selectOption: selectOptionTheme,
};

export default theme;
