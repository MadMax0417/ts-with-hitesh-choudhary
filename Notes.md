# typescript notes

TS is superset of JS. It is compiled in JS in the end. They don't know give some extra feature

## Should you be using TS ?
- TS is not about reinventing JS
- You shouldnt use TS if your project is small


Typescript is just about Type Safety, nothing more. 

### What is type safety ?
- In JS you can add 2 with "2", which is number with string. This behaviour should not be allowed. TS helps with thisc with type safety.


***

## What Typescript does ?
 
- Static Checking : Constantly being analysed code as we type
- In TS you write more lines of ts than JS
- Chances of producing gets less. 


### How does it works ?
You write the code in TS => that is compiled into JS (converted into JS)
Remember, it's development tool. Your project still runs JS.


[Typescript Playground](https://www.typescriptlang.org/play/)

***

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

***

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


*** 

## Number, boolean and type inference

### number 
    let userId: number = 334455

    let userPoints: number = 33.44

### boolean
    let isLoggedIn: boolean = false

### type inference 
 You are overusing the TS. It actually infer and it will automatically infer that it will be number. so u should be just use it like : 

    let userId = 334455

*** 
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

***
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

*** 
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

***
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

*** 

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

//array of arrays

const MLModels: number[][] = [
    [1, 2],
    [3, 4],
]

const test: string[][] = [
    ["1", "2"],
    ["3", "4"],
]


*** 

## Union Types in TS

// Union Types 
// Union types helps us to define multiple types for a variable
// thus helps us aviod using "any" type


// it is recommended to be as much strict as possible and dont over use it like string | number | boolean and what not
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

//this helps us while writing the function

    function getDbId(id: string | number) {
        //making some API calls
        console.log(`DB id is: ${id}`);
    }

    getDbId(3)
    getDbId("32")

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
    }

### array

    const data: number[]  = [1,2,3, "4"]
    const data2: string[]  = [1,2,3, "4"]

//if u want both of them

#### classic mistake
    const data3: string[] | number[]  = [1,2,3, "4"]
//either all the number or all the string

    const data4: (string | number | boolean)[]  = [1,2,3, "4", true]

//the goal behind TS is about how u are making your types stricts.

    let pi:3.14 = 3.14
    //no other than 3.14

//usecases for very strict 
    let seatAllotment:"aisle" | "middle" | "window"

    seatAllotment = "aisle"
    seatAllotment = "middle"
    seatAllotment = "window"
    //seatAllotment = "crew" 
        //this will throw an error

*** 

## Tuples in TS 

Almost like python but not that much well implemented in TS.
 
 in broad categoryit is just like an array with some restrictions on to it.

const user: string[] = ["hitesh"]


//it should be in a specifical order
let myTuple: [string, number, boolean] 

myTuple = ["hitesh", 2, true]
myTuple = [ 2, "shjdfgj", true] //will throw an error

//tuple is about restricting u. so that u can have order of an data.

let rgb: [number, number, number] = [255, 255, 123];

type User = [number, string]
    
const newUser: User = [35461, "hitesh"]

// there is something wrong about tuple

newUser[1] = "hiteshdf"
//value can be changed something

newUser.push(3)
newUser.pop()
//value can be changed something

export {}

***
## Enums in TS 

const AISLE = 0
const MIDDLE = 1
const WINDOW = 2


let seat;

if(seat === 0) {

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

***
 
## Interface in typescript

