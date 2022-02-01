$(document).ready(function(){
    $("#result").append("<input type='text' id='campo' value='0'>")
    $("input[name='intel']").click(function(){
             valor= $(this).val();
            $("#campo").val(valor);
    })
        $("#suma1").click(function(){
            if($("#suma1").prop("checked")) {
                 val1 = $("#suma1").val()
                 val2 = $("#campo").val()
                resultado = parseInt(val1) + parseInt(val2)
                $("#campo").val(resultado)
            }else{
              $("#campo").val(resultado - parseInt(val1))
            }
        });
            
            $("#suma2").click(function(){
                if($("#suma2").prop("checked")){
                  val1 = $("#suma2").val()
                  val2 = $("#campo").val()
                resultado = parseInt(val1) + parseInt(val2)
                $("#campo").val(resultado)
            }else{
                $("#campo").val(resultado - parseInt(val1))
            }
         });
    });
