import React from "react";

// @floating-ui
import { useMergeRefs } from "@floating-ui/react";

// context
import { usePopover } from "./PopoverContext";

// types
import { children, propTypesChildren } from "../../types/components/popover";

export interface PopoverHandlerProps extends React.ComponentProps<any> {
  children: children | React.ComponentProps<any>;
}

export const PopoverHandler = React.forwardRef<HTMLDivElement, PopoverHandlerProps>(
  ({ children, ...rest }, ref) => {
    const { getReferenceProps, reference } = usePopover();

    const mergedRef = useMergeRefs([ref, reference]);

    return React.cloneElement(children, {
      ...getReferenceProps({
        ...rest,
        ref: mergedRef,
      }),
    });
  },
);

PopoverHandler.propTypes = {
  children: propTypesChildren,
};

PopoverHandler.displayName = "MaterialTailwind.PopoverHandler";

export default PopoverHandler;
