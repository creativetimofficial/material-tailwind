import { twMerge } from "tailwind-merge";

type Entry = {
  [key: string]: any;
};

/**
 * Parse object entries from array to string and merge the tailwind css classes using `tailwind-merge`.
 * @param entry Object
 * @returns Object
 */
export function mergeTheme(entry: Entry) {
  const result = {};
  const defaultProps = entry?.["defaultProps"];

  for (const key in entry) {
    if (key !== "defaultProps") {
      if (Array.isArray(entry[key])) {
        Object.assign(result, {
          [key]: twMerge(entry[key].join(" ")),
        });
      } else {
        Object.assign(result, {
          [key]: mergeTheme(entry[key]),
        });
      }
    }
  }

  return defaultProps
    ? {
        ...result,
        defaultProps,
      }
    : result;
}

export default mergeTheme;
