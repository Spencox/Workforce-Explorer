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
}
 
