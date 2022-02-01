//estructura pluggin

$(document).ready(function () {
    jQuery.fn.desaparecer = function(){
        this.each(function(){
        elem  = $(this);
        elem.css("display","none");
    });
    return this;
    };

    //función a realizar

   $("#desaparecer").click(function(){
       $("p").desaparecer();

   })
});