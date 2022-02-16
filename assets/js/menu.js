let x = true;

$(document).ready(function() {

    $("#trigger").on("click", function(e) {
        e.preventDefault();
        if (x) {
            $(this).css({ transform: "rotate(360deg)" }).css({ transition: "1s ease" });
            $("nav").stop().toggle("slide");
            x = false;
        } else {
            $(this).css({ transform: "rotate(-360deg)" }).css({ transition: "1s ease" });
            $("nav").stop().toggle("slide", function() {
                $("nav").css("display", "");
                x = true;
            });
        }
    });
});