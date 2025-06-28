let percent = 78;
let grade = "";
if (percent >= 85) {
  grade = "A";
} else if (percent >= 65) {
  grade = "B";
} else if (percent >= 50) {
  grade = "C";
} else if (percent >= 35) {
  grade = "D";
}
let result = "";
switch (grade) {
  case "A":
    result = "You scored distinction";
    break;
  case "B":
    result = "You scored first class";
    break;
  case "C":
    result = "You scored second class";
    break;
  case "D":
    result = "You scored third class";
    break;
}
console.log(`Grade Obtained - ${grade}`);
console.log(`Result - ${result}`);
