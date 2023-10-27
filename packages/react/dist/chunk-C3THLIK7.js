"use client";

// src/utils/parse-object.ts
function parseObject(entry) {
  const result = {};
  const defaultProps = entry == null ? void 0 : entry["defaultProps"];
  for (const key in entry) {
    if (key !== "defaultProps") {
      if (typeof entry[key] === "object") {
        Object.assign(result, {
          [key]: parseObject(entry[key])
        });
      } else {
        Object.assign(result, {
          [key]: entry[key].split(" ")
        });
      }
    }
  }
  return defaultProps ? {
    ...result,
    defaultProps
  } : result;
}

export {
  parseObject
};
