var a = "test connection";
var b = "more lines";

console.log(a);
console.log(b);

/*
$('table').sortTable({

})*/


//Log checking if correct index of "th" is clicked.
function myCallback(){
  $(this).html($(this).index());
  console.log("You clicked index " + $(this).index());
  console.log($(this).rows);


}

//Function to make a header in the table clickable
function headerClick(){
  let table = $("#products");
  $(table).find("th").click(myCallback);
}


//Waiting for jQuery to get ready before executing the code.
$(function(){
  let $table = document.getElementById("products");
  console.log($($table));

  headerClick();

});

/*
1. First, we should make code to read the list.
2. Kanskje bruke noe fra 7.2.3 for å velge alle liste objekter og legge de i et array som kan itereres gjennom.
Men vi fikk ikke lov til å bruke dette(?) Hvis vi får lov, kan vi overskrive eksisterende liste ved å bruke:
variabel = document.querySelector("listeID") variabel.innerHTML = "Sett opp ny liste"
3. Use chapter 8.5.1 from Zybook to change the list (sorting elements).
*
*
*/




/*
function showRow(table){
  for (i in table){
    console.log(i);
  }
}
*/
