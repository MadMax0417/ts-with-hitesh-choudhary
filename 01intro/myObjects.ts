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




export {}