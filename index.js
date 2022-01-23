

  $(document).ready(function () {
    updateTable();
  });

//Function for making and updating the table
var updateTable = function(){
  $.ajax({
    url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/',
    type: "GET",
    dataType: "json",
    success: function(data) {
      $.each(data, function(i, value){
        $(".inputClass").before(`<tr><td>${data[i].brand}</td> <td>${data[i].model}</td> <td>${data[i].os}</td> <td id="phonePics"><img src="${data[i].image}" width=150px;></td> <td>${data[i].screensize}</td> </tr>`);
      });
    }
  });
} //Close function for updating table



//Function that sends the th as a parameter into the function that sorts the table.
function findIndex(tableId){
  $('#' + tableId).on('click', 'th', function() {
    sortTable($(this).index(), tableId);
});
}
/*
Function that sorts the table.
Code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_table_desc, but modified
*/
function sortTable(n, tableId) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(tableId);
  switching = true;
  dir = "asc";

  while (switching) {
    var rowlength = 0;
    switching = false;
    rows = table.rows;

    //change rowlength depending on table, because we want to exclude sorting of the input fields
    if (tableId == "tableSubs") {
      rowlength = rows.length - 1;
    } else if (tableId == "products"){
      rowlength = rows.length - 2;
    }

    for (i = 1; i < (rowlength); i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") { //ascending order
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") { //descending order
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
} //function sortTable


//Waiting for jQuery to get ready before executing the code.
$(function(){
  findIndex("products");
  findIndex("tableSubs");
}); //Closing function for sorting the table


//Function for updating table based in user-input to the form
$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      brand: $("#brand").val(),
      model: $("#model").val(),
      os: $("#os").val(),
      image: $("#image").val(),
      screensize: $("#screensize").val(),
    };

    $.ajax({
      type: "POST",
      url: "https://wt.ops.labs.vu.nl/api22/572a7d65/",
      data: formData,
      dataType: "json",
      encode: true,

    }).done(function (data) {
      $("#products").append(formData);

//Use update table method
    $.ajax({
      url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/',
      type: "GET",
      dataType: "json",
      success: function(data) {
        i = data.length-1
        $(".inputClass").before(`<tr><td>${data[i].brand}</td> <td>${data[i].model}</td> <td>${data[i].os}</td> <td id="phonePics"><img src="${data[i].image}" width=150px;></td> <td>${data[i].screensize}</td> </tr>`);
      }
    });
    });
    event.preventDefault();
  });
});


//Resetting the server and updates the table dynamically.
$(document).ready(function () {
  $(".resetBtn").click(function() {
    $.ajax({
      url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/reset',
      type: "GET",
      dataType: "json",
      complete: function (data_response) {
        alert(data_response.responseText);
      }
    });
    //Use update table method
  /*  $.ajax({
      url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/',
      type: "GET",
      dataType: "json",
      success: function(data) {
        i = data.length-1
        $(".inputClass").before(`<tr><td>${data[i].brand}</td> <td>${data[i].model}</td> <td>${data[i].os}</td> <td id="phonePics"><img src="${data[i].image}" width=150px;></td> <td>${data[i].screensize}</td> </tr>`);
      }
    });*/
  });
});

/*
Code is found in first comment in this discussion thread from url:
https://stackoverflow.com/questions/12322009/jquery-ajax-get-json/34142058
*/
