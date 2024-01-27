// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, author, copy) {
  switch (license) {
    case 'MIT':
      return `## License
      Copyright (c) ${copy} ${author}
      Licensed under the GPL MIT license.`;
    case 'ISC':
      return `## License
      Copyright (c) ${copy} ${author}
      Licensed under the ISC license.`;
    case 'GPL 2.0':
      return `## License
      Copyright (c) ${copy} ${author}
      Licensed under the GPL 2.0 license.`;
    case 'GPL 3.0:':
      return `## License
      Copyright (c) ${copy} ${author}
      Licensed under the GPL 3.0 license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${data.license === "No License" ? null : '- [License](#license)'}

## Installation

To install the npm package run this command(s):

 - ${data.installation}

## Usage

${data.usage}

## Tests

To run a test use this command(s):

${data.tests}

## Contributing

${data.contributing}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

${data.license === 'No License' ? null : renderLicenseSection(data.license, data.author, data.copyyear)}
`;
}

export { generateMarkdown }