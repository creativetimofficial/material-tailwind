import PropTypes from "prop-types";
import type { JSX } from "solid-js";

/**
 * This file contains the types and prop-types for Breadcrumbs component.
 */

// typescript types
export type separator = JSX.Element;
export type fullWidth = boolean;

// javascript prop-types
export const propTypesSeparator: any = PropTypes.node;
export const propTypesFullWidth: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesChildren: any = PropTypes.node.isRequired;
