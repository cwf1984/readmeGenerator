const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user

const questions = 
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
    {//license
      type: 'list',
      message: 'What type of license are you using?',
      name: 'license',
      choices: ['Apache', 'Boost Software License', 'GNU (General Public License)', 'MIT', 'Mozilla']
    },
    {
      type: 'input',
      message: 'Has anyone contributed to your project? If so, please include names.',
      name: 'installation',
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

])
.then((response)=>{


  fs.appendFile('README.md', + "\n" + JSON.stringify(response), (err) => {
      err ? console.log(err) : console.log ("Added to File");
  });

});

// .then(response) () => {

  //create new function () that is called above 

// function to write README file
//  function writeToFile (('README.md', response) {
//     fs.appendFile('README.md', '\n', (err) => 
//     err ? console.log(err) : console.log('Added to file.'))
//  }
//  };




// function to initialize program
// function init() {



// };

// function call to initialize program
// init();
