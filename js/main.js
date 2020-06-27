$(document).ready(function () {
    const mMenuBtn = $(".m-menu-button");
    const mMenu = $('.m-menu');
    const tab = $('.tab');
    mMenuBtn.on('click', function () {
        mMenu.toggleClass('active');
        $('body').toggleClass('no-scroll');
        alett($(this));
        if (!$(this).classList.contains('m-menu-button-open')) {
            $(this).addClass('m-menu-button-open');
        }
    });

    tab.on('click', function () {
        tab.removeClass('active');
        $(this).toggleClass('active');
        let activeTabContent = $(this).attr('data-target');
        $('.tabs-content').removeClass('visible');
        $('#' + activeTabContent).toggleClass('visible');
    });

    let mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            781: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
                // slidesOffsetAfter: 50,
                navigation: {
                    nextEl: '.button-next',
                },
            },
        },
    });
});
