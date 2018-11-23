/*Julia Spehlmann, UMass Lowell Computer Science, julia_spehlmann@student.uml.edu
COMP 4610 GUI Programming I
Assignment 7: Using the jQuery Validation Plugin with Your Dynamic Table
Copyright (c) 2018 by Julia Spehlmann. All rights reserved.
Updated by JS on November 16, 2018 at 9:12 AM
File: script.js
Description: An extension of Assignment 6 with the addition of jQuery plugin to handle errors
*/

function startMultTable(){
  //parseInt converts string input to int
  var multiplierStart = parseInt(document.getElementById("multiplier-start").value, 10);
  var multiplierEnd = parseInt(document.getElementById("multiplier-end").value, 10);
  var multiplicandStart = parseInt(document.getElementById("multiplicand-start").value, 10);
  var multiplicandEnd = parseInt(document.getElementById("multiplicand-end").value, 10);

  //validations now in jquery.validate.js

  createTable(multiplierStart, multiplierEnd, multiplicandStart, multiplicandEnd);
  return false;
};

//creates the table
function createTable(multiplierStart, multiplierEnd, multiplicandStart, multiplicandEnd){
  //remove any existing table
  if(document.getElementsByTagName("table").length > 0) {
    document.getElementsByTagName("body")[0].removeChild(document.getElementsByTagName("table")[0])
  }
  //logging values to check for correctness
  console.log("multiplier start: ", multiplierStart);
  console.log("multiplier end: ", multiplierEnd);
  console.log("multiplicand start: ", multiplicandStart);
  console.log("multiplicand end: ", multiplicandEnd);

  //createw new table
  var numCols = multiplierEnd - multiplierStart;
  var numRows = multiplicandEnd - multiplicandStart;
  var body = document.getElementsByTagName("body")[0];
  var tableEl = document.createElement("table");
  tableEl.setAttribute("class", "table");
  var tableBody = document.createElement("tbody");
  tableEl.appendChild(tableBody);

  for(var i = 0; i <= numRows + 1; i++){
    var row = document.createElement("tr");
    tableBody.appendChild(row);
    //make header for multiplier
    if(!i){
      for(var j = 0; j <= numCols + 1; j++) {
        var colHeader = document.createElement("th");
        row.appendChild(colHeader);
        if(j){
          var headertext = document.createTextNode(multiplierStart + (j-1));
          colHeader.appendChild(headertext);
        }
      }
    } else {
        for(var k = 0; k <= numCols + 1; k++){
          //make header for multiplicand
          if(!k){
            var rowHeader = document.createElement("th");
            row.appendChild(rowHeader);
            var headertext = document.createTextNode(multiplicandStart + (i-1));
            rowHeader.appendChild(headertext);
          } else {
              var col = document.createElement("td");
              row.appendChild(col);
              //the data inside the table
              var tableData = document.createTextNode(((i-1)+multiplicandStart) * (multiplierStart + (k-1)));
              col.appendChild(tableData);
          }
        }
    }
  }
  body.appendChild(tableEl);
}
