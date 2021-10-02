
//OFFER 
const swiper = new Swiper('.offers', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    navigation: {
        nextEl: '.offers .swiper-button-next',
        prevEl: '.offers .swiper-button-prev',
    },
});


//SLIDE SHOW
new Swiper('.slide_show', {
    direction: 'horizontal',
    slidesPerView:1,
    spaceBetween:10,
    loop: true,
    centeredSlides: true,
    navigation: {
        prevEl: '.slide_show .swiper-button-prev',
        nextEl: '.slide_show .swiper-button-next'
    }
});
