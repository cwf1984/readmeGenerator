const inquirer = require('inquirer');
const fs = require('fs');
const newMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user

const questions = () =>
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

]);

function writeToFile(data) {

  questions(data).then( (data) => fs.writeFile('README.md', JSON.stringify(generateMarkdown(data)), (err) => {
    err ? console.log(err) : console.log ("Success!");
  }))

}

writeToFile();

// function init() {
//   newMarkdown(data);
//   writeToFile();
// }

// .then((data) => {
//   console.log(data);
// });
 
// function writeToFile(){
//   fs.writeFile(data.title + ".md", generateMarkdown(data), (err) =>
//  err ? console.log(err) : console.log ("Success!"))};

//  writeToFile();


// function writeToFile() {

//   questions().then((data) => fs.writeFile('README.md', JSON.stringify(generateMarkdown(data)), (err) => {
//     err ? console.log('Failed to add to file') : console.log('Success!');
//   }));
  
// }




// function init() {

// }


// init();
