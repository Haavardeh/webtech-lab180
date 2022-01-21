$(document).ready(function () {
    $.ajax({
      url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/',
      type: "GET",
      dataType: "json",
      complete: function(data){
        console.log('<tr><td>${data.id}</td> <td>${data.brand}</td> <td><${data.model}</td> <td><${data.os}</td> <td><img src= ${data.image} ></td></tr>');
      /*  var obj = data.responseText;
        $.each(obj, function(i, data){

          $("#formContent").append("<tr " +data.id + "<td>" ++ "</td><td>" + data.brand + "</td><td>" + data.model + "</td><td>"+ data.os + "</td><td><img src=" + data.image +""> >"</td></tr>");
          alert (obj);
      }
      }),
      <td><img src=" + data.image + "></td>"


      ${data.image}
      */

    });
});


/*let rows = document.createElement('tr');
document.getElementById('tbody').appendChild(rows);*/
