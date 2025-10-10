const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}
//take number as an input and return as string it is not good idea
//problem remains the same as before, as it does not know the type

function identityThree<Type>(val: Type): Type {
  return val;
}
// it is almost as any. the difference is once you pass the type, the value will be restricted to that type.
//if u take number as an input, value will be automatically be number and so does the return value
// you dont need to manually change it every single time

//hover over it, you will understand the return value
identityThree(3); //number
identityThree("3"); //string
identityThree(true); //boolean
identityThree(null); //null
identityThree(undefined); //undefined

// kinda shortcut

function identityFour<T>(val: T): T {
  return val;
}

// you can also define ur own type

interface Bottle {
  brand: string;
  price: number;
}
// if u are passing something of ur type u can use this syntax:  <Bottle>
identityFour<Bottle>({ brand: "coca-cola", price: 10 });

// generics in array and arrow fns in Ts

//Array generics
function getSearchProducts<T>(products: T[]): T[] {
  return products;
}

function getSearchProducts2<T>(products: T[]): T {
  // function getSearchProducts2<T>(products: T[]): T | undefined {
  // db calls
  const myIndex = 3;
  if (products.length <= myIndex) {
    throw new Error("Product not found");
  }
  return products[myIndex]!; //non-null assertion
  //its like trust me it wont be undefined
}

//arrow function
// you will see they put comma after type especially when they are working with generics in react, it shows that u it is not jsx.
const getMoreSearchProducts = <T>(product: T[]): T => {
  // do some db operations
  const myIndex = 4;
  //you can also use arrays methods
  return product[myIndex]!;
};

// generics classes in typescript

function anotherFunction<T, U>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

anotherFunction(1, "hitesh");
anotherFunction(1, "4");


// extends keyword
interface Database {
    connection: string;
    username: string;
    password: string;
}


//yes you can also directly use as a type as Database
function anotherFunction2<T, U extends Database>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}


// class 

interface Quiz {
    name: string;
    type: string;
}

interface Course{
    name: string;
    author: string;
    subject: string
}

class Saleable<T>{
    public cart: T[] = [];

    addToCart(product: T){
        this.cart.push(product);
    }
}

