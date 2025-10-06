const superHeros: string[] = []


superHeros.push("spiderman")
superHeros.push("batman")
superHeros.push("ironman")
console.log(superHeros)


const heroPowers: number[] = []
//another way to define the same
const heroPowers2: Array<number> = []


heroPowers.push(2)
heroPowers2.push(200)

console.log(heroPowers)
console.log(heroPowers2)


type User = {
    name: string,
    isActive: boolean
}

const allUsers: User[] = []

allUsers.push({
    name: "hitesh",
    isActive: true
})

console.log(allUsers);

//array of arrays

const MLModels: number[][] = [
    [1, 2],
    [3, 4],
]

const test: string[][] = [
    ["1", "2"],
    ["3", "4"],
]






export {}