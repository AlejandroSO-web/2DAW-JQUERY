$(document).ready(function() {   
    $("#mostrar").click(function(){
        $.ajax({
            dataType: "script",
            url: "fichero.js"
        })

        // .done(function(data) {
        //         $('#resultado').html("Exito")
        // })

        .fail(function(request,status,error){
            $('#resultado').html(request.responseText);
        })
    });             
});


