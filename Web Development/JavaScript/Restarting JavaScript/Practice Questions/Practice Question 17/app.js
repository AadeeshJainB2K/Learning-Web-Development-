let n = 5;
let array = [];

for (let i = 1; i <= n; i++) {
  array.push(i);
}

let sum = array.reduce((r, c) => {
  return r + c;
});

console.log(sum);

let product = array.reduce((r, c) => {
  return r * c;
});

console.log(product);
