const noOfVovels = (str) => {
  let num = 0;
  for (i of str) {
    if (i == "a" || i == "A") {
      num++;
    }
    if (i == "e" || i == "E") {
      num++;
    }
    if (i == "i" || i == "I") {
      num++;
    }
    if (i == "o" || i == "O") {
      num++;
    }
    if (i == "u" || i == "U") {
      num++;
    }
  }
  return num;
};
console.log(noOfVovels("Aadeesh Jain"));
