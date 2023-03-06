const inquirer = require('inquirer');
const fs = require('fs');

const { writeFile } = require('fs').promises;
// const { type } = require('os');
const renderLicenseSection = require(`./generateMarkdown`);
const renderLicenseBadge = require(`./generateMarkdown`);
// const generateMarkdown = require('./generateMarkdown');
// const { default: CheckboxPrompt } = require('inquirer/lib/prompts/checkbox');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?'
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your project's title?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a short description explaining the what, why,and how of your project"
        },
        {
            type: "input",
            name: "Badge",
            message: "What kind of license does your project use?"
        },
        {
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?",
        },
        {
            type: "input",
            name: "test",
            message: "What command shold be run to run test?",
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?",
        },
        {
            type: "input",
            name: "contribute",
            message: "What does the user need to know about contributing to the repo?"
        },
        {
            type: "list",
            name: "license",
            message: "selecting the license used",
            choices: ["MIT", "Mozilla", "Apache", "Artisitc", "IBM"]
        }

    ]);
};


//generate read me file
const generateMarkdown = ({ title, description, installation, Badge, usage, contribute, test, github, email, license }) =>
`${renderLicenseBadge(license)}

  #Your-Project-Title
  ${title}
  
  ## Description
  ${description}
  
  ##Table of Contents   
  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [contribute](#HowtoContribute)
  - [Tests](#Tests)
  - [Credits](#Credits)
  - [License](#License)
  - [Questions](#Questions)
  
  ## Installation
  ${installation}
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  ## Usage
  ${usage}
  Provide instructions and examples for use. Include screenshots as needed.
  ## Credits
  ## License
  ${renderLicenseSection(license)}
  ## Badges
  ${Badge}
  ## How to Contribute
  ${contribute}
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  ## Tests
  ${test}
  ## Questions
  #Github:${github}
  #Email: ${email}
  
  Contact me for any concerns or questions`;
  
  const init = () => {
      promptUser()
      .then((answers) => writeFile("README.md", generateMarkdown(answers)))
      .then(() => console.log("generating README File"))
      .catch((err) => console.error(err));
    }
    init();
    // function renderLicenseBadge(license) {
    //     if (license) {
    //         return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
    //     } else {
    //         return `    `;
    //     }
    // }
    // function renderLicenseLink(liscense) {
    //     if (license === 'MIT') {
    //         return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    //     }
    //     if (license === 'Artisitc-2.0') {
    //         return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
    //     }
    //     if (license === 'Apache') {
    //         return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    //     }
    //     {
    //         if (license === 'Mozilla') {
    //             return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    //         }
    //         if (license === 'IBM') {
    //             return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    //         }
    //     }
    // }
    
    
    
    // function renderLicenseSection(license) {
    //     if (license) {
    //         return `##License`
    //     }
    // }