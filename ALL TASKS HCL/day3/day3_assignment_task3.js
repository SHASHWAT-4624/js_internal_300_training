console.log("=== TASK 1: Student Marks Average ===");

let marks = [80, 90, 70, 85, 95];
let avg = marks.reduce((sum, val) => sum + val, 0) / marks.length;
console.log("Average Marks:", avg);

console.log("=== TASK 2: Filter Even Numbers ===");

let numbers = [1,2,3,4,5,6,7,8,9];
let evens = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evens);

console.log("=== TASK 3: Shopping Cart Total ===");

let cart = { item: "Laptop", price: 45000, quantity: 2 };
let totalBill = cart.price * cart.quantity;
console.log("Item:", cart.item);
console.log("Total Bill:", totalBill);

console.log("=== TASK 4: Movie List ===");

let movies = ["Inception", "Interstellar", "Dhoom", "KGF"];
movies.push("Avatar");
movies.pop();
for (let movie of movies) console.log(movie);

console.log("=== TASK 5: User Profile JSON ===");

let user = { name: "Aman", age: 21, course: "JS" };
let jsonData = JSON.stringify(user);
let userObj = JSON.parse(jsonData);
console.log("JSON Data:", jsonData);
console.log("Back to Object:", userObj);

console.log("=== BONUS TASK 6: Find Max Without Built-in ===");

let arr = [10, 40, 25, 80, 15];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
}
console.log("Max Number:", max);

console.log("=== TASK 7: Transform Names Using map() ===");

let names = ["ram", "shyam", "mohan"];
let upperNames = names.map(n => n.toUpperCase());
console.log("Transformed Names:", upperNames);
