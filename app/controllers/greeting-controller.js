var express = require("express");
var app = express();

module.exports.welcome = function(req, res) {
  res.status(200).send("<h2>Hello There !!!</h2>");
};
