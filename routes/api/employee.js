const employee = require('express').Router();
const mysql = require('mysql2/promise');

employee.get('/', async (req, res) => {
    // connection to mysql db
    const db = req.app.get('mysqlConnection').promise();

    try {
        const [result, fields] = await db.query('SELECT * FROM employee');
        res.json(result);
        res.status(200);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error executing get employees query");
    }
});

module.exports = employee;
