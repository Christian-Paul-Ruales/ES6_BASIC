"use strict";

var names = ['Christian', 'Paul', 'Jennifer', 'Juliana'];
var characters_number = names.map(function (name) {
  return "".concat(name, " have ").concat(name.length, " characters");
}
/**cuando utilizas funciones flecha puedes evitar el return */
);
console.log(characters_number);