let p1 = document.getElementById("player1");
let p2 = document.getElementById("player2");
let p3 = document.getElementById("player3");
let p4 = document.getElementById("player4");

let rep = false;

p1.addEventListener("click", function() {
    let audio1 = new Audio();
    audio1.setAttribute("src", "assets/media/sounds/lovelost-macmiller.mp3");
    if (!rep) {
        audio1.play();
        rep = true;
    } else {
        audio1.pause();
        rep = false;
    }

});

p2.addEventListener("click", function() {
    let audio2 = new Audio();

    audio2.setAttribute("src", "/assets/media/sounds/yanohayverano-dep.mp3");

    if (!rep) {
        audio2.play();
        rep = true;
    } else {
        audio2.pause();
        rep = false;
    }

});

p3.addEventListener("click", function() {
    let audio3 = new Audio();

    audio3.setAttribute("src", "assets/media/sounds/segonaconjugacio-lafumiga.ogg");

    if (audio3.paused) {
        audio3.play();

    } else audio3.pause();

});

p4.addEventListener("click", function() {
    let audio4 = new Audio();

    audio4.src = ("/assets/media/sounds/tanvacio-walls.ogg");

    console.log(rep);
    if (rep) {
        audio4.pause();
        rep = false;
    } else {
        audio4.play();
        rep = true;

    }

});