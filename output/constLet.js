"use strict";

/*
var no notificaba redeclaraciones de variables
*/
//let name="Christian Paul Ruales";/**variables en ES6*/
//const pi=3.1416
//let y const tambien tienen scope
function hello() {
  var name = "Chris";
  return "hello" + name;
}

console.log(hello());
/**/

var age = 11;
var isAdult = false;

if (age >= 18) {
  isAdult = true;
}

if (isAdult == true) {
  console.log("hi, you are an adult");
} else {
  console.log("hi, you are a child");
}

var fruits = ["Apple", "Orange", "grape"];
fruits[0] = "Pineapple";
fruits.push("Banana");
var pi = 3.1416;
console.log(fruits);
console.log(pi);