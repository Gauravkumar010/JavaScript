"Use strict";

// console.log(3+30);

// console.log("Gaurav")


let age = 18
let name ="gaurav"
let state = null
let isLogged = false
let undefined;
let h= null;
// console.log(typeof h)


//number => 2 to power 53;
// bigint
//symbol=> unique
//object


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score=100;
const scoreValue=100.2;

const value=null

const Id=Symbol('125')
const anotherId=Symbol('125')

// console.log(Id === anotherId);

let bigValue=12346897897814564n


// console.log(typeof bigValue)




// Reference (Non primitive)

// Array, Objects, Functions

let heros = ["Ironman", "Thor", "Hulk", "Loki"]

let myobj={
    name:"gaurav",
    age:21,
}

const myfunction=function(){
    console.log("Hello gaurav")
}


// console.log(typeof myfunction)



//Stack (primitive)  Heap(Non-primitive)


let myname = "Gaurav";
let anothername = myname
anothername="Gaurav kumar"

// console.log(myname)
// console.log(anothername)

let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="gaurav@gmail.com"

console.log(userTwo.email)
console.log(userOne.email)
