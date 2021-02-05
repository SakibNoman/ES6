const anyPerson = {
    firstName: "Noman",
    lastName: "Sakib",
    salary: 21000,
    fullName: function(){
       return `${this.firstName} ${this.lastName}`
    },
    insurance: function(amount,tax){
        this.salary = this.salary - amount - tax;
    }
}

const heroPerson = {
    firstName: "Hero",
    lastName: "Zero",
    salary: 15000
}

const morePerson = {
    firstName: "Belal",
    lastName: "Hosen",
    salary: 30000
}

// call take the comma separated parameter whereas apply take others parameter except current object as an Array

console.log(anyPerson.fullName.apply(heroPerson))

anyPerson.insurance.apply(morePerson, [500, 50]);  //others parameter as an Array
console.log(morePerson.salary);