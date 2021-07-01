$(function() {
    $(window).on('load', function() {
        let phones = [
            { 'mask': '+7 \\ \\ ###-###-##-##' }
        ];

        $('input[type=tel]').inputmask({
            mask: phones,
            greedy: false,
            definitions: {
                '#': {
                    validator: '[0-9]',
                    cardinality: 1
                }
            }
        });
    });

    $('.slider-works').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1331,
              settings: {
                variableWidth: false
              }
            }
        ]
    });

    $('.sertificate-slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        swipeToSlide: true,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1331,
              settings: {
                variableWidth: true,
                centerMode: true
              }
            },
            {
                breakpoint: 599,
                settings: {
                  centerMode: false
                }
              }
        ]
    });

    $('.rewiews-slider-big').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        swipeToSlide: true,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: '.rewiews-slider-thumbs',
        responsive: [
            {
              breakpoint: 1054,
              settings: {
                variableWidth: false
              }
            },
            {
                breakpoint: 599,
                settings: {
                    variableWidth: true,
                    arrows: false
                }
              }
        ]
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

    $('.btn-popup').click(function(e) {
        var valPopup = $(this).data('popup');
        e.preventDefault();
        $('body').find('#' + valPopup).addClass('popup-active');
        $('body').find('#' + valPopup).children('.popup').addClass('popup-active');
    });

    $('.btn-close').click(function(e) {
        e.preventDefault();
        $(this).closest('.popup-wrap').removeClass('popup-active');
        $(this).closest('.popup-wrap').children('.popup').removeClass('popup-active');
        $('.form-popup__item input').removeClass('active');
    });

    $('.form-popup__item input').focus(function name() {
       $(this).addClass('active');
    });

    $('#popup-wrap-thanks .btn-green').click(function(e) {
        e.preventDefault();
        $(this).closest('.popup-wrap').removeClass('popup-active');
        $(this).closest('.popup-wrap').children('.popup').removeClass('popup-active');
    });

    $(function($){
        $(document).mousedown(function (e){ 
            var div = $(".popup"); 
            if (!div.is(e.target) 
                && div.has(e.target).length === 0) { 
                div.removeClass('popup-active');
                div.closest('.popup-wrap').removeClass('popup-active');
                $('.form-popup__item input').removeClass('active');
            }
        });
    });

    ymaps.ready(function () {
        if ($(window).width() > 899) {
            centerMap = [55.719733, 37.573636];
        } else {
            centerMap = [55.717192, 37.586281];
        }
        var myMap = new ymaps.Map('map', {
                center: centerMap,
                zoom: 15,
                scrollZoom: false,
                controls: ['zoomControl']
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            myPlacemark = new ymaps.Placemark([55.719652, 37.582251], {
                balloonContent: '<div class="ballon-box"><div class="ballon-box__top"><span>Фрунзенская</span></div><div class="ballon-box__bottom"><span>есть парковка</span></div></div>'
            }, {
                iconLayout: 'default#image',
                iconImageHref: './img/gps-map.svg',
                iconImageSize: [12, 12],
                balloonContentSize: [202, 91],
                balloonLayout: "default#imageWithContent",
                balloonImageOffset: [5, -85],
                cursor: 'pointer',
                iconImageOffset: [0, 0],
                balloonclose: false
            });
            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects
            .add(myPlacemark)
            myMap.options.set({balloonPanelMaxMapArea:'0'});
            myPlacemark.balloon.open();
    
        });

});




$(window).on('load resize', function() {

    var width = $(window).width();
    if (width > '1199') {
        $('.steps-box .btn-green').insertAfter($('.step-img-box'));
    } else {
        $('.steps-box .btn-green').insertAfter($('.steps-items'));
    }

    if (width > '599') {
        $('header+.call-back').insertAfter($('header .logo'));
    } else {
        $('header .call-back').insertAfter($('header'));
    }

    if (width > '879') {
        $('footer .btn-green').insertAfter($('footer .logo'));
        $('footer .address').insertAfter($('footer .logo'));
    } else {
        $('footer .btn-green').appendTo($('footer'));
        $('footer .address').appendTo($('footer'));
    }

});