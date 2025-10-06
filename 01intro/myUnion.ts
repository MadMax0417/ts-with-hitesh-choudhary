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

//array

// const data: number[]  = [1,2,3, "4"]
// const data2: string[]  = [1,2,3, "4"]

//if u want both of them

//classic mistake
// const data3: string[] | number[]  = [1,2,3, "4"]
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
//seatAllotment = "crew" //this will throw an error


export {}