$(document).ready(function(){
    $("#mostrar").click(function(){
        $.post("index.php", { nombre: $("#nombre").val(), apellido: $("#apellido").val()},function(datos){
            $("#resultado").html(datos);
        });
    });
});
