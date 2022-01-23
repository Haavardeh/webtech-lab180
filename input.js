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
      document.getElementById("dataForm").reset();
    });

    /*$.get( "ajax/index.html", function( data ) {
      $( "body" ).html( data );
      alert( "Load was performed." );
    });*/
    $.ajax({
      url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/',
      type: "GET",
      dataType: "json",
      success: function(data) {
        i = data.length-1
        $(".inputClass").before(`<tr><td>${data[i].brand}</td> <td>${data[i].model}</td> <td>${data[i].os}</td> <td id="phonePics"><img src="${data[i].image}" width=150px;></td> <td>${data[i].screensize}</td> </tr>`);
      }
    });

  /*  $.ajax({
      url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/',
      type: "GET",
      dataType: "json",
      success: function(data) {
        $("#products").load("index.html");
      }
    });*/

    event.preventDefault();
  });
});
