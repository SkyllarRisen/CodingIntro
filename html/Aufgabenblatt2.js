function priceFuelTotal(priceFuel, liters)
{
    return priceFuel * liters;
}

function priceNetto(priceBrutto, salesTax)
{
    return priceBrutto/(1+salesTax);
}

function volumePyramid(sideLength, height)
{
    return sideLength ** 2 * height / 3;
}

function convertElleToM(volumeElle)
{
    return (524)**3*volumeElle/(1000**3);
}
 function convertMtoScheffel(volumeM)
 {
    return volumeM*1000/25.93;
 }

function amountBlocks(volumeElle)
{
    return volumeElle / 8;
}

function numberGSDS(N)
{
    groß = parseInt(N / 144);
    n1 = N % 144;
    schock = parseInt(n1 / 60);
    n2 = n1 % 60;
    dutzend = parseInt(n2 / 12);
    rest = n2 % 12;
    console.log(`N = ${N}: ${groß} Groß, ${schock} Schock, ${dutzend} Dutzend, ${rest} Stück.`);
}


function floatSurprise()
{
    let flow = 10 * 0.111;
    console.log(`Is this surprising? ${flow.toFixed(12)}`);
}


let liters = 20, priceFuel= 1.8, salesTax = 0.19;
let length=4, height=12;


console.log(`${liters} l fuel at ${priceFuel} Euros per liter costs ${priceFuelTotal(priceFuel, liters).toFixed(2)} Euros`);
console.log(`Without ${salesTax*100} % sales tax this would be ${priceNetto(priceFuelTotal(priceFuel, liters), salesTax).toFixed(2)} Euros.`);

console.log(`Volumen Pyramide ${length}, ${height} in Ellen: ` + volumePyramid(length, height));
console.log(`Volumen Pyramide ${length}, ${height} in m^3: ` + convertElleToM(volumePyramid(length, height)).toFixed(2));
console.log(`Volumen Pyramide ${length}, ${height} in Scheffel: ` + convertMtoScheffel(convertElleToM(volumePyramid(length, height))).toFixed(2));
console.log(`Anzahl Steinblöcke: `+ amountBlocks(volumePyramid(length, height)));

numberGSDS(473);

floatSurprise();
