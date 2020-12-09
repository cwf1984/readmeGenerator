const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user

const questions = ( ) => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How is your project installed?',
      name: 'installation',
    },
    {
      type: 'usage',
      message: "How is your program used?",
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Has anyone contributed to your project? If so, please include names.',
      name: 'contribution',
    },
    {
      type: 'list',
      message: 'What type of license are you using?',
      name: 'license',
      choices: ['Apache', 'MIT', 'Mozilla']
    },
    {
      type: 'input',
      message: 'How should users test your project?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'Please enter your github user name.',
      name: 'username',
    },
        {
      type: 'input',
      message: 'Please enter your email address.',
      name: 'email',
    },


]).then((response)=>{

  writeToFile(response);

})
}

function writeToFile(response) {

  fs.writeFile('newREADME.md', generateMarkdown(response), (err) => {
    err ? console.log(err) : console.log ('Success!');
  })

}

questions();

;


