// let fiatCar = { 
//     type: "Fiat", 
//     model: "500", 
//     color: "white" 
// };

// let peugeorCar = {
//     type: "Peugeot", 
//     model: "406", 
//     color: "Grey",
//     price: 5000
// }

listOfCars = [
    { 
        type: "Fiat", 
        model: "500", 
        color: "white",
        price: 10000
    },
    { 
        type: "Fiat", 
        model: "600", 
        color: "white" 
    },
    {
        type: "Peugeot", 
        model: "406", 
        color: "Grey",
        price: 5000
    },
    {
       invalid: false
    },
    {

    }
]

//Before 
console.log("Before");
listOfCars.forEach(car => {
    console.log(car.type + " " + car.model + " " + car.color + " "+ car.price );
});

console.log(listOfCars.length);

listOfCars = listOfCars.filter((car) => car.type == "Fiat");

carModelNames = listOfCars.map((car) => car.model);

carModelNames.forEach(carModelName => {
    console.log(carModelName);
});

listOfCars.forEach(car => {
    car.price = 1000;
});

console.log("after");
//After 
listOfCars.forEach(car => {
    console.log(car.type + " " + car.model + " " + car.color + " "+ car.price );
});

console.log(carModelNames)


