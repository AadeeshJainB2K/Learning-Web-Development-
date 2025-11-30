let prices = [250, 645, 300, 900, 50];

let j = 0;

for (i of prices) {
  prices[j] -= prices[j] / 10;
  j++;
}

console.log(prices);
