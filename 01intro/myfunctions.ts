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


export {}