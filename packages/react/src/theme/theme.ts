import {
  accordionTheme,
  accordionItemTheme,
  accordionTriggerTheme,
  accordionContentTheme,
} from "./accordion";
import {
  alertTheme,
  alertContentTheme,
  alertIconTheme,
  alertDismissTriggerTheme,
} from "./alert";
import { avatarTheme } from "./avatar";
import { buttonTheme } from "./button";
import { buttonGroupTheme } from "./button-group";
import { checkboxTheme } from "./checkbox";
import {
  cardTheme,
  cardHeaderTheme,
  cardBodyTheme,
  cardFooterTheme,
} from "./card";
import {
  chipTheme,
  chipLabelTheme,
  chipIconTheme,
  chipDismissTriggerTheme,
} from "./chip";
import { collapseTheme } from "./collapse";
import {
  dialogTheme,
  dialogTriggerTheme,
  dialogOverlayTheme,
  dialogContentTheme,
  dialogDismissTriggerTheme,
} from "./dialog";
import { iconButtonTheme } from "./icon-button";
import { inputTheme, inputFieldTheme, inputIconTheme } from "./input";
import {
  listTheme,
  listItemTheme,
  listItemStartTheme,
  listItemEndTheme,
} from "./list";
import {
  menuTheme,
  menuTriggerTheme,
  menuContentTheme,
  menuItemTheme,
} from "./menu";
import {
  popoverTheme,
  popoverTriggerTheme,
  popoverContentTheme,
  popoverArrowTheme,
} from "./popover";
import { progressTheme, progressBarTheme } from "./progress";
import { radioTheme } from "./radio";
import { ratingTheme } from "./rating";
import {
  selectTheme,
  selectTriggerTheme,
  selectListTheme,
  selectOptionTheme,
} from "./select";
import { spinnerTheme } from "./spinner";
import { switchTheme } from "./switch";
import {
  tabsTheme,
  tabsListTheme,
  tabsTriggerTheme,
  tabsPanelTheme,
  tabsTriggerIndicatorTheme,
} from "./tabs";
import { textareaTheme } from "./textarea";
import {
  tooltipTheme,
  tooltipTriggerTheme,
  tooltipContentTheme,
  tooltipArrowTheme,
} from "./tooltip";
import { typographyTheme } from "./typography";

// @types
import type { DeepPartial } from "@types";

export type Theme = DeepPartial<typeof theme>;

export const theme = {
  accordion: accordionTheme,
  accordionItem: accordionItemTheme,
  accordionTrigger: accordionTriggerTheme,
  accordionContent: accordionContentTheme,
  alert: alertTheme,
  alertContent: alertContentTheme,
  alertIcon: alertIconTheme,
  alertDismissTrigger: alertDismissTriggerTheme,
  avatar: avatarTheme,
  button: buttonTheme,
  buttonGroup: buttonGroupTheme,
  checkbox: checkboxTheme,
  card: cardTheme,
  cardHeader: cardHeaderTheme,
  cardBody: cardBodyTheme,
  cardFooter: cardFooterTheme,
  chip: chipTheme,
  chipLabel: chipLabelTheme,
  chipIcon: chipIconTheme,
  chipDismissTrigger: chipDismissTriggerTheme,
  collapse: collapseTheme,
  dialog: dialogTheme,
  dialogTrigger: dialogTriggerTheme,
  dialogOverlay: dialogOverlayTheme,
  dialogContent: dialogContentTheme,
  dialogDismissTrigger: dialogDismissTriggerTheme,
  iconButton: iconButtonTheme,
  input: inputTheme,
  inputField: inputFieldTheme,
  inputIcon: inputIconTheme,
  list: listTheme,
  listItem: listItemTheme,
  listItemStart: listItemStartTheme,
  listItemEnd: listItemEndTheme,
  menu: menuTheme,
  menuContent: menuContentTheme,
  menuTrigger: menuTriggerTheme,
  menuItem: menuItemTheme,
  popover: popoverTheme,
  popoverTrigger: popoverTriggerTheme,
  popoverContent: popoverContentTheme,
  popoverArrow: popoverArrowTheme,
  progress: progressTheme,
  progressBar: progressBarTheme,
  radio: radioTheme,
  rating: ratingTheme,
  select: selectTheme,
  selectTrigger: selectTriggerTheme,
  selectList: selectListTheme,
  selectOption: selectOptionTheme,
  spinner: spinnerTheme,
  switch: switchTheme,
  tabs: tabsTheme,
  tabsList: tabsListTheme,
  tabsTrigger: tabsTriggerTheme,
  tabsPanel: tabsPanelTheme,
  tabsTriggerIndicator: tabsTriggerIndicatorTheme,
  textarea: textareaTheme,
  tooltip: tooltipTheme,
  tooltipTrigger: tooltipTriggerTheme,
  tooltipContent: tooltipContentTheme,
  tooltipArrow: tooltipArrowTheme,
  typography: typographyTheme,
};

export default theme;
