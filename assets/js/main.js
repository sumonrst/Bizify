
$(document).ready(function() {
    $('.services_area__services').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
    });
    $('.testimonial').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 2,
    });
});