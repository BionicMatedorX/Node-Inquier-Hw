// TODO: Include packages needed for this application

const generateMarkdown = require('./utils/generateMarkdown.js');

const inquirer = require("inquirer");

const fs = require("fs");

// TODO: Create an array of questions for user input

const questions = [

    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide the description for your project.",  
    },
    {
        type: "input",
        name: "installInstruct",
        message: "Please provide installation instructions for your project.",  
    },
    {
        type: "input",
        name: "usageInfo",
        message: "Please provide usage information for your project.",  
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide contribution guidelines for your project.",  
    },
    {
        type: "input",
        name: "testInstruct",
        message: "Please provide the test instructions for your project.",  
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a lincense for your project.",  
        choices: ["MIT", "N/A"],
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?",  
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",  
    },
    
];

// TODO: Create a function to write README file

function writeReadMe(fileName, data) {

    fs.writeFile(fileName, data, (err) => {

        if (err)
            throw err;
        console.log("All data created in README.")
    });
};


// TODO: Create a function to initialize app

function init() {

    inquirer.prompt(questions)

    .then(function(answers) {

        console.log('answers from the prompt', answers);

        writeReadMe("README.md", generateMarkdown(answers));

    });

};

// Function call to initialize app

init();