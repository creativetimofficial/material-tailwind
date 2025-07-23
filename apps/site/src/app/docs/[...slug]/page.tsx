// @components
import {
  CodePreview,
  ColorPalette,
  FrameworkCard,
  ComponentPreview,
} from "@components";
import Link from "next/link";
import { Code } from "bright";
import { Content } from "./content";
import * as Icons from "@components/icons";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Typography as MTTypography } from "@material-tailwind/react";

// @utils
import fs from "fs";
import path from "path";
import { cache } from "react";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { notFound } from "next/navigation";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// @types
import type { Metadata } from "next";

// @docs-components-react
import ReleaseNotes from "@components/release-notes";
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
import * as Slider from "@components/docs/slider";
import * as Timeline from "@components/docs/timeline";
import * as Badge from "@components/docs/badge";
import * as AlgoliaSearch from "@components/docs/plugins/algolia-search";
import * as Carousel from "@components/docs/plugins/carousel";
import * as Apexcharts from "@components/docs/plugins/apexcharts";
import * as DatePicker from "@components/docs/plugins/date-picker";
import * as Forms from "@components/docs/plugins/forms";
import * as TextEditor from "@components/docs/plugins/text-editor";
import * as DataTable from "@components/docs/plugins/data-table";

// @docs-components-html
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
import * as HTMLTable from "@components/docs-html/table";
import * as HTMLTextarea from "@components/docs-html/textarea";
import * as HTMLTimeline from "@components/docs-html/timeline";
import * as HTMLTypography from "@components/docs-html/typography";
import * as HTMLVideo from "@components/docs-html/video";
import * as HTMLCheckbox from "@components/docs-html/checkbox";
import * as HTMLRadio from "@components/docs-html/radio";
import * as HTMLSwitch from "@components/docs-html/switch";
import * as HTMLBadge from "@components/docs-html/badge";
import * as HTMLAccordion from "@components/docs-html/accordion";

async function readDocsContentFn(pathUrl: string) {
  const fullPath = `${path.join(
    process.cwd(),
  )}/src/app/docs/content/${pathUrl}.mdx`;

  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(fullPath, "utf-8");
  const { data: frontMatter, content } = matter(rawContent);

  return {
    frontMatter,
    source: content,
  };
}

const readDocsContent = cache(readDocsContentFn);

type Props = {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const path = slug.join("/");
  const { frontMatter } = await readDocsContent(path);

  const title = frontMatter.title;
  const description = frontMatter.description;
  const pageUrl = `https://www.material-tailwind.com/v3/docs/${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      title,
    },
  };
}

const highlight = {
  name: "highlight",
  MultilineAnnotation: ({ children }) => {
    return (
      <span className="block border-l-2 border-[#1fff7c] bg-[#1fff7c]/15 bg-opacity-50 text-[#1fff7c]">
        {children}
      </span>
    );
  },
};

Code.extensions = [highlight];
Code.theme = {
  dark: "github-dark",
  light: "github-light",
};

export const dynamic = "force-static";

export default async function Docs({ params: { slug } }) {
  const path = slug.join("/");
  const { frontMatter, source } = await readDocsContent(path);

  return (
    <Content frontMatter={frontMatter}>
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm as any],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
          },
        }}
        components={{
          // custom-components
          Icons,
          CodePreview,
          ColorPalette,
          FrameworkCard,
          ComponentPreview,

          // default-components
          pre: Code,
          Link: (props: any) => <Link {...props} className="text-orange-500" />,
          h1: (props: any) => (
            <MTTypography as="h1" type="h4" className="mb-4" {...props} />
          ),
          h2: (props: any) => (
            <MTTypography
              as="h2"
              type="h5"
              className="group relative mb-2 cursor-pointer scroll-mt-40 transition-colors hover:text-orange-500"
              {...props}
            >
              <Link
                href={`#${props.children[1]
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                <span
                  aria-hidden
                  className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  #
                </span>
                {props.children}
              </Link>
            </MTTypography>
          ),
          h3: (props: any) => (
            <MTTypography
              as="h3"
              type="h6"
              className="group relative mb-1 mt-8 cursor-pointer scroll-mt-40 transition-colors hover:text-orange-500"
              {...props}
            >
              <Link
                href={`#${props.children[1]
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                <span
                  aria-hidden
                  className="absolute -left-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  #
                </span>
                {props.children}
              </Link>
            </MTTypography>
          ),
          h4: (props: any) => (
            <MTTypography
              as="h4"
              type="lead"
              className="mb-1 mt-6 font-semibold"
              {...props}
            />
          ),
          p: (props: any) => (
            <MTTypography className="mb-2 text-foreground" {...props} />
          ),
          hr: () => <hr className="my-8 border-transparent" />,
          code: (props: any) => (
            <code
              className="inline-block rounded border border-surface bg-surface-light px-1 py-0.5 font-mono text-sm leading-none text-foreground dark:bg-surface-dark"
              {...props}
            />
          ),
          a: (props: any) => <a {...props} className="text-orange-500" />,
          ul: (props: any) => (
            <ul className="my-4 ml-4 list-disc space-y-1" {...props} />
          ),
          li: (props: any) => (
            <li
              className="font-sans text-base font-normal text-foreground antialiased"
              {...props}
            />
          ),

          // docs-components-react
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
          Slider,
          Timeline,
          AlgoliaSearch,
          Carousel,
          Apexcharts,
          DatePicker,
          Forms,
          TextEditor,
          DataTable,
          Badge,
          ReleaseNotes,

          // docs-components-html
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
          HTMLTable,
          HTMLTextarea,
          HTMLTimeline,
          HTMLTypography,
          HTMLVideo,
          HTMLCheckbox,
          HTMLRadio,
          HTMLSwitch,
          HTMLBadge,
          HTMLAccordion,
        }}
      />
    </Content>
  );
}
