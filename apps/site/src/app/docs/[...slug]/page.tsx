// @components
import { MdxContent } from "./mdx-content";

// @utils
import fs from "fs";
import path from "path";
import { cache } from "react";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { notFound } from "next/navigation";
import { rehypePrettyCodeConfig } from "@utils";
import rehypePrettyCode from "rehype-pretty-code";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// @types
import type { Metadata } from "next";

async function readDocsContentFn(pathUrl: string) {
  const fullPath = `${path.join(
    process.cwd(),
  )}/src/app/docs/content/${pathUrl}.mdx`;

  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(fullPath, "utf-8");
  const { data: frontMatter, content } = matter(rawContent);

  const serialized = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      development: false,
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        [rehypePrettyCode, rehypePrettyCodeConfig],
      ],
    },
  });

  return {
    serialized,
    frontMatter,
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
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/v3/docs/${path}`;

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

export default async function Docs({ params: { slug } }) {
  const path = slug.join("/");
  const { frontMatter, serialized } = await readDocsContent(path);

  return <MdxContent source={serialized} frontMatter={frontMatter} />;
}
