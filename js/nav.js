$(document).ready(function () {
    // Mobile nav bar
    const nav = $('.nav');
    const toggle = $('.toggle');
    const navOverlay = $('.nav-overlay');
    let lastScrollTop = 0;

    toggle.click(function () {
        $(this).toggleClass("active");
        navOverlay.toggleClass("open");
    });

    // Function to close nav overlay
    function closeNavOverlay() {
        toggle.removeClass("active");
        navOverlay.removeClass("open");
    }

    // Nav scroll fade and close on scroll
    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        nav.toggleClass('fade-out', scrollTop > lastScrollTop);
        lastScrollTop = scrollTop;

        // Close nav overlay on scroll
        closeNavOverlay();
    });
});
