$(document).ready(function() {   
    $("#mostrar").click(function(){
       
        $.ajax({
            type: "POST",
            url: "fichero.php",
            beforeSend: function() {
                $('#resultado').html('<img src="./loading.gif" alt="loading" /><br/>Un momento, por favor...</div>');
            }
        })
       
        .done(function(data) {
            $('#resultado').html(data);
        })
  
        .fail(function(request, status, error){
            $('#resultado').html(request.responseText);
        }) 
    });             
 }); 
 


// $(document).ready(function(){
//     $("#mostrar").click(function(){
//         $('#resultado').html('<div class="loading"><img src="loading.gif" alt="loading"/><br/>Un momento por favor...<br/>');

//         $.ajax({
//             type: "POST",
//             url: "fichero.php",
//             success: function(respuesta){
//                 $('#resultado').fadeIn(1000).html(respuesta);
//             }
        
//         });
//     });
// });



