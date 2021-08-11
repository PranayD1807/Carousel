
function slideleft() {
    console.log("left")
    if (window.innerWidth < 500) {
        document.getElementById('frame').scrollBy({ top: 0, left: -231, behavior: "smooth" })
    }
    else {
        document.getElementById('frame').scrollBy({ top: 0, left: -750, behavior: "smooth" });

    }
}
function slideright() {
    console.log("right")
    // here scrollBy(1200,0), 1200 is 1200px
    // syntax used here is different and easy to understand
    if (window.innerWidth < 500) {
        document.getElementById('frame').scrollBy({ top: 0, left: 231, behavior: "smooth" })
    }
    else {
        document.getElementById('frame').scrollBy({ top: 0, left: 750, behavior: "smooth" });

    }
}
function slide1() {
    // we save location of element from left in var location using offsetleft
    var location1 = document.getElementById("slide1").offsetTop;
    document.getElementById('frame').scrollTo({ left: location1, top: 0, behavior: "smooth" })


}
function slide2() {
    var location2 = document.getElementById("slide2").offsetLeft;
    document.getElementById('frame').scrollTo({ left: location2, top: 0, behavior: "smooth" });


}
function slide3() {
    var location3 = document.getElementById("slide3").offsetLeft;
    document.getElementById('frame').scrollTo({ left: location3, top: 0, behavior: "smooth" })
}
function slide4() {
    var location4 = document.getElementById("slide4").offsetLeft;
    document.getElementById('frame').scrollTo({ left: location4, top: 0, behavior: "smooth" })
    // console.log(location4)

    // document.getElementById("dot1").style.backgroundColor = "White";
    // document.getElementById("dot2").style.backgroundColor = "White";
    // document.getElementById("dot3").style.backgroundColor = "White";
    // document.getElementById("dot4").style.backgroundColor = "White";
    // document.getElementById("dot5").style.backgroundColor = "White";
    // document.getElementById("dot6").style.backgroundColor = "White";

    // document.getElementById("dot4").style.background = "transparent";
}
function slide5() {
    var location5 = document.getElementById("slide5").offsetLeft;
    document.getElementById('frame').scrollTo({ left: location5, top: 0, behavior: "smooth" })
}
function slide6() {
    var location6 = document.getElementById("slide6").offsetLeft;
    document.getElementById('frame').scrollTo({ left: location6, top: 0, behavior: "smooth" })
}
function slide7() {
    var location7 = document.getElementById("slide7").offsetLeft;
    document.getElementById('frame').scrollTo({ left: location7, top: 0, behavior: "smooth" })
}
function slide8() {
    var location8 = document.getElementById("slide8").offsetLeft;
    document.getElementById('frame').scrollTo({ left: location8, top: 0, behavior: "smooth" })
}

