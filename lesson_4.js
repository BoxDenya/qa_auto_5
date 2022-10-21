// for (let i = 0; i < 3; i++) {
//     console.log(i)
// }


// let str = "Hello"
// let newStr = ''
// for (let i = 1; i <= 7; i++) {
//     newStr = newStr + str
// }

// console.log(newStr)

// let sum = 0

// for (let i = 1; i <= 10; i++) {
//     sum = sum + i
//     console.log(sum)
// }

// let num = 5
// let result = 1
// for (let i = 1; i <=3; i++) {
//     result = result * num
// }

// console.log(result)

// const arr = []
// const arr1 = new Array()

// const arr2 = ['a', 'b', 'c', 'd']
// console.log(arr2.length)
// console.log(arr2.at(-1)) // метод вывода массива по индексу

// let str = 'JavaScript'

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// let newS = '';
// for (let i =  0; i < str.length; i++) {
//     newS = newS + str[i]; 
    
// }
// console.log(newS)

// let x = 'Palindrome';

// let str1 = '';

// for (let i = x.length - 1; i >= 0; i--) {
//     str1 = str1 + x[i]
// }

// console.log(str1)

// const numbers = [45, 4, 9, 16, 25]

// let txt = '';
// for (let x in numbers) {
//     txt += numbers[x] + ', ';
    
// }
// console.log(txt)


// const cars = ['BMW', 'Volvo', 'Mini'];

// let text = '';

// for (let x of cars) {
//     text += x + ' ';
// }

// console.log(text)

// let iterable = [3, 5, 7];

// for (let i in iterable) {
//     console.log(i); // выведет 0, 1, 2
// }

// for (let y of iterable) {
//     console.log(y); // выведет 3, 5, 7
// }



// var countSheep = function (num){
    
//     let sheep = '';
//     for (let i = 1; i <= num; i++){
//       sheep = sheep + [i] + ' sheep...'
      
//     }
//     return sheep
//   }

//   console.log(countSheep(2))

// function sum (numbers) {
//     "use strict";
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];  
//   }
//   return sum
// };

// console.log(sum([]))


// function squareSum(numbers){
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i] ** 2 
//     console.log(sum)
//   }
//   return sum
// }

// console.log(squareSum(5))


// const arr = [];
// let x = 0
// for (let i = 0; i <= 20; i++) {
//     if (i % 5 != 0) {
//       arr[x] = i
//       x++
//     }
// }

// console.log(arr)


// const arr = [];
// for (let i = 0; i <= 20; i++) {
//     if (i % 5 != 0) {
//       arr.push(i);
//     }
// }

// console.log(arr)


// for (let i = 1; i <= 5; i++) { //отвечает за количество строк
//   let str = "";
//   for (let j = 1; j <= i ; j++) { //отвечает за наполнение строки
//     str = str + j;
//   }
//     console.log(str);
// }

// function sc(floor){
  
//   if (floor <= 1) return '';
//   let str = '';
//   for (let i = floor; i > 1; i--){
//     str = str + 'Aa~ ';
//   }
//   str = str + 'Pa!';
  
//   if (floor <= 6) {
//     str = str + ' Aa!'
//   }

//   return str;
// }

// console.log(sc(9))



// function generateIntegers(m, n) {
//   let arr = []
//   for (let i = m; i <= n; i++) {
//     arr += i
//   }
//     return arr
// }

// console.log(generateIntegers(2, 5))


// let n = 3

// let num = ''

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     num += 'I'
//   }
//   num += '\n'
// }
// console.log(num)



// let n = 6

// let str = ''

// for (let i = 1; i <= n; i++) {
//   str += 'I'  
//   str += '\n'
//   str += ' '.repeat(i)
  
// }

// console.log(str)


// function drawStairs(n) {
//   let str = '';
//   for (let i = 1; i <= n; i++) {
    
  
//     str += ' '.repeat(i) + 'I' + '\n'
//   }
//   return str
// }

// console.log(drawStairs(3))


// function arr(n) {
//   let arr = []
//   if (n == null) return [];
//   for (let i = 0; i < n; i++) {
//     arr[i] = i;
//   }
//   return arr;
// }


// console.log(arr(5))


// function generateIntegers(m, n) {
//   let arr = []
//   for (let i = m; i <= n; i++) {
//     arr[i] = i
//   }
//   return arr
// }


// console.log(generateIntegers(2, 5))


// function noBoringZeros(n) {
//   while (n % 10 == 0 && n != 0) {
//     n = n / 10
//   }
//   return n
// }


// console.log(noBoringZeros(258))


// function switchItUp(number){
//   switch (number) {
//       case 1 :
//         return 'One';
//       case 2:
//         return 'Two';
//       case 3:
//         return 'Three';
//       case 4:
//         return 'Four';
//       case 5:
//         return 'Five';
//       case 6:
//         return 'Six';
//       case 7:
//         return 'Seven';
//       case 8:
//         return 'Eight';
//       case 9:
//         return 'Nine'
//   }
// }


// console.log(switchItUp(1))


// function calculate(a, o, b) {
//   let result = 0; 
   
//   if(o === "+") { 
//     return result = a + b;
//     } else if (o === "-") {
//        return result = a - b;
//     } else if (o === "/" && b != 0) {
//         return result = a / b;     
//     } else if (o === "*") {
//         return result = a * b;
//     }  else {
//       return null
//     } 
//   return result; 
//  }

//  console.log(calculate(7, '/', 0))


// let height = 10;
// for (let i = 0; i < height; i++){
//   let str = '';
//   for (let j = 0; j < height - i; j++){
//     str += ' ';
//   }
//     for(let star = 0; star < i; star++) {
//       str += '*';
//     }
//     str += '*'

//       for (let rStar = 0; rStar < i; rStar++){
//         str += '*';
//       }
//   console.log(str)
// }


// function check(a, x) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === x) {
//       return true;      
//     }    
//   }
//   return false;
// }


// console.log(check([1,2,3,4,5]), 9)


// function numberToPower(number, power){
//   if (number > 0) {    
//     return number ** power;
//   } else if (power == 0) {
//     return 1;
//   } else {
//     return number;
//   }
// }

// console.log(numberToPower(0,0))


// console.log(0**1)


// function maxDiff(list) {
  
//   if (list.length <= 1) {
//     return 0;
//   }
  
//   let min = list[0];
//   let max = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (min > list[i]) {
//       min = list[i];
//     } else if (max < list[i]) {
//       max = list[i];
//     }
//   }
//   let rezult = max - min
//   return rezult
// };

// console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]))


// function describeAge(age) {
//   (age <= 12 || age >= 13 && age <= 17 ) ? "You're a(n) kid" : "You're a(n) teenager";
 
//   (age >= 18 && age <= 64) ? "You're a(n) adult" : "You're a(n) elderly";   
//   return age
// }

// console.log(describeAge(64))




// function findNumbers (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof(arr[i]) === 'number') 
//       console.log(arr[i])
    
//       for (let j = 0; j < arr[i].length; j++) {
//         if (typeof(arr[i][j]) === 'number')
//           console.log(arr[i][j])        
//       }      
//   }
// }

// let arr1 = [1 , 4, "dgld", [1, 3, 'kdfgm', 'dfgmdkg'], 4, 5]


// findNumbers(arr1)

// function great (name) {
//   return  `${name}, Hi!`
// }

// console.log(great('Denis'))


// function calculator(a, b, operator) {
//   switch (operator) {
//     case "+":
//       return a + b;
//     case '-':
//       return a - b;
//     case '*':
//       return a * b;
//     case '/':
//       if (b === 0) {
//         return 'На ноль делить нельзя'
//       }
//       return a / b;
//   }

// }

// console.log(calculator(2, 0, '+'))

//______________________



// Определяем простое ли число

// function isPrime(number) {
//   if (number > 1) {
//     for (let i = 2; i < number; i++) {
//       if (number % i == 0) {
//         return false;
//       }
//     }  
//     return true;
//   }

//   return false;
// }

// console.log(isPrime(-1))

// function haveManyPrimes(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (isPrime(arr[i])) {
//       count ++;
//     }
//   }
//   return count;
// }



// console.log(haveManyPrimes([2,4,6,7,8,9,10,11]))


//_________________________________


// var calculate = function calculate(a, o, b) {
//   if (o == '+') {
//     return a + b;
//   } else if (o == '-') {
//     return a - b;
//   } else if (o == '*') {
//     return a * b;
//   } else if (o == '/' && b != 0) {
//     return a / b;
//   }
//   return null;
// }

// console.log(calculate(2, '/', 3))


//______________________________________


// Дан массив целых чисел.

// Возвращает массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных
// чисел. 0 не является ни положительным, ни отрицательным.

// Если вход представляет собой пустой массив или имеет значение null, верните пустой массив.


// function countPositivesSumNegatives(input) {
//   let pos = 0
//   let sum = 0
//   for(let i = 0; i < input.length; i++) {
//    if (input[i] > 0) {
//      pos++;
//    }
//     if (input[i] < 0) {
//      sum += input[i];
//    }
//   }
//   return [pos, sum];
// }


//__________________________

// function weatherInfo (temp) {
//   var c = convertToCelsius(temp)
//   if (c < 0)
//     return (c + " is freezing temperature")
//   else
//     return (c + " is above freezing temperature")
// }

// function convertToCelsius (temperature) {
//   var celsius = (temperature - 32) * (5/9)
//   return celsius
// }


// console.log(weatherInfo(23))

// console.log(convertToCelsius(50))


//___________________________

//  function toJadenCase(str) {
//   let newStr = '';
//   for (let i = 0; i < str.leng; i++) {
//     if (str[i] == ' ') {
//       newStr = str[i + 1].toUpperCase;
//     }
//   }
//   return newStr;
// };

// var str = "How can mirrors be real if our eyes aren't real";

// console.log(toJadenCase(str))


//______________________



// for (let i = 1; i <= 5; i++) {
//   let str = '';
//   for (let j = 1; j <= i; j++) {
//     str += j;
//   }
//   console.log(str)
// }


//__________________________


//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321 
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1


// 1
// 12
// 123
// 1234
// 12345

// let row = 5
// let str = ''

// for (let i = 1; i <= row; i++) {
//   for (let j = 1; j <= i; j++) {
//     str += j % 10;
//   }
//   str += '\n';  
// }

// console.log(str)

//_______________________


//     1
//    12
//   123
//  1234
// 12345

// let row = 5
// let str = ''

// for (let i = 1; i <= row; i++) {
//   str += ' '.repeat(row - i);
//   for (let j = 1; j <= i; j++) {    
//     str += j % 10;
//   }
//   str +='\n';  
// }

// console.log(str)



//_______________________


//     11
//    1212
//   123123
//  12341234
// 1234512345

// let row = 10
// let str = ''
// //top
// for (let i = 1; i <= row; i++) {
//   str += ' '.repeat(row - i);
//   for (let j = 1; j <= i; j++) {    
//     str += j % 10;
//   }
//   for (let k = i - 1; k >= 1; k--) {
//     str += k % 10;
//   }

//   str +='\n';  
// }
// //bottom
// for (let i = row - 1; i >= 1; i--) {
//   str += ' '.repeat(row - i);
//   for (let j = 1; j <= i; j++) {    
//     str += j % 10;
//   }
//   for (let k = i - 1; k >= 1; k--) {
//     str += k % 10;
//   }
  
//   str +='\n';  
// }

// console.log(str)



//___________________

//     *
//    ***
//   *****
//  *******
// *********



//option 1

// let row = 5
// let str = ''

// for (let i = 1; i <= row; i++) {
//   str += ' '.repeat(row - i);
//   for (let j = 1; j <= i; j++) {
//     str += '*';
//   }
//   for (let k = i - 1; k >= 1; k--) {
//     str += '*'
//   }
//   str += '\n';
// }

// console.log(str)


// option 2
// let row = 5
// let str = ''

// for (let i = 0; i < row; i++) {
//   str += '|';
//   for (let j = i; j < row - 1; j++) {
//     str += ' ';
//   }
//   for (let k = 0; k < 2 * i + 1; k++) {
//     str += '*';
//   }
//   for (let j = i; j < row - 1; j++) {
//     str += ' ';
//   }
//   str += '|';
//   str += '\n';
// }

// console.log(str)



//______________________

// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15 


// let row = 5;
// let str = '';

// for (let i = 1; i <= row; i++) {
//   let num = i;
//   for (let j = 1; j <= i; j ++) {
//     str += num + ' ';
//     num = num + (row - j)
//   }
//   str += '\n';
// }

// console.log(str)


// function yourFutureCareer(){
// 	var career =  Math.random()
// 		if (career <= 0.32) {
// 			return  "FrontEnd Developer"
// 		} else if (career <= 0.65){ 
// 			return 'BackEnd Developer';
// 		} else {
// 			return 'Full-Stack Developer';
// 		}
// }

// console.log(yourFutureCareer())


// let arr = [1, 3, 4,  6, 7, 8, ]

// console.log(arr.indexOf(5))
// function blackAndWhite(arr){
// 	if (!Array.isArray(arr)) {
// 	  return "It's a fake array";
// 	} else if (arr.indexOf(5) && arr.indexOf(13)) {
// 	  return "It's a black array";
// 	} else {
// 		return "It's a white array";
// 	}
//   }

//   console.log(blackAndWhite(arr))

// let a = 11

// console.log(arr.at(-1))
// console.log(arr.push(a))
// console.log(arr)
// console.log(arr.pop())


// let str = 'sfs fs'

// function solution(str, ending){
// 	return str.endsWith(ending);
// }


// console.log(solution(str, 'fs'))


// function removeChar(str){
// 	return str.slice(1, -1);
// };


// let str = 'dfgmkfgrmgbrk'

// console.log(removeChar(str))

// function solution(str){
// 	return str.split('').reverse().join('');
// }

// function validatePIN (pin) {
// 	if (pin.length === 4 || pin.length === 6){
// 	  return true;
// 	} else {
// 	  return false;
// 	}
//   }


//   let pin = 'aa123q4'

//   console.log(pin.length)

//   console.log(validatePIN(pin))


let str = "hello world"

console.log(str.split('').join(' '))