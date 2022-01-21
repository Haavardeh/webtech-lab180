$(document).ready(function () {
    $.ajax({
      url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/',
      type: "GET",
      dataType: "json",
      complete: function (data_response) {
        alert(data_response.responseText);
      },
    });
});


/*let rows = document.createElement('tr');
document.getElementById('tbody').appendChild(rows);*/
