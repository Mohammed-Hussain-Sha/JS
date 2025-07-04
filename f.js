const numbers = [2, 4, 6, 8, 10];
let num2 = numbers.map((n) => (n % 2 == 0 ? n * 2 : n + 1));
console.log(num2);
