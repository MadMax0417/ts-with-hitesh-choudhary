function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null) {
    // cautioary tale
    if (!id) {
        console.log("Please provide an id");
        return;
    }
    id.toLowerCase();
}

//make sure that u also be extra cautious when there is null as u put multiple checks in detectType function where there input either can be number or string 

// use type guards (which is nothing but an extra check and just "typeof")


// +++++ in operator +++++++

interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}


// +++++ instanceof operator and types predicates +++++++

function logValue(x: Date | string) {
    //type guard
    //almost same as "typeof" but it for things that can be created by "new" keyword
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

// types predicates


type Fish = { swim: () => void };
type Bird = { fly: () => void };

//typecasting "is" we are returning the type, if we didnt use it, it will return boolean
function isFish(pet: Fish | Bird): pet is Fish {
    //typecasting "as"  
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food";
    } else {
        pet 
        return "bird food";
    }
}



///// Discriminated Union and exhaustive checks with never


/// discriminated union

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    length: number;
    width: number;
}

type Shape = Circle | Square ;   

function getTrueShape(shape: Shape) {
    //we are returning the area of the circle | square
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
}

//never type 

function getArea(shape: Shape){ 
    switch(shape.kind){
        case "circle" :
            return Math.PI * shape.radius ** 2
        case "square" : 
            return shape.side * shape.side
        
            //precautionaly check
            // should have exhaustive check with type never
            // and u shud return it.
            // also when u add a new shape and u didnt add it here, it will throw an error 
         default:
            const _exhaustiveCheck: never = shape
            return _exhaustiveCheck
    }
}

// never type is kinda cool rather than discriminated union 