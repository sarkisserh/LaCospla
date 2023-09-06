jQuery(document).ready(function () {
    $(function () {
        $(".wrap-form input[type='tel']").mask("+380(99) 999-99-99");
    });

    $('.btn-mobile').click(function () {
        $('body').toggleClass('open-menu-mobile');
    });

    if ($(window).width() < 992) {
        $('.toogle-mobile-menu').click( function () {
            $(this).next('ul').slideToggle('200');
            $('footer').toggleClass('minus');
            $(this).toggleClass('open')
        });
    }
});
