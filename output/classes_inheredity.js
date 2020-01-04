"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** organizar codigo*/
var User =
/*#__PURE__*/
function () {
  function User(NAME, AGE) {
    _classCallCheck(this, User);

    this.name = NAME, this.age = AGE;
    /*
    this.name = 'Christian Paul',
    this.age = 23*/
  }

  _createClass(User, [{
    key: "greet",
    value: function greet(word) {
      return "<br>Hi ".concat(word);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "[".concat(this.name, ",").concat(this.age, "]");
    }
  }]);

  return User;
}();
/** INstanciamos la clase */


var christian = new User('Christian', 23);
document.write(christian.name);
var elver = new User('Elver', 54);
document.write("<br>Name: ".concat(elver.name, ",  age:").concat(elver.age));
document.write(elver.greet('savandija'));
document.write("<br/><hr/> ".concat(elver.toString()));
/**Herencia */

var student =
/*#__PURE__*/
function (_User) {
  _inherits(student, _User);

  function student(name, age, profession) {
    var _this;

    _classCallCheck(this, student);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(student).call(this, name, age));
    _this.profession = profession;
    return _this;
  }

  _createClass(student, [{
    key: "toString",
    value: function toString() {
      return "[".concat(this.name, ",").concat(this.age, ",").concat(this.profession, "]");
    }
  }]);

  return student;
}(User);

var the_Student = new student("Student1", 21, 'developer');
document.write("<br/><hr/> ".concat(the_Student.toString()));