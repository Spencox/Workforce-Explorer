// import inquirer for terminal questions
const inquirer = require('inquirer');

const employeeDataQuestions = [
    // dropdown menu for employee management program
    {
        type: 'list',
        message: 'What would you like to do:',
        name: 'request',
        choices: [
          {
            name: 'View All Employees'
          },
          {
            name: 'Add Employee'
          },
          {
            name: 'Update Employee Role'
          },
          {
            name: 'View All Roles'
          },
          {
            name: 'Add Role'
          },
          {
            name: 'View All Departments'
          },
          {
            name: 'Add Department'
          },
          {
            name: 'Quit'
          },
        ],
        validate(answer) {
          if (answer.length < 1) {
            return 'Please select one of the options';
          }
          return true;
        },
    }
  ];

  // start log questions
  function init() {
    const programTitle = `Workforce Explorer`;
    console.log(programTitle);
    console.log(`Navigate and manage your workforce through simple command line interface:`);
    // start questions for logo input    
    inquirer.prompt(employeeDataQuestions)
    .then((employeeDataAnswers) => {
        console.log(employeeDataAnswers);
        if(employeeDataAnswers.request === "Quit") {
            console.log("Quitting the program")
        } else {
            init();
        }
    })
    .catch(console.log.bind(console));;
  }
  
  // Function call to initialize app
  init();
  







// const getNotes = () =>
//   fetch('/api/notes', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

// const saveNote = (note) =>
//   fetch('/api/notes', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(note)
//   });

// const deleteNote = (id) =>
//   fetch(`/api/notes/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });