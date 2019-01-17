

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


    $(document).on('click', '.select-language', function(e) {

        var self = $(this).closest('.select-language');
        self.find('.options').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    $(document).on('click', '.select-language .option', function(e) {
        var $this = $(this);
        var self = $this.closest('.select-language');
        var $defaultOption = $('.select-language .default-option');
        var option = $this.html();
        var optionNumber = $this.index() - 1;
        var defOption = $defaultOption.find('.option:first-child').html();
        self.find('.option').each(function() {
            $(this).find('input[type=radio]').removeAttr('checked');
        });
        // $(this).find('input[type=radio]').attr('checked', 'checked');
        $defaultOption.html(option);
        self.find('.option:nth-child(' + optionNumber + ')').html(defOption);
    });
});