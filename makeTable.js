$(document).ready(function () {
    $.ajax({
      url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/',
      type: "GET",
      dataType: "json",
      /*success: function(data) {
        console.log(data[0].id);
      }*/
      success:
        $.each(function(i, data){
          $("#formContent").append(`<tr><td>${data[i].id}</td> <td>${data[i].brand}</td> <td>${data[i].model}</td> <td>${data[i].os}</td> <td><img src=" ${data[i].image} "></td></tr>`);
      })
    });
});


/*let rows = document.createElement('tr');
document.getElementById('tbody').appendChild(rows);*/
