let Marks = prompt("Enter Your Marks , So I Can Tell You Your Grades");
if (Marks >= 80 && Marks <= 100) {
  console.log("Your Greade is A");
} else if (Marks >= 70 && Marks < 89) {
  console.log("Your Greade is B");
} else if (Marks >= 60 && Marks < 69) {
  console.log("Your Greade is C");
} else if (Marks >= 50 && Marks < 59) {
  console.log("Your Greade is D");
} else if (Marks >= 0 && Marks < 49) {
  console.log("Your Greade is E");
} else {
  console.log("Enter A Valid Number");
}
