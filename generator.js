"use strict"

var fs = require("fs");
var data = require('./data.json');

Object.keys(data).forEach(function(key) {
  var d = data[key];

  var content = "---" + "\n";
  content += "layout: artwork" + "\n";
  content += "category: artwork" + "\n";
  content += "title: \"" + key + "\"" + "\n";
  content += "images:" + "\n";

});
