# Workforce-Explorer

## Description
The command line program is designed to help business owners management their employees. It allows most of the CRUD operations through a node sever using express.js. Starting the CLI gives a simple user interface to manage employees, roles, and departments. All data is stored and retrieved through a local mysql database. I wanted to build this project to get a good understanding of express routes, async functions, and api endpoints. I was able to pull all three together to create a solid and reliable CLI tool. 


## Installation
Before cloning this repo a mysql data base will need to be set up and then connected to the program. This can be done by changing the login credentials in the `server.js` file. The mysql database and table schemas can be found in the `db` directory and can be run to set up the `employee_manage_db` that contains three tables 1) `department`, 2) `role`, and 3) `employee`. After mysql database is set up clone the repo, run `npm install` in the main directory and start the server with `npm start`.  

In a separate terminal navigate to home file directory for Workover-Explorer and type `node main.js` to start the CLI. 

## Usage

The employee management program is simple to use use and intuitive. It is structured with inquirer CLI interface questions that allow the user to perform the following actions:

1. View All Employees 
2. Add Employee
3. Update Employee Role
4. View All Roles
5. Add a Role
6. View All Departments
7. Add a Department 
8. Quit

Each selection contains details or options to execute the database manipulation or view. If you are done with the program simply select 8 and it will close out the program

## Credits

SQL FIDDLE. (n.d.). Retrieved from http://sqlfiddle.com/#!9/9b3ef3/15/0

Inquirer Package (version 8.2.4). (n.d.). Retrieved from https://www.npmjs.com/package/inquirer/v/8.2.4

MySQL2 Package. (n.d.). Retrieved from https://www.npmjs.com/package/mysql2

Git Bootcamp Content - SQL Activities. (n.d.). Retrieved from https://git.bootcampcontent.com/University-of-Texas-at-Austin/UTA-VIRT-FSF-PT-09-2023-U-LOLC/-/tree/main/12-SQL/01-Activities?ref_type=heads

Git Bootcamp Content - ORM Activities. (n.d.). Retrieved from https://git.bootcampcontent.com/University-of-Texas-at-Austin/UTA-VIRT-FSF-PT-09-2023-U-LOLC/-/tree/main/13-ORM/01-Activities?ref_type=heads

ASCII Art Generator. (n.d.). Retrieved from https://www.asciiart.eu/text-to-ascii-art

SEED DATA

OpenAI. (2023). Example Data for Database Seed Script. ChatGPT. https://www.openai.com

## Questions
GitHub Repo: https://github.com/Spencox/Workforce-Explorer   
Email: spencox@gmail.com

