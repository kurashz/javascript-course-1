'use strict;'

// Примитивные типы данных

/*
Числа, строки, true, false, undefined (не заданное значение);
*/

let a = 5;
let b = 5.6;
console.log(typeof(a)); // number
let age = 'Vasya';
console.log(typeof(age)); // string

let isAdmin = a > 10;
console.log(typeof(isAdmin));  // boolean

let c;
console.log(typeof(c)); // undefined
c = 5; // typeof - number

let d = null;
console.log(typeof(d)); // null - отображается как объект
// УРОК 16