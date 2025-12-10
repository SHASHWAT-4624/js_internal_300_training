
//to execute this file use "node day2_task1.js" in terminal   


console.log("=== PART A : BASIC PROGRAMS ===");

// 1. Sum of two numbers
let a = 10, b = 20;
console.log("1. Sum:", a + b);

// 2. Print "Hello <name>"
let name = "Shashwat";
console.log("2. Hello " + name);

// 3. Even/Odd check
let num = 7;
console.log("3. Even/Odd:", num % 2 === 0 ? "Even" : "Odd");

// 4. Celsius → Fahrenheit
let c = 30;
let f = (c * 9/5) + 32;
console.log("4. Fahrenheit:", f);

// 5. Max among 3 numbers
let x = 12, y = 25, z = 9;
console.log("5. Max:", Math.max(x, y, z));

// 6. Find string length
let str = "JavaScript";
console.log("6. String Length:", str.length);

// 7. Toggle boolean
let bool = true;
bool = !bool;
console.log("7. Toggle Boolean:", bool);

// 8. Concatenate strings
let s1 = "Hello ", s2 = "World";
console.log("8. Concatenated:", s1 + s2);

// 9. Positive/Negative/Zero
let n = -5;
console.log("9. Number type:", n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero");

// 10. var / let / const example
var x1 = 10;
let x2 = 20;
const x3 = 30;
console.log("10. var/let/const:", x1, x2, x3);

// 11. Multiplication table
console.log("11. Table of 5:");
for (let i = 1; i <= 10; i++) console.log(`5 x ${i} = ${5 * i}`);

// 12. Sum of first 10 natural numbers
let sum10 = 0;
for (let i = 1; i <= 10; i++) sum10 += i;
console.log("12. Sum of 1-10:", sum10);

// 13. Switch-case → day name
let day = 3;
switch (day) {
    case 1: console.log("13. Monday"); break;
    case 2: console.log("13. Tuesday"); break;
    case 3: console.log("13. Wednesday"); break;
    default: console.log("13. Invalid");
}

// 14. Function → Factorial
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) fact *= i;
    return fact;
}
console.log("14. Factorial(5):", factorial(5));

// 15. Function → Voting eligibility
function canVote(age) { return age >= 18 ? "Eligible" : "Not Eligible"; }
console.log("15. Voting Eligibility:", canVote(17));


console.log("\n=== PART B : MODERATE PROGRAMS ===");

// 16. Prime check
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) return false;
    return true;
}
console.log("16. Prime(13):", isPrime(13));

// 17. Sum of digits
function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log("17. Sum of digits (123):", sumDigits(123));

// 18. Reverse string (without reverse())
function reverseStr(s) {
    let rev = "";
    for (let i = s.length - 1; i >= 0; i--)
        rev += s[i];
    return rev;
}
console.log("18. Reverse:", reverseStr("hello"));

// 19. Grade calculation
function grade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 50) return "C";
    else return "Fail";
}
console.log("19. Grade(82):", grade(82));

// 20. Mini calculator (+ - * /)
function calc(a, b, op) {
    switch(op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Error";
        default: return "Invalid Operator";
    }
}
console.log("20. Calc 10 * 3:", calc(10, 3, "*"));

// 21. Count vowels in string
function countVowels(s) {
    let cnt = 0;
    for (let ch of s.toLowerCase())
        if ("aeiou".includes(ch)) cnt++;
    return cnt;
}
console.log("21. Vowels in 'education':", countVowels("education"));

// 22. Fibonacci series up to n terms
function fibonacci(n) {
    let a = 0, b = 1, arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
    return arr;
}
console.log("22. Fibonacci(7):", fibonacci(7));

// 23. Min & Max from array
function minMax(arr) {
    return { min: Math.min(...arr), max: Math.max(...arr) };
}
console.log("23. Min/Max:", minMax([4, 9, 1, 7]));

// 24. Simple Menu Program using switch-case
function menu(choice, a, b) {
    switch(choice) {
        case 1: return a + b;
        case 2: return a - b;
        case 3: return a * b;
        case 4: return b !== 0 ? a / b : "Error";
        default: return "Invalid";
    }
}
console.log("24. Menu (1:Add):", menu(1, 5, 3));

// 25. Armstrong number check
function isArmstrong(n) {
    let temp = n, sum = 0;
    let digits = n.toString().length;
    while (temp > 0) {
        let d = temp % 10;
        sum += Math.pow(d, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === n;
}
console.log("25. Armstrong(153):", isArmstrong(153));
