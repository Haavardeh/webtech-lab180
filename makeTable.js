$(document).ready(function () {
    $.ajax({
      url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/',
      type: "GET",
      dataType: "json",
      sucsess: function(data){
        $.each(function(i, data){
          $("#formContent").append("<tr <td> " + data[i].id + "</td><td>" + data[i].brand + "</td><td>" + data[i].model + "</td><td>"+ data[i].os + "</td><td><img[i] src=" + data.image + "> >" + "</td></tr>");
        });
      }
    });
  });


    // var obj = data.responseText;






  //    <td><img src=" + data.image + "></td>"


//});




/*<tr><td>${data.id}</td> <td>${data.brand}</td> <td><${data.model}</td> <td><${data.os}</td> <td><img src= ${data.image} ></td></tr>'
      ${data.image}*/


/*let rows = document.createElement('tr');
document.getElementById('tbody').appendChild(rows);*/
