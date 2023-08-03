import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// mdx
import fs from "fs";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { MDXRemote } from "next-mdx-remote";
import rehypePrettyCode from "rehype-pretty-code";
import { serialize } from "next-mdx-remote/serialize";

// @widgets
import {
  DocsNavbar,
  Footer,
  Sidenav,
  PageMap,
  Code,
  FrameworkCard,
  CraLogo,
  NextLogo,
  RemixLogo,
  ViteLogo,
  AstroLogo,
  GatsbyLogo,
  CodePreview,
  DocsTitle,
} from "@widgets";

// docs-content
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
import * as TimelineExamples from "docs-content/react/timeline";
import * as TooltipExamples from "docs-content/react/tooltip";
import * as SwitchExamples from "docs-content/react/switch";
import * as TabsExamples from "docs-content/react/tabs";
import * as TextareaExamples from "docs-content/react/textarea";
import ReleaseNotes from "docs-content/react/release-notes";

// @material-tailwind/react
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

// routes
import { routes as htmlRoutes } from "routes/html.routes";
import { routes as reactRoutes } from "routes/react.routes";

// utils
import filterArray from "utils/filter-array";
import { rehypePrettyCodeConfig } from "@utils";
import getDirectoriesAndFile from "utils/get-directories-and-files";

// material tailwind html script
import initHtmlScripts from "public/material-tailwind-html-v2";

const components = {
  h1: (props) => (
    <Typography
      as="h1"
      variant="h3"
      className="!mb-4 text-primary lg:!text-3xl"
      {...props}
    />
  ),
  h2: (props) => (
    <Typography
      as="h2"
      variant="h4"
      className="!mb-2 text-primary"
      {...props}
    />
  ),
  h3: (props) => (
    <Typography
      as="h3"
      variant="h5"
      className="!mb-2 text-primary"
      {...props}
    />
  ),
  h6: (props) => (
    <Typography
      as="p"
      variant="h5"
      className="!mb-12 !font-normal !text-gray-600"
      {...props}
    />
  ),
  p: (props) => (
    <Typography className="!mb-4 !font-normal !text-gray-600" {...props} />
  ),
  hr: () => <hr className="!mb-12 !mt-16 border-transparent" />,
  a: (props) => (
    <a
      className="!font-medium !text-primary !transition-colors hover:!text-blue-500"
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
  Image,
  Code,
  FrameworkCard,
  CraLogo,
  NextLogo,
  RemixLogo,
  ViteLogo,
  AstroLogo,
  GatsbyLogo,
  CodePreview,
  DocsTitle,
  Link,
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
  TooltipExamples,
  SwitchExamples,
  TabsExamples,
  TextareaExamples,
  ReleaseNotes,
};

export default function Page({ frontMatter, mdxSource, slug }) {
  const { asPath } = useRouter();
  const [mobileNav, setMobileNav] = React.useState(false);

  const routes = {
    html: htmlRoutes,
    react: reactRoutes,
  };
  const validFrameworks = ["html", "react", "vue", "angular", "svelte"];
  const frameworkType = asPath
    .split("/")
    .filter((el) => validFrameworks.includes(el))
    .join("") as "html" | "react" | "vue" | "angular" | "svelte";

  React.useEffect(() => {
    if (frameworkType === "html" && typeof window !== "undefined") {
      initHtmlScripts();
    }
  }, [frameworkType, slug]);

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <div className="relative mb-8 h-full w-full bg-white">
        <DocsNavbar />
        <div className="px-6">
          <div className="container mx-auto flex">
            <Sidenav
              routes={routes[frameworkType]}
              type={frameworkType}
              slug={slug[slug.length - 1]}
              mobileNav={mobileNav}
              setMobileNav={setMobileNav}
            />
            <div className="mt-36 w-full lg:mt-24 lg:w-[60%] lg:px-6">
              <MDXRemote {...mdxSource} components={components} />
            </div>
            <PageMap type={frameworkType} frontMatter={frontMatter} />
          </div>
        </div>
      </div>
      <Footer />
    </>
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
      rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeConfig]],
      remarkPlugins: [remarkGfm],
      development: false,
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
