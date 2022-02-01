$(document).ready(function () {
    $("#fundido").click(function(){
        $('#img').fadeOut(1200);
});
         $("#basico").click(function(){
            $('#img').fadeIn(1200);
        });

            $("#deslizamiento").click(function(){
                $('#img').slideDown(3000);
            });

                $("#animate").click(function(){
                    $('#img').animate({
                                     height: "500px",
                                    width: "600px"},1000);
                    });
});