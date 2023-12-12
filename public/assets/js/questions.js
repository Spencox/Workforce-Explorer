
module.exports = {
    // intro screen choices
    userOptions: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],

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
 