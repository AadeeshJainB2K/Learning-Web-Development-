let marks = [85, 97, 44, 37, 76, 60];
let i = 0;
for (var sum = 0; i < marks.length; i++) {
  sum = marks[i] + sum;
}
let average = sum / marks.length;
console.log(average);
