const config = require('config');

const courseRoutes = require('./courseRoutes');
const enrollmentRoutes = require('./enrollmentRoutes');

// env_config
const api = config.get('API_URL');

const routes = [
  // Course Routes
  {
    path: `${api}/courses`,
    handler: courseRoutes,
  },
  // Enrollment Routes
  {
    path: `${api}/enrollments`,
    handler: enrollmentRoutes,
  },

  // Common Routes
  {
    path: '/', // root route
    handler: (req, res) => {
      res.status(200).json({
        message: 'Welcome to our src.',
        success: true,
      });
    },
  },
  {
    path: '/*', // 404 response path
    handler: (req, res) => {
      res.status(404).json({
        message: `Error: 404, Url Not Found!`,
        success: false,
      });
    },
  },
  {
    path: '/*/:path*', // 404 response path
    handler: (req, res) => {
      res.status(404).json({
        message: `Error: 404, Url Not Found!`,
        success: false,
      });
    },
  },
];

module.exports = app => {
  routes.forEach(r => {
    if (r.path === '/') {
      app.get(r.path, r.handler);
    } else {
      app.use(r.path, r.handler);
    }
  });
};
