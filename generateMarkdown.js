// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs');

function renderLicenseBadge(license) {
  if (license) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)](${renderLicenseLink(license)})`;
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Artistic-2.0':
      return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'Mozilla':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'IBM':
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    default:
      return '';
  }
}

function renderLicenseSection(license) {
  if (license) {
    return `## License
This project is protected by the ${license} license. To learn more about what this means, click the license badge at the top.`;
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents   
 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
  
## Description
${data.description}
  
## Installation
${data.installation}
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage
${data.usage}
Provide instructions and examples for use. Include screenshots as needed.

## Credits
${renderLicenseLink(data.license)}
## License
${renderLicenseSection(data.license)}

## Badges
${data.Badge}

## How to Contribute
${data.contribute}
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
${data.test}

## Questions
If you have questions you can reach me at <a href="${data.email}">${data.email}</a>. Make sure to check out my work at http://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;

