function findMatch(data, find, defaultValue) {
  const founded = data.findIndex((el) => el === find);

  return founded >= 0 ? find : defaultValue;
}

export default findMatch;
