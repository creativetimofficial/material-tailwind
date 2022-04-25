import { ReactNode, Dispatch, SetStateAction } from "react";

// generic types
import type { animate, dismiss } from "../../types/generic";

interface DialogHeaderProps {
  className?: string;
  children: ReactNode;
}

declare function DialogHeader(props: DialogHeaderProps): JSX.Element;

interface DialogBodyProps {
  divider?: boolean;
  className?: string;
  children: ReactNode;
}

declare function DialogBody(props: DialogBodyProps): JSX.Element;

interface DialogFooterProps {
  className?: string;
  children: ReactNode;
}

declare function DialogFooter(props: DialogFooterProps): JSX.Element;

interface DialogProps {
  open: boolean;
  handler: Dispatch<SetStateAction<any>>;
  node: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  dismiss?: dismiss;
  animate?: animate;
  className?: string,
  children: ReactNode,
}

declare function Dialog(props: DialogProps): JSX.Element;

export {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogProps,
  DialogHeaderProps,
  DialogBodyProps,
  DialogFooterProps
}

export default Dialog;