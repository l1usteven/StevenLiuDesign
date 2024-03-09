$(document).ready(function () {
    const jumpTopBtn = $('.jump-top');

    // Jump to top
    $(window).scroll(function () {
        jumpTopBtn.toggle($(this).scrollTop() > 100);
    });

    jumpTopBtn.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, "slow");
    });
});
