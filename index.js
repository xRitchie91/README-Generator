// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'project',
        message: 'What is your project called?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Does your project require installations?'
    },
    {
        type: 'input',
        name: 'use',
        message: 'What is the application used for?'
    },
    {
        type: 'input',
        name: '',
        message: ''
    },
    {
        type: 'input',
        name: '',
        message: ''
    }


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app    
function init() {}

// Function call to initialize app
init();
