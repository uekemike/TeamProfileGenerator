const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, Id, email, school){
        super(name, Id, email);
        this.school =school;
    }
 

    getSchool(){
            //must not be blank 
     }
    getRole(intern){
        // `getRole()`&mdash;returns `'Intern' 
        return "intern";  
     }  
}


// const intern = new Intern("My School", "Mary",2, "mary@mary.com");
// intern.getSchool();
// intern.Employee();

module.exports = Engineer;