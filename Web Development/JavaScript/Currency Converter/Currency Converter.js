const currencyAPI = fetchJSON(
  `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd`
);
rate = json[usd][inr];
console.log(rate);
