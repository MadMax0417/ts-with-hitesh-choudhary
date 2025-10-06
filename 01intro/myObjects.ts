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

type MyString = string  //its weird bt u can use it 

function createUser(user: User): User{
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive,
    }
}

createUser({name: "hite", email:"h@gmail.com", isActive: false})

//+++++++ READONLY and optional in typescript ///////

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




export {}