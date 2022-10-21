// let month = 'April'

// switch(month) {
//   case 'March':
//   case 'April':
//   case 'May':
//     console.log("Spring")
//     break
//   case 'June':
//   case 'July':
//   case 'April':
//     console.log('Summer')
//     break
//   case 'September':
//   case 'October':
//   case 'November':
//     console.log('Fall')
//     break;
//   case 'Desember':
//   case 'Janjury':
//   case 'Febrary':
//     console.log('Winter')
//     break;
//   default:
//     console.log('Try another number')
// }

// let b = 'a'

// let c = 

// console.log(b.toUpperCase())


// function calculate(num1, operation, num2) {
//   if (operation == '+') {
//     return num1 + num2;
//   } else if (operation == '-') {
//     return num1 - num2;
//   } else if (operation == '*') {
//     return num1 * num2;
//   } else if (operation == '/') {
//     if (num1 == 0 || num2 == 0 || num1 == '', num2 == '') {
//       return null;
//     }
//     return num1 / num2;
//   } 
// }

// console.log(calculate(-1, '/', 'm'))


// function getPlanetName(id){
//   var name;
//   switch(id){
//     case 1:
//       name = 'Mercury'
//       break
//     case 2:
//       name = 'Venus'
//     case 3:
//       name = 'Earth'
//     case 4:
//       name = 'Mars'
//     case 5:
//       name = 'Jupiter'
//     case 6:
//       name = 'Saturn'
//     case 7:
//       name = 'Uranus'
//     case 8:
//       name = 'Neptune'
//   }
  
//   return name;
// }

// console.log(getPlanetName(1))


// function calcType(a, b, res) {
//   let addition = a + b;
//   let subtraction = a - b;
//   let multiplication = a * b;
//   let division = a / b;
//   let rez = prompt ('');
//   if (rez == '+') {
//     return addition
//   } else if (rez == '-') {
//     return subtraction;
//   } else if (rez == '*') {
//     return multiplication
//   } else if ( rez == '/') {
//     return division
//   }
// }

// console.log(calcType(1,2,3))

// var calculate = function calculate(a, o, b) {
//   if (o == '+') {
//     return a + b;
//   } else if (o == "-") {
//     return a - b
//   } else if (o == '*') {
//     return a * b;
//   } else if (o == '/') {
//     if (b == 0) {
//       return null;
//     }
//     return a / b
//   } else {
//     return null;
//   }
// }

// console.log(calculate(0, '/', 9))



// function stringToArray(string){

// 	return string.split(' ')
// }

// console.log(stringToArray('i lave mam')) 


// function word (number) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return 'FizzBuzz'
//   } else if (number % 3 === 0) {
//     return 'Fizz'
//   } else if (number % 5 === 0) {
//     return 'Buzz'
//   }
//   return number 
// }

// console.log(word(0))

// let n = target('how many fib numbers')
// let f0 = 0
// let f1 = 1
// loop 1 to n
//   fib = fo + f1
//   f0 = f1
//   f1 = fib
//   DISPLEY(FIB)

let n = 10
let f0 = 0
let f1 = 1
let fib


for (let i = 0; i < n; i++) {
  fib = f0 + f1
  f0 = f1
  f1 = fib
  console.log(fib)
}

