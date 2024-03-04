//alert ()

const MIN_POWER = 10;
const MAX_POWER = 30;

let posicionamientoLedZeppelin = 100;
let posicionamientoBlackSabbath = 100;

let round = 0;

/*let ventasLedZeppelin = Number(prompt("Ventas Led Zeppelin"));
let ventasBlackSabbath = Number(prompt("Ventas Black Sabbath")); */

while (posicionamientoLedZeppelin > 0 && posicionamientoBlackSabbath > 0) {
    round += 1
    console.log("---round" + round + "---")
    let ventasLedZeppelin = parseInt(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)
    //console.log(posicionamientoLedZeppelin)
    let ventasBlackSabbath = parseInt(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

    if (ventasLedZeppelin == ventasBlackSabbath) {
        console.log("Empate")
    } else if (ventasLedZeppelin > ventasBlackSabbath) {
        //posicionamientoBlackSabbath = posicionamientoLedZeppelin - ventasBlackSabbath;
        posicionamientoBlackSabbath -= ventasLedZeppelin
        if (posicionamientoBlackSabbath < 0) {
            posicionamientoBlackSabbath = 0;
        }
    } else {
        //posicionamientoLedZeppelin = posicionamientoLedZeppelin - ventasBlackSabbath
        posicionamientoLedZeppelin -= ventasBlackSabbath
        if (posicionamientoLedZeppelin < 0) {
            posicionamientoLedZeppelin = 0;
        }
    }

    console.log("Posicionamiento Led Zeppelin " + posicionamientoLedZeppelin);

    console.log("Posicionamiento Black Sabbath " + posicionamientoBlackSabbath);

    console.log("-------------------")

}

if (posicionamientoLedZeppelin > 0) {
    console.log("Ganó Led Zeppelin")

} else {
    console.log("Ganó Black Sabbath")
}