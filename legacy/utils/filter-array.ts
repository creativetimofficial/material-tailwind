export default function filterArray(array) {
  return array.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? filterArray(toFlatten) : toFlatten
    );
  }, []);
}
