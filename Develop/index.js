import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';


function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}-README.txt`, data, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Your file has been created! File located at: ../readme-generator/${fileName}-README.txt`)
        }
    })
}

function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project:'
        },
        {
            type: 'editor',
            name: 'usage',
            message: 'How will the user use this app?'
        },
        {
            type: 'editor',
            name: 'installation',
            message: 'What command(s) would the user use to install the project?'
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'Which license will this project use?',
            choices: ['MIT', 'ISC', 'GPL 2.0', 'GPL 3.0', 'Mozilla', 'No License']
        },
        {
            type: 'editor',
            name: 'contributing',
            message: 'Who contributed to this project?'
        },
        {
            type: 'editor',
            name: 'test',
            message: 'What command(s) is/are used to run test?'
        },
        {
            type: 'input',
            name: 'author',
            message: 'What is the authors first and last name?'
        },
        {
            type: 'input',
            name: 'copyyear',
            message: 'What is the copywrite year?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What email address can people contact you with?'
        },
        {
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

init();