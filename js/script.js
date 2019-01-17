

$( document ).ready(function() {
    console.log( "ready!" );

    $(".owl-carousel").owlCarousel({
        items: 1,
    });

    var windowWidth = $(window).width();

    if(windowWidth > 992){
        $(".navigationMobile").hide();
    }

    $(window).on('resize', function () {

        var windowWidthResized = $(window).width();
        var navigationIsVisible = $(".navigation").length;

        if(windowWidthResized > 992 || navigationIsVisible > 0){
            $(".navigationMobile").hide();
        }
    });

    $(".responsiveBtn").on("click", function () {

        $(".navigationMobile").slideToggle();
    });
});