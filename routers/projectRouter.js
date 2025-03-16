const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Search projects
router.get('/search', projectController.SearchProjects);

// Create project routes
router.get('/create', projectController.CreateProjectForm);
router.post('/', (req, res, next) => {
  req.app.locals.upload.single('screenshot')(req, res, next);
}, projectController.CreateProject);

// Read project routes
router.get('/', projectController.Projects);
router.get('/:id', projectController.Project);

// Update project routes
router.get('/:id/edit', projectController.EditProjectForm);
router.post('/:id/update', (req, res, next) => {
  req.app.locals.upload.single('screenshot')(req, res, next);
}, projectController.UpdateProject);

// Delete project route
router.post('/:id/delete', projectController.DeleteProject);

module.exports = router;
