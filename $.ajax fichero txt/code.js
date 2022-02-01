$(document).ready(function(){
    $("#mostrar").click(function(){
    $.ajax({
        type: "GET",
        url: "fichero.txt",
        })
        .done(function(respuesta){
            $("#resultado").html(respuesta)
        });
});
});