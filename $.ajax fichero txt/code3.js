$(document).ready(function(){
    $("#mostrar").click(function(){
   var jk=  $.ajax("fichero2.txt")
        .done(function(respuesta){
            $("#resultado").html(respuesta)
        })
        .fail(function(){
        alert("error")
        });
});
});