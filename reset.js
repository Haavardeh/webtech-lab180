$(document).ready(function () {
  $(".resetBtn").click(function() {
    $.ajax({
      url: 'https://wt.ops.labs.vu.nl/api22/572a7d65/reset',
      type: "GET",
      dataType: "json",
      complete: function (data_response) {
        alert(data_response.responseText);
      },
    });
  });
});

/*
Code is found in first comment in this discussion thread from url:
https://stackoverflow.com/questions/12322009/jquery-ajax-get-json/34142058
*/
