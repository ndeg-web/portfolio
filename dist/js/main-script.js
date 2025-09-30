"use strict";

$(function (){
    $('body').on('click', function (){
        $(this).addClass('test');
    })

    let gallery = new SimpleLightbox('.gallery a, .js-gallery a');
    gallery.on('show.simplelightbox', function () {
	    // do something…
    });

    $(".js-owl-carousel").owlCarousel({
        items: 1,
        dots: true
    });

    $(".js-owl-carousel-arrow").owlCarousel({
        loop: false,
        margin: 10,
        dots: false,
        nav: true,
        items: 1,
        responsive: {
            0 : {
                nav: false
            },

            1024 : {
                nav: true
            }
        }
    });
    var owl = $(".js-owl-carousel-arrow");
    owl.owlCarousel();

    



})