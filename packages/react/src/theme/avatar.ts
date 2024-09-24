import type { DeepPartial } from "@types";

export type AvatarTheme = DeepPartial<typeof avatarTheme>;

export const avatarTheme = {
  defaultProps: {
    size: "md",
    variant: "circular",
  },
  baseStyle:
    "inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current]",
  size: {
    xs: "w-6 h-6 rounded-sm",
    sm: "w-8 h-8 rounded",
    md: "w-11 h-11 rounded-md",
    lg: "w-14 h-14 rounded-md",
    xl: "w-20 h-20 rounded-lg",
    xxl: "w-28 h-28 rounded-xl",
  },
};
