// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title to your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
      },{
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is this good for?',
      },
      {
      type: 'input',
      name: 'contributors',
      message: 'Are there any contributors on?',
    },{
      type: 'input',
      name: 'test',
      message: 'Who where the testers?',
    },
      {
        type: 'list',
        name: 'licenses',
        message: 'Which licence did you chose?',
        choices: ["MIT","Apache","No license"],
      }

];



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    ).then((answers) => {
        console.log(answers)
        const data = generateMarkdown(answers);

    fs.writeFile('readme.md', data, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
    })
}

// Function call to initialize app
init();