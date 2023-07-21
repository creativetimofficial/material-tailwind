import { Fragment, useState, useEffect } from "react";

// next.js components
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

// next-mdx-remote components
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

// mdx-observable components
import { State, Observe } from "mdx-observable";

// markdown utils
import fs from "fs";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

// page components
import DocsFooter from "components/layout/docs-footer";
import DocsNavbar from "components/layout/docs-navbar";
import Sidenav from "components/layout/sidenav";
import PageMap from "components/layout/page-map";
import ComponentDemo from "components/cards/component-demo";
import Code from "components/code";
import CodeSandbox from "components/code-sandbox";
import StackBlitz from "components/stack-blitz";
import Framework from "components/cards/framework";
import CraLogo from "components/icons/cra";
import NextLogo from "components/icons/next";
import RemixLogo from "components/icons/remix";
import ViteLogo from "components/icons/vite";
import AstroLogo from "components/icons/astro";
import GatsbyLogo from "components/icons/gatsby";
import ColorPalette from "components/color-palette";
import DocsRelated from "components/layout/docs-related";
import CodeTabs from "components/code-tabs";
import CodePreview from "components/code-preview";
import Warning from "components/warning";

// components examples
import * as AccordionExamples from "docs-content/react/accordion";
import * as AlertExamples from "docs-content/react/alert";
import * as AvatarExamples from "docs-content/react/avatar";
import * as BadgeExamples from "docs-content/react/badge";
import * as BreadcrumbsExamples from "docs-content/react/breadcrumbs";
import * as ButtonGroupExamples from "docs-content/react/button-group";
import * as ButtonExamples from "docs-content/react/button";
import * as CardExamples from "docs-content/react/card";
import * as CarouselExamples from "docs-content/react/carousel";
import * as CheckboxExamples from "docs-content/react/checkbox";
import * as ChipExamples from "docs-content/react/chip";
import * as CollapseExamples from "docs-content/react/collapse";
import * as DialogExamples from "docs-content/react/dialog";
import * as DrawerExamples from "docs-content/react/drawer";
import * as NavbarExamples from "docs-content/react/navbar";
import * as FooterExamples from "docs-content/react/footer";
import * as ImgExamples from "docs-content/react/img";
import * as VideoExamples from "docs-content/react/video";
import * as TableExamples from "docs-content/react/table";
import * as PaginationExamples from "docs-content/react/pagination";
import * as SidebarExamples from "docs-content/react/sidebar";
import * as FormExamples from "docs-content/react/form";
import * as IconButtonExamples from "docs-content/react/icon-button";
import * as InputExamples from "docs-content/react/input";
import * as ListExamples from "docs-content/react/list";
import * as TypographyExamples from "docs-content/react/typography";
import * as MenuExamples from "docs-content/react/menu";
import * as RatingExamples from "docs-content/react/rating";
import * as PopoverExamples from "docs-content/react/popover";
import * as ProgressExamples from "docs-content/react/progress";
import * as RadioExamples from "docs-content/react/radio";
import * as SliderExamples from "docs-content/react/slider";
import * as SelectExamples from "docs-content/react/select";
import * as SpeedDialExamples from "docs-content/react/speed-dial";
import * as SpinnerExamples from "docs-content/react/spinner";
import * as StepperExamples from "docs-content/react/stepper";
import * as TimelineExamples from "components/docs/react/timeline";

import TransparentTabs from "components/docs/transparent-tabs";
import DocsTitle from "components/docs-title";

// @material-tailwind/react components
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Avatar,
  Breadcrumbs,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  Chip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  MobileNav,
  Navbar,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
  Progress,
  Radio,
  Select,
  Switch,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Textarea,
  Tooltip,
  Typography,
  ButtonGroup,
  Carousel,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Collapse,
  Slider,
} from "@material-tailwind/react";

// @heroicons
import * as OutlineIcons from "@heroicons/react/24/outline";
import * as SolidIcons from "@heroicons/react/24/solid";

// routes
import { routes as htmlRoutes } from "routes/html.routes";
import { routes as reactRoutes } from "routes/react.routes";

// utils
import config from "utils/rehype-pretty-code-config";
import filterArray from "utils/filter-array";
import getDirectoriesAndFile from "utils/get-directories-and-files";

// material tailwind html script
import initHtmlScripts from "public/material-tailwind-html-v2";

const components = {
  h1: (props) => (
    <Typography
      as="h1"
      variant="h3"
      color="blue-gray"
      className="!mb-4 lg:!text-4xl"
      {...props}
    />
  ),
  h2: (props) => (
    <Typography
      as="h2"
      variant="h4"
      color="blue-gray"
      className="!mb-2"
      {...props}
    />
  ),
  h3: (props) => (
    <Typography
      as="h3"
      variant="h5"
      color="blue-gray"
      className="!mb-2"
      {...props}
    />
  ),
  h6: (props) => (
    <Typography
      as="p"
      variant="h5"
      className="!mb-12 !font-normal !text-blue-gray-500"
      {...props}
    />
  ),
  p: (props) => (
    <Typography className="!mb-4 !font-normal !text-blue-gray-500" {...props} />
  ),
  hr: () => <hr className="!mb-12 !mt-16 border-transparent" />,
  a: (props) => (
    <a
      className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-blue-500"
      {...props}
    />
  ),
  table: (props) => (
    <div className="!overflow-scroll">
      <table className="!w-full !min-w-[700px] lg:!min-w-full" {...props} />
    </div>
  ),
  thead: (props) => <thead {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => <tr {...props} />,
  th: (props) => (
    <th
      className="min-w-[120px] border-b border-blue-gray-100 py-3 text-left font-medium text-blue-gray-900"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="min-w-[120px] border-b border-blue-gray-50 py-3 text-left text-sm text-blue-gray-500"
      {...props}
    />
  ),
  State,
  Observe,
  CodeTabs,
  Image,
  ComponentDemo,
  CodeSandbox,
  StackBlitz,
  Code,
  Framework,
  CraLogo,
  NextLogo,
  RemixLogo,
  ViteLogo,
  AstroLogo,
  GatsbyLogo,
  ColorPalette,
  CodePreview,
  DocsTitle,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Avatar,
  Breadcrumbs,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  Chip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  MobileNav,
  Navbar,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
  Progress,
  Radio,
  Select,
  Switch,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Textarea,
  Tooltip,
  Typography,
  Link,
  Carousel,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Collapse,
  Slider,
  OutlineIcons,
  SolidIcons,
  Warning,

  // new components
  AccordionExamples,
  AlertExamples,
  AvatarExamples,
  BadgeExamples,
  BreadcrumbsExamples,
  ButtonGroupExamples,
  ButtonExamples,
  CardExamples,
  CarouselExamples,
  CheckboxExamples,
  ChipExamples,
  CollapseExamples,
  DrawerExamples,
  PaginationExamples,
  NavbarExamples,
  ImgExamples,
  VideoExamples,
  SidebarExamples,
  TableExamples,
  DialogExamples,
  FooterExamples,
  FormExamples,
  IconButtonExamples,
  InputExamples,
  ListExamples,
  TypographyExamples,
  MenuExamples,
  RatingExamples,
  PopoverExamples,
  ProgressExamples,
  RadioExamples,
  SelectExamples,
  SliderExamples,
  SpeedDialExamples,
  SpinnerExamples,
  StepperExamples,
  TimelineExamples,

  TransparentTabs,
};

export default function Page({ frontMatter, mdxSource, slug }) {
  const { asPath } = useRouter();
  const [mobileNav, setMobileNav] = useState(false);

  const routes = {
    html: htmlRoutes,
    react: reactRoutes,
  };
  const validFrameworks = ["html", "react", "vue", "angular", "svelte"];
  const frameworkType = asPath
    .split("/")
    .filter((el) => validFrameworks.includes(el))
    .join("") as "html" | "react" | "vue" | "angular" | "svelte";

  useEffect(() => {
    if (frameworkType === "html" && typeof window !== "undefined") {
      initHtmlScripts();
    }
  }, [frameworkType, slug]);

  return (
    <Fragment>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <div className="relative h-full w-full bg-white">
        <DocsNavbar slug={slug[slug.length - 1]} setMobileNav={setMobileNav} />
        <div className="px-6">
          <div className="mx-auto flex max-w-[1440px]">
            <Sidenav
              routes={routes[frameworkType]}
              type={frameworkType}
              slug={slug[slug.length - 1]}
              mobileNav={mobileNav}
              setMobileNav={setMobileNav}
            />
            <div className="mt-36 w-full lg:mt-24 lg:w-[60%] lg:px-6">
              <MDXRemote {...mdxSource} components={components} />
              {frontMatter.related && (
                <DocsRelated routes={frontMatter.related} />
              )}
              <DocsFooter type={frameworkType} frontMatter={frontMatter} />
            </div>
            <PageMap frontMatter={frontMatter} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export const getStaticPaths = async () => {
  const baseDirectory = "documentation";
  const paths = [];
  const allDir = getDirectoriesAndFile(baseDirectory);
  const filteredArray = filterArray(allDir);

  for (let i = 0; i < filteredArray.length - 1; i++) {
    const directories =
      filteredArray[i] !== null &&
      filteredArray[i].split("/").filter((dir) => dir !== baseDirectory);
    const files = filteredArray[i + 1].includes("/")
      ? filteredArray[i + 1].split("/").filter((dir) => dir !== baseDirectory)
      : filteredArray[i + 1];

    const filename = Array.isArray(files) ? null : files;

    filename &&
      paths.push({
        params: {
          slug: [...directories, filename],
        },
      });
  }

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    `documentation/${slug.join("/")}.mdx`,
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, config]],
      remarkPlugins: [remarkGfm],
      development: process.env.NODE_ENV === "development",
    },
  });

  return {
    props: {
      frontMatter,
      mdxSource,
      slug,
    },
  };
};
