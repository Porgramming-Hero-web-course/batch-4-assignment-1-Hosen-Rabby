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
    getCarAge() {
      let currentYear: number = 2024;
      const carAge = currentYear - this.year;
      return carAge;
    }
  }

  const car = new Car("Toyota", "Premio", 1997);
  console.log(car.getCarAge());
}