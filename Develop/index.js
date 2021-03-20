// TODO: Include packages needed for this application
const questions = require("./prompt.js");
const generatorMarkdown = require("./generateMarkdown");
const fs = require("fs");

function init() {
questions();
generatorMarkdown("Yes sirrr");

}

// Function call to initialize app
init();
