import inputOutlined from "./inputOutlined";
import inputStandard from "./inputStandard";
import inputStatic from "./inputStatic";

// types
import type {
  variant,
  size,
  color,
  label,
  error,
  success,
  icon,
  labelProps,
  className,
} from "../../../types/components/input";
import { propTypesVariant, propTypesSize, propTypesColor } from "../../../types/components/input";

export interface InputSizeStylesType {
  container?: object;
  input?: object;
  label?: object;
  icon?: object;
}

export interface InputStateStylesType {
  input?: object;
  label?: object;
}

export interface InputVariantStylesType {
  base?: {
    input?: object;
    inputWithIcon?: object;
    icon?: object;
    label?: object;
  };
  sizes?: {
    md?: InputSizeStylesType;
    lg?: InputSizeStylesType;
  };
  colors?: {
    input?: object;
    label?: object;
  };
  error?: InputStateStylesType;
  success?: InputStateStylesType;
}

export interface InputStylesType {
  defaultProps?: {
    variant?: variant;
    size?: size;
    color?: color;
    label?: label;
    error?: error;
    success?: success;
    icon?: icon;
    labelProps?: labelProps;
    className?: className;
  };
  valid?: {
    variants?: string[];
    sizes?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      container?: object;
      input?: object;
      label?: object;
      icon?: object;
    };
    variants?: {
      outlined: InputVariantStylesType;
      standard: InputVariantStylesType;
      static: InputVariantStylesType;
    };
  };
}

export const input: InputStylesType = {
  defaultProps: {
    variant: "outlined",
    size: "md",
    color: "blue",
    label: "",
    error: false,
    success: false,
    icon: undefined,
    labelProps: {},
    className: "",
  },
  valid: {
    variants: propTypesVariant,
    sizes: propTypesSize,
    colors: propTypesColor,
  },
  styles: {
    base: {
      container: {
        position: "relative",
        width: "w-full",
        minWidth: "min-w-[200px]",
      },
      input: {
        peer: "peer",
        width: "w-full",
        height: "h-full",
        bg: "bg-transparent",
        color: "text-blue-gray-700",
        fontFamily: "font-sans",
        fontWeight: "font-normal",
        outline: "outline outline-0 focus:outline-0",
        disabled: "disabled:bg-blue-gray-50 disabled:border-0",
        transition: "transition-all",
      },
      label: {
        display: "flex",
        width: "w-full",
        height: "h-full",
        userSelect: "select-none",
        pointerEvents: "pointer-events-none",
        position: "absolute",
        left: "left-0",
        fontWeight: "font-normal",
        color: "peer-placeholder-shown:text-blue-gray-500",
        lineHeight: "leading-tight peer-focus:leading-tight",
        disabled:
          "peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500",
        transition: "transition-all",
      },
      icon: {
        display: "grid",
        placeItems: "place-items-center",
        position: "absolute",
        color: "text-blue-gray-500",
      },
    },
    variants: {
      outlined: inputOutlined,
      standard: inputStandard,
      static: inputStatic,
    },
  },
};

export default input;
