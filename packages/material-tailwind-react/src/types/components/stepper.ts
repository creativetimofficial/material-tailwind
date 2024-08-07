import type { ReactNode } from "react";
import PropTypes from "prop-types";

/**
 * This file contains the types and prop-types for Stepper and Step components.
 */

// typescript types
export type activeStep = number;
export type isLastStep = (arg: boolean) => void;
export type isFirstStep = (arg: boolean) => void;
export type children = ReactNode;
export type className = string;

// javascript prop-types
export const propTypesActiveStep = PropTypes.number;
export const propTypesIsLastStep = PropTypes.func;
export const propTypesIsFirstStep = PropTypes.func;
export const propTypesChildren = PropTypes.node;
export const propTypesClassName = PropTypes.string;
