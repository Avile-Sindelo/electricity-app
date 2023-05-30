// DOM element(s) references



// Factory Function instance 
const electricity =  Electricity();
electricity.topUpElectricity(10);
electricity.topUpElectricity(50);
console.log('units available before use :', electricity.getUnitsAvailable());
electricity.useAppliance('Stove');
electricity.useAppliance('Kettle');
electricity.useAppliance('TV');
electricity.useAppliance('Fridge');
console.log('units available after use :', electricity.getUnitsAvailable());
// DOM events here 