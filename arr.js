let fruits = ["Apple", "Banana", "Mango"];

let numbers = [20, 40, 60, 80];
let names = ["Buster", "Edgar", "Sam"];
let mixed = [74, "Hi", true];

let languages = ["HTML", "CSS", "JS"];
languages[2] = "JavaScript";

let colors = ["Blue", "Green", "Red"];
console.log(colors[1]);

let animals = ["Panther", "Deer", "Horse"];
console.log(animals.length);

let nums = [1, 2, 3];
nums.push(4);
nums.pop();

let queue = ["X", "Y"];
queue.unshift("Start");
queue.shift();

let chocolates = ["Munch", "Diary Milk"];
console.log(chocolates.indexOf("Diary Milk"));
console.log(chocolates.includes("Galaxy"));

let arr = [20, 40, 60, 80];
let part = arr.slice(1, 3);

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);

let Games = ["Candy Crush", "Clash of Clan"];
for (let i = 0; i < Games.length; i++) {
  console.log(Games[i]);
}

for (let name of names) {
  console.log(name);
}

names.forEach((n) => console.log(n));

function printArray(arr) {
  arr.forEach((item) => console.log(item));
}

printArray(["Apple", "Banana", "Mango"]);
