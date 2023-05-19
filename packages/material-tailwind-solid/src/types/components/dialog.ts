// generic types
import type { Setter } from "solid-js";
import type { animation, dismissType } from "../generic";

/**
 * This file contains the types and prop-types for Dialog, DialogHeader, DialogBody and DialogFooter components.
 */

// typescript types
export type open = boolean;
export type handler = Setter<any>;
export type size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type dismiss = dismissType;
export type animate = animation;
export type divider = boolean;

export const propTypesSize = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;
