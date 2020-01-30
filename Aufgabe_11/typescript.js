// Deklaration von Variablen und Arrays: 
var drawStack = []; // ungemischter Ablagestapel
generatedrawStack();
var myHand = []; // Array der Spielerkarten
var pcHand = []; // Array der Gegnerkarten
var playStack = []; // Array für Spielstapel (mit der aktiven Karte oben)
var currentCard;
var currentPlayer;
var alreadyTookCard = false;
window.onload = function () {
    document.getElementById("gamestart").addEventListener("click", shuffleAndPlay, false);
};
// Mischt alle Karten und bereitet das Feld vor:
function shuffleAndPlay() {
    // Alles zurücksetzen
    clearAll();
    generatedrawStack();
    // Mischen
    drawStack = shuffle(drawStack);
    // Abwechselnd Karten an Spieler und Computer (Gegner) verteilen, bis jeder 5 Karten hat
    var i = 5;
    while (i) {
        myHand.push(drawStack[0]);
        drawStack.splice(0, 1);
        pcHand.push(drawStack[0]);
        drawStack.splice(0, 1);
        i -= 1;
    }
    //Spieler-Karten im HTML erzeugen
    updateHtml(myHand);
    // Computer-Karten im HTML erzeugen
    updateHtml(pcHand);
    // Aktive Karte vom Aufnahmestapel nehmen und in Html erzeugen
    playStack.push(drawStack[drawStack.length - 1]);
    currentCard = {
        color: playStack[0].color,
        number: playStack[0].number
    };
    drawStack.splice(drawStack.length - 1, 1);
    updateHtml(playStack);
    // Aufnahmestapel in Html erzeugen
    updateHtml(drawStack);
    document.getElementById("stack").addEventListener("click", takeCard, false);
    // In currentMove Html Section beschreiben, wer als Nächstes an der Reihe ist/Was zu tun ist
    document.getElementById("currentMove").innerHTML = "Du darfst beginnen!";
    currentPlayer = true;
}
function playThisCard(cardToPlay, index) {
    if (currentPlayer) {
        if (cardToPlay.color == currentCard.color || cardToPlay.number == currentCard.number) {
            currentPlayer = false;
            alreadyTookCard = false;
            playStack.push(cardToPlay);
            currentCard = cardToPlay;
            myHand.splice(index, 1);
            updateHtml(myHand);
            updateHtml(playStack);
            // Überprüfe ob Spieler noch Karten hat
            if (myHand.length == 0) {
                window.alert("Glückwunsch, du hast gewonnen! Professor Dumbledore ist stolz auf dich und schenkt dir 100 Punkte für das Haus deiner Wahl.");
                clearAll();
            }
            else {
                document.getElementById("currentMove").innerHTML = "Dein Gegner ist an der Reihe!";
                alreadyTookCard = false;
                opponent();
            }
        }
        else {
            window.alert("Die Karte passt nicht! Spiel eine andere oder nimm eine neue Karte auf.");
        }
    }
}
function takeCard() {
    if (currentPlayer) {
        if (alreadyTookCard == false && playableCardsCount() == 0) {
            // Bei leerem Aufnahmestapel neu mischen
            if (drawStack.length == 0) {
                reshuffleStack();
            }
            myHand.push(drawStack[drawStack.length - 1]);
            drawStack.splice(drawStack.length - 1, 1);
            updateHtml(myHand);
            updateHtml(drawStack);
            alreadyTookCard = true;
            console.log(drawStack);
            if (myHand[myHand.length - 1].color != currentCard.color && myHand[myHand.length - 1].number != currentCard.number) {
                currentPlayer = false;
                document.getElementById("currentMove").innerHTML = "Dein Gegner ist an der Reihe!";
                alreadyTookCard = false;
                opponent();
            }
        }
        else if (playableCardsCount() > 0) {
            document.getElementById("currentMove").innerHTML = "Du musst keine Karte aufnehmen!";
        }
        else if (alreadyTookCard) {
            document.getElementById("currentMove").innerHTML = "Du hast schon eine Karte aufgenommen!";
        }
    }
}
function opponent() {
    var couldLay = false;
    for (var i = 0; i < pcHand.length; i++) {
        // Fall 1: Gegner kann eine Karte legen
        if (pcHand[i].color == currentCard.color || pcHand[i].number == currentCard.number) {
            currentCard = pcHand[i];
            playStack.push(currentCard);
            pcHand.splice(i, 1);
            document.getElementById("currentMove").innerHTML = "Der Gegner legt eine Karte ab!";
            setTimeout(function () { updateHtml(playStack); updateHtml(pcHand); }, 1500);
            // Dann ist der Spieler wieder an der Reihe
            setTimeout(function () { document.getElementById("currentMove").innerHTML = "Du bist dran!"; currentPlayer = true; }, 1600);
            //setze Signalwort auf true, sodass klar ist, dass eine Karte gelegt werden konnte
            couldLay = true;
            // Überprüfe ob Gegner keine Karten mehr, also gewonnen hat
            if (pcHand.length == 0) {
                setTimeout(function () { window.alert("Du hast veloren! Der dunkle Lord übernimmt die Macht an der Schule."); clearAll(); }, 1600);
            }
            break;
        }
    }
    // Fall 2: Gegner kann nicht legen, nimmt eine Karte auf und versucht diese abzulegen (Signalwort ist noch auf false)
    if (couldLay == false) {
        if (drawStack.length == 0) {
            reshuffleStack();
        }
        pcHand.push(drawStack[drawStack.length - 1]);
        drawStack.splice(drawStack.length - 1, 1);
        document.getElementById("currentMove").innerHTML = "Gegner nimmt eine Karte auf!";
        setTimeout(function () { updateHtml(drawStack); updateHtml(pcHand); }, 1600);
        if (pcHand[pcHand.length - 1].color == currentCard.color || pcHand[pcHand.length - 1].number == currentCard.number) {
            currentCard = pcHand[pcHand.length - 1];
            playStack.push(currentCard);
            setTimeout(function () { pcHand.splice(pcHand.length - 1, 1); document.getElementById("currentMove").innerHTML = "Der Gegner legt eine Karte ab!"; }, 2000);
            setTimeout(function () { updateHtml(pcHand); updateHtml(playStack); }, 2000);
        }
        // Dann ist der Spieler wieder an der Reihe
        setTimeout(function () { document.getElementById("currentMove").innerHTML = "Du bist dran!"; currentPlayer = true; }, 2000);
    }
}
function playableCardsCount() {
    var count = 0;
    for (var i = 0; i < myHand.length; i++) {
        if (myHand[i].color == currentCard.color || myHand[i].number == currentCard.number) {
            count += 1;
        }
    }
    return count;
}
function reshuffleStack() {
    document.getElementById("currentMove").innerHTML = "Der Ablagestapel ist leer und wird aus den gespielten Karten neu zusammengemischt!";
    playStack.splice(playStack.length - 1, 1);
    drawStack = shuffle(playStack);
    playStack = [currentCard];
    updateHtml(drawStack);
    updateHtml(playStack);
}
function updateHtml(array) {
    var classStr = "";
    if (array == myHand) {
        classStr = "player";
    }
    else if (array == pcHand) {
        classStr = "computer";
    }
    else if (array == drawStack) {
        classStr = "stack";
    }
    else if (array == playStack) {
        classStr = "active";
    }
    clearHtml(classStr);
    if (classStr == "player" || classStr == "active") {
        for (var i = 0; i < array.length; i++) {
            createOpenCardHtml(array, i, classStr);
        }
    }
    else {
        for (var i = 0; i < array.length; i++) {
            createHiddenCardHtml(array, i, classStr);
        }
    }
}
function createOpenCardHtml(array, arrayIndex, classString) {
    var holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", classString + " " + "card" + " " + array[arrayIndex].color);
    document.getElementById(classString).appendChild(holdingDiv);
    var i = 5;
    while (i) {
        var numberP = document.createElement("p");
        numberP.innerHTML = "" + array[arrayIndex].number;
        if (i == 5) {
            numberP.setAttribute("class", "topleft");
        }
        else if (i == 4) {
            numberP.setAttribute("class", "topright");
        }
        else if (i == 3) {
            numberP.setAttribute("class", "middle");
        }
        else if (i == 2) {
            numberP.setAttribute("class", "bottomleft");
        }
        else if (i == 1) {
            numberP.setAttribute("class", "bottomright");
        }
        holdingDiv.appendChild(numberP);
        i -= 1;
    }
    if (classString == "player") {
        holdingDiv.addEventListener("click", function () { playThisCard(array[arrayIndex], arrayIndex); }, false);
    }
}
// Verdeckte Karte in HTML erstellen
function createHiddenCardHtml(array, arrayIndex, classString) {
    var holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", classString + " " + "card" + " " + "backside");
    document.getElementById(classString).appendChild(holdingDiv);
    var image = document.createElement("img");
    image.setAttribute("src", "Images/Rückseite.png");
    holdingDiv.appendChild(image);
}
// Alle Karten neu generieren
function generatedrawStack() {
    for (var i = 0; i < 4; i++) {
        var color = void 0;
        if (i == 0) {
            color = "red";
        }
        else if (i == 1) {
            color = "blue";
        }
        else if (i == 2) {
            color = "yellow";
        }
        else if (i == 3) {
            color = "green";
        }
        for (var j = 0; j <= 9; j++) {
            var newCard = {
                color: color,
                number: j
            };
            drawStack.push(newCard);
        }
    }
}
function clearAll() {
    clearHtml("player");
    clearHtml("computer");
    clearHtml("active");
    clearHtml("stack");
    myHand = [];
    pcHand = [];
    drawStack = [];
    playStack = [];
    var currentCard;
    var currentPlayer = true;
    var alreadyTookCard = false;
}
function clearHtml(classString) {
    var myNode = document.getElementById(classString);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}
// Fisher-Yates shuffle Algorithmus
function shuffle(array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}
//# sourceMappingURL=typescript.js.map
