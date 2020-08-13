$(document).ready(function() {
    $("#formOne").submit(function(event) {
      let age = $("#age").val();
      let color = $("input:radio[name=color]:checked").val();
      let movie = $("#movie").val(); 

      if (age === "young" && color === "red" && movie === "comedy") {
        $(".guy").show();
        $(".idris").hide();
      } else if (age === "old" && color === "red" && movie === "comedy") {
          $(".gwen").show();
      } else if (age === "young" && color === "blue" && movie === "comedy") {
        $(".idris").show();
      } 

      event.preventDefault();
    })
});