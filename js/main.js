(function () {
    'use strict'

    let loader = $('#loader');

    $('#submit').click(function (e) {
        e.preventDefault();
        $('.error-input').hide();


        let name = $('#name');
        let adress = $('#adress');
        let telefon = $('#telefon');

        let hasError = false;

        if (!name.val()) {
            name.siblings('.error-input').show();
            name.css('border-color', 'red');
            hasError = true;
        } else {
            name.css('border-color', 'rgb(185, 145, 80)');
        }

        if (!adress.val()) {
            adress.siblings('.error-input').show();
            adress.css('border-color', 'red');
            hasError = true;
        } else {
            adress.css('border-color', 'rgb(185, 145, 80)');
        }

        if (!telefon.val()) {
            telefon.siblings('.error-input').show();
            telefon.css('border-color', 'red');
            hasError = true;
        } else {
            telefon.css('border-color', 'rgb(185, 145, 80)');
        }

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: 'POST',
                url: 'https://itlogia.ru/test/checkout',
                data: {name: name.val(), adress: adress.val(), telefon: telefon.val()}
            })
                .done(function (message) {
                    loader.hide();
                    console.log(message);
                    if (message.success) {
                        $('#order-form').hide();
                        $('#form-hidden').css('display', 'flex');
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                })
        }
    });
}())