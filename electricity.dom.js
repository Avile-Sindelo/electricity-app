// DOM element(s) references
// let priceRadios = document.querySelectorAll('.topup');
// let applianceRadios = document.querySelectorAll('.usage');

let checkedRadio = document.querySelector("input[name='buyElectricity']:checked");
const buyBtn = document.querySelector('.topupNow');

const priceRadios = document.querySelectorAll('.topup');
const applianceRadios = document.querySelectorAll('.usage');

const availableUnit = document.querySelector('.unitsAvailable');
const totalUnitsBought = document.querySelector('.totalUnits');
const totalSpentAmount = document.querySelector('.totalAmount');
const takenAdvance = document.querySelector('.advanceTaken');

let checkedPrice;
let checkedAppliance;

for(let i = 0; i < priceRadios.length; i++){
    if(priceRadios[i].checked){
        checkedPrice = priceRadios[i].value;
    }
}

for(let i = 0; i < applianceRadios.length; i++){
    if(applianceRadios[i].checked){
        checkedAppliance = applianceRadios[i].value;
    }
}


//check if local storage has a state variable already
var currentState;
if(localStorage['state']){
    currentState = localStorage.getItem('state');
} else {
    var initialState = {
        unitsAvailable: 0,
        amount: 0,
        unitsBought: 0,
        advance: false
    }

    localStorage.setItem('state', JSON.stringify(initialState));
}

// Factory Function instance 
const electricity =  Electricity(currentState);


// DOM events here 

buyBtn.addEventListener('click', function(){
    electricity.topUpElectricity(parseFloat(checkedPrice));
    electricity.useAppliance(checkedAppliance);

    //display 
    availableUnit.innerHTML = electricity.getUnitsAvailable();
    totalUnitsBought.innerHTML = electricity.totalUnitsBought();
    totalSpentAmount.innerHTML = electricity.totalAmountSpent();

    console.log(checkedRadio);
});