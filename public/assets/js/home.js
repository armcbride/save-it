$(function(){
    
    $(".create-user").on("submit", function(event) {
        event.preventDefault();
    
        var newUser = {
          name: $("#user").val().trim(),
        };
    });

    $.ajax("/api/user", {
        type: "POST",
        data: newUser
    }).then(
        function(){
            console.log("created new user");
        }
    )

});