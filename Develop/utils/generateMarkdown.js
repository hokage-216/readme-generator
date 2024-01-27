
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'ISC':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    case 'GPL 2.0':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case 'GPL 3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'Mozilla':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
}

function renderLicenseSection(license, author, copy) {
  switch (license) {
    case  'MIT':
      return `## License
  Copyright (c) ${copy} ${author}

  Licensed under the MIT license. To view the license terms click [here](https://opensource.org/licenses/MIT).`;
    case 'ISC':
      return `## License
  Copyright (c) ${copy} ${author}

  Licensed under the ISC license. To view the license terms click [here](https://opensource.org/licenses/ISC).`;
    case 'GPL 2.0':
      return `## License
  Copyright (c) ${copy} ${author}

  Licensed under the GPL v2 license. To view the license terms click [here](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html).`;
    case 'GPL 3.0':
      return `## License
  Copyright (c) ${copy} ${author}

  Licensed under the GPL v3 license. To view the license terms click [here](https://www.gnu.org/licenses/gpl-3.0).`;
    case 'Mozilla':
      return `## License
  Copyright (c) ${copy} ${author}
  
  Licensed under the Mozilla Public License 2.0. To view the license terms click [here](https://opensource.org/licenses/MPL-2.0).`;
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

${data.license == 'No License' ? '' : renderLicenseBadge(data.license)}

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${data.license === 'No License' ? '' : '- [License](#license)'}

## Installation

To install the npm package run this command(s):

${data.installation}

## Usage

${data.usage}

## Tests

To run a test use this command(s):

${data.test}

## Contributing

I want to thank everyone who helped contribute to this project! Most notable mentions go to:

${data.contributing}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}.

To view find more of my work [click here](https://github.com/${data.github}/).

${data.license === 'No License' ? '' : renderLicenseSection(data.license, data.author, data.copyyear)}
`;
}

export { generateMarkdown }