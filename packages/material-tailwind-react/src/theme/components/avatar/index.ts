// types
import type { variant, size, className, withBorder, color } from "../../../types/components/avatar";
import { propTypesVariant, propTypesSize, propTypesColor } from "../../../types/components/avatar";
import avatarBorderColor from "./avatarBorderColor";

export interface AvatarStyleTypes {
  defaultProps?: {
    variant?: variant;
    size?: size;
    className?: className;
    withBorder?: withBorder;
    color?: color;
  };
  valid?: {
    variants?: string[];
    sizes?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      initial?: object;
      withBorder?: object;
    };
    sizes?: {
      xs?: object;
      sm?: object;
      md?: object;
      lg?: object;
      xl?: object;
      xxl?: object;
    };
    variants?: {
      square?: object;
      rounded?: object;
      circular?: object;
    };
    borderColor?: typeof avatarBorderColor;
  };
}

export const avatar: AvatarStyleTypes = {
  defaultProps: {
    variant: "circular",
    size: "md",
    className: "",
    withBorder: false,
    color: "blue",
  },
  valid: {
    variants: propTypesVariant,
    sizes: propTypesSize,
    colors: propTypesColor,
  },
  styles: {
    base: {
      initial: {
        display: "inline-block",
        position: "relative",
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
      withBorder: {
        border: "border-2",
      },
    },
    sizes: {
      xs: {
        width: "w-6",
        height: "h-6",
        borderRadius: "rounded-md",
      },
      sm: {
        width: "w-9",
        height: "h-9",
        borderRadius: "rounded-md",
      },
      md: {
        width: "w-12",
        height: "h-12",
        borderRadius: "rounded-lg",
      },
      lg: {
        width: "w-[58px]",
        height: "h-[58px]",
        borderRadius: "rounded-lg",
      },
      xl: {
        width: "w-[74px]",
        height: "h-[74px]",
        borderRadius: "rounded-xl",
      },
      xxl: {
        width: "w-[110px]",
        height: "h-[110px]",
        borderRadius: "rounded-2xl",
      },
    },
    variants: {
      rounded: {},
      square: {
        borderRadius: "!rounded-none",
      },
      circular: {
        borderRadius: "!rounded-full",
      },
    },
    borderColor: avatarBorderColor,
  },
};

export default avatar;
