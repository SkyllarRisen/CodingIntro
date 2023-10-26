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
    return 0.524**3*volumeElle;
}
 function convertMtoScheffel(volumeM)
 {
    return volumeM*1000/25.93;
 }

function amountBlocks(volumeElle)
{
    return volumeElle / 8;
}

function numberInGroßSchockDutzend(N)
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
    console.log(`${flow.toFixed(12)}`);
}

floatSurprise();
numberInGroßSchockDutzend(473);