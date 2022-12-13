const inquirer = require(`inquirer`);
const fs = require('fs');

const { writeFile } = require('fs').promises
const { type } = require('os');
// const { default: CheckboxPrompt } = require('inquirer/lib/prompts/checkbox');

const questions = () => {
    return inquirer.questions([
        {
            type: "input",
            name: "username",
            message: "What is your Github username?"
        },
        {
            type: "input",
            name: "Project name",
            message: "What is your project's name?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a short description explaining the what, why,and how of your project"
        },
        {
           type:"list",
           name:"Badge",
           message:"What kind of license does your project use?"
        },
        {
            type:"input",
            name:"dependencies",
            messgae:"What command should be run to install dependencies?",
        },
        {
            type:"input",
            name:"test",
            message:"What command shold be run to run test?",
        },
        {
            type:"input",
            name:"using the repo",
            message:"What does the user need to know about using the repo?",
        },
        {
            type:"input",
            name:"Contribution",
            message:"What does the user need to know about contributing to the repo"
        }

    ])
}
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
const init = () => {
    promptUser()
}