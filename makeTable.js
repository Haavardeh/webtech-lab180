$(document).ready(function () {
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
});



/* $("#formContent").append('<tr><td>'+${data[i].id}+'</td><td>'+${data[i].brand}+'</td><td>'+${data[i].model}+'</td><td>'+${data[i].brand}+'</td> <td><img src="' ${data[i].image} '"></td></tr>');*/
//<td>${data[i].id}</td>


/*let rows = document.createElement('tr');
document.getElementById('tbody').appendChild(rows);*/
