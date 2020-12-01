// function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  # ${data.title}

  ## Table of Contents
  1. Description
  2. Installation Instructions
  3. Usage Information
  4. Contribution Guidelines
  5. Test
  6. Questions

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  For additional questions or information, please reach me at the links below:
  
  Github: [${data.username}]
  Email: [${data.email}]

`;
}


module.exports = {
  title,
  description,
  installation,
  usage,
  contribution,
  test,
  username,
  email,
}
generateMarkdown;
