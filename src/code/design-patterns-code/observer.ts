export const observerPatternCode = `
// 1- define subject
// 2- define observer
// 3- create class implements publisher
// 4- create class  implement Observer
// 5- create instance of class implements publisher interface
// 6- create instance of class implements observer interface
// 7- register Observer 
// 8- call the update function on the Publisher

// ----------------------------------------------------
// Example usage
// ----------------------------------------------------

// 1- define subject
interface Publisher {
  registerObserver: (O: Observer) => void;
  removeObserver: (O: Observer) => void;
  notifyObservers: () => void;
}
//2-  define Observer
interface Observer {
  update: (temperature: number) => void;
}

// 3- create class implements publisher
export class WeatherStation implements Publisher {
  private observers: Observer[] = [];
  private temperature: number = 0;

  updateTemperature(temperature: number) {
    this.temperature = temperature;
    this.notifyObservers();
  }

  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }
  removeObserver(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }
  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.temperature));
  }
}

// 4- create class  implement Observer
export class TemperatureDisplay implements Observer {
  update(temperature: number) {
    console.log(The temperature is degrees Celsius.);
  }
}

// 5- create instance of class implements publisher interface
// 6- create instance of class implements observer interface
const weatherStation = new WeatherStation();
const display1 = new TemperatureDisplay();

// 7- register Observer 
weatherStation.registerObserver(display1);

// 8- call the update function on the Publisher
weatherStation.updateTemperature(25);
weatherStation.updateTemperature(30);
`;
