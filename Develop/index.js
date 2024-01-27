// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown';

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How will you use this app?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is the title of your project?'
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'What is the title of your project?',
            choices: ['MIT', 'ISC', 'GPL 2.0', 'GPL 3.0', 'No License']
        },
        {
            type: 'input',
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
        generateMarkdown(data);

    }).catch((err) => {
        // code block
    });
}

// Function call to initialize app
init();