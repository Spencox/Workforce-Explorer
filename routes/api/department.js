// import modules
const department = require('express').Router();
const mysql = require('mysql2/promise');

// returns all departments 
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

// returns list of departments to be used in questions
department.get('/options', async (req, res) => {
    // connection to mysql db
    const db = req.app.get('mysqlConnection').promise();

    try {
        const [result, fields] = await db.query('SELECT id, name FROM department');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error executing get department options");
    }
});

// posts new department to departments table
department.post('/', async (req, res) => {
    // connection to mysql db
    const db = req.app.get('mysqlConnection').promise();
    const newDepartment = req.body.name;
    try {
        const [result, fields] = await db.query(`
        INSERT INTO department (name) VALUES (?)` , [newDepartment]);
        res.status(201).send("Department created successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating department ");
    }
});



module.exports = department;
