export default function objectsToArray<K, T extends { [key: string]: K | T }>(object: T) {
  let result: K[] = [];

  Object.values(object).forEach((value) => {
    if (typeof value === "string") {
      result = [...result, value];
    } else if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      //@ts-ignore
      result = [...result, ...objectsToArray(value as T)];
    }

    return undefined;
  });

  return result;
}
