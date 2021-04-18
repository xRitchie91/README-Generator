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
        name: 'usage',
        message: 'What is the application used for?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: ''
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide project test instructions'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license is your project covered under?',
        choices: [
            '[GNU General Public License](GNU-GP-LIC.txt)',
            '[MIT License](MITLIC.txt)'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) { },

// TODO: Create a function to initialize app    
writeToFile.init(),
{

},

    // Function call to initialize app
    init()

    ,]
