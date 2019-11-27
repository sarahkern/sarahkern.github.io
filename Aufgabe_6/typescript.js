var europa18 = 4209.3;
var africa18 = 1235.5;
var southamerica18 = 1261.5;
var northamerica18 = 6035.6;
var asia18 = 16274.1;
var australia18 = 2100.5;
var europa8 = 4965.7;
var africa8 = 1038;
var southamerica8 = 1132.6;
var northamerica8 = 6600.4;
var asia8 = 12954.7;
var australia8 = 1993;
var gesamt = asia18 + europa18 + africa18 + southamerica18 + northamerica18 + australia18;
var relgesamteu = (100 * europa18) / gesamt;
var vergleicheu = europa18 - europa8;
var veraenderungeu = (vergleicheu * 100) / europa18;
var relgesamtaf = (100 * africa18) / gesamt;
var vergleichaf = africa18 - africa8;
var veraenderungaf = (vergleichaf * 100) / africa18;
var relgesamtsa = (100 * southamerica18) / gesamt;
var vergleichsa = southamerica18 - southamerica8;
var veraenderungsa = (vergleichsa * 100) / southamerica18;
var relgesamtna = (100 * northamerica18) / gesamt;
var vergleichna = northamerica18 - northamerica8;
var veraenderungna = (vergleichna * 100) / northamerica18;
var relgesamtas = (100 * asia18) / gesamt;
var vergleichas = asia18 - asia8;
var veraenderungas = (vergleichas * 100) / asia18;
var relgesamtaus = (100 * australia18) / gesamt;
var vergleichaus = australia18 - australia8;
var veraenderungaus = (vergleichaus * 100) / australia18;
var a = "Die Emission von ";
var b = "Europa ";
var c = "Afrika ";
var d = "Südamerika ";
var e = "Nordamerika ";
var f = "Asien ";
var g = "Australien ";
var h = "ist: ";
var i = "kg CO2.";
var j = "Relativ zur Gesamtemission der Welt verursacht ";
var k = "damit ";
var l = "%.";
var m = "Für ";
var n = "hat sich 2018 im Vergleich zu 2008 die Emission um ";
var o = "% verändert.";
var p = "2018 im Vergleich zu 2008 sind das ";
console.log(a + b + h + europa18 + i);
console.log(j + b + k + relgesamteu + l);
console.log(m + b + n + veraenderungeu + o);
console.log(p + vergleicheu + i);
console.log(a + b + h + africa18 + i);
console.log(j + b + k + relgesamtaf + l);
console.log(m + b + n + veraenderungaf + o);
console.log(p + vergleichaf + i);
console.log(a + b + h + southamerica18 + i);
console.log(j + b + k + relgesamtsa + l);
console.log(m + b + n + veraenderungsa + o);
console.log(p + vergleichsa + i);
console.log(a + b + h + asia18 + i);
console.log(j + b + k + relgesamtas + l);
console.log(m + b + n + veraenderungas + o);
console.log(p + vergleichas + i);
console.log(a + b + h + northamerica18 + i);
console.log(j + b + k + relgesamtna + l);
console.log(m + b + n + veraenderungna + o);
console.log(p + vergleichna + i);
console.log(a + b + h + australia18 + i);
console.log(j + b + k + relgesamtaus + l);
console.log(m + b + n + veraenderungaus + o);
console.log(p + vergleichaus + i);
function functionEuropa() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector(".emissionText").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector(".emissionAbsoluteNumber").innerHTML = europa18.toFixed(1);
    document.querySelector(".percentWorld").innerHTML = relgesamteu.toFixed(1) + "%";
    document.querySelector(".percentGrowth").innerHTML = veraenderungeu.toFixed(1) + "%";
    document.querySelector(".absoluteGrowth").innerHTML = vergleicheu.toFixed(1);
    document.querySelector(".chart").setAttribute('style', 'height:' + relgesamteu + '%');
}
window.addEventListener('load', function () {
    document.querySelector('.europa').addEventListener('click', functionEuropa);
});
function functionAfrica() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector(".emissionText").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".emissionAbsoluteNumber").innerHTML = africa18.toFixed(1);
    document.querySelector(".percentWorld").innerHTML = relgesamtaf.toFixed(1) + "%";
    document.querySelector(".percentGrowth").innerHTML = veraenderungaf.toFixed(1) + "%";
    document.querySelector(".absoluteGrowth").innerHTML = vergleichaf.toFixed(1);
    document.querySelector(".chart").setAttribute('style', 'height:' + relgesamtaf + '%');
}
window.addEventListener('load', function () {
    document.querySelector('.africa').addEventListener('click', functionAfrica);
});
function functionSouthAmerica() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector(".emissionText").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector(".emissionAbsoluteNumber").innerHTML = southamerica18.toFixed(1);
    document.querySelector(".percentWorld").innerHTML = relgesamtsa.toFixed(1) + "%";
    document.querySelector(".percentGrowth").innerHTML = veraenderungsa.toFixed(1) + "%";
    document.querySelector(".absoluteGrowth").innerHTML = vergleichsa.toFixed(1);
    document.querySelector(".chart").setAttribute('style', 'height:' + relgesamtsa + '%');
}
window.addEventListener('load', function () {
    document.querySelector('.southamerica').addEventListener('click', functionSouthAmerica);
});
function functionNorthAmerica() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector(".emissionText").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector(".emissionAbsoluteNumber").innerHTML = northamerica18.toFixed(1);
    document.querySelector(".percentWorld").innerHTML = relgesamtna.toFixed(1) + "%";
    document.querySelector(".percentGrowth").innerHTML = veraenderungna.toFixed(1) + "%";
    document.querySelector(".absoluteGrowth").innerHTML = vergleichna.toFixed(1);
    document.querySelector(".chart").setAttribute('style', 'height:' + relgesamtna + '%');
}
window.addEventListener('load', function () {
    document.querySelector('.northamerica').addEventListener('click', functionNorthAmerica);
});
function functionAsia() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector(".emissionText").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector(".emissionAbsoluteNumber").innerHTML = asia18.toFixed(1);
    document.querySelector(".percentWorld").innerHTML = relgesamtas.toFixed(1) + "%";
    document.querySelector(".percentGrowth").innerHTML = veraenderungas.toFixed(1) + "%";
    document.querySelector(".absoluteGrowth").innerHTML = vergleichas.toFixed(1);
    document.querySelector(".chart").setAttribute('style', 'height:' + relgesamtas + '%');
}
window.addEventListener('load', function () {
    document.querySelector('.asia').addEventListener('click', functionAsia);
});
function functionAustralia() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector(".emissionText").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector(".emissionAbsoluteNumber").innerHTML = australia18.toFixed(1);
    document.querySelector(".percentWorld").innerHTML = relgesamtaus.toFixed(1) + "%";
    document.querySelector(".percentGrowth").innerHTML = veraenderungaus.toFixed(1) + "%";
    document.querySelector(".absoluteGrowth").innerHTML = vergleichaus.toFixed(1);
    document.querySelector(".chart").setAttribute('style', 'height:' + relgesamtaus + '%');
}
window.addEventListener('load', function () {
    document.querySelector('.australia').addEventListener('click', functionAustralia);
});
//# sourceMappingURL=typescript.js.map