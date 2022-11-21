/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["My dog", "Santa Claus", "A thief", "The government"];
  let action = ["stole", "broke", "crushed", "sold", "ate"];
  let what = ["my homework", "the keys", "my shoes", "my phone"];
  let when = [
    "yesterday",
    "this morning",
    "while i was praying",
    "when i finished"
  ];
  var they = who[Math.round(Math.random() * (who.length - 1))];
  var did = action[Math.round(Math.random() * (action.length - 1))];
  var that = what[Math.round(Math.random() * (what.length - 1))];
  var then = when[Math.round(Math.random() * (when.length - 1))];

  document.getElementById("excuse").innerHTML =
    "<div>" + they + " " + did + " " + that + " " + then + ".</div>";
};
