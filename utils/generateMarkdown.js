// If a license was selected, displays license badge next to title
function renderLicenseBadge(license) {
  if (license == 'None') {
    return ''
  } else if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license == 'Boost') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
}

// If a licenese was selected, displays the license link in table of contents.
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '- [License](#license)'
  } else {
    return ''
  }
}

// If a license was selected, displays license title on README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return '## License'
  } else {
    return ''
  }
}

// base contents of README before user input
function generateMarkdown(data) {
  return `# ${data.title}${renderLicenseBadge(data.license)}
  
## Description
${data.description}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}
${data.license}

## How to Contribute
${data.contribute}

## Tests
${data.tests}

## Questions
Github: https:/github.com/${data.username}

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
