"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findInputError = findInputError;

function findInputError(errors, name) {
  var filtered = Object.keys(errors).filter(function (key) {
    return key.includes(name);
  }).reduce(function (cur, key) {
    return Object.assign(cur, {
      error: errors[key]
    });
  }, {});
  return filtered;
}