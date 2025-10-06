
let greetings: string = "Hello Kiran";

console.log(greetings);


let myNumber = 6;

//+++++++Errors+++++++++++

//greetings = 6; //will throw an type error

//myNumber.toUpperCase //will throw an error casue it is string property

// greetings.toLowercase //will show an error cuz there is typo in method name it should be toLowerCase

// number 
let userId: number = 334455
let userPoints: number = 33.44

// boolean
let isLoggedIn: boolean = false

//type inference 
// you are overusing the TS 
// it actually infer and it will automatically infer that it will be number
// so u should be just use it like : 
// let userId = 334455

// any 

let hero: string;
// let hero; //here it will be return any 

function getHero(){
    return "thor"
    //i can return true 
}

hero = getHero();
//this is a any could be anything,it turn off the type check
// noImplicitAny = it can now flag any implicit any as an error in ur ts.config file


export {} 
//will get of error after compilation temporary.