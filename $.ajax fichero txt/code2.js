$(document).ready(function(){
    $("#mostrar").click(function(){
    $.ajax({
        type: "GET",
        url: "fichero.txt",
        success:function(respuesta){
            $("#resultado").html(respuesta)
        }
        });
});
});