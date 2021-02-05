const anyPerson = {
    firstName: "Noman",
    lastName: "Sakib",
    salary: 21000,
    fullName: function(){
       return `${this.firstName} ${this.lastName}`
    }
}

console.log(anyPerson.fullName());

