const express = require('express');
const routes = require('./routes');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(routes);

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'employee_manage_db'
    },
    console.log(`Connected to the employee_manage_db database.`)
  );

  // db.query(`
  // SELECT * FROM employee`, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.table(result);
  // });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  