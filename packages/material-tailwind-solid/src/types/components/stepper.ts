/**
 * This file contains the types and prop-types for Stepper and Step components.
 */
import type { JSXElement } from "solid-js";
// typescript types
export type activeStep = number;
export type isLastStep = (arg: boolean) => void;
export type isFirstStep = (arg: boolean) => void;
export type children = JSXElement;
