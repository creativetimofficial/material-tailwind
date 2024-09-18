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
import * as Plugins from "docs-content/react/plugins";
import * as Crypto from "docs-content/react/crypto";
import ReleaseNotes from "docs-content/react/release-notes";
import * as FrameworkIcons from "@widgets";
import * as SkeletonExamples from "docs-content/react/skeleton";
import * as GalleryExamples from "docs-content/react/gallery";
import * as MegaMenuExamples from "docs-content/react/mega-menu";
import * as InputNumberExamples from "docs-content/react/input-number";
import * as InputPhoneExamples from "docs-content/react/input-phone";

// html docs content
import * as HtmlPlugins from "docs-content/html/plugins";
import * as HTMLButtonExamples from "docs-content/html/button";
import * as HTMLAccordianExamples from "docs-content/html/accordion";
import * as HTMLAlertExamples from "docs-content/html/alert";
import * as HTMLAvatarExamples from "docs-content/html/avatar";
import * as HTMLBadgeExamples from "docs-content/html/badge";
import * as HTMLBreadcrumbsExamples from "docs-content/html/breadcrumbs";
import * as HTMLButtonGroupExamples from "docs-content/html/button-group";
import * as HTMLCardExamples from "docs-content/html/card";
import * as HTMLCheckboxExamples from "docs-content/html/checkbox";
import * as HTMLChipExamples from "docs-content/html/chip";
import * as HTMLDialogExamples from "docs-content/html/dialog";
import * as HTMLIconButtonExamples from "docs-content/html/icon-button";
import * as HTMLInputExamples from "docs-content/html/input";
import * as HTMLInputNumberExamples from "docs-content/html/input-number";
import * as HTMLInputPhoneExamples from "docs-content/html/input-phone";
import * as HTMLInputSearchExamples from "docs-content/html/input-search";
import * as HTMLFormExamples from "docs-content/html/form";
import * as HTMLListExamples from "docs-content/html/list";
import * as HTMLMenuExamples from "docs-content/html/menu";
import * as HTMLModalExamples from "docs-content/html/modal";
import * as HTMLNavbarExamples from "docs-content/html/navbar";
import * as HTMLPaginationExamples from "docs-content/html/pagination";
import * as HTMLPopoverExamples from "docs-content/html/popover";
import * as HTMLProgressExamples from "docs-content/html/progress";
import * as HTMLRadioExamples from "docs-content/html/radio";
import * as HTMLRatingExamples from "docs-content/html/rating";
import * as HTMLSelectExamples from "docs-content/html/select";
import * as HTMLSpeedDialExamples from "docs-content/html/speed-dial";
import * as HTMLSpinnerExamples from "docs-content/html/spinner";
import * as HTMLStepperExamples from "docs-content/html/stepper";
import * as HTMLSwitchExamples from "docs-content/html/switch";
import * as HTMLTabsExamples from "docs-content/html/tabs";
import * as HTMLTextareaExamples from "docs-content/html/textarea";
import * as HTMLTimelineExamples from "docs-content/html/timeline";
import * as HTMLTooltipExamples from "docs-content/html/tooltip";
import * as HTMLTypographyExamples from "docs-content/html/typography";
import * as HTMLFooterExamples from "docs-content/html/footer";
import * as HTMLImageExamples from "docs-content/html/img";
import * as HTMLTableExamples from "docs-content/html/table";
import * as HTMLVideoExamples from "docs-content/html/video";
import * as HTMLSidebarExamples from "docs-content/html/sidebar";
import { ReleaseNotes as HTMLReleaseNotes } from "docs-content/html/release-notes";
import * as HTMLGalleryExamples from "docs-content/html/gallery";
import * as HTMLSkeletonExamples from "docs-content/html/skeleton";
import * as HTMLMegaMenuExamples from "docs-content/html/mega-menu";
import * as HTMLCollapseExamples from "docs-content/html/collapse";

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
import OfferBar from "widgets/offer-bar";

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
  ColorPalette,
  Plugins,
  Crypto,
  SkeletonExamples,
  GalleryExamples,
  MegaMenuExamples,
  InputNumberExamples,
  InputPhoneExamples,

  // html docs content
  HtmlPlugins,
  HTMLButtonExamples,
  HTMLAccordianExamples,
  HTMLAlertExamples,
  HTMLAvatarExamples,
  HTMLBadgeExamples,
  HTMLBreadcrumbsExamples,
  HTMLButtonGroupExamples,
  HTMLCardExamples,
  HTMLCheckboxExamples,
  HTMLChipExamples,
  HTMLDialogExamples,
  HTMLIconButtonExamples,
  HTMLInputExamples,
  HTMLInputNumberExamples,
  HTMLInputPhoneExamples,
  HTMLInputSearchExamples,
  HTMLFormExamples,
  HTMLListExamples,
  HTMLMenuExamples,
  HTMLModalExamples,
  HTMLNavbarExamples,
  HTMLPaginationExamples,
  HTMLPopoverExamples,
  HTMLProgressExamples,
  HTMLRadioExamples,
  HTMLRatingExamples,
  HTMLSelectExamples,
  HTMLSpeedDialExamples,
  HTMLSpinnerExamples,
  HTMLStepperExamples,
  HTMLSwitchExamples,
  HTMLTabsExamples,
  HTMLTextareaExamples,
  HTMLTimelineExamples,
  HTMLTooltipExamples,
  HTMLTypographyExamples,
  HTMLFooterExamples,
  HTMLImageExamples,
  HTMLTableExamples,
  HTMLVideoExamples,
  HTMLSidebarExamples,
  HTMLReleaseNotes,
  FrameworkIcons,
  HTMLGalleryExamples,
  HTMLSkeletonExamples,
  HTMLMegaMenuExamples,
  HTMLCollapseExamples,
};

export default function Page({ frontMatter, mdxSource, slug }) {
  const { asPath } = useRouter();
  const [mobileNav, setMobileNav] = React.useState(false);

  const routes = {
    html: htmlRoutes,
    react: reactRoutes,
  };
  const validFrameworks = ["html", "react"];
  const frameworkType = asPath
    .split("/")
    .filter((el) => validFrameworks.includes(el))
    .join("") as "html" | "react";

  React.useEffect(() => {
    if (frameworkType === "html" && typeof window !== "undefined") {
      initHtmlScripts();
    }
  }, [frameworkType, slug]);

  const replaceMatch = [
    "html/what-is-tailwind-css",
    "html/license",
    "html/colors",
    "html/fonts",
    "html/shadows",
    "html/screens",
  ];
  const headLink = slug.join("/");
  const matchTheSlug = replaceMatch.includes(headLink);
  const canonical = matchTheSlug
    ? headLink.replace("html/", "react/")
    : headLink;

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
        <link
          rel="canonical"
          href={`https://www.material-tailwind.com/docs/${canonical}`}
        />
      </Head>
      <OfferBar />

      <div className="relative mb-8 h-full w-full bg-white">
        <DocsNavbar slug={slug} setMobileNav={setMobileNav} />
        <div className="px-6">
          <div className="container mx-auto flex">
            <Sidenav
              routes={routes[frameworkType] as any}
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
