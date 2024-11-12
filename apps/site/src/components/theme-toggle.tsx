"use client";

import * as React from "react";

// @components
import { Menu } from "@material-tailwind/react";

// @icons
import { SunLight, HalfMoon, ModernTv } from "iconoir-react";

// @hooks
import { useTheme } from "next-themes";

export function ThemeToggleDesktop({ as }: { as: React.ElementType }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Menu placement="bottom">
      <Menu.Trigger
        as={as}
        size="sm"
        tabIndex={0}
        role="button"
        icon={
          theme === "light" ? SunLight : theme === "dark" ? HalfMoon : ModernTv
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
  );
}

export function ThemeToggleMobile({ as }: { as: React.ElementType }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Menu placement="bottom-end">
      <Menu.Trigger as={as} size="sm">
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
  );
}
