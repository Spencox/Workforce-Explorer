// import modules
const inquirer = require('inquirer');
const questions = require('./public/assets/js/questions');
const apiCalls = require('./public/assets/js/index');

const BASE_URL = 'http://localhost:3001/api/';

  // start employee management system
  function init() {
    const programTitle = 
  ` 
 ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄    ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄          
▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌         
▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌ ▐░▌ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀          
▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌  ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌                   
▐░▌   ▄   ▐░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌░▌   ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌          ▐░█▄▄▄▄▄▄▄▄▄          
▐░▌  ▐░▌  ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░▌    ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌         
▐░▌ ▐░▌░▌ ▐░▌▐░▌       ▐░▌▐░█▀▀▀▀█░█▀▀ ▐░▌░▌   ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀█░█▀▀ ▐░▌          ▐░█▀▀▀▀▀▀▀▀▀          
▐░▌▐░▌ ▐░▌▐░▌▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌▐░▌  ▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌          ▐░▌                   
▐░▌░▌   ▐░▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌ ▐░▌ ▐░▌ ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄          
▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌  ▐░▌▐░▌          ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌         
 ▀▀       ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀    ▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀          
                                                                                                                         
      ▄▄▄▄▄▄▄▄▄▄▄  ▄       ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄               
     ▐░░░░░░░░░░░▌▐░▌     ▐░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌              
     ▐░█▀▀▀▀▀▀▀▀▀  ▐░▌   ▐░▌ ▐░█▀▀▀▀▀▀▀█░▌▐░▌          ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌              
     ▐░▌            ▐░▌ ▐░▌  ▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌              
     ▐░█▄▄▄▄▄▄▄▄▄    ▐░▐░▌   ▐░█▄▄▄▄▄▄▄█░▌▐░▌          ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌              
     ▐░░░░░░░░░░░▌    ▐░▌    ▐░░░░░░░░░░░▌▐░▌          ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌              
     ▐░█▀▀▀▀▀▀▀▀▀    ▐░▌░▌   ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░▌       ▐░▌▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀               
     ▐░▌            ▐░▌ ▐░▌  ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌          ▐░▌     ▐░▌                
     ▐░█▄▄▄▄▄▄▄▄▄  ▐░▌   ▐░▌ ▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌               
     ▐░░░░░░░░░░░▌▐░▌     ▐░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌              
      ▀▀▀▀▀▀▀▀▀▀▀  ▀       ▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀                  
  `;
    console.log(programTitle);
    console.log(`Navigate and manage your workforce through simple command line interface:`);
    mainMenu();    
  }

  // main program flow
  const mainMenu = async () => {
    // set drop down list arrays
    const departmentsAvailable = await questions.getDepartmentsOptions(BASE_URL);
    const rolesAvailable = await questions.getRolesOptions(BASE_URL);
    const employeesAvailable = await questions.getEmployeeOptions(BASE_URL);

    // get main menu questions
    const { request } = await inquirer.prompt(questions.employeeDataQuestions);
    
    // process user request
    switch(request) {
      case 'View All Employees':
        const employeeList = await apiCalls.getAllEmployees(BASE_URL)
        console.table(employeeList);
        mainMenu();
        break;
      case 'Add Employee':
        const employeeQuestions = await questions.addEmployee(rolesAvailable, employeesAvailable);
        const { firstName, lastName, employeeRole, manager } = await inquirer.prompt(employeeQuestions);
        await apiCalls.addEmployee(BASE_URL, firstName, lastName, employeeRole, manager);
        mainMenu();
        break;
      case 'Update Employee Role':
        const updateRoleQuestions = await questions.updateEmployeeRole(rolesAvailable, employeesAvailable);
        const { employeeToUpdate, updatedEmployeeRole } = await inquirer.prompt(updateRoleQuestions);
        await apiCalls.updateEmployeeRole(BASE_URL,employeeToUpdate, updatedEmployeeRole);
        mainMenu();
        break;
      case 'View All Roles':
        const rolesList = await apiCalls.getAllRoles(BASE_URL)
        console.table(rolesList);
        mainMenu();
        break;
      case 'Add Role':
        const roleQuestions = await questions.addRole(departmentsAvailable);
        const { role, salary, dept } = await inquirer.prompt(roleQuestions);
        await apiCalls.addRole(BASE_URL, role, salary, dept);
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
        console.log("Thank you for using Workforce Explorer");
        break;
    } 
  }

  // Function call to initialize app
  init();
  







