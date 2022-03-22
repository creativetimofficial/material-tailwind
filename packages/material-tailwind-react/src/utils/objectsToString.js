import objectsToArray from "utils/objectsToArray";

export default function objectsToString(object) {
  return objectsToArray(object).join(" ");
}
