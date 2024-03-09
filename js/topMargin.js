// Function to set top margin for elements
function setTopMargin(targetClass) {
    const navHeight = $('.nav').outerHeight();
    const totalMargin = (targetClass === '.hero') ? navHeight + 32 : navHeight;
    $(targetClass).css('margin-top', totalMargin + 'px');
}

// Function to handle resizing and initial setup
function handleResize() {
    setTopMargin('.hero');
    setTopMargin('.banner');
}

// Call handleResize on document ready and window resize
$(document).ready(handleResize);
$(window).resize(handleResize);
