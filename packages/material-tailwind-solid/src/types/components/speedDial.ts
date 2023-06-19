import type { Placement } from "@floating-ui/dom";

// generic types
import type { Setter } from "solid-js";
import type { animation, dismissType, offsetType } from "../generic";

/**
 * This file contains the types and prop-types for SpeedDial, SpeedDialHandler and SpeedDialContent component.
 */

// typescript types
export type open = boolean;
export type handler = Setter<boolean>;
export type placement = Placement;
export type offset = offsetType;
export type dismiss = dismissType;
export type children = JSX.Element;
export type animate = animation;
export type className = string;
