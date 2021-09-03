const { threadId } = require("worker_threads");

class Employee{
    constructor(name, Id, email){
        this.name = name;
        this.Id = Id;
        this.email =email;
 }

 getName(){
//must not be blank
//must not be numeric or single digit
// name: 'name',
//  `what is your ${this.name}`,
    return this.name ;   
}

 getId(){
//must not be blank 
//cannot be more that 8 charcters
    return this.Id;
        
}

 getEmail(){
//must not be blank
//must contain `@ && . && com`
    return this.email;
        
}

 getRole(){
   // `getRole()`&mdash;returns `'Employee'  
   return "Employee";
   
 }
};

module.exports = Engineer;
