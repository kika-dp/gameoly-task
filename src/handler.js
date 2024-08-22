const { routes } = require('./routes/employeeRoute');
const { authenticate } = require('./middleware/authMiddleware');
const connectDB = require('./config/dbConfig');

connectDB();

module.exports = Object.keys(routes).reduce((handlers, route) => {
  const [method, path] = route.split(' ');
  handlers[method.toLowerCase() + path.replace(/\//g, '')] = authenticate(routes[route]);
  return handlers;
}, {});
