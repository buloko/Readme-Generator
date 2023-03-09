// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// const fs = require('fs');

      
  function renderLicenseBadge(license) {
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

function renderLicenseLink(license) {
  if (license === "MIT") {        
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Mozilla") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "IBM") {
    return `((https://opensource.org/licenses/IPL-1.0))`;
  } else {
    return "";
  }
}


function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents   
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How-to-contribute](#how-to-contribute)
- [Questions](#questions)

  
## Description
${data.description}
  
## Installation
${data.installation}


## Usage
${data.usage}
Provide instructions and examples for use. Include screenshots as needed:

## Credits
${data.credits}
## License
${renderLicenseLink(data.license)}
## How to Contribute
${data.contribute}
## Tests
${data.test}
## Questions
If you have questions you can reach me at <a href="${data.email}">${data.email}</a>. Make sure to check out my work at http://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;

