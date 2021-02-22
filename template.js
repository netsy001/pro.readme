
var generateREADME = (answers) => {
    console.log(answers)
    var screenshots = '';
    for (let i = 0; i < answers.imageURL.split(',').length; i++) {
        screenshots += `<kbd>![screenshot-demo${i + 1}](${answers.imageURL.split(',')[i].trim()})</kbd>`;
    }
    return `
${answers.title}


![license](https://img.shields.io/badge/License-${answers.Licence.toUpperCase()}-brightgreen.svg)

## Table of Content
* [Project Links](#Project-Links)
* [Screenshots-Demo](#Screenshots)
* [Project Objective ](#Project-Objective)
* [User Story ](#User-Story)
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Author Contact ](#Author-Contact)
* [License](#License)

## Project Links
https://github.com/${answers.userName.toLowerCase()}/${answers.repoName},

https://drive.google.com/file/d/1fdR1xT4iXXXMtmCdAPncx9z_R1gvN_WG/view

## Screenshots - Demo
${screenshots}

## Project Objective
${answers.objective}
  
## User Story
${answers.userStory}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Tests
${answers.test}

## Author Contact
Contact the author with any questions! 

Github link: [${answers.userName}](https://github.com/${answers.userName})
    
Email: ${answers.Email}

## License
This project is [${answers.Licence}](https://choosealicense.com/licenses/${answers.Licence}/) licensed.<br />
Copyright © [${answers.authorName}](https://github.com/${answers.userName})

                
<p><i>This README was generated with ❤️ by ${answers.authorName}</i ></p >; `
}

module.exports = generateREADME;




