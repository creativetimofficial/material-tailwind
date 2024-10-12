"use client";

import React from "react";
import Link from "next/link";
import {
  SelectFace3d,
  Figma,
  Github,
  Discord,
  Search,
  BrightStar,
  SunLight,
  HalfMoon,
  ModernTv,
  MultiplePages,
  DollarCircle,
  Book,
  Post,
  MoreVert,
  Xmark,
  Menu as MenuIcon,
  NavArrowRight,
} from "iconoir-react";
import { Brand } from "@components";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { DocSearch } from "@docsearch/react";
import { twMerge } from "tailwind-merge";

import {
  Button,
  Select,
  IconButton,
  Dialog,
  Typography,
  Menu,
  Drawer,
  Card,
  Breadcrumb,
} from "@material-tailwind/react";
import { getRoutes } from "@components";

// @hooks
import useSWR from "swr";
import { usePathname } from "next/navigation";

interface NavIconProps extends React.ComponentProps<"button"> {
  icon: React.ElementType;
}

const APP_ID = "37KXIBLNGX";
const INDEX_NAME = "material-tailwind";
const API_KEY = "8cc5688018e14bad2a2528eea41fbb35";

function NavIconComponent({ icon: Icon, ...rest }: NavIconProps, ref: any) {
  return (
    <span
      {...rest}
      ref={ref}
      className={twMerge(
        "group grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-md text-black transition-all duration-300 hover:bg-surface-light dark:text-white dark:hover:bg-surface",
        rest?.className,
      )}
    >
      <Icon className="h-5 w-5 stroke-[1.5]" />
    </span>
  );
}

const NavIcon = React.forwardRef(NavIconComponent);

function NavItem({
  icon: Icon,
  hoverIcon: HoverIcon,
  className,
  children,
}: {
  icon: React.ElementType;
  hoverIcon?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}) {
  const styles = {
    icon: "absolute h-full w-full stroke-[1.5]",
    goingIcon:
      "translate-y-0 scale-100 opacity-100 group-hover:-translate-y-4 group-hover:scale-90 group-hover:opacity-0 transition-all duration-300",
    comingIcon:
      "translate-y-4 scale-90 stroke-[1.5] opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300",
  };

  return (
    <span
      className={twMerge(
        "group flex cursor-pointer select-none items-center gap-1.5 overflow-hidden rounded-md py-2 pl-2 pr-2.5 text-sm text-black transition-all duration-300 hover:bg-surface-light dark:text-white dark:hover:bg-surface",
        className,
      )}
    >
      <i className="relative h-[18px] w-[18px]">
        <Icon
          className={clsx(styles.icon, {
            [styles.goingIcon]: HoverIcon,
          })}
        />
        {HoverIcon && (
          <HoverIcon className={clsx(styles.icon, styles.comingIcon)} />
        )}
      </i>
      {children}
    </span>
  );
}

const fetcher = (url) => fetch(url).then((response) => response.json());

export function Navbar() {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const { theme, setTheme }: any = useTheme();
  const { data } = useSWR(
    "https://api.github.com/repos/creativetimofficial/material-tailwind",
    fetcher,
  );

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-surface bg-background">
      <div className="border-b border-warning bg-warning-light px-4 py-3 text-center">
        <Typography as="p" type="small" className="font-semibold text-black">
          Material Tailwind v3 is currently on beta, for stable version use{" "}
          <Link href="/docs/react/installation" className="text-primary">
            Material Tailwind v2
          </Link>
        </Typography>
      </div>
      <div className="px-4 pb-0 pt-4 lg:pb-4">
        <div className="relative mx-auto mt-0 flex max-w-7xl items-center justify-between gap-2">
          <div className="flex items-center gap-0">
            <Menu placement="bottom">
              <Menu.Trigger
                as={NavIcon}
                size="sm"
                tabIndex={0}
                role="button"
                icon={
                  theme === "light"
                    ? SunLight
                    : theme === "dark"
                      ? HalfMoon
                      : ModernTv
                }
                className="hidden lg:grid"
              />
              <Menu.Content className="z-[99999] w-max min-w-max">
                <Menu.Item onClick={() => setTheme("light")}>
                  <SunLight className="mr-2 h-4 w-4" />
                  Light
                </Menu.Item>
                <Menu.Item onClick={() => setTheme("dark")}>
                  <HalfMoon className="mr-2 h-4 w-4" />
                  Dark
                </Menu.Item>
                <Menu.Item onClick={() => setTheme("system")}>
                  <ModernTv className="mr-2 h-4 w-4" />
                  System
                </Menu.Item>
              </Menu.Content>
            </Menu>
            <Link
              target="_blank"
              href="https://discord.com/invite/FhCJCaHdQa"
              className="hidden lg:grid"
            >
              <NavIcon icon={Discord} />
            </Link>
            <div className="group relative hidden h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-md text-black transition-all duration-300 hover:bg-surface-light dark:text-white dark:hover:bg-surface lg:grid">
              <Search className="h-5 w-5 stroke-[1.5]" />
              <div className="absolute inset-0 m-0 w-8 overflow-hidden opacity-0 [&_>_button]:m-0 [&_>_button]:w-8 [&_>_button]:p-0">
                <DocSearch
                  appId={APP_ID}
                  apiKey={API_KEY}
                  indexName={INDEX_NAME}
                />
              </div>
            </div>
            <Link href="/" className="mr-2 grid h-12 w-12 shrink-0 lg:!hidden">
              <Brand />
            </Link>
            <Select value="v3.0.0-beta">
              <Select.Trigger className="ml-2 gap-1.5 rounded-full border-none bg-secondary py-2 pl-3 pr-2.5 text-xs text-secondary-foreground shadow-none ring-0" />
              <Select.List>
                <Select.Option
                  as={Link}
                  href="/docs/v3/react/installation"
                  value="v3.0.0-beta"
                >
                  v3.0.0-beta
                </Select.Option>
                <Select.Option
                  as={Link}
                  href="/docs/react/installation"
                  value="v2.1.9"
                >
                  v2.1.9
                </Select.Option>
              </Select.List>
            </Select>
          </div>
          <div className="absolute left-2/4 hidden -translate-x-2/4 items-center gap-1 lg:flex">
            <Link href="/docs/v3/react/installation">
              <NavItem icon={MultiplePages}>Docs</NavItem>
            </Link>
            <Link href="/pro">
              <NavItem icon={DollarCircle}>PRO</NavItem>
            </Link>
            <Link href="/blocks">
              <NavItem icon={SelectFace3d}>Blocks</NavItem>
            </Link>
            <Link href="/" className="mx-2 h-12 w-12">
              <Brand />
            </Link>
            <Link href="/figma">
              <NavItem icon={Figma}>Figma</NavItem>
            </Link>
            <Link href="/roots-of-ui-ux-design">
              <NavItem icon={Book}>Book</NavItem>
            </Link>
            <Link href="/blog">
              <NavItem icon={Post}>Blog</NavItem>
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <div className="group relative grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded-md text-black transition-all duration-300 hover:bg-surface-light dark:text-white dark:hover:bg-surface lg:hidden">
              <Search className="h-5 w-5 stroke-[1.5]" />
              <div className="absolute inset-0 m-0 w-8 overflow-hidden opacity-0 [&_>_button]:m-0 [&_>_button]:w-8 [&_>_button]:p-0">
                <DocSearch
                  appId={APP_ID}
                  apiKey={API_KEY}
                  indexName={INDEX_NAME}
                />
              </div>
            </div>
            <Link
              target="_blank"
              href="https://github.com/creativetimofficial/material-tailwind"
            >
              <NavItem icon={Github} hoverIcon={BrightStar}>
                {new Intl.NumberFormat("en-US", {
                  notation: "compact",
                  compactDisplay: "short",
                }).format(Number(data ? data.stargazers_count : 0))}
              </NavItem>
            </Link>
            <Button
              as={Link}
              href="/blocks#pricing"
              className="ml-1 hidden sm:flex"
            >
              Pricing & FAQ
            </Button>
            <Dialog>
              <Dialog.Trigger
                as={IconButton}
                className="ml-1 grid sm:ml-0 lg:hidden"
              >
                <MoreVert className="h-5 w-5 stroke-[1.5]" />
              </Dialog.Trigger>
              <Dialog.Overlay className="backdrop-blur">
                <Dialog.Content className="fixed left-[unset] right-3.5 top-3.5 w-full max-w-[280px] translate-x-0 translate-y-0 rounded-lg p-1">
                  <Dialog.DismissTrigger
                    as={IconButton}
                    size="sm"
                    variant="ghost"
                    color="secondary"
                    className="absolute right-2 top-2"
                    isCircular
                  >
                    <Xmark className="h-5 w-5" />
                  </Dialog.DismissTrigger>
                  <Link href="/docs/v3/react/installation">
                    <NavItem icon={MultiplePages} className="p-2">
                      Docs
                    </NavItem>
                  </Link>
                  <Link href="/pro">
                    <NavItem icon={DollarCircle} className="p-2">
                      PRO
                    </NavItem>
                  </Link>
                  <Link href="/blocks">
                    <NavItem icon={SelectFace3d} className="p-2">
                      Blocks
                    </NavItem>
                  </Link>
                  <Link href="/figma">
                    <NavItem icon={Figma} className="p-2">
                      Figma
                    </NavItem>
                  </Link>
                  <Link href="/roots-of-ui-ux-design">
                    <NavItem icon={Book} className="p-2">
                      Book
                    </NavItem>
                  </Link>
                  <Link href="/blog">
                    <NavItem icon={Post} className="p-2">
                      Blog
                    </NavItem>
                  </Link>
                  <Link href="https://discord.com/invite/FhCJCaHdQa">
                    <NavItem icon={Discord} className="p-2">
                      Discord
                    </NavItem>
                  </Link>
                  <Button
                    as={Link}
                    href="/blocks#pricing"
                    className="my-1"
                    isFullWidth
                  >
                    Pricing & FAQ
                  </Button>
                  <div className="flex items-center justify-between rounded-md bg-surface-light py-2 pl-3 pr-2">
                    <Typography type="small">Theme</Typography>
                    <Menu placement="bottom-end">
                      <Menu.Trigger as={Button} size="sm">
                        {theme === "light" ? (
                          <SunLight className="mr-1.5 h-3.5 w-3.5 stroke-[1.5]" />
                        ) : theme === "dark" ? (
                          <HalfMoon className="mr-1.5 h-3.5 w-3.5 stroke-[1.5]" />
                        ) : (
                          <ModernTv className="mr-1.5 h-3.5 w-3.5 stroke-[1.5]" />
                        )}
                        <span className="mr-0.5 capitalize">{theme}</span>
                      </Menu.Trigger>
                      <Menu.Content className="z-[99999] w-max min-w-max">
                        <Menu.Item onClick={() => setTheme("light")}>
                          <SunLight className="mr-2 h-4 w-4" />
                          Light
                        </Menu.Item>
                        <Menu.Item onClick={() => setTheme("dark")}>
                          <HalfMoon className="mr-2 h-4 w-4" />
                          Dark
                        </Menu.Item>
                        <Menu.Item onClick={() => setTheme("system")}>
                          <ModernTv className="mr-2 h-4 w-4" />
                          System
                        </Menu.Item>
                      </Menu.Content>
                    </Menu>
                  </div>
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog>
          </div>
        </div>
        <div className="-mx-4 mt-4 flex items-center gap-2 border-t border-surface px-4 py-2 lg:hidden">
          <Drawer>
            <Drawer.Trigger as={IconButton} variant="ghost" color="secondary">
              <MenuIcon className="h-5 w-5" />
            </Drawer.Trigger>
            <Drawer.Overlay className="backdrop-blur">
              <Drawer.Panel placement="left" className="p-0">
                <div className="flex items-center justify-between gap-4">
                  <Drawer.DismissTrigger
                    as={IconButton}
                    size="sm"
                    variant="ghost"
                    color="secondary"
                    className="absolute right-2 top-2"
                    isCircular
                  >
                    <Xmark className="h-5 w-5" />
                  </Drawer.DismissTrigger>
                </div>
                <Card className="grid h-full items-start overflow-auto border-none shadow-none">
                  <Card.Header className="m-0 h-max w-full rounded-none p-3">
                    <div className="flex h-max items-center gap-3">
                      <div className="h-12 w-12">
                        <Brand />
                      </div>
                      <Typography className="font-semibold">
                        Material Tailwind
                      </Typography>
                    </div>
                  </Card.Header>
                  <Card.Body as="ul" className="overflow-auto p-4">
                    {getRoutes()}
                  </Card.Body>
                  <Card.Footer className="mt-auto">
                    <Card color="primary" className="shadow-none">
                      <Card.Header className="mx-3 mt-3">
                        <SelectFace3d className="h-10 w-10 text-white" />
                      </Card.Header>
                      <Card.Body>
                        <Typography
                          type="h6"
                          color="secondary"
                          className="mb-1"
                        >
                          Upgrade to PRO
                        </Typography>
                        <Typography type="small" color="secondary">
                          Upgrade to Material Tailwind PRO and get even more
                          components, plugins, advanced features and premium.
                        </Typography>
                      </Card.Body>
                      <Card.Footer>
                        <Button size="sm" as="a" href="#" color="secondary">
                          Upgrade Now
                        </Button>
                      </Card.Footer>
                    </Card>
                  </Card.Footer>
                </Card>
              </Drawer.Panel>
            </Drawer.Overlay>
          </Drawer>

          <Breadcrumb>
            {pathParts.map((part, index) => (
              <React.Fragment key={index}>
                <Breadcrumb.Link
                  className={twMerge(
                    "capitalize text-primary",
                    index !== pathParts.length - 1 && "text-foreground",
                  )}
                >
                  {part.replaceAll("-", " ")}
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
