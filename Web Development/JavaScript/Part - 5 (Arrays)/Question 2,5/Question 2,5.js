let price = [250, 645, 300, 900, 50];
let finalPrice;
for (i = 0; i < price.length; i++) {
  finalPrice = price[i] - [(price[i] / 100) * 10];
  price[i] = finalPrice;
}
console.log(price);
