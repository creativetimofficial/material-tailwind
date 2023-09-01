type Entry = {
  [key: string]: any;
};

/**
 * Parse object entries from string to array.
 * @param entry Object
 * @returns Object
 */
export function parseObject(entry: Entry) {
  const result = {};
  const defaultProps = entry?.["defaultProps"];

  for (const key in entry) {
    if (key !== "defaultProps") {
      if (typeof entry[key] === "object") {
        Object.assign(result, {
          [key]: parseObject(entry[key]),
        });
      } else {
        Object.assign(result, {
          [key]: entry[key].split(" "),
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
