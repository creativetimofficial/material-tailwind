// types
import type { className, animate, disabled, icon } from "../../../types/components/accordion";

export interface AccordionStylesType {
  defaultProps?: {
    icon?: icon;
    className?: className;
    animate?: animate;
    disabled?: disabled;
  };
  styles?: {
    base?: {
      container?: object;
      header?: {
        initial?: object;
        active?: object;
        icon?: object;
      };
      body?: object;
      disabled?: object;
    };
  };
}

export const accordion: AccordionStylesType = {
  defaultProps: {
    icon: undefined,
    className: "",
    animate: {
      unmount: {},
      mount: {},
    },
    disabled: false,
  },
  styles: {
    base: {
      container: {
        display: "block",
        position: "relative",
        width: "w-full",
      },
      header: {
        initial: {
          display: "flex",
          justifyContent: "justify-between",
          alignItems: "items-center",
          width: "w-full",
          py: "py-4",
          borderWidth: "border-b border-b-blue-gray-100",
          color: "text-blue-gray-700",
          fontSmoothing: "antialiased",
          fontFamily: "font-sans",
          fontSize: "text-xl",
          textAlign: "text-left",
          fontWeight: "font-semibold",
          lineHeight: "leading-snug",
          userSelect: "select-none",
          hover: "hover:text-blue-gray-900",
          transition: "transition-colors",
        },
        active: { color: "text-blue-gray-900" },
        icon: {
          ml: "ml-4",
        },
      },
      body: {
        display: "block",
        width: "w-full",
        py: "py-4",
        color: "text-gray-700",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-sm",
        fontWeight: "font-light",
        lineHeight: "leading-normal",
      },
      disabled: {
        pointerEvents: "pointer-events-none",
        opacity: "opacity-50",
      },
    },
  },
};

export default accordion;
