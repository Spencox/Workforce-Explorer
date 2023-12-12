// import inquirer for terminal questions
const inquirer = require('inquirer');
const questions = require('./public/assets/js/questions');
const apiCalls = require('./public/assets/js/index');

const BASE_URL = 'http://localhost:3001/api/';

  // start employee management system
  function init() {
    const programTitle = `Workforce Explorer`;
    console.log(programTitle);
    console.log(`Navigate and manage your workforce through simple command line interface:`);
    mainMenu();    
  }

  // main program flow
  const mainMenu = async () => {
    const { request } = await inquirer.prompt(questions.employeeDataQuestions);
    
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
        const { department } = await inquirer.prompt(questions.addDepartmentQuestion);
        await apiCalls.addDepartment(BASE_URL, department);
        mainMenu();
        break;
      case 'Quit':
        console.log("Quitting the program");
        break;
    } 
  }

  // Function call to initialize app
  init();
  







