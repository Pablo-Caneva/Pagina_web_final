$(document).ready(function(){
    $("#nb1").fadeIn("slow", function(){
        $("#nb2").fadeIn("slow", function(){
            $("#nb3").fadeIn("slow", function(){
                $("#nb4").fadeIn("slow", function(){
                    $("#nb5").fadeIn("slow");
                });
            });
        });
    });
});