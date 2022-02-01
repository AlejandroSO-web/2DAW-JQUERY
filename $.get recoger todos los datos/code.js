$(document).ready(function(){
    $("#mostrar").click(function(){
        $.get("index.php",  $("form").serialize(),function(datos){
            $("#resultado").html(datos);
        });
    });
});
