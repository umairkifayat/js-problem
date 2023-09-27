// const firstname = ["Umair", "maria", "saman", "uzair"];
// const lastnames = ["kifayat", "kifayat", "kifayat", "kifayat"];
// const p = document.querySelector("p")
// const fullname = []

// for (let i = 0; i < firstname.length; i++) {
//     for (let j = 0; j< lastnames.length; j++) {
//         fullname.push(firstname[i] + lastnames[j])
//         // console.log(fullname);
//         p.innerHTML = `${fullname}`

//     }

// }


// array method 
// let array = ["umair", "uzair","maria",'ainee',"farzana"];

// array.push("kifayat");
// array.pop();
// array.shift();
// array.unshift("kifayat");
// array.splice(4,4, "kifayat");
// console.log(typeof array);
// const user = prompt("enter your family name");
// if (user === array) {
//     alert("correct")

// } else {
//     alert("try again")
// } 
// const para =document.querySelector("p");
// const array = ["umair", " kifayat"];

// function log(params) {
//   return array.split().reverse().join()

// }

// console.log(array);


// function reverseString(inputString) {
//     // Split the string into an array of characters, reverse it, and then join it back into a string.
//     return inputString.split('').reverse().join('');
//   }

//   const originalString = "Hello, World!";
//   const reversedString = reverseString(originalString);
//   console.log(`Original String: ${originalString}`);
//   console.log(`Reversed String: ${reversedString}`);



// function reversedString(inputString) {
//     return inputString.split("").reverse("").join("")
// }
// const original = "Umair kifayat";
// const reverse = reversedString(original);
// console.log(reverse);


// let fruits = ['grapes', 'apple', 'watermelon', 'mango', 'peach', 'nashpati'];
// let eaten = fruits.split("")
// console.log(eaten);



// const text = "one,two,three,four,five";
// const parts = text.split("");
// console.log(parts); // ["one", "two", "three"]
// const n = 5;
// const result = factorial(n)
// function factorial(n){
// if (n === 0 ||n === 1 ) {
//     return 1
// }else{
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result  *= i

//     }
//     return result
// }
// }
// console.log(`the factorial of${n} or ${result}`);


// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 2; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }

// // Example usage:
// const n = 5;
// const result = factorial(n);
// console.log(`The factorial of ${n} is ${result}`);



// Problem 1: Write a JavaScript function that checks if a given number is prime. A prime number is a positive
//  integer greater than 1 that is divisible only by 1 and itself.



// const prime = "10";
// const result = integer(prime)


// function integer(prime) {
//     if (prime % 3 ) {
//         console.log("if chal gya ha");
//     }else{
//         console.log("else chal gya ");
//     }
// }
// const prime = "11";
// const result = parseInt(prime);

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// if (isPrime(result)) {
//     console.log(result + " is a prime number");
// } else {
//     console.log(result + " is not a prime number");
// }






// const array = ['1','2','3','4','5'];
// const result = calculatesum(array);


// function calculatesum() {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]

//     }
//     return sum
// }

// console.log(result);


// const array = ['2','3','4','5','6','7'];
// const result = calculate(array)

// function calculate() {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]

//     }
//     return sum
// }
// console.log(result);


// const numbers = [12, 7, 45, 99, 23, 54];
// const result = largestNumbers(numbers)


// function largestNumbers(arr) {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i]
// }


//     }
//     return largest
// }
// console.log(result);


// const numbers = [10,202,2,0,1,,4,8,25222222,22,22,8,8,66,100000000000000000]
// const result = findNumbers(numbers)
// function findNumbers(arr) {
//     let largest = arr[0]
//     // console.log(numbers);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest += arr[i]
//         }

//     }
//     return largest
// }

// console.log(result);


// const numbers = [10,202,25222222,22,22,8,66,0,0.5]
// const result = smallnumber(numbers)


// function smallnumber(arr) {
//     let small = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < small) {
//             small =+ arr[i]
//         }

//     }
// return small    
// }
// console.log(result);

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// const result = findnumbers(numbers);



// function findnumbers(arr) {
//     let small = arr[0];
//     for (let i = 0; i < arr.length; i++) {
// if (arr[i] < small) {
//     small = arr[i]
// }        
//     }
//     return small
// }





// console.log(result);




// const original = 'hello world'
// const result = reversevalue(original)


// function reversevalue(input) {
//      return   input.split('').reverse().join();
// }

// console.log(result);


// function reversedString(inputString) {
//     return inputString.split("").reverse("").join("")
// }
// const original = "Umair kifayat";
// const revers = reversedString(original);
// console.log(revers);



// const user = prompt("Enter your city names")
// const city = ["karachi,oamn ,saudia,dubai"]


// function names() {

//         for (let i = 0; i < city.length; i++) {
//                 if (user.toLowerCase() === city[i]) {
//                         console.log("city is  found");

//                         return;

//                 }
//         }
//         console.log("city is not found");

// }
// names()


// const user = prompt("Enter your city name");
// const cities = ["karachi", "oman", "saudia", "dubai"];

// function checkCity() {
//     for (let i = 0; i < cities.length; i++) {
//         if (user.toLowerCase() === cities[i]) {
//             console.log("City found in the array.");
//             return; // Exit the function when a match is found.
//         }
//     }
//     console.log("City not found in the array.");
// }



const user = prompt("enter your city name");
const cities = ["Islamabad","umair","uzair"]

function checkCity() {
        for (let i = 0; i < cities.length; i++) {
                if (user === cities[i]) {
                        console.log("city found in the array");
       return;
                }
        }
       console.log("not found");
}

checkCity();



