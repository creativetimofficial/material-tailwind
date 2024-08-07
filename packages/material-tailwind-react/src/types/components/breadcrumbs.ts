import type { ReactNode } from "react";
import PropTypes from "prop-types";

/**
 * This file contains the types and prop-types for Breadcrumbs component.
 */

// typescript types
export type separator = ReactNode;
export type fullWidth = boolean;
export type className = string;
export type children = ReactNode;

// javascript prop-types
export const propTypesSeparator = PropTypes.node;
export const propTypesFullWidth = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesChildren = PropTypes.node.isRequired;
