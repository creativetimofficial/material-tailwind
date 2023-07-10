import type { AccordionStylesType } from "./components/accordion";
import accordion from "./components/accordion";
import type { AlertStylesType } from "./components/alert";
import alert from "./components/alert";
import type { AvatarStyleTypes } from "./components/avatar";
import avatar from "./components/avatar";
import type { BadgeStyleTypes } from "./components/badge";
import badge from "./components/badge";
import type { BreadcrumbsStyleTypes } from "./components/breadcrumbs";
import breadcrumbs from "./components/breadcrumbs";
import type { ButtonStyleTypes } from "./components/button";
import button from "./components/button";
import type { ButtonGroupStyleTypes } from "./components/buttonGroup";
import buttonGroup from "./components/buttonGroup";
import type { CardStylesType } from "./components/card";
import card from "./components/card";
import type { CardBodyStylesType } from "./components/card/cardBody";
import cardBody from "./components/card/cardBody";
import type { CardFooterStylesType } from "./components/card/cardFooter";
import cardFooter from "./components/card/cardFooter";
import type { CardHeaderStylesType } from "./components/card/cardHeader";
import cardHeader from "./components/card/cardHeader";
import type { CarouselStylesType } from "./components/carousel";
import carousel from "./components/carousel";
import type { CheckboxStylesType } from "./components/checkbox";
import checkbox from "./components/checkbox";
import type { ChipStylesType } from "./components/chip";
import chip from "./components/chip";
import type { CollapseStylesType } from "./components/collapse";
import collapse from "./components/collapse";
import type { DialogStylesType } from "./components/dialog";
import dialog from "./components/dialog";
import type { DialogBodyStylesType } from "./components/dialog/dialogBody";
import dialogBody from "./components/dialog/dialogBody";
import type { DialogFooterStylesType } from "./components/dialog/dialogFooter";
import dialogFooter from "./components/dialog/dialogFooter";
import type { DialogHeaderStylesType } from "./components/dialog/dialogHeader";
import dialogHeader from "./components/dialog/dialogHeader";
import type { DrawerStylesType } from "./components/drawer";
import drawer from "./components/drawer";
import type { IconButtonType } from "./components/iconButton";
import iconButton from "./components/iconButton";
import type { InputStylesType } from "./components/input";
import input from "./components/input";
import type { ListStylesType } from "./components/list";
import list from "./components/list";
import type { MenuStylesType } from "./components/menu";
import menu from "./components/menu";
import type { NavbarStylesType } from "./components/navbar";
import navbar from "./components/navbar";
import type { PopoverStylesType } from "./components/popover";
import popover from "./components/popover";
import type { ProgressStylesType } from "./components/progress";
import progress from "./components/progress";
import type { RadioStylesType } from "./components/radio";
import radio from "./components/radio";
import type { RatingStyleTypes } from "./components/rating";
import rating from "./components/rating";
import type { SelectStylesType } from "./components/select";
import select from "./components/select";
import type { SliderStyleTypes } from "./components/slider";
import slider from "./components/slider";
import type {
  SpeedDialActionStyleTypes,
  SpeedDialContentStyleTypes,
  SpeedDialStyleTypes,
} from "./components/speedDial";
import { speedDial, speedDialAction, speedDialContent } from "./components/speedDial";
import type { SpinnerStyleTypes } from "./components/spinner";
import spinner from "./components/spinner";
import type { StepStyleTypes, StepperStyleTypes } from "./components/stepper";
import { step, stepper } from "./components/stepper";
import type { SwitchButtonStylesType } from "./components/switch";
import switchButton from "./components/switch";
import type { TabsStylesType } from "./components/tabs";
import tabs from "./components/tabs";
import type { TabStylesType } from "./components/tabs/tab";
import tab from "./components/tabs/tab";
import type { TabPanelStylesType } from "./components/tabs/tabPanel";
import tabPanel from "./components/tabs/tabPanel";
import type { TabsBodyStylesType } from "./components/tabs/tabsBody";
import tabsBody from "./components/tabs/tabsBody";
import type { TabsHeaderStylesType } from "./components/tabs/tabsHeader";
import tabsHeader from "./components/tabs/tabsHeader";
import type { TextareaStylesType } from "./components/textarea";
import textarea from "./components/textarea";
import type {
  TimelineBodyStyleTypes,
  TimelineConnectorStyleTypes,
  TimelineHeaderStyleTypes,
  TimelineIconStyleTypes,
  TimelineItemStyleTypes,
  TimelineStyleTypes,
} from "./components/timeline";
import {
  timeline,
  timelineBody,
  timelineConnector,
  timelineHeader,
  timelineIcon,
  timelineItem,
} from "./components/timeline";
import type { TooltipStylesType } from "./components/tooltip";
import tooltip from "./components/tooltip";
import type { TypographyStylesType } from "./components/typography";
import typography from "./components/typography";

export type Theme = {
  accordion: AccordionStylesType;
  alert: AlertStylesType;
  avatar: AvatarStyleTypes;
  breadcrumbs: BreadcrumbsStyleTypes;
  badge: BadgeStyleTypes;
  button: ButtonStyleTypes;
  buttonGroup: ButtonGroupStyleTypes;
  card: CardStylesType;
  cardBody: CardBodyStylesType;
  cardFooter: CardFooterStylesType;
  cardHeader: CardHeaderStylesType;
  carousel: CarouselStylesType;
  checkbox: CheckboxStylesType;
  chip: ChipStylesType;
  collapse: CollapseStylesType;
  dialog: DialogStylesType;
  dialogBody: DialogBodyStylesType;
  dialogHeader: DialogHeaderStylesType;
  dialogFooter: DialogFooterStylesType;
  drawer: DrawerStylesType;
  iconButton: IconButtonType;
  input: InputStylesType;
  list: ListStylesType;
  menu: MenuStylesType;
  navbar: NavbarStylesType;
  popover: PopoverStylesType;
  progress: ProgressStylesType;
  radio: RadioStylesType;
  rating: RatingStyleTypes;
  select: SelectStylesType;
  slider: SliderStyleTypes;
  speedDial: SpeedDialStyleTypes;
  speedDialAction: SpeedDialActionStyleTypes;
  speedDialContent: SpeedDialContentStyleTypes;
  spinner: SpinnerStyleTypes;
  step: StepStyleTypes;
  stepper: StepperStyleTypes;
  tab: TabStylesType;
  tabs: TabsStylesType;
  tabsBody: TabsBodyStylesType;
  tabsHeader: TabsHeaderStylesType;
  tabPanel: TabPanelStylesType;
  switch: SwitchButtonStylesType;
  textarea: TextareaStylesType;
  timeline: TimelineStyleTypes;
  timelineItem: TimelineItemStyleTypes;
  timelineIcon: TimelineIconStyleTypes;
  timelineHeader: TimelineHeaderStyleTypes;
  timelineBody: TimelineBodyStyleTypes;
  timelineConnector: TimelineConnectorStyleTypes;
  tooltip: TooltipStylesType;
  typography: TypographyStylesType;
};
const theme: Theme = {
  accordion,
  alert,
  avatar,
  breadcrumbs,
  badge,
  button,
  buttonGroup,
  card,
  cardBody,
  cardFooter,
  cardHeader,
  carousel,
  checkbox,
  chip,
  collapse,
  dialog,
  dialogBody,
  dialogFooter,
  dialogHeader,
  drawer,
  iconButton,
  input,
  list,
  menu,
  navbar,
  popover,
  progress,
  radio,
  rating,
  select,
  slider,
  speedDial,
  speedDialContent,
  speedDialAction,
  spinner,
  step,
  stepper,
  switch: switchButton,
  tab,
  tabs,
  tabsBody,
  tabsHeader,
  tabPanel,
  textarea,
  timeline,
  timelineItem,
  timelineIcon,
  timelineHeader,
  timelineBody,
  timelineConnector,
  tooltip,
  typography,
};

export * from "./components/accordion";
export * from "./components/alert";
export * from "./components/avatar";
export * from "./components/badge";
export * from "./components/breadcrumbs";
export * from "./components/button";
export * from "./components/buttonGroup";
export * from "./components/card";
export * from "./components/card/cardBody";
export * from "./components/card/cardFooter";
export * from "./components/card/cardHeader";
export * from "./components/carousel";
export * from "./components/checkbox";
export * from "./components/chip";
export * from "./components/collapse";
export * from "./components/dialog";
export * from "./components/dialog/dialogBody";
export * from "./components/dialog/dialogFooter";
export * from "./components/dialog/dialogHeader";
export * from "./components/drawer";
export * from "./components/iconButton";
export * from "./components/input";
export * from "./components/list";
export * from "./components/menu";
export * from "./components/navbar";
export * from "./components/popover";
export * from "./components/progress";
export * from "./components/radio";
export * from "./components/rating";
export * from "./components/select";
export * from "./components/slider";
export * from "./components/speedDial";
export * from "./components/spinner";
export * from "./components/stepper";
export * from "./components/switch";
export * from "./components/tabs";
export * from "./components/tabs/tab";
export * from "./components/tabs/tabPanel";
export * from "./components/tabs/tabsBody";
export * from "./components/tabs/tabsHeader";
export * from "./components/textarea";
export * from "./components/timeline";
export * from "./components/tooltip";
export * from "./components/typography";
export default theme;
