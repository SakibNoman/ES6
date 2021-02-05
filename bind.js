const anyPerson = {
    firstName: "Noman",
    lastName: "Sakib",
    salary: 21000,
    fullName: function(){
       return `${this.firstName} ${this.lastName}`
    },
    insurance: function(amount){
        return this.salary - amount;
    }
}

const heroPerson = {
    firstName: "Hero",
    lastName: "Rashed",
    salary: 15000
}

const morePerson = {
    firstName: "Billi",
    lastName: "Baba",
    salary: 30000
}

//The magic of bind: We can use any method of any object for other object;

console.log(anyPerson.insurance(500));

// const heroGrandSalary = anyPerson.insurance.bind(heroPerson);
console.log(anyPerson.insurance.bind(heroPerson)(500));



const heroFullName = anyPerson.fullName.bind(heroPerson);
const moreFullName = anyPerson.fullName.bind(morePerson);

console.log(heroFullName());
console.log(moreFullName());