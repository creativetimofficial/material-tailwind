// types
import type { animate, disabled, icon } from "../../../types/components/accordion";

export interface AccordionStylesType {
  defaultProps: {
    icon: icon;
    animate: animate;
    disabled: disabled;
    class: "";
  };
  styles: {
    base: {
      container: object;
      header: {
        initial: object;
        active: object;
        icon: object;
      };
      body: object;
      disabled: object;
    };
  };
}

export const accordion: AccordionStylesType = {
  defaultProps: {
    icon: "", //maybe reset to undefined
    class: "",
    animate: {
      initial: {
        height: "0px",
        transition: { duration: 0.3, easing: "ease-in-out" },
      },
      unmount: {
        height: "0px",
        transition: { duration: 0.3, easing: "ease-in-out" },
      },
      mount: {
        height: "auto",
        transition: { duration: 0.3, easing: "ease-in-out" },
      },
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
          fontWeight: "font-semibold",
          lineHeight: "leading-snug",
          userSelect: "select-none",
          hover: "hover:text-blue-gray-900",
          transition: "transition-colors",
        },
        active: { color: "text-blue-gray-900" },
        icon: {
          width: "w-5",
          height: "h-5",
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
