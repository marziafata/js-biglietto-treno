// ciao ragazzi, esercizio di oggi: calcolo del prezzo del biglietto del treno :steam_locomotive::railway_car::railway_car:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65


// chiedere numero chilometri
var chilometri = prompt('Quanti km devi percorrere?');
document.getElementById('km').innerHTML='Devi percorrere: ' + chilometri + ' km';
// console.log('Chilometri da percorrere = ' + chilometri);

// chiedere eta passeggero
var eta = prompt('Quanti anni hai?');
// console.log('Anni = ' + eta);
document.getElementById('eta').innerHTML='Hai: ' + eta + ' anni';

// calcolare il prezzo totale del viaggio

// tra i 18 e i 65 no sconto
var prezzo_base = 0.21;
// console.log('Gli adulti tra i 18 e i 65 anni pagano per chilometro ' + prezzo_base.toFixed(2) + '€');

if (eta >= 18 && eta < 65) {
    // tra i 18 e i 65 no sconto
    var totale = (chilometri * prezzo_base);
    // console.log('Hai tra i 18 e i 65 anni, quindi paghi ' + totale.toFixed(2) + '€');
    document.getElementById('paghi1').innerHTML='Il costo del tuo biglietto è: ' + totale.toFixed(2) + '€';
} else if(eta >= 65) {
    // se >= 65 - 40%
    var pensionato = (0.21 - ((0.21 / 100) * 40));
    // console.log('Il pensionato paga per chilometro ' + pensionato.toFixed(2) + '€');
    var totale2 = (chilometri * pensionato);
    // console.log('Hai più di 65 anni, quindi paghi ' + totale2.toFixed(2) + '€');
    document.getElementById('paghi2').innerHTML='Il costo del tuo biglietto scontato del 40% è: ' + totale2.toFixed(2) + '€';
} else {
    // se < 18 - 20%
    var minorenne = (0.21 - ((0.21 / 100) * 20));
    // console.log('Il minorenne paga per chilometro ' + minorenne.toFixed(2) + '€');
    // l'età inserita non è >=18 né >= 65
    var totale3 = (chilometri * minorenne);
    // console.log('Hai meno di 18 anni, quindi paghi ' + totale3.toFixed(2)+ '€');
    document.getElementById('paghi3').innerHTML='Il costo del tuo biglietto scontato del 20% è: ' + totale3.toFixed(2) + '€';
}
