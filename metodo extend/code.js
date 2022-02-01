 
$(document).ready(function () {
 
 
    //inicio plugin.......................................
  
        $.fn.changeColor = function(options) {
            let config = {
                size: "35px",
                color: 'red',
            }
        $.extend(config, options); 
  
        this.css("color", config.color);
        this.css("font-size", config.size);
       
        };
  
    //fin plugin..........................................
  
  
    $("#btn").click(function () {
        $('p').changeColor({
            color: 'blue',
            fontFamily: 'sans-serif'
 //fontFamily no se aplica porque el plugin no tiene ese campo
        });
    });
 });
 