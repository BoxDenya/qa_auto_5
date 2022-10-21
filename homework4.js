// Home Work _4
// Выведете с помощью for цикла рецепт всех видов кофе или цену на все размеры стаканчиков, идеально и то, и другое.

// При помощи цикла for выведите чётные числа от 2 до 10

// let n = 10;

// for (let i = 2; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его 
// делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.

// let n = 10

// for (let i = 2; i <= n; i++) {
//     let num = true
//     for (let k = 2; k < i; k++) {
//         if (i % k == 0) {
//             num = false
//         }        
//     }
//     if (num == true) {
//         console.log(i)
//     }
    
// }

//---------------------------------------------

// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let isPrime = ''
// primeNumbers = []

// for (let i = 0; i < num.length; i++) {
//     if (num[i] == 1) {
//         isPrime = num[i] + ' is not prime'
//     } else if (num[i] % 2 ===0 && num[i] != 2) {
//         isPrime = i + ' is not prime'
//     } else if (num[i] != 3 && num[i] % 3 ===0) {
//         isPrime = i + ' is not prime'
//     } else if (num[i] != 5 && num[i] % 5 ===0) {
//         isPrime = i + ' is not prime'
//     } else if (num[i] != 7 && num[i] % 7 ===0) {
//         isPrime = i + ' is not prime'
//     } else {
//         isPrime = '          ' + num[i] + ' is prime'
//         primeNumbers = primeNumbers + num[i] + ' '
//     }
//     console.log(isPrime)    
// }

// console.log(primeNumbers)


// Задача на смекалку
// Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.

// let str = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';

// let str1= '';

// for (let i = 0; i < str.length; i++) {
//     if (str[i] != 'b' || str[i + 1] != 'r') {
//         str1 += str[i] 
//     }
//     else {
//         i++
//     }           
// }

// console.log(str1) 

// console.log(str.replace(/br/g, ''))
// console.log(str.split('br').join(''))


//-------------------------------------

// for (let i = 0; i < str.length; i += 3) {
//     str1 += str[i]
// }

// console.log(str1)
 
// Задачка посложнее* 
//  Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему

// let message = 'Work smarter, not harder! Be on time'
// let keyWord = 'Be happy'
// let encriptedMessage = ''

// for (let i = 0; i < message.length; i++) {

//     for (let e = 0; e < keyWord.length; e++) {
//         if (i == e) {
//             encriptedMessage = encriptedMessage + message[i] + keyWord[e]
//             keyWord += keyWord[e]
//         }
//     }
// }

// console.log(encriptedMessage)

// let decriptedMessage = ''

// for (let i = 0; i < encriptedMessage.length; i += 2) {
//     decriptedMessage = decriptedMessage + encriptedMessage[i]
// }

// console.log(decriptedMessage)



// Задача с интервью*
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

let sum1 = 0
let sum2 = 0

let str = ['(', ')', '(', ')']

for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') {
        sum1 += 1
    } else if (str[i] == ')') {
        sum2 += 1
    }
}

console.log('openning = ' + sum1 + ', closing = ' + sum2)

if (sum1 == sum2) {
    console.log('equal')
} else {
    console.log('not equal')
}


//---------------------------------------
 
 
//  let arr = [1, 5, 6, 78, 45, 23, 54]
//  let arr2 = [5, 6, 78, 45, 65, 56, 34]

//  let sum = 0

//  for ( let i = 0; i < arr.length; i++) {
//     sum += arr[i] + arr2[i];
//  }
 
//  console.log(sum)



//  let arr = [1, 5, 6, 78, 45, 23, 54, 23, 67]
//  let arr2 = [5, 6, 78, 45, 65, 56, 34]

//  let sum = 0

//  for ( let i = 0; i < arr.length + arr2.length; i++) {
//     if (i < arr.length) {
//         sum += arr[i]
//     } else {
//         sum += arr2[i - arr.length]
//     }
//  }
 
//  console.log(sum)

