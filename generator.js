"use strict"

var fs = require("fs");
var data = require('./data.json');

Object.keys(data).forEach(function(key) {
  var d = data[key];

  var content = "---" + "\n";
  var slug = key.replace(/ /g, '_').toLowerCase();
  content += "layout: artwork" + "\n";
  content += "category: artwork" + "\n";
  content += "title: \"" + key + "\"" + "\n";
  content += "permalink: \"DUCK/" + slug + "\"" + "\n";
  content += "images:" + "\n";

  Object.keys(d.IMAGE).forEach(function(img) {
    var label = img;
    if(label === "first page") {
      label = "First page";
    }
    else if(label === "cover") {
      label = "Cover";
    }
    content += "  \"" + label + "\":" + "\n";
    content += "    image: \"" + d.IMAGE[img].replace("DUCK", "images") + "\"" + "\n";
    if(d.DUCK[img]) {
      content += "    duck: \"" + d.DUCK[img].replace("DUCK", "images") + "\"" + "\n";
    }
  });

  content += "---" + "\n";

  fs.writeFileSync(__dirname + "/artworks/" + slug + ".md", content);
});
