let p1 = document.getElementById("player1");
let p2 = document.getElementById("player2");

let rep = false;

p1.addEventListener("click", function() {
    let audio1 = document.getElementById("audio1");
    if (!rep) {
        audio1.play();
        rep = true;
    } else {
        audio1.pause();
        rep = false;
    }

});

p2.addEventListener("click", function() {
    let audio2 = document.getElementById("audio2");
    if (!rep) {
        audio2.play();
        rep = true;
    } else {
        audio2.pause();
        rep = false;
    }

});

p2.addEventListener("click", function() {
    let audio3 = document.getElementById("audio3");
    if (!rep) {
        audio3.play();
        rep = true;
    } else {
        audio3.pause();
        rep = false;
    }

});

p4.addEventListener("click", function() {
    let audio4 = document.getElementById("audio4");
    if (!rep) {
        audio4.play();
        rep = true;
    } else {
        audio4.pause();
        rep = false;
    }

});