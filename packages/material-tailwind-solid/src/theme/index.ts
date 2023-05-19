import type { AccordionType } from "./components/accordion";
import accordion from "./components/accordion";
import type { AlertType } from "./components/alert";
import alert from "./components/alert";
import type { AvatarType } from "./components/avatar";
import avatar from "./components/avatar";
import type { BadgeType } from "./components/badge";
import badge from "./components/badge";
import type { BreadCrumbsType } from "./components/breadcrumbs";
import breadcrumbs from "./components/breadcrumbs";
import type { ButtonType } from "./components/button";
import button from "./components/button";
import type { ButtonGroupType } from "./components/buttonGroup";
import buttonGroup from "./components/buttonGroup";
import type { CardType } from "./components/card";
import card from "./components/card";
import type { CardBodyProps as CardBodyType } from "./components/card/cardBody";
import cardBody from "./components/card/cardBody";
import type { CardFooterType } from "./components/card/cardFooter";
import cardFooter from "./components/card/cardFooter";
import type { CardHeaderType } from "./components/card/cardHeader";
import cardHeader from "./components/card/cardHeader";
import type { CarouselType } from "./components/carousel";
import carousel from "./components/carousel";
import type { CheckboxType } from "./components/checkbox";
import checkbox from "./components/checkbox";
import type { ChipType } from "./components/chip";
import chip from "./components/chip";

import type { IconButtonType } from "./components/iconButton";
import iconButton from "./components/iconButton";
// import dialog from "./components/dialog";
// import dialogBody from "./components/dialog/dialogBody";
// import dialogFooter from "./components/dialog/dialogFooter";
// import dialogHeader from "./components/dialog/dialogHeader";
// import iconButton from "./components/iconButton";
// import input from "./components/input";
// import menu from "./components/menu";
// import navbar from "./components/navbar";
// import popover from "./components/popover";
// import progress from "./components/progress";
// import radio from "./components/radio";
// import select from "./components/select";
// import switchButton from "./components/switch";
// import tab from "./components/tabs/tab";
// import tabs from "./components/tabs";
// import tabsBody from "./components/tabs/tabsBody";
// import tabsHeader from "./components/tabs/tabsHeader";
// import tabPanel from "./components/tabs/tabPanel";
// import textarea from "./components/textarea";
// import tooltip from "./components/tooltip";
// import typography from "./components/typography";\
export type Theme = {
  accordion: AccordionType;
  alert: AlertType;
  avatar: AvatarType;
  breadcrumbs: BreadCrumbsType;
  badge: BadgeType;
  button: ButtonType;
  buttonGroup: ButtonGroupType;
  card: CardType;
  cardBody: CardBodyType;
  cardFooter: CardFooterType;
  cardHeader: CardHeaderType;
  carousel: CarouselType;
  checkbox: CheckboxType;
  chip: ChipType;
  iconButton: IconButtonType;
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
  // dialog,
  // dialogBody,
  // dialogFooter,
  // dialogHeader,
  iconButton,

  // input,
  // menu,
  // navbar,
  // popover,
  // progress,
  // radio,
  // select,
  // switch: switchButton,
  // tab,
  // tabs,
  // tabsBody,
  // tabsHeader,
  // tabPanel,
  // textarea,
  // tooltip,
  // typography,
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
// export * from "./components/chip";
// export * from "./components/dialog";
// export * from "./components/dialog/dialogBody";
// export * from "./components/dialog/dialogFooter";
// export * from "./components/dialog/dialogHeader";
// export * from "./components/iconButton";
// export * from "./components/input";
// export * from "./components/menu";
// export * from "./components/navbar";
// export * from "./components/popover";
// export * from "./components/progress";
// export * from "./components/radio";
// export * from "./components/select";
// export * from "./components/switch";
// export * from "./components/tabs/tab";
// export * from "./components/tabs";
// export * from "./components/tabs/tabsBody";
// export * from "./components/tabs/tabsHeader";
// export * from "./components/tabs/tabPanel";
// export * from "./components/textarea";
// export * from "./components/tooltip";
// export * from "./components/typography";
// export * from "./components/box";
export default theme;