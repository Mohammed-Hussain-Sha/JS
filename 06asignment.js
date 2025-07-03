let numbers = [50,40,60];
function calculatorfactorial(n) {
    let fact = 1;
    for (let i = 1; i<=n; i++) {
        fact = fact*i;
    }
    return fact;
}
for (const number of numbers) {
    console.log(`Factorial of ${number} = ${calculatorfactorial(number)}`);
}