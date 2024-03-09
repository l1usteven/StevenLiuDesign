$(document).ready(function () {
    const zoomable = $('.zoomable');

    zoomable.click(function () {
        $(this).toggleClass("zoomed");
        const img = $(this).find("img");
        if ($(this).hasClass("zoomed")) {
            img.css("transform");
        } else {
            img.removeAttr("style");
        }
    });

    $(window).resize(function () {
        if (!zoomable.hasClass("zoomed")) {
            zoomable.find("img").removeAttr("style");
        }
    });

    $(window).scroll(function () {
        if (zoomable.hasClass("zoomed")) {
            zoomable.removeClass("zoomed");
            zoomable.find("img").removeAttr("style");
        }
    });
});
