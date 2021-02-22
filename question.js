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
    {
        //Email
        type: 'input',
        message: 'Enter your email address.',
        name: 'Email',
        validate: (email) => {
            const mail = email.match(/\S+@\S+\.\S+/);
            if (mail) {
                return true;
            }
            return 'Please enter valid email address!';
        }
    },
    {
        //github username
        type: 'input',
        message: 'Enter your github username.',
        name: 'userName',
        validate: (userName) => {
            if (userName) {
                return true;
            }
            return 'Please enter valid your github username!';
        }
    },
    {
        //github repoName
        type: 'input',
        message: 'Enter your github reponame.',
        name: 'repo name',
        validate: (reponame) => {
            if (reponame) {
                return true;
            }
            return 'Please enter valid your github reponame!';
        }
    },
    {
        // project links
        type: 'input',
        message: 'Enter your github repo link',
        name: 'repo link',
        validate: (projectLinks) => {
            for (let i = 0; i < projectLinks.split(',').length; i++) {
                let pass = projectLinks.split(',')[i].trim().match(/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/g);
                if (pass) {
                    return true;
                }
                return 'Provide the valid links of the project using the entire link, including the http(s):';
            }
        }
    },
    {
        //  Project Title
        type: 'input',
        message: 'Enter your project title',
        name: 'title',
        validate: (title) => {
            if (title) {
                return true;
            }
            return 'A professional README has a project title.';
        }
    },
    {
        //Check on Screenshots and/or Demo
        type: 'confirm',
        name: 'screenshots',
        message: 'Would you like to add screenshots or demo to README?',
        default: false,
    },
    {
        // Get image path and/or URL
        type: 'input',
        name: 'imageURL',
        message: 'Enter the image paths or urls of screenshots or demo. (* Use comma "," to separate each path or url)',
        validate: (imageURL) => {
            if (imageURL) {
                return true;
            }
            return 'Provide the image paths or urls of screenshots or demo. ';
        }
    },
    {
        //Project objective
        type: 'input',
        message: 'What is your project objective?',
        name: 'objective',
        validate: (objective) => {
            if (objective) {
                return true;
            }
            return 'A professional README provides the project objective.';
        }
    },
    {
        // Project user-story
        type: 'input',
        message: 'Provide the User Story for your propject',
        name: 'userStory',
        validate: (userstory) => {
            if (userstory) {
                return true;
            }
            return 'A professional README provides the User Story for the propject.';
        }
    },
    {
        //Installation
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
        validate: (install) => {
            if (install) {
                return true;
            }
            return 'A professional README provides steps on how to install the project.';
        }
    },
    {
        // How to use
        type: 'input',
        message: 'Provide instructions on how to use your project',
        name: 'usage',
        validate: (use) => {
            if (use) {
                return true;
            }
            return 'A professional README provides instructions on how to use the project.';
        }
    },
    {
    // Tests
    type: 'input',
    name: 'Test',
    message: 'TEST used',
   default: 'npm test'
    },
    {
        // Licences
        type: 'input',
        name: 'Licence',
        message: 'Licence used',
       default: 'MIT'
        },
]
    module.exports = questions;
    // .then((response) => {
    //     console.log(response)
    // });