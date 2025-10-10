console.log("Typescript is here");

// how to create a class in ts

class User {
    public email: string
    name: string
    private readonly city: string = "Pune"
    constructor(email: string, name: string, city: string) {
        this.email = email
        this.name = name
        this.city = city
    }
}

const hitesh = new User("hitesh@lco.com", "hitesh", "pune");
// hitesh.city;


class User2 {
    protected _courseCount = 1
    constructor(
       public email: string,
       public name: string,
    ) {
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        //you can make a lot more complex logic like 
        // check if he is admin then only return that
        return this._courseCount
    }

    //setters
    // setters cannot have any return type
    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }

    // private methods
    private deleteToken() {
        console.log("Token deleted")
    }

}

class SubUser extends User2 {
    //it cannot access the private method

    // changeCourseCount() {
    //     this._courseCount = 4
    // }

    isFamily:  boolean = true

}



const p = new User2("hitesh@lco.com", "hitesh")
