'use client';

import React from 'react';

// Import all component examples statically
import * as Accordion from './docs/accordion';
import * as Alert from './docs/alert';
import * as Avatar from './docs/avatar';
import * as Button from './docs/button';
import * as ButtonGroup from './docs/button-group';
import * as Checkbox from './docs/checkbox';
import * as Card from './docs/card';
import * as Chip from './docs/chip';
import * as Collapse from './docs/collapse';
import * as Dialog from './docs/dialog';
import * as Footer from './docs/footer';
import * as IconButton from './docs/icon-button';
import * as Image from './docs/image';
import * as Input from './docs/input';
import * as InputNumber from './docs/input-number';
import * as List from './docs/list';
import * as Menu from './docs/menu';
import * as Navbar from './docs/navbar';
import * as Pagination from './docs/pagination';
import * as Popover from './docs/popover';
import * as Progress from './docs/progress';
import * as Rating from './docs/rating';
import * as Select from './docs/select';
import * as Sidebar from './docs/sidebar';
import * as SpeedDial from './docs/speed-dial';
import * as Spinner from './docs/spinner';
import * as Switch from './docs/switch';
import * as Tabs from './docs/tabs';
import * as Textarea from './docs/textarea';
import * as Tooltip from './docs/tooltip';
import * as Typography from './docs/typography';
import * as Video from './docs/video';
import * as Gallery from './docs/gallery';
import * as Table from './docs/table';
import * as Breadcrumb from './docs/breadcrumb';
import * as Drawer from './docs/drawer';
import * as Stepper from './docs/stepper';
import * as Slider from './docs/slider';
import * as Skeleton from './docs/skeleton';
import * as Timeline from './docs/timeline';
import * as Badge from './docs/badge';
import * as Radio from './docs/radio';

// HTML Components
import * as HTMLButton from './docs-html/button';
import * as HTMLButtonGroup from './docs-html/button-group';
import * as HTMLBreadcrumb from './docs-html/breadcrumb';
import * as HTMLAlert from './docs-html/alert';
import * as HTMLAvatar from './docs-html/avatar';
import * as HTMLCard from './docs-html/card';
import * as HTMLChip from './docs-html/chip';
import * as HTMLFooter from './docs-html/footer';
import * as HTMLGallery from './docs-html/gallery';
import * as HTMLIconButton from './docs-html/icon-button';
import * as HTMLImage from './docs-html/image';
import * as HTMLInput from './docs-html/input';
import * as HTMLInputNumber from './docs-html/input-number';
import * as HTMLList from './docs-html/list';
import * as HTMLNavbar from './docs-html/navbar';
import * as HTMLPagination from './docs-html/pagination';
import * as HTMLProgress from './docs-html/progress';
import * as HTMLRating from './docs-html/rating';
import * as HTMLSpinner from './docs-html/spinner';
import * as HTMLStepper from './docs-html/stepper';
import * as HTMLSkeleton from './docs-html/skeleton';
import * as HTMLTable from './docs-html/table';
import * as HTMLTextarea from './docs-html/textarea';
import * as HTMLTimeline from './docs-html/timeline';
import * as HTMLTypography from './docs-html/typography';
import * as HTMLVideo from './docs-html/video';
import * as HTMLCheckbox from './docs-html/checkbox';
import * as HTMLRadio from './docs-html/radio';
import * as HTMLSlider from './docs-html/slider';
import * as HTMLSwitch from './docs-html/switch';
import * as HTMLBadge from './docs-html/badge';
import * as HTMLAccordion from './docs-html/accordion';
import * as HTMLCollapse from './docs-html/collapse';
import * as HTMLDialog from './docs-html/dialog';
import * as HTMLDrawer from './docs-html/drawer';
import * as HTMLDropdown from './docs-html/dropdown';
import * as HTMLMenu from './docs-html/menu';
import * as HTMLModal from './docs-html/modal';
import * as HTMLPopover from './docs-html/popover';
import * as HTMLSelect from './docs-html/select';
import * as HTMLSidebar from './docs-html/sidebar';
import * as HTMLTabs from './docs-html/tabs';
import * as HTMLTooltip from './docs-html/tooltip';

interface ComponentPreviewProps {
  componentPath: string;
}

// Create a mapping of component paths to components
const componentMap: Record<string, any> = {
  // React components
  ...Object.keys(Accordion).reduce((acc, key) => ({ ...acc, [`./docs/accordion/${key}.tsx`]: Accordion[key as keyof typeof Accordion] }), {}),
  ...Object.keys(Alert).reduce((acc, key) => ({ ...acc, [`./docs/alert/${key}.tsx`]: Alert[key as keyof typeof Alert] }), {}),
  ...Object.keys(Avatar).reduce((acc, key) => ({ ...acc, [`./docs/avatar/${key}.tsx`]: Avatar[key as keyof typeof Avatar] }), {}),
  ...Object.keys(Button).reduce((acc, key) => ({ ...acc, [`./docs/button/${key}.tsx`]: Button[key as keyof typeof Button] }), {}),
  ...Object.keys(ButtonGroup).reduce((acc, key) => ({ ...acc, [`./docs/button-group/${key}.tsx`]: ButtonGroup[key as keyof typeof ButtonGroup] }), {}),
  ...Object.keys(Checkbox).reduce((acc, key) => ({ ...acc, [`./docs/checkbox/${key}.tsx`]: Checkbox[key as keyof typeof Checkbox] }), {}),
  ...Object.keys(Card).reduce((acc, key) => ({ ...acc, [`./docs/card/${key}.tsx`]: Card[key as keyof typeof Card] }), {}),
  ...Object.keys(Chip).reduce((acc, key) => ({ ...acc, [`./docs/chip/${key}.tsx`]: Chip[key as keyof typeof Chip] }), {}),
  ...Object.keys(Collapse).reduce((acc, key) => ({ ...acc, [`./docs/collapse/${key}.tsx`]: Collapse[key as keyof typeof Collapse] }), {}),
  ...Object.keys(Dialog).reduce((acc, key) => ({ ...acc, [`./docs/dialog/${key}.tsx`]: Dialog[key as keyof typeof Dialog] }), {}),
  ...Object.keys(Footer).reduce((acc, key) => ({ ...acc, [`./docs/footer/${key}.tsx`]: Footer[key as keyof typeof Footer] }), {}),
  ...Object.keys(IconButton).reduce((acc, key) => ({ ...acc, [`./docs/icon-button/${key}.tsx`]: IconButton[key as keyof typeof IconButton] }), {}),
  ...Object.keys(Image).reduce((acc, key) => ({ ...acc, [`./docs/image/${key}.tsx`]: Image[key as keyof typeof Image] }), {}),
  ...Object.keys(Input).reduce((acc, key) => ({ ...acc, [`./docs/input/${key}.tsx`]: Input[key as keyof typeof Input] }), {}),
  ...Object.keys(InputNumber).reduce((acc, key) => ({ ...acc, [`./docs/input-number/${key}.tsx`]: InputNumber[key as keyof typeof InputNumber] }), {}),
  ...Object.keys(List).reduce((acc, key) => ({ ...acc, [`./docs/list/${key}.tsx`]: List[key as keyof typeof List] }), {}),
  ...Object.keys(Menu).reduce((acc, key) => ({ ...acc, [`./docs/menu/${key}.tsx`]: Menu[key as keyof typeof Menu] }), {}),
  ...Object.keys(Navbar).reduce((acc, key) => ({ ...acc, [`./docs/navbar/${key}.tsx`]: Navbar[key as keyof typeof Navbar] }), {}),
  ...Object.keys(Pagination).reduce((acc, key) => ({ ...acc, [`./docs/pagination/${key}.tsx`]: Pagination[key as keyof typeof Pagination] }), {}),
  ...Object.keys(Popover).reduce((acc, key) => ({ ...acc, [`./docs/popover/${key}.tsx`]: Popover[key as keyof typeof Popover] }), {}),
  ...Object.keys(Progress).reduce((acc, key) => ({ ...acc, [`./docs/progress/${key}.tsx`]: Progress[key as keyof typeof Progress] }), {}),
  ...Object.keys(Rating).reduce((acc, key) => ({ ...acc, [`./docs/rating/${key}.tsx`]: Rating[key as keyof typeof Rating] }), {}),
  ...Object.keys(Select).reduce((acc, key) => ({ ...acc, [`./docs/select/${key}.tsx`]: Select[key as keyof typeof Select] }), {}),
  ...Object.keys(Sidebar).reduce((acc, key) => ({ ...acc, [`./docs/sidebar/${key}.tsx`]: Sidebar[key as keyof typeof Sidebar] }), {}),
  ...Object.keys(SpeedDial).reduce((acc, key) => ({ ...acc, [`./docs/speed-dial/${key}.tsx`]: SpeedDial[key as keyof typeof SpeedDial] }), {}),
  ...Object.keys(Spinner).reduce((acc, key) => ({ ...acc, [`./docs/spinner/${key}.tsx`]: Spinner[key as keyof typeof Spinner] }), {}),
  ...Object.keys(Switch).reduce((acc, key) => ({ ...acc, [`./docs/switch/${key}.tsx`]: Switch[key as keyof typeof Switch] }), {}),
  ...Object.keys(Tabs).reduce((acc, key) => ({ ...acc, [`./docs/tabs/${key}.tsx`]: Tabs[key as keyof typeof Tabs] }), {}),
  ...Object.keys(Textarea).reduce((acc, key) => ({ ...acc, [`./docs/textarea/${key}.tsx`]: Textarea[key as keyof typeof Textarea] }), {}),
  ...Object.keys(Tooltip).reduce((acc, key) => ({ ...acc, [`./docs/tooltip/${key}.tsx`]: Tooltip[key as keyof typeof Tooltip] }), {}),
  ...Object.keys(Typography).reduce((acc, key) => ({ ...acc, [`./docs/typography/${key}.tsx`]: Typography[key as keyof typeof Typography] }), {}),
  ...Object.keys(Video).reduce((acc, key) => ({ ...acc, [`./docs/video/${key}.tsx`]: Video[key as keyof typeof Video] }), {}),
  ...Object.keys(Gallery).reduce((acc, key) => ({ ...acc, [`./docs/gallery/${key}.tsx`]: Gallery[key as keyof typeof Gallery] }), {}),
  ...Object.keys(Table).reduce((acc, key) => ({ ...acc, [`./docs/table/${key}.tsx`]: Table[key as keyof typeof Table] }), {}),
  ...Object.keys(Breadcrumb).reduce((acc, key) => ({ ...acc, [`./docs/breadcrumb/${key}.tsx`]: Breadcrumb[key as keyof typeof Breadcrumb] }), {}),
  ...Object.keys(Drawer).reduce((acc, key) => ({ ...acc, [`./docs/drawer/${key}.tsx`]: Drawer[key as keyof typeof Drawer] }), {}),
  ...Object.keys(Stepper).reduce((acc, key) => ({ ...acc, [`./docs/stepper/${key}.tsx`]: Stepper[key as keyof typeof Stepper] }), {}),
  ...Object.keys(Slider).reduce((acc, key) => ({ ...acc, [`./docs/slider/${key}.tsx`]: Slider[key as keyof typeof Slider] }), {}),
  ...Object.keys(Skeleton).reduce((acc, key) => ({ ...acc, [`./docs/skeleton/${key}.tsx`]: Skeleton[key as keyof typeof Skeleton] }), {}),
  ...Object.keys(Timeline).reduce((acc, key) => ({ ...acc, [`./docs/timeline/${key}.tsx`]: Timeline[key as keyof typeof Timeline] }), {}),
  ...Object.keys(Badge).reduce((acc, key) => ({ ...acc, [`./docs/badge/${key}.tsx`]: Badge[key as keyof typeof Badge] }), {}),
  ...Object.keys(Radio).reduce((acc, key) => ({ ...acc, [`./docs/radio/${key}.tsx`]: Radio[key as keyof typeof Radio] }), {}),

  // HTML components
  ...Object.keys(HTMLButton).reduce((acc, key) => ({ ...acc, [`./docs-html/button/${key}.tsx`]: HTMLButton[key as keyof typeof HTMLButton] }), {}),
  ...Object.keys(HTMLButtonGroup).reduce((acc, key) => ({ ...acc, [`./docs-html/button-group/${key}.tsx`]: HTMLButtonGroup[key as keyof typeof HTMLButtonGroup] }), {}),
  ...Object.keys(HTMLBreadcrumb).reduce((acc, key) => ({ ...acc, [`./docs-html/breadcrumb/${key}.tsx`]: HTMLBreadcrumb[key as keyof typeof HTMLBreadcrumb] }), {}),
  ...Object.keys(HTMLAlert).reduce((acc, key) => ({ ...acc, [`./docs-html/alert/${key}.tsx`]: HTMLAlert[key as keyof typeof HTMLAlert] }), {}),
  ...Object.keys(HTMLAvatar).reduce((acc, key) => ({ ...acc, [`./docs-html/avatar/${key}.tsx`]: HTMLAvatar[key as keyof typeof HTMLAvatar] }), {}),
  ...Object.keys(HTMLCard).reduce((acc, key) => ({ ...acc, [`./docs-html/card/${key}.tsx`]: HTMLCard[key as keyof typeof HTMLCard] }), {}),
  ...Object.keys(HTMLChip).reduce((acc, key) => ({ ...acc, [`./docs-html/chip/${key}.tsx`]: HTMLChip[key as keyof typeof HTMLChip] }), {}),
  ...Object.keys(HTMLFooter).reduce((acc, key) => ({ ...acc, [`./docs-html/footer/${key}.tsx`]: HTMLFooter[key as keyof typeof HTMLFooter] }), {}),
  ...Object.keys(HTMLGallery).reduce((acc, key) => ({ ...acc, [`./docs-html/gallery/${key}.tsx`]: HTMLGallery[key as keyof typeof HTMLGallery] }), {}),
  ...Object.keys(HTMLIconButton).reduce((acc, key) => ({ ...acc, [`./docs-html/icon-button/${key}.tsx`]: HTMLIconButton[key as keyof typeof HTMLIconButton] }), {}),
  ...Object.keys(HTMLImage).reduce((acc, key) => ({ ...acc, [`./docs-html/image/${key}.tsx`]: HTMLImage[key as keyof typeof HTMLImage] }), {}),
  ...Object.keys(HTMLInput).reduce((acc, key) => ({ ...acc, [`./docs-html/input/${key}.tsx`]: HTMLInput[key as keyof typeof HTMLInput] }), {}),
  ...Object.keys(HTMLInputNumber).reduce((acc, key) => ({ ...acc, [`./docs-html/input-number/${key}.tsx`]: HTMLInputNumber[key as keyof typeof HTMLInputNumber] }), {}),
  ...Object.keys(HTMLList).reduce((acc, key) => ({ ...acc, [`./docs-html/list/${key}.tsx`]: HTMLList[key as keyof typeof HTMLList] }), {}),
  ...Object.keys(HTMLNavbar).reduce((acc, key) => ({ ...acc, [`./docs-html/navbar/${key}.tsx`]: HTMLNavbar[key as keyof typeof HTMLNavbar] }), {}),
  ...Object.keys(HTMLPagination).reduce((acc, key) => ({ ...acc, [`./docs-html/pagination/${key}.tsx`]: HTMLPagination[key as keyof typeof HTMLPagination] }), {}),
  ...Object.keys(HTMLProgress).reduce((acc, key) => ({ ...acc, [`./docs-html/progress/${key}.tsx`]: HTMLProgress[key as keyof typeof HTMLProgress] }), {}),
  ...Object.keys(HTMLRating).reduce((acc, key) => ({ ...acc, [`./docs-html/rating/${key}.tsx`]: HTMLRating[key as keyof typeof HTMLRating] }), {}),
  ...Object.keys(HTMLSpinner).reduce((acc, key) => ({ ...acc, [`./docs-html/spinner/${key}.tsx`]: HTMLSpinner[key as keyof typeof HTMLSpinner] }), {}),
  ...Object.keys(HTMLStepper).reduce((acc, key) => ({ ...acc, [`./docs-html/stepper/${key}.tsx`]: HTMLStepper[key as keyof typeof HTMLStepper] }), {}),
  ...Object.keys(HTMLSkeleton).reduce((acc, key) => ({ ...acc, [`./docs-html/skeleton/${key}.tsx`]: HTMLSkeleton[key as keyof typeof HTMLSkeleton] }), {}),
  ...Object.keys(HTMLTable).reduce((acc, key) => ({ ...acc, [`./docs-html/table/${key}.tsx`]: HTMLTable[key as keyof typeof HTMLTable] }), {}),
  ...Object.keys(HTMLTextarea).reduce((acc, key) => ({ ...acc, [`./docs-html/textarea/${key}.tsx`]: HTMLTextarea[key as keyof typeof HTMLTextarea] }), {}),
  ...Object.keys(HTMLTimeline).reduce((acc, key) => ({ ...acc, [`./docs-html/timeline/${key}.tsx`]: HTMLTimeline[key as keyof typeof HTMLTimeline] }), {}),
  ...Object.keys(HTMLTypography).reduce((acc, key) => ({ ...acc, [`./docs-html/typography/${key}.tsx`]: HTMLTypography[key as keyof typeof HTMLTypography] }), {}),
  ...Object.keys(HTMLVideo).reduce((acc, key) => ({ ...acc, [`./docs-html/video/${key}.tsx`]: HTMLVideo[key as keyof typeof HTMLVideo] }), {}),
  ...Object.keys(HTMLCheckbox).reduce((acc, key) => ({ ...acc, [`./docs-html/checkbox/${key}.tsx`]: HTMLCheckbox[key as keyof typeof HTMLCheckbox] }), {}),
  ...Object.keys(HTMLRadio).reduce((acc, key) => ({ ...acc, [`./docs-html/radio/${key}.tsx`]: HTMLRadio[key as keyof typeof HTMLRadio] }), {}),
  ...Object.keys(HTMLSlider).reduce((acc, key) => ({ ...acc, [`./docs-html/slider/${key}.tsx`]: HTMLSlider[key as keyof typeof HTMLSlider] }), {}),
  ...Object.keys(HTMLSwitch).reduce((acc, key) => ({ ...acc, [`./docs-html/switch/${key}.tsx`]: HTMLSwitch[key as keyof typeof HTMLSwitch] }), {}),
  ...Object.keys(HTMLBadge).reduce((acc, key) => ({ ...acc, [`./docs-html/badge/${key}.tsx`]: HTMLBadge[key as keyof typeof HTMLBadge] }), {}),
  ...Object.keys(HTMLAccordion).reduce((acc, key) => ({ ...acc, [`./docs-html/accordion/${key}.tsx`]: HTMLAccordion[key as keyof typeof HTMLAccordion] }), {}),
  ...Object.keys(HTMLCollapse).reduce((acc, key) => ({ ...acc, [`./docs-html/collapse/${key}.tsx`]: HTMLCollapse[key as keyof typeof HTMLCollapse] }), {}),
  ...Object.keys(HTMLDialog).reduce((acc, key) => ({ ...acc, [`./docs-html/dialog/${key}.tsx`]: HTMLDialog[key as keyof typeof HTMLDialog] }), {}),
  ...Object.keys(HTMLDrawer).reduce((acc, key) => ({ ...acc, [`./docs-html/drawer/${key}.tsx`]: HTMLDrawer[key as keyof typeof HTMLDrawer] }), {}),
  ...Object.keys(HTMLDropdown).reduce((acc, key) => ({ ...acc, [`./docs-html/dropdown/${key}.tsx`]: HTMLDropdown[key as keyof typeof HTMLDropdown] }), {}),
  ...Object.keys(HTMLMenu).reduce((acc, key) => ({ ...acc, [`./docs-html/menu/${key}.tsx`]: HTMLMenu[key as keyof typeof HTMLMenu] }), {}),
  ...Object.keys(HTMLModal).reduce((acc, key) => ({ ...acc, [`./docs-html/modal/${key}.tsx`]: HTMLModal[key as keyof typeof HTMLModal] }), {}),
  ...Object.keys(HTMLPopover).reduce((acc, key) => ({ ...acc, [`./docs-html/popover/${key}.tsx`]: HTMLPopover[key as keyof typeof HTMLPopover] }), {}),
  ...Object.keys(HTMLSelect).reduce((acc, key) => ({ ...acc, [`./docs-html/select/${key}.tsx`]: HTMLSelect[key as keyof typeof HTMLSelect] }), {}),
  ...Object.keys(HTMLSidebar).reduce((acc, key) => ({ ...acc, [`./docs-html/sidebar/${key}.tsx`]: HTMLSidebar[key as keyof typeof HTMLSidebar] }), {}),
  ...Object.keys(HTMLTabs).reduce((acc, key) => ({ ...acc, [`./docs-html/tabs/${key}.tsx`]: HTMLTabs[key as keyof typeof HTMLTabs] }), {}),
  ...Object.keys(HTMLTooltip).reduce((acc, key) => ({ ...acc, [`./docs-html/tooltip/${key}.tsx`]: HTMLTooltip[key as keyof typeof HTMLTooltip] }), {}),
};

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error loading component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-4 text-center text-red-500">Failed to load component.</div>;
    }

    return this.props.children;
  }
}

function ComponentPreview({ componentPath }: ComponentPreviewProps) {
  const Component = componentMap[componentPath];

  if (!Component) {
    console.warn(`Component not found for path: ${componentPath}`);
    return <div className="p-4 text-center text-yellow-500">Component not found: {componentPath}</div>;
  }

  return (
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  );
};

export default ComponentPreview;
