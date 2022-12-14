// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs =require('fs');
function renderLicenseBadge(license) {
  if(license) {
    return`[!${license}] license](https://img) `
  } else {
    return``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license==='MIT') {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}
if(license==='Artisitc-2.0') {
  return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
}
if (license === 'Apache') {
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
}
{
if(license ==='Mozilla') {
  return`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
}
if(license==='IBM') {
  return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `##License
    This project is protectded by the ${license} license. To learn more about what this means, click the license badge at the top.`
  } else{
    return``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge}

 const # <Your-Project-Title>
    ${data.title}
  
    ## Description
  ${data.description}
  
  ##Table of Contents   

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  ## Usage
  ${data.usage}
  Provide instructions and examples for use. Include screenshots as needed.
  ## Credits
  ##License
  ${renderLicenseSection}
  ## Badges
  ${data.Badge}
  ## How to Contribute
  ${data.contribute}
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  ## Tests
  ${data.test}
 


  #Contact
  #Github:${data.github}
  #Email: ${data.email}

`;
}

module.exports = generateMarkdown;
