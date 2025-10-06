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
