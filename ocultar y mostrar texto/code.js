$(document).ready(function () {
    $("#saludo").click(function(){
        $('p').fadeOut();
            $("#despedida").click(function(){
                $('p').fadeIn();
            });
        });
});