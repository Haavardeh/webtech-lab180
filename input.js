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
      $("#products").append(#formTable).last();
    });


    /*$.ajax({
      url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/',
      type: "GET",
      dataType: "json",
      success: function(data) {
        console.log($("data:last-child"));
      }
    });*/

    //event.preventDefault();
  });
});
