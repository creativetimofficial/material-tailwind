import selectOutlined from "./selectOutlined";
import selectStandard from "./selectStandard";
import selectStatic from "./selectStatic";

// types
import type {
  variant,
  size,
  color,
  label,
  error,
  success,
  arrow,
  value,
  onChange,
  selected,
  offset,
  dismiss,
  animate,
  autoHeight,
  lockScroll,
  labelProps,
  menuProps,
  className,
  disabled,
  containerProps,
} from "../../../types/components/select";
import { propTypesVariant, propTypesSize, propTypesColor } from "../../../types/components/select";

export interface SelectSizeStylesType {
  container?: object;
  select?: object;
  label?: {
    initial?: object;
    states?: {
      close?: object;
      open?: object;
      withValue?: object;
    };
  };
}

export interface SelectStatesStylesType {
  close?: {
    select?: object;
    label?: object;
  };
  open?: {
    select?: object;
    label?: object;
  };
  withValue?: {
    select?: object;
    label?: object;
  };
}

export interface SelectStateStylesType {
  select?: {
    initial?: object;
    states?: {
      close?: object;
      open?: object;
      withValue?: object;
    };
  };
  label?: {
    initial?: object;
    states?: {
      close?: object;
      open?: object;
      withValue?: object;
    };
  };
}

export interface SelectVariantStylesType {
  base?: {
    select?: object;
    label?: object;
  };
  sizes?: {
    md?: SelectSizeStylesType;
    lg?: SelectSizeStylesType;
  };
  colors?: {
    select?: object;
    label?: object;
  };
  states?: SelectStatesStylesType;
  error?: SelectStateStylesType;
  success?: SelectStateStylesType;
}

export interface SelectStylesType {
  defaultProps?: {
    variant?: variant;
    color?: color;
    size?: size;
    label?: label;
    error?: error;
    success?: success;
    arrow?: arrow;
    value?: value;
    onChange?: onChange;
    selected?: selected;
    offset?: offset;
    dismiss?: dismiss;
    animate?: animate;
    autoHeight?: autoHeight;
    lockScroll?: lockScroll;
    labelProps?: labelProps;
    menuProps?: menuProps;
    className?: className;
    disabled?: disabled;
    containerProps?: containerProps;
  };
  valid?: {
    variants?: string[];
    sizes?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      container?: object;
      select?: object;
      arrow?: {
        initial?: object;
        active?: object;
      };
      label?: object;
      menu?: object;
      option?: {
        initial?: object;
        active?: object;
        disabled?: object;
      };
    };
    variants?: {
      outlined: SelectVariantStylesType;
      standard: SelectVariantStylesType;
      static: SelectVariantStylesType;
    };
  };
}

export const select: SelectStylesType = {
  defaultProps: {
    variant: "outlined",
    color: "blue",
    size: "md",
    label: "",
    error: false,
    success: false,
    arrow: undefined,
    value: undefined,
    onChange: undefined,
    selected: undefined,
    offset: 5,
    dismiss: {},
    animate: {
      unmount: {},
      mount: {},
    },
    autoHeight: false,
    lockScroll: false,
    labelProps: {},
    menuProps: {},
    className: "",
    disabled: false,
    containerProps: undefined,
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
      select: {
        peer: "peer",
        width: "w-full",
        height: "h-full",
        bg: "bg-transparent",
        color: "text-blue-gray-700",
        fontFamily: "font-sans",
        fontWeight: "font-normal",
        textAlign: "text-left",
        outline: "outline outline-0 focus:outline-0",
        disabled: "disabled:bg-blue-gray-50 disabled:border-0",
        transition: "transition-all",
      },
      arrow: {
        initial: {
          display: "grid",
          placeItems: "place-items-center",
          position: "absolute",
          top: "top-2/4",
          right: "right-2",
          pt: "pt-px",
          width: "w-5",
          height: "h-5",
          color: "text-blue-gray-400",
          transform: "rotate-0 -translate-y-2/4",
          transition: "transition-all",
        },
        active: {
          transform: "rotate-180",
          mt: "mt-px",
        },
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
        transition: "transition-all",
      },
      menu: {
        width: "w-full",
        maxHeight: "max-h-96",
        bg: "bg-white",
        p: "p-3",
        border: "border border-blue-gray-50",
        borderRadius: "rounded-md",
        boxShadow: "shadow-lg shadow-blue-gray-500/10",
        fontFamily: "font-sans",
        fontSize: "text-sm",
        fontWeight: "font-normal",
        color: "text-blue-gray-500",
        overflow: "overflow-auto",
        outline: "focus:outline-none",
      },
      option: {
        initial: {
          pt: "pt-[9px]",
          pb: "pb-2",
          px: "px-3",
          borderRadius: "rounded-md",
          lightHeight: "leading-tight",
          cursor: "cursor-pointer",
          userSelect: "select-none",
          background: "hover:bg-blue-gray-50 focus:bg-blue-gray-50",
          opacity: "hover:bg-opacity-80 focus:bg-opacity-80",
          color: "hover:text-blue-gray-900 focus:text-blue-gray-900",
          outline: "outline outline-0",
          transition: "transition-all",
        },
        active: {
          bg: "bg-blue-gray-50 bg-opacity-80",
          color: "text-blue-gray-900",
        },
        disabled: {
          opacity: "opacity-50",
          cursor: "cursor-not-allowed",
          userSelect: "select-none",
          pointerEvents: "pointer-events-none",
        },
      },
    },
    variants: {
      outlined: selectOutlined,
      standard: selectStandard,
      static: selectStatic,
    },
  },
};

export default select;
