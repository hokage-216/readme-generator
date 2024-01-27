// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown';
const fs = require('fs');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./${fileName}.txt`, data, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Your file has been created!")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'editor',
            name: 'usage',
            message: 'How will the user use this app?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How would the user install the project?'
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'Which license will this project use?',
            choices: ['MIT', 'ISC', 'GPL 2.0', 'GPL 3.0', 'No License']
        },
        {
            type: 'editor',
            name: 'contributing',
            message: 'Who contributed to this project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command is used to run test?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What email address can people contact you with?'
        },{
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        
    ]).then((data) => {
        writeToFile(data.title, generateMarkdown(data));
    }).catch((error) => {
        console.log(error);
    });
}

// Function call to initialize app
init();