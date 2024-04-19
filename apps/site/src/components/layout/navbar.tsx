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
} from "iconoir-react";
import { Brand } from "@components";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { Button, Select } from "@material-tailwind/react";
import { DocSearch } from "@docsearch/react";

interface NavIconProps extends React.ComponentProps<"button"> {
  icon: React.ElementType;
}

const APP_ID = "37KXIBLNGX";
const INDEX_NAME = "material-tailwind";
const API_KEY = "8cc5688018e14bad2a2528eea41fbb35";

function NavIcon({ icon: Icon, ...rest }: NavIconProps) {
  return (
    <span
      {...rest}
      className="group grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded-md text-primary transition-all duration-300 hover:bg-info/10 hover:text-info"
    >
      <Icon className="h-5 w-5 stroke-[1.5]" />
    </span>
  );
}

function NavItem({
  icon: Icon,
  hoverIcon: HoverIcon,
  children,
}: {
  icon: React.ElementType;
  hoverIcon?: React.ElementType;
  children: React.ReactNode;
}) {
  const styles = {
    icon: "absolute h-full w-full stroke-[1.5]",
    goingIcon:
      "translate-y-0 scale-100 opacity-100 group-hover:-translate-y-4 group-hover:scale-90 group-hover:opacity-0 transition-all duration-300",
    comingIcon:
      "translate-y-4 scale-90 stroke-[1.5] text-info opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300",
  };

  return (
    <span className="group flex cursor-pointer select-none items-center gap-1.5 overflow-hidden rounded-md py-1.5 pl-2 pr-2.5 text-sm text-primary transition-all duration-300 hover:bg-info/10 hover:text-info">
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

export function Navbar() {
  const { theme, setTheme }: any = useTheme();

  function toggleTheme() {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("system");
        break;
      case "system":
        setTheme("light");
        break;
      default:
        setTheme("system");
        break;
    }
  }

  function toggleThemeOnEnter(event: React.KeyboardEvent<HTMLSpanElement>) {
    if (event.key === "Enter") {
      toggleTheme();
    }
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-surface bg-background p-4">
      <div className="relative mx-auto mt-0 flex max-w-7xl items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <NavIcon
            tabIndex={0}
            role="button"
            icon={
              theme === "light"
                ? SunLight
                : theme === "dark"
                  ? HalfMoon
                  : ModernTv
            }
            onClick={toggleTheme}
            onKeyDown={toggleThemeOnEnter}
          />
          <Link target="_blank" href="https://discord.com/invite/FhCJCaHdQa">
            <NavIcon icon={Discord} />
          </Link>
          <div className="group relative grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded-md text-primary transition-all duration-300 hover:bg-info/10 hover:text-info">
            <Search className="h-5 w-5 stroke-[1.5]" />
            <div className="absolute inset-0 m-0 w-8 overflow-hidden opacity-0 [&_>_button]:m-0 [&_>_button]:w-8 [&_>_button]:p-0">
              <DocSearch
                appId={APP_ID}
                apiKey={API_KEY}
                indexName={INDEX_NAME}
              />
            </div>
          </div>
          <Select value="v3.0.0">
            <Select.Trigger className="gap-1.5 rounded-full border-none bg-primary py-1.5 pl-3 pr-2.5 text-xs text-primary-foreground ring-0" />
            <Select.List>
              <Select.Option value="v3.0.0">v3.0.0</Select.Option>
              <Select.Option value="v2.1.9">v2.1.9</Select.Option>
            </Select.List>
          </Select>
        </div>
        <div className="absolute left-2/4 flex -translate-x-2/4 items-center gap-1">
          <Link href="/docs/react/installation">
            <NavItem icon={MultiplePages}>Docs</NavItem>
          </Link>
          <Link href="/pro">
            <NavItem icon={DollarCircle}>PRO</NavItem>
          </Link>
          <Link href="/blocks">
            <NavItem icon={SelectFace3d}>Blocks</NavItem>
          </Link>
          <Link href="/" className="mx-3 h-12 w-12">
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
        <div className="flex items-center gap-2">
          <Link
            target="_blank"
            href="https://github.com/creativetimofficial/material-tailwind"
          >
            <NavItem icon={Github} hoverIcon={BrightStar}>
              2.5K
            </NavItem>
          </Link>
          <Button as={Link} href="/blocks#pricing">
            Pricing & FAQ
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
