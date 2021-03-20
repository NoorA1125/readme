// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseType = data.license[0];
  let lincenseText = "";

  if(licenseType === "MIT"){
    lincenseText = `![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)`
  };

  if(licenseType === "GNU General Public License 2.0"){
    lincenseText = `![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)`
  };

  if(licenseType === "Apache License 2.0"){
    lincenseText = `![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)`
  };
  if(licenseType === "GNU General Public License  3.0"){
    lincenseText = `![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)`
  };

  return lincenseText;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  #Table of Contents
  Description
  Installation
  Usage
  Contributing
  Test
  License
  Github
  Email

  #Descrption
  ${data.description}

  #Installation
  ${data.installation}

  #Usage
  ${data.usage}

  #Contributing
  ${data.contributing}

  #Test
  ${data.test}
  
  #License
  ${data.license}

  ##Github
  ${data.github}

  #Email
  ${data.email}
`
}

module.exports = generateMarkdown;
