import type React from "react";
import PropTypes from "prop-types";

// generic types
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Slider component.
 */

// typescript types
export type color = typeof propTypesColor[number];
export type size = typeof propTypesSize[number];
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
export const propTypesColor = propTypesColors;
export const propTypesSize = ["sm", "md", "lg"] as const;
export const propTypesClassName = PropTypes.string;
export const propTypesTrackClassName = PropTypes.string;
export const propTypesThumbClassName = PropTypes.string;
export const propTypesBarClassName = PropTypes.string;
export const propTypesDefaultValue = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
export const propTypesValue = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
export const propTypesOnChange = PropTypes.func;
export const propTypesMin = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
export const propTypesMax = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
export const propTypesStep = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
export const propTypesInputRef = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.any }),
]);
export const propTypesInputProps = PropTypes.instanceOf(Object);
