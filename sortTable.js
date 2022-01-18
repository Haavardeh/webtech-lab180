var a = "test connection";
var b = "more lines";

console.log(a);
console.log(b);

/*
$('table').sortTable({

})*/
// = document.getElementById("products");

function myCallback(){
  console.log("You clicked the header");
}

//Function to make a header in the table clickable
function headerClick(){
  let table = $("#products");
  $(table).find("th").click(myCallback);
}


//Waiting to jQuery to get ready before executing the code.
$(function(){
  let $table = document.getElementById("products");
  console.log($($table));

  headerClick();

});






/*
function showRow(table){
  for (i in table){
    console.log(i);
  }
}
*/
