$("h1").hide().fadeIn(1000);
$("h2").hide().fadeIn(3500);
$("body").children().not("h1, h2").hide()


let toggled = false;

$("h2").on("click", function() {
    if (!toggled) {
        $("body").children().not("h1, h2").slideDown();
        $("h2").text("CLOSE");
        toggled = true;
    } else {
        $("body").children().not("h1, h2").slideUp();
        $("h2").text("OPEN");
        toggled = false;
    }
});



