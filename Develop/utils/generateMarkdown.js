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

// render license link "license";
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  

  #Table of Contents
  Description - (#Description)
  Installation - (#Installation)
  Usage - (#Usage)
  Contributing - (#Contributing)
  Test - (#Testing)
  License - (#License)
  Github - (#Github)
  Email - (#Email)

  #Descrption
  ${data.Description}

  #Installation
  ${data.Installation}

  #Usage
  ${data.Usage}

  #Contributing
  ${data.Contributing}

  #Test
  ${data.Test}
  
  #License
  ${data.License}

  ##Github
  ${data.Github}

  #Email
  ${data.Email}
`
};

module.exports = generateMarkdown;
