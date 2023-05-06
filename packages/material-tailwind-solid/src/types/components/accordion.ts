// generic types
import type { JSX } from "solid-js";
import type { animation } from "../generic";

/**
 * This file contains the types and prop-types for Accordion, AccordionHeader, AccordionBody and AccordionContext components.
 */

// typescript types
export type open = boolean;
export type icon = JSX.Element;
export type animate = animation;
export type disabled = boolean;
export type className = string;
export type children = JSX.Element;

// // javascript prop-types
// export const propTypesOpen: any = PropTypes.bool.isRequired;
// export const propTypesIcon: any = PropTypes;
// export const propTypesAnimate: any = propTypesAnimation;
// export const propTypesDisabled: any = PropTypes.bool;
// export const propTypesClassName: any = PropTypes.string;
// export const propTypesValue: any = PropTypes.instanceOf(Object).isRequired;
// export const propTypesChildren: any = PropTypes.node.isRequired;
