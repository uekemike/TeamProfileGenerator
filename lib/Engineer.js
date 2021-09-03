const Employee = require('./Employee');

class Engineer extends Employee{

    constructor(name, Id, email, github, username){
        super(name, Id, email);
        this.github = github;
    }

    getGithub(){
        //must not be blank
        //must contain `@ && . && com`
            
     }
    getRole(){
        // `getRole()`&mdash;returns `'Engineer'  
        return "Engineer";  
     }

}

module.exports = Engineer;