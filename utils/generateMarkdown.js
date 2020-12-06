// function to generate markdown for README
const generateMarkdown = (response) => {


  return `## ${response.title}

  ## Table of Contents
  1. Description
  2. Installation Instructions
  3. Usage Information
  4. Contribution Guidelines
  5. Test
  6. Questions

  ## Description
  ${response.description}

  ## Installation Instructions
  ${response.installation}

  ## Usage Information
  ${response.usage}

  ## Contribution Guidelines
  ${response.contribution}

  ## License
  ${response.license}

  ## Test
  ${response.test}

  ## Questions
  For additional questions or information, please reach me at the links below:
  
  Github: [${response.username}]
  <br>
  Email: [${response.email}]

`;

}


module.exports = generateMarkdown;
