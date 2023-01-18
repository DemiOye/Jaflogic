
let slide = document.getElementById("home");
let dot1 = document.getElementById("dot-1");
let dot2 = document.getElementById("dot-2");
let dot3 = document.getElementById("dot-3");

window.onload = function() {

    slide.className = "slide-one";
    dot1.className = "dot-active";
    dot2.className = "dot-inactive";
    dot3.className = "dot-inactive";

    function slideShow() {

        if (slide.className === "slide-one") {

                slide.className = "slide-two";
                dot1.className = "dot-inactive";
                dot2.className = "dot-active";
                dot3.className = "dot-inactive";

                //console.log(slide.className);
        }

        else if (slide.className === "slide-two") {

                slide.className = "slide-three";
                dot1.className = "dot-inactive";
                dot2.className = "dot-inactive";
                dot3.className = "dot-active";

                //console.log(slide.className);

            }

        else if (slide.className === "slide-three") {

                slide.className = "slide-one";
                dot1.className = "dot-active";
                dot2.className = "dot-inactive";
                dot3.className = "dot-inactive";

                //console.log(slide.className);

            }

    }

    setInterval(slideShow, 4000);

}
