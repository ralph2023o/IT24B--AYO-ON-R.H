

// DATA TYPES
let x = 12 ;
 let y  = 0
 
 let name = "gwapo"
let char = "IS"
 
//ARITHMETIC 
let sum = x + y 
console.log(sum)

let diff = x - y 
console.log(diff)

let prod = x * y 
console.log(prod)

let quo = x / y 
if( y ==0 || x==0)//logical
    {
console.log("you cannot divide by zero")
} else {
    console.log(quo)//if else
}

// Switch
let hope = "YES"

switch (hope) {
    case 1:
        console.log("YEYES");
        break;
    case 2:
            console.log("Ralph");
            break;
  case "YES":
            console.log("YES");
            break;
    default:
        console.log("DEFAULT");
        break;
}

//loop
let i = 0
do {
    console.log(i); i++
} while (i<=2);

// odd or even
function OddorEven(the){
    if (the %2 == 0){
        console.log("The number is even")
    } else {
        console.log("The number is odd")
    }
}
OddorEven(19);
 

//Prime number
function Prime(prime){
    if (prime %2 ===1){
        console.log(prime + "is a prime number")
}else {
    console.log(prime + "is not a prime number")
}
}
Prime(3)

