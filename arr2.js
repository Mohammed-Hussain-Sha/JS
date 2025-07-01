let students = ["Ashaar", "Aslam", "Hussain", "Abdullaah"];
for (let i = 0; i < students.length; i++) {
  console.log(`Student #${i + 2} => ${students[i]}`);
}
for (let i in students) {
  console.log(`Student # ${i + 2} => ${students[i]}`);
}
let sales = [500, 1000, 4000];
let totalSales = 0;
for (let sale of sales) {
  totalSales = totalSales + sale;
}
sales.forEach((sale) => {
  totalSales = totalSales + sale;
});
console.log(totalSales);
