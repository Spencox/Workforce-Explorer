// import inquirer for terminal questions
const inquirer = require('inquirer');
const questions = require('./public/assets/js/questions');
const apiCalls = require('./public/assets/js/index');
const { all } = require('./routes');

const BASE_URL = 'http://localhost:3001/api/';

const employeeDataQuestions = [
    // dropdown menu for employee management program
    {
        type: 'list',
        message: 'What would you like to do:',
        name: 'request',
        choices: questions.userOptions.map(choice => ({ name: choice})),
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
    mainMenu();    
  }
  const mainMenu = async () => {
    const { request } = await inquirer.prompt(employeeDataQuestions);
    
    // process user request
    switch(request) {
      case 'View All Employees':
        const employeeList = await apiCalls.getAllEmployees(BASE_URL)
        console.table(employeeList);
        mainMenu();
        break;
      case 'Add Employee':
        mainMenu();
        break;
      case 'Update Employee Role':
        mainMenu();
        break;
      case 'View All Roles':
        const rolesList = await apiCalls.getAllRoles(BASE_URL)
        console.table(rolesList);
        mainMenu();
        break;
      case 'Add Role':
        mainMenu();
        break;
      case 'View All Departments':
        const departmentsList = await apiCalls.getAllDepartments(BASE_URL)
        console.table(departmentsList);
        mainMenu();
        break;
      case 'Add Department':
        mainMenu();
        break;
      case 'Quit':
        console.log("Quitting the program");
        break;
    } 
  }

  // Function call to initialize app
  init();
  







