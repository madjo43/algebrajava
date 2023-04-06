const pet = {
    numberOfLegs: 4,
    name: "Nero",
    weight: 16,
    sayHello: function (name){
        console.log("Hello!", name);
    }
};

console.log(pet);
console.log(pet.name);

pet.sayHello("Ivo");