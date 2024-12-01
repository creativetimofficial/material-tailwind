import React from "react";
import Link from "next/link";
import {
  Typography,
  Chip,
  IconButton,
  Card,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { useLockedBody } from "usehooks-ts";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  routes: {
    name: string;
    icon: string;
    pages: {
      name: string;
      label?: string;
    }[];
  }[];
  type: "html" | "react" | "boilerplate";
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
  const [locked, setLocked] = useLockedBody(false, "root");

  React.useEffect(() => {
    if (mobileNav) {
      setLocked(true);
    } else {
      setLocked(false);
    }
  }, [mobileNav, setLocked]);

  return (
    <aside
      className={`fixed top-0 z-[999] h-screen w-80 overflow-y-scroll pb-4 pr-4 transition-all duration-300 lg:sticky lg:left-0 lg:top-16 lg:z-10 lg:w-56 ${
        mobileNav ? "left-0" : "-left-96"
      }`}
    >
      <div
        onClick={() => setMobileNav(false)}
        className={`fixed left-0 top-0 h-screen w-screen bg-gray-900/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileNav
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
      {mobileNav && (
        <IconButton
          onClick={() => setMobileNav(false)}
          ripple={false}
          color="white"
          className="!fixed right-2 top-2"
        >
          <XMarkIcon className="h-6 w-6 stroke-2" />
        </IconButton>
      )}
      <div className="fixed top-0 z-[9999] h-screen w-80 overflow-y-scroll !bg-white pb-6 pl-6 lg:relative lg:w-56 lg:bg-transparent lg:pl-0 lg:pt-0">
        <div className="mb-24 mt-6">
          {routes.map(({ name, pages }, key): any => (
            <div key={key}>
              <Typography
                variant="small"
                className="font-bold capitalize text-primary"
              >
                {name}
              </Typography>
              <ul className="py-2">
                {pages.map(({ name, route, label }: any, key) => {
                  const isActive = route.includes("/")
                    ? route.includes(`/${slug}`)
                    : route === slug;
                  return (
                    <li
                      key={key}
                      className={key === pages.length - 1 ? "!mb-4" : ""}
                    >
                      <Link
                        href={
                          type === "boilerplate"
                            ? `/boilerplate/docs/${route}`
                            : `/docs/${type}/${route}`
                        }
                      >
                        <Typography
                          variant="small"
                          className={`relative list-item w-full py-1 capitalize transition-colors hover:text-primary ${
                            isActive
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
                  );
                })}
              </ul>
            </div>
          ))}
          <Card color="gray">
            <CardBody className="px-4 py-2.5">
              <Typography variant="h6" className="mb-1">
                Material Tailwind v3
              </Typography>
              <Typography variant="small" color="white" className="font-normal">
                We&apos;ve just released the new version of Material Tailwind
                with a lot of new features and improvements. It&apos;s currently
                on <span className="font-semibold text-yellow-600">beta</span>{" "}
                and we need your feedback to make it better.
              </Typography>
              <Link href="/docs/v3/react/installation">
                <Button
                  size="sm"
                  color="white"
                  className="mb-1.5 mt-4 normal-case"
                  fullWidth
                >
                  Go to v3 Docs
                </Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </aside>
  );
}
