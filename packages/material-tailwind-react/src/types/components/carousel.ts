import PropTypes from "prop-types";

/**
 * This file contains the types and prop-types for Carousel component.
 */

// typescript types
export type children = React.ReactNode | React.ReactNode[];
export type prevArrow = (args: {
  loop: boolean;
  handlePrev: () => void;
  activeIndex: number;
  firstIndex: boolean;
}) => React.ReactNode | void;
export type nextArrow = (args: {
  loop: boolean;
  handleNext: () => void;
  activeIndex: number;
  lastIndex: boolean;
}) => React.ReactNode | void;
export type navigation = (args: {
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
  length: number;
}) => React.ReactNode | void;
export type autoplay = boolean;
export type autoplayDelay = number;
export type transitionDuration = number;
export type loop = boolean;
export type className = string;

// javascript prop-types
export const propTypesClassName: any = PropTypes.string;
export const propTypesPrevArrow: any = PropTypes.func;
export const propTypesNextArrow: any = PropTypes.func;
export const propTypesNavigation: any = PropTypes.func;
export const propTypesAutoplay: any = PropTypes.bool;
export const propTypesAutoplayDelay: any = PropTypes.number;
export const propTypesTransitionDuration: any = PropTypes.number;
export const propTypesLoop: any = PropTypes.bool;
export const propTypesChildren: any = PropTypes.node.isRequired;
