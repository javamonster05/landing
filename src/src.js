var x = window.matchMedia("(min-width: 992px)");
myFunction(x);
x.addListener(myFunction);

function myFunction(x) {
    if (x.matches) {
        document.getElementById('call').innerHTML = 'Call us (213) 888-88-88';
        document.getElementById('logotype').src = 'img/logo.png';
    } else {
        document.getElementById('call').innerHTML = 'Call us';
        document.getElementById('logotype').src = 'img/logo-r.png';
    }
}

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});

new WOW().init();