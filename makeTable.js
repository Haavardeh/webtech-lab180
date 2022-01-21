$(document).ready(function () {
    $.ajax({
      url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/',
      type: "GET",
      dataType: "json",
      complete:
      function (data_response) {
       alert(data_response.responseText);
     },
        /*$.each(obj, function(i, data){
          $("#products").append("<tr><td>" + data.id + "</td><td>" + data.brand + "</td><td>" + data.model + "</td><td>"+ data.os + "</td><td>" + data.image + "</td></tr>");
        }),*/
    });
});


/*let rows = document.createElement('tr');
document.getElementById('tbody').appendChild(rows);*/
