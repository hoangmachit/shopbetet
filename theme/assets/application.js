$(document).ready(function () {
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
        items: 4,
        responsive: {
            0: {
                items: 2,
                margin: 5,
            },
            480: {
                items: 2,
                margin: 5,
            },
            768: {
                items: 3,
                margin: 5,
            },
            1024: {
                items: 4,
                margin: 5,
            }
        }
    });
    var owl__product__hot = $('.owl__product__hot');
    owl__product__hot.owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        items: 4,
        responsive: {
            0: {
                items: 2,
                margin: 5,
            },
            480: {
                items: 2,
                margin: 5,
            },
            768: {
                items: 3,
                margin: 5,
            },
            1024: {
                items: 4,
                margin: 5,
            }
        }
    });

    var owl__product__puerchased = $('.owl-product-puerchased');
    owl__product__puerchased.owlCarousel({
        margin: 10,
        loop: true,
        nav: false,
        dots: false,
        items: 3,
        responsive: {
            0: {
                items: 2,
                margin: 5,
            },
            480: {
                items: 2,
                margin: 5,
            },
            768: {
                items: 2,
                margin: 5,
            },
            1024: {
                items: 3,
                margin: 5,
            }
        }
    });

    var owl__gallery = $('.owl__gallery');
    owl__gallery.owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        items: 6,
        responsive: {
            0: {
                items: 4,
                margin: 5,
            },
            480: {
                items: 4,
                margin: 5,
            },
            768: {
                items: 5,
                margin: 5,
            },
            1024: {
                items: 6,
                margin: 5,
            }
        }
    });
    $(document).on('click', '.owl__gallery .owl-item', function () {
        const index = $(this).index();
        const image = $(this).find('.product__thumb--item').data('image');
        $('.owl__gallery').trigger('owl.goTo', index);
        $('.product__detail--left .thumbs__main picture img').attr('src', image);
    });
    $(document).on('click', '.btnMenuMobile', function (e) {
        e.preventDefault();
        $('.menu__mobile--nav').addClass('active');
    });
    $(document).on('click', '.btnCloseMenu', function (e) {
        e.preventDefault();
        $('.menu__mobile--nav').removeClass('active');
    });

    //Product detail
    $('body').on('click', '.btnMinus,.btnPlus', function (e) {
        e.preventDefault();
        const qty = $('input[name="qty"]');
        const quantity = $('input[name="quantity"]');
        const action = $(this).data('action');
        let value = qty.val();
        if (action == 'minus') {
            value = parseInt(value) - 1;
        }
        else {
            value = parseInt(value) + 1;
        }
        qty.val(value);
        quantity.val(value);
    });
    $('body').on('change', '.variant_radio', function (e) {
        e.preventDefault();
        let jsonData = $('#productVariants').text();
        let dataJson = JSON.parse(jsonData);
        var checkedRadioValues = {};
        var variantRadio = $('.variant_radio');
        var selectedOptions = {};
        variantRadio.each(function (index, element) {
            const _this = $(element);
            if (_this.is(":checked")) {
                var radioButtonName = _this.attr('name');
                var radioButtonValue = _this.val();
                selectedOptions[radioButtonName] = radioButtonValue;
            }
        });
        dataJson.forEach(function (item) {
            var isMatching = true;
            for (var key in selectedOptions) {
                if (!item.options.includes(selectedOptions[key])) {
                    isMatching = false;
                    break;
                }
            }
            if (isMatching) {
                checkedRadioValues = item;
            }
        });
        $('input[name="id"]').val(checkedRadioValues.id);
    });
    $('body').on('click', '#btn-addcart', function (e) {
        e.preventDefault();
        const formCart = $('#AddToCartForm');
        formCart.submit();
    });
});

