// TODO: Include packages needed for this application
import { input } from '@inquirer/prompts';

const title = await input({ message: 'Enter your name' });

// TODO: Create an array of questions for user input
questions.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();