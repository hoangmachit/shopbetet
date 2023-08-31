function getActiveVariant() {
    let jsonText = $('#productVariants').text();
    let dataJson = JSON.parse(jsonText);
    let variantChecked = {};
    let variantRadio = $('.variant_radio');
    let selectedOptions = {};
    variantRadio.each(function (index, element) {
        const _this = $(element);
        if (_this.is(":checked")) {
            var variantName = _this.attr('name');
            var variantValue = _this.val();
            selectedOptions[variantName] = variantValue;
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
            variantChecked = item;
        }
    });
    return variantChecked;
}
function disabledButtonAddToCart(variant) {
    const btnAddToCart = $('#btn-addcart');
    if (variant.available) {
        btnAddToCart.removeAttr('disabled');
    } else {
        btnAddToCart.attr('disabled', 'disabled');
    }
}
function addDataForFormAddToCart(variant) {
    const form = $('#AddToCartForm');
    form.find('input[name="id"]').val(variant.id);
    form.find('input[name="quantity"]').val(1);
    $('input[name="qty"]').val(1);
}
function renderDataProduct(variant) {
    const product = $('.product__price__code');
    product.find('.product-code').text(`#${variant.sku}`);
    product.find('.price-current').text(variant.price);
}