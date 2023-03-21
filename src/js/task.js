// Task 1
//НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"//
// const name = 'Kyrylo';
// const age = 23;
// const hobby = 'JavaScript';
// const message = `Good day, my name is ${name}, I am ${age} years old, learning ${hobby}`;

// console.log(message);

// Task 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"
// const userName = prompt('Your name');
// const mail = prompt('Your mail');
// const phone = prompt('Your phone');
// const massage = `User ${userName} uses ${mail} email and ${phone} phone`;

// console.log(massage);

// Task 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ .
// ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ
// const laptop = Number(prompt('laptop price'));
// const phone = Number(prompt('phone price'));
// const TV = Number(prompt('TV price'));
// const totalPrice = laptop + phone + TV;

// console.log(totalPrice);


// Task 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const whatMonth = Number(prompt('How many months are in a year?'));

// if (whatMonth === 12) {
//     console.log('True');
// } else {
//     console.log('False');
// }

// Task 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦІЛЕ ЦЕ ЧИСЛО, ЧИ НЕ ЦІЛЕ


// const yourNumber = Number(prompt('Enter your number'));

// if (yourNumber % 2 === 0) {
//     console.log('Integer');
// } else {
//     console.log('Not an integer');
// }

// Ternary operator
// const number = yourNumber % 2 === 0 ? 'Integer' : 'Not an integer';
// console.log(number);

// Task 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const month = Number(prompt('The month of birth is a number'));

// if (month === 12 || month === 1 || month === 2) {
//     console.log('Winter');
// } else if (month >= 3 && month <= 5) {
//     console.log('Spring');
// } else if (month >= 6 && month <= 8) {
//     console.log('Summer');
// } else if (month >= 9 && month <= 11) {
//     console.log('Autumn');
// } else {
//     console.log('Error');
// }

// switch (month) {
//     case  1:
//         console.log('January');
//         break;
    
//     case  2:
//         console.log('February');
//         break;
    
//     case  3:
//         console.log('March');
//         break;
    
//     case  4:
//         console.log('April');
//         break;
    
//     case  5:
//         console.log('May');
//         break;
    
//     case  6:
//         console.log('June');
//         break;
    
//     case  7:
//         console.log('July');
//         break;
    
//     case  8:
//         console.log('August');
//         break;
    
//     case  9:
//         console.log('September');
//         break;
    
//     case  10:
//         console.log('October');
//         break;
    
//     case  11:
//         console.log('November');
//         break;
    
//     case  12:
//         console.log('December');
//         break;
    
//     default:
//         console.log('Error');
//         break;
// }

//Task 7:
//НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІТ І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ, ЩО НЕ ВІРНИЙ ЛОГІН

// const email = 'kirill99k@gmail.com';
// const myPass = 'pass123';
// const login = prompt('Enter your email');
// const password = prompt('Enter your password');

// if (login === email && password === myPass) {
//     alert('Welcome');
// } else {
//     alert('Enter correct credentials');
// }

// const loginCreds = login === email && password === myPass ? alert('Welcome') : alert('Enter correct credentials');

//Task 8:

// const period = prompt('Service subscription period').toLowerCase();

// if (period === 'day') {
//     console.log('Price: 1.99');
// } else if (period === 'sunday') {
//     console.log('Price: 5.99');
// } else if (period === 'month') {
//     console.log('Price: 10.99');
// } else if (period === 'year') {
//     console.log('Price: 100.99');
// } else {
//     console.log('Incorrect data');
// }

// switch (period) {
//     case 'day':
//         console.log('Price: 1.99');
//         break;
    
//     case 'sunday':
//         console.log('Price: 5.99');
//         break;
    
//     case 'month':
//         console.log('Price: 10.99');
//         break;
    
//     case 'year':
//         console.log('Price: 100.99');
//         break;

//     default:
//         console.log('Incorrect data');
//         break;
// }

// Task 9
// НАПИШІТЬ ЦИКЛ FOR ЯКА БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА ЗА ЗРОСТАННЯМ ВІД MIN ДО MAX, ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10
// const min = 10;
// const max = 100;

// for (let iteration = min; iteration <= max; iteration += 1) {
//     if (iteration % 10 === 0) {
//         console.log(iteration);
//     }
// }



// Task 10
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7
// "Your name isn't very long"
// const whatName = prompt('What first name?');?






// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ['Jazz', 'Blues'];

// styles.push('Rock-n-roll');

// styles.splice(1, 1, 'Classic');

// styles.shift();

// console.log(styles.shift());

// styles.unshift('Rap', 'Reggae');

// console.log(styles);



// ЗАДАЧА 2
// Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.


// const users = ['Mango', 'Poly', 'Ajax'];
// function logItams(array) {
//     for(let i = 0; i < array.length; i++) {
//         // console.log('index', i);
//         // console.log('value', array[i]);
//         console.log(`${i} - ${array[i]}`);
//     }
// }

// logItams(users);


// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// let smallNumber = numbers[0];

// for (const number of numbers) {
//     if (smallNumber > number) {
//         smallNumber = number;
//     }
// }

// console.log(smallNumber);
    
// // 2) перепишіть функцією findSmallestNumber(numbers)
    
// const findSmallestNumber = function (numbers) {
//     let smallNumber = numbers[0];
//     for (let number of numbers) {
//         smallNumber = number;
//     }
//     return smallNumber;
// }

// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));



// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом
// const str = "ротатор"; //true
// const newString = "Hello"; //false


// const array = str.split('');
// array.reverse()

// const menu = array.join('');
// console.log(str === menu);

// const word = newString.split('').reverse().join('')

// console.log(newString === word);


// ЗАДАЧА 7
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію

// function checkNumber(a, b) {
//     if (a > b) {
//         return `the number ${a} is greater than ${b}`;
//     }

//     return `the number ${b} is greater than ${a}`;
// }

// const checkNumber = function (a, b) {
//     if (a > b) {
//         return `the number ${a} is greater than ${b}`;
//     }

//     return `the number ${b} is greater than ${a}`;
// }

// const checkNumber = (a, b) => {
//     if (a > b) {
//         return `the number ${a} is greater than ${b}`;
//     }

//     return `the number ${b} is greater than ${a}`;
// }

// const checkNumber = (a, b) => a > b ? `the number ${a} is greatet than ${b}` : `the number ${b} is greatet than ${a}`;


// console.log(checkNumber(10, 15));



// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення .Всі аргументи будуть тільки числовими

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2


// ЗАДАЧА 8
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// capitalize('the quick brown fox')// 'The Quick Brown Fox '







// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек, який приймає імя і логінує в консоль рядок  "Привіт" + імя


// function letMeseeYourName(callback) {
//     const userName = prompt("Enter name");
//     callback(userName);
// }

// function great(userName) {
//     console.log(`Hello, ${userName}`);
// }

// function great(userName) {
//     alert(userName);
// }


// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару,
//  добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;


// debugger;

// const makeProduct = (name, price, callback) => {
//     const product = {
//         name,
//         price,
//         id: Date.now(),
//     }

//     callback(product);
// }

// const showProduct = product => console.log('Product successfully created', product);

// makeProduct('Refrigerator', 10000, showProduct);



// ЗАДАЧА 3
// МАЄМО МАСИВ, ПОТРІБНО:
// 1)получити масив вчених які народились у 19ст;
// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;
// 3) Відсортувати вчених по алфавіту;
// 4)відсортувати по кількості прожитих років;
// 5)відфільтрувати, хто народився в 15,16,17ст;
// 6)знайти рік народження Albert Einstein;
// 7)визначити, чи усі вчені працювали у 19ст;

const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },

  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];


// 1)получити масив вчених які народились у 19ст;

// const century = scientists.filter(scientist => scientist.born >= 1800 && scientist.born < 1900).map(scientist => `${scientist.name} ${scientist.surname}`);
// console.log(century);


// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;

// const sumYear = scientists.reduce((acc, scientist) => acc + (scientist.dead - scientist.born), 0);
// const result = sumYear / scientists.length

// console.log(sumYear);
// console.log(result);


// 3) Відсортувати вчених по алфавіту;
// const scientistAlphabet = [...scientists].sort((a, b) => a.name[0] > b.name[0] ? 1 : -1);

// const scientistAlphabet = [...scientists].sort((a, b) => a.name.localeCompare(b.name));
// console.log(scientistAlphabet);



// 4)відсортувати по кількості прожитих років;

// const yearsLived = [scientists].sort((a, b) => (a.dead - a.born) - (a.dead - b.born));
// console.log(yearsLived);


// 5)відфільтрувати, хто народився в 15,16,17ст;

// const oldCentury = scientists.filter(scientist => scientist.born >= 1400 && scientist.born < 1700);
// console.log(oldCentury);




// 6)знайти рік народження Albert Einstein;

// const einstein = scientists.find(scientist => scientist.name === "Albert" && scientist.surname === "Einstein")
// console.log(einstein);

// 7)визначити, чи усі вчені працювали у 19ст;

// const everyScientists = scientists.every(scientist => scientist.born >= 1800 && scientist.born <= 1900 && scientist.dead >= 1800)
// console.log(everyScientists);
