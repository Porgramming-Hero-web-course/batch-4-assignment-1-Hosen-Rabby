{
  class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    // find age
    getCarAge() {
      let currentYear: number = 2024;
      const carAge = currentYear - this.year;
      return carAge;
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge());
}
