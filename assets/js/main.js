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