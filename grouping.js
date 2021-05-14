function grouping(array, rule) {
  let Object = {};
  let key = array.map((el) => rule(el));
  for (let i = 0; i < array.length; i++) {
    let leng = array[i].length;
    key.push(leng);
    if (!(key[i] in Object)) {
      Object[key[i]] = [array[i]];
    } else Object[key[i]].push(array[i]);
  }
  return Object;
}

console.log(grouping(["one", "two", "three"], (el) => el.length));
