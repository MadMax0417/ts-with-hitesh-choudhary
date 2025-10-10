interface User {
    email: string;
    userId: number;
    googleId?: string;
    readonly dbId: number;

    //method with return type of string
    startTrail: () => string

    //one more method of doing the same
    startTrail2(): string;

    //optinal method in interface
    // startTrail2?(): string;
    getCoupon(couponName: string, value: number): number;
}
//Interface does not have details about how it will work but it is basic overview of whenever we create this, which will be compulsory which will be properties. It does not says what it should it have inside it

// It is like class but it is loosely kinda class (just for understanding purposes.)

const hitesh: User = {
    email: "hitesh@lco.com",
    userId: 234234, 
    dbId: 23443,
    startTrail: () => ("trail started"),
    startTrail2: () => ("trail started"),
    getCoupon: (name: "hitesh", off: 10) => 10,
    githubToken: "github"
}

hitesh.email = "hitesh@gmail.com"
// hitesh.dbId = 23443
hitesh.startTrail();
hitesh.startTrail2();


//adding in things in interface || Reopening of the interface ()
interface User {
    //this will be add in above User interface
    githubToken: string;
}

//Extending the interface, (inheritance)
interface Admin extends User {
    role: "admin" | "ta" | "learner";
}

const hitesh2 : Admin = {
    email: "hitesh@lco.com",
    userId: 234234, 
    dbId: 23443,
    startTrail: () => ("trail started"),
    startTrail2: () => ("trail started"),
    getCoupon: (name: "hitesh", off: 10) => 10,
    githubToken: "github",
    role:"admin"
}

//you can also add more than one interface while extending 
// interface Admin extends User, anotherInterface {
//     role: "admin" | "ta" | "learner";
// }
 
//