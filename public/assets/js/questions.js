    // intro screen choices
    const USER_OPTIONS = ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']

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
        // dropdown menu for employee management program
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

    getDepartmentsOptions:  async (url) => {
        try {
            const response = await fetch(`${url}/department`, {
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
    
    roleOptions:  [
        'Sales Manager', 'Sales Rep', 'Marketing Manager', 'Marketing Spec', 'Financial Analyst', 'Accountant', 'HR Manager', 'HR Spec', 'IT Manager', 'Software Dev', 'Research Director', 'Research Asst', 'CS Manager', 'CS Rep'
      ]
}
 