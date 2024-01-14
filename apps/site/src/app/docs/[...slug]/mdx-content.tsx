"use client";

// @components
import { ComponentPreview } from "@components";
import { Typography as MTTypography } from "@material-tailwind/react/dist";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

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
import * as IconButton from "@components/docs/icon-button";
import * as Image from "@components/docs/image";
import * as Input from "@components/docs/input";
import * as List from "@components/docs/list";
import * as Menu from "@components/docs/menu";
import * as Popover from "@components/docs/popover";
import * as Progress from "@components/docs/progress";
import * as Radio from "@components/docs/radio";
import * as Rating from "@components/docs/rating";
import * as Select from "@components/docs/select";
import * as Spinner from "@components/docs/spinner";
import * as Switch from "@components/docs/switch";
import * as Tabs from "@components/docs/tabs";
import * as Textarea from "@components/docs/textarea";
import * as Tooltip from "@components/docs/tooltip";
import * as Typography from "@components/docs/typography";
import * as Video from "@components/docs/video";

const components = {
  ComponentPreview,
  h1: (props) => (
    <MTTypography
      as="h1"
      variant="h3"
      className="mb-4 dark:text-gray-100"
      {...props}
    />
  ),
  h2: (props) => (
    <MTTypography
      as="h2"
      variant="h4"
      className="mb-4 scroll-mt-40 dark:text-gray-100"
      {...props}
    />
  ),
  h3: (props) => (
    <MTTypography
      as="h3"
      variant="h5"
      className="mb-4 dark:text-gray-100"
      {...props}
    />
  ),
  p: (props) => (
    <MTTypography
      className="mb-4 text-gray-500 dark:text-gray-400"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-transparent" />,
  code: (props) => (
    <MTTypography
      as="code"
      variant="small"
      className="inline-block rounded border border-gray-200 bg-gray-100 px-1 py-0.5 font-mono leading-none text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-blue-500 underline transition-colors duration-300 hover:text-gray-950"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="my-4 list-inside list-disc space-y-0.5" {...props} />
  ),
  li: (props) => (
    <li
      className="font-sans text-base font-normal text-gray-500 antialiased dark:text-gray-400"
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
  IconButton,
  Image,
  Input,
  List,
  Menu,
  Popover,
  Progress,
  Radio,
  Rating,
  Select,
  Spinner,
  Switch,
  Tabs,
  Textarea,
  Tooltip,
  Typography,
  Video,
};

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={components} />;
}

export default MdxContent;
