export type colors = "blue-grey" | "grey" | "brown" | "deep-orange" | "orange" | "amber" | "yellow" | "lime" | "light-green" | "green" | "teal" | "cyan" | "light-blue" | "blue" | "indigo" | "deep-purple" | "purple" | "pink" | "red";

export type animate = {
  mount?: Object,
  unmount?: Object,
}

export type dismiss = {
  enabled?: boolean;
  escapeKey?: boolean;
  referencePointerDown?: boolean;
  outsidePointerDown?: boolean;
  ancestorScroll?: boolean;
  bubbles?: boolean;
}

export type offset = number | {
  mainAxis?: number;
  crossAxis?: number;
  alignmentAxis?: number | null;
}