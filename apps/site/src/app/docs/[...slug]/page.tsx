import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { promises as fs } from "fs";
import * as fsSync from "fs";
import rehypeSlug from "rehype-slug";
import { notFound } from "next/navigation";
import { MdxContent } from "./mdx-content";
import { rehypePrettyCodeConfig } from "@utils";
import rehypePrettyCode from "rehype-pretty-code";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

async function readDocsContent(path) {
  const baseDir = "apps/site/src/content";
  const fullPath = `${baseDir}/${path}.mdx`;

  if (!fsSync.existsSync(fullPath)) {
    notFound();
  }

  const rawContent = await fs.readFile(fullPath, "utf-8");
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

export default async function Docs({ params: { slug } }) {
  const path = slug.join("/");
  const { frontMatter, serialized } = await readDocsContent(path);

  return <MdxContent source={serialized} />;
}
