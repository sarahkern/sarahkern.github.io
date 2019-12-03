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
    document.querySelector("#playButton").addEventListener("click", playBeat);
});

function playSample(mp3sounds) {
    var sound:any = new Audio(mp3sounds);
    sound.play();
}

function playBeat (){
    var beat:any = ["kick.mp3", "kick.mp3","snare.mp3", "kick.mp3", "F.mp3", "C.mp3", "gong.mp3"];
    var index:number = 0;
    var time:any = setInterval(startBeat, 500);
    function startBeat () {
        var sound:any = new Audio(beat[index]);
        sound.play();
        index++;
        if (index > 7)
            index = 0;
    }
    document.querySelector("#button10pause").addEventListener("mousedown", stopBeat);
    function stopBeat() {
        clearInterval(time);
    }
}

