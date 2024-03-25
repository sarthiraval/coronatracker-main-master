(function($) {
        "use strict";

        /*:::::::::::::::::::::::::::::::::::
                Navbar Area
        :::::::::::::::::::::::::::::::::::*/

        // Navbar Sticky
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 1) {
                $(".navbar").addClass("bg-primari");
            } else {
                $(".navbar").removeClass("bg-primari");
            }
        });


        //Smoth Scroll
        $(function() {
            $('.nav-link, .smoth-scroll').on('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 0
                }, 1000);
                event.preventDefault();
            });
        });

        /*==========================
            Hero Area Slider
        ============================*/

        $('.hero-area-slids').owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            doots: false,
            autoplay: true,
            animateOut: 'fadeOutRight',
            animateIn: 'fadeIn'

        });
        //Wow Animation
        new WOW().init();
        /*==========================
            Hero Title typer
        ============================*/
        var element = $('.typed');

        $(function() {
            element.typed({
                strings: ["Web Developer.", "Android Developer","React-Native Developer"],
                typeSpeed: 100,
                loop: true,
                autoplay: true,
            });
        });

        /*::::::::::::::::::::::::::::::::::::
           Portfolio Section
        ::::::::::::::::::::::::::::::::::::*/

        lightbox.option({
            'imageFadeDuration': 800,
            'resizeDuration': 500,
            'wrapAround': true
        });

        $('.portfolio-area').mixItUp();


        /*::::::::::::::::::::::::::::::::::::
           Testimonial Section
        ::::::::::::::::::::::::::::::::::::*/

        $('.testimonials').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: false
        });

        function scrollUp() {
            const scrollUp = document.getElementById("scroll-up");
            // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
            if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
            else scrollUp.classList.remove("show-scroll");
        }
        window.addEventListener("scroll", scrollUp);




    }
    (jQuery));

$(function() {

    $(document).on('scroll', function() {

        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });

    $('.scroll-top-wrapper').on('click', scrollToTop);
});

function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({ scrollTop: offsetTop }, 500, 'linear');
}
$(window).on('load', function() {
    $('.preloader').fadeOut();
});
var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
});
$('#portfolio-flters li').on('click', function() {
    $("#portfolio-flters li").removeClass('active');
    $(this).addClass('active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
});

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});