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
  renderLicenseBadge
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

  #Please give a description of your project

  ${data.Description}

  #How can this application be installed?

  ${data.Installation}

  #Usage Of The This Project?

  ${data.Usage}

  #Who else is contributing to this Project?

  ${data.Contributing}

  #Test

  ${data.Test}
  
  #What Licensing are you using for this Project?

  ${data.license}

  ##What is your Github?

  ${data.github}

  #Contact - How can you be reached?

  ${data.Email}

  #Support
  For any questions regarding the application or or its functionality, I can be best reached at: ${data.Email}
`
};

module.exports = generateMarkdown;
