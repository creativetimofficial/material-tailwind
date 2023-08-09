import React from "react";
import Link from "next/link";
import { Typography, Chip } from "@material-tailwind/react";

interface Props {
  routes: {
    name: string;
    icon: string;
    pages: {
      name: string;
      label?: string;
    }[];
  }[];
  type: "html" | "react" | "vue" | "angular" | "svelte";
  slug: string;
  mobileNav: boolean;
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidenav({
  routes,
  type,
  slug,
  mobileNav,
  setMobileNav,
}: Props) {
  return (
    <aside
      className={`fixed top-0 z-[999] h-screen w-80 overflow-y-scroll pb-4 pr-4 transition-all duration-300 lg:sticky lg:top-16 lg:left-0 lg:z-10 lg:w-56 ${
        mobileNav ? "left-0" : "-left-96"
      }`}
    >
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-gray-900/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileNav
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
      <div className="fixed top-0 z-[9999] w-80 overflow-y-scroll !bg-white pb-6 pl-6 lg:relative lg:w-56 lg:bg-transparent lg:pt-0 lg:pl-0">
        <div className="mt-4">
          {routes.map(({ name, pages }, key): any => (
            <div key={key}>
              <Typography
                variant="small"
                className="font-bold capitalize text-primary"
              >
                {name}
              </Typography>
              <ul className="py-2">
                {pages.map(({ name, route, label }: any, key) => (
                  <li
                    key={key}
                    className={key === pages.length - 1 ? "!mb-4" : ""}
                  >
                    <Link href={`/docs/${type}/${route}`}>
                      <Typography
                        variant="small"
                        className={`relative list-item w-full py-1 capitalize transition-colors hover:text-primary ${
                          route === slug
                            ? "font-medium text-blue-500"
                            : "font-normal text-gray-600"
                        }`}
                        onClick={() => setMobileNav(false)}
                      >
                        {name}
                      </Typography>
                      {label && (
                        <Chip
                          size="sm"
                          value={label}
                          variant="ghost"
                          color={
                            label === "new"
                              ? "green"
                              : label === "new example"
                              ? "amber"
                              : "blue"
                          }
                          className="rounded-full capitalize"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
