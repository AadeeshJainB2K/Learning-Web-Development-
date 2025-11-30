let marks = [85, 97, 44, 37, 76, 60];
let avg = 0;

for (i of marks) {
  avg += i;
}

avg /= marks.length;

console.log(`avg of whole class is ${avg}`);
