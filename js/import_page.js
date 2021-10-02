//offer페이지에서 진행중 버튼 클릭시

$(document).ready(function () {
    $.ajax({
        url: "ongoing_event.html",
        dataType: 'html',
        success: function (result) {
            $(".offerlist").html(result);
        }
    });
    $(".offer__btn--ongoing").click(function () {
        $.ajax({
            url: "ongoing_event.html",
            dataType: 'html',
            success: function (result) {
                $(".offerlist").html(result);
            }
        });
    });
    $(".offer__btn--close").click(function () {
        $.ajax({
            url: "close_event.html",
            dataType: 'html',
            success: function (result) {
                $(".offerlist").html(result);
            }
        });
    });
});