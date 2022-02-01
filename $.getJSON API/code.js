$(document).ready(function(){
    $("#mostrar").click(function(){
            var flickerAPI = "https://pokeapi.co/api/v2/region";
            $.getJSON( flickerAPI, function(datos){
                $("#resultado").html(datos.results[0].name);

          });
              });
});
