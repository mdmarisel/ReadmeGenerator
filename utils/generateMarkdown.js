// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return `![MIT](https://img.shields.io/badge/licence-MIT-green)`
  }if (license === "Apache") {
    return `![Apache](https://img.shields.io/badge/licence-apache-green)`
  } 
   else{
    return ""
  }
  //https://img.shields.io/badge/licence-MIT-green
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No license"){
    return "chosen, If you do not know what license should you use please refere to this link [https://choosealicense.com/](https://choosealicense.com/)"
  }else{
     return ""
  }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if(license === data.licenses){
//     return licenses
//   } else{
//     return ""
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ## Description 
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#licenses)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Test
  ${data.test}
  ## Licenses
  ${data.licenses}
  ${renderLicenseBadge(data.licenses)} ${renderLicenseLink(data.licenses)} 
 
  `;
}

module.exports = generateMarkdown;