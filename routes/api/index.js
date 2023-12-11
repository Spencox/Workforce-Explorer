const router = require('express').Router();

const departmentRoutes = require('./department');
const rolesRoutes = require('./role');
const employeeRoutes = require('./employee');


router.use('/department', userRoutes);
router.use('/role', userRoutes);
router.use('/employee', userRoutes);

module.exports = router;
