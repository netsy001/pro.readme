
var generateREADME = (answers) => {
    console.log(answers)
    var screenshots = '';
    for (let i = 0; i < answers.imageURL.split(',').length; i++) {
        screenshots += `<kbd>![screenshot-demo${i + 1}](${answers.imageURL.split(',')[i].trim()})</kbd>`;
    }
return `
${ answers.title.toUpperCase() };

[![github - follow](https://img.shields.io/github/followers/${answers.username.trim().toLowerCase()}?label = Follow & logoColor=purple & style=social)](https://github.com/${answers.username.trim().toLowerCase()})
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
https://github.com/${answers.username.trim().toLowerCase()}/${answers.repoName.trim()}<br>

## Screenshots - Demo
${ screenshots }

## Project Objective
${ answers.objective }
  
## User Story
${ answers.userStory }

## Installation
${ answers.installation }

## Usage
${ answers.usage }

## Tests
${ answers.test }
## Author Contact
Contact the author with any questions! < br >
    Github link: [${ answers.username.trim().toLowerCase() }](https://github.com/${answers.username.trim().toLowerCase()})<br>
        Email: ${ answers.email }
## License
This project is[${ answers.license.toUpperCase() }](https://choosealicense.com/licenses/${answers.license}/) licensed.<br />
            Copyright © ${ year } [${ answers.authorName.trim().toUpperCase()}](https://github.com/${answers.username.trim().toLowerCase()})

                
<i>This README was generated with ❤️ by ${ answers.authorName.trim().toUpperCase() }</i ></p >; `
}

module.exports=generateREADME;




