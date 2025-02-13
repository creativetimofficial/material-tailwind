"use client";

import * as React from "react";

// @components
import { Toc } from "@components";
import { Breadcrumb as MTBreadcrumb } from "@material-tailwind/react";

// @icons
import { NavArrowRight } from "iconoir-react";

// @hooks
import { usePathname } from "next/navigation";

// @utils
import { twMerge } from "tailwind-merge";

type MdxContentProps = {
  children: React.ReactNode;
  frontMatter: Record<string, string>;
};

export function Content({ children, frontMatter }: MdxContentProps) {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const contentRef = React.useRef<HTMLDivElement>(null);
  const frameworkFolder = pathname.includes('/react/') ? 'react' : 'html';
  const rootPath = pathname.includes('/v3/') ? '/docs/v3' : '/docs';

  return (
    <div className="flex w-full gap-0 lg:gap-[52px]">
      <div ref={contentRef} className="mt-10 w-full px-4 lg:px-0">
      <MTBreadcrumb className="mb-12 hidden p-0 lg:flex">
          {pathParts.map((part, index) => {
            const href = index !== pathParts.length - 1 ? `${rootPath}/${frameworkFolder}/installation` : undefined;
            
            return (
              <React.Fragment key={index}>
                <MTBreadcrumb.Link
                  href={href}
                  className={twMerge(
                    "capitalize text-orange-500",
                    index !== pathParts.length - 1 && "text-foreground",
                  )}
                >
                  {part}
                </MTBreadcrumb.Link>
                {index !== pathParts.length - 1
                  ? index !== 0 && (
                      <MTBreadcrumb.Separator>
                        <NavArrowRight className="h-3 w-3 stroke-2" />
                      </MTBreadcrumb.Separator>
                    )
                  : null}
              </React.Fragment>
            );
          })}
        </MTBreadcrumb>
        {children}
      </div>
      <Toc
        githubPage={frontMatter.github}
        contentRef={contentRef as React.MutableRefObject<HTMLDivElement>}
      />
    </div>
  );
}

export default Content;
