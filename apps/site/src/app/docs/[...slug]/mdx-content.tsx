"use client";

import * as React from "react";

// @components
import Link from "next/link";
import * as Icons from "@components/icons";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  Typography as MTTypography,
  Breadcrumb as MTBreadcrumb,
} from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";

import {
  ComponentPreview,
  CodePreview,
  FrameworkCard,
  ColorPalette,
  Toc,
} from "@components";

// @docs-components
import * as Accordion from "@components/docs/accordion";
import * as Alert from "@components/docs/alert";
import * as Avatar from "@components/docs/avatar";
import * as Button from "@components/docs/button";
import * as ButtonGroup from "@components/docs/button-group";
import * as Checkbox from "@components/docs/checkbox";
import * as Card from "@components/docs/card";
import * as Chip from "@components/docs/chip";
import * as Collapse from "@components/docs/collapse";
import * as Dialog from "@components/docs/dialog";
import * as Footer from "@components/docs/footer";
import * as IconButton from "@components/docs/icon-button";
import * as Image from "@components/docs/image";
import * as Input from "@components/docs/input";
import * as List from "@components/docs/list";
import * as Menu from "@components/docs/menu";
import * as Navbar from "@components/docs/navbar";
import * as Pagination from "@components/docs/pagination";
import * as Popover from "@components/docs/popover";
import * as Progress from "@components/docs/progress";
import * as Radio from "@components/docs/radio";
import * as Rating from "@components/docs/rating";
import * as Select from "@components/docs/select";
import * as Sidebar from "@components/docs/sidebar";
import * as SpeedDial from "@components/docs/speed-dial";
import * as Spinner from "@components/docs/spinner";
import * as Switch from "@components/docs/switch";
import * as Tabs from "@components/docs/tabs";
import * as Textarea from "@components/docs/textarea";
import * as Tooltip from "@components/docs/tooltip";
import * as Typography from "@components/docs/typography";
import * as Video from "@components/docs/video";
import * as Gallery from "@components/docs/gallery";
import * as Table from "@components/docs/table";
import * as Breadcrumb from "@components/docs/breadcrumb";
import * as Drawer from "@components/docs/drawer";
import * as Stepper from "@components/docs/stepper";
import * as Timeline from "@components/docs/timeline";
import * as AlgoliaSearch from "@components/docs/plugins/algolia-search";
import * as Swiper from "@components/docs/plugins/swiper";
import * as Apexcharts from "@components/docs/plugins/apexcharts";
import * as DatePicker from "@components/docs/plugins/date-picker";
import * as Forms from "@components/docs/plugins/forms";
import * as TextEditor from "@components/docs/plugins/text-editor";
import * as DataTable from "@components/docs/plugins/data-table";
import ReleaseNotes from "@components/release-notes";

// html examples
import * as HTMLButton from "@components/docs-html/button";
import * as HTMLButtonGroup from "@components/docs-html/button-group";
import * as HTMLBreadcrumb from "@components/docs-html/breadcrumb";
import * as HTMLAlert from "@components/docs-html/alert";
import * as HTMLAvatar from "@components/docs-html/avatar";
import * as HTMLCard from "@components/docs-html/card";
import * as HTMLChip from "@components/docs-html/chip";
import * as HTMLFooter from "@components/docs-html/footer";
import * as HTMLGallery from "@components/docs-html/gallery";
import * as HTMLIconButton from "@components/docs-html/icon-button";
import * as HTMLImage from "@components/docs-html/image";
import * as HTMLInput from "@components/docs-html/input";
import * as HTMLList from "@components/docs-html/list";
import * as HTMLNavbar from "@components/docs-html/navbar";
import * as HTMLPagination from "@components/docs-html/pagination";
import * as HTMLProgress from "@components/docs-html/progress";
import * as HTMLRating from "@components/docs-html/rating";
import * as HTMLSpinner from "@components/docs-html/spinner";
import * as HTMLStepper from "@components/docs-html/stepper";

import { NavArrowRight } from "iconoir-react";
import { usePathname } from "next/navigation";
const components = {
  Icons,
  CodePreview,
  ColorPalette,
  FrameworkCard,
  ComponentPreview,
  Link: (props) => <Link {...props} className="text-primary" />,
  h1: (props) => <MTTypography as="h1" type="h4" className="mb-4" {...props} />,
  h2: (props) => (
    <MTTypography as="h2" type="h5" className="mb-4 scroll-mt-40" {...props} />
  ),
  h3: (props) => (
    <MTTypography
      as="h3"
      type="h6"
      className="mb-1 mt-8 scroll-mt-40"
      {...props}
    />
  ),
  h4: (props) => (
    <MTTypography
      as="h4"
      type="lead"
      className="mb-1 mt-6 font-semibold"
      {...props}
    />
  ),
  p: (props) => <MTTypography className="mb-2 text-foreground" {...props} />,
  hr: () => <hr className="my-8 border-transparent" />,
  code: (props) => (
    <code
      className="inline-block rounded border border-surface bg-surface-light px-1 py-0.5 font-mono text-sm leading-none text-foreground dark:bg-surface-dark"
      {...props}
    />
  ),
  a: (props) => <a {...props} className="text-primary" />,
  ul: (props) => <ul className="my-4 ml-4 list-disc space-y-1" {...props} />,
  li: (props) => (
    <li
      className="font-sans text-base font-normal text-foreground antialiased"
      {...props}
    />
  ),

  // docs-components
  Accordion,
  Alert,
  Avatar,
  Button,
  ButtonGroup,
  Checkbox,
  Card,
  Chip,
  Collapse,
  Dialog,
  Footer,
  IconButton,
  Image,
  Input,
  List,
  Menu,
  Navbar,
  Pagination,
  Popover,
  Progress,
  Radio,
  Rating,
  Select,
  Sidebar,
  SpeedDial,
  Spinner,
  Switch,
  Tabs,
  Textarea,
  Tooltip,
  Typography,
  Video,
  Gallery,
  Table,
  Breadcrumb,
  Drawer,
  Stepper,
  Timeline,
  AlgoliaSearch,
  Swiper,
  Apexcharts,
  DatePicker,
  Forms,
  TextEditor,
  DataTable,
  ReleaseNotes,

  // html examples
  HTMLButton,
  HTMLButtonGroup,
  HTMLBreadcrumb,
  HTMLAlert,
  HTMLAvatar,
  HTMLCard,
  HTMLChip,
  HTMLFooter,
  HTMLGallery,
  HTMLIconButton,
  HTMLImage,
  HTMLInput,
  HTMLList,
  HTMLNavbar,
  HTMLPagination,
  HTMLProgress,
  HTMLRating,
  HTMLSpinner,
  HTMLStepper,
};

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

export function MdxContent({ source }: MdxContentProps) {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex w-full gap-0 duration-500 animate-in fade-in lg:gap-[52px]">
      <div ref={contentRef} className="mt-40 w-full px-4 lg:mt-[106px] lg:px-0">
        <MTBreadcrumb className="mb-12 hidden p-0 lg:flex">
          {pathParts.map((part, index) => (
            <React.Fragment key={index}>
              <MTBreadcrumb.Link
                className={twMerge(
                  "capitalize text-primary",
                  index !== pathParts.length - 1 && "text-foreground",
                )}
              >
                {part}
              </MTBreadcrumb.Link>
              {index !== pathParts.length - 1
                ? index !== 0 && (
                    <MTBreadcrumb.Separator>
                      <NavArrowRight className="h-3 w-3 stroke-2" />
                    </MTBreadcrumb.Separator>
                  )
                : null}
            </React.Fragment>
          ))}
        </MTBreadcrumb>
        <MDXRemote {...source} components={components as any} />
      </div>
      <Toc contentRef={contentRef as React.MutableRefObject<HTMLDivElement>} />
    </div>
  );
}

export default MdxContent;
