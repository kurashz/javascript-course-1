// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const isSuited = 100 - 90 > 90 - 5;
console.log(isSuited);
// 100 - (12) 90 > (10) 90 - (12) 5 
// Приоритетность (число приориета). Согласно правилу, сначала будут обработаны операции с большим приоритетом 

const a = 5 + 10 / 2;
console.log(a); // 10
const b = (5 + 10) / 2;
// 5 + (12) 10 / (13) 2
console.log(b); // 7.5

// Ассоциативность - выполнение операции слева на право

let c;
let d;
c = d = 100 + 50;
// c = (2) d = (2) 100 + (12) 50;

console.log(c);
console.log(d);