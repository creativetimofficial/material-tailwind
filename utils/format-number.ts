export function formatNumber(number, decPlaces = 0) {
  if (typeof number !== "number" || isNaN(number)) return number;

  const factor = Math.pow(10, decPlaces);
  const abbrev = ["K", "M", "B", "T"];

  for (let i = abbrev.length - 1; i >= 0; i--) {
    const size = Math.pow(10, (i + 1) * 3);

    if (number >= size) {
      let formatted = Math.round((number * factor) / size) / factor;

      if (formatted === 1000 && i < abbrev.length - 1) {
        formatted = 1;
        i++;
      }

      return formatted + abbrev[i];
    }
  }

  return number;
}

export default formatNumber;
