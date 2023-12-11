// filename: sophisticatedCode.js
// Content: A sophisticated, elaborate, and complex JavaScript code

// Class representing a Car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log("Engine started");
  }

  stopEngine() {
    console.log("Engine stopped");
  }

  drive() {
    console.log("Driving...");
  }
}

// Class representing a Sports Car, extending Car class
class SportsCar extends Car {
  constructor(make, model, year, topSpeed) {
    super(make, model, year);
    this.topSpeed = topSpeed;
  }

  accelerate() {
    console.log("Accelerating...");
  }

  boost() {
    console.log("Boost engaged!");
  }
}

// Create instances of Car and SportsCar
const car1 = new Car("Toyota", "Camry", 2021);
const car2 = new Car("Honda", "Civic", 2022);
const sportsCar1 = new SportsCar("Ferrari", "488 GTB", 2021, 330);

// Output some information about the cars
console.log(`Car 1: ${car1.make} ${car1.model} (${car1.year})`);
console.log(`Car 2: ${car2.make} ${car2.model} (${car2.year})`);

console.log(`Sports Car 1: ${sportsCar1.make} ${sportsCar1.model} (${sportsCar1.year})`);
console.log(`Top Speed: ${sportsCar1.topSpeed} km/h`);

// Start engines and drive cars
car1.startEngine();
car2.startEngine();
sportsCar1.startEngine();

car1.drive();
car2.drive();
sportsCar1.drive();

// Accelerate and boost sports car
sportsCar1.accelerate();
sportsCar1.boost();

// Stop engines
car1.stopEngine();
car2.stopEngine();
sportsCar1.stopEngine();

// ... continue adding more sophisticated functionality to the code ...