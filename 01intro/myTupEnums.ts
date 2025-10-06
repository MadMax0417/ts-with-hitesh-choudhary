const user: string[] = ["hitesh"]


//it should be in a specifical order
let myTuple: [string, number, boolean] 

myTuple = ["hitesh", 2, true]
// myTuple = [ 2, "shjdfgj", true] //will throw an error

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

// +++++++++++++++++ Enums +++++++++++++++++


    








export {}