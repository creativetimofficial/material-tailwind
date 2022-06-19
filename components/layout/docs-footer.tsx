import { Fragment } from "react";

// next.js components
import Link from "next/link";

// @material-tailwind/components
import { Typography } from "@material-tailwind/react";

// prop-types
interface Props {
  type: "html" | "react" | "vue" | "angular" | "svelte";
  frontMatter: any;
}

export default function DocsFooter({ type, frontMatter }: Props) {
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <div className="mt-20 flex w-full items-center justify-between">
        {frontMatter.prev && (
          <Link href={`/docs/${type}/${frontMatter.prev}`}>
            <a>
              <Typography className="py-2 !font-medium capitalize !text-blue-grey-500 !transition-colors hover:!text-blue-grey-900">
                <i className="fas fa-caret-left mr-2 mt-px" />
                {frontMatter.prev.includes("-")
                  ? frontMatter.prev
                      .split("-")
                      .map((el) => (el === "css" ? "CSS" : el))
                      .join(" ")
                  : frontMatter.prev}
              </Typography>
            </a>
          </Link>
        )}
        {frontMatter.next && (
          <Link href={`/docs/${type}/${frontMatter.next}`}>
            <a>
              <Typography className="py-2 !font-medium capitalize !text-blue-grey-500 !transition-colors hover:!text-blue-grey-900">
                {frontMatter.next.includes("-")
                  ? frontMatter.next
                      .split("-")
                      .map((el) => (el === "css" ? "CSS" : el))
                      .join(" ")
                  : frontMatter.next}
                <i className="fas fa-caret-right ml-2 mt-px" />
              </Typography>
            </a>
          </Link>
        )}
      </div>
      <Typography
        as="a"
        href={`https://www.github.com/creativetimofficial/material-tailwind/blob/main/documentation/${type}/${frontMatter.github}.mdx`}
        target="_blank"
        rel="noreferrer"
        className="mt-14 mb-6 text-right !font-normal !text-blue-grey-500 transition-colors hover:!text-blue-grey-900"
      >
        Edit this page on Github
      </Typography>
      <footer className="flex flex-col items-center justify-between gap-4 border-t border-blue-grey-50 py-6 lg:flex-row">
        <a
          href="https://vercel.com/?utm_source=ct-tailwind-team&utm_campaign=oss"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark inline-flex items-center font-semibold no-underline"
        >
          <span className="mr-1">Powered by</span>
          <span>
            <svg height="20" viewBox="0 0 283 64" fill="none">
              <path
                fill="currentColor"
                d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
              ></path>
            </svg>
          </span>
        </a>
        <Typography className="text-center !font-normal !text-blue-grey-500 lg:text-left">
          Copyright &copy; {date} Material Tailwind by{" "}
          <a
            href="https://www.creative-tim.com?ref=material-tailwind"
            target="_blank"
            rel="noreferrer"
            className="text-current transition-colors hover:text-blue-grey-900"
          >
            Creative Tim
          </a>
          .
        </Typography>
      </footer>
    </Fragment>
  );
}
