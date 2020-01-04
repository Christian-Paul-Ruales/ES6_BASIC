"use strict";

var user = {
  name: 'Chris',
  email: 'theruales@example.com',
  age: 23,
  password: 'theEcuatorianRuales'
}; //const {password,profession='doesn\'t exist'} = user;
//console.log(`${password} - ${profession}`);

var showInf = function showInf(_ref) {
  var name = _ref.name,
      _ref$university = _ref.university,
      university = _ref$university === void 0 ? 'UPS' : _ref$university;
  return console.log("".concat(name, " is student of ").concat(university));
};

showInf(user);