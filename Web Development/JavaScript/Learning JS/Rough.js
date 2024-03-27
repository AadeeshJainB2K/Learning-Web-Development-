class Maruti {
  constructor() {
    console.log("New Car Is Being Built");
  }
  setEngineDisplacement(a) {
    this.EngineDisplacement = a;
  }
  setEngineName(b) {
    this.EngineName = b;
  }
  setPowerTrains(c, d) {
    this.BrakeHorsePower = c;
    this.TorqueInNm = d;
  }
  setFuelType(e) {
    this.FuelType = e;
  }
  start() {
    console.log("Started");
  }
  stop() {
    console.log("Stoped");
  }
}
let XL6 = new Maruti();
XL6.setEngineDisplacement("1.2L");
XL6.setEngineName("1.2L Revotron Turbo Petrol");
XL6.setPowerTrains(118.89, 250);
XL6.setFuelType("Petrol");

let XL7 = new Maruti();
XL7.setEngineDisplacement("1.2L");
XL7.setEngineName("1.2L Revotron Turbo Petrol");
XL7.setPowerTrains(118.89, 250);
XL7.setFuelType("Petrol");

class Nexa extends Maruti {
  constructor() {
    super();
    console.log("Nexa is a premium branch of Maruti like Fastrak of Titan");
  }
}

let Ciaz = new Nexa();
Ciaz.setEngineDisplacement("1.2L");
Ciaz.setEngineName("1.2L Revotron Turbo Petrol");
Ciaz.setPowerTrains(118.89, 250);
Ciaz.setFuelType("Petrol");
Ciaz.start();
