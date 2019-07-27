const RESULT_BOX_DIV = document.getElementById('result-container');

const initPrice = document.getElementById('priceInput');
const initMileage = document.getElementById('init_mileage');
const currentMileage = document.getElementById('current_mileage');
const condition = document.getElementById('car_condition');
const isCrashed = document.getElementById('crashed');
const price = document.getElementById('resultBoxCarPrice');

    //INITIAL PRICE INPUT VARIBLE


        //TOGGLE VISIBILITY OF RESULT INPUT

function checkZero(){
    if(initPrice.value == '' || initPrice.value == '0'){
        price.value = 0;
    }
}

function toggleVisibility(){
    if(initPrice.value == '' || initMileage.value == '' || currentMileage.value == '' && 
    condition.value == 'default_interior'){
        RESULT_BOX_DIV.style.display = 'none';
    }

    if(initPrice.value != '' || initMileage.value != '' || currentMileage.value != '' && 
    interCondition.value != 'default_interior'){
        RESULT_BOX_DIV.style.display = 'block';
    }

    if(initPrice.value != ''){
        price.value = initPrice.value;
        RESULT_BOX_DIV.style.display = 'block';
    }

    


}


function checkMileage(){

    let mileageDifference = currentMileage.value - initMileage.value;

    if(currentMileage.value == '0' || currentMileage.value == '' || initMileage.value == '0' || initMileage.value == ''){
        price.value = initPrice.value;
    }

    if(mileageDifference >= 8000){
        let result = initPrice.value - 1000;
        price.value = result;
    }

    if(mileageDifference >= 15000){
        let result = initPrice.value - 1800;
        price.value = result;
    }

    if(mileageDifference >= 30000){
        let result = initPrice.value - 2400;
        price.value = result;
    }

    if(mileageDifference > 60000){
        let result = initPrice.value - 3200;
        price.value = result;
    }

    if(mileageDifference > 100000){
        let result = initPrice.value - 3800;
        price.value = result;
    }
}

//CHECK CONDITION INPUTS

function checkCondition(){

    // EXTERIOR CONDITION
    if(condition.value == 'good'){
        let result = initPrice.value - 1100;
        price.value = result;
    
        if(initPrice < 5000){
            let result = initPrice.value - 500;
            price.value = result;
        }
    }

    if(condition.value == 'reasonable'){
        let result = initPrice.value - 2500;
        price.value = result;
    
        if(initPrice < 5000){
            let result = initPrice.value - 900;
            price.value = result;
        }
    }

    if(condition.value == 'poor'){
        let result = initPrice.value - 2900;
        price.value = result;
    
        if(initPrice < 5000){
            let result = initPrice.value - 1250;
            price.value = result;
        }
    }
}

function calcPrice(){
    /*if()*/
}

function execute(){
    checkZero();
    toggleVisibility();
    checkCondition();
    checkMileage();

}