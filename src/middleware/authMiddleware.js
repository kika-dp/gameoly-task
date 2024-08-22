const jwt = require('jsonwebtoken');
const response = require('../utils/response');

const secretKey = process.env.JWT_SECRET || '@123AbcGameOly';

exports.authenticate = (handler) => async (event, context) => {
  const token = event.headers.Authorization;
  if (!token) {
    return response(403, { error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, secretKey);
    context.user = decoded.user;
    return handler(event, context);
  } catch (error) {
    return response(403, { error: 'Invalid token' });
  }
};
