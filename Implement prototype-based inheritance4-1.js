function Vehicle(brand) {
    this.brand = brand;
}

    Vehicle.prototype.getinfo = function() {
        return 'Vehicle Brand: ' + this.brand;
    };
    function Car(brand, doors) {
        Vehicle.call(this, brand); 
        this.doors = doors;
    }

    Car.prototype = Object.create(Vehicle.prototype);
    Car.prototype.constructor = Car;

    //test
    const car1 = new Car('Toyota', 4);
    const car2 = new Car('Honda', 2);

    console.log(car1.getinfo(), "Doors:", car1.doors);
    console.log(car2.getinfo(), "Doors:", car2.doors);
    console.log("Shared Method Reference Check :", car1.getinfo === car2.getinfo);
