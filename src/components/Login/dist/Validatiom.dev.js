"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Validation = function Validation(values) {
  var errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 5) {
    errors.name = "Name must be  more than 5 char";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 9) {
    errors.password = "Passwordmust be  more than 9 char";
  }

  return errors;
};

var _default = Validation;
exports["default"] = _default;