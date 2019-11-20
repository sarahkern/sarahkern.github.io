//Emissions 2018
var emissionAfrica18 = 1235.5;
var emissionSouthAmerica18 = 1261.5;
var emissionEurope18 = 4209.3;
var emissionNorthAmerica18 = 6035.6;
var emissionAsia18 = 16274.1;
var emissionAustralia18 = 2100.5;
var emissionTotal18 = emissionAfrica18 + emissionSouthAmerica18 + emissionEurope18 + emissionNorthAmerica18 + emissionAsia18 + emissionAustralia18;
//Emissions 2008
var emissionAfrica08 = 1028;
var emissionSouthAmerica08 = 1132.6;
var emissionEurope08 = 4965.7;
var emissionNorthAmerica08 = 6600.4;
var emissionAsia08 = 12954.7;
var emissionAustralia08 = 1993;
var emissionTotal08 = emissionAfrica18 + emissionSouthAmerica18 + emissionEurope18 + emissionNorthAmerica18 + emissionAsia18 + emissionAustralia18;
// PercentAfrika
var percentAfrica1 = emissionAfrica18 * 100 / emissionTotal18;
var percentAfrica2 = emissionAfrica18 - emissionAfrica08;
var percentAfrica3 = percentAfrica2 / emissionAfrica08 * 100;
// PercentSouthAmerica
var percentSA1 = emissionSouthAmerica18 * 100 / emissionTotal18;
var percentSA2 = emissionSouthAmerica18 - emissionSouthAmerica08;
var percentSA3 = percentSA2 / emissionSouthAmerica08 * 100;
// PercentEurope
var percentE1 = emissionEurope18 * 100 / emissionTotal18;
var percentE2 = emissionEurope18 - emissionEurope08;
var percentE3 = percentE2 / emissionEurope08 * 100;
// PercentNorthAmerica
var percentNA1 = emissionNorthAmerica18 * 100 / emissionTotal18;
var percentNA2 = emissionNorthAmerica18 - emissionNorthAmerica08;
var percentNA3 = percentNA2 / emissionNorthAmerica08 * 100;
// PercentAsia
var percentA1 = emissionAsia18 * 100 / emissionTotal18;
var percentA2 = emissionAsia18 - emissionAsia08;
var percentA3 = percentA2 / emissionAsia08 * 100;
// PercentAustralia
var percentAU1 = emissionAustralia18 * 100 / emissionTotal18;
var percentAU2 = emissionAustralia18 - emissionAustralia08;
var percentAU3 = percentAU2 / emissionAustralia08 * 100;
// Sentences
var a = "Die Emission von ";
var b = "ist: ";
var c = "kg CO2. ";
var d = "Relativ zur Gesamtemission der Welt verursacht ";
var e = "damit ";
var ee = "% ";
var f = "Für ";
var g = "hat sich 2018 im Vergleich zu 2008 die Emission um ";
var h = "verändert. ";
var i = "2018 im Vergleich zu 2008 sind das ";
var j = "kg CO2";
var Afr = "Afrika ";
var SA = "Süd Amerika ";
var E = "Europa ";
var NA = "Nord Amerika ";
var As = "Asien ";
var Aus = "Australien ";
var dot = ".";
// Console
console.log(a + Afr + b + emissionAfrica18 + c + d + Afr + e + percentAfrica1 + ee + dot + f + Afr + g + percentAfrica3 + ee + h + i + percentAfrica2 + j + dot);
console.log(a + SA + b + emissionSouthAmerica18 + c + d + SA + e + percentSA1 + ee + dot + f + SA + g + percentSA3 + ee + h + i + percentSA2 + j + dot);
console.log(a + E + b + emissionEurope18 + c + d + E + e + percentE1 + ee + dot + f + E + g + percentE3 + ee + h + i + percentE2 + j + dot);
console.log(a + NA + b + emissionNorthAmerica18 + c + d + NA + e + percentNA1 + ee + dot + f + NA + g + percentNA3 + ee + h + i + percentNA2 + j + dot);
console.log(a + As + b + emissionAsia18 + c + d + As + e + percentA1 + ee + dot + f + As + g + percentA3 + ee + h + i + percentA2 + j + dot);
console.log(a + Aus + b + emissionAustralia18 + c + d + Aus + e + percentAU1 + ee + dot + f + Aus + g + percentAU3 + ee + h + i + percentAU2 + j + dot);
//# sourceMappingURL=typescript.js.map
//# sourceMappingURL=typescript.js.map