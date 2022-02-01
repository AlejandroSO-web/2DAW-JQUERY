$(document).ready(function(){
    $("#mostrar").click(function(){
        $.get("index.xml",function(xml){
            let text ="";
            $(xml).find("blog").each(function () {
                var name = $(this).find('name').text();
                var description = $(this).find('description').text();
                var url = $(this).find('url').text();
                text+=name + " " + description + " " + url;
                $("#resultado").html(text);
             });
         });
        });
    });