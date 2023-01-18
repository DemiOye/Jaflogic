
let slide = document.getElementById("home");



window.onload = function() {

    slide.className = "slide-one";

    function slideShow() {

            if (slide.className === "slide-one") {

                slide.className = "slide-two";

                //console.log(slide.className);
        }

        else    if (slide.className === "slide-two") {

                    slide.className = "slide-three";

                    //console.log(slide.className);

            }

        else    if (slide.className === "slide-three") {

                    slide.className = "slide-one";

                    //console.log(slide.className);

            }

    }

    setInterval(slideShow, 4000);

}
