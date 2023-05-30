function Electricity() {

    let state = {
        unitsAvailable: 0,
        amount: 0,
        advance: false
    };

    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    function topUpElectricity(amount) {
        if(amount == 10){
            state.unitsAvailable += 7;
        } else if(amount == 20){
            state.unitsAvailable += 14;
        } else if(amount == 50){
            state.unitsAvailable += 35;
        } else {
            //advance
            state.unitsAvailable += 21;
        }

    }

    function getUnitsAvailable() {
        return state.unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        if(state.unitsAvailable >= appliances)
    }

    function advanceTaken() {
    }

    function totalAmountSpent() {
    }

    function totalUnitsBought(){
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought
    }
}