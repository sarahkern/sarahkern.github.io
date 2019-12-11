window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () { playSample("kick.mp3"); });
    document.querySelector("#button2").addEventListener("mousedown", function () { playSample("snare.mp3"); });
    document.querySelector("#button3").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
    document.querySelector("#button4").addEventListener("mousedown", function () { playSample("F.mp3"); });
    document.querySelector("#button5").addEventListener("mousedown", function () { playSample("G.mp3"); });
    document.querySelector("#button6").addEventListener("mousedown", function () { playSample("A.mp3"); });
    document.querySelector("#button7").addEventListener("mousedown", function () { playSample("C.mp3"); });
    document.querySelector("#button8").addEventListener("mousedown", function () { playSample("laugh-1.mp3"); });
    document.querySelector("#button9").addEventListener("mousedown", function () { playSample("gong.mp3"); });
    document.querySelector("#playButton").addEventListener("click", changeBeat);
    document.querySelector("#microButton").addEventListener("click", recordBeat);
    document.querySelector("#trashButton").addEventListener("click", deleteBeat);
});
var beat = ["kick.mp3", "kick.mp3", "snare.mp3", "kick.mp3", "F.mp3", "C.mp3", "gong.mp3"];
var record = false;
function playSample(mp3sounds) {
    var sound = new Audio(mp3sounds);
    sound.play();
    if (record == true) {
        beat.push(mp3sounds);
    }
}
var tempo;
var index = 0;
function playBeat() {
    playSample(beat[index]);
    index += 1;
    console.log(index);
    if (index > (beat.length - 1))
        index = 0;
}
function changeBeat() {
    if (document.getElementById("playButton").classList.contains("fa-play-circle")) {
        document.getElementById("playButton").classList.remove("fa-play-circle");
        document.getElementById("playButton").classList.add("fa-stop-circle");
        tempo = setInterval(playBeat, 500);
        record = false;
    }
    else {
        document.getElementById("playButton").classList.remove("fa-stop-circle");
        document.getElementById("playButton").classList.add("fa-play-circle");
        clearInterval(tempo);
    }
}
function recordBeat() {
    beat.length = 0;
}
function deleteBeat() {
    record = true;
}
//# sourceMappingURL=typescript.js.map