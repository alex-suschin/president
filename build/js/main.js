$(function() {
    $("a.scrollto").click(function() {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });

    $('.style-tab').click(function() {
        $('.style-tabs').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.styles-elems').find('.styles-elem-item').hide();
        $('#' + $(this).data('switch')).show();
    });

    $('.slider-works').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    });

    $('.sertificate-slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        swipeToSlide: true,
        slidesToScroll: 1,
        variableWidth: true
    });

    $('.rewiews-slider-big').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        swipeToSlide: true,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: '.rewiews-slider-thumbs'
    });

    $('.rewiews-slider-thumbs').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: '.rewiews-slider-big'
    });

});

$(window).on('load resize', function() {

    var width = $(window).width();

    if ((width > '700') && (width < '1000')) {

    }

    if (width > '700') {

    }

    if (width < '700') {

    }

});
//# sourceMappingURL=../sourcemaps/main.js.map
