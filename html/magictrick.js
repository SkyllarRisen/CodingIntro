
function calculateBMI(kg, height)
{
    return kg / (height*height);
}

function getBMI()
{

let kg = parseFloat(document.getElementById("weightInput").value);
let height = parseFloat(document.getElementById("heightInput").value);

if(isNaN(kg)|| isNaN(height))
{
    alert("Please enter valid numbers.");
    return ;   
}

document.getElementById("bmiResult").innerHTML = "Wenn sie "+ height +" m groß sind und "+ kg +" kg wiegen, <br> dann lautet ihr BMI: <br><br>" + calculateBMI(kg, height) 
    +" (auf ganze Zahl gerundet: "+ Math.round(calculateBMI(kg, height))+").";

}

function maxNumber(a,b,c)
{
    return Math.max(a, Math.max(b,c));
}