// CONDITIONALS
let equals = 1 === 1; //console.log(equals) | returns true
let storeA = 3.10;
let storeB = 4.40;

//let storeAIsLower = storeA < storeB; //console.log(storeAIsLower) | returns either true or false



// FUNCTIONS
function compareStorePrices(storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

// compareStorePrices(10, 5);
// compareStorePrices(7, 10);
// compareStorePrices(5, 5);

function squareNum(number) {
    return number * number
}

let squaredNumber = squareNum(4); // console.log(squaredNumber) | returns 16



// SCOPE
let x = 10; //global scope

function addNumbers(n, m) { //function scope
    // console.log(x);
    let b; //block scope
    if(1===1) {
        b = 8;
    }
    // console.log(b)
    return n + m;
}

addNumbers(2, 3, 8);
// console.log(x);



// ARRAYS        0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];
let arrLen = ourArray.length;

// let newArr = ourArray[4];
// console.log(newArr[0]);

// counter,    comp,              incr
for(let i = 0; i<arrLen; i++){
    // console.log("i is equal to: " + i);
    // console.log(ourArray[i]);
}

let y = 0
while (y < 10) {
    console.log("Ran");
    y = y + 1;
}



//Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterthanEq = 5 >= 5;

// Equals
// let equals = 1 === 1;

// Not Equals
let notEquals = 5 !== 2;



