import objectsToArray from "./objectsToArray";

export default function objectsToString(object) {
  return objectsToArray(object).join(" ");
}
