"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFormInvalid = void 0;

var isFormInvalid = function isFormInvalid(err) {
  if (Object.keys(err).length > 0) return true;
  return false;
};

exports.isFormInvalid = isFormInvalid;