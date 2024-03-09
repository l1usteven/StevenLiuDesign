$(document).ready(function () {
    function matchHeight() {
        const imgRowHeight = $('.prototype-img').height();
        $('.single-img').css('height', imgRowHeight + 'px');
    }

    $(window).on('resize', matchHeight);

    matchHeight();
});