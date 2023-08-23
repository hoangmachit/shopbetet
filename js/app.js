var owl = $('.owl__banner');
owl.owlCarousel({
    margin: 10,
    loop: true,
    nav: false,
    dots: true,
    items: 1,
});
var owl_favorite = $('.owl_favorite');
owl_favorite.owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    items: 5,
});
var owl__product__hot = $('.owl__product__hot');
owl__product__hot.owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    items: 5,
});

var owl__product__puerchased = $('.owl-product-puerchased');
owl__product__puerchased.owlCarousel({
    margin: 10,
    loop: true,
    nav: false,
    dots: false,
    items: 3,
});

var owl__gallery = $('.owl__gallery');
owl__gallery.owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    items: 6,
});
$(document).on('click', '.owl__gallery .owl-item', function () {
    const index = $(this).index();
    const image = $(this).find('.product__thumb--item').data('image');
    $('.owl__gallery').trigger('owl.goTo', index);
    $('.product__detail--left .thumbs__main picture img').attr('src', image);
});

