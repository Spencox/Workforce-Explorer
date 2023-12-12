const department = require('express').Router();
const mysql = require('mysql2/promise');

department.get('/', async (req, res) => {
    // connection to mysql db
    const db = req.app.get('mysqlConnection').promise();

    try {
        const [result, fields] = await db.query('SELECT * FROM department');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error executing get employees query");
    }
});

department.get('/options', async (req, res) => {
    // connection to mysql db
    const db = req.app.get('mysqlConnection').promise();

    try {
        const [result, fields] = await db.query('SELECT name FROM department');
        console.log(fields);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error executing get department options");
    }
});

module.exports = department;
