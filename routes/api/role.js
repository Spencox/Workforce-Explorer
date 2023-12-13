// import modules
const role = require('express').Router();
const mysql = require('mysql2/promise');

// returns all roles 
role.get('/', async (req, res) => {
    // connection to mysql db
    const db = req.app.get('mysqlConnection').promise();

    try {
        const [result, fields] = await db.query(`
        SELECT 
            role.id, 
            role.title, 
            department.name AS department, 
            role.salary
        FROM role
        JOIN department ON role.department_id = department.id;
        `);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error executing get employees query");
    }
});

// returns list of roles to be used in questions
role.get('/options', async (req, res) => {
    // connection to mysql db
    const db = req.app.get('mysqlConnection').promise();

    try {
        const [result, fields] = await db.query('SELECT id, title, department_id FROM role');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error executing get role options");
    }
});

// posts new role to roles table
role.post('/', async (req, res) => {
    // connection to mysql db
    const db = req.app.get('mysqlConnection').promise();
    try {
        const [result, fields] = await db.query(`
        INSERT INTO role (title, salary, department_id ) VALUES (?, ?, ?)` , [req.body.title, req.body.salary, req.body.department_id]);
        res.status(201).send("Role created successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating role");
    }
});

module.exports = role;
