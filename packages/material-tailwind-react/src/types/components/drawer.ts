import PropTypes from "prop-types";
import { dismissType, propTypesDismissType } from "../generic";
import type { AnimationOptions } from "framer-motion";

/**
 * This file contains the types and prop-types for Drawer component.
 */

// typescript types
export type open = boolean;
export type size = number;
export type overlay = boolean;
export type children = React.ReactNode;
export type placement = "top" | "right" | "bottom" | "left";
export type overlayProps = React.ComponentProps<"div">;
export type className = string;
export type onClose = () => void;
export type dismiss = dismissType;
export type transition = AnimationOptions<any>;
export type overlayRef = React.Ref<HTMLDivElement>;

// javascript prop-types
export const propTypesOpen: any = PropTypes.bool.isRequired;
export const propTypesSize: any = PropTypes.number;
export const propTypesOverlay: any = PropTypes.bool;
export const propTypesChildren: any = PropTypes.node.isRequired;
export const propTypesPlacement: any = ["top", "right", "bottom", "left"];
export const propTypesOverlayProps: any = PropTypes.object;
export const propTypesClassName: any = PropTypes.string;
export const propTypesOnClose: any = PropTypes.func;
export const propTypesDismiss: any = propTypesDismissType;
export const propTypesTransition: any = PropTypes.object;
export const propTypesOverlayRef: any = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.any }),
]);
