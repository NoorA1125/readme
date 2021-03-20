const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
function questions() {
inquirer.prompt([
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
])
.then((response) => {
    return fs.writeFileSync(path.json (process.cwd(), "README.md"),generate(response));
})
};

module.exports = inquirer;
