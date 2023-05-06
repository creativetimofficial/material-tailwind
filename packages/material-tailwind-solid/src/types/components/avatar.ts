/**
 * This file contains the types for Avatar component.
 */

// typescript types
export type variant = (typeof propTypesVariant)[number];
export type size = (typeof propTypesSize)[number];

// javascript prop-types
export const propTypesVariant = ["rounded", "circular"] as const;
export const propTypesSize = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;
