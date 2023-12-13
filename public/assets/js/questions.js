// intro screen choices
const USER_OPTIONS = ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role','Add Employee', 'Update Employee Role', 'Quit']

module.exports = {
  // dropdown menu for employee management program  
  employeeDataQuestions: [
      {
          type: 'list',
          message: 'What would you like to do:',
          name: 'request',
          choices: USER_OPTIONS.map(choice => ({ name: choice})),
          validate(answer) {
            if (answer.length < 1) {
              return 'Please select one of the options';
            }
            return true;
          },
      }
    ],
    // department question for create new department
    addDepartmentQuestion: [
      {
          type: 'input',
          message: 'What is the name of the department:',
          name: 'department',
          validate(answer) {
            if (answer.length < 1) {
              return 'Please enter a department name';
            }
            return true;
          },
      }
    ],
  // function to create question set for adding role to db
  addRole: async (departmentOptions) => {
  
    const addRoleQuestions = [
      {
        type: 'input',
        message: 'What is the name of the role:',
        name: 'role',
        validate(answer) {
          if (answer.length < 1) {
            return 'Please enter a valid role name';
          }
          return true;
        },
      },
      {
        type: 'input',
        message: 'What is the salary of the role:',
        name: 'salary',
        validate(answer) {
          if (answer.length < 4) {
            return 'Please enter a salary above 4 digits';
          }
          return true;
        }
      },
      {
        type: 'list',
        message: 'What department does the role belong to:',
        name: 'dept',
        choices: departmentOptions.map(choice => ({ name: choice.name})),
        filter(answer) {
          const deptId = departmentOptions.find(dept => dept.name === answer);
          return deptId ? deptId.id : null;
        }
      }
    ]
    return addRoleQuestions
  },
  // function to create question set for adding employee to db
  addEmployee: async (roleOptions, employeeOptions) => {
  
    const addEmployeeQuestions = [
      {
        type: 'input',
        message: 'What is the employee\'s first name:',
        name: 'firstName',
        validate(answer) {
          if (answer.length < 4) {
            return 'Please enter a salary above 4 digits';
          }
          return true;
        }
      },
      {
        type: 'input',
        message: 'What is the employee\'s last name:',
        name: 'lastName',
        validate(answer) {
          if (answer.length < 1) {
            return 'Please enter a last name > than 1 character';
          }
          return true;
        }
      },
      {
        type: 'list',
        message: 'What is the employee\'s role:',
        name: 'employeeRole',
        choices: roleOptions.map(choice => ({ name: choice.title})),
        filter(answer) {
          const roleId = roleOptions.find(role => role.title === answer);
          return roleId ? roleId.id : null;
        }
      },
      {
        type: 'list',
        message: 'Who is the employee\'s manager:',
        name: 'manager',
        choices: [...employeeOptions.map(choice => ({ name: `${choice.first_name} ${choice.last_name}` })), { name: 'None' }],
        filter(answer) {
          const managerId = employeeOptions.find(manager => `${manager.first_name} ${manager.last_name}` === answer);
          return managerId ? managerId.id : null;
        }
      }
    ]
    return addEmployeeQuestions
  },
  // function to get all active department options
  getDepartmentsOptions:  async (url) => {
      try {
          const response = await fetch(`${url}/department/options`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
          });
          const data = await response.json();
          //const optionsArr = await toArray(data);
          return data;
      } catch (error) {
          console.log(error);
      }
  },
  // function to get all active role options
  getRolesOptions:  async (url) => {
    try {
        const response = await fetch(`${url}/role/options`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
  },
  // function to get all active employee options
  getEmployeeOptions:  async (url) => {
    try {
        const response = await fetch(`${url}/employee/options`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
  },
  // function to generate questions for updating employee role
  updateEmployeeRole: async (roleOptions, employeeOptions) => {
        
    const updateEmployeeRoleQuestions = [
      {
        type: 'list',
        message: 'What employee would you like to update a role for:',
        name: 'employeeToUpdate',
        choices: employeeOptions.map(choice => ({ name: `${choice.first_name} ${choice.last_name}` })),
        filter(answer) {
          const managerId = employeeOptions.find(manager => `${manager.first_name} ${manager.last_name}` === answer);
          return managerId ? managerId.id : null;
        }
      },
      {
        type: 'list',
        message: 'What is the employee\'s new role:',
        name: 'updatedEmployeeRole',
        choices: roleOptions.map(choice => ({ name: choice.title})),
        filter(answer) {
          const roleId = roleOptions.find(role => role.title === answer);
          return roleId ? roleId.id : null;
        }
      },
    ]
    return updateEmployeeRoleQuestions
  }
}
 