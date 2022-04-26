// types
import type { variant, size, className } from "../../../types/components/avatar";
import { propTypesVariant, propTypesSize } from "../../../types/components/avatar";

export interface AvatarStyleTypes {
  defaultProps: {
    variant: variant;
    size: size;
    className: className;
  };
  valid: {
    variants: string[];
    sizes: string[];
  };
  styles: {
    base: object;
    sizes: {
      xs: object;
      sm: object;
      md: object;
      lg: object;
      xl: object;
      xxl: object;
    };
    variants: {
      rounded: object;
      circular: object;
    };
  }
}

export const avatar: AvatarStyleTypes = {
  defaultProps: {
    variant: "rounded",
    size: "md",
    className: "",
  },
  valid: {
    variants: propTypesVariant,
    sizes: propTypesSize,
  },
  styles: {
    base: {
      display: "inline-block",
      position: "relative",
      objectFit: "object-cover",
      objectPosition: "object-center",
    },
    sizes: {
      xs: {
        with: "w-6",
        height: "h-6",
        borderRadius: "rounded-md",
      },
      sm: {
        with: "w-9",
        height: "h-9",
        borderRadius: "rounded-md",
      },
      md: {
        with: "w-12",
        height: "h-12",
        borderRadius: "rounded-lg",
      },
      lg: {
        with: "w-[58px]",
        height: "h-[58px]",
        borderRadius: "rounded-lg",
      },
      xl: {
        with: "w-[74px]",
        height: "h-[74px]",
        borderRadius: "rounded-xl",
      },
      xxl: {
        with: "w-[110px]",
        height: "h-[110px]",
        borderRadius: "rounded-2xl",
      },
    },
    variants: {
      rounded: {},
      circular: {
        borderRadius: "rounded-full"
      },
    },
  },
};

export default avatar;
