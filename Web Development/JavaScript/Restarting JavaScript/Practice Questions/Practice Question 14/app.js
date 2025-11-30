const numberOfVowels = (str) => {
  count = 0;
  s = str.trim().toLowerCase();
  for (let i of s) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("Aadeesh"));
