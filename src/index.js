import './sass/styles.scss';
import $ from 'jquery';

//Return the number of worrds in the entry
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.count = function() {
  var titleLength = this.title.split(" ").length;
  var bodyLength = this.body.split(" ").length;
  var length = titleLength + bodyLength;
  return "<p>" + length + " words!</p>";
};

// Return the number of vowels in the Entry

function vowCount(arr) {
  var vowList = ["a","e","i","o","u"];
  var vows = 0;
  for (var i = 0; i < arr.length; i++) {
    if (vowList.includes(arr[i])) {
      vows++;
    }
  }
  return vows;
}

Entry.prototype.charCount = function() {
  var titleWords = this.title.split(" ");
  var bodyWords = this.body.split(" ");
  var titleChars = "";
  var bodyChars = "";
  var numVows = 0;
  for (var i=0; i < titleWords.length; i++){
    titleChars += titleWords[i].split("") + ",";
  }
  for (var j = 0; j < bodyWords.length; j++) {
    bodyChars += bodyWords[j].split("") + ",";
  }
  var allChars = titleChars + bodyChars;
  allChars = allChars.replace(/,/g, '');
  numVows += vowCount(allChars);
  var numCons = allChars.length - numVows;
  var result = "<p>" + numVows + " vowels!</p>" + "<p>" + numCons + " consonants!</p>";
  return result;
};

//
Entry.prototype.getTeaser = function() {
  var firstSentence = this.body.split(/[.!?]+/)[0];
  var result = "";
  if (firstSentence.split(" ").length > 8) {
    result = firstSentence.split(" ").slice(0, 8).join(' ') + "...";
  } else {result = firstSentence;}
  return "<p>" + result + "</p>";
};



$(document).ready(function() {
  $("#journal").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Entry(title, body);
    $(".output").append(entry.count());
    $(".output").append(entry.charCount());
    $(".output").append(entry.getTeaser());
  });
});
