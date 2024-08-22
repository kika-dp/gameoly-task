const Joi = require('joi');

const employeeSchema = Joi.object({
  name: Joi.string().min(3).required(),
  position: Joi.string().required(),
  department: Joi.string().required(),
  salary: Joi.number().positive().required(),
});

exports.validateEmployee = (data) => {
  return employeeSchema.validate(data);
};
