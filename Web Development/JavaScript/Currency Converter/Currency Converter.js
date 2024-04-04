const currencyAPI =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

currencyAPI_Data = async () => {
  let rawData = await fetch(currencyAPI);
  let usableData = await rawData.json();
  return usableData;
};

let options = document.querySelector(".countries");

for (selector of options) {
  let Countries = selector.createElement("select");
  Countries.innerText = "Br";
  selector.append(countries);
}

for (i in countryList) {
  let a = 0;
  console.log(i, countryList[i]);
  a++;
}
