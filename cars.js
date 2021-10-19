class cars {
  constructor(make, model, colour, image, registration_number, price) {
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.image = image;
    this.registration_number = registration_number;
    this.price = price;
  }

  editPrice(newPrice) {
    
    return `The new price is: ${this.price = newPrice}`;
  }

  showAll() {
    return `this car made in ${this.model} , car nname is ${this.make}, color of the car is ${this.colour}, number of registration is ${this.registration_number}, The price :${this.price}`;
  }
}

const car1 = new cars("Rang Rover", 2017, "white", "img", "BBB 444", 600000);
const car2 = new cars("corola", 2018, "blue", "img", "CSB 544", 65000);
const car3 = new cars("BMW", 2014, "green", "img", "BBB 444", 330000);
const car4 = new cars("camray", 2012, "white", "img", "MBB 244", 63000);
const car5 = new cars("Rang Rover", 2017, "Black", "img", "BNB 444", 66000);
console.log(car1.price);
car1.editPrice(700000);
console.log(car1.price);
console.log( car2.showAll());


// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------


