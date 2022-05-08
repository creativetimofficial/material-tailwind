import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypePrettyCode from "rehype-pretty-code";

// page components
import Navbar from "pagesComponents/Navbar";
import ComponentCard from "../../../pagesComponents/Cards/ComponentCard";

// components
import {
  Button,
  IconButton,
  Tooltip,
  Typography
} from "../../../packages/material-tailwind-react/src";

// routes
import { routes } from "../../../routes/html.routes";

// rehype-pretty-code configurations
const options = {
  theme: "github-dark",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  }
};

const components = {
  h1: (props: any) => (
    <Typography
      as="h1"
      variant="h2"
      color="blue-grey"
      className="!font-sans mb-2"
      {...props}
    />
  ),
  h6: (props: any) => (
    <Typography
      as="p"
      variant="h5"
      color="grey"
      className="font-normal mb-12"
      {...props}
    />
  ),
  ComponentCard,
  Button,
  IconButton,
  Tooltip
};

export default function Page({ frontMatter, mdxSource, slug }) {
  return (
    <div className="w-full h-full bg-white">
      <Navbar
        container="mt-0 max-w-full px-0 border-b border-blue-grey-50"
        className="!max-w-[1440px] mx-auto !text-blue-grey-900"
        fullWidth
        shadow={false}
      />
      <div className="px-6">
        <div className="max-w-[1440px] mx-auto flex">
          <aside className="relative w-64 h-screen pt-20 pb-4 pr-4">
            <div className="fixed overflow-y-scroll w-64 h-screen pb-48">
              <Typography variant="h4" color="blue-grey">
                Documentation
              </Typography>
              <div className="mt-4">
                {routes.map(({ name, icon, pages }, key): any => (
                  <div key={key}>
                    <div className="flex items-center mt-8">
                      <div className="grid place-items-center w-7 h-7 text-xs rounded-lg bg-gradient-to-tr from-blue-400 to-blue-600 text-white mr-3">
                        <i className={icon} />
                      </div>
                      <Typography
                        color="blue-grey"
                        className="font-bold capitalize"
                      >
                        {name}
                      </Typography>
                    </div>
                    <ul className="space-y-1 py-2 pr-2 pl-9">
                      {pages.map((page, key) => (
                        <li
                          className={`relative w-full list-item py-1 px-1 before:content-[' '] before:absolute before:-left-[25px] before:top-2/4 before:-translate-y-2/4 before:w-1.5 before:h-1.5 before:rounded-full ${
                            page === slug
                              ? "before:bg-blue-grey-900"
                              : "text-blue-grey-300 before:bg-blue-grey-300"
                          }`}
                          key={key}
                        >
                          <Link href={`/docs/html/${page}`}>
                            <a>
                              <Typography
                                color="grey"
                                className={`capitalize ${
                                  page === slug
                                    ? "font-medium text-blue-grey-900"
                                    : "font-normal text-blue-grey-400"
                                }`}
                              >
                                {page}
                              </Typography>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </aside>
          <div className="pt-32 px-6 w-[60%]">
            <MDXRemote {...mdxSource} components={components} />
          </div>
          <aside className="relative w-64 h-screen pt-20 pb-4 pl-16">
            <div className="fixed w-full h-screen">
              <Typography variant="h6" color="blue-grey">
                On This Page
              </Typography>
              <ul className="list-none pl-4 pt-4">
                {frontMatter.navigation.map((el, key) => (
                  <li
                    key={key}
                    className={`relative w-full list-item py-1 px-1 before:content-[' '] before:absolute before:-left-3 before:top-2/4 before:-translate-y-2/4 before:w-1 before:h-1 before:rounded-full text-blue-grey-300 before:bg-blue-grey-300`}
                  >
                    <a
                      href={`#${el}`}
                      className="text-sm text-normal capitalize text-blue-grey-500"
                    >
                      {el}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("documentation/html"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", "")
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("documentation/html", slug + ".mdx")
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, options]]
    }
  });

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  };
};
