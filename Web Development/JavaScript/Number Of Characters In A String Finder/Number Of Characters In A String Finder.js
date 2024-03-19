let str = prompt(
  "Enter A Word Or A Paragraph To Check Its Character Length In The Console"
);

let result;

let count = 0;

for (result of str) {
  count++;
}

console.log(count);
