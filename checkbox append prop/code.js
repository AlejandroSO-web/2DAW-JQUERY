$(document).ready(function(){
   $("#check").click(function(){
         if($("#check").prop("checked")){
               var suma=parseInt($("#num1").val()) + parseInt($("#num2").val());
               $("#div").append("<input type='text' id='suma' value='"+suma+"'> ");
         }else{
               $('#suma').remove();
         }
         
      })
});