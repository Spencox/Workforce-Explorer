const role = require('express').Router();
const mysql = require('mysql2/promise');

role.get('/', async (req, res) => {
    // connection to mysql db
    const db = req.app.get('mysqlConnection').promise();

    try {
        const [result, fields] = await db.query('SELECT * FROM role');
        console.table(result);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error executing get employees query");
    }
});

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
