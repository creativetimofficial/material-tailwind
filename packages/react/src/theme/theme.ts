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
  selectTheme,
  selectTriggerTheme,
  selectListTheme,
  selectOptionTheme,
} from "./select";
import {
  popoverTheme,
  popoverTriggerTheme,
  popoverContentTheme,
  popoverArrowTheme,
} from "./popover";
import {
  tooltipTheme,
  tooltipTriggerTheme,
  tooltipContentTheme,
  tooltipArrowTheme,
} from "./tooltip";
import {
  menuTheme,
  menuTriggerTheme,
  menuContentTheme,
  menuItemTheme,
} from "./menu";
import {
  dialogTheme,
  dialogTriggerTheme,
  dialogOverlayTheme,
  dialogContentTheme,
  dialogDismissTriggerTheme,
} from "./dialog";
import {
  accordionTheme,
  accordionItemTheme,
  accordionTriggerTheme,
  accordionContentTheme,
} from "./accordion";
import {
  tabsTheme,
  tabsListTheme,
  tabsTriggerTheme,
  tabsPanelTheme,
  tabsTriggerIndicatorTheme,
} from "./tabs";

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
  select: selectTheme,
  selectTrigger: selectTriggerTheme,
  selectList: selectListTheme,
  selectOption: selectOptionTheme,
  popover: popoverTheme,
  popoverTrigger: popoverTriggerTheme,
  popoverContent: popoverContentTheme,
  popoverArrow: popoverArrowTheme,
  tooltip: tooltipTheme,
  tooltipTrigger: tooltipTriggerTheme,
  tooltipContent: tooltipContentTheme,
  tooltipArrow: tooltipArrowTheme,
  menu: menuTheme,
  menuContent: menuContentTheme,
  menuTrigger: menuTriggerTheme,
  menuItem: menuItemTheme,
  dialog: dialogTheme,
  dialogTrigger: dialogTriggerTheme,
  dialogOverlay: dialogOverlayTheme,
  dialogContent: dialogContentTheme,
  dialogDismissTrigger: dialogDismissTriggerTheme,
  accordion: accordionTheme,
  accordionItem: accordionItemTheme,
  accordionTrigger: accordionTriggerTheme,
  accordionContent: accordionContentTheme,
  tabs: tabsTheme,
  tabsList: tabsListTheme,
  tabsTrigger: tabsTriggerTheme,
  tabsPanel: tabsPanelTheme,
  tabsTriggerIndicator: tabsTriggerIndicatorTheme,
};

export default theme;
