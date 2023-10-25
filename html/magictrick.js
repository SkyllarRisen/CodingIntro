
function calculateBMI(kg, height)
{
    return kg / (height*height);
}




function getBMI()
{
let kg = parseFloat(prompt("Geben sie ihr Gewicht in kg ein: "));
let height = parseFloat(prompt("Geben Sie ihre Körpergröße in Metern ein: "));

alert("Wenn sie "+ height +" m groß sind und "+ kg +" kg wiegen, dann lautet ihr BMI: " + calculateBMI(50, 1.60) +" (auf ganze Zahl gerundet: "+ Math.round(calculateBMI(50, 1.60))+").");
}