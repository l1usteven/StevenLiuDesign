$(document).ready(function () {
    // fade load
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    });

    const fadeElements = document.querySelectorAll(".fade");
    fadeElements.forEach((element) => {
        observer.observe(element);
    });

    // logo spacing
    const element = document.getElementById('desktop_nav');
    const width = element.clientWidth;

    const otherElement = document.getElementById('nav_contact_btn');
    const otherElementWidth = otherElement.clientWidth;

    otherElement.style.marginLeft = `${width - otherElementWidth}px`;

    // nav_btn toggle
    $("#toggle").click(function () {
        $(this).toggleClass("active");

        $("#overlay").toggleClass("open");
    });

    // typewriter effect
    function typeWriter(elementId, textArr) {
        let count = 0;
        let i = 0;
        const typingSpeed = 150;

        function type() {
            if (count < textArr.length) {
                if (i < textArr[count].length) {
                    document.getElementById(elementId).innerHTML += textArr[count][i];
                    i++;
                    setTimeout(type, typingSpeed);

                } else {
                    setTimeout(() => {
                        i = 0;
                        count++;
                        document.getElementById(elementId).innerHTML = "";
                        setTimeout(type, typingSpeed);
                    }, typingSpeed);
                }

            } else {
                count = 0;
                i = 0;

                document.getElementById(elementId).innerHTML = "";
                setTimeout(type, typingSpeed);
            }
        }
        setTimeout(type, typingSpeed);
    }
    const textArr1 = ["Product Designer", "Product Manager", "UX Designer"];
    typeWriter("text_me", textArr1);

    // hover effect
    const hoverElements = document.querySelectorAll('.hover');

    // mouse
    hoverElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('hover-active');
        });

        element.addEventListener('mouseleave', () => {
            element.classList.remove('hover-active');
        });
    });

    // flip card
    const flipCards = document.querySelectorAll('.flip_card');

    flipCards.forEach(card => {
        const cardFront = card.querySelector('.flip_card_front');
        const cardBack = card.querySelector('.flip_card_back');

        cardFront.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        cardBack.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // carousel
    const breakpointMobile = 700;
    let isChanging = false;
    let isFiltered = false;

    $("#breakpointMobile").text(breakpointMobile);

    const $carousel = $("#carousel");

    $carousel.on("init breakpoint", function (event, slick) {
        if (!isChanging) {
            $("#breakpointValue").text(String(slick.activeBreakpoint));

            isChanging = true;

            if (slick.activeBreakpoint && slick.activeBreakpoint <= breakpointMobile) {

            } else {
                if (isFiltered) {
                    slick.slickUnfilter();
                    isFiltered = false;
                }
            }
            isChanging = false;
        }
    })
    $carousel.slick({
        autoplay: true,
        dots: true,
        appendDots: "#carousel",
        responsive: [{ breakpoint: 768 }],
        prevArrow: null,
        nextArrow: null
    });



})

