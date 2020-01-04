"use strict";

function registerUser(name) {
  var country = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'NO COUNTRY';
  var email = arguments.length > 2 ? arguments[2] : undefined;
  var phone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'NO PHONE';
  return "Name: ".concat(name, " , country: ").concat(country, ", email: ").concat(email, ", phone: ").concat(phone);
}

console.log(registerUser('Christian', undefined, 'example@example.com', '12345678'));