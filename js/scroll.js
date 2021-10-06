'use strict'

// 스크롤시 세션안에 이미지들이 원래 이미지 위치로 돌아가는 이벤트
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl){
new ScrollMagic
    .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정 
        triggerHook: .6 // 위 triggerElement가 0.8위치에 걸리면 실행되게하는 옵션
    })
    .setClassToggle(spyEl,'on')
    .addTo(new ScrollMagic.Controller());
})