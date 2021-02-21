var inquirer = require('inquirer');
// const prompt = require('prompt-sync')({sigint: true});
var fs = require('fs');
var util = require('util');
var questions = require('./question');
var generateREADME = require('./template');
// create writeFile function using promises instead of a callback function
var writeFileAsync = util.promisify(fs.writeFile);

// function promptUser() {
// 	return inquirer.prompt(questions);
// }

// const init = () => {
//     promptUser()
//       .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
//       .then(() => console.log('Successfully wrote to README.md'))
//       .catch((err) => console.error(err));
//   };
  
//   init();


function writeToFile(answers) {
  fs.writeFile('./template.js' , answers, function(err){
    if(err) {
      return console.log(err);
    }
    console.log('Successfully wrote');
  })
}

const init = () => {
  // promptUser();
   inquirer.prompt(questions)
   .then(function(answers) {
     writeToFile('./readme.md', generateREADME(answers));
   })
  }

init();
