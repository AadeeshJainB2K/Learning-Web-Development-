let marks = prompt("enter your marks : ");

if (marks >= 90 && marks <= 100) {
  alert("A");
} else if (marks >= 80 && marks < 90) {
  alert("B");
} else if (marks >= 60 && marks < 80) {
  alert("C");
} else if (marks >= 50 && marks < 60) {
  alert("D");
} else if (marks >= 0 && marks < 50) {
  alert("F");
}
