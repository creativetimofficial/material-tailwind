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
export type placement = typeof propTypesPlacement[number];
export type overlayProps = React.ComponentProps<"div">;
export type className = string;
export type onClose = () => void;
export type dismiss = dismissType;
export type transition = AnimationOptions<any>;
export type overlayRef = React.Ref<HTMLDivElement>;

// javascript prop-types
export const propTypesOpen = PropTypes.bool.isRequired;
export const propTypesSize = PropTypes.number;
export const propTypesOverlay = PropTypes.bool;
export const propTypesChildren = PropTypes.node.isRequired;
export const propTypesPlacement = ["top", "right", "bottom", "left"] as const;
export const propTypesOverlayProps = PropTypes.object;
export const propTypesClassName = PropTypes.string;
export const propTypesOnClose = PropTypes.func;
export const propTypesDismiss = propTypesDismissType;
export const propTypesTransition = PropTypes.object;
export const propTypesOverlayRef = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.any }),
]);
