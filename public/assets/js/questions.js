// intro screen choices
const USER_OPTIONS = ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']

//let roleOptions = []

const toArray = (arr) => {
  console.log(arr);
  let options = [];
  arr.forEach(option => {
    options.push(option.name)
  })
  return options
}

module.exports = {
    
    employeeDataQuestions: [
        // dropdown menu for employee management program
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

    setDepartmentOptions: (currentDepartments) => {
      departmentOptions = currentDepartments;
    }

}
 