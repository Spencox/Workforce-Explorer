const employee = require('express').Router();
const mysql = require('mysql2/promise');

employee.get('/', async (req, res) => {
    // connection to mysql db
    const db = req.app.get('mysqlConnection').promise();

    try {
        const [result, fields] = await db.query(`
        SELECT 
            employee.id, 
            employee.first_name,
            employee.last_name,
            role.title AS title,
            department.name AS department, 
            role.salary as salary,
            CONCAT(manager.first_name, ' ', manager.last_name) AS 'Manager'  
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN department ON role.department_id = department.id
        LEFT JOIN employee AS manager ON employee.manager_id = manager.id;
        `);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error executing get employees query");
    }
});

employee.get('/options', async (req, res) => {
    // connection to mysql db
    const db = req.app.get('mysqlConnection').promise();

    try {
        const [result, fields] = await db.query('SELECT id, first_name, last_name FROM employee');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error executing get employee options");
    }
});

employee.post('/', async (req, res) => {
    // connection to mysql db
    const db = req.app.get('mysqlConnection').promise();
    try {
        const [result, fields] = await db.query(`
        INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)` , [req.body.first_name, req.body.last_name, req.body.role_id, req.body.manager_id]);
        res.status(201).send("Employee created successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating role");
    }
});

employee.put('/:id', async (req, res) => {
    // connection to mysql db
    const db = req.app.get('mysqlConnection').promise();
    try {
        const updateQuery = `
        UPDATE employee
        SET role_id = ?
        WHERE id = ?
        `;
        await db.query(updateQuery, [
            req.body.role_id,
            req.params.id
        ]);
        res.status(204).send("Employee updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating role");
    }
});

module.exports = employee;
