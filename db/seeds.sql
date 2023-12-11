-- Inserting data into the department table
INSERT INTO department (name) VALUES
('Sales'),
('Marketing'),
('Finance'),
('Human Resources'),
('Information Technology'),
('Research and Development'),
('Customer Service');

-- Inserting data into the role table
INSERT INTO role (title, salary, department_id) VALUES
('Sales Manager', 75000.00, 1),
('Sales Rep', 50000.00, 1),
('Marketing Manager', 80000.00, 2),
('Marketing Spec', 55000.00, 2),
('Financial Analyst', 70000.00, 3),
('Accountant', 60000.00, 3),
('HR Manager', 85000.00, 4),
('HR Spec', 55000.00, 4),
('IT Manager', 90000.00, 5),
('Software Dev', 75000.00, 5),
('Research Director', 95000.00, 6),
('Research Asst', 60000.00, 6),
('CS Manager', 80000.00, 7),
('CS Rep', 50000.00, 7);

-- Inserting data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
-- Sales Department
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('David', 'Johnson', 2, 1),
('Emily', 'Brown', 2, 1),
('Michael', 'Williams', 2, 1),

-- Marketing Department
('Alice', 'Davis', 3, NULL),
('Bob', 'Wilson', 4, 7),
('Carol', 'Miller', 4, 7),
('Daniel', 'Anderson', 4, 7),
('Eva', 'Moore', 4, 7),

-- Finance Department
('Frank', 'Jones', 5, NULL),
('Grace', 'Clark', 6, 5),
('Harry', 'Lee', 6, 5),
('Isabel', 'Garcia', 6, 5),
('Jack', 'Taylor', 6, 5),

-- Human Resources Department
('Olivia', 'Moore', 7, NULL),
('Peter', 'Ward', 8, 11),
('Quinn', 'Fisher', 8, 11),
('Rachel', 'Cruz', 8, 11),
('Samuel', 'Baker', 8, 11),

-- Information Technology Department
('Tom', 'Evans', 9, NULL),
('Ursula', 'Lopez', 10, 16),
('Victor', 'Chen', 10, 16),
('Wendy', 'Nguyen', 10, 16),
('Xavier', 'Reyes', 10, 16),

-- Research and Development Department
('Yvonne', 'Murphy', 11, NULL),
('Zane', 'Ferguson', 12, 21),
('Abigail', 'Woods', 12, 21),
('Benjamin', 'Gordon', 12, 21),
('Catherine', 'Mills', 12, 21),

-- Customer Service Department
('Daniel', 'Hill', 13, NULL),
('Ella', 'Cooper', 14, 27),
('Felix', 'Perez', 14, 27),
('Grace', 'Russell', 14, 27),
('Henry', 'Watson', 14, 27);
