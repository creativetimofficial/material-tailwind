"use client";

// @components
import Link from "next/link";
import * as Icons from "@components/icons";
import { ComponentPreview, CodePreview, FrameworkCard } from "@components";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { Typography as MTTypography } from "@material-tailwind/react/dist";

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

const components = {
  Icons,
  CodePreview,
  FrameworkCard,
  ComponentPreview,
  Link: (props) => (
    <Link
      {...props}
      className="text-info underline transition-colors duration-300 hover:text-primary"
    />
  ),
  h1: (props) => <MTTypography as="h1" type="h4" className="mb-4" {...props} />,
  h2: (props) => (
    <MTTypography as="h2" type="h5" className="mb-4 scroll-mt-40" {...props} />
  ),
  h3: (props) => (
    <MTTypography as="h3" type="h6" className="mb-1 mt-8" {...props} />
  ),
  p: (props) => <MTTypography className="mb-2 text-foreground" {...props} />,
  hr: () => <hr className="my-8 border-transparent" />,
  code: (props) => (
    <MTTypography
      as="code"
      type="small"
      className="inline-block rounded border border-surface bg-surface-light px-1 py-0.5 font-mono leading-none text-foreground"
      {...props}
    />
  ),
  a: (props) => (
    <a
      {...props}
      className="text-info underline transition-colors duration-300 hover:text-primary"
    />
  ),
  ul: (props) => (
    <ul className="my-4 list-inside list-disc space-y-0.5" {...props} />
  ),
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
};

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={components} />;
}

export default MdxContent;
