abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
      //some complex calculations
      return 8
  }

  //this is abstract method, that will be implemented in the child class. (didnt said how it will be implemented but needs to be implemented in the child class)
}

// const hitesh = new TakePhoto("front", "none")

class Instagram extends TakePhoto {

  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    // we are accessing from parent class, that's why
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("Sepia");
  }

}
const hitesh = new Instagram("front", "none", 2);
//you can access getReelTime from TakePhoto class because it is a public method

hitesh.getReelTime(); //will return 8
