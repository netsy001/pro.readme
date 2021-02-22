
var generateREADME = (answers) => {
    console.log(answers)
    var screenshots = '';
    for (let i = 0; i < answers.imageURL.split(',').length; i++) {
        screenshots += `<kbd>![screenshot-demo${i + 1}](${answers.imageURL.split(',')[i].trim()})</kbd>`;
    }
    return `
${answers.title.toUpperCase()};

[![github - follow](https://img.shields.io/github/followers/${answers.userName.toLowerCase()}?label = Follow & logoColor=purple & style=social)](https://github.com/${answers.userName.toLowerCase()})
    [![license](https://img.shields.io/badge/License-${answers.Licence.toUpperCase().split('-').join('v')}-brightgreen.svg)](https://choosealicense.com/licenses/${answers.license}/)

## Table of Content
[Project Links](#Project - Links)
[Screenshots - Demo](#Screenshots)
[Project Objective ](#Project - Objective)
[User Story ](#User - Story)
[Installation](#Installation)
[Usage](#Usage)
[Tests](#Tests)
[Author Contact ](#Author - Contact)
[License](#License)

## Project Links
https://github.com/${answers.userName.toLowerCase()}/${answers.repoName}<br>

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

    Github link: [${answers.userName.toLowerCase()}](https://github.com/${answers.userName.toLowerCase()})<br>
        Email: ${answers.Email}
## License
This project is[${answers.Licence}](https://choosealicense.com/licenses/${answers.Licence}/) licensed.<br />
            Copyright © [${answers.authorName}](https://github.com/${answers.userName})

                
<i>This README was generated with ❤️ by ${answers.authorName}</i ></p >; `
}

module.exports = generateREADME;




