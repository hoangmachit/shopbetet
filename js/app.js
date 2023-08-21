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