//estructura pluggin

$(document).ready(function () {
    jQuery.fn.zoom = function(){
        this.each(function(){
        elem  = $(this);
        elem.css("transform","scale(0.5)")
    });
    return this;
    };

    //función a realizar

   $("img").click(function(){
       $("img").zoom();

   })
});