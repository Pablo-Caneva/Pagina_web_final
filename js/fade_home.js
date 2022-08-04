$(document).ready(function(){
    $(window).scroll(function(){
        $(".left").each(function(i){
            var btm_e = $(this).offset().top + $(this).outerHeight();
            var btm_w = $(window).scrollTop() + $(window).height();

            if(btm_w > btm_e){
                $(this).animate({"opacity":"1", "left":"0%"},2000,function(){
                    $("#hr1").animate({"left":"0%", "width":"100%"}, {duration: 2000, queue: false});
                    $("#hr2").animate({"left":"0%", "width":"100%"}, {duration: 2000, queue: false});
                });
            }
        });
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        $(".right").each(function(i){
            var btm_e = $(this).offset().top + $(this).outerHeight();
            var btm_w = $(window).scrollTop() + $(window).height();

            if(btm_w > btm_e){
                $(this).animate({"opacity":"1", "left":"0%"},2000,function(){
                    $("#hr3").animate({"left":"0%", "width":"100%"}, {duration: 2000, queue: false});
                    $("#hr4").animate({"left":"0%", "width":"100%"}, {duration: 2000, queue: false});
                });
            }
        });
    });
});