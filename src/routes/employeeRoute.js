const {
    createEmployee,
    getEmployee,
    listEmployees,
    updateEmployee,
    deleteEmployee,
  } = require('../controllers/employeeController');
  
  module.exports.routes = {
    'POST /employee': createEmployee,
    'GET /employee/{id}': getEmployee,
    'GET /employees': listEmployees,
    'PUT /employee/{id}': updateEmployee,
    'DELETE /employee/{id}': deleteEmployee,
  };
  