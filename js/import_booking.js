// booking페이지에서 실시간예약 or 예약안내 버튼 클릭시
// 비동기형식으로 해당 페이지가 보여지는 이벤트
// 첫페이지에 보여질 영역

$.ajax({
    url: "real.html",
    dataType: 'html',
    success: function (result) {
        $(".booking__area").html(result);
        $(".booking__area>.confirmation>button").click(function () {
            console.log('ddd')
            $.ajax({
                url: "confirmation.html",
                dataType: 'html',
                success: function (result) {
                    $(".booking__area").html(result);
                }
            });
        });
    }

});


$(document).ready(function () {

    const booking = document.querySelector('.booking');
    const sub_menu = booking.querySelector('.btn--sub_menu');
    const sub_btns = sub_menu.querySelectorAll('span')
    const ON = 'on'


    sub_menu.addEventListener('click', (e) => {
        const target = e.target.parentNode;

        sub_btns.forEach((sub_btns) => {
            sub_btns.classList.remove(ON)

        })

        target.classList.add(ON)

    })

    $(sub_btns[0]).click(function () {
        $.ajax({
            url: "real.html",
            dataType: 'html',
            success: function (result) {
                $(".booking__area").html(result);
            }
        });
    });
    $(sub_btns[1]).click(function () {
        $.ajax({
            url: "booking_info.html",
            dataType: 'html',
            success: function (result) {
                $(".booking__area").html(result);
            }
        });
    });

});