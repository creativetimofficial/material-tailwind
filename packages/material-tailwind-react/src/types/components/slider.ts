import type React from "react";
import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Slider component.
 */

// typescript types
export type color = colors;
export type size = "sm" | "md" | "lg";
export type className = string;
export type trackClassName = string;
export type thumbClassName = string;
export type barClassName = string;
export type defaultValue = string | number | readonly string[];
export type value = string | number | readonly string[];
export type onChange = React.ChangeEventHandler<HTMLInputElement>;
export type min = number | string;
export type max = number | string;
export type step = number | string;
export type inputRef = React.RefObject<HTMLInputElement>;
export type inputProps = React.ComponentProps<"input">;

// javascript prop-types
export const propTypesColor: any = propTypesColors;
export const propTypesSize: any = ["sm", "md", "lg"];
export const propTypesClassName: any = PropTypes.string;
export const propTypesTrackClassName: any = PropTypes.string;
export const propTypesThumbClassName: any = PropTypes.string;
export const propTypesBarClassName: any = PropTypes.string;
export const propTypesDefaultValue: any = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
export const propTypesValue: any = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
export const propTypesOnChange: any = PropTypes.func;
export const propTypesMin: any = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
export const propTypesMax: any = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
export const propTypesStep: any = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
export const propTypesInputRef: any = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.any }),
]);
export const propTypesInputProps: any = PropTypes.instanceOf(Object);
