"use client";

import React from "react";
import Link from "next/link";
import routes from "@routes";
import { NavArrowRight } from "iconoir-react";
import { Collapse } from "@material-tailwind/react";
import { usePathname, useSearchParams } from "next/navigation";
import { ThemeProvider } from "./theme-provider";
import { cn } from "@utils";

export function Collapsible({ category, categoryPages }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(true);
  const paths = categoryPages.map(({ path }) => path);

  const toggleCollapse = () => setIsOpen((prev) => !prev);

  React.useEffect(() => {
    if (paths.includes(pathname)) {
      setIsOpen(true);
    }
  }, []);

  return (
    <ul className="mx-0.5">
      <li
        tabIndex={0}
        role="button"
        onClick={toggleCollapse}
        className={cn(
          "flex items-center justify-between gap-4 px-2 py-1.5 text-sm text-foreground transition-colors duration-300 hover:text-orange-500",
          { "text-orange-500": paths.includes(pathname) },
        )}
      >
        {category}{" "}
        <NavArrowRight
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </li>
      <Collapse as="ul" open={isOpen} className="mx-2">
        {categoryPages.map(({ title: subTitle, path }, i) => {
          return (
            <li
              key={i}
              data-sn-name={subTitle.toLowerCase().replaceAll(" ", "-")}
              className="mx-1.5 border-l border-surface"
            >
              <Link
                href={path}
                className={cn(
                  "block -translate-x-px border-l border-transparent py-1.5 pl-4 pr-2 text-sm text-foreground transition-colors duration-300 hover:border-orange-500 hover:text-orange-500",
                  {
                    "border-orange-500 text-orange-500": pathname === path,
                  },
                )}
              >
                {subTitle}
              </Link>
            </li>
          );
        })}
      </Collapse>
    </ul>
  );
}

export function getRoutes() {
  const pathname = usePathname();

  return routes.map(({ title, pages, categories }, idx) => {
    return (
      <React.Fragment key={idx}>
        <li
          data-sn-title={title === "Getting Started" ? "Started" : title}
          className="p-2 pb-1 text-sm font-semibold text-black dark:text-white"
        >
          {title}
        </li>
        <ul className="mx-0.5 mb-5">
          {categories
            ? categories.map(({ pages: categoryPages, category }, key) => {
                return (
                  <Collapsible
                    key={key}
                    category={category}
                    categoryPages={categoryPages}
                  />
                );
              })
            : pages.map(({ title: subTitle, path }, key) => {
                return (
                  <li
                    key={key}
                    data-sn-name={subTitle.toLowerCase().replaceAll(" ", "-")}
                  >
                    <Link
                      href={path}
                      className={cn(
                        "block px-2 py-1.5 text-sm text-foreground transition-colors duration-300 hover:text-orange-500",
                        {
                          "text-orange-500": pathname === path,
                        },
                      )}
                    >
                      {subTitle}
                    </Link>
                  </li>
                );
              })}
        </ul>
      </React.Fragment>
    );
  });
}

export function Sidenav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pathAsArray = pathname.split("/").filter((path) => path !== "");

  React.useEffect(() => {
    const snName = pathAsArray[pathAsArray.length - 1];
    const activeElement = document.querySelector(
      `li[data-sn-name="${snName}"]`,
    );

    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [pathname]);

  React.useEffect(() => {
    const snTitle = window.location.hash.replace("#", "");
    const activeElement = document.querySelector(
      `li[data-sn-title="${snTitle}"]`,
    );

    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [searchParams]);

  return (
    <ThemeProvider>
      <div className="sticky -left-64 bottom-0 top-[105px] z-20 hidden h-[calc(100vh-4px)] w-60 shrink-0 overflow-y-auto bg-background pb-24 pt-8 lg:left-0 lg:block">
        <div className="fixed top-[104px] z-50 h-14 w-60 bg-gradient-to-b from-background to-transparent" />
        <ul className="pr-2">{getRoutes()}</ul>
        <div className="sticky -bottom-24 h-14 w-60 bg-gradient-to-t from-background to-transparent" />
      </div>
    </ThemeProvider>
  );
}

export default Sidenav;
