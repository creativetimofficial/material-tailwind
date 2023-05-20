import type { JSX } from "solid-js";
import type { dismissType } from "../generic";
import type { AnimationOptionsWithOverrides } from "@motionone/solid";

/**
 * This file contains the types and prop-types for Drawer component.
 */

// typescript types
export type open = boolean;
export type size = number;
export type overlay = boolean;
export type placement = "top" | "right" | "bottom" | "left";
export type overlayProps = JSX.HTMLAttributes<HTMLDivElement>;
export type onClose = () => void;
export type dismiss = dismissType;
export type transition = AnimationOptionsWithOverrides;
export type overlayRef = HTMLDivElement;

// javascript prop-types

export const propTypesPlacement = ["top", "right", "bottom", "left"] as const;
