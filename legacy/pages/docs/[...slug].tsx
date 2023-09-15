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
  ColorPalette,
} from "legacy/widgets";

// docs-content
import * as AccordionExamples from "legacy/docs-content/react/accordion";
import * as AlertExamples from "legacy/docs-content/react/alert";
import * as AvatarExamples from "legacy/docs-content/react/avatar";
import * as BadgeExamples from "legacy/docs-content/react/badge";
import * as BreadcrumbsExamples from "legacy/docs-content/react/breadcrumbs";
import * as ButtonGroupExamples from "legacy/docs-content/react/button-group";
import * as ButtonExamples from "legacy/docs-content/react/button";
import * as CardExamples from "legacy/docs-content/react/card";
import * as CarouselExamples from "legacy/docs-content/react/carousel";
import * as CheckboxExamples from "legacy/docs-content/react/checkbox";
import * as ChipExamples from "legacy/docs-content/react/chip";
import * as CollapseExamples from "legacy/docs-content/react/collapse";
import * as DialogExamples from "legacy/docs-content/react/dialog";
import * as DrawerExamples from "legacy/docs-content/react/drawer";
import * as NavbarExamples from "legacy/docs-content/react/navbar";
import * as FooterExamples from "legacy/docs-content/react/footer";
import * as ImgExamples from "legacy/docs-content/react/img";
import * as VideoExamples from "legacy/docs-content/react/video";
import * as TableExamples from "legacy/docs-content/react/table";
import * as PaginationExamples from "legacy/docs-content/react/pagination";
import * as SidebarExamples from "legacy/docs-content/react/sidebar";
import * as FormExamples from "legacy/docs-content/react/form";
import * as IconButtonExamples from "legacy/docs-content/react/icon-button";
import * as InputExamples from "legacy/docs-content/react/input";
import * as ListExamples from "legacy/docs-content/react/list";
import * as TypographyExamples from "legacy/docs-content/react/typography";
import * as MenuExamples from "legacy/docs-content/react/menu";
import * as RatingExamples from "legacy/docs-content/react/rating";
import * as PopoverExamples from "legacy/docs-content/react/popover";
import * as ProgressExamples from "legacy/docs-content/react/progress";
import * as RadioExamples from "legacy/docs-content/react/radio";
import * as SliderExamples from "legacy/docs-content/react/slider";
import * as SelectExamples from "legacy/docs-content/react/select";
import * as SpeedDialExamples from "legacy/docs-content/react/speed-dial";
import * as SpinnerExamples from "legacy/docs-content/react/spinner";
import * as StepperExamples from "legacy/docs-content/react/stepper";
import * as TimelineExamples from "legacy/docs-content/react/timeline";
import * as TooltipExamples from "legacy/docs-content/react/tooltip";
import * as SwitchExamples from "legacy/docs-content/react/switch";
import * as TabsExamples from "legacy/docs-content/react/tabs";
import * as TextareaExamples from "legacy/docs-content/react/textarea";
import ReleaseNotes from "legacy/docs-content/react/release-notes";

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
import { routes as htmlRoutes } from "legacy/routes/html.routes";
import { routes as reactRoutes } from "legacy/routes/react.routes";

// utils
import filterArray from "legacy/utils/filter-array";
import { rehypePrettyCodeConfig } from "legacy/utils";
import getDirectoriesAndFile from "legacy/utils/get-directories-and-files";

// material tailwind html script
import initHtmlScripts from "legacy/public/material-tailwind-html-v2";

const components = {
  h1: (props) => (
    <Typography
      as="h1"
      variant="h3"
      className="text-primary !mb-4 lg:!text-3xl"
      {...props}
    />
  ),
  h2: (props) => (
    <Typography
      as="h2"
      variant="h4"
      className="text-primary !mb-2"
      {...props}
    />
  ),
  h3: (props) => (
    <Typography
      as="h3"
      variant="h5"
      className="text-primary !mb-2"
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
      className="!text-primary !font-medium !transition-colors hover:!text-blue-500"
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
      className="border-blue-gray-100 text-blue-gray-900 min-w-[120px] border-b py-3 text-left font-medium"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border-blue-gray-50 text-blue-gray-500 min-w-[120px] border-b py-3 text-left text-sm"
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
  ColorPalette,
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
      <Alert className="w-full justify-center rounded-none">
        <div className="flex  items-center justify-center gap-4">
          NEW | Material Tailwind PRO, a comprehensive compilation of 200+
          blocks, now available for your use.
          <Link href="/blocks">
            <Button size="sm" color="white">
              check out
            </Button>
          </Link>
        </div>
      </Alert>
      <div className="relative mb-8 h-full w-full bg-white">
        <DocsNavbar slug={slug} setMobileNav={setMobileNav} />
        <div className="px-6">
          <div className="container mx-auto flex">
            <Sidenav
              routes={routes[frameworkType]}
              type={frameworkType}
              slug={slug[slug.length - 1]}
              mobileNav={mobileNav}
              setMobileNav={setMobileNav}
            />
            <div className="mt-6 w-full lg:w-[60%] lg:px-6">
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
