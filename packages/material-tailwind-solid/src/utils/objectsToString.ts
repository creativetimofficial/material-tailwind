import objectsToArray from "./objectsToArray";

export default function objectsToString<T extends { [key: string | number]: any | T }>(object: T) {
  return objectsToArray(object).join(" ");
}
