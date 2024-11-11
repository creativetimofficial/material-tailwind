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
import {
  breadcrumbTheme,
  breadcrumbLinkTheme,
  breadcrumbSeparatorTheme,
} from "./breadcrumb";
import { buttonTheme } from "./button";
import { buttonGroupTheme } from "./button-group";
import { checkboxTheme, checkboxIndicatorTheme } from "./checkbox";
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
import {
  drawerTriggerTheme,
  drawerOverlayTheme,
  drawerPanelTheme,
  drawerDismissTriggerTheme,
} from "./drawer";
import { iconButtonTheme } from "./icon-button";
import { inputTheme, inputIconTheme } from "./input";
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
import { radioTheme, radioItemTheme, radioIndicatorTheme } from "./radio";
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
import {
  timelineTheme,
  timelineItemTheme,
  timelineHeaderTheme,
  timelineIconTheme,
  timelineSeparatorTheme,
  timelineBodyTheme,
} from "./timeline";
import { navbarTheme } from "./navbar";
import { badgeTheme, badgeContentTheme, badgeIndicatorTheme } from "./badge";
import {
  sliderTheme,
  sliderRangeTheme,
  sliderThumbTheme,
  sliderTickTheme,
} from "./slider";

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
  breadcrumb: breadcrumbTheme,
  breadcrumbLink: breadcrumbLinkTheme,
  breadcrumbSeparator: breadcrumbSeparatorTheme,
  button: buttonTheme,
  buttonGroup: buttonGroupTheme,
  checkbox: checkboxTheme,
  checkboxIndicator: checkboxIndicatorTheme,
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
  drawerTrigger: drawerTriggerTheme,
  drawerOverlay: drawerOverlayTheme,
  drawerPanel: drawerPanelTheme,
  drawerDismissTrigger: drawerDismissTriggerTheme,
  iconButton: iconButtonTheme,
  input: inputTheme,
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
  radioItem: radioItemTheme,
  radioIndicator: radioIndicatorTheme,
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
  timeline: timelineTheme,
  timelineItem: timelineItemTheme,
  timelineHeader: timelineHeaderTheme,
  timelineIcon: timelineIconTheme,
  timelineSeparator: timelineSeparatorTheme,
  timelineBody: timelineBodyTheme,
  navbar: navbarTheme,
  badge: badgeTheme,
  badgeContent: badgeContentTheme,
  badgeIndicator: badgeIndicatorTheme,
  slider: sliderTheme,
  sliderRange: sliderRangeTheme,
  sliderThumb: sliderThumbTheme,
  sliderTick: sliderTickTheme,
};

export default theme;
