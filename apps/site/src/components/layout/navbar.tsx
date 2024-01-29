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
} from "iconoir-react";
import { Brand } from "@components";
import clsx from "clsx";
import { useTheme } from "next-themes";

interface NavIconProps extends React.ComponentProps<"button"> {
  icon: React.ElementType;
}

function NavIcon({ icon: Icon, ...rest }: NavIconProps) {
  return (
    <span
      {...rest}
      className="group grid h-8 w-8 cursor-pointer place-items-center rounded-md text-gray-950 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-500"
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
      "translate-y-4 scale-90 stroke-[1.5] text-blue-500 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300",
  };

  return (
    <span className="group flex cursor-pointer select-none items-center gap-1.5 overflow-hidden rounded-md py-1.5 pl-2 pr-2.5 text-sm text-gray-950 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-500">
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

  const themeIcons = {
    light: SunLight,
    dark: HalfMoon,
    system: ModernTv,
  };

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
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/50 p-4 backdrop-blur">
      <div className="relative mx-auto mt-0 flex max-w-7xl items-center justify-between gap-2">
        <Link
          target="_blank"
          href="https://github.com/creativetimofficial/material-tailwind"
        >
          <NavItem icon={Github} hoverIcon={BrightStar}>
            2.5K
          </NavItem>
        </Link>
        <div className="absolute left-2/4 flex -translate-x-2/4 items-center gap-6">
          <Link href="/blocks">
            <NavItem icon={SelectFace3d}>Blocks</NavItem>
          </Link>
          <Link href="/" className="h-12 w-12">
            <Brand />
          </Link>
          <Link href="/figma">
            <NavItem icon={Figma}>Figma</NavItem>
          </Link>
        </div>
        <div className="flex gap-2">
          <NavIcon
            tabIndex={0}
            role="button"
            icon={themeIcons[theme]}
            onClick={toggleTheme}
            onKeyDown={toggleThemeOnEnter}
          />
          <Link target="_blank" href="https://discord.com/invite/7xzMRsRebr">
            <NavIcon icon={Discord} />
          </Link>
          <NavIcon tabIndex={0} role="button" icon={Search} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
