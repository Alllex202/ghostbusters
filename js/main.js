$(document).ready(function () {
    const mMenuBtn = $(".m-menu-button");
    const mMenu = $('.m-menu');
    const tab = $('.tab');
    const body = $('body, html');
    const film = $('.film')
    let scroll;
    mMenuBtn.on('click', function () {
        if (mMenu[0].classList.contains('active') && film[0].classList.contains('d-none')) {
            film.toggleClass('d-none');
            $('.cast').toggleClass('d-none');
            $('.news').toggleClass('d-none');
            mMenu.toggleClass('close');
            setTimeout(function () {
                mMenu.toggleClass('close');
                mMenu.toggleClass('active');
            }, 300);
            mMenuBtn.toggleClass('m-menu-button-open');
            body.scrollTop(scroll);
            body.toggleClass('no-scroll');
        } else if (!mMenu[0].classList.contains('active')) {
            scroll = body.scrollTop();
            body.toggleClass('no-scroll');
            mMenu.toggleClass('active');
            mMenuBtn.toggleClass('m-menu-button-open');
            setTimeout(function () {
                film.toggleClass('d-none');
                $('.cast').toggleClass('d-none');
                $('.news').toggleClass('d-none');
            }, 300);
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