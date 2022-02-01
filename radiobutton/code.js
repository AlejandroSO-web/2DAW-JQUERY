$(document).ready(function(){
   
   $("input[name='color']").change(function(){

         $("#contiene").css("background-color" , $(this).val())
   });
});