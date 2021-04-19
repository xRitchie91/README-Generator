// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'GNU General Public License v3.0') {
    return '[![License: GNU v3](https://img.shields.io/badge/license-GNU%20v3.0-orange)](https://www.gnu.org/licenses/gpl-3.0.en.html)';
  } else if (license === 'Apache-2.0') {
    return '[![License: Apache](https://img.shields.io/badge/license-Apache%2.0-blue)](https://http://www.apache.org/licenses/LICENSE-2.0)';
  } else if (license === 'MIT') {
    '[![License: MIT] (https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)';
    return
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'GNU General Public License v3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
} else if (license === 'Apache 2.0') {
  return 'https://http://www.apache.org/licenses/LICENSE-2.0';
} else if (license === 'MIT') {
  return 'https://opensource.org/licenses/MIT' 
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under [${license}](${renderLicenseLink
    (license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Testing](#tests)
  - [Questions](#questions)

  ## Install
  ## Use
  ## Lic
  ## Contribute
  ## Qs
  
  
  `;
}

module.exports = generateMarkdown;
