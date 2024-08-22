const Employee = require('../models/employeeModel');
const response = require('../utils/response');

exports.createEmployee = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const employee = new Employee(data);
    const savedEmployee = await employee.save();
    return response(200, savedEmployee);
  } catch (error) {
    return response(500, { error: 'Could not create employee' });
  }
};

exports.getEmployee = async (event) => {
  try {
    const employee = await Employee.findById(event.pathParameters.id);
    if (!employee) {
      return response(404, { error: 'Employee not found' });
    }
    return response(200, employee);
  } catch (error) {
    return response(500, { error: 'Could not retrieve employee' });
  }
};

exports.listEmployees = async () => {
  try {
    const employees = await Employee.find({});
    return response(200, employees);
  } catch (error) {
    return response(500, { error: 'Could not retrieve employees' });
  }
};

exports.updateEmployee = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const updatedEmployee = await Employee.findByIdAndUpdate(
      event.pathParameters.id,
      data,
      { new: true }
    );
    return response(200, updatedEmployee);
  } catch (error) {
    return response(500, { error: 'Could not update employee' });
  }
};

exports.deleteEmployee = async (event) => {
  try {
    await Employee.findByIdAndDelete(event.pathParameters.id);
    return response(200, { message: 'Employee deleted' });
  } catch (error) {
    return response(500, { error: 'Could not delete employee' });
  }
};
