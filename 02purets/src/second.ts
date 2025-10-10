interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
    //there could be more properties and methods
}

interface Story{
    createStory(): void
}

class Instagram implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}

    createStory(): void {
        console.log("Story uploaded successfully");
    }
}


//you can add more properties but not less
class Youtube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shorts: string
    ) {}
}
