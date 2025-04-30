// OBJECTS
let dog = {
    name: "Phefen",
    color: "brown",
    breed: "Pug",
    size: "Small",
    isGoodWithChildren: false,
    bark: function(ominous){ //signature:function(parameter)
        console.log("Björk!");
    }
}

dog.bark();

// PASSING BY VALUE & REFERENCE
function x(y) { //Avoid using single letter variables if possible
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "Thomas",
    num: 10,
};
x(y);
console.log(y);