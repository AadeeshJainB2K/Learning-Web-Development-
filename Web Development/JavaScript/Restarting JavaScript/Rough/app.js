let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];

let output = arr.reduce((result, current) => {
  return result > current ? result : current;
});

console.log(output);
