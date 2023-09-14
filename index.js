// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title to your project?',
        name: 'title'
    },

    {
        type: 'input',
        message: 'Provide a description of your project.',
        name: 'description'
    },

    {
        type: 'input',
        message: 'Provide step by step instructions on how to install and run project.',
        name: 'installation'
    },

    {
        type: 'input',
        message: 'Provide instructions for use.',
        name: 'usage'
    },

    {
        type: 'list',
        message: 'Which license do you want to add?',
        name: 'license',
        choices: ['Apache', 'Boost', 'MIT', 'None']
    },

    {
        type: 'input',
        message: 'Provide badges.',
        name: 'badges'
    },

    {
        type: 'input',
        message: 'How can other developers contribute to this project?',
        name: 'contribute'
    },

    {
        type: 'input',
        message: 'Provide examples on how to test your project',
        name: 'tests'
    },

    {
        type: 'input',
        message: '',
        name: 'username'
    },

    {
        type: 'input',
        message: '',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log('README file generated successfully')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(
        function (answers) {
        let markdown = generate(answers);
        writeToFile('README.md', markdown);
        }
    )
}

// Function call to initialize app
init();
