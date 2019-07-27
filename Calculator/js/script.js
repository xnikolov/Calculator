var resultBoxDiv = document.getElementById('result-container');
var RESULT_BOX = document.getElementsByClassName('resultOutput');

function floor(){
    

    for(let i = 0; i < RESULT_BOX.value; i++){
        let rounded = Math.floor(RESULT_BOX[i].value);
        RESULT_BOX[i].value = rounded;
    }
    
    
}

/* basic calc global vars  */

var box1 = document.getElementById('calcBox1');
var box2 = document.getElementById('calcBox2');
var resultBox = document.getElementById('resultBox');
var options = document.getElementById('options');

function calcBasic(){

    if(box2.value != ''){
        resultBoxDiv.style.display = 'block';
    }
    
    if(options.value == '+'){
        let result = parseFloat(box1.value) + parseFloat(box2.value);
        resultBox.value = result;
    }

    if(options.value == '-'){
        let result = parseFloat(box1.value) - parseFloat(box2.value);
        resultBox.value = result;
    }

    if(options.value == 'x'){
        let result = parseFloat(box1.value) * parseFloat(box2.value);
        resultBox.value = result;
    }

    if(options.value == '/'){
        let result = parseFloat(box1.value) / parseFloat(box2.value);
        resultBox.value = result;
    }

    if(box1.value == '' || box2.value == ''){
        resultBox.value = "";
    }

    if(box1.value == '' && box2.value == ''){
        resultBoxDiv.style.display = 'none';
    }

    

    
}

/* percentage calc global vars*/

var percentageInput1 = document.getElementById('calcBoxPercentage1');
var percentageInput2 = document.getElementById('calcBoxPercentage2');
var resultBoxPercentage = document.getElementById('resultBoxPercentage');

function getPercent(num1, num2){
    let tempResult = (num1 * num2) / 100;
    let result = num2 - tempResult;
    return result;
}

/*gets the percentage of box1 and box2 */
function calcPercentage(){
    if(percentageInput2.value != ''){
        resultBoxDiv.style.display = 'block';
    }

    if(percentageInput1.value == '' || percentageInput2.value == ''){
        resultBoxPercentage.value = "";
    }

    let result = getPercent(percentageInput1.value, percentageInput2.value);

    resultBoxPercentage.value = result;    
}

/* square root global vars*/
var sqrtInput = document.getElementById('calcBoxSqrt1');
var resultBoxSqrt = document.getElementById('resultBoxSqrt');

function calcSqrt(){
    if(sqrtInput.value != ''){

        resultBoxDiv.style.display = 'block';
    }

    let result = Math.sqrt(sqrtInput.value);
    resultBoxSqrt.value = result;
}

/*power global vars*/
var powerInput1 = document.getElementById('calcBoxPower1');
var powerInput2 = document.getElementById('calcBoxPower2');
var powerResult = document.getElementById('resultBoxPower');
var x = document.getElementById('xSpan');
var pow = document.getElementById('powerSpan');

function power(){
    let result = Math.pow(powerInput1.value, powerInput2.value);
    powerResult.value = result;
    
    if(powerInput1.value != ''){
        x.innerHTML = powerInput1.value;
    }

    else if(powerInput1.value == ''){
        x.innerHTML = 'x';
    }

    if(powerInput2.value != ''){
        pow.innerHTML = powerInput2.value;
    }

    else if(powerInput2.value == ''){
        pow.innerHTML = 'y';
    }

    if(powerInput2.value != ''){
        resultBoxDiv.style.display = 'block';
    }

    if(powerInput1.value == '' || powerInput2.value == ''){
        powerResult.value = "";

    }
}

//fuelEconomy

var distance = document.getElementById('distanceInput');
var fuel = document.getElementById('fuelInput');
var fuelResult = document.getElementById('resultBoxFuel');

function calcFuelEconomy(){
    let fuelTemp = fuel.value * 100;
    let result = fuelTemp / distance.value;
    fuelResult.value = result.toFixed(2);

    if(fuel.value != ''){
        resultBoxDiv.style.display = 'block';
    }

    if(distance.value == '' || fuel.value == ''){
        fuelResult.value = 0;

    }
}
