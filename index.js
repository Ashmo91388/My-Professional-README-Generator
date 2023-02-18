// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects title?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github user name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your projecrt?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project?',
        choices: ['APACHE 2.0', 'MIT', 'GPL 3.0', 'BSD 3', 'None']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for installation.',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Provide instructions for running the test.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use the app',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide instructions on how to contribute to this app.',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Provide instructions on how to test this app.',
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userResponses) => {
        console.log('userResponse =',userResponses);
        writeToFile('generatedReadMe.md',generateMarkdown({ ...userResponses}));
    })
}

// Function call to initialize app
init();
