"use client";

import * as React from "react";

// @components
import Link from "next/link";
import {
  Button,
  Select,
  Dialog,
  IconButton,
  Typography,
  Drawer,
  Card,
  Tabs,
  Breadcrumb,
} from "@material-tailwind/react";
import { DocSearch } from "@docsearch/react";
import {
  Brand,
  ThemeToggleDesktop,
  ThemeToggleMobile,
  ThemeProvider,
  getRoutes,
} from "@components";

// @icons
import {
  Book,
  Post,
  Xmark,
  Figma,
  Github,
  Search,
  Discord,
  MoreVert,
  BrightStar,
  SelectFace3d,
  DollarCircle,
  MultiplePages,
  Menu as MenuIcon,
  NavArrowRight,
} from "iconoir-react";

// @utils
import { cn } from "@utils";

// @hooks
import useSWR from "swr";
import { usePathname } from "next/navigation";

interface NavIconProps extends React.ComponentProps<"button"> {
  icon: React.ElementType;
}

const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const INDEX_NAME = process.env.NEXT_PUBLIC_INDEX_NAME;

function NavIconComponent({ icon: Icon, ...rest }: NavIconProps, ref: any) {
  return (
    <span
      {...rest}
      ref={ref}
      className={cn(
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
      className={cn(
        "group flex cursor-pointer select-none items-center gap-1.5 overflow-hidden rounded-md py-2 pl-2 pr-2.5 text-sm text-black transition-all duration-300 hover:bg-surface-light dark:text-white dark:hover:bg-surface",
        className,
      )}
    >
      <i className="relative h-[18px] w-[18px]">
        <Icon
          className={cn(styles.icon, {
            [styles.goingIcon]: HoverIcon,
          })}
        />
        {HoverIcon && (
          <HoverIcon className={cn(styles.icon, styles.comingIcon)} />
        )}
      </i>
      {children}
    </span>
  );
}

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export function Navbar() {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const { data } = useSWR(
    "https://api.github.com/repos/creativetimofficial/material-tailwind",
    fetcher,
  );

  return (
    <ThemeProvider>
      <nav className="fixed top-0 z-50 w-full border-b border-surface bg-background">
        <div className="border-b border-warning bg-warning-light px-4 py-3 text-center">
          <Typography as="p" type="small" className="font-semibold text-black">
            Material Tailwind v3 is currently on beta, for stable version use{" "}
            <Link href="/docs/react/installation" className="text-blue-600">
              Material Tailwind v2
            </Link>
          </Typography>
        </div>
        <div className="px-4 pt-4">
          <div className="relative mx-auto mt-0 flex max-w-7xl items-center justify-between gap-2 pb-0 lg:pb-4">
            <div className="flex items-center gap-0">
              <ThemeToggleDesktop as={NavIcon} />
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
                    appId={APP_ID!}
                    apiKey={API_KEY!}
                    indexName={INDEX_NAME!}
                  />
                </div>
              </div>
              <Link
                href="/"
                className="mr-2 grid h-12 w-12 shrink-0 lg:!hidden"
              >
                <Brand />
              </Link>
              <Select value="v3.0.0">
                <Select.Trigger className="ml-2 gap-1.5 rounded-full py-2 pl-3 pr-2.5 text-xs" />
                <Select.List>
                  <Select.Option
                    as={Link}
                    href="/docs/v3/react/installation"
                    value="v3.0.0"
                  >
                    v3.0.0
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
              {/* <Link href="/pro">
                <NavItem icon={DollarCircle}>PRO</NavItem>
              </Link> */}
              <Link href="/" className="mx-2 h-12 w-12">
                <Brand />
              </Link>
              <Link href="/v3/blocks">
                <NavItem icon={SelectFace3d}>Blocks</NavItem>
              </Link>
              {/* <Link href="/figma">
                <NavItem icon={Figma}>Figma</NavItem>
              </Link>
              <Link href="/roots-of-ui-ux-design">
                <NavItem icon={Book}>Book</NavItem>
              </Link>
              <Link href="/blog">
                <NavItem icon={Post}>Blog</NavItem>
              </Link> */}
            </div>
            <div className="flex items-center gap-1">
              <div className="group relative grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded-md text-black transition-all duration-300 hover:bg-surface-light dark:text-white dark:hover:bg-surface lg:hidden">
                <Search className="h-5 w-5 stroke-[1.5]" />
                <div className="absolute inset-0 m-0 w-8 overflow-hidden opacity-0 [&_>_button]:m-0 [&_>_button]:w-8 [&_>_button]:p-0">
                  <DocSearch
                    appId={APP_ID!}
                    apiKey={API_KEY!}
                    indexName={INDEX_NAME!}
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
                size="sm"
                href="/v3/preorder/#pricing"
                className="ml-1 hidden sm:flex"
              >
                Pre-Order & FAQ
              </Button>
              <Dialog>
                <Dialog.Trigger
                  as={IconButton}
                  size="sm"
                  className="ml-1 grid sm:ml-0 lg:hidden"
                >
                  <MoreVert className="h-5 w-5 stroke-[1.5]" />
                </Dialog.Trigger>
                <Dialog.Overlay className="backdrop-blur">
                  <Dialog.Content className="fixed left-[unset] right-3.5 top-3.5 w-full max-w-[280px] translate-x-0 translate-y-0 !animate-none rounded-lg p-1">
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
                    {/* <Link href="/pro">
                      <NavItem icon={DollarCircle} className="p-2">
                        PRO
                      </NavItem>
                    </Link> */}
                    <Link href="/v3/blocks">
                      <NavItem icon={SelectFace3d} className="p-2">
                        Blocks
                      </NavItem>
                    </Link>
                    {/* <Link href="/figma">
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
                    </Link> */}
                    <Button
                      as={Link}
                      href="/v3/preorder/#pricing"
                      className="my-1"
                      isFullWidth
                    >
                      Pricing & FAQ
                    </Button>
                    <div className="flex items-center justify-between rounded-md bg-surface-light py-2 pl-3 pr-2">
                      <Typography type="small">Theme</Typography>
                      <ThemeToggleMobile as={Button} />
                    </div>
                  </Dialog.Content>
                </Dialog.Overlay>
              </Dialog>
            </div>
          </div>

          <div className="mx-auto flex max-w-7xl items-end justify-between gap-4 pt-2">
            <Tabs defaultValue="Started">
              <Tabs.List className="w-full gap-6 rounded-none bg-transparent py-0 dark:bg-transparent">
                <Tabs.Trigger
                  as={Link}
                  href="#Started"
                  className="w-max px-0 py-3 font-medium text-foreground data-[active=true]:text-black dark:text-foreground dark:data-[active=true]:text-white"
                  value="Started"
                >
                  Getting Started
                </Tabs.Trigger>
                <Tabs.Trigger
                  as={Link}
                  href="#Components"
                  className="w-max px-0 py-3 font-medium text-foreground data-[active=true]:text-black dark:text-foreground dark:data-[active=true]:text-white"
                  value="Components"
                >
                  Components
                </Tabs.Trigger>
                <Tabs.Trigger
                  as={Link}
                  href="#Forms"
                  className="w-max px-0 py-3 font-medium text-foreground data-[active=true]:text-black dark:text-foreground dark:data-[active=true]:text-white"
                  value="Forms"
                >
                  Forms
                </Tabs.Trigger>
                <Tabs.Trigger
                  as={Link}
                  href="#Plugins"
                  className="w-max px-0 py-3 font-medium text-foreground data-[active=true]:text-black dark:text-foreground dark:data-[active=true]:text-white"
                  value="Plugins"
                >
                  Plugins
                </Tabs.Trigger>
                <Tabs.TriggerIndicator className="translate-y-px rounded-none border-b border-orange-500 bg-transparent shadow-none" />
              </Tabs.List>
            </Tabs>
            <div className="pb-3">
              <Tabs defaultValue="react">
                <Tabs.List className="p-0.5">
                  <Tabs.Trigger value="react">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="me-2 h-4 w-4"
                    >
                      <path
                        d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                        fill="#53C1DE"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                        fill="#53C1DE"
                      />
                    </svg>
                    React
                  </Tabs.Trigger>
                  <Tabs.Trigger value="html">
                    <svg
                      viewBox="0 -51 256 256"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      preserveAspectRatio="xMidYMid"
                      className="me-2 h-4 w-4"
                    >
                      <defs>
                        <linearGradient
                          x1="-2.77777778%"
                          y1="32%"
                          x2="100%"
                          y2="67.5555556%"
                          id="linearGradient-1"
                        >
                          <stop stopColor="#2298BD" offset="0%" />
                          <stop stopColor="#0ED7B5" offset="100%" />
                        </linearGradient>
                      </defs>
                      <g>
                        <path
                          d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
                          fill="url(#linearGradient-1)"
                        />
                      </g>
                    </svg>
                    Tailwind
                  </Tabs.Trigger>
                  <Tabs.TriggerIndicator />
                </Tabs.List>
              </Tabs>
            </div>
          </div>

          {/* mobile */}
          <div className="-mx-4 flex items-center gap-2 border-t border-surface px-4 py-2 lg:hidden">
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
                    className={cn("capitalize text-orange-500", {
                      "text-foreground": index !== pathParts.length - 1,
                    })}
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
    </ThemeProvider>
  );
}

export default Navbar;
