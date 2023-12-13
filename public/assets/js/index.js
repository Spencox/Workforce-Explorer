const mysql = require('mysql2/promise');

module.exports = {
    // use employee GET endpoint to return all values    
    getAllEmployees:  async (url) => {
        try {
            const response = await fetch(`${url}/employee`, {
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
     // use department GET endpoint to return all values    
     getAllDepartments:  async (url) => {
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

    // use department POST endpoint to create new department    
    addDepartment:  async (url, newDepartment) => {
        const postBody = {
            name: newDepartment
        }
        try {
            const response = await fetch(`${url}/department`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(postBody)
            });
            return response.status;
        } catch (error) {
            console.log(error);
        }
    },
     // use role GET endpoint to return all values    
     getAllRoles:  async (url) => {
        try {
            const response = await fetch(`${url}/role`, {
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
      // use role POST endpoint to create new role    
      addRole:  async (url, newRole, newSalary, newDept) => {
        const postBody = {
            title: newRole,
            salary: newSalary,
            department_id: newDept
        }
        try {
            const response = await fetch(`${url}/role`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(postBody)
            });
            return response.status;
        } catch (error) {
            console.log(error);
        }
    },
     // use employee POST endpoint to create new employee
     addEmployee:  async (url, newFirstName, newLastName, newRole, newManager) => {
        const postBody = {
            first_name: newFirstName,
            last_name: newLastName,
            role_id: newRole,
            manager_id: newManager
        }
        try {
            const response = await fetch(`${url}/employee`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(postBody)
            });
            return response.status;
        } catch (error) {
            console.log(error);
        }
    },

     // use employee POST endpoint to create new employee
     updateEmployeeRole:  async (url, employee, updatedRole) => {
        const postBody = {
            role_id: updatedRole
        }
        try {
            const response = await fetch(`${url}/employee/${employee}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(postBody)
            });
            return response.status;
        } catch (error) {
            console.log(error);
        }
    },
}
 