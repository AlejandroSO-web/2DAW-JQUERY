$(document).ready(function () {
    $("#iniciar").click(function(){
        $("div").animate({
            left: '250px'
        });
        $("div").animate({
            top: '250px'
        }); 
        $("div").animate({
            left: '-=240px'
        });
        $("div").animate({
            top: '-=220px'
        });
        });
    $("#parar").click(function(){
        $("div").stop(true)
        $(this).continue()
    });
});