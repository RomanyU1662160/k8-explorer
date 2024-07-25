export const facadePatternCode = `
// How to create a facade pattern
// 1- Define the subsystems that will be used by the facade
// 2- Define the facade class that will use all subsystems undercover
// 3- Use the facade class to perform the desired operations

//-------------------------------------------
        Example Usage
//-------------------------------------------
// 1- subsystem1
class Lights {
  turnLightsOn() {
    console.log('Turning lights on');
  }
  turnLightsOff() {
    console.log('Turning lights off');
  }
}
// 2- subsystem2
class AC {
  turnOnAC() {
    console.log('Turning AC on');
  }
  turnOffAC() {
    console.log('Turning AC off');
  }
  setTemperature(temperature: number) {
    console.log("Setting temperature ");
  }
}
// 3- subsystem3

class TV {
  turnTVOn() {
    console.log('Turning TV on');
  }
  turnTVOff() {
    console.log('Turning TV off');
  }
  changeChannel() {
    console.log('Changing channel');
  }
  changeVolume(volume: number) {
    console.log("Changing volume ...");
  }
}
// 4- subsystem4
class Movie {
  playMovie(movieName: string) {
    console.log('Playing movie');
  }
  pauseMovie() {
    console.log('Pausing movie');
  }
  stopMovie() {
    console.log('Stopping movie');
  }
}

// 5- subsystem5
class PopCornMachine {
  makePopCorn() {
    console.log('Popping corn');
  }
  cleanPopCornMachine() {
    console.log('Cleaning popcorn machine');
  }
}

// 6- Define the facade class that will use all subsystems undercover
export class FamilyNight {
  private tv: TV;
  private airCondition: AC;
  private lights: Lights;
  private movie: Movie;
  private popcorn: PopCornMachine;

  constructor() {
    this.airCondition = new AC();
    this.tv = new TV();
    this.lights = new Lights();
    this.movie = new Movie();
    this.popcorn = new PopCornMachine();
  }

  // One API method in the facade to cover all subsystems methods
  startFamilyNight() {
    this.lights.turnLightsOn();
    this.airCondition.turnOnAC();
    this.airCondition.setTemperature(21);
    this.popcorn.makePopCorn();
    this.tv.turnTVOn();
    this.movie.playMovie('Harry Potter');
    console.log('Family night is starting');
  }

  // One API method in the facade to cover all subsystems methods
  finishFamilyNight() {
    this.lights.turnLightsOff();
    this.airCondition.turnOffAC();
    this.tv.turnTVOff();
    this.popcorn.cleanPopCornMachine();
    this.movie.stopMovie();
    console.log('Family night is finished');
    console.log('Good night everyone');
  }
}

// initialize the facade.
const familyNight = new FamilyNight();

// use the facade instance methods without knowing the complex system under it
familyNight.startFamilyNight();
familyNight.finishFamilyNight();
`;
