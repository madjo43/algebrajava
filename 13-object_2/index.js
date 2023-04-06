const person = {
    name: "Mladen",
    lastName: "Ivanković",
    age: 35,
    interes: ["sport", "igre", "izlasci"],
    sayHello: function (){
        console.log("Hello!" );
    },
    myInterrests: function() {
        console.log("My interest are: ", this.interes.join(`,`));
    }

}
person.sayHello();
person.myInterrests();