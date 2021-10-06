
//OFFER 세션
const offers = tns({
    container: '.offers .slider_container',
    slideBy: 'page',
    items:3,
    mouseDrag: true,
    controlsText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    controlsPosition:"bottom"
  });


//SLIDE SHOW 세션 
const slide_show = tns({
      container: '.slide_show .slider_container',
      slideBy: 'page',
      mouseDrag: true,
      controlsText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
      controlsPosition:"bottom"
    });