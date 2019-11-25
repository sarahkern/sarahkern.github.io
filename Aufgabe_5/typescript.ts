

    var europa18:number = 4209.3;
    var africa18:number = 1235.5;
    var southamerica18:number = 1261.5;
    var northamerica18:number = 6035.6;
    var asia18:number = 16274.1;
    var australia18:number = 2100.5;

    var europa8:number = 4965.7;
    var africa8:number = 1038;
    var southamerica8:number = 1132.6;
    var northamerica8:number = 6600.4;
    var asia8:number = 12954.7;
    var australia8:number = 1993;

    var gesamt:number = asia18 + europa18 + africa18 + southamerica18 + northamerica18 + australia18;
    var relgesamteu:number = (gesamt * europa18) / 100;
    var veraenderungeu:number = (europa8 * 100) / europa18;
    var vergleicheu:number = europa18 - europa8;

    var relgesamtaf:number = (gesamt * africa18) / 100;
    var veraenderungaf:number = (africa8 * 100) / africa18;
    var vergleichaf:number = africa18 - africa8;

    var relgesamtsa:number = (gesamt * southamerica18) / 100;
    var veraenderungsa:number = (southamerica8 * 100) / southamerica18;
    var vergleichsa:number = southamerica18 - southamerica8;

    var relgesamtna:number = (gesamt * northamerica18) / 100;
    var veraenderungna:number = (northamerica8 * 100) / northamerica18;
    var vergleichna:number = northamerica18 - northamerica8;

    var relgesamtas:number = (gesamt * asia18) / 100;
    var veraenderungas:number = (asia8 * 100) / asia18;
    var vergleichas:number = asia18 - asia8;

    var relgesamtaus:number = (gesamt * australia18) / 100;
    var veraenderungaus:number = (australia8 * 100) / australia18;
    var vergleichaus:number = australia18 - australia8;



    var a:string = "Die Emission von ";
    var b:string = "Europa ";
    var c:string = "Afrika ";
    var d:string = "Südamerika ";
    var e:string = "Nordamerika ";
    var f:string = "Asien ";
    var g:string = "Australien ";
    var h:string = "ist: ";
    var i:string = "kg CO2.";
    var j:string = "Relativ zur Gesamtemission der Welt verursacht ";
    var k:string = "damit ";
    var l:string = "%.";
    var m:string = "Für ";
    var n:string = "hat sich 2018 im Vergleich zu 2008 die Emission um ";
    var o:string = "% verändert.";
    var p:string = "2018 im Vergleich zu 2008 sind das ";


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

