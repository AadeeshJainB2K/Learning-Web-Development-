let Chaccha = {
  fullName: "Abdul",
  education: "notAvailabeInPakistan",
  age: 35,
  crimes: "9/11_Attack",
};

let keys;

for (keys in Chaccha) {
  console.log("Key = ", keys, "  ", "Value = ", Chaccha[keys]);
}
