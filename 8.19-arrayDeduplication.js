function arrayDeduplication (arr) {
  let set = new Set(arr);
  return Array.from(set);
}

console.log(arrayDeduplication(['s', 'a', 's', 'b', 'a', 1, '1', 1]));