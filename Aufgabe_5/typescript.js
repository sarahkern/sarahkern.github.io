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
var relgesamteu = (gesamt * europa18) / 100;
var veraenderungeu = (europa8 * 100) / europa18;
var vergleicheu = europa18 - europa8;

var relgesamtaf = (gesamt * africa18) / 100;
var veraenderungaf = (africa8 * 100) / africa18;
var vergleichaf = africa18 - africa8;

var relgesamtsa = (gesamt * southamerica18) / 100;
var veraenderungsa = (southamerica8 * 100) / southamerica18;
var vergleichsa = southamerica18 - southamerica8;

var relgesamtna = (gesamt * northamerica18) / 100;
var veraenderungna = (northamerica8 * 100) / northamerica18;
var vergleichna = northamerica18 - northamerica8;

var relgesamtas = (gesamt * asia18) / 100;
var veraenderungas = (asia8 * 100) / asia18;
var vergleichas = asia18 - asia8;

var relgesamtaus = (gesamt * australia18) / 100;
var veraenderungaus = (australia8 * 100) / australia18;
var vergleichaus = australia18 - australia8;

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
//# sourceMappingURL=typescript.js.map