class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person("Shakib", "Khan", 80000);

console.log(heroPerson.firstName);

//old system to create class

function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1("Rahim","Uddin",30000);

console.log(oldPerson.salary);