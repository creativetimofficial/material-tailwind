"use client";

// @components
import { ComponentPreview } from "@components";
import { Typography } from "@material-tailwind/react/dist";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

// @docs-components
import * as Button from "@components/docs/button";
import * as IconButton from "@components/docs/icon-button";
import * as ButtonGroup from "@components/docs/button-group";

const components = {
  ComponentPreview,
  h1: (props) => (
    <Typography
      as="h1"
      variant="h3"
      className="mb-4 dark:text-gray-100"
      {...props}
    />
  ),
  h2: (props) => (
    <Typography
      as="h2"
      variant="h4"
      className="mb-4 scroll-mt-40 dark:text-gray-100"
      {...props}
    />
  ),
  h3: (props) => (
    <Typography
      as="h3"
      variant="h5"
      className="mb-4 dark:text-gray-100"
      {...props}
    />
  ),
  p: (props) => (
    <Typography className="mb-4 text-gray-500 dark:text-gray-400" {...props} />
  ),
  hr: () => <hr className="my-8 border-transparent" />,
  code: (props) => (
    <Typography
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

  // docs-components
  Button,
  IconButton,
  ButtonGroup,
};

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={components} />;
}

export default MdxContent;
