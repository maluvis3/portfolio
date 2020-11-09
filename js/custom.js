$(document).ready(function () {

    // mobile menu click event
    $(".menuBtn").click(function () {
        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
            $(".gnb").animate({ right: 0 }, 300);
        } else {
            $(".gnb").animate({ right: '-100%' }, 300);
        }

        if ($("header").hasClass("on")) {
            if ($(this).hasClass("on")) {
                $(this).find("div").css("background", "#fff");
            } else {
                $(this).find("div").css("background", "#101010");
            }
        }
    });

    // // common header 
    // $(window).scroll(function () {
    //     var scroll = $(window).scrollTop();
    //     var logoHeight = $(".logo").outerHeight();
    //     if (scroll >= logoHeight) {
    //         $("header").addClass("fixed");
    //     } else {
    //         $("header").removeClass("fixed");
    //     }

    // });

    // // activate navigation

    // $(".menuBtn").click(function () {
    //     var winWidth = $(window).width();

    //     if (winWidth < 800) {
    //         $(".gnb").animate({ left: '50%' }, 300);
    //     }
    // });


    // $(".close").click(function () {
    //     var winWidth = $(window).width();

    //     if (winWidth < 730) {
    //         $(".gnb").animate({ left: '-50%' }, 300);
    //     }
    // });



    // var header = $('header');
    // var logoimg = $('.logoimg');

    // $(window).scroll(function (e) {
    //     if (header.offset().top !== 0) {
    //         if (!header.hasClass('shadow')) {
    //             header.addClass('shadow');
    //             logoimg.attr('src', '/assets/images/headerlogo_white.png')
    //         }
    //     } else {
    //         header.removeClass('shadow');
    //         logoimg.attr('src', '/assets/images/headerlogo_black.png')
    //     }
    // });



    $(".progress_html").animate({ width: '80%' }, 3000);
    $(".progress_css").animate({ width: '80%' }, 3000);
    $(".progress_jquery").animate({ width: '70%' }, 3000);
    $(".progress_photo").animate({ width: '90%' }, 3000);
    $(".progress_illu").animate({ width: '90%' }, 3000);

});
