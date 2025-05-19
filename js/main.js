(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        // ✅ ACTIVAR ENLACE SEGÚN LA PÁGINA ACTUAL
        var currentPage = window.location.pathname.split("/").pop();
        $('.navbar-nav .nav-link').each(function () {
            if ($(this).attr('href') === currentPage) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        // ✅ FIN BLOQUE NUEVO
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // ✅ BÚSQUEDA DE PRODUCTOS (AGREGADO)
    $(document).ready(function () {
        $('#searchInput').on('keyup', function () {
            var value = $(this).val().toLowerCase();
            $('.package-item').each(function () {
                var title = $(this).find('a.h5').text().toLowerCase();
                if (title.includes(value)) {
                    $(this).closest('.col-lg-4, .col-md-6').show();
                } else {
                    $(this).closest('.col-lg-4, .col-md-6').hide();
                }
            });
        });
    });
    // ✅ FIN BLOQUE DE BÚSQUEDA

})(jQuery);

// Script para búsqueda en tiempo real de productos
$('#searchInput').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    $('.product-item').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
});
