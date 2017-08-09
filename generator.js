"use strict";

var fs = require("fs");
var data = require('./data.json');

var comments = {
  'A Letter From Home_prologue': 'Prologue has no dedication',
  'Attack Of The Hideous Space-Varmints!_cover': 'This cover has no dedication.',
  'Back in Time for a Dime!': 'Don made the story, but he didn\'t draw it: no D.U.C.K here.',
  'Fiscal Fitness': 'No dedication.',
  'Forget Me Not': 'No dedication.',
  'Give Unto Others': 'No dedication.',
  'His Majesty McDuck_cover': 'This cover was done before Don started writing D.U.C.K.s on covers.',
  'Last Sled to Dawson_cover': 'No dedication',
  'Leaky Luck': 'No dedication',
  'Well-Educated Duck': 'No dedication',
  'Mythological Menagerie': 'No dedication',
  'Nobody\'s Business': 'Dedication is in the last page of the issue.',
  'On A Silver Platter': 'No dedication',
  'On Stolen Time': 'No dedication',
  'Recalled Wreck': 'No dedication',
  'Return To Plain Awful_cover': 'No dedication',
  'Return To Xanadu_cover2': 'No dedication',
  'Rocket Reverie': 'No dedication',
  'The Duck Who Fell To Earth': 'No dedication',
  'The Duck Who Never Was': 'No dedication',
  'The Duck Who Never Was_cover': 'No dedication',
  'The Guardians of the Lost Library_cover': 'No dedication',
  'The Master Landscapist': 'Originally in the flower at the bottom left, but disappeared due to inking and coloring.',
  'The Pied Piper of Duckburg': 'The first three pages were done by Barks, so no dedication.',
  'The Quest for Kalevala_cover': 'No dedication',
  'The Son Of The Sun_cover': 'No dedication',
  'The Son Of The Sun': 'No dedication',
  'The Treasury Of Croesus_cover': 'No dedication',
  'The Universal Solvent': 'No dedication',
  'Treasure Under Glass': 'No dedication',
  'Treasure Under Glass_cover': 'No dedication',
};

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
    content += "  \"" + label + "\":" + "\n";
    content += "    image: \"" + d.IMAGE[img].replace("DUCK", "images") + "\"" + "\n";
    content += "    thumbnail: \"" + d.IMAGE[img].replace("DUCK", "images/thumbnails") + "\"" + "\n";
    if(d.DUCK[img]) {
      content += "    duck: \"" + d.DUCK[img].replace("DUCK", "images") + "\"" + "\n";
    }

    if(comments[key] && label === 'first page') {
      content += "    comment: \"" + comments[key] + "\"" + "\n";
    }
    else if(comments[key + "_" + img]) {
      content += "    comment: \"" + comments[key + "_" + img] + "\"" + "\n";
    }
  });

  content += "---" + "\n";

  fs.writeFileSync(__dirname + "/artworks/" + slug + ".md", content);
});
