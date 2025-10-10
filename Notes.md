# typescript notes

TS is superset of JS. It is compiled in JS in the end. They don't know give some extra feature

## Should you be using TS ?

- TS is not about reinventing JS
- You shouldnt use TS if your project is small

Typescript is just about Type Safety, nothing more.

### What is type safety ?

- In JS you can add 2 with "2", which is number with string. This behaviour should not be allowed. TS helps with thisc with type safety.

---

## What Typescript does ?

- Static Checking : Constantly being analysed code as we type
- In TS you write more lines of ts than JS
- Chances of producing gets less.

### How does it works ?

You write the code in TS => that is compiled into JS (converted into JS)
Remember, it's development tool. Your project still runs JS.

[Typescript Playground](https://www.typescriptlang.org/play/)

---

## Installing Typescript

There will be 2 different installation.

1. Install Globally
2. install in some project. React or nextjs

### Installing globally

npm install -g typescript

then you can use it in ur project like:
npm install typescript --save-dev
pnpm add typescript -D

### typescript commands

    tsc -v

when you do
tsc _filename_ here your

code gets compiled into js

There is also ts.config this is a config file you make while react or next js. You can go look about it into playground link mentioned above.

---

## Hello World from TS

Tip: Learn from Documentation

### Types

- string
- number
- boolean
- null
- undefined
- void
- Object
- Array
- Tuples
- ... etc
- Any
- Never
- unknown

### syntax

    let variableName: type = value

---

## Number, boolean and type inference

### number

    let userId: number = 334455

    let userPoints: number = 33.44

### boolean

    let isLoggedIn: boolean = false

### type inference

You are overusing the TS. It actually infer and it will automatically infer that it will be number. so u should be just use it like :

    let userId = 334455

---

## Any Keyword

    let hero: string;
    let hero; //here it will be return any

    function getHero(){
        return "thor"
        //i can return true
    }

    hero = getHero();

this is a any could be anything,it turn off the type check
noImplicitAny = it can now flag any implicit any as an error in ur ts.config file

---

## Do you really know functions in typescript ?

while it can genearte using var so u can make changes in your ts config file according to that.

While writing in TS always think it is not you are writing a code. There is a a team who is working with u.

    function addTwo(num: number): number{
        return num + 2
    }

    addTwo(5);

    function getUpper(value: string){
        return value.toUpperCase()
    }

    getUpper("hey")


    function signUpUser(name: string, email:string, isPaid: boolean = false){}

    let loginUser = (name: string, email:string, isPaid: boolean = false) => {}

    signUpUser("kiran", "k@gmail.com", false)

    loginUser("kiran", "k@gmail.com")

//funtions part 2

    function getValue(myVal: number): string | boolean{
        if (myVal > 5) {
            return true
        }
        return "200 OK"
    }

    const getHello = (s: string): string => {
        return "hello Kiran"
    }

    const heros = ["thor", "spiderman", "ironman", 10, true];

    heros.map((hero): string => {
        return `hero is ${hero}`
    })

//it is smart enough of to change it from string to string | number | boolean
// you don't need to mention it explicitily

    function consoleError(errMsg: string): void{
        console.log(errMsg);
        //void it does not return any thing that's why
    }
    function handleError(errMsg: string): never{
        throw new Error(errMsg)
        //never: some functions never return a value
        // this means that the function throws an exception or terminates execution of the program
    }

---

## Object

    // const User = {
    //     name: 'hitesh',
    //     email: "hitesh@lco.com",
    //     isActive: true
    // }

    // function createUser({name:string, isActive:boolean}){}

    // createUser({name:"name", isActive:true});

    // let newCourse= {
    //     name: "hitesh and typescript",
    //     isPaid: false,
    //     duration: "120 mins"
    // }

    // function createCourse({name: string, isPaid: boolean}):{name:string, isPaid:boolean}{
    //     return {
    //         name: "reactJs",
    //         isPaid: false
    //     }
    // }

    // createCourse(newCourse)

//+++++ Type Alias +++++++++++
type User = {
name: string,
email: string,
isActive: boolean
}

            type MyString = string

//its weird bt u can use it

        function createUser(user: User): User{
            return {
                name: user.name,
                email: user.email,
                isActive: user.isActive,
            }
        }

    createUser({name: "hite", email:"h@gmail.com", isActive: false})

    export {}

---

## READONLY and optional in typescript

    type User2 = {
        readonly _id: string,
        name: string,
        email: string,
        isActive: boolean,
        creditCardDetails?: number
    }

    const myUser: User2 = {
        _id: "1234",
        name: "hitesh",
        email: "hitesh@lco.com",
        isActive: true
    }

    myUser.email = "hitesh@gmail.com"
    // myUser._id = "1234"

    type Test = {
        readonly arr: Array<number>,
        name: string,
    }
    //array can be changed even after it is readonly
    // because array is a reference type.

    const test: Test = {
        arr: [1,2,3],
        name: "hitesh"
    }

    test.arr.push(4);
    console.log(test.arr);

    // mix match type

    type cardNumber = {
        carNumber: string
    }

    type cardDate = {
        cardDate: string
    }

    type cardDetails = cardNumber & cardDate & {
        cvv: number
    }

---

## Arrays in Typescript

you can use number[], Array<"number">(without ")

    const superHeros: string[] = []

    superHeros.push("spiderman")
    superHeros.push("batman")
    superHeros.push("ironman")
    console.log(superHeros)


    const heroPowers: number[] = []
    //another way to define the same
    const heroPowers2: Array<number> = []


    heroPowers.push(2)
    heroPowers2.push(200)

    console.log(heroPowers)
    console.log(heroPowers2)


    type User = {
        name: string,
        isActive: boolean
    }

    const allUsers: User[] = []

    allUsers.push({
        name: "hitesh",
        isActive: true
    })

    console.log(allUsers);

### Array of arrays

    const MLModels: number[][] = [
        [1, 2],
        [3, 4],
    ]

    const test: string[][] = [
        ["1", "2"],
        ["3", "4"],
    ]

---

## Union Types in TS

Union types helps us to define multiple types for a variable, thus helps us aviod using "any" type
It is recommended to be as much strict as possible and don't over use it like string | number | boolean and what not

    let userId: string | number = 334455

    userId = "334455"
    userId = 334455

    type User = {
        name: string,
        id: number
    }
    type Admin = {
        username: string,
        id: number
    }

    let hitesh: User | Admin = {
        name: "hitesh",
        id: 38947589,
    }

    hitesh = {
        username: "hitesh",
        id: 2342,
    }

This helps us while writing the function

    function getDbId(id: string | number) {
        //making some API calls
        console.log(`DB id is: ${id}`);
    }

    getDbId(3)
    getDbId("32")

To make it more strict

    function getDbId2(id: string | number) {

        if(typeof id === "string"){
            id.toLowerCase();
            //this will not throw an error
        }
        if(typeof id === "number"){
            id + 2
            //this will not throw an error
        }

        // id.toLowerCase();
        // this will throw an error because it is not a string, it is both string and number
        // and it will only allow methods that can work on both string and number
    }

### Array

    const data: number[]  = [1,2,3, "4"]
    const data2: string[]  = [1,2,3, "4"]

If u want both numbers and strings

#### Classic mistake by rookie

    const data3: string[] | number[]  = [1,2,3, "4"]
    //either all the number or all the string

    const data4: (string | number | boolean)[]  = [1,2,3, "4", true]

The goal behind TS is about how u are making your types stricts.

    let pi:3.14 = 3.14
    //no other than 3.14

//usecases for very strict
let seatAllotment:"aisle" | "middle" | "window"

    seatAllotment = "aisle"
    seatAllotment = "middle"
    seatAllotment = "window"
    //seatAllotment = "crew"
        //this will throw an error

---

## Tuples in TS

Almost like python but not that much well implemented in TS.

In broad category it is just like an array with some restrictions on to it.

    const user: string[] = ["hitesh"]

It should be in a specifical order

    let myTuple: [string, number, boolean]

    myTuple = ["hitesh", 2, true]
    myTuple = [ 2, "shjdfgj", true] //will throw an error

Tuple is about restricting u. so that u can have order of an data.

    let rgb: [number, number, number] = [255, 255, 123];

    type User = [number, string]

    const newUser: User = [35461, "hitesh"]

There is something wrong about tuple

    newUser[1] = "hiteshdf"

    //value can be changed sometimes

    newUser.push(3)
    newUser.pop()

    //value can be changed sometimes

    export {}

---

## Enums in TS

    const AISLE = 0
    const MIDDLE = 1
    const WINDOW = 2

    let seat;

    if(seat === 0) {
        //your logic here
    }
    //it is more simple here =>

    enum SeatChoice {
        AISLE = "aisle",
        MIDDLE = "middle",
        WINDOW = "window"
    }

    const hcSeat = SeatChoice.WINDOW;

    //enums gets turned into IIFE while compilation
    // to avoid it use const before enum.

    const enum SeatChoice2 {
        AISLE = "aisle",
        MIDDLE = "middle",
        WINDOW = "window"
    }

---

## Interface in typescript

    interface User {
        email: string;
        userId: number;
        googleId?: string;
        readonly dbId: number;
        //method with return type of string
        startTrail: () => string
        //one more method of doing the same
        startTrail2(): string,
        //optinal method in interface
        // startTrail2?(): string,
        getCoupon(couponName: string, value: number): number,
    }

Interface does not have details about how it will work but it is basic overview of whenever we create this, which will be compulsory which will be properties. It does not says what it should it have inside it

It is like class but it is loosely kinda class (just for understanding purposes.)

    const hitesh: User = {
        email: "hitesh@lco.com",
        userId: 234234,
        dbId: 23443,
        startTrail: () => ("trail started"),
        startTrail2: () => ("trail started"),
        getCoupon: (name: "hitesh", off: 10) => 10
    }

    hitesh.email = "hitesh@gmail.com"
    // hitesh.dbId = 23443
    hitesh.startTrail();
    hitesh.startTrail2();

---

## Interface vs Type in typescript

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
// role: "admin" | "ta" | "learner";
// }

//

---

## How to setup Typescript for real projects

check tsc version
tsc -v

initialising ts:
tsc --init
It will create the typescript config file

in production you have 2 folders src where u write ur code and dist which gets on to production and gets to the end user

in ts config: uncomment them

    "rootDir": "./src",
    "outDir": "./dist",

to open tsc in watch mode
tsc -w

it will continously watch and compile if there is any changes

also in ur ts.config change this :

    "module": "esnext",
    "target": "es6",

Otherwise it may throw some error in ur browser.
Also in html file add:
<script type="module" src="filepath"> </script>

---

## Classes in typescript

tip: one of the way of learning a language is goign through other's people code. To understand the syntax, code and file structure.

if u dont want class's some variable to not accessable write private in front of it :

        class User {
        email: string
        name: string
        private readonly city: string = "Pune"
        constructor(email: string, name: string, city: string) {
            this.email = email
            this.name = name
            this.city = city
        }
        }

    const hitesh = new User("hitesh@lco.com", "hitesh", "pune");
    hitesh.city;
    //now this is not accessible and it will be only accessible in the class

    everything you don't mark is defaultly marked as public.

    you can also use "#" as it is there in js. but hitesh sir use it as private

If you truly want to make something private even in JS, use the # field syntax because TypeScript’s private keyword is only for compile-time checking.

---

## Getters and Setters in typescript

you cannot add the return type in setter.

        class User2 {
            private _courseCount = 1
            constructor(
            public email: string,
            public name: string,
            ) {
            }

            get getAppleEmail(): string {
                return `apple${this.email}`
            }

            get courseCount(): number {
                //you can make a lot more complex logic like
                // check if he is admin then only return that
                return this._courseCount
            }

            //setters
            // setters cannot have any return type
            set courseCount(courseNum: number) {
                if (courseNum <= 1) {
                    throw new Error("Course count should be more than 1")
                }
                this._courseCount = courseNum
            }


            // private methods
            private deleteToken() {
                console.log("Token deleted")
            }

        }

        const p = new User2("hitesh@lco.com", "hitesh")

---

## Protected in TS

This are access modifier. They limit your access.
Protected keyword allows you to access in same class and any other class that inherits that class

        class User2 {
        protected _courseCount = 1
        constructor(
        public email: string,
        public name: string,
        ) {
        }

        get getAppleEmail(): string {
        return `apple${this.email}`
        }

        get courseCount(): number {
        //you can make a lot more complex logic like
        // check if he is admin then only return that
        return this._courseCount
        }

        //setters
        // setters cannot have any return type
        set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
        }

        // private methods
        private deleteToken() {
        console.log("Token deleted")
        }

        }

        class SubUser extends User2 {
        //it cannot access the private method
        // that's why we change it into keyword 'protected'

        changeCourseCount() {
            this._courseCount = 4
        }

        isFamily:  boolean = true

        }

        ---

        ## Why interface is important in TS

        In world of iOS dev there are alot of protocols.
        Protocols is like interface in TS.

        implements keyword:

        interface TakePhoto {
            cameraMode: string
            filter: string
            burst: number
            //there could be more properties and methods
        }

        // you must have the above properties from interface
        // otherwise it will throw an error
        class Instagram implements TakePhoto {
            constructor(
                public cameraMode: string,
                public filter: string,
                public burst: number
            ) {}
        }

        You can add more properties but not less

            class Youtube implements TakePhoto {
                constructor(
                    public cameraMode: string,
                    public filter: string,
                    public burst: number,
                    public shorts: string
                ) {}
            }

        adding more than one interface 

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

        ***

        ## Abstract class in Typescript

        abstract class dont allowed you to create new obj it will throw an error. They are like blueprint.
        to add compulsory methods that child class must have it, you can use abstract keyword in front of method too.


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

---

## Generics in Typescript

    









---

## Generics in Array and Arrow functions in Typescript


---

## Generics Classes in Typescript


---

## Type Narrowing in typescript

---

## The in operator narrowing 

---

## Instanceof and Types Predicates
---

## Discriminated Union and Exhaustiveness Checking with never
---

## TS End

