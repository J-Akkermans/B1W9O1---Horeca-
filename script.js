var drinkPrice = [2.30, 3.00, 2.50]; //Array van prijzen. 

var drinkTotals = [0, 0, 0]

var frisAantal = 0; //Variables die aantal keer een bepaald drankje bijhoud. 
var bierAantal = 0;
var wijnAantal = 0;

var bierAantalQeust = 0;
var frisAaantalQeust = 0;
var wijnAantalQeust = 0;


var aantalBitterBallen = 0;
var aantalBitterbalSchaalAcht = 0;
var aantalBitterbalSchaalZestien = 0;

// order()


alert("Welkomn bij Cafe-bar");

function order() {
    var orderStart = prompt("Welke bestelling wilt u toevoegen? \n Fris, Bier of Wijn of een snack?").toLowerCase;
    orderStatus = true;
    while (orderStatus == true) {
        if (orderStart == "stop") {
            if (frisAantal == 0 && bierAantal == 0 && wijnAantal == 0) {
                alert("U heeft geen rekening openstaat bedankt voor het komen!")
            } else {
                var eindTotaal = drinkTotals[0] + drinkTotals[1] + drinkTotals[2];
                alert(
                    "Hierbij de rekening \n" + "Fris: " + frisAantal + " €" + drinkTotals[0] + "\nBier: " + bierAantal + " €" + drinkTotals[1] + "\nWijn: " + wijnAantal + " €" + drinkTotals[2] + " Totaal: €" + eindTotaal
                );
            }
            orderStatus = false;
        } else {
            if (orderStart == "fris") {
                var frisAaantalQeust = prompt("Hoeveel fris wilt u bestellen?").toLowerCase;
                frisAantal = parseInt(frisAaantalQeust);
                if (frisAantal == 0) {
                    alert("Let op u heeft geen fris toegevoegd.")
                } else if (frisAantal > 0) {
                    drinkTotals[0] = drinkPrice[0] * frisAantal;
                    alert(frisAantal + "x toegevoegd.\n Prijs:" + drinkTotals[0])
                    order()
                }
            } else if (orderStart == "bier") {
                var bierAantalQeust = prompt("Hoeveel bier wilt u bestellen?").toLowerCase;
                bierAantal = parseInt(bierAantalQeust)
                if (bierAantal == 0) {
                    alert("Let op u heeft geen bier toegevoegd.")
                } else if (bierAantal > 0) {
                    drinkTotals[1] = drinkPrice[1] * bierAantal
                    alert(bierAantal + "x toegevoegd.\n Prijs:" + drinkTotals[1])
                    order()
                }
            } else if (orderStart == "wijn") {
                var wijnAantalQeust = prompt("Hoeveel wijn wilt u bestellen?").toLowerCase;
                wijnAantal = parseInt(wijnAantalQeust)
                if (wijnAantal == 0) {
                    alert("Let op u heeft geen wijn toegevoegd.")
                } else if (wijnAantal > 0) {
                    drinkTotals[2] = drinkPrice[2] * wijnAantal
                    alert(wijnAantal + "x toegevoegd.\n Prijs:" + drinkTotals[2])
                    order()
                }
            } else if(orderStart == "snack"){
                extraSnack()
            }else{
                order()
            }
        }
    }

}

function extraSnack() {
    var aantalBitterBallen = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");
    aantalBitterBallen = parseInt(aantalBitterBallen);
    switch (aantalBitterBallen) {
        case 8:
            alert("U heeft gekozen voor de schaal van 8 bitterballen");
            aantalBitterbalSchaalAcht = prompt("Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?");
            aantalBitterbalSchaalAcht = parseInt(aantalBitterbalSchaalAcht);
            order() 
        break;
        
        case 16:
            alert("u heeft gekozen voor de schaal van 8 bitterballen");
            aantalBitterbalSchaalZestien = prompt("Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?");
            aantalBitterbalSchaalZestien = parseInt(aantalBitterbalSchaalZestien);
            order() 
        default: 
        extraSnack()
    }

}