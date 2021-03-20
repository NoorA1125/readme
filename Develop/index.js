// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/prompt")
var fs = require("fs");

function init() {
questions();
generatorMarkdown("Yes sirrr");
}

// Function call to initialize app
init();
