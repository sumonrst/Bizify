
/* Video section text rotate animation */ 
const text = document.querySelector(".text");
text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
	)
	.join("");



$(document).ready(function() {
    $('.services_area__services').slick({
        dots: true,
        autoplay: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
    });
    $('.testimonial_area__client-outer').slick({
        dots: false,
        autoplay: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
    });




    $('.testimonial-outer').slick({
        dots: true,
        infinite: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,         // Enables center alignment for the active slide
        centerPadding: '0',       // Removes extra padding around the slides
        focusOnSelect: true,      // Clicking on a slide makes it active
        variableWidth: true 
    });

    $('.testimonial-outer').on('afterChange', function () {
        $('.inner-title').removeClass('hidden'); // Show h4 for all slides
        $('.slick-slide:not(.slick-current) .inner-title').addClass('hidden'); // Hide h4 for inactive slides
    });
    $('.testimonial-outer').on('afterChange', function () {
        $('.test-icon').removeClass('hidden'); // Show h4 for all slides
        $('.slick-slide:not(.slick-current) .test-icon').addClass('hidden'); // Hide h4 for inactive slides
    });
    $('.testimonial-outer').on('afterChange', function () {
        $('h5').removeClass('hidden'); // Show h4 for all slides
        $('.slick-slide:not(.slick-current) h5').addClass('hidden'); // Hide h4 for inactive slides
    });


    
});

/* Header Sticky Menu Code here */ 
$(window).scroll(function() {
    /* Header top social sticky start */
    if($(window).scrollTop() > 130) {
        $('.headertop').addClass('hide-header-top');
    }else{
        $('.headertop').removeClass('hide-header-top');
    }

    /* Header middle sticky start */
    if($(window).scrollTop() > 130) {
        $('.headermiddle').addClass('headermiddle-remove');
    }else{
        $('.headermiddle').removeClass('headermiddle-remove');
    }

    /* Header middle sticky start */
    if($(window).scrollTop() > 130) {
        $('.header__area').addClass('padding-remove');
    }else{
        $('.header__area').removeClass('padding-remove');
    }
});