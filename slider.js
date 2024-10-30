$(document).ready(function() {
    $('.gallery').on(`init reInit`, function(event, slick) {
        $('.pager').text(1 + ' / ' + Math.ceil(slick.slideCount / slick.getOption('slidesToShow')));
    });
    $('.gallery').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
        $('.pager').text((Math.floor(currentSlide/ slick.getOption('slidesToShow')) + 1) + ' / ' + Math.ceil(slick.slideCount / slick.getOption('slidesToShow')));
    });
    $('.gallery').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: '<button class="arrow right" id="nextBtn">&#10095;</button>',
        prevArrow: '<button class="arrow left" id="prevBtn">&#10094;</button>',
        responsive: [
            { breakpoint: 980, settings: { slidesToShow: 2, slidesToScroll: 2} },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1} }
          ]
    });
}); 
