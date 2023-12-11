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

module.exports = role;
