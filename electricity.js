function Electricity(currentState) {

    let state = currentState || {
        unitsAvailable: 0,
        amount: 0,
        unitsBought: 0,
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
        // if(state.advance){
            
        // } else {

        // }

        if(amount == 10){
            state.unitsAvailable += 7;
            state.unitsBought += 7;
        } else if(amount == 20){
            state.unitsAvailable += 14;
            state.unitsBought += 14;
        } else if(amount == 50){
            state.unitsAvailable += 35;
            state.unitsBought += 35;
        } else {
            //advance
            if(state.advance == false){
                state.unitsAvailable += 21;
                state.unitsBought += 21;
                state.advance = true;
            }    
        }
        //add the amount spent in the amount property of the state variable as it denotes the total amount spent
        state.amount += amount;
    }

    function getUnitsAvailable() {
        return state.unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        if(appliances[appliance] <= state.unitsAvailable){
            state.unitsAvailable -= appliances[appliance];
            return true;
        } else {
            return false;
        }
    }

    function advanceTaken() {
        return state.advance;
    }

    function totalAmountSpent() {
        return state.amount;
    }

    function totalUnitsBought(){
        return state.unitsBought;
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

