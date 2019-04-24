var express = require('express');

var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var project = require('../controllers/project');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/create-project', auth, project.createProject);
router.get('/projects-list', auth, project.ProjectsList);

router.post('/orders', auth, project.GetOrders);

module.exports = router;
