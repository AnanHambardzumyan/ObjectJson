let zipped = {};
let i;
let key = ["a", "b", "c"];
let value = [1, 2];

for (let i = 0; i < key.length; i++) {
  zipped[key[i]] = value[i];
}
console.log(zipped);
