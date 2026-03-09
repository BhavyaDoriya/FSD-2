// Write 1 json string with date property in YYYY-MM-DD format and print the date in indian standard time format using JavaScript.

var jsonObject= require("../../json/date.json");
var d=new Date(jsonObject.date);
console.log(d);

