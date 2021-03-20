// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require("./utils/generateMarkdown");

const questions = ([
    {
        type: "input",
        message: "What is your Github username?",
        name: "Username",

    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email",

    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title",

    },
    {
        type: "input",
        message: "Give a description of what your projects about?",
        name: "Description",

    },
    {
        type: "input",
        message: "What depencecies are required to install/run this application?",
        name: "Installation",

    },
    {
        type: "input",
        message: "What is the project used for?",
        name: "Usage",

    },
    {
        type: "input",
        message: "What license was used for this README?",
        name: "License",

    },
    {
        type: "input",
        message: "Please add other contributors (if any):",
        name: "Contributor",

    },
    {
        type: "input",
        message: "What command do you use to test the project?",
        name: "Test",

    },
]);

//writing to file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Successfully created ' + filename);
    })
}

//initializing 
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            "use strict";
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data);
        })
}

// Function call to initialize app
init();
