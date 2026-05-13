import type { ReactNode } from "react";
import PropTypes from "prop-types";

/**
 * This file contains the types and prop-types for List, ListItem, ListItemPrefix and ListItemSuffix components.
 */

// typescript types
export type className = string;
export type disabled = boolean;
export type selected = boolean;
export type ripple = boolean;
export type children = ReactNode;

// javascript prop-types
export const propTypesClassName = PropTypes.string;
export const propTypesDisabled = PropTypes.bool;
export const propTypesSelected = PropTypes.bool;
export const propTypesRipple = PropTypes.bool;
export const propTypesChildren = PropTypes.node.isRequired;
