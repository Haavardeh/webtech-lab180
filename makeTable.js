$(document).ready(function () {
    $.ajax({
      url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/',
      type: "GET",
      dataType: "json",
      /*success: function(data) {
        console.log(data[0].id);
      }*/
      success function:
        $.each(function(data){
          console.log(data);
          $("#formContent").append('<tr><td> ${data}</td> <td>${data[0].brand}</td> <td>${data[0].model}</td> <td>${data[0].os}</td> <td><img src="${data[0].image}"></td></tr>');
      }),
    });
});

/* $("#formContent").append('<tr><td>'+${data[i].id}+'</td><td>'+${data[i].brand}+'</td><td>'+${data[i].model}+'</td><td>'+${data[i].brand}+'</td> <td><img src="' ${data[i].image} '"></td></tr>');*/
//<td>${data[i].id}</td>


/*let rows = document.createElement('tr');
document.getElementById('tbody').appendChild(rows);*/
