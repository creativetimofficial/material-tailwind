// types
import type { className, disabled } from "../../../types/components/tabs";

export interface TabStylesType {
  defaultProps?: {
    className?: className;
    activeClassName?: className;
    disabled?: disabled;
  };
  styles?: {
    base?: {
      tab?: {
        initial?: object;
        disabled?: object;
      };
      indicator?: object;
    };
  };
}

export const tab: TabStylesType = {
  defaultProps: {
    className: "",
    activeClassName: "",
    disabled: false,
  },
  styles: {
    base: {
      tab: {
        initial: {
          display: "grid",
          placeItems: "place-items-center",
          textAlign: "text-center",
          width: "w-full",
          height: "h-full",
          position: "relative",
          bg: "bg-transparent",
          py: "py-1",
          px: "px-2",
          color: "text-blue-gray-900",
          fontSmoothing: "antialiased",
          fontFamily: "font-sans",
          fontSize: "text-base",
          fontWeight: "font-normal",
          lineHeight: "leading-relaxed",
          userSelect: "select-none",
          cursor: "cursor-pointer",
        },
        disabled: {
          opacity: "opacity-50",
          cursor: "cursor-not-allowed",
          pointerEvents: "pointer-events-none",
          userSelect: "select-none",
        },
      },
      indicator: {
        position: "absolute",
        inset: "inset-0",
        zIndex: "z-10",
        height: "h-full",
        bg: "bg-white",
        borderRadius: "rounded-md",
        boxShadow: "shadow",
      },
    },
  },
};

export default tab;
