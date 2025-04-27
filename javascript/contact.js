$("h1").hide().fadeIn(1500)
$("ul, footer").css({
    opacity: 0,
    position: 'relative',
    top: '50px'
}).delay(100).animate({
    opacity: 1,
    top: '0'
}, 1000);
