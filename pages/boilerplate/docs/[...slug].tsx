import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
import { routes as boilerplateRoutes } from "routes/boilerplate.routes";

// utils
import filterArray from "utils/filter-array";
import { rehypePrettyCodeConfig } from "@utils";
import getDirectoriesAndFile from "utils/get-directories-and-files";

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
};

export default function Page({ frontMatter, mdxSource, slug }) {
  const [mobileNav, setMobileNav] = React.useState(false);

  const headLink = slug.join("/");

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
        <link
          rel="canonical"
          href={`https://www.material-tailwind.com/boilerplate/docs/${headLink}`}
        />
      </Head>
      <div className="relative mb-8 h-full w-full bg-white">
        <DocsNavbar slug={slug} setMobileNav={setMobileNav} />
        <div className="px-6">
          <div className="container mx-auto flex">
            <Sidenav
              type="boilerplate"
              mobileNav={mobileNav}
              setMobileNav={setMobileNav}
              slug={slug[slug.length - 1]}
              routes={boilerplateRoutes as any}
            />
            <div className="mt-6 w-full lg:w-[60%] lg:px-6">
              <MDXRemote {...mdxSource} components={components} />
            </div>
            <PageMap type="boilerplate" frontMatter={frontMatter} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const baseDirectory = "boilerplate";
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

  const filteredPaths = paths.filter((path) => path.params.slug.length <= 1);
  
  const newPaths = filteredPaths.map((path) => ({
    params: {
      slug: path.params.slug,
    },
  }));

  return {
    paths: newPaths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(`boilerplate/${slug.join("/")}.mdx`);

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
