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
    $('.testimonial').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 2,
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