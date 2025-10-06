"use strict";
// const User = {
//     name: 'hitesh',
//     email: "hitesh@lco.com",
//     isActive: true
// }
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive,
    };
}
createUser({ name: "hite", email: "h@gmail.com", isActive: false });
var myUser = {
    _id: "1234",
    name: "hitesh",
    email: "hitesh@lco.com",
    isActive: true
};
myUser.email = "hitesh@gmail.com";
var test = {
    arr: [1, 2, 3],
    name: "hitesh"
};
test.arr.push(4);
console.log(test.arr);
