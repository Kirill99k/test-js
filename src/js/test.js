'use strict';

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20));

// «перебрати»  поелементно

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// Напиши функцію, яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// Напиши функцію, яка приймає довільний рядок, що складається тільки зі слів,
// розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   let stringSplit = string.split(' ');
//   let longestWord = "";

//   for (let word of stringSplit) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// Напиши функцію slugify(string) яка отримує рядок і повертає URL-slug
// Рядок складається тільки з літер і пробілів

// const findSmallesNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };

// Доповни код функції(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

// for(let i = min; i <= max; i++) {
//   numbers.push(i);
//   }

//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14,17));
// console.log(createArrayOfNumbers(29,34));

// Напиши функцію, яка отримує два масиви довільної довжини в параметри array1 і array2,
// і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
// const uniqueElements = [];

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       uniqueElements.push(element);
//     }
//   }
//   return uniqueElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log (getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log (getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log (getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];

// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//      evenNumbers.push(i);
//   }

// }
//   return numbers;
// }

// Method filter()

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// Method find()

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find(option => option.label === "blue"));// { label: 'blue', color: '#2196F3' }
// console.log(colorPickerOptions.find(option => option.label === "pink"));// { label: 'pink', color: '#E91E63' }
// console.log(colorPickerOptions.find(option => option.label === "white"));// undefined

// Method findIndex()

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.findIndex(option => option.label === "blue"));// 2
// console.log(colorPickerOptions.findIndex(option => option.label === "pink"));// 3
// console.log(colorPickerOptions.findIndex(option => option.label === "white"));// -1

// Method reduce()

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// Method chains

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']
// console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']

// Change code below this line
// const sortByDescendingFriendCount = users => {

//   return [...users].sort((firstFriends, secondFriends) => secondFriends.friends.length - firstFriends.friends.lengt);
// };

// const CounterPlugin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
//   onUpdate = () => null,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;
//   this._refs = this._getRefs(rootSelector);

//   this.onUpdate = onUpdate;

//   this._bindEvents();
//   this.updateValueUI();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementBtn = refs.container.querySelector('[data-increment]');
//   refs.decrementBtn = refs.container.querySelector('[data-decrement]');
//   refs.value = refs.container.querySelector('[data-value]');

//   return refs;
// };

// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener('click', () => {
//     console.log('CounterPlugin.prototype._bindEvents -> this', this);
//     this.increment();
//     this.updateValueUI();
//   });

//   this._refs.decrementBtn.addEventListener('click', () => {
//     console.log('CounterPlugin.prototype._bindEvents -> this', this);
//     this.decrement();
//     this.updateValueUI();
//   });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;

//   this.onUpdate();
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// new CounterPlugin({
//   rootSelector: '#counter-1',
//   step: 10,
//   initialValue: 100,
//   onUpdate: () => console.log('Это мой кастомный колбек для onUpdate'),
// });

// new CounterPlugin({ rootSelector: '#counter-2', step: 2 });

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//   Напиши метод calcTotalPrice(stoneName), який приймає назву
//   каменю, розраховує та повертає загальну вартість каміння з таким
//   ім'ям із властивості stones

// const chopShop = {
//     stones: [
//         { name: 'Emerald', price: 1500, quantity: 5 },
//         { name: 'Diamond', price: 2800, quantity: 2 },
//         { name: 'Sapphire', price: 1400, quantity: 9 },
//         { name: 'Ruby', price: 700, quantity: 8 },
//     ],

//     calcTotalPrice(stoneName) {
//         const stoneOblj = this.stones.find(({ name }) => name.toLowerCase() === stoneName.trim().toLowerCase()
//         );

//         if(!stoneOblj) {
//         return `Камінь з назвою ${stoneName} не має!`;
//         }

//         const { price, quantity } = stoneOblj;

//         return price * quantity;

//     },
// }

// console.log(chopShop.calcTotalPrice('Emerald')); //7500
// console.log(chopShop.calcTotalPrice('Sapphire')); //12600

// const parent = document.querySelector("#parent");

// parent.addEventListener("click", event => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });

// console.log('Hello');

// const timer = {
//   start() {
//     const startTime = Date.now();

//     setInterval(() => {
//       const curentTime = Date.now();
//       console.log(curentTime - startTime);
//     }, 1000);
//   },
// };

// timer.start();
