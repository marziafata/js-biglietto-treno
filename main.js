// ciao ragazzi, esercizio di oggi: calcolo del prezzo del biglietto del treno :steam_locomotive::railway_car::railway_car:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65


// chiedere numero chilometri
var chilometri = prompt('Quanti km devi percorrere?');
document.getElementById('km').innerHTML='Devi percorrere: ' + chilometri + ' km';

// chiedere eta passeggero
var eta = prompt('Quanti anni hai?');
document.getElementById('eta').innerHTML='Hai: ' + eta + ' anni';

// calcolare il prezzo totale del viaggio

// tra i 18 e i 65 no sconto
var prezzo_base = 0.21;
// se >= 65 - 40%
var sconto_pensionato = 40;
// se < 18 - 20%
var sconto_minorenni = 20;

// quindi:
if (eta >= 18 && eta < 65) {
    var totale = (chilometri * prezzo_base);
    document.getElementById('paghi1').innerHTML='Il costo del tuo biglietto è: ' + totale.toFixed(2) + '€';

} else if(eta >= 65) {
    var pensionato = (prezzo_base - ((prezzo_base / 100) * sconto_pensionato));
    var totale2 = (chilometri * pensionato);
    document.getElementById('paghi2').innerHTML='Il costo del tuo biglietto scontato del 40% è: ' + totale2.toFixed(2) + '€';

} else {
    var minorenne = (prezzo_base - ((prezzo_base / 100) * sconto_minorenni));
    var totale3 = (chilometri * minorenne);
    document.getElementById('paghi3').innerHTML='Il costo del tuo biglietto scontato del 20% è: ' + totale3.toFixed(2) + '€';
}
