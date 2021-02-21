// var inquirer = require('inquirer');
const questions = [
// inquirer.prompt([
    {
        //Name
        type: 'input',
        message: 'What is your Full  Name?',
        name: 'Full Name',
        validate: (name) => {
            const result = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);  //stack over flow:- (https://stackoverflow.com/questions/11522529/regexp-for-checking-the-full-name)
            if (result) {
                return true;
            }
            return 'Please enter your Full Name!';
        }
    },
   
]
    module.exports = questions;
    // .then((response) => {
    //     console.log(response)
    // });