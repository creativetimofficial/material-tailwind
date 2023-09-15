export default function objectsToArray(object) {
  let result = [];

  Object.values(object).forEach((value) => {
    if (typeof value === "string") {
      result = [...result, value];
    } else if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      result = [...result, ...objectsToArray(value)];
    }

    return undefined;
  });

  return result;
}
