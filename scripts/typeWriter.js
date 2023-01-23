
// Function to handle the typing effect
function typeWriter(elementId, textArr) {
    var count = 0;
    var i = 0;
    // speed for typing effect
    var typingSpeed = 100;
    // speed for interval between text strings
    var intervalSpeed = 2000;

    function type() {
        if (count < textArr.length) {
            if (i < textArr[count].length) {
                document.getElementById(elementId).innerHTML += textArr[count][i];
                i++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(function () {
                    i = 0;
                    count++;
                    document.getElementById(elementId).innerHTML = "";
                    setTimeout(type, typingSpeed);
                }, intervalSpeed);
            }
        } else {
            count = 0;
            i = 0;
            document.getElementById(elementId).innerHTML = "";
            setTimeout(type, intervalSpeed);
        }
    }
    setTimeout(type, intervalSpeed);
}

// Example usage
var textArr1 = ["Product Designer", "Product Manager", "UX Designer"];
//var textArr2 = ["Product Design", "Mobile App Design", "Website Design"];
//var textArr3 = ["Figma | Prototyping | Hi-Fi Mockups", "Research | User Flow | Wireframing", "HTML | CSS | Javascript"];
typeWriter("textMe", textArr1);
//typeWriter("textWhatIDo", textArr2);
//typeWriter("textSkills", textArr3);
