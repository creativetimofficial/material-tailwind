"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { NavArrowRight } from "iconoir-react";
import { Navbar, Sidenav, Toc, Footer } from "@components";
import { usePathname } from "next/navigation";

// @ts-ignore
import { Breadcrumb } from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";

export function Docs({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const contentRef = React.useRef<HTMLDivElement>(null);

  const pathParts = pathname.split("/");

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Navbar />
      <div className="px-3 md:px-4">
        <div className="mx-auto grid max-w-7xl grid-cols-6">
          <div className="col-span-1 hidden xl:block">
            <Sidenav />
          </div>
          <div
            ref={contentRef}
            className="col-span-6 mt-40 px-4 lg:mt-[106px] lg:px-8 xl:col-span-4 xl:mx-8"
          >
            <Breadcrumb className="mb-12 hidden p-0 lg:flex">
              {pathParts.map((part, index) => (
                <React.Fragment key={index}>
                  <Breadcrumb.Link
                    className={twMerge(
                      "capitalize text-primary",
                      index !== pathParts.length - 1 && "text-foreground",
                    )}
                  >
                    {part}
                  </Breadcrumb.Link>
                  {index !== pathParts.length - 1
                    ? index !== 0 && (
                        <Breadcrumb.Separator>
                          <NavArrowRight className="h-3 w-3 stroke-2" />
                        </Breadcrumb.Separator>
                      )
                    : null}
                </React.Fragment>
              ))}
            </Breadcrumb>
            {children}
          </div>
          <div className="col-span-1 hidden xl:block">
            <Toc
              contentRef={contentRef as React.MutableRefObject<HTMLDivElement>}
            />
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default Docs;
